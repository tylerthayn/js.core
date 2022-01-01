/**
* Array Union
* @memberof Array#
* @instance
* @function Union
* @param {*} lists - Array or array list
* @returns {array} array
*/	
require('../Object/Define')
require('./Unique')

Define(Array.prototype, 'Union', function () {
	return (this.concat.apply(this, arguments)).Unique()
})
