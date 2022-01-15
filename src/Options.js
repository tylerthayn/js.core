require('./global')
require('./Define')
require('./Extend')


global.Options = function Options () {
	let options = Extend.apply(null, [{}].concat(arguments))
	options.Define('Defaults', arguments[0])
	return options
}

