/**
* Array Unique
* @memberof Array#
* @instance
* @function Unique
* @param {*} lists - Array or array list
* @returns {array} array
*/
require('./Define')

Define(Array.prototype, 'Unique', function (mutate) {
	if (typeof mutate !== 'undefined' && mutate === true) {
		for (var i=this.length-1; i>=0; i--) {
			if (this.indexOf(this[i]) < i) {
				this.splice(i, 1)
			}
		}
		return this
	} else {
		var a = []
		for (var i=0; i<this.length; i++) {
			if (a.indexOf(this[i]) === -1) {
				a.push(this[i])
			}
		}
		return a
	}
})
