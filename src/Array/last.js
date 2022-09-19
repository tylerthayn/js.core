/**
* Gets the last element of an array
* @memberof Array#
* @instance
* @member {*} last
* @returns {*} element -  The last element of the array
*/
Define(Array.prototype, 'last', {get: function () {
	return this.length > 0 ? this[this.length-1] : null
}})
