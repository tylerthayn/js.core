require('./Define')
const lodash = require('lodash')

/**
* Set a value on object at path
* @memberof Object#
* @instance
* @function Set
* @param {string} path - Object element path
* @param {*} value
* @returns {object} object
*/	
Define(Object.prototype, 'Set', function (path, value) {
    return null == this ? this : lodash.set(this, path, value)
})
