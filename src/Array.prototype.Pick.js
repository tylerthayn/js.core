require('./Define')

/**
* Pick elements of an array
* @memberof Array#
* @instance
* @function Pick
* @param {*} elements - Elements to select
* @returns {array} array
*/
Define(Array.prototype, 'Pick', function () {
	let a = [], select = []
	for (let i=0; i<arguments.length; i++) {
		select.push(arguments[i])
	}
	select.forEach(function (index) {
		a.push(this[index])
	}, this)
	return a
})
