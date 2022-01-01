/**
* Repeats a string of text n times
* @memberof String#
* @instance
* @function Repeat
* @param {number} n - Number of times to repeat
* @returns {string} text
*/	
require('../Object/Define')

Define(String.prototype, 'Repeat', function (n) {
	let s = ''
	for (let i=0; i<n; i++) {s += this}
	return s
})
