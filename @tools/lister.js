
function GetProtoMembers () {
	return {
		'Array': Reflect.ownKeys(Array),
		'Array.prototype': Reflect.ownKeys(Array.prototype),
		'String': Reflect.ownKeys(String),
		'String.prototype': Reflect.ownKeys(String.prototype),
		'Object': Reflect.ownKeys(Object),
		'Object.prototype': Reflect.ownKeys(Object.prototype),
		'Function': Reflect.ownKeys(Function),
		'Function.prototype': Reflect.ownKeys(Function.prototype),
		'global': Reflect.ownKeys(globalThis)
	}
}

let original = GetProtoMembers()
require('@tyler.thayn/js.core')
let updated = GetProtoMembers()

added = {}
Reflect.ownKeys(original).forEach(key => {
	added[key] = updated[key].Difference(original[key])
	added[key].forEach(_key => {
		console.log(key+'.'+_key)
	})
})



