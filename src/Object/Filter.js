/**
* Creates an object composed of the filtered object properties
* @memberof Object#
* @instance
* @function Filter
* @param {...(string|string[])} paths
* @returns {object} object
*/
Define(Object.prototype, 'Filter', function (fn) {
	return _.pickBy(this, fn)
})

