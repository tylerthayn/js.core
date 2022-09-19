/* CLI Usage
* >build [path/to/folder/or/build]
*	--config=path/to/config.file
*	--output=path/to/out.file
*	--log=path/to/log.file
*/
require('@js/core')
let Fs = require('fs'), Path = require('path')
let Builder = require('./Builder')

let options = {
	builds: []
}


process.argv.slice(2).forEach(arg => {
	if (arg.startsWith('--config')) {
		Extend(options, JSON.parse(Fs.readFileSync(Path.resolve(arg.split('=')[0]), 'utf-8')))
	}
})

if (options.builds.length == 0) {
	options.builds = FindBuilds()
}


logj(options)

//let builder = new Builder(options)


function FindBuilds (path = process.cwd()) {
	let builds = []
	Fs.readdirSync(path, {withFileTypes: true}).forEach(entry => {
		if (entry.isFile() && entry.name.endsWith('.build')) {
			builds.push(Path.resolve(path, entry.name))
		}
	})
	return builds
}
