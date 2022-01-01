/**
* Delete array item
* @memberof Array#
* @instance
* @function Delete
* @param {*} elements - Element or array of elements to delete
* @param {array} array - The modified array
*/
require('../Object/Define')

/*=Array.prototype.Delete=*/
Define(Array.prototype, 'Delete', function () {
	for (let i=0; i<arguments.length; i++) {
		let index = this.indexOf(arguments[i])
		while (index !== -1) {
			this.splice(index, 1)
			index = this.indexOf(arguments[i])
		}
	}
	return this
})
