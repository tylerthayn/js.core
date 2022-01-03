'use strict'
const Fs = require('fs'), Path = require('path')
let findNodeModules = require('find-node-modules')

module.exports = function(grunt) {
	let pkg = require(Path.resolve('./package.json'))

	let global = Reflect.has(process.env, 'npm_config_argv') ? process.env.npm_config_argv.match(/"(--global|-g)"/) != null : false
	let globalFolder = Reflect.has(process.env, 'npm_config_prefix') ? process.env.npm_config_prefix : process.env.NODE_PATH.split(/(;|:)/g).pop()
	let installFolder = Path.resolve(global ? globalFolder : findNodeModules('../').length == 0 ? globalFolder : findNodeModules('../')[0])

	grunt.registerMultiTask('install', 'Alternative Install', function() {
		let options = this.options({}), code = [], source = ''
		console.log(installFolder)
		try  {Fs.mkdirSync(Path.resolve(installFolder, options.pkgName), {recursive: true})} catch (e) {}
		Object.keys(options.files).forEach(file => {
			Fs.copyFileSync(Path.resolve('./'+file), Path.resolve(installFolder, options.pkgName, options.files[file]))
		})
		Object.keys(options.pkg).forEach(key => {
			pkg[key] = options.pkg[key]
		})
		Fs.writeFileSync(Path.resolve(installFolder, options.pkgName, 'package.json'), JSON.stringify(pkg, null, 4), 'utf-8')
//		let installDir = Path.resolve(global ? process.env.npm_config_prefix : findNodeModules()[0], 'node_modules', options.pkgName)
//		console.log(installDir)
	})

}