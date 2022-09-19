
module.exports = function(grunt) {
	grunt.initConfig({
		alias: {
			options: {
				name: '@js/core',
				local: true,
				global: true,
				files: ['index.js', 'package.json', 'README.md', 'LICENSE'],
				folders: ['docs']
			}
		},
		amd: {
			default: {
				options: {
					src: 'src/index.js',
					dest: 'index.js',

					name: '@js/core',
					dependencies: {
					},
				}
			}
		},
		clean: {
			options: {
				paths: [
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
				template: '.Build/templates/readme'
			}
		},
		rev: {}
	})

	grunt.loadTasks('.Build/tasks')
	grunt.registerTask('default', ['clean', 'concat', 'amd']);
}
