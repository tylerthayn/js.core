require('@js/core')

let Fs = require('fs')
let Path = require('path')
let StripComments = require('strip-comments')
let UglifyJS = require("uglify-es")


let defaults = {
	dependencies: {

	},
	indentChar: '\t',
	indent: 0,
	separator: '\n\n',
	include: {
		recurse: false,
		filters: [/\.js$/],
		minify: false,
		listFile: true
	},
	minifyOptions: {
		compress: true,
		output: {
			quote_style:	1,
			comments: '@license'
		}
	},
	name: '',
	output: 'build.js'
}


let Operations = [
	'Build',
	'Include',
	'Write',

	'Minify',
	'Beautify',
	'Validate',

	'Output'
]

function Builder (target) {
	this.root = Path.dirname(__dirname, '../')
	this.buildFile = this.Path('.Build/targets/'+target+'.build')
	this.pkg = require(Path.join(this.root, 'package.json'))
	this.tmp = '.Build/tmp'

	this.options = Extend({}, defaults, {name: this.pkg.name})
	this._targets = []
	this._sources = []
	this._content = []
	this._stale = false

	this.EnsureFolder(this.tmp)

	this._build = require(Path.resolve(this.root, this.buildFile))
	if (this._build.config.output.startsWith('`')) {this._build.config.output=eval(this._build.config.output)}
	Extend(this.options, this._build.config)

	return this
}

Builder.prototype.Start = function () {
	if (this.IsStale()) {
		this._build.build.call(this)
		return this._output
	} else {
		return this.ReadFile(this.options.output)
	}
}

Builder.prototype.Build = function (target) {
	this._targets.push(target)
	let builder = new Builder(target)
	this._content.push(builder.Start())
	return this
}

Builder.prototype.EnsureFolder = function (folder) {
	try {
		Fs.mkdirSync(this.Path(folder), {parents: true})
	} catch (e) {}
	return this
}

Builder.prototype.FileList = function (paths, filters = [], recurse = true) {
	let list = []
	paths = typeof paths === 'string' ? [paths] : paths
	paths.forEach(path => {
		let stat = Fs.statSync(this.Path(path))
		if (stat.isFile()) {
			list.push(path)
		}
		if (stat.isDirectory()) {
			this.FolderContents(path, recurse).forEach(file => {
				list.push(file)
			})
		}
	})
	filters.forEach(filter => {
		list = list.filter(file => filter.test(file))
	})
	return list
}

Builder.prototype.FolderContents = function (folder, recurse = true) {
	let contents = []
	Fs.readdirSync(this.Path(folder), {withFileTypes: true}).forEach(entry => {
		if (entry.isFile()) {
			contents.push(Path.join(folder, entry.name))
		}
		if (entry.isDirectory()) {
			this.FolderContents(Path.join(folder, entry.name)).forEach(file => {
				contents.push(file)
			})
		}
	})
	return contents
}

Builder.prototype.Include = function (path, options = {}) {
	options = Extend({}, this.options.include, options)
	path = Path.isAbsolute(path) ? path : this.Path(path)

	let stat = Fs.statSync(this.Path(path))
	if (stat.isFile()) {
		this._sources.push(path)
		let contents = Fs.readFileSync(path, 'utf-8')

		if (options.minify) {
			contents = UglifyJS.minify(contents, options.minify).code.trim()
		}
		if (options.listFile) {
			contents = '// ' + path.replace(/\\+/g, '/') + '\n' + contents
		}
		this._content.push(contents.trim())
	}
	if (stat.isDirectory()) {
		this.FileList(path, options.filters, options.recurse).forEach(file => {
			this.Include(file, options)
		})
	}

	return this
}

Builder.prototype.Init = function (options = {}) {
	Extend(this.options, options)
	if (this.options.output.startsWith('`')) {
		this.options.output = eval(this.options.output)
	}

	this._stale = this.IsStale()
	return this
}

Builder.prototype.Minify = function (contents, options) {
	return UglifyJS.minify(contents, this.Value(this.minifyOptions, options)).code.trim()
}

Builder.prototype.Output = function () {
	this.OutputDetails()
	this._output = this._content.join(this.options.separator)
	this.WriteFile(this.options.output, this._output, 'utf-8')
	return this
}

Builder.prototype.OutputDetails = function () {
	let details = {
		targets: this._targets,
		sources: this._sources,
		output: this.options.output
	}
	this.WriteFile(this.Temp(this.options.name+'.details'), JSON.stringify(details, null, 4))
	return this
}

Builder.prototype.Path = function (path) {
	let _path = Path.relative(this.root, Path.join(this.root, path))
	return _path == '' ? './' : _path
}

Builder.prototype.ReadDetails = function () {
	try {
		return JSON.parse(this.ReadFile(this.Temp(this.options.name+'.details')))
	} catch (e) {}
	return null
}

Builder.prototype.ReadFile = function (file) {
	return Fs.readFileSync(file, 'utf-8')
}

Builder.prototype.Temp = function (file) {
	return this.Path(Path.join(this.tmp, file))
}

Builder.prototype.IsStale = function () {
	let details = this.ReadDetails()
	if (details == null) {
		return true
	}

	let lastBuild = null
	try {
		lastBuild = Fs.statSync(details.output).mtime
	} catch (e) {return true}

	for (i=0; i<details.sources.length; i++) {
		try {
			if (lastBuild < Fs.statSync(details.sources[i]).mtime) {
				return true
			}
		} catch (e) {
			return true
		}
	}

	for (i=0; i<details.targets.length; i++) {
		let builder = new Builder(details.targets[i])
		if (builder.IsStale()) {
			return true
		}
	}

	return false
}

Builder.prototype.Value = function (defaultValue, value) {
	if (typeof value === 'undefined' || value === null) {
		return defaultValue
	}
	return value
}

Builder.prototype.Wrap = function (pre, post) {
	for (i=0; i<this._content.length; i++) {
		this._content[i] = this._content[i].replace(/^/mg, '\t')
	}
	this._content.unshift(pre.trim())
	this._content.push(post.trim())
	return this
}

Builder.prototype.Write = function (data) {
	this._content.push(data.trim())
	return this
}

Builder.prototype.WriteFile = function (file, contents) {
	this.EnsureFolder(Path.dirname(this.Path(file)))
	Fs.writeFileSync(this.Path(file), contents, 'utf-8')
	return this
}





module.exports = Builder
