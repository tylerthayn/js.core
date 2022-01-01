require('./Define')
require('../Global/global')

function _Type () {
	// Type.call(thisObject) => return type label
	if (arguments.length == 0) {return _Type(this)}

	// Type(obj) => return type label
	if (arguments.length == 1) {
		var type = Object.prototype.toString.call(arguments[0]).match(/\[object (.+)\]/i)[1].toLowerCase()
		return type != 'object' ? type : arguments[0].constructor.name || type 	
	}
	
	// Type(obj, typeLabel) || Type(obj1, obj2) => return boolean indicating whether type's are the same
	if (arguments.length == 2) {return _Type(arguments[0]) === (typeof arguments[1] === 'string' ? arguments[1] : _Type(arguments[1]))}
	
	// Type(typeLabel, obj1, obj2, ...objN) || Type(obj1, obj2, ...objN) => return boolean indicating whether all object type's match the type label or first object type
	var type = _Type(arguments[0]);
	for (var i=1; i<arguments.length; i++) {if (_Type(arguments[i]) != type && (type !== 'string' || _Type(arguments[i]) != arguments[0])) {return false}}
	return true
}
	
Define(global, 'Type', _Type)
Define(Object.prototype, 'Type', function () {
	return _Type([this].concat(Array.prototype.slice.call(arguments, 0)))
})

