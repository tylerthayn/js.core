require('@js/core')
const ChildProcess = require('child_process')
const Fs = require('fs'), Path = require('path')

module.exports = function(grunt) {
	grunt.registerTask('readme', 'Generate readme documentation', function() {
		let done = this.async()

		let options = this.options({template: ''})
		let template = require(Path.resolve(options.template))

		let jsdoc = Path.resolve(Path.dirname(process.argv[0]), "jsdoc.cmd")
		let cp = ChildProcess.spawn(jsdoc, ['-c', Path.resolve('./jsdoc.conf'), '-X'])
		let data = ''
		cp.stdout.on('data', chunk => {data += chunk.toString()})
		cp.on('close', code => {
			grunt.file.write('./.Build/tmp/ast', data)
			template(JSON.parse(data), done)
		})

	})
}
