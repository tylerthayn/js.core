/**
* Array Xor
* @memberof Array#
* @instance
* @function Xor
* @param {array} lists - Array or array list
* @param {array} array
*/
Define(Array.prototype, 'Xor', function () {
	let xorArray = this
	for (let i=0; i<arguments.length; i++) {
		xorArray = Array.Difference(xorArray, arguments[i]).concat(Array.Difference(arguments[i], xorArray))
	}
	return xorArray ? xorArray.Unique() : []
})
