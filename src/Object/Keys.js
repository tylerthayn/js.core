require('./Define')
const lodash = require('lodash')

/**
* Creates an array of the own enumerable property names of object
* @memberof Object#
* @instance
* @function Keys
* @returns {array} property names
*/
Define(Object.prototype, 'Keys', function () {
	return lodash.keys(this)
})
