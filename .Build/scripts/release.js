require('@js/core')
let Fs = require('fs')
let Path = require('path')

let releaseFolder = Path.resolve(process.env.NODE_PATH.split(';')[0])
let pkg = require(Path.resolve('./package.json'))

let releasePath = Path.join(releaseFolder, pkg.name+'.js')
let path = Path.resolve('./'+pkg.main)

Fs.copyFileSync(path, releasePath)

