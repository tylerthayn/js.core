let Fs = require('fs'), Path = require('path')

console.log(__dirname)
console.log(__file)
//console.log(process.argv)
//console.log(process.env)

let global = process.env.npm_config_argv.match(/"(--global|-g)"/) != null

let installedDir = global ?
	Path.resolve(process.env.npm_config_prefix, 'node_modules', process.env.npm_package_name) :
	Path.resolve('./', 'node_modules', process.env.npm_package_name)

console.log(installedDir)
