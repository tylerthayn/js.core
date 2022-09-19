/**
* Get object value at the given path
* @memberof Object#
* @instance
* @function Get
* @param {string} path - The element object path
* @param {*} default - Value to return if invalid object path
* @return {*}  value
*/
Define(Object.prototype, 'Get', function (path, defaultValue) {
	return _.get(this, path, defaultValue)
})
