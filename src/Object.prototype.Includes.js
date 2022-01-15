require('./Define')
require('./Object.prototype.Has')

/**
* Check if object has the child element paths
* @memberof Object#
* @instance
* @function Includes
* @param {string[]} paths - Array of paths
* @returns {boolean} result
*/
Define(Object.prototype, 'Includes', Object.prototype.Has)
