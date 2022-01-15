require('./Define')

/**
* Gets all but the last element of array
* @memberof Array#
* @instance
* @member {array} head
* @param {array} array -  All but the last element of array
*/
Define(Array.prototype, 'head', {get: function () {
	return this.slice(0, this.length-1)
}})
