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

/**
* Difference in arrays
* @memberof Array.
* @static
* @function Difference
* @param {*} lists - Array or list of arrays
* @returns {array} diff - List of diffference values
*/
Define(Array, 'Difference', function () {
	var diffArray  = arguments[0]
	for (var i=1; i<arguments.length; i++) {
		diffArray = Array_Difference(diffArray, arguments[i])
	}
	return diffArray
})

/**
* Difference in arrays
* @memberof Array#
* @instance
* @function Difference
* @param {*} lists - Array or list of arrays
* @returns {array} diff - List of diffference values
*/
Define(Array.prototype, 'Difference', function () {
	return Array.Difference.apply(null, [this].concat(Array.prototype.slice.call(arguments, 0)))
})
