require('./Define')
const lodash = require('lodash')

/**
* Creates an object composed of the picked object properties
* @memberof Object#
* @instance
* @function Pick
* @param {...(string|string[])} paths
* @returns {object} object
*/	
Define(Object.prototype, 'Pick', function () {
	return lodash.pick.apply(null, [this].concat(lodash.toArray(arguments)))
})
