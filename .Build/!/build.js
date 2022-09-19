require('@js/core')
let Fs = require('fs'), Path = require('path')



if (require.main === module) {
	let script = {
		name: 'Package Builder',
		version: '1.0.0',
		usage: ''
	}


	if (process.argv.includes('-h') || process.argv.includes('--help')) {
		console.log(`===> ${script.name} (${script.version}) <===\n${script.usage}`)
	} else if (process.argv.includes('-t') || process.argv.includes('--targets')) {
		let targets = GetTargets()
		targets.push('clean*')
		targets.push('install*')
		console.log(targets.map(t=>t.toLowerCase()).sort().join('\n'))
		process.exit()
	} else {
		let targets = [], config = require('./config')
		process.argv.slice(2).forEach(arg => {
			if (arg.startsWith('--')) {
				let option = arg.split('=')
				config.Set(option[0].replace(/^--/, ''), option[1])
			} else {
				targets.push(arg)
			}
		})
		let builder = new Builder()
		log(builder)
	}
} else {
	module.exports = Builder
}


function GetTargets (path = '') {
	let targets = []
	Fs.readdirSync(Path.join(__dirname, 'targets', path), {withFileTypes: true}).forEach(entry => {
		if (entry.isDirectory()) {
			GetTargets(Path.join(path, entry.name)).forEach(target => {
				targets.push(target)
			})
		} else {
			if (entry.name.endsWith('.build')) {
				targets.push((path==''?'':path+'/') + entry.name.replace(/\.build$/, ''))
			}
		}
	})
	return targets.sort()
}

/*
let options = {
	builds: [],
	builder: {

	}
}


process.argv.slice(2).forEach(arg => {
	if (arg.startsWith('-')) {
		if (arg.startsWith('--config')) {
			Extend(options, JSON.parse(Fs.readFileSync(Path.resolve(arg.split('=')[0]), 'utf-8')))
		}
	} else {
		options.builds.push(`./.Build/${arg}.build`)
	}
})

//if (options.builds.length == 0) {
//	options.builds = FindBuilds()
//}

options.builds.forEach(build => {
	let builder = new Builder(Extend({}, options.builder))
	builder.Build(build)
})

function FindBuilds (path = process.cwd()) {
	let builds = []
	Fs.readdirSync(path, {withFileTypes: true}).forEach(entry => {
		if (entry.isFile() && entry.name.endsWith('.build')) {
			builds.push(Path.resolve(path, entry.name))
		}
	})
	return builds
}
*/
