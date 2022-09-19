'use strict'
let Fs = require('fs')
let Path = require('path')
let Uglify = require("uglify-es")
let minifyOptions={compress:true,output:{quote_style:1}}

let log = console.dir
module.exports = function(grunt) {
	grunt.registerMultiTask('amd', 'AMD Wrapper', function() {
		let options = this.options({dependencies: []})


		let defineStatement = 'define('
		if (options.name && options.name != '') {
			defineStatement += `'${options.name}', `
		}
		if (options.dependencies) {
			defineStatement += '[' + Object.keys(options.dependencies).map(d => `'${d}'`).join(', ') + '], '
		}
		defineStatement += 'factory)'
		let nodeRequires = Object.keys(options.dependencies).map(d => `require('${d}')`).join(', ')
		let args = Object.values(options.dependencies).join(', ')
		grunt.file.write(options.dest, `(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define('@js/core', ['lodash'], factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('lodash'))
	} else {
		factory(_)
	}
}(function (_) {

${grunt.file.read(options.src).replace(/^/mg, '\t')}

}))`)


	})

}