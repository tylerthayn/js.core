'use strict'

module.exports = function(grunt) {
	let pkg = require('./package.json')
	let make = {
		default: {
			options: {
				src: './src',
				dir: './dist',
				file: 'core.js',
				min: 'core.min.js'
			}
		}
	}
	let readme = {
		default: {
			files: {
				'README.md': ['src/*.js', 'src/**/*.js']
			}
		}
	}

	grunt.initConfig({make: make, readme: readme})
	grunt.loadTasks('tasks')
}
