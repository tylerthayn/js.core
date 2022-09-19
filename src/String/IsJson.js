/**
* Test whether a string is JSON
* @memberof String#
* @instance
* @function IsJson
* @returns {boolean} result
*/
Define(String.prototype, 'IsJson', function () {
	try {
		JSON.parse(this)
	} catch (e) {
		return false
	}
	return true
})
