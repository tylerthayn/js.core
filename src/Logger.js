
let $console = console

function Logger (name) {
	return Extend({}, console.Clone(), {
		debug: function () {
			$console.debug.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
		},
		dir: function () {
			$console.dir.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
		},
		error: function () {
			$console.error.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
		},
		info: function () {
			$console.info.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
		},
		log: function () {
			$console.log.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
		},
		trace: function () {
			$console.trace.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
		},
		warn: function () {
			$console.warn.apply(null, [`<${name}>${arguments[0]}`].concat(Array.prototype.slice.call(arguments, 1)))
		}
	})
}

Define(Logger, 'NoConflict', () => {
	let $$console = console
	global.console = $console
	return $$console
})

Define(global, 'Logger', Logger)


