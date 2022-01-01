require('../Object/Define')
require('./Repeat')

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
