let Fs = require('fs'), Path = require('path'), IsCore = require('is-core-module')
const Parser = require('@babel/parser')
const Traverse = require('@babel/traverse').default
log = console.log

const moduleRe = /\b(require|import|export)\b/

//let file = require.resolve('express')
let file = 'D:/@CODE/org.tts.js.core/dist/org.tts.js.core.js'
let src = Fs.readFileSync(file, 'utf-8')

 const modules = { strings: [], expressions: [] }
let ast = Parser.parse(src)
//log(ast)
//log(moduleRe.exec(src))

 Traverse(ast, {
    enter(path) {
      if (path.node.type === 'CallExpression') {
        const callee = path.get('callee')
		if (callee.isIdentifier({ name: 'Define' })) {
			log(callee)
		}
		/*
		const isDynamicImport = false && callee.isImport()
        if (callee.isIdentifier({ name: 'require' }) || isDynamicImport) {
          const arg = path.node.arguments[0]
          if (arg.type === 'StringLiteral') {
            modules.strings.push(arg.value)
          } else {
            modules.expressions.push(src.slice(arg.start, arg.end))
          }
        }
		**/
	/*
	} else if (
        path.node.type === 'ImportDeclaration' ||
        path.node.type === 'ExportNamedDeclaration' ||
        path.node.type === 'ExportAllDeclaration'
      ) {
        const { source } = path.node
        if (source && source.value) {
          modules.strings.push(source.value)
        }
      }
	*/
    }
  }})

//log(modules)

