/**
* Checks if a string is empty, null or undefined
* @memberof String#
* @instance
* @function IsEmpty
* @returns {boolean} result
*/	
require('../Object/Define')

Define(String.prototype, 'IsEmpty', function () {
	return (typeof this === 'undefined' || this == null || this.length === 0) ? true : false
})
