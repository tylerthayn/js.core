/**
* Creates an array of the own enumerable property names of object
* @memberof Object#
* @instance
* @function Keys
* @returns {array} property names
*/
Define(Object.prototype, 'Keys', function () {
	return _.keys(this)
})
