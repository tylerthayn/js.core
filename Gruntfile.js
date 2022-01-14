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
	let install = {
		default: {
			options: {
				pkgName: '@js/core',
				files: {
					'dist/core.js': 'core.js',
					'dist/core.min.js': 'core.min.js'
				},
				pkg: {
					name: '@js/core',
					main: 'core.js'
				}
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
	let revRoll = {}

	grunt.initConfig({install: install, make: make, readme: readme, revRoll: revRoll})
	grunt.loadTasks('tasks')
}
