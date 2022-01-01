require('@js/core')
const Fs = require('fs'), Path = require('path')
const jSmart = require('jsmart')

let defaults = {_ldelim: '{', _rdelim: '}'}

module.exports = function Template (template, data = {}) {
	let jsmart = null
	
	Extend(this, defaults)
	Extend(this, data)

	jSmart.prototype.getTemplate = function(file) {
		try {
			return Fs.readFileSync(Path.isAbsolute(file) ? file : Path.resolve(Path.dirname(template), file), 'utf8')
		} catch (err) {
			log(err)
		}
		try {
			return Fs.readFileSync(file, 'utf8')
		} catch (err) {
			log(err)
		}
		return null
	}


	try {
		jsmart = new jSmart(Fs.readFileSync(template, 'utf8'), this)
	} catch (err) {
		log(err)
	}

	if (!!jsmart) {
		try {
			jsmart = new jSmart(Fs.readFileSync(Path.resolve(template), 'utf8'), this)
		} catch (err) {
			log(err)
		}
	}


	Define(this, 'Render', function () {
		Array.From(arguments).forEach((arg) => {
			Extend(this, arg)
		})
		return !!jsmart ? jsmart.fetch(this) : ''
	})

	return this
}

