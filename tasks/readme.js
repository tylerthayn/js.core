require('../src')
const Fs = require('fs'), Path = require('path')
const ejs = require('ejs')
const Prototypes = require('./scripts/prototypes.js')

let { execFileSync } = require('child_process')

module.exports = function(grunt) {
	let pkg = require(Path.resolve('./package.json'))
	let template = Fs.readFileSync(Path.resolve(__dirname, 'templates/README.ejs'), 'utf-8')

	grunt.registerTask('readme', 'Generate package readme file', function() {
		let options = this.options({})

		let contents = ''
		_contents = Prototypes()
		Object.keys(_contents).length > 0 && Object.keys(_contents).sort().forEach(_class => {
			_contents[_class].length > 0 && _contents[_class].sort().forEach(member => {
				member = member.startsWith('log') ? member+'()' : member
				contents += `${_class == 'global' ? '' : _class+'.'}${member}${member.toString() == member.toString().CamelCase(true) ? '()' : ''}  \n`
			})
			contents += '\n'
		})
		contents = contents.replace(/\n\n\n/g, '\n\n')

		let readme = ejs.render(template, {pkg: pkg, contents: contents})
		Fs.writeFileSync('./README.md', readme, 'utf-8')

	})

}
