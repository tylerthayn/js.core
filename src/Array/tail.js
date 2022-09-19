/**
* Gets all but the first element of array
* @memberof Array#
* @instance
* @member {array} tail
* @param {array} array -  All but the first element of array
*/
Define(Array.prototype, 'tail', {get: function () {
	return this.length > 1 ? this.slice(1, this.length) : []
}})
