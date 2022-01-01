const Fs = require('fs'), Path = require('path'), Strip = require('strip-comments')
let log = console.log
let requireMatch = /require\('(.+)'\)/g


module.exports = function Dependencies (entry) {
	this.entry = require.resolve(entry)
	let dependencies = GetDependencies(this.entry)

	Object.defineProperty(this, 'files', {get: () => {
		return Object.keys(dependencies.files).map(f=>{return Path.relative(Path.resolve(entry), f)})
	}, enumerable: true})
	Object.defineProperty(this, 'packages', {get: () => {return dependencies.packages}, enumerable: true})

}

function GetDependencies (start) {
	let dependencies = {}, packages = [], dir = Path.dirname(start)
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
	path = require.resolve(Path.resolve(path))
	let file = {
		folder: Path.dirname(path),
		path: path,
		contents: Fs.readFileSync(path, 'utf-8'),
		dependencies: {
			files: [],
			packages: []
		}
	}

	let matches = Strip(file.contents).match(requireMatch)
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
