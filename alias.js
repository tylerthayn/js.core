require('@js/core')
let Fs = require('fs')
let Path = require('path')

let package = JSON.parse(Fs.readFileSync('./package.json', 'utf-8'))
let folder = Path.resolve(process.cwd(), '../../', package.alias)
CopyFolder(process.cwd(), folder)

// Replace alias name in define statement
let content = Fs.readFileSync(Path.resolve(folder, package.main), 'utf-8')
Fs.writeFileSync(Path.resolve(folder, package.main), content.replace(package.name, package.alias), 'utf-8')

// Update package.json file
package.name = package.alias
delete package.alias
Fs.writeFileSync(Path.join(folder, 'package.json'), JSON.stringify(package, null, 4), 'utf-8')

// Remove alias script
Fs.unlinkSync(Path.join(folder, 'alias.js'))


function CopyFolder (src, dest) {
	try {Fs.mkdirSync(dest, {recursive: true})} catch (e) {}
	Fs.readdirSync(src, {withFileTypes: true}).forEach(entry => {
		if (entry.isDirectory()) {
			CopyFolder(Path.join(src, entry.name), Path.join(dest, entry.name))
		}
		if (entry.isFile()) {
			Fs.copyFileSync(Path.join(src, entry.name), Path.join(dest, entry.name))
		}
	})
}


