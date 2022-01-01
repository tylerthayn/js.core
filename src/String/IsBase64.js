/**
* Tests if a string is Base64 format
* @memberof String#
* @instance
* @function IsBase64
* @returns {boolean} result
*/	
require('../Object/Define')

Define(String.prototype, 'IsBase64', function () {
	return this.toString() === this.AsAscii(true).AsBase64(true)
})
