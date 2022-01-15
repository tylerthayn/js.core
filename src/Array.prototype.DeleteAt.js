/**
* DeleteAt array item
* @memberof Array#
* @instance
* @function DeleteAt
* @param {number} indexes - Index or array of indexes to delete
* @param {array} array - The modified array
*/
require('./Define')

Define(Array.prototype, 'DeleteAt', function () {
	[...arguments].sort().reverse().forEach((arg) => {console.log(arg);this.splice(arg, 1)})
	return this
})
