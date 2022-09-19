/**
* Recursively (deep) clone
* @memberof Object#
* @instance
* @function Clone
* @return {object} - The cloned object
*/
Define(Object.prototype, 'Clone', function () {
	return Clone(this)
})
