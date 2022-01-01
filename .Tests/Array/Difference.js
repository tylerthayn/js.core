require('../Object/Define')
require('./IsArray')

function Array_Difference (a, b) {
	if (!Array.IsArray(a)) {return null}
	if (!Array.IsArray(b)) {return a}

	var diffArray = [];
	for (var i=0; i<a.length; i++) {
		var hasElement = false
		for (var j=0; j< b.length; j++) {
			if (a[i]===b[j]) {
				hasElement = true
				break
			}
		}
		if (hasElement===false) {
			diffArray.push(a[i])
		}
	}
	return diffArray
}

Define(Array, 'Difference', function () {
	var diffArray  = arguments[0]
	for (var i=1; i<arguments.length; i++) {
		diffArray = Array_Difference(diffArray, arguments[i])
	}
	return diffArray
})

Define(Array.prototype, 'Difference', function () {
	return Array.Difference.apply(null, [this].concat(Array.prototype.slice.call(arguments, 0)))
})
