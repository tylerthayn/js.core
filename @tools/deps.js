const Fs = require('fs'), Path = require('path'), Strip = require('strip-comments')
const Dependencies = require('./Dependencies')

let log = console.log
let requireMatch = /require\('(.+)'\)/g


let dependencies = new Dependencies(Path.resolve('./src'))

log(JSON.stringify(dependencies, null, 4))
log(dependencies.files.length)
//log(dependencies.packages)

