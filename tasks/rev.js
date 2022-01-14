'use strict'
const Fs = require('fs'), Path = require('path')

module.exports = function(grunt) {
	let pkg = require(Path.resolve('./package.json'))

	grunt.registerTask('rev', 'Update the package version', function() {
		grunt.log.writeln('Current Version: '+pkg.version)
		let versions = pkg.version.split('.')
		if (grunt.task.current.flags.Has('patch') && grunt.task.current.flags.patch === true) {
			grunt.log.writeln('\tUpdating patch version')
			versions[2]++
		}
		if (grunt.task.current.flags.Keys().length == 0 || (grunt.task.current.flags.Has('minor') && grunt.task.current.flags.minor === true)) {
			grunt.log.writeln('\tUpdating minor version')
			versions[1]++
		}
		if (Reflect.has(grunt.task.current.flags, 'major') && grunt.task.current.flags.major === true) {
			grunt.log.writeln('\tUpdating major version')
			versions[0]++
		}
		pkg.version = versions.join('.')
		grunt.log.writeln('New Version: '+pkg.version)
		Fs.writeFileSync(Path.resolve('./package.json'), JSON.stringify(pkg, null, 4), 'utf-8')
	})

}