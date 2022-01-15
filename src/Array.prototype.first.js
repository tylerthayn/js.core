require('./Define')

/**
* First element in an array
* @memberof Array#
* @instance
* @member {*} first
* @returns {*} element - The first element of the array
*/
Define(Array.prototype, 'first', {get: function () {
	if (this.length > 0) {return this[0]}
	return null
}})
