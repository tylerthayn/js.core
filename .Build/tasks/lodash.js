'use strict'
let Fs = require('fs')
let Path = require('path')
let Uglify = require("uglify-es")
let minifyOptions={compress:true,output:{quote_style:1}}

module.exports = function(grunt) {
	grunt.registerTask('lodash', 'Minify source file', function() {
		let options = this.options({})
		grunt.file.write(options.file, grunt.file.read(options.src).replace(/var _ = run/, '_ = run'))
	})
}