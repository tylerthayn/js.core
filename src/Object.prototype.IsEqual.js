require('./Define')
const lodash = require('lodash')

/**
* Determines if objects are equal
* @memberof Object#
* @instance
* @function IsEqual
* @param {object[]} objects
* @returns {boolean} result
*/
Define(Object.prototype, 'IsEqual', function () {
	for (let i=0; i<arguments.length; i++) {
		if (!lodash.isEqual(this, arguments[i])) {
			return false
		}
	}
	return true
})
