require('@js/core')
let Fs = require('fs')
let Path = require('path')
let StripComments = require('strip-comments')
let UglifyJS = require("uglify-es")


let defaults = {
	build: '',

	output: '../Build.js',
	name: null,
	deps: {},
	defaultLoader: false,
	tmpFolder: './.Build/tmp',

	include: {
		indentChar: '\t',
		indent: 0,
		listFile: true,
		separator: '\n\n',

		recurse: false,
		extensions: ['.js']
	},

	bundle: {
		sourceIndent: '  ',
		indentChar: '\t',
		indent: 0,
		listFile: true,
		separator: '\n\n',

		minify: false,
		minifyOptions: {compress:true,output:{quote_style:1}}
	},
	minifyOptions: {compress:true,output:{quote_style:1}}
}

function Builder (options) {
	this.options = Extend({}, defaults, options)
	this.sources = []
	this.content = []

	try {Fs.mkdirSync(this.options.tmpFolder, {parents: true})} catch (e) {}

	return this
}

Builder.prototype.Bundle = function (module, options) {
	log(`Bundle: ${module}`)

	options = Extend({}, this.options.bundle, options || {})


	let path = require.resolve(module)
	let contents = Fs.readFileSync(path, 'utf-8')

	let preamble = ExtractPreamble(contents)
	log(preamble)
	process.exit()

	let defineCall = contents.match(/define\((.+?)\(/)
	if (Array.isArray(defineCall)) {
		if (defineCall[1].includes(',')) {
			let params = defineCall[1].split(',')
			//TODO
		} else {
			contents = contents.replace(defineCall[0], `define('${module}', [], ${defineCall[1]}(`)
		}
	} else {
		//TODO
	}

	let indent = options.indentChar.Repeat(options.indent)
	if (options.minify) {
		this.content.push(indent + UglifyJS.minify(contents, options.minifyOptions).code.trim() + options.separator)
	} else {
		contents = contents.trim().replace(new RegExp(`^(${options.sourceIndent})`, 'gm'), options.indentChar).replace(/\r*\n\r*/g, '\n'+indent)
		this.content.push(contents + options.separator)
	}

}


Builder.prototype.Config = function (config = {}) {
	Extend(this.options, config)
	logj(this.options)
	return this
}

Builder.prototype.Include = function (...files) {
	let options = Extend({}, this.options.include, typeof files.last === 'object' ? files.pop() : {})

	files.forEach(file => {
		if (this.sources.includes(Path.resolve(file))) {
			console.log(`Warning: file '${file}' already included`)
			return
		}

		this.sources.push(Path.resolve(file))
		console.log(`Include(${file})`)
		let contents = ''
		if (options.listFile) {
			contents += '// ' + Path.relative(Path.resolve('./'), Path.resolve(file)).replace(/\\+/g, '/') + '\n'
		}
		contents += Fs.readFileSync(Path.resolve(file), 'utf-8')
		let indent = options.indentChar.Repeat(options.indent)
		contents = contents.trim().replace(/^/mg, indent)
		this.content.push(contents + options.separator)
	})

	return this
}

Builder.prototype.IncludeFolder = function (folder, options = {}) {
	options = Extend({}, this.options.include, options)

	Fs.readdirSync(Path.resolve(folder), {withFileTypes: true}).forEach(entry => {
		if (entry.isDirectory() && options.include.recurse) {
			this.IncludeFolder(Path.resolve(folder, entry.name))
		}
		if (entry.isFile()) {
			if (!options.extensions || options.extensions.includes(Path.extname(entry.name))) {
				this.Include(Path.join(folder, entry.name))
			}
		}
	})
}

Builder.prototype.Log = function (s) {
	if (typeof s === 'object') {
		log(JSON.stringify(s, null, 4))
	} else {
		log(s)
	}
}



Builder.prototype.Build = function (build) {
	if (this.options.build != '') {
		build = Path.join(Path.dirname(this.options.build), build.replace(/(\.build)*$/, '.build'))
	} else {
		this.options.build = build
	}
	require(Path.resolve(build))(this)
}

Builder.prototype.Write = function (s) {
	this.content.push(s)
	return this
}

Builder.prototype.Output = function (test = false) {
	let output = this.options.output == null || test ? process.stdout : Fs.createWriteStream(Path.resolve(this.options.output), 'utf-8')
	function Write (s) {
		output.write(s.replace(/\r/g, ''))
	}
	let defineName = this.options.name != null ? `'${this.options.name}', ` : ''
	let defineDeps = JSON.stringify(Object.values(this.options.deps)).replace(/"/g, "'")
	let nodeDeps = Object.values(this.options.deps).map(l => `require('${l}')`).join(', ')
	let defaultFactory = this.options.defaultLoader ? `factory(${Object.keys(this.options.deps).join(', ')})` : `throw new Error('Library must be loaded via node or requirejs')`
	let factoryArgs = Object.keys(this.options.deps).join(', ')

	Write(`(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(${defineName}${defineDeps}, factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(${nodeDeps})
	} else {
		${defaultFactory}
	}
}(function (${factoryArgs}) {

	${this.content.join('\n').trim()}

}))
`)

	if (output.fd > 1) {
		output.close()
	}

}

Builder.prototype.Temp = function (file) {
	return Path.join(this.options.tmpFolder, file)
}

Builder.prototype.ExtractPreamble = function (source) {
	let match = source.match(/\/\*.+?\*\//s)
	if (match != null) {
		return match[0]
	}
	return null
}

Builder.prototype.Minify = function (contents, options) {
	options = typeof options !== 'undefined' ? options : this.options.minifyOptions
	return UglifyJS.minify(contents, options).code.trim()
}

Builder.prototype.WriteTempFile = function (file, contents) {
	Fs.writeFileSync(Path.join(this.options.tmpFolder, file), contents, 'utf-8')
}

Builder.prototype.ReadFile = function (file) {
	return Fs.readFileSync(file, 'utf-8')
}

Builder.prototype.NeedsBuild = function (...files) {
	let output = files.pop()

	let lastBuild = null
	try {
		let stats = Fs.statSync(output)
		lastBuild = stats.mtime
	} catch (e) {
		return true
	}

	for(i=0; i<files.length; i++) {
		try {
			if (lastBuild < Fs.statSync(files[i]).mtime) {
				return true
			}
		} catch (e) {
			log('Missing build source file: ' + files[i])
			process.exit()
		}
	}
	return false
}

module.exports = Builder
