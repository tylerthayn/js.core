/**
* Check if object has the child element paths
* @memberof Object#
* @instance
* @function Has
* @param {string[]} paths - Array of paths
* @returns {boolean} result
*/
Define(Object.prototype, 'Has', function () {
	for (let i=0; i<arguments.length; i++) {
		if (!_.has(this, arguments[i])) {
			return false
		}
	}
	return true
})
