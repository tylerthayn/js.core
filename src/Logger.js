let whiteList = []
let blackList = []
let loggerMode = 'blacklist'
		//all: all
		//whitelist: only items in whitelist
		//blacklist: all but items in blacklist

whiteList.push = (v) => {
	Logger.on('whitelist', v)
	Array.prototype.push.call(whitelist, v)
}
blackList.push = (v) => {
	Logger.on('blacklist', v)
	Array.prototype.push.call(blacklist, v)
}


function Logger (name) {
	let enabled = false
	let whitelist = false
	let blacklist = false

	Logger.on('whitelist', v => {
		if (v == name) {
			whitelist = true
			if (loggerMode == 'all' || loggerMode == 'whitelist') {
				enabled = true
			}
		}
	})

	Logger.on('blacklist', v => {
		if (v == name) {
			blacklist = true
			enabled = false
		}
	})


	Logger.on('mode-change', v => {
		enabled = false
		if (v == 'all' || (v == 'whitelist' && whitelist)) {
			enabled = true
		}
		if (blacklist) {
			enabled = false
		}
	})

	let logger = Extend({}, console.Clone(), {
		debug: function () {
			if (!blackList.includes(name) && (loggerMode != 'whitelist' || whiteList.includes(name))) {
				$console.debug.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
			}
		},
		dir: function () {
			if (!blackList.includes(name) && (loggerMode != 'whitelist' || whiteList.includes(name))) {
				$console.dir.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
			}
		},
		error: function () {
			if (!blackList.includes(name) && (loggerMode != 'whitelist' || whiteList.includes(name))) {
				$console.error.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
			}
		},
		info: function () {
			if (!blackList.includes(name) && (loggerMode != 'whitelist' || whiteList.includes(name))) {
				$console.info.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
			}
		},
		log: function () {
			if (!blackList.includes(name) && (loggerMode != 'whitelist' || whiteList.includes(name))) {
				$console.log.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
			}
		},
		trace: function () {
			if (!blackList.includes(name) && (loggerMode != 'whitelist' || whiteList.includes(name))) {
				$console.trace.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
			}
		},
		warn: function () {
			if (!blackList.includes(name) && (loggerMode != 'whitelist' || whiteList.includes(name))) {
				$console.warn.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
			}
		}
	})

	logger.blacklist = false
	logger.whitelist = false
	logger.enabled = false


	return logger
}

Define(Logger, 'NoConflict', () => {
	let $$console = console
	global.console = $console
	return $$console
})

Define(Logger, 'whiteList', {get: () => {return whiteList}})
Define(Logger, 'blackList', {get: () => {return blackList}})
Define(Logger, 'mode', {
	get: () => {
		return loggerMode
	},
	set: (v) => {
		let modes = ['all','whitelist','blacklist']
		if (modes.includes(v)) {
			loggerMode = v
			Logger.emit('mode-change', v)
		}
	}
})
Object.Extensions.EventEmitter(Logger)
Define(global, 'Logger', Logger)

