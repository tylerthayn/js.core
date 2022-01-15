require('./Define')

/**
* Defines object elements
* @memberof Object#
* @instance
* @function Define
* @param {string} name - Name of property
* @param {*} value - Value of property
* @param {boolean} [enumerable]
* @returns {object}
*/
Define(Object.prototype, 'Define', function () {return Define.apply(null, [this].concat(Array.prototype.slice.call(arguments, 0)))})
