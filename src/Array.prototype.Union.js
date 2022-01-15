/**
* Array Union
* @memberof Array#
* @instance
* @function Union
* @param {*} lists - Array or array list
* @returns {array} array
*/
require('./Define')
require('./Array.prototype.Unique')

Define(Array.prototype, 'Union', function () {
	return (this.concat.apply(this, arguments)).Unique()
})
