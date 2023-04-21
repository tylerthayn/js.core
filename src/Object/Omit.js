/**
* Creates an object composed of the omitted object properties
* @memberof Object#
* @instance
* @function Omit
* @param {...(string|string[])} paths
* @returns {object} object
*/
Define(Object.prototype, 'Omit', function (...args) {
	return _.pickBy(this, (value, key) => {
		return !args.includes(key)
	})
})

