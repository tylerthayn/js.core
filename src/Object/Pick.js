/**
* Creates an object composed of the picked object properties
* @memberof Object#
* @instance
* @function Pick
* @param {...(string|string[])} paths
* @returns {object} object
*/
Define(Object.prototype, 'Pick', function () {
	return _.pick.apply(null, [this].concat(_.toArray(arguments)))
})
