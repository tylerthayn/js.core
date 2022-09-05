let Fs = require('fs'), Path = require('path'), IsCore = require('is-core-module')
const Parser = require('@babel/parser')
const Traverse = require('@babel/traverse').default
log = console.log

const moduleRe = /\b(require|import|export)\b/

let file = require.resolve('express')
log(file)
let src = Fs.readFileSync(file, 'utf-8')
log(src)
let ast = Parser.parse(src)
//console.log(JSON.stringify(ast, null, 4))

Traverse(ast, {
	enter(path) {
//		log(path)
	}
})

//log(modules)

