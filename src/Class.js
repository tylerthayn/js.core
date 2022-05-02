
!(function () {
	function extend(dest){var i,j,len,src;for(j=1,len=arguments.length;j<len;j++){src=arguments[j];for(i in src)dest[i]=src[i]}return dest}
	var create=Object.create||function(){function F(){}return function(proto){F.prototype=proto;return new F}}()
	var isArray=Array.isArray||function(obj){return'[object Array]'===Object.prototype.toString.call(obj)}

	function Class() {}

	Class.extend = function (props, name = null) {

		// @function extend(props: Object): Function
		// [Extends the current class](#class-inheritance) given the properties to be included.
		// Returns a Javascript function that is a class constructor (to be called with `new`).
		var NewClass = function () {
			Object.Extensions.EventEmitter(this)

			// call the constructor
			if (this.initialize) {
				this.initialize.apply(this, arguments);
			}

			// call all constructor hooks
			this.callInitHooks();
		};

		if (name != null) {
			Object.defineProperty(NewClass, 'name', {value: name})
		}

		var parentProto = NewClass.__super__ = this.prototype;

		var proto = create(parentProto);
		proto.constructor = NewClass;

		NewClass.prototype = proto;

		// inherit parent's statics
		for (var i in this) {
			if (Object.prototype.hasOwnProperty.call(this, i) && i !== 'prototype' && i !== '__super__') {
				NewClass[i] = this[i];
			}
		}

		// mix static properties into the class
		if (props.statics) {
			extend(NewClass, props.statics);
			delete props.statics;
		}

		// mix includes into the prototype
		if (props.includes) {
			extend.apply(null, [proto].concat(props.includes));
			delete props.includes;
		}

		// merge options
		if (proto.options) {
			props.options = extend(create(proto.options), props.options);
		}

		// mix given properties into the prototype
		extend(proto, props);

		proto._initHooks = [];

		// add method for calling all hooks
		proto.callInitHooks = function () {

			if (this._initHooksCalled) { return; }

			if (parentProto.callInitHooks) {
				parentProto.callInitHooks.call(this);
			}

			this._initHooksCalled = true;

			for (var i = 0, len = proto._initHooks.length; i < len; i++) {
				proto._initHooks[i].call(this);
			}
		};

		return NewClass;
	};


	// @function include(properties: Object): this
	// [Includes a mixin](#class-includes) into the current class.
	Class.include = function (props) {
		extend(this.prototype, props);
		return this;
	};

	// @function mergeOptions(options: Object): this
	// [Merges `options`](#class-options) into the defaults of the class.
	Class.mergeOptions = function (options) {
		extend(this.prototype.options, options);
		return this;
	};


	Class.addInitHook = function (fn) { // (Function) || (String, args...)
		var args = Array.prototype.slice.call(arguments, 1);

		var init = typeof fn === 'function' ? fn : function () {
			this[fn].apply(this, args);
		};

		this.prototype._initHooks = this.prototype._initHooks || [];
		this.prototype._initHooks.push(init);
		return this;
	};


	Define(global, 'Class', Class)

})()
