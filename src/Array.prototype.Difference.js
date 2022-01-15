/**
* Difference in arrays
* @memberof Array#
* @instance
* @function Difference
* @param {*} lists - Array or list of arrays
* @returns {array} diff - List of diffference values
*/
require('./Define')
require('./Array.Difference')

Define(Array.prototype, 'Difference', function () {
	return Array.Difference.apply(null, [this].concat(Array.prototype.slice.call(arguments, 0)))
})
