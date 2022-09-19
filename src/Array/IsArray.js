/**
* Check if an object is an array
* @memberof Array.
* @static
* @function IsArray
* @param {object} object - Object to check if an array
* @returns {boolean} result
*/
Array.Define('IsArray', function (a) {
	return Object.prototype.toString.call(a) == '[object Array]'
})
