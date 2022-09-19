
module.exports = function(grunt) {
	grunt.initConfig({
		amd: {
			default: {
				options: {
					src: 'index.js',
					dest: 'index.js',

					name: '@tyler.thayn/js.core',
					dependencies: {
					},
				}
			}
		},
		clean: {
			options: {
				paths: [
					'.Build/tmp',
					'index.js',
					'docs'
				]
			}
		},
		concat: {
			default: {
				files: {
					'index.js': [
							'src/index.js',
							'src/global.js',
							'src/Define.js',
							'src/Object/Define.js',
							'src/Extend.js',
							'src/*.js',
							'src/**/*.js',
							'!src/*Copy*.js',
							'!src/**/*Copy*.js'

					]
				},
				options: {
					separator: '\n\n',
					listFile: false
				}
			}
		},
		lodash: {
			options: {
				src: require.resolve('lodash'),
				file: 'src/lodash.js'
			}
		},
		minify: {
			lodash: {
				options: {
					src: 'src/lodash.js',
					file: 'src/lodash.min.js'
				}
			},
			options: {
				uglify: {
					compress: true,
					output: {
						quote_style: 1,
						comments: /@license/
					}
				}
			}
		},
		readme: {
			options: {
				output: 'README.md',
				template: '.Build/templates/readme'
			}
		},
		rev: {}
	})

	grunt.loadTasks('.Build/tasks')
	grunt.registerTask('default', ['clean', 'concat', 'amd']);
}
