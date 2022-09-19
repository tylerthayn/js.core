/**
* Create a new array with elements omitted
* @memberof Array#
* @instance
* @function Omit
* @param {*} elements - Elements to omit
* @returns {array} array
*/
Define(Array.prototype, 'Omit', function () {
	let a = [], omit = []
	for (let i=0; i<arguments.length; i++) {
		omit.push(arguments[i])
	}
	this.forEach(function (e) {
		if (!omit.contains(e)) {
			a.push(e)
		}
	})
	return a
})
