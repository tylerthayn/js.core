/**
* Create a new array with elements omitted at certain indexes
* @memberof Array#
* @instance
* @function OmitAt
* @param {*} indexes - Indexes of elements to omit
* @returns {array} array
*/
Define(Array.prototype, 'OmitAt', function () {
	let a = [], omitIndexes = []
	for (let i=0; i<arguments.length; i++) {
		omitIndexes.push(arguments[i])
	}
	for (var i=0; i<this.length; i++) {
		if (!omitIndexes.contains(i)) {
			a.push(this[i])
		}
	}
	return a
})
