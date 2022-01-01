'use strict'
const Fs = require('fs'), Path = require('path'), Strip = require('strip-comments')
let log = console.log
let requireMatch = /require\('(.+)'\)/g

let entry = Path.resolve('./src/index.js')
let dependencies = Dependencies(entry)
log(Object.keys(dependencies.files).map(f=>{return Path.normalize(Path.relative(Path.dirname(entry), f))}))
log(dependencies.packages)

function Dependencies (start) {
	let dependencies = {}, packages = []

	dependencies[start] = ProcessFile(start)

	let toProcess = [start]
	while(toProcess.length > 0) {
		let file = ProcessFile(toProcess.shift())
		dependencies[file.path] = file
		file.dependencies.packages.forEach(p => {
			if (!packages.includes(p)) {
				packages.push(p)
			}
		})
		file.dependencies.files.forEach(f => {
			if (!Object.keys(dependencies).includes(f) && !toProcess.includes(f)) {
				toProcess.push(f)
			}
		})
	}
	return {files: dependencies, packages: packages}

}

function ProcessFile (path) {
	let file = {
		folder: Path.dirname(Path.resolve(path)),
		path: require.resolve(path),
		contents: Strip(Fs.readFileSync(require.resolve(path), 'utf-8')),
		dependencies: {
			files: [],
			packages: []
		}
	}

	let matches = file.contents.match(requireMatch)
	matches !== null && matches.forEach(m => {
		m = m.split('(').pop().split(')').shift().replace(/('|")/g, '')
		if (m.startsWith('.') || m.startsWith('/')) {
			let _file = Path.isAbsolute(m) ? m : Path.resolve(file.folder, m)
			if (!file.dependencies.files.includes(_file)) {
				file.dependencies.files.push(_file)
			}
		} else {
			if (!file.dependencies.packages.includes(m)) {
				file.dependencies.packages.push(m)
			}
		}
	})
	return file
}
