const Fs = require('fs'), Path = require('path'), _ = require('lodash')
const Strip = require('strip-comments')

function GetSources (options) {
	let index = Fs.readFileSync(Path.resolve('./src/index.js'), 'utf-8')
	index = Strip(index.trim().replace(/(\r\n)+\t*(\r\n)+/g, '\r\n'))
	let sources = index.match(/require\('(.+)'\)/g).map(source => {
		return source.replace(/require\('/, '').replace(/'\)/, '')
	})
	return sources
}


if (require.main == module) {
	console.log(GetSources())
} else {
	module.exports = GetSources
}
