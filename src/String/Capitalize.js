/**
* Capitalize words in a string
* @memberof String#
* @instance
* @function Capitalize
* @param {boolean} [AllWords] - Capitalize first letter of each word
* @returns {string} text - Capitalized text
*/
Define(String.prototype, 'Capitalize', function (allWords) {
	const s = this.toLowerCase()
	if (typeof allWords !== 'undefined' && allWords === true) {
		return s.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
			return m.toUpperCase()
		})
	} else {
		return s.charAt(0).toUpperCase() + s.substring(1)
	}
})
