require('../Define')
require('../global')

Define(Object.Extensions, 'EventEmitter', function (o) {
	var R = typeof Reflect === 'object' ? Reflect : null
	var ReflectApply=R&&'function'==typeof R.apply?R.apply:function ReflectApply(target,receiver,args){return Function.prototype.apply.call(target,receiver,args)};
	var ReflectOwnKeys
	R&&'function'==typeof R.ownKeys?ReflectOwnKeys=R.ownKeys:Object.getOwnPropertySymbols?ReflectOwnKeys=function ReflectOwnKeys(target){return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))}:ReflectOwnKeys=function ReflectOwnKeys(target){return Object.getOwnPropertyNames(target)};
	function ProcessEmitWarning(warning){console&&console.warn&&console.warn(warning)}
	var NumberIsNaN=Number.isNaN||function NumberIsNaN(value){return value!=value};

	Define(o, '_events', undefined)
	Define(o, '_eventsCount', 0)
	Define(o, '_maxListeners', undefined)
	var defaultMaxListeners = 10;
	Define(Object, 'defaultMaxListeners', {get:function(){return defaultMaxListeners},set:function(arg){if('number'!=typeof arg||arg<0||NumberIsNaN(arg))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+arg+'.');defaultMaxListeners=arg}})
	function setMaxListeners(n){if('number'!=typeof n||n<0||NumberIsNaN(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+'.');this._maxListeners=n;return this}
	Define(o, 'setMaxListeners', setMaxListeners)
	function $getMaxListeners(that){return void 0===that._maxListeners?Object.defaultMaxListeners:that._maxListeners}
	function getMaxListeners(){return $getMaxListeners(this)}
	Define(o, 'getMaxListeners', getMaxListeners)
	function emit(type){var args=[];for(var i=1;i<arguments.length;i++)args.push(arguments[i]);var doError='error'===type;var events=this._events;if(void 0!==events)doError=doError&&void 0===events.error;else if(!doError)return false;if(doError){var er;args.length>0&&(er=args[0]);if(er instanceof Error)throw er;var err=new Error('Unhandled error.'+(er?' ('+er.message+')':''));err.context=er;throw err}var handler=events[type];if(void 0===handler)return false;if('function'==typeof handler)ReflectApply(handler,this,args);else{var len=handler.length;var listeners=arrayClone(handler,len);for(i=0;i<len;++i)ReflectApply(listeners[i],this,args)}return true};
	Define(o, 'emit', emit)
	function _addListener(target,type,listener,prepend){var m;var events;var existing;if('function'!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);if(void 0===(events=target._events)){events=target._events=Object.create(null);target._eventsCount=0}else{if(void 0!==events.newListener){target.emit('newListener',type,listener.listener?listener.listener:listener);events=target._events}existing=events[type]}if(void 0===existing){existing=events[type]=listener;++target._eventsCount}else{'function'==typeof existing?existing=events[type]=prepend?[listener,existing]:[existing,listener]:prepend?existing.unshift(listener):existing.push(listener);if((m=$getMaxListeners(target))>0&&existing.length>m&&!existing.warned){existing.warned=true;var w=new Error('Possible EventEmitter memory leak detected. '+existing.length+' '+String(type)+' listeners added. Use emitter.setMaxListeners() to increase limit');w.name='MaxListenersExceededWarning';w.emitter=target;w.type=type;w.count=existing.length;ProcessEmitWarning(w)}}return target}
	function addListener(type,listener){return _addListener(this,type,listener,false)}
	Define(o, 'addListener', addListener)
	Define(o, 'on', addListener)
	function prependListener(type,listener){return _addListener(this,type,listener,true)}
	Define(o, 'prependListener', prependListener)
	function onceWrapper(){var args=[];for(var i=0;i<arguments.length;i++)args.push(arguments[i]);if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;ReflectApply(this.listener,this.target,args)}}
	function _onceWrap(target,type,listener){var state={fired:false,wrapFn:void 0,target:target,type:type,listener:listener};var wrapped=onceWrapper.bind(state);wrapped.listener=listener;state.wrapFn=wrapped;return wrapped}
	function once(type,listener){if('function'!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);this.on(type,_onceWrap(this,type,listener));return this}
	Define(o, 'once', once)
	function prependOnceListener(type,listener){if('function'!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);this.prependListener(type,_onceWrap(this,type,listener));return this};
	Define(o, 'prependOnceListener', prependOnceListener)
	function removeListener(type,listener){var list,events,position,i,originalListener;if('function'!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);if(void 0===(events=this._events))return this;if(void 0===(list=events[type]))return this;if(list===listener||list.listener===listener)if(0==--this._eventsCount)this._events=Object.create(null);else{delete events[type];events.removeListener&&this.emit('removeListener',type,list.listener||listener)}else if('function'!=typeof list){position=-1;for(i=list.length-1;i>=0;i--)if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener;position=i;break}if(position<0)return this;0===position?list.shift():spliceOne(list,position);1===list.length&&(events[type]=list[0]);void 0!==events.removeListener&&this.emit('removeListener',type,originalListener||listener)}return this}
	Define(o, 'removeListener', removeListener)
	Define(o, 'off', removeListener)
	function removeAllListeners(type){var listeners,events,i;if(void 0===(events=this._events))return this;if(void 0===events.removeListener){if(0===arguments.length){this._events=Object.create(null);this._eventsCount=0}else void 0!==events[type]&&(0==--this._eventsCount?this._events=Object.create(null):delete events[type]);return this}if(0===arguments.length){var keys=Object.keys(events);var key;for(i=0;i<keys.length;++i)'removeListener'!==(key=keys[i])&&this.removeAllListeners(key);this.removeAllListeners('removeListener');this._events=Object.create(null);this._eventsCount=0;return this}if('function'==typeof(listeners=events[type]))this.removeListener(type,listeners);else if(void 0!==listeners)for(i=listeners.length-1;i>=0;i--)this.removeListener(type,listeners[i]);return this};
	Define(o, 'removeAllListeners', removeAllListeners)
	function _listeners(target,type,unwrap){var events=target._events;if(void 0===events)return[];var evlistener=events[type];return void 0===evlistener?[]:'function'==typeof evlistener?unwrap?[evlistener.listener||evlistener]:[evlistener]:unwrap?unwrapListeners(evlistener):arrayClone(evlistener,evlistener.length)}
	function listeners(type){return _listeners(this,type,true)};
	Define(o, 'listeners', listeners)
	function rawListeners(type){return _listeners(this,type,false)};
	Define(o, 'rawListenrs', rawListeners)
	Define(o, 'listenerCount', listenerCount)
	function listenerCount(type){var events=this._events;if(void 0!==events){var evlistener=events[type];if('function'==typeof evlistener)return 1;if(void 0!==evlistener)return evlistener.length}return 0}
	function eventNames(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]};
	Define(o, 'eventNames', eventNames)
	function arrayClone(arr,n){var copy=new Array(n);for(var i=0;i<n;++i)copy[i]=arr[i];return copy}
	function spliceOne(list,index){for(;index+1<list.length;index++)list[index]=list[index+1];list.pop()}
	function unwrapListeners(arr){var ret=new Array(arr.length);for(var i=0;i<ret.length;++i)ret[i]=arr[i].listener||arr[i];return ret}

	return o

})

