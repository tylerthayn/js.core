require('./Define')
require('./Each')
require('./Type')
require('../Array/Unique')

/**
* Gets a list of object element paths 
* @memberof Object#
* @instance
* @function Paths
* @param {number} [depth] - Depth of recursion
* @param {array} paths - The object element paths
*/	
Define(Object.prototype, 'Paths', function(depth = Infinity) {
    const list = []
    visit(this)
    return list.Unique()

    function visit(object, keys = []) {
		object.Each((value, name) => {
			keys.push(name)
			if (Type(value, 'Array') || Type(value, 'Object')) {
				visit(value, keys)
			} else {
				list.push((keys.length < depth + 1 ? keys : keys.slice(0, depth)).join('.'))
			}
			keys.pop()
		})

	}
})
