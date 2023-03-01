require('@tyler.thayn/js.core')


let defaults = {
	enabled: true
}

function Plugin (name = 'Plugin', options = {}, fn = Function.Noop) {

	let plugin = function Plugin (context = {}, options = {}) {
		fn.call(plugin, context, Extend({}, plugin.options, options))
		return context
	}

	Object.defineProperty(plugin, 'name', {value: name})
	plugin.options = Extend({}, defaults, options)

	Define(plugin, 'Get', function (name, value) {
		return this.options.Get(name, value)
	})

	Define(plugin, 'Set', function (name, value) {
		return this.options.Set(name, value)
	})

	return plugin
}

module.exports = Plugin

Object.Plugin = module.exports

