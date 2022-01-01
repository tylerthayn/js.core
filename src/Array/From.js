require('../Object/Define')
const lodash = require('lodash')

/**
* Converts value to an array
* @memberof Array.
* @static
* @function From
* @param {*} value - value to convert
* @return {array} array - The converted array
*/
Define(Array, 'From', value => lodash.toArray(value))
