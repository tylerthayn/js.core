require('./global')
require('./Object/Define')
require('./Object/Extend')


global.Options = function Options () {
	return Extend.apply(null, [{}].concat(arguments))
}

