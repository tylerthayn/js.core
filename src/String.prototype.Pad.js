require('./Define')
require('./String.prototype.Repeat')

/**
* Pads a string out to a certain width
* @memberof String#
* @instance
* @function Pad
* @param {number} length - Length of the string in chars
* @param {string} [char] - Char to pad with
* @param {boolean} [rightPad] - Pad chars tot he right instead of the left
* @returns {string} text - Padded string
*/
Define(String.prototype, 'Pad', function (length, padChar, rightPad) {
	let s = this + ''
	length = length - s.length
	if (length <= 0) {return s}
	padChar = (padChar+'').Repeat(length)
	if (typeof rightPad !== 'undefined' && rightPad === true) {
		return s+padChar
	}
	return padChar + s
})
