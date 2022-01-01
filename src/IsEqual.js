require('./global')
require('./Define')
const lodash = require('lodash')

/**
* Determines if objects are equal
* @global
* @function IsEqual
* @param {object[]} objects
* @returns {boolean} result
*/
Define(global, 'IsEqual', function () {
	for (let i=1; i<arguments.length; i++) {
		if (!lodash.isEqual(arguments[0], arguments[i])) {
			return false
		}
	}
	return true
})
