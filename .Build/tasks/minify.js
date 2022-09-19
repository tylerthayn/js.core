'use strict'
let Fs = require('fs')
let Path = require('path')
let Uglify = require("uglify-es")

module.exports = function(grunt) {
	grunt.registerMultiTask('minify', 'Minify source file', function() {
		let options = this.options({})

		let contents = grunt.file.read(options.src)
		grunt.file.write(options.file, Uglify.minify(grunt.file.read(options.src), options.uglify).code)

		//console.log(options.src)
		//console.dir(options)
//		console.dir(options)
//console.dir(grunt)

		/*
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
		*/
	})

}