'use strict'
require('@js/core')
let Fs = require('fs')
let Path = require('path')
let Uglify = require("uglify-es")
let minifyOptions={compress:true,output:{quote_style:1}}

module.exports = function(grunt) {
	grunt.registerTask('alias', 'Alias release', function() {
		let options = this.options({
			local: false,
			global: false,
			name: grunt.Get('package.alias', ''),
			files: [],
			folders: []
		})

		console.dir(grunt.package)
		console.dir(options)

		if (options.local) {


		}
		if (options.global) {


		}


	})
}