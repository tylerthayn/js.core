'use strict'
const Fs = require('fs'), Path = require('path'), Strip = require('strip-comments'), UglifyJS = require("uglify-es")
let minifyOptions={compress:true,output:{quote_style:1}}
let requireMatch = /require\('(.+)'\)/g

module.exports = function(grunt) {
	let pkg = require(Path.resolve('./package.json'))

	grunt.registerMultiTask('make', 'Make package distributable', function() {
		let options = this.options({}), code = [], source = ''
		let sources = GetSources(options)
		sources.forEach((source) => {
			grunt.log.write('Parsing source: '+source)
			let src = source == 'lodash' ? Lodash() : GetSource(source)
			code += src + '\r\n\r\n'
			grunt.log.ok()
		})

		code = code.replace(/const lodash\s*=.*(\r\n)+/g, '')
		code = `(function (factory) {\r\n\tif (typeof define === 'function' && define.amd) {\r\n\t\tdefine('org.tts.js.core', [], factory)\r\n\t} else if (typeof module === 'object' && module.exports) {\r\n\t\tmodule.exports = factory()\r\n\t} else {\r\n\t\tfactory()\r\n\t}\r\n}(function () {\r\n\r\n\t` + code.replace(/\r\n/g, '\r\n\t') + `\r\n\r\n}))`

		grunt.log.write('Generating dist folders...')
		try {Fs.mkdirSync(Path.resolve(options.dir), {recursive: true})} catch (e) {}
		grunt.log.ok()

		grunt.log.write('Creating release file...')
		//Fs.writeFileSync(Path.resolve(options.dir, pkg.version, options.file), code, 'utf-8')
		Fs.writeFileSync(Path.resolve(options.dir, options.file), code, 'utf-8')
		grunt.log.ok()

		grunt.log.write('Creating minified file...')
		//Fs.writeFileSync(Path.resolve(options.dir, pkg.version, options.min), UglifyJS.minify(code, minifyOptions).code, 'utf-8')
		Fs.writeFileSync(Path.resolve(options.dir, options.min), UglifyJS.minify(code, minifyOptions).code, 'utf-8')
		grunt.log.ok()

	})


	function Lodash () {
		let lodash = Fs.readFileSync(require.resolve('lodash'), 'utf8')
		lodash = lodash.replace('define(', 'define(\'lodash\', [], ').replace(/var\s*_\s*=\s*runIn/i, '_ = runIn')
		return `!(function () {\r\n\t` + lodash + `\r\n\tglobal.lodash = _.noConflict()\r\n}())\r\n`
		//return UglifyJS.minify(`!(function () {\r\n\t` + lodash + `\r\n\tglobal.lodash = _.noConflict()\r\n}())\r\n`, minifyOptions).code
	}

	function GetSource (source) {
		source = Path.resolve(__dirname, source.endsWith('.js') ? source : source + '.js')
		let src = Fs.readFileSync(source, 'utf-8')
		return src.replace(requireMatch, '').trim().replace(/(\r\n)+\t*(\r\n)+/g, '\r\n').trim()
	}

	function GetSources (options) {
		grunt.log.write('Parsing index for sources...')
		let index = Fs.readFileSync(Path.resolve(options.src, 'index.js'), 'utf-8')
		index = Strip(index.trim().replace(/(\r\n)+\t*(\r\n)+/g, '\r\n'))
		let sources = index.match(/require\('(.+)'\)/g).map(source => {
			return source.replace(/require\('/, '').replace(/'\)/, '').replace('./', '.'+options.src+'/')
		})
		grunt.log.ok()
		return sources
	}

}