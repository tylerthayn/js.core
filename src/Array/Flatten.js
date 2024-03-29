/**
* Flatten array elements
* @memberof Array.
* @static
* @function Flatten
* @param {number} depth
* @returns {array} list - Flattened list
*/
Array.Define('Flatten', function (list, depth) {
	depth = (typeof depth == 'number') ? depth : Infinity

	if (!depth) {
		if (Array.IsArray(list)) {
			return list.map(function(i) {return i})
		}
		return list
	}

	return _flatten(list, 1)

	function _flatten(list, d) {
		return list.reduce(function(acc, item) {
			if (Array.IsArray(item) && d < depth) {
				return acc.concat(_flatten(item, d + 1))
			} else {
				return acc.concat(item)
			}
		}, [])
	}
})
