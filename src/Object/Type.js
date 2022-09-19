/**
* Object Type lookup
* @memberof Object#
* @instance
* @function Type
* @param {...(string|object)} [compare] - Comparison type label string or object
* @returns {(string|boolean)} result - String representing item type or a boolean from type comparisons
*/
Define(Object.prototype, 'Type', function () {
	return arguments.length > 0 ? Type.apply(null, [this].concat(Array.From(arguments))) : Type(this)
})
