require('./Define')
require('./IsEqual')

/**
* Trim empty, null, undefined elements from an object
* @memberof Object#
* @instance
* @function Trim
* @returns {object} object
*/	
Define(Object.prototype, 'Trim', function () {
    Object.keys(this).forEach(function (k) {
		if (typeof this[k] === 'undefined' || this[k] == null) {
			delete this[k]
		} else if (Type(this[k], 'Object')) {
			this[k] = this[k].Trim()
			if (IsEqual(this[k], {})) {
				delete this[k]
			}
		} else if (Type(this[k], 'Array') && this[k].length == 0) {
			delete this[k]
		} else if (Type(this[k], 'String') && this[k] == '') {
			delete this[k]
		} else if (Type(this[k], 'Number') && Number.isNaN(this[k])) {
			delete this[k]
		}
    }, this)
	return this
})
