const Fs = require('fs'), Path = require('path'), _ = require('lodash')
let { execFileSync } = require('child_process')

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

function Child () {
	let original = GetProtoMembers()
	require('../../')
	let updated = GetProtoMembers()

	let added = {}
	Reflect.ownKeys(original).forEach(key => {
		added[key] = _.difference(updated[key], original[key])
	})
	return added
}

function Parent () {
	return JSON.parse((execFileSync(process.argv[0], [__filename, 'exec'], {encoding: 'utf-8'}).toString()))
}

let Differences = (process.argv.includes('exec')) ? Child : Parent

if (require.main == module) {
	console.log(JSON.stringify(Differences(), null, 4))
} else {
	module.exports = Differences
}
