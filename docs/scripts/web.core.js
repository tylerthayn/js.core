require = {
	deps: [
		'lodash',
		'jquery',
		'jquery-ui',
		//'@css/jquery-ui',
		'@popperjs/core',
		'bootstrap',
		'notifyjs',
		'@js/core',
		'jQuery',
		'Observers',
		'Ui',
		//'@css/tts'
	],
	callback: (...modules) => {
		console.log('@web/core loaded')
	}
}


/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
var requirejs,require,define;!function(global,setTimeout){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version='2.3.6',commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!('undefined'==typeof window||'undefined'==typeof navigator||!window.document),isWebWorker=!isBrowser&&'undefined'!=typeof importScripts,readyRegExp=isBrowser&&'PLAYSTATION 3'===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName='_',isOpera='undefined'!=typeof opera&&'[object Opera]'===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function commentReplace(e,t){return t||''}function isFunction(e){return'[object Function]'===ostring.call(e)}function isArray(e){return'[object Array]'===ostring.call(e)}function each(e,t){var i;if(e)for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}function eachReverse(e,t){var i;if(e)for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){return t&&eachProp(t,function(t,n){!i&&hasProp(e,n)||(!r||'object'!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),mixin(e[n],t,i,r)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName('script')}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split('.'),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+'\nhttps://requirejs.org/docs/errors.html#'+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||'string'==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=void 0!==setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(['toUrl','undef','defined','specified'],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName('head')[0],baseElement=document.getElementsByTagName('base')[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS('http://www.w3.org/1999/xhtml','html:script'):document.createElement('script');return r.type=e.scriptType||'text/javascript',r.charset='utf-8',r.async=!0,r},req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser)return(r=req.createNode(n,t,i)).setAttribute('data-requirecontext',e.contextName),r.setAttribute('data-requiremodule',t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf('[native code')<0||isOpera?(r.addEventListener('load',e.onScriptLoad,!1),r.addEventListener('error',e.onScriptError,!1)):(useInteractive=!0,r.attachEvent('onreadystatechange',e.onScriptLoad)),r.src=i,n.onNodeCreated&&n.onNodeCreated(r,n,t,i),currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{setTimeout(function(){},0),importScripts(i),e.completeLoad(t)}catch(r){e.onError(makeError('importscripts','importScripts failed for '+t+' at '+i,r,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute('data-main'))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf('!')||(src=mainScript.split('/'),mainScript=src.pop(),subPath=src.length?src.join('/')+'/':'./',cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,''),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,i){var r,n;'string'!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?['require']:['require','exports','module']).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript())&&(e||(e=r.getAttribute('data-requiremodule')),n=contexts[r.getAttribute('data-requirecontext')]),n?(n.defQueue.push([e,t,i]),n.defQueueMap[e]=!0):globalDefQueue.push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(e){var t,i,r,n,o,a={waitSeconds:7,baseUrl:'./',paths:{},bundles:{},pkgs:{},shim:{},config:{}},s={},u={},c={},d=[],p={},f={},l={},h=1,m=1;function g(e,t,i){var r,n,o,s,u,c,d,p,f,l,h=t&&t.split('/'),m=a.map,g=m&&m['*'];if(e&&(c=(e=e.split('/')).length-1,a.nodeIdCompat&&jsSuffixRegExp.test(e[c])&&(e[c]=e[c].replace(jsSuffixRegExp,'')),'.'===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),function(e){var t,i;for(t=0;t<e.length;t++)if('.'===(i=e[t]))e.splice(t,1),t-=1;else if('..'===i){if(0===t||1===t&&'..'===e[2]||'..'===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}(e),e=e.join('/')),i&&m&&(h||g)){n=e.split('/');e:for(o=n.length;o>0;o-=1){if(u=n.slice(0,o).join('/'),h)for(s=h.length;s>0;s-=1)if((r=getOwn(m,h.slice(0,s).join('/')))&&(r=getOwn(r,u))){d=r,p=o;break e}!f&&g&&getOwn(g,u)&&(f=getOwn(g,u),l=o)}!d&&f&&(d=f,p=l),d&&(n.splice(0,p,d),e=n.join('/'))}return getOwn(a.pkgs,e)||e}function v(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute('data-requiremodule')===e&&t.getAttribute('data-requirecontext')===r.contextName)return t.parentNode.removeChild(t),!0})}function x(e){var t=getOwn(a.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),r.require.undef(e),r.makeRequire(null,{skipMap:!0})([e]),!0}function b(e){var t,i=e?e.indexOf('!'):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function q(e,t,i,n){var o,a,s,u,c=null,d=t?t.name:null,f=e,l=!0,v='';return e||(l=!1,e='_@r'+(h+=1)),c=(u=b(e))[0],e=u[1],c&&(c=g(c,d,n),a=getOwn(p,c)),e&&(c?v=i?e:a&&a.normalize?a.normalize(e,function(e){return g(e,d,n)}):-1===e.indexOf('!')?g(e,d,n):e:(c=(u=b(v=g(e,d,n)))[0],v=u[1],i=!0,o=r.nameToUrl(v))),{prefix:c,name:v,parentMap:t,unnormalized:!!(s=!c||a||i?'':'_unnormalized'+(m+=1)),url:o,originalName:f,isDefine:l,id:(c?c+'!'+v:v)+s}}function E(e){var t=e.id,i=getOwn(s,t);return i||(i=s[t]=new r.Module(e)),i}function w(e,t,i){var r=e.id,n=getOwn(s,r);!hasProp(p,r)||n&&!n.defineEmitComplete?(n=E(e)).error&&'error'===t?i(n.error):n.on(t,i):'defined'===t&&i(p[r])}function y(e,t){var i=e.requireModules,r=!1;t?t(e):(each(i,function(t){var i=getOwn(s,t);i&&(i.error=e,i.events.error&&(r=!0,i.emit('error',e)))}),r||req.onError(e))}function S(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];'string'==typeof t&&(r.defQueueMap[t]=!0),d.push(e)}),globalDefQueue=[])}function k(e){delete s[e],delete u[e]}function M(){var e,i,n=1e3*a.waitSeconds,c=n&&r.startTime+n<(new Date).getTime(),d=[],f=[],l=!1,h=!0;if(!t){if(t=!0,eachProp(u,function(e){var t=e.map,r=t.id;if(e.enabled&&(t.isDefine||f.push(e),!e.error))if(!e.inited&&c)x(r)?(i=!0,l=!0):(d.push(r),v(r));else if(!e.inited&&e.fetched&&t.isDefine&&(l=!0,!t.prefix))return h=!1}),c&&d.length)return(e=makeError('timeout','Load timeout for modules: '+d,null,d)).contextName=r.contextName,y(e);h&&each(f,function(e){!function e(t,i,r){var n=t.map.id;t.error?t.emit('error',t.error):(i[n]=!0,each(t.depMaps,function(n,o){var a=n.id,u=getOwn(s,a);!u||t.depMatched[o]||r[a]||(getOwn(i,a)?(t.defineDep(o,p[a]),t.check()):e(u,i,r))}),r[n]=!0)}(e,{},{})}),c&&!i||!l||!isBrowser&&!isWebWorker||o||(o=setTimeout(function(){o=0,M()},50)),t=!1}}function O(e){hasProp(p,e[0])||E(q(e[0],null,!0)).init(e[1],e[2])}function j(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function P(e){var t=e.currentTarget||e.srcElement;return j(t,r.onScriptLoad,'load','onreadystatechange'),j(t,r.onScriptError,'error'),{node:t,id:t&&t.getAttribute('data-requiremodule')}}function R(){var e;for(S();d.length;){if(null===(e=d.shift())[0])return y(makeError('mismatch','Mismatched anonymous define() module: '+e[e.length-1]));O(e)}r.defQueueMap={}}return n={require:function(e){return e.require?e.require:e.require=r.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?p[e.map.id]=e.exports:e.exports=p[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(a.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(i=function(e){this.events=getOwn(c,e.id)||{},this.map=e,this.shim=getOwn(a.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on('error',i):this.events.error&&(i=bind(this,function(e){this.emit('error',e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,r.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();r.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;f[e]||(f[e]=!0,r.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,n=this.depExports,o=this.exports,a=this.factory;if(this.inited){if(this.error)this.emit('error',this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(a)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{o=r.execCb(i,a,n,o)}catch(t){e=t}else o=r.execCb(i,a,n,o);if(this.map.isDefine&&void 0===o&&((t=this.module)?o=t.exports:this.usingExports&&(o=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?'define':'require',y(this.error=e)}else o=a;if(this.exports=o,this.map.isDefine&&!this.ignore&&(p[i]=o,req.onResourceLoad)){var s=[];each(this.depMaps,function(e){s.push(e.normalizedMap||e)}),req.onResourceLoad(r,this.map,s)}k(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit('defined',this.exports),this.defineEmitComplete=!0)}}else hasProp(r.defQueueMap,i)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=q(e.prefix);this.depMaps.push(i),w(i,'defined',bind(this,function(i){var n,o,u,c=getOwn(l,this.map.id),d=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,f=r.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(i.normalize&&(d=i.normalize(d,function(e){return g(e,p,!0)})||''),w(o=q(e.prefix+'!'+d,this.map.parentMap,!0),'defined',bind(this,function(e){this.map.normalizedMap=o,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((u=getOwn(s,o.id))&&(this.depMaps.push(o),this.events.error&&u.on('error',bind(this,function(e){this.emit('error',e)})),u.enable()))):c?(this.map.url=r.nameToUrl(c),void this.load()):((n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(s,function(e){0===e.map.id.indexOf(t+'_unnormalized')&&k(e.map.id)}),y(e)}),n.fromText=bind(this,function(i,o){var s=e.name,u=q(s),c=useInteractive;o&&(i=o),c&&(useInteractive=!1),E(u),hasProp(a.config,t)&&(a.config[s]=a.config[t]);try{req.exec(i)}catch(e){return y(makeError('fromtexteval','fromText eval for '+t+' failed: '+e,e,[t]))}c&&(useInteractive=!0),this.depMaps.push(u),r.completeLoad(s),f([s],n)}),void i.load(e.name,f,n,a))})),r.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){u[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,o,a;if('string'==typeof e){if(e=q(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,a=getOwn(n,e.id))return void(this.depExports[t]=a(this));this.depCount+=1,w(e,'defined',bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?w(e,'error',bind(this,this.errback)):this.events.error&&w(e,'error',bind(this,function(e){this.emit('error',e)}))}i=e.id,o=s[i],hasProp(n,i)||!o||o.enabled||r.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(s,e.id);t&&!t.enabled&&r.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),'error'===e&&delete this.events[e]}},(r={config:a,contextName:e,registry:s,defined:p,urlFetched:f,defQueue:d,defQueueMap:{},Module:i,makeModuleMap:q,nextTick:req.nextTick,onError:y,configure:function(e){if(e.baseUrl&&'/'!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+='/'),'string'==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,i){return(-1===i.indexOf('?')?'?':'&')+t}}var i=a.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(a[t]||(a[t]={}),mixin(a[t],e,!0,!0)):a[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(l[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=r.makeShimExports(e)),i[t]=e}),a.shim=i),e.packages&&each(e.packages,function(e){var t;t=(e='string'==typeof e?{name:e}:e).name,e.location&&(a.paths[t]=e.location),a.pkgs[t]=e.name+'/'+(e.main||'main').replace(currDirRegExp,'').replace(jsSuffixRegExp,'')}),eachProp(s,function(e,t){e.inited||e.map.unnormalized||(e.map=q(t,null,!0))}),(e.deps||e.callback)&&r.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}},makeRequire:function(t,i){function o(a,u,c){var d,f;return i.enableBuildCallback&&u&&isFunction(u)&&(u.__requireJsBuild=!0),'string'==typeof a?isFunction(u)?y(makeError('requireargs','Invalid require call'),c):t&&hasProp(n,a)?n[a](s[t.id]):req.get?req.get(r,a,t,o):(d=q(a,t,!1,!0).id,hasProp(p,d)?p[d]:y(makeError('notloaded','Module name "'+d+'" has not been loaded yet for context: '+e+(t?'':'. Use require([])')))):(R(),r.nextTick(function(){R(),(f=E(q(null,t))).skipMap=i.skipMap,f.init(a,u,c,{enabled:!0}),M()}),o)}return i=i||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var i,n=e.lastIndexOf('.'),o=e.split('/')[0];return-1!==n&&(!('.'===o||'..'===o)||n>1)&&(i=e.substring(n,e.length),e=e.substring(0,n)),r.nameToUrl(g(e,t&&t.id,!0),i,!0)},defined:function(e){return hasProp(p,q(e,t,!1,!0).id)},specified:function(e){return e=q(e,t,!1,!0).id,hasProp(p,e)||hasProp(s,e)}}),t||(o.undef=function(e){S();var i=q(e,t,!0),n=getOwn(s,e);n.undefed=!0,v(e),delete p[e],delete f[i.url],delete c[e],eachReverse(d,function(t,i){t[0]===e&&d.splice(i,1)}),delete r.defQueueMap[e],n&&(n.events.defined&&(c[e]=n.events),k(e))}),o},enable:function(e){getOwn(s,e.id)&&E(e).enable()},completeLoad:function(e){var t,i,n,o=getOwn(a.shim,e)||{},u=o.exports;for(S();d.length;){if(null===(i=d.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);O(i)}if(r.defQueueMap={},n=getOwn(s,e),!t&&!hasProp(p,e)&&n&&!n.inited){if(!(!a.enforceDefine||u&&getGlobal(u)))return x(e)?void 0:y(makeError('nodefine','No define call for '+e,null,[e]));O([e,o.deps||[],o.exportsFn])}M()},nameToUrl:function(e,t,i){var n,o,s,u,c,d,p=getOwn(a.pkgs,e);if(p&&(e=p),d=getOwn(l,e))return r.nameToUrl(d,t,i);if(req.jsExtRegExp.test(e))u=e+(t||'');else{for(n=a.paths,s=(o=e.split('/')).length;s>0;s-=1)if(c=getOwn(n,o.slice(0,s).join('/'))){isArray(c)&&(c=c[0]),o.splice(0,s,c);break}u=o.join('/'),u=('/'===(u+=t||(/^data\:|^blob\:|\?/.test(u)||i?'':'.js')).charAt(0)||u.match(/^[\w\+\.\-]+:/)?'':a.baseUrl)+u}return a.urlArgs&&!/^blob\:/.test(u)?u+a.urlArgs(e,u):u},load:function(e,t){req.load(r,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if('load'===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=P(e);r.completeLoad(t.id)}},onScriptError:function(e){var t=P(e);if(!x(t.id)){var i=[];return eachProp(s,function(e,r){0!==r.indexOf('_@r')&&each(e.depMaps,function(e){if(e.id===t.id)return i.push(r),!0})}),y(makeError('scripterror','Script error for "'+t.id+(i.length?'", needed by: '+i.join(', '):'"'),e,[t.id]))}}}).require=r.makeRequire(),r}function getInteractiveScript(){return interactiveScript&&'interactive'===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if('interactive'===e.readyState)return interactiveScript=e}),interactiveScript)}}(this,'undefined'==typeof setTimeout?void 0:setTimeout);

/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){var n,t=200,r='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',e='Expected a function',u='Invalid `variable` option passed into `_.template`',i='__lodash_hash_undefined__',o=500,f='__lodash_placeholder__',a=1,c=2,l=4,s=1,h=2,p=1,v=2,_=4,g=8,y=16,d=32,b=64,w=128,m=256,x=512,j=30,A='...',k=800,O=16,I=1,R=2,E=1/0,z=9007199254740991,S=1.7976931348623157e308,L=NaN,W=4294967295,C=W-1,U=W>>>1,B=[['ary',w],['bind',p],['bindKey',v],['curry',g],['curryRight',y],['flip',x],['partial',d],['partialRight',b],['rearg',m]],T='[object Arguments]',D='[object Array]',$='[object AsyncFunction]',M='[object Boolean]',F='[object Date]',N='[object DOMException]',P='[object Error]',q='[object Function]',Z='[object GeneratorFunction]',K='[object Map]',V='[object Number]',G='[object Null]',H='[object Object]',J='[object Proxy]',Y='[object RegExp]',Q='[object Set]',X='[object String]',nn='[object Symbol]',tn='[object Undefined]',rn='[object WeakMap]',en='[object WeakSet]',un='[object ArrayBuffer]',on='[object DataView]',fn='[object Float32Array]',an='[object Float64Array]',cn='[object Int8Array]',ln='[object Int16Array]',sn='[object Int32Array]',hn='[object Uint8Array]',pn='[object Uint8ClampedArray]',vn='[object Uint16Array]',_n='[object Uint32Array]',gn=/\b__p \+= '';/g,yn=/\b(__p \+=) '' \+/g,dn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,bn=/&(?:amp|lt|gt|quot|#39);/g,wn=/[&<>"']/g,mn=RegExp(bn.source),xn=RegExp(wn.source),jn=/<%-([\s\S]+?)%>/g,An=/<%([\s\S]+?)%>/g,kn=/<%=([\s\S]+?)%>/g,On=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,In=/^\w*$/,Rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,En=/[\\^$.*+?()[\]{}|]/g,zn=RegExp(En.source),Sn=/^\s+/,Ln=/\s/,Wn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Cn=/\{\n\/\* \[wrapped with (.+)\] \*/,Un=/,? & /,Bn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Tn=/[()=,{}\[\]\/\s]/,Dn=/\\(\\)?/g,$n=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Mn=/\w*$/,Fn=/^[-+]0x[0-9a-f]+$/i,Nn=/^0b[01]+$/i,Pn=/^\[object .+?Constructor\]$/,qn=/^0o[0-7]+$/i,Zn=/^(?:0|[1-9]\d*)$/,Kn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Vn=/($^)/,Gn=/['\n\r\u2028\u2029\\]/g,Hn='\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',Jn='\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',Yn='[\\ud800-\\udfff]',Qn='['+Jn+']',Xn='['+Hn+']',nt='\\d+',tt='[\\u2700-\\u27bf]',rt='[a-z\\xdf-\\xf6\\xf8-\\xff]',et='[^\\ud800-\\udfff'+Jn+nt+'\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',ut='\\ud83c[\\udffb-\\udfff]',it='[^\\ud800-\\udfff]',ot='(?:\\ud83c[\\udde6-\\uddff]){2}',ft='[\\ud800-\\udbff][\\udc00-\\udfff]',at='[A-Z\\xc0-\\xd6\\xd8-\\xde]',ct='(?:'+rt+'|'+et+')',lt='(?:'+at+'|'+et+')',st='(?:'+Xn+'|'+ut+')'+'?',ht='[\\ufe0e\\ufe0f]?'+st+('(?:\\u200d(?:'+[it,ot,ft].join('|')+')[\\ufe0e\\ufe0f]?'+st+')*'),pt='(?:'+[tt,ot,ft].join('|')+')'+ht,vt='(?:'+[it+Xn+'?',Xn,ot,ft,Yn].join('|')+')',_t=RegExp('[\'’]','g'),gt=RegExp(Xn,'g'),yt=RegExp(ut+'(?='+ut+')|'+vt+ht,'g'),dt=RegExp([at+'?'+rt+'+(?:[\'’](?:d|ll|m|re|s|t|ve))?(?='+[Qn,at,'$'].join('|')+')',lt+'+(?:[\'’](?:D|LL|M|RE|S|T|VE))?(?='+[Qn,at+ct,'$'].join('|')+')',at+'?'+ct+'+(?:[\'’](?:d|ll|m|re|s|t|ve))?',at+'+(?:[\'’](?:D|LL|M|RE|S|T|VE))?','\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])','\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',nt,pt].join('|'),'g'),bt=RegExp('[\\u200d\\ud800-\\udfff'+Hn+'\\ufe0e\\ufe0f]'),wt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,mt=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'],xt=-1,jt={};jt[fn]=jt[an]=jt[cn]=jt[ln]=jt[sn]=jt[hn]=jt[pn]=jt[vn]=jt[_n]=!0,jt[T]=jt[D]=jt[un]=jt[M]=jt[on]=jt[F]=jt[P]=jt[q]=jt[K]=jt[V]=jt[H]=jt[Y]=jt[Q]=jt[X]=jt[rn]=!1;var At={};At[T]=At[D]=At[un]=At[on]=At[M]=At[F]=At[fn]=At[an]=At[cn]=At[ln]=At[sn]=At[K]=At[V]=At[H]=At[Y]=At[Q]=At[X]=At[nn]=At[hn]=At[pn]=At[vn]=At[_n]=!0,At[P]=At[q]=At[rn]=!1;var kt={'\\':'\\','\'':'\'','\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'},Ot=parseFloat,It=parseInt,Rt='object'==typeof global&&global&&global.Object===Object&&global,Et='object'==typeof self&&self&&self.Object===Object&&self,zt=Rt||Et||Function('return this')(),St='object'==typeof exports&&exports&&!exports.nodeType&&exports,Lt=St&&'object'==typeof module&&module&&!module.nodeType&&module,Wt=Lt&&Lt.exports===St,Ct=Wt&&Rt.process,Ut=function(){try{var n=Lt&&Lt.require&&Lt.require('util').types;return n||Ct&&Ct.binding&&Ct.binding('util')}catch(n){}}(),Bt=Ut&&Ut.isArrayBuffer,Tt=Ut&&Ut.isDate,Dt=Ut&&Ut.isMap,$t=Ut&&Ut.isRegExp,Mt=Ut&&Ut.isSet,Ft=Ut&&Ut.isTypedArray;function Nt(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function Pt(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function qt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&!1!==t(n[r],r,n););return n}function Zt(n,t){for(var r=null==n?0:n.length;r--&&!1!==t(n[r],r,n););return n}function Kt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function Vt(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function Gt(n,t){return!!(null==n?0:n.length)&&ur(n,t,0)>-1}function Ht(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function Jt(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function Yt(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Qt(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function Xt(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function nr(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}var tr=ar('length');function rr(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function er(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function ur(n,t,r){return t==t?function(n,t,r){var e=r-1,u=n.length;for(;++e<u;)if(n[e]===t)return e;return-1}(n,t,r):er(n,or,r)}function ir(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function or(n){return n!=n}function fr(n,t){var r=null==n?0:n.length;return r?sr(n,t)/r:L}function ar(t){return function(r){return null==r?n:r[t]}}function cr(t){return function(r){return null==t?n:t[r]}}function lr(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function sr(t,r){for(var e,u=-1,i=t.length;++u<i;){var o=r(t[u]);o!==n&&(e=e===n?o:e+o)}return e}function hr(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function pr(n){return n?n.slice(0,zr(n)+1).replace(Sn,''):n}function vr(n){return function(t){return n(t)}}function _r(n,t){return Jt(t,function(t){return n[t]})}function gr(n,t){return n.has(t)}function yr(n,t){for(var r=-1,e=n.length;++r<e&&ur(t,n[r],0)>-1;);return r}function dr(n,t){for(var r=n.length;r--&&ur(t,n[r],0)>-1;);return r}var br=cr({'À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','Ç':'C','ç':'c','Ð':'D','ð':'d','È':'E','É':'E','Ê':'E','Ë':'E','è':'e','é':'e','ê':'e','ë':'e','Ì':'I','Í':'I','Î':'I','Ï':'I','ì':'i','í':'i','î':'i','ï':'i','Ñ':'N','ñ':'n','Ò':'O','Ó':'O','Ô':'O','Õ':'O','Ö':'O','Ø':'O','ò':'o','ó':'o','ô':'o','õ':'o','ö':'o','ø':'o','Ù':'U','Ú':'U','Û':'U','Ü':'U','ù':'u','ú':'u','û':'u','ü':'u','Ý':'Y','ý':'y','ÿ':'y','Æ':'Ae','æ':'ae','Þ':'Th','þ':'th','ß':'ss','Ā':'A','Ă':'A','Ą':'A','ā':'a','ă':'a','ą':'a','Ć':'C','Ĉ':'C','Ċ':'C','Č':'C','ć':'c','ĉ':'c','ċ':'c','č':'c','Ď':'D','Đ':'D','ď':'d','đ':'d','Ē':'E','Ĕ':'E','Ė':'E','Ę':'E','Ě':'E','ē':'e','ĕ':'e','ė':'e','ę':'e','ě':'e','Ĝ':'G','Ğ':'G','Ġ':'G','Ģ':'G','ĝ':'g','ğ':'g','ġ':'g','ģ':'g','Ĥ':'H','Ħ':'H','ĥ':'h','ħ':'h','Ĩ':'I','Ī':'I','Ĭ':'I','Į':'I','İ':'I','ĩ':'i','ī':'i','ĭ':'i','į':'i','ı':'i','Ĵ':'J','ĵ':'j','Ķ':'K','ķ':'k','ĸ':'k','Ĺ':'L','Ļ':'L','Ľ':'L','Ŀ':'L','Ł':'L','ĺ':'l','ļ':'l','ľ':'l','ŀ':'l','ł':'l','Ń':'N','Ņ':'N','Ň':'N','Ŋ':'N','ń':'n','ņ':'n','ň':'n','ŋ':'n','Ō':'O','Ŏ':'O','Ő':'O','ō':'o','ŏ':'o','ő':'o','Ŕ':'R','Ŗ':'R','Ř':'R','ŕ':'r','ŗ':'r','ř':'r','Ś':'S','Ŝ':'S','Ş':'S','Š':'S','ś':'s','ŝ':'s','ş':'s','š':'s','Ţ':'T','Ť':'T','Ŧ':'T','ţ':'t','ť':'t','ŧ':'t','Ũ':'U','Ū':'U','Ŭ':'U','Ů':'U','Ű':'U','Ų':'U','ũ':'u','ū':'u','ŭ':'u','ů':'u','ű':'u','ų':'u','Ŵ':'W','ŵ':'w','Ŷ':'Y','ŷ':'y','Ÿ':'Y','Ź':'Z','Ż':'Z','Ž':'Z','ź':'z','ż':'z','ž':'z','Ĳ':'IJ','ĳ':'ij','Œ':'Oe','œ':'oe','ŉ':'\'n','ſ':'s'}),wr=cr({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'});function mr(n){return'\\'+kt[n]}function xr(n){return bt.test(n)}function jr(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function Ar(n,t){return function(r){return n(t(r))}}function kr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==f||(n[r]=f,i[u++]=r)}return i}function Or(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Ir(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function Rr(n){return xr(n)?function(n){var t=yt.lastIndex=0;for(;yt.test(n);)++t;return t}(n):tr(n)}function Er(n){return xr(n)?function(n){return n.match(yt)||[]}(n):function(n){return n.split('')}(n)}function zr(n){for(var t=n.length;t--&&Ln.test(n.charAt(t)););return t}var Sr=cr({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':'\''});var Lr=function Ln(Hn){var Jn,Yn=(Hn=null==Hn?zt:Lr.defaults(zt.Object(),Hn,Lr.pick(zt,mt))).Array,Qn=Hn.Date,Xn=Hn.Error,nt=Hn.Function,tt=Hn.Math,rt=Hn.Object,et=Hn.RegExp,ut=Hn.String,it=Hn.TypeError,ot=Yn.prototype,ft=nt.prototype,at=rt.prototype,ct=Hn['__core-js_shared__'],lt=ft.toString,st=at.hasOwnProperty,ht=0,pt=(Jn=/[^.]+$/.exec(ct&&ct.keys&&ct.keys.IE_PROTO||''))?'Symbol(src)_1.'+Jn:'',vt=at.toString,yt=lt.call(rt),bt=zt._,kt=et('^'+lt.call(st).replace(En,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$'),Rt=Wt?Hn.Buffer:n,Et=Hn.Symbol,St=Hn.Uint8Array,Lt=Rt?Rt.allocUnsafe:n,Ct=Ar(rt.getPrototypeOf,rt),Ut=rt.create,tr=at.propertyIsEnumerable,cr=ot.splice,Wr=Et?Et.isConcatSpreadable:n,Cr=Et?Et.iterator:n,Ur=Et?Et.toStringTag:n,Br=function(){try{var n=Mi(rt,'defineProperty');return n({},'',{}),n}catch(n){}}(),Tr=Hn.clearTimeout!==zt.clearTimeout&&Hn.clearTimeout,Dr=Qn&&Qn.now!==zt.Date.now&&Qn.now,$r=Hn.setTimeout!==zt.setTimeout&&Hn.setTimeout,Mr=tt.ceil,Fr=tt.floor,Nr=rt.getOwnPropertySymbols,Pr=Rt?Rt.isBuffer:n,qr=Hn.isFinite,Zr=ot.join,Kr=Ar(rt.keys,rt),Vr=tt.max,Gr=tt.min,Hr=Qn.now,Jr=Hn.parseInt,Yr=tt.random,Qr=ot.reverse,Xr=Mi(Hn,'DataView'),ne=Mi(Hn,'Map'),te=Mi(Hn,'Promise'),re=Mi(Hn,'Set'),ee=Mi(Hn,'WeakMap'),ue=Mi(rt,'create'),ie=ee&&new ee,oe={},fe=ho(Xr),ae=ho(ne),ce=ho(te),le=ho(re),se=ho(ee),he=Et?Et.prototype:n,pe=he?he.valueOf:n,ve=he?he.toString:n;function _e(n){if(Sf(n)&&!wf(n)&&!(n instanceof be)){if(n instanceof de)return n;if(st.call(n,'__wrapped__'))return po(n)}return new de(n)}var ge=function(){function t(){}return function(r){if(!zf(r))return{};if(Ut)return Ut(r);t.prototype=r;var e=new t;return t.prototype=n,e}}();function ye(){}function de(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=n}function be(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=W,this.__views__=[]}function we(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function me(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function xe(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function je(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new xe;++t<r;)this.add(n[t])}function Ae(n){var t=this.__data__=new me(n);this.size=t.size}function ke(n,t){var r=wf(n),e=!r&&bf(n),u=!r&&!e&&Af(n),i=!r&&!e&&!u&&$f(n),o=r||e||u||i,f=o?hr(n.length,ut):[],a=f.length;for(var c in n)!t&&!st.call(n,c)||o&&('length'==c||u&&('offset'==c||'parent'==c)||i&&('buffer'==c||'byteLength'==c||'byteOffset'==c)||Vi(c,a))||f.push(c);return f}function Oe(t){var r=t.length;return r?t[ju(0,r-1)]:n}function Ie(n,t){return co(ui(n),Be(t,0,n.length))}function Re(n){return co(ui(n))}function Ee(t,r,e){(e===n||gf(t[r],e))&&(e!==n||r in t)||Ce(t,r,e)}function ze(t,r,e){var u=t[r];st.call(t,r)&&gf(u,e)&&(e!==n||r in t)||Ce(t,r,e)}function Se(n,t){for(var r=n.length;r--;)if(gf(n[r][0],t))return r;return-1}function Le(n,t,r,e){return Fe(n,function(n,u,i){t(e,n,r(n),i)}),e}function We(n,t){return n&&ii(t,fa(t),n)}function Ce(n,t,r){'__proto__'==t&&Br?Br(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Ue(t,r){for(var e=-1,u=r.length,i=Yn(u),o=null==t;++e<u;)i[e]=o?n:ra(t,r[e]);return i}function Be(t,r,e){return t==t&&(e!==n&&(t=t<=e?t:e),r!==n&&(t=t>=r?t:r)),t}function Te(t,r,e,u,i,o){var f,s=r&a,h=r&c,p=r&l;if(e&&(f=i?e(t,u,i,o):e(t)),f!==n)return f;if(!zf(t))return t;var v=wf(t);if(v){if(f=function(n){var t=n.length,r=new n.constructor(t);return t&&'string'==typeof n[0]&&st.call(n,'index')&&(r.index=n.index,r.input=n.input),r}(t),!s)return ui(t,f)}else{var _=Pi(t),g=_==q||_==Z;if(Af(t))return Qu(t,s);if(_==H||_==T||g&&!i){if(f=h||g?{}:Zi(t),!s)return h?function(n,t){return ii(n,Ni(n),t)}(t,function(n,t){return n&&ii(t,aa(t),n)}(f,t)):function(n,t){return ii(n,Fi(n),t)}(t,We(f,t))}else{if(!At[_])return i?t:{};f=function(n,t,r){var e,u,i,o=n.constructor;switch(t){case un:return Xu(n);case M:case F:return new o(+n);case on:return function(n,t){var r=t?Xu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}(n,r);case fn:case an:case cn:case ln:case sn:case hn:case pn:case vn:case _n:return ni(n,r);case K:return new o;case V:case X:return new o(n);case Y:return(i=new(u=n).constructor(u.source,Mn.exec(u))).lastIndex=u.lastIndex,i;case Q:return new o;case nn:return e=n,pe?rt(pe.call(e)):{}}}(t,_,s)}}o||(o=new Ae);var y=o.get(t);if(y)return y;o.set(t,f),Bf(t)?t.forEach(function(n){f.add(Te(n,r,e,n,t,o))}):Lf(t)&&t.forEach(function(n,u){f.set(u,Te(n,r,e,u,t,o))});var d=v?n:(p?h?Wi:Li:h?aa:fa)(t);return qt(d||t,function(n,u){d&&(n=t[u=n]),ze(f,u,Te(n,r,e,u,t,o))}),f}function De(t,r,e){var u=e.length;if(null==t)return!u;for(t=rt(t);u--;){var i=e[u],o=r[i],f=t[i];if(f===n&&!(i in t)||!o(f))return!1}return!0}function $e(t,r,u){if('function'!=typeof t)throw new it(e);return io(function(){t.apply(n,u)},r)}function Me(n,r,e,u){var i=-1,o=Gt,f=!0,a=n.length,c=[],l=r.length;if(!a)return c;e&&(r=Jt(r,vr(e))),u?(o=Ht,f=!1):r.length>=t&&(o=gr,f=!1,r=new je(r));n:for(;++i<a;){var s=n[i],h=null==e?s:e(s);if(s=u||0!==s?s:0,f&&h==h){for(var p=l;p--;)if(r[p]===h)continue n;c.push(s)}else o(r,h,u)||c.push(s)}return c}_e.templateSettings={escape:jn,evaluate:An,interpolate:kn,variable:'',imports:{_:_e}},_e.prototype=ye.prototype,_e.prototype.constructor=_e,de.prototype=ge(ye.prototype),de.prototype.constructor=de,be.prototype=ge(ye.prototype),be.prototype.constructor=be,we.prototype.clear=function(){this.__data__=ue?ue(null):{},this.size=0},we.prototype.delete=function(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t},we.prototype.get=function(t){var r=this.__data__;if(ue){var e=r[t];return e===i?n:e}return st.call(r,t)?r[t]:n},we.prototype.has=function(t){var r=this.__data__;return ue?r[t]!==n:st.call(r,t)},we.prototype.set=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=ue&&r===n?i:r,this},me.prototype.clear=function(){this.__data__=[],this.size=0},me.prototype.delete=function(n){var t=this.__data__,r=Se(t,n);return!(r<0||(r==t.length-1?t.pop():cr.call(t,r,1),--this.size,0))},me.prototype.get=function(t){var r=this.__data__,e=Se(r,t);return e<0?n:r[e][1]},me.prototype.has=function(n){return Se(this.__data__,n)>-1},me.prototype.set=function(n,t){var r=this.__data__,e=Se(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this},xe.prototype.clear=function(){this.size=0,this.__data__={hash:new we,map:new(ne||me),string:new we}},xe.prototype.delete=function(n){var t=Di(this,n).delete(n);return this.size-=t?1:0,t},xe.prototype.get=function(n){return Di(this,n).get(n)},xe.prototype.has=function(n){return Di(this,n).has(n)},xe.prototype.set=function(n,t){var r=Di(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},je.prototype.add=je.prototype.push=function(n){return this.__data__.set(n,i),this},je.prototype.has=function(n){return this.__data__.has(n)},Ae.prototype.clear=function(){this.__data__=new me,this.size=0},Ae.prototype.delete=function(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r},Ae.prototype.get=function(n){return this.__data__.get(n)},Ae.prototype.has=function(n){return this.__data__.has(n)},Ae.prototype.set=function(n,r){var e=this.__data__;if(e instanceof me){var u=e.__data__;if(!ne||u.length<t-1)return u.push([n,r]),this.size=++e.size,this;e=this.__data__=new xe(u)}return e.set(n,r),this.size=e.size,this};var Fe=ai(He),Ne=ai(Je,!0);function Pe(n,t){var r=!0;return Fe(n,function(n,e,u){return r=!!t(n,e,u)}),r}function qe(t,r,e){for(var u=-1,i=t.length;++u<i;){var o=t[u],f=r(o);if(null!=f&&(a===n?f==f&&!Df(f):e(f,a)))var a=f,c=o}return c}function Ze(n,t){var r=[];return Fe(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function Ke(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ki),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?Ke(f,t-1,r,e,u):Yt(u,f):e||(u[u.length]=f)}return u}var Ve=ci(),Ge=ci(!0);function He(n,t){return n&&Ve(n,t,fa)}function Je(n,t){return n&&Ge(n,t,fa)}function Ye(n,t){return Vt(t,function(t){return If(n[t])})}function Qe(t,r){for(var e=0,u=(r=Gu(r,t)).length;null!=t&&e<u;)t=t[so(r[e++])];return e&&e==u?t:n}function Xe(n,t,r){var e=t(n);return wf(n)?e:Yt(e,r(n))}function nu(t){return null==t?t===n?tn:G:Ur&&Ur in rt(t)?function(t){var r=st.call(t,Ur),e=t[Ur];try{t[Ur]=n;var u=!0}catch(n){}var i=vt.call(t);return u&&(r?t[Ur]=e:delete t[Ur]),i}(t):function(n){return vt.call(n)}(t)}function tu(n,t){return n>t}function ru(n,t){return null!=n&&st.call(n,t)}function eu(n,t){return null!=n&&t in rt(n)}function uu(t,r,e){for(var u=e?Ht:Gt,i=t[0].length,o=t.length,f=o,a=Yn(o),c=1/0,l=[];f--;){var s=t[f];f&&r&&(s=Jt(s,vr(r))),c=Gr(s.length,c),a[f]=!e&&(r||i>=120&&s.length>=120)?new je(f&&s):n}s=t[0];var h=-1,p=a[0];n:for(;++h<i&&l.length<c;){var v=s[h],_=r?r(v):v;if(v=e||0!==v?v:0,!(p?gr(p,_):u(l,_,e))){for(f=o;--f;){var g=a[f];if(!(g?gr(g,_):u(t[f],_,e)))continue n}p&&p.push(_),l.push(v)}}return l}function iu(t,r,e){var u=null==(t=ro(t,r=Gu(r,t)))?t:t[so(ko(r))];return null==u?n:Nt(u,t,e)}function ou(n){return Sf(n)&&nu(n)==T}function fu(t,r,e,u,i){return t===r||(null==t||null==r||!Sf(t)&&!Sf(r)?t!=t&&r!=r:function(t,r,e,u,i,o){var f=wf(t),a=wf(r),c=f?D:Pi(t),l=a?D:Pi(r),p=(c=c==T?H:c)==H,v=(l=l==T?H:l)==H,_=c==l;if(_&&Af(t)){if(!Af(r))return!1;f=!0,p=!1}if(_&&!p)return o||(o=new Ae),f||$f(t)?zi(t,r,e,u,i,o):function(n,t,r,e,u,i,o){switch(r){case on:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case un:return!(n.byteLength!=t.byteLength||!i(new St(n),new St(t)));case M:case F:case V:return gf(+n,+t);case P:return n.name==t.name&&n.message==t.message;case Y:case X:return n==t+'';case K:var f=jr;case Q:var a=e&s;if(f||(f=Or),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=h,o.set(n,t);var l=zi(f(n),f(t),e,u,i,o);return o.delete(n),l;case nn:if(pe)return pe.call(n)==pe.call(t)}return!1}(t,r,c,e,u,i,o);if(!(e&s)){var g=p&&st.call(t,'__wrapped__'),y=v&&st.call(r,'__wrapped__');if(g||y){var d=g?t.value():t,b=y?r.value():r;return o||(o=new Ae),i(d,b,e,u,o)}}return!!_&&(o||(o=new Ae),function(t,r,e,u,i,o){var f=e&s,a=Li(t),c=a.length,l=Li(r).length;if(c!=l&&!f)return!1;for(var h=c;h--;){var p=a[h];if(!(f?p in r:st.call(r,p)))return!1}var v=o.get(t),_=o.get(r);if(v&&_)return v==r&&_==t;var g=!0;o.set(t,r),o.set(r,t);for(var y=f;++h<c;){p=a[h];var d=t[p],b=r[p];if(u)var w=f?u(b,d,p,r,t,o):u(d,b,p,t,r,o);if(!(w===n?d===b||i(d,b,e,u,o):w)){g=!1;break}y||(y='constructor'==p)}if(g&&!y){var m=t.constructor,x=r.constructor;m!=x&&'constructor'in t&&'constructor'in r&&!('function'==typeof m&&m instanceof m&&'function'==typeof x&&x instanceof x)&&(g=!1)}return o.delete(t),o.delete(r),g}(t,r,e,u,i,o))}(t,r,e,u,fu,i))}function au(t,r,e,u){var i=e.length,o=i,f=!u;if(null==t)return!o;for(t=rt(t);i--;){var a=e[i];if(f&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){var c=(a=e[i])[0],l=t[c],p=a[1];if(f&&a[2]){if(l===n&&!(c in t))return!1}else{var v=new Ae;if(u)var _=u(l,p,c,t,r,v);if(!(_===n?fu(p,l,s|h,u,v):_))return!1}}return!0}function cu(n){return!(!zf(n)||pt&&pt in n)&&(If(n)?kt:Pn).test(ho(n))}function lu(n){return'function'==typeof n?n:null==n?Wa:'object'==typeof n?wf(n)?gu(n[0],n[1]):_u(n):Na(n)}function su(n){if(!Qi(n))return Kr(n);var t=[];for(var r in rt(n))st.call(n,r)&&'constructor'!=r&&t.push(r);return t}function hu(n){if(!zf(n))return function(n){var t=[];if(null!=n)for(var r in rt(n))t.push(r);return t}(n);var t=Qi(n),r=[];for(var e in n)('constructor'!=e||!t&&st.call(n,e))&&r.push(e);return r}function pu(n,t){return n<t}function vu(n,t){var r=-1,e=xf(n)?Yn(n.length):[];return Fe(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function _u(n){var t=$i(n);return 1==t.length&&t[0][2]?no(t[0][0],t[0][1]):function(r){return r===n||au(r,n,t)}}function gu(t,r){return Hi(t)&&Xi(r)?no(so(t),r):function(e){var u=ra(e,t);return u===n&&u===r?ea(e,t):fu(r,u,s|h)}}function yu(t,r,e,u,i){t!==r&&Ve(r,function(o,f){if(i||(i=new Ae),zf(o))!function(t,r,e,u,i,o,f){var a=eo(t,e),c=eo(r,e),l=f.get(c);if(l)Ee(t,e,l);else{var s=o?o(a,c,e+'',t,r,f):n,h=s===n;if(h){var p=wf(c),v=!p&&Af(c),_=!p&&!v&&$f(c);s=c,p||v||_?wf(a)?s=a:jf(a)?s=ui(a):v?(h=!1,s=Qu(c,!0)):_?(h=!1,s=ni(c,!0)):s=[]:Cf(c)||bf(c)?(s=a,bf(a)?s=Vf(a):zf(a)&&!If(a)||(s=Zi(c))):h=!1}h&&(f.set(c,s),i(s,c,u,o,f),f.delete(c)),Ee(t,e,s)}}(t,r,f,e,yu,u,i);else{var a=u?u(eo(t,f),o,f+'',t,r,i):n;a===n&&(a=o),Ee(t,f,a)}},aa)}function du(t,r){var e=t.length;if(e)return Vi(r+=r<0?e:0,e)?t[r]:n}function bu(n,t,r){var e=-1;return t=Jt(t=t.length?Jt(t,function(n){return wf(n)?function(t){return Qe(t,1===n.length?n[0]:n)}:n}):[Wa],vr(Ti())),function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}(vu(n,function(n,r,u){return{criteria:Jt(t,function(t){return t(n)}),index:++e,value:n}}),function(n,t){return function(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=ti(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*('desc'==c?-1:1)}}return n.index-t.index}(n,t,r)})}function wu(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Qe(n,o);r(f,o)&&Ru(i,Gu(o,n),f)}return i}function mu(n,t,r,e){var u=e?ir:ur,i=-1,o=t.length,f=n;for(n===t&&(t=ui(t)),r&&(f=Jt(n,vr(r)));++i<o;)for(var a=0,c=t[i],l=r?r(c):c;(a=u(f,l,a,e))>-1;)f!==n&&cr.call(f,a,1),cr.call(n,a,1);return n}function xu(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Vi(u)?cr.call(n,u,1):Mu(n,u)}}return n}function ju(n,t){return n+Fr(Yr()*(t-n+1))}function Au(n,t){var r='';if(!n||t<1||t>z)return r;do{t%2&&(r+=n),(t=Fr(t/2))&&(n+=n)}while(t);return r}function ku(n,t){return oo(to(n,t,Wa),n+'')}function Ou(n){return Oe(ga(n))}function Iu(n,t){var r=ga(n);return co(r,Be(t,0,r.length))}function Ru(t,r,e,u){if(!zf(t))return t;for(var i=-1,o=(r=Gu(r,t)).length,f=o-1,a=t;null!=a&&++i<o;){var c=so(r[i]),l=e;if('__proto__'===c||'constructor'===c||'prototype'===c)return t;if(i!=f){var s=a[c];(l=u?u(s,c,a):n)===n&&(l=zf(s)?s:Vi(r[i+1])?[]:{})}ze(a,c,l),a=a[c]}return t}var Eu=ie?function(n,t){return ie.set(n,t),n}:Wa,zu=Br?function(n,t){return Br(n,'toString',{configurable:!0,enumerable:!1,value:za(t),writable:!0})}:Wa;function Su(n){return co(ga(n))}function Lu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),(r=r>u?u:r)<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=Yn(u);++e<u;)i[e]=n[e+t];return i}function Wu(n,t){var r;return Fe(n,function(n,e,u){return!(r=t(n,e,u))}),!!r}function Cu(n,t,r){var e=0,u=null==n?e:n.length;if('number'==typeof t&&t==t&&u<=U){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Df(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return Uu(n,t,Wa,r)}function Uu(t,r,e,u){var i=0,o=null==t?0:t.length;if(0===o)return 0;for(var f=(r=e(r))!=r,a=null===r,c=Df(r),l=r===n;i<o;){var s=Fr((i+o)/2),h=e(t[s]),p=h!==n,v=null===h,_=h==h,g=Df(h);if(f)var y=u||_;else y=l?_&&(u||p):a?_&&p&&(u||!v):c?_&&p&&!v&&(u||!g):!v&&!g&&(u?h<=r:h<r);y?i=s+1:o=s}return Gr(o,C)}function Bu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!gf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function Tu(n){return'number'==typeof n?n:Df(n)?L:+n}function Du(n){if('string'==typeof n)return n;if(wf(n))return Jt(n,Du)+'';if(Df(n))return ve?ve.call(n):'';var t=n+'';return'0'==t&&1/n==-E?'-0':t}function $u(n,r,e){var u=-1,i=Gt,o=n.length,f=!0,a=[],c=a;if(e)f=!1,i=Ht;else if(o>=t){var l=r?null:Ai(n);if(l)return Or(l);f=!1,i=gr,c=new je}else c=r?[]:a;n:for(;++u<o;){var s=n[u],h=r?r(s):s;if(s=e||0!==s?s:0,f&&h==h){for(var p=c.length;p--;)if(c[p]===h)continue n;r&&c.push(h),a.push(s)}else i(c,h,e)||(c!==a&&c.push(h),a.push(s))}return a}function Mu(n,t){return null==(n=ro(n,t=Gu(t,n)))||delete n[so(ko(t))]}function Fu(n,t,r,e){return Ru(n,t,r(Qe(n,t)),e)}function Nu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?Lu(n,e?0:i,e?i+1:u):Lu(n,e?i+1:0,e?u:i)}function Pu(n,t){var r=n;return r instanceof be&&(r=r.value()),Qt(t,function(n,t){return t.func.apply(t.thisArg,Yt([n],t.args))},r)}function qu(n,t,r){var e=n.length;if(e<2)return e?$u(n[0]):[];for(var u=-1,i=Yn(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Me(i[u]||o,n[f],t,r));return $u(Ke(i,1),t,r)}function Zu(t,r,e){for(var u=-1,i=t.length,o=r.length,f={};++u<i;){var a=u<o?r[u]:n;e(f,t[u],a)}return f}function Ku(n){return jf(n)?n:[]}function Vu(n){return'function'==typeof n?n:Wa}function Gu(n,t){return wf(n)?n:Hi(n,t)?[n]:lo(Gf(n))}var Hu=ku;function Ju(t,r,e){var u=t.length;return e=e===n?u:e,!r&&e>=u?t:Lu(t,r,e)}var Yu=Tr||function(n){return zt.clearTimeout(n)};function Qu(n,t){if(t)return n.slice();var r=n.length,e=Lt?Lt(r):new n.constructor(r);return n.copy(e),e}function Xu(n){var t=new n.constructor(n.byteLength);return new St(t).set(new St(n)),t}function ni(n,t){var r=t?Xu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function ti(t,r){if(t!==r){var e=t!==n,u=null===t,i=t==t,o=Df(t),f=r!==n,a=null===r,c=r==r,l=Df(r);if(!a&&!l&&!o&&t>r||o&&f&&c&&!a&&!l||u&&f&&c||!e&&c||!i)return 1;if(!u&&!o&&!l&&t<r||l&&e&&i&&!u&&!o||a&&e&&i||!f&&i||!c)return-1}return 0}function ri(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=Vr(i-o,0),l=Yn(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function ei(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=Vr(i-f,0),s=Yn(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function ui(n,t){var r=-1,e=n.length;for(t||(t=Yn(e));++r<e;)t[r]=n[r];return t}function ii(t,r,e,u){var i=!e;e||(e={});for(var o=-1,f=r.length;++o<f;){var a=r[o],c=u?u(e[a],t[a],a,e,t):n;c===n&&(c=t[a]),i?Ce(e,a,c):ze(e,a,c)}return e}function oi(n,t){return function(r,e){var u=wf(r)?Pt:Le,i=t?t():{};return u(r,n,Ti(e,2),i)}}function fi(t){return ku(function(r,e){var u=-1,i=e.length,o=i>1?e[i-1]:n,f=i>2?e[2]:n;for(o=t.length>3&&'function'==typeof o?(i--,o):n,f&&Gi(e[0],e[1],f)&&(o=i<3?n:o,i=1),r=rt(r);++u<i;){var a=e[u];a&&t(r,a,u,o)}return r})}function ai(n,t){return function(r,e){if(null==r)return r;if(!xf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=rt(r);(t?i--:++i<u)&&!1!==e(o[i],i,o););return r}}function ci(n){return function(t,r,e){for(var u=-1,i=rt(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(!1===r(i[a],a,i))break}return t}}function li(t){return function(r){var e=xr(r=Gf(r))?Er(r):n,u=e?e[0]:r.charAt(0),i=e?Ju(e,1).join(''):r.slice(1);return u[t]()+i}}function si(n){return function(t){return Qt(Ia(ba(t).replace(_t,'')),n,'')}}function hi(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ge(n.prototype),e=n.apply(r,t);return zf(e)?e:r}}function pi(t){return function(r,e,u){var i=rt(r);if(!xf(r)){var o=Ti(e,3);r=fa(r),e=function(n){return o(i[n],n,i)}}var f=t(r,e,u);return f>-1?i[o?r[f]:f]:n}}function vi(t){return Si(function(r){var u=r.length,i=u,o=de.prototype.thru;for(t&&r.reverse();i--;){var f=r[i];if('function'!=typeof f)throw new it(e);if(o&&!a&&'wrapper'==Ui(f))var a=new de([],!0)}for(i=a?i:u;++i<u;){var c=Ui(f=r[i]),l='wrapper'==c?Ci(f):n;a=l&&Ji(l[0])&&l[1]==(w|g|d|m)&&!l[4].length&&1==l[9]?a[Ui(l[0])].apply(a,l[3]):1==f.length&&Ji(f)?a[c]():a.thru(f)}return function(){var n=arguments,t=n[0];if(a&&1==n.length&&wf(t))return a.plant(t).value();for(var e=0,i=u?r[e].apply(this,n):t;++e<u;)i=r[e].call(this,i);return i}})}function _i(t,r,e,u,i,o,f,a,c,l){var s=r&w,h=r&p,_=r&v,d=r&(g|y),b=r&x,m=_?n:hi(t);return function p(){for(var v=arguments.length,g=Yn(v),y=v;y--;)g[y]=arguments[y];if(d)var w=Bi(p),x=function(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}(g,w);if(u&&(g=ri(g,u,i,d)),o&&(g=ei(g,o,f,d)),v-=x,d&&v<l){var j=kr(g,w);return xi(t,r,_i,p.placeholder,e,g,j,a,c,l-v)}var A=h?e:this,k=_?A[t]:t;return v=g.length,a?g=function(t,r){for(var e=t.length,u=Gr(r.length,e),i=ui(t);u--;){var o=r[u];t[u]=Vi(o,e)?i[o]:n}return t}(g,a):b&&v>1&&g.reverse(),s&&c<v&&(g.length=c),this&&this!==zt&&this instanceof p&&(k=m||hi(k)),k.apply(A,g)}}function gi(n,t){return function(r,e){return function(n,t,r,e){return He(n,function(n,u,i){t(e,r(n),u,i)}),e}(r,n,t(e),{})}}function yi(t,r){return function(e,u){var i;if(e===n&&u===n)return r;if(e!==n&&(i=e),u!==n){if(i===n)return u;'string'==typeof e||'string'==typeof u?(e=Du(e),u=Du(u)):(e=Tu(e),u=Tu(u)),i=t(e,u)}return i}}function di(n){return Si(function(t){return t=Jt(t,vr(Ti())),ku(function(r){var e=this;return n(t,function(n){return Nt(n,e,r)})})})}function bi(t,r){var e=(r=r===n?' ':Du(r)).length;if(e<2)return e?Au(r,t):r;var u=Au(r,Mr(t/Rr(r)));return xr(r)?Ju(Er(u),0,t).join(''):u.slice(0,t)}function wi(t){return function(r,e,u){return u&&'number'!=typeof u&&Gi(r,e,u)&&(e=u=n),r=Pf(r),e===n?(e=r,r=0):e=Pf(e),function(n,t,r,e){for(var u=-1,i=Vr(Mr((t-n)/(r||1)),0),o=Yn(i);i--;)o[e?i:++u]=n,n+=r;return o}(r,e,u=u===n?r<e?1:-1:Pf(u),t)}}function mi(n){return function(t,r){return'string'==typeof t&&'string'==typeof r||(t=Kf(t),r=Kf(r)),n(t,r)}}function xi(t,r,e,u,i,o,f,a,c,l){var s=r&g;r|=s?d:b,(r&=~(s?b:d))&_||(r&=~(p|v));var h=[t,r,i,s?o:n,s?f:n,s?n:o,s?n:f,a,c,l],y=e.apply(n,h);return Ji(t)&&uo(y,h),y.placeholder=u,fo(y,t,r)}function ji(n){var t=tt[n];return function(n,r){if(n=Kf(n),(r=null==r?0:Gr(qf(r),292))&&qr(n)){var e=(Gf(n)+'e').split('e');return+((e=(Gf(t(e[0]+'e'+(+e[1]+r)))+'e').split('e'))[0]+'e'+(+e[1]-r))}return t(n)}}var Ai=re&&1/Or(new re([,-0]))[1]==E?function(n){return new re(n)}:Da;function ki(n){return function(t){var r=Pi(t);return r==K?jr(t):r==Q?Ir(t):function(n,t){return Jt(t,function(t){return[t,n[t]]})}(t,n(t))}}function Oi(t,r,u,i,o,a,c,l){var s=r&v;if(!s&&'function'!=typeof t)throw new it(e);var h=i?i.length:0;if(h||(r&=~(d|b),i=o=n),c=c===n?c:Vr(qf(c),0),l=l===n?l:qf(l),h-=o?o.length:0,r&b){var x=i,j=o;i=o=n}var A=s?n:Ci(t),k=[t,r,u,i,o,x,j,a,c,l];if(A&&function(n,t){var r=n[1],e=t[1],u=r|e,i=u<(p|v|w),o=e==w&&r==g||e==w&&r==m&&n[7].length<=t[8]||e==(w|m)&&t[7].length<=t[8]&&r==g;if(!i&&!o)return n;e&p&&(n[2]=t[2],u|=r&p?0:_);var a=t[3];if(a){var c=n[3];n[3]=c?ri(c,a,t[4]):a,n[4]=c?kr(n[3],f):t[4]}(a=t[5])&&(c=n[5],n[5]=c?ei(c,a,t[6]):a,n[6]=c?kr(n[5],f):t[6]),(a=t[7])&&(n[7]=a),e&w&&(n[8]=null==n[8]?t[8]:Gr(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u}(k,A),t=k[0],r=k[1],u=k[2],i=k[3],o=k[4],!(l=k[9]=k[9]===n?s?0:t.length:Vr(k[9]-h,0))&&r&(g|y)&&(r&=~(g|y)),r&&r!=p)O=r==g||r==y?function(t,r,e){var u=hi(t);return function i(){for(var o=arguments.length,f=Yn(o),a=o,c=Bi(i);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:kr(f,c);return(o-=l.length)<e?xi(t,r,_i,i.placeholder,n,f,l,n,n,e-o):Nt(this&&this!==zt&&this instanceof i?u:t,this,f)}}(t,r,l):r!=d&&r!=(p|d)||o.length?_i.apply(n,k):function(n,t,r,e){var u=t&p,i=hi(n);return function t(){for(var o=-1,f=arguments.length,a=-1,c=e.length,l=Yn(c+f),s=this&&this!==zt&&this instanceof t?i:n;++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++o];return Nt(s,u?r:this,l)}}(t,r,u,i);else var O=function(n,t,r){var e=t&p,u=hi(n);return function t(){return(this&&this!==zt&&this instanceof t?u:n).apply(e?r:this,arguments)}}(t,r,u);return fo((A?Eu:uo)(O,k),t,r)}function Ii(t,r,e,u){return t===n||gf(t,at[e])&&!st.call(u,e)?r:t}function Ri(t,r,e,u,i,o){return zf(t)&&zf(r)&&(o.set(r,t),yu(t,r,n,Ri,o),o.delete(r)),t}function Ei(t){return Cf(t)?n:t}function zi(t,r,e,u,i,o){var f=e&s,a=t.length,c=r.length;if(a!=c&&!(f&&c>a))return!1;var l=o.get(t),p=o.get(r);if(l&&p)return l==r&&p==t;var v=-1,_=!0,g=e&h?new je:n;for(o.set(t,r),o.set(r,t);++v<a;){var y=t[v],d=r[v];if(u)var b=f?u(d,y,v,r,t,o):u(y,d,v,t,r,o);if(b!==n){if(b)continue;_=!1;break}if(g){if(!nr(r,function(n,t){if(!gr(g,t)&&(y===n||i(y,n,e,u,o)))return g.push(t)})){_=!1;break}}else if(y!==d&&!i(y,d,e,u,o)){_=!1;break}}return o.delete(t),o.delete(r),_}function Si(t){return oo(to(t,n,wo),t+'')}function Li(n){return Xe(n,fa,Fi)}function Wi(n){return Xe(n,aa,Ni)}var Ci=ie?function(n){return ie.get(n)}:Da;function Ui(n){for(var t=n.name+'',r=oe[t],e=st.call(oe,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function Bi(n){return(st.call(_e,'placeholder')?_e:n).placeholder}function Ti(){var n=_e.iteratee||Ca;return n=n===Ca?lu:n,arguments.length?n(arguments[0],arguments[1]):n}function Di(n,t){var r,e,u=n.__data__;return('string'==(e=typeof(r=t))||'number'==e||'symbol'==e||'boolean'==e?'__proto__'!==r:null===r)?u['string'==typeof t?'string':'hash']:u.map}function $i(n){for(var t=fa(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Xi(u)]}return t}function Mi(t,r){var e=function(t,r){return null==t?n:t[r]}(t,r);return cu(e)?e:n}var Fi=Nr?function(n){return null==n?[]:(n=rt(n),Vt(Nr(n),function(t){return tr.call(n,t)}))}:Za,Ni=Nr?function(n){for(var t=[];n;)Yt(t,Fi(n)),n=Ct(n);return t}:Za,Pi=nu;function qi(n,t,r){for(var e=-1,u=(t=Gu(t,n)).length,i=!1;++e<u;){var o=so(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:!!(u=null==n?0:n.length)&&Ef(u)&&Vi(o,u)&&(wf(n)||bf(n))}function Zi(n){return'function'!=typeof n.constructor||Qi(n)?{}:ge(Ct(n))}function Ki(n){return wf(n)||bf(n)||!!(Wr&&n&&n[Wr])}function Vi(n,t){var r=typeof n;return!!(t=null==t?z:t)&&('number'==r||'symbol'!=r&&Zn.test(n))&&n>-1&&n%1==0&&n<t}function Gi(n,t,r){if(!zf(r))return!1;var e=typeof t;return!!('number'==e?xf(r)&&Vi(t,r.length):'string'==e&&t in r)&&gf(r[t],n)}function Hi(n,t){if(wf(n))return!1;var r=typeof n;return!('number'!=r&&'symbol'!=r&&'boolean'!=r&&null!=n&&!Df(n))||In.test(n)||!On.test(n)||null!=t&&n in rt(t)}function Ji(n){var t=Ui(n),r=_e[t];if('function'!=typeof r||!(t in be.prototype))return!1;if(n===r)return!0;var e=Ci(r);return!!e&&n===e[0]}(Xr&&Pi(new Xr(new ArrayBuffer(1)))!=on||ne&&Pi(new ne)!=K||te&&'[object Promise]'!=Pi(te.resolve())||re&&Pi(new re)!=Q||ee&&Pi(new ee)!=rn)&&(Pi=function(t){var r=nu(t),e=r==H?t.constructor:n,u=e?ho(e):'';if(u)switch(u){case fe:return on;case ae:return K;case ce:return'[object Promise]';case le:return Q;case se:return rn}return r});var Yi=ct?If:Ka;function Qi(n){var t=n&&n.constructor;return n===('function'==typeof t&&t.prototype||at)}function Xi(n){return n==n&&!zf(n)}function no(t,r){return function(e){return null!=e&&e[t]===r&&(r!==n||t in rt(e))}}function to(t,r,e){return r=Vr(r===n?t.length-1:r,0),function(){for(var n=arguments,u=-1,i=Vr(n.length-r,0),o=Yn(i);++u<i;)o[u]=n[r+u];u=-1;for(var f=Yn(r+1);++u<r;)f[u]=n[u];return f[r]=e(o),Nt(t,this,f)}}function ro(n,t){return t.length<2?n:Qe(n,Lu(t,0,-1))}function eo(n,t){if(('constructor'!==t||'function'!=typeof n[t])&&'__proto__'!=t)return n[t]}var uo=ao(Eu),io=$r||function(n,t){return zt.setTimeout(n,t)},oo=ao(zu);function fo(n,t,r){var e=t+'';return oo(n,function(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?'& ':'')+t[e],t=t.join(r>2?', ':' '),n.replace(Wn,'{\n/* [wrapped with '+t+'] */\n')}(e,function(n,t){return qt(B,function(r){var e='_.'+r[0];t&r[1]&&!Gt(n,e)&&n.push(e)}),n.sort()}(function(n){var t=n.match(Cn);return t?t[1].split(Un):[]}(e),r)))}function ao(t){var r=0,e=0;return function(){var u=Hr(),i=O-(u-e);if(e=u,i>0){if(++r>=k)return arguments[0]}else r=0;return t.apply(n,arguments)}}function co(t,r){var e=-1,u=t.length,i=u-1;for(r=r===n?u:r;++e<r;){var o=ju(e,i),f=t[o];t[o]=t[e],t[e]=f}return t.length=r,t}var lo=function(n){var t=lf(n,function(n){return r.size===o&&r.clear(),n}),r=t.cache;return t}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(''),n.replace(Rn,function(n,r,e,u){t.push(e?u.replace(Dn,'$1'):r||n)}),t});function so(n){if('string'==typeof n||Df(n))return n;var t=n+'';return'0'==t&&1/n==-E?'-0':t}function ho(n){if(null!=n){try{return lt.call(n)}catch(n){}try{return n+''}catch(n){}}return''}function po(n){if(n instanceof be)return n.clone();var t=new de(n.__wrapped__,n.__chain__);return t.__actions__=ui(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}var vo=ku(function(n,t){return jf(n)?Me(n,Ke(t,1,jf,!0)):[]}),_o=ku(function(t,r){var e=ko(r);return jf(e)&&(e=n),jf(t)?Me(t,Ke(r,1,jf,!0),Ti(e,2)):[]}),go=ku(function(t,r){var e=ko(r);return jf(e)&&(e=n),jf(t)?Me(t,Ke(r,1,jf,!0),n,e):[]});function yo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:qf(r);return u<0&&(u=Vr(e+u,0)),er(n,Ti(t,3),u)}function bo(t,r,e){var u=null==t?0:t.length;if(!u)return-1;var i=u-1;return e!==n&&(i=qf(e),i=e<0?Vr(u+i,0):Gr(i,u-1)),er(t,Ti(r,3),i,!0)}function wo(n){return null!=n&&n.length?Ke(n,1):[]}function mo(t){return t&&t.length?t[0]:n}var xo=ku(function(n){var t=Jt(n,Ku);return t.length&&t[0]===n[0]?uu(t):[]}),jo=ku(function(t){var r=ko(t),e=Jt(t,Ku);return r===ko(e)?r=n:e.pop(),e.length&&e[0]===t[0]?uu(e,Ti(r,2)):[]}),Ao=ku(function(t){var r=ko(t),e=Jt(t,Ku);return(r='function'==typeof r?r:n)&&e.pop(),e.length&&e[0]===t[0]?uu(e,n,r):[]});function ko(t){var r=null==t?0:t.length;return r?t[r-1]:n}var Oo=ku(Io);function Io(n,t){return n&&n.length&&t&&t.length?mu(n,t):n}var Ro=Si(function(n,t){var r=null==n?0:n.length,e=Ue(n,t);return xu(n,Jt(t,function(n){return Vi(n,r)?+n:n}).sort(ti)),e});function Eo(n){return null==n?n:Qr.call(n)}var zo=ku(function(n){return $u(Ke(n,1,jf,!0))}),So=ku(function(t){var r=ko(t);return jf(r)&&(r=n),$u(Ke(t,1,jf,!0),Ti(r,2))}),Lo=ku(function(t){var r=ko(t);return r='function'==typeof r?r:n,$u(Ke(t,1,jf,!0),n,r)});function Wo(n){if(!n||!n.length)return[];var t=0;return n=Vt(n,function(n){if(jf(n))return t=Vr(n.length,t),!0}),hr(t,function(t){return Jt(n,ar(t))})}function Co(t,r){if(!t||!t.length)return[];var e=Wo(t);return null==r?e:Jt(e,function(t){return Nt(r,n,t)})}var Uo=ku(function(n,t){return jf(n)?Me(n,t):[]}),Bo=ku(function(n){return qu(Vt(n,jf))}),To=ku(function(t){var r=ko(t);return jf(r)&&(r=n),qu(Vt(t,jf),Ti(r,2))}),Do=ku(function(t){var r=ko(t);return r='function'==typeof r?r:n,qu(Vt(t,jf),n,r)}),$o=ku(Wo);var Mo=ku(function(t){var r=t.length,e=r>1?t[r-1]:n;return Co(t,e='function'==typeof e?(t.pop(),e):n)});function Fo(n){var t=_e(n);return t.__chain__=!0,t}function No(n,t){return t(n)}var Po=Si(function(t){var r=t.length,e=r?t[0]:0,u=this.__wrapped__,i=function(n){return Ue(n,t)};return!(r>1||this.__actions__.length)&&u instanceof be&&Vi(e)?((u=u.slice(e,+e+(r?1:0))).__actions__.push({func:No,args:[i],thisArg:n}),new de(u,this.__chain__).thru(function(t){return r&&!t.length&&t.push(n),t})):this.thru(i)});var qo=oi(function(n,t,r){st.call(n,r)?++n[r]:Ce(n,r,1)});var Zo=pi(yo),Ko=pi(bo);function Vo(n,t){return(wf(n)?qt:Fe)(n,Ti(t,3))}function Go(n,t){return(wf(n)?Zt:Ne)(n,Ti(t,3))}var Ho=oi(function(n,t,r){st.call(n,r)?n[r].push(t):Ce(n,r,[t])});var Jo=ku(function(n,t,r){var e=-1,u='function'==typeof t,i=xf(n)?Yn(n.length):[];return Fe(n,function(n){i[++e]=u?Nt(t,n,r):iu(n,t,r)}),i}),Yo=oi(function(n,t,r){Ce(n,r,t)});function Qo(n,t){return(wf(n)?Jt:vu)(n,Ti(t,3))}var Xo=oi(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]});var nf=ku(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Gi(n,t[0],t[1])?t=[]:r>2&&Gi(t[0],t[1],t[2])&&(t=[t[0]]),bu(n,Ke(t,1),[])}),tf=Dr||function(){return zt.Date.now()};function rf(t,r,e){return r=e?n:r,r=t&&null==r?t.length:r,Oi(t,w,n,n,n,n,r)}function ef(t,r){var u;if('function'!=typeof r)throw new it(e);return t=qf(t),function(){return--t>0&&(u=r.apply(this,arguments)),t<=1&&(r=n),u}}var uf=ku(function(n,t,r){var e=p;if(r.length){var u=kr(r,Bi(uf));e|=d}return Oi(n,e,t,r,u)}),of=ku(function(n,t,r){var e=p|v;if(r.length){var u=kr(r,Bi(of));e|=d}return Oi(t,e,n,r,u)});function ff(t,r,u){var i,o,f,a,c,l,s=0,h=!1,p=!1,v=!0;if('function'!=typeof t)throw new it(e);function _(r){var e=i,u=o;return i=o=n,s=r,a=t.apply(u,e)}function g(t){var e=t-l;return l===n||e>=r||e<0||p&&t-s>=f}function y(){var n=tf();if(g(n))return d(n);c=io(y,function(n){var t=r-(n-l);return p?Gr(t,f-(n-s)):t}(n))}function d(t){return c=n,v&&i?_(t):(i=o=n,a)}function b(){var t=tf(),e=g(t);if(i=arguments,o=this,l=t,e){if(c===n)return function(n){return s=n,c=io(y,r),h?_(n):a}(l);if(p)return Yu(c),c=io(y,r),_(l)}return c===n&&(c=io(y,r)),a}return r=Kf(r)||0,zf(u)&&(h=!!u.leading,f=(p='maxWait'in u)?Vr(Kf(u.maxWait)||0,r):f,v='trailing'in u?!!u.trailing:v),b.cancel=function(){c!==n&&Yu(c),s=0,i=l=o=c=n},b.flush=function(){return c===n?a:d(tf())},b}var af=ku(function(n,t){return $e(n,1,t)}),cf=ku(function(n,t,r){return $e(n,Kf(t)||0,r)});function lf(n,t){if('function'!=typeof n||null!=t&&'function'!=typeof t)throw new it(e);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(lf.Cache||xe),r}function sf(n){if('function'!=typeof n)throw new it(e);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}lf.Cache=xe;var hf=Hu(function(n,t){var r=(t=1==t.length&&wf(t[0])?Jt(t[0],vr(Ti())):Jt(Ke(t,1),vr(Ti()))).length;return ku(function(e){for(var u=-1,i=Gr(e.length,r);++u<i;)e[u]=t[u].call(this,e[u]);return Nt(n,this,e)})}),pf=ku(function(t,r){var e=kr(r,Bi(pf));return Oi(t,d,n,r,e)}),vf=ku(function(t,r){var e=kr(r,Bi(vf));return Oi(t,b,n,r,e)}),_f=Si(function(t,r){return Oi(t,m,n,n,n,r)});function gf(n,t){return n===t||n!=n&&t!=t}var yf=mi(tu),df=mi(function(n,t){return n>=t}),bf=ou(function(){return arguments}())?ou:function(n){return Sf(n)&&st.call(n,'callee')&&!tr.call(n,'callee')},wf=Yn.isArray,mf=Bt?vr(Bt):function(n){return Sf(n)&&nu(n)==un};function xf(n){return null!=n&&Ef(n.length)&&!If(n)}function jf(n){return Sf(n)&&xf(n)}var Af=Pr||Ka,kf=Tt?vr(Tt):function(n){return Sf(n)&&nu(n)==F};function Of(n){if(!Sf(n))return!1;var t=nu(n);return t==P||t==N||'string'==typeof n.message&&'string'==typeof n.name&&!Cf(n)}function If(n){if(!zf(n))return!1;var t=nu(n);return t==q||t==Z||t==$||t==J}function Rf(n){return'number'==typeof n&&n==qf(n)}function Ef(n){return'number'==typeof n&&n>-1&&n%1==0&&n<=z}function zf(n){var t=typeof n;return null!=n&&('object'==t||'function'==t)}function Sf(n){return null!=n&&'object'==typeof n}var Lf=Dt?vr(Dt):function(n){return Sf(n)&&Pi(n)==K};function Wf(n){return'number'==typeof n||Sf(n)&&nu(n)==V}function Cf(n){if(!Sf(n)||nu(n)!=H)return!1;var t=Ct(n);if(null===t)return!0;var r=st.call(t,'constructor')&&t.constructor;return'function'==typeof r&&r instanceof r&&lt.call(r)==yt}var Uf=$t?vr($t):function(n){return Sf(n)&&nu(n)==Y};var Bf=Mt?vr(Mt):function(n){return Sf(n)&&Pi(n)==Q};function Tf(n){return'string'==typeof n||!wf(n)&&Sf(n)&&nu(n)==X}function Df(n){return'symbol'==typeof n||Sf(n)&&nu(n)==nn}var $f=Ft?vr(Ft):function(n){return Sf(n)&&Ef(n.length)&&!!jt[nu(n)]};var Mf=mi(pu),Ff=mi(function(n,t){return n<=t});function Nf(n){if(!n)return[];if(xf(n))return Tf(n)?Er(n):ui(n);if(Cr&&n[Cr])return function(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}(n[Cr]());var t=Pi(n);return(t==K?jr:t==Q?Or:ga)(n)}function Pf(n){return n?(n=Kf(n))===E||n===-E?(n<0?-1:1)*S:n==n?n:0:0===n?n:0}function qf(n){var t=Pf(n),r=t%1;return t==t?r?t-r:t:0}function Zf(n){return n?Be(qf(n),0,W):0}function Kf(n){if('number'==typeof n)return n;if(Df(n))return L;if(zf(n)){var t='function'==typeof n.valueOf?n.valueOf():n;n=zf(t)?t+'':t}if('string'!=typeof n)return 0===n?n:+n;n=pr(n);var r=Nn.test(n);return r||qn.test(n)?It(n.slice(2),r?2:8):Fn.test(n)?L:+n}function Vf(n){return ii(n,aa(n))}function Gf(n){return null==n?'':Du(n)}var Hf=fi(function(n,t){if(Qi(t)||xf(t))ii(t,fa(t),n);else for(var r in t)st.call(t,r)&&ze(n,r,t[r])}),Jf=fi(function(n,t){ii(t,aa(t),n)}),Yf=fi(function(n,t,r,e){ii(t,aa(t),n,e)}),Qf=fi(function(n,t,r,e){ii(t,fa(t),n,e)}),Xf=Si(Ue);var na=ku(function(t,r){t=rt(t);var e=-1,u=r.length,i=u>2?r[2]:n;for(i&&Gi(r[0],r[1],i)&&(u=1);++e<u;)for(var o=r[e],f=aa(o),a=-1,c=f.length;++a<c;){var l=f[a],s=t[l];(s===n||gf(s,at[l])&&!st.call(t,l))&&(t[l]=o[l])}return t}),ta=ku(function(t){return t.push(n,Ri),Nt(la,n,t)});function ra(t,r,e){var u=null==t?n:Qe(t,r);return u===n?e:u}function ea(n,t){return null!=n&&qi(n,t,eu)}var ua=gi(function(n,t,r){null!=t&&'function'!=typeof t.toString&&(t=vt.call(t)),n[t]=r},za(Wa)),ia=gi(function(n,t,r){null!=t&&'function'!=typeof t.toString&&(t=vt.call(t)),st.call(n,t)?n[t].push(r):n[t]=[r]},Ti),oa=ku(iu);function fa(n){return xf(n)?ke(n):su(n)}function aa(n){return xf(n)?ke(n,!0):hu(n)}var ca=fi(function(n,t,r){yu(n,t,r)}),la=fi(function(n,t,r,e){yu(n,t,r,e)}),sa=Si(function(n,t){var r={};if(null==n)return r;var e=!1;t=Jt(t,function(t){return t=Gu(t,n),e||(e=t.length>1),t}),ii(n,Wi(n),r),e&&(r=Te(r,a|c|l,Ei));for(var u=t.length;u--;)Mu(r,t[u]);return r});var ha=Si(function(n,t){return null==n?{}:function(n,t){return wu(n,t,function(t,r){return ea(n,r)})}(n,t)});function pa(n,t){if(null==n)return{};var r=Jt(Wi(n),function(n){return[n]});return t=Ti(t),wu(n,r,function(n,r){return t(n,r[0])})}var va=ki(fa),_a=ki(aa);function ga(n){return null==n?[]:_r(n,fa(n))}var ya=si(function(n,t,r){return t=t.toLowerCase(),n+(r?da(t):t)});function da(n){return Oa(Gf(n).toLowerCase())}function ba(n){return(n=Gf(n))&&n.replace(Kn,br).replace(gt,'')}var wa=si(function(n,t,r){return n+(r?'-':'')+t.toLowerCase()}),ma=si(function(n,t,r){return n+(r?' ':'')+t.toLowerCase()}),xa=li('toLowerCase');var ja=si(function(n,t,r){return n+(r?'_':'')+t.toLowerCase()});var Aa=si(function(n,t,r){return n+(r?' ':'')+Oa(t)});var ka=si(function(n,t,r){return n+(r?' ':'')+t.toUpperCase()}),Oa=li('toUpperCase');function Ia(t,r,e){return t=Gf(t),(r=e?n:r)===n?function(n){return wt.test(n)}(t)?function(n){return n.match(dt)||[]}(t):function(n){return n.match(Bn)||[]}(t):t.match(r)||[]}var Ra=ku(function(t,r){try{return Nt(t,n,r)}catch(n){return Of(n)?n:new Xn(n)}}),Ea=Si(function(n,t){return qt(t,function(t){t=so(t),Ce(n,t,uf(n[t],n))}),n});function za(n){return function(){return n}}var Sa=vi(),La=vi(!0);function Wa(n){return n}function Ca(n){return lu('function'==typeof n?n:Te(n,a))}var Ua=ku(function(n,t){return function(r){return iu(r,n,t)}}),Ba=ku(function(n,t){return function(r){return iu(n,r,t)}});function Ta(n,t,r){var e=fa(t),u=Ye(t,e);null!=r||zf(t)&&(u.length||!e.length)||(r=t,t=n,n=this,u=Ye(t,fa(t)));var i=!(zf(r)&&'chain'in r&&!r.chain),o=If(n);return qt(u,function(r){var e=t[r];n[r]=e,o&&(n.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=n(this.__wrapped__);return(r.__actions__=ui(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,Yt([this.value()],arguments))})}),n}function Da(){}var $a=di(Jt),Ma=di(Kt),Fa=di(nr);function Na(n){return Hi(n)?ar(so(n)):function(n){return function(t){return Qe(t,n)}}(n)}var Pa=wi(),qa=wi(!0);function Za(){return[]}function Ka(){return!1}var Va=yi(function(n,t){return n+t},0),Ga=ji('ceil'),Ha=yi(function(n,t){return n/t},1),Ja=ji('floor');var Ya,Qa=yi(function(n,t){return n*t},1),Xa=ji('round'),nc=yi(function(n,t){return n-t},0);return _e.after=function(n,t){if('function'!=typeof t)throw new it(e);return n=qf(n),function(){if(--n<1)return t.apply(this,arguments)}},_e.ary=rf,_e.assign=Hf,_e.assignIn=Jf,_e.assignInWith=Yf,_e.assignWith=Qf,_e.at=Xf,_e.before=ef,_e.bind=uf,_e.bindAll=Ea,_e.bindKey=of,_e.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return wf(n)?n:[n]},_e.chain=Fo,_e.chunk=function(t,r,e){r=(e?Gi(t,r,e):r===n)?1:Vr(qf(r),0);var u=null==t?0:t.length;if(!u||r<1)return[];for(var i=0,o=0,f=Yn(Mr(u/r));i<u;)f[o++]=Lu(t,i,i+=r);return f},_e.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},_e.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Yn(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return Yt(wf(r)?ui(r):[r],Ke(t,1))},_e.cond=function(n){var t=null==n?0:n.length,r=Ti();return n=t?Jt(n,function(n){if('function'!=typeof n[1])throw new it(e);return[r(n[0]),n[1]]}):[],ku(function(r){for(var e=-1;++e<t;){var u=n[e];if(Nt(u[0],this,r))return Nt(u[1],this,r)}})},_e.conforms=function(n){return function(n){var t=fa(n);return function(r){return De(r,n,t)}}(Te(n,a))},_e.constant=za,_e.countBy=qo,_e.create=function(n,t){var r=ge(n);return null==t?r:We(r,t)},_e.curry=function t(r,e,u){var i=Oi(r,g,n,n,n,n,n,e=u?n:e);return i.placeholder=t.placeholder,i},_e.curryRight=function t(r,e,u){var i=Oi(r,y,n,n,n,n,n,e=u?n:e);return i.placeholder=t.placeholder,i},_e.debounce=ff,_e.defaults=na,_e.defaultsDeep=ta,_e.defer=af,_e.delay=cf,_e.difference=vo,_e.differenceBy=_o,_e.differenceWith=go,_e.drop=function(t,r,e){var u=null==t?0:t.length;return u?Lu(t,(r=e||r===n?1:qf(r))<0?0:r,u):[]},_e.dropRight=function(t,r,e){var u=null==t?0:t.length;return u?Lu(t,0,(r=u-(r=e||r===n?1:qf(r)))<0?0:r):[]},_e.dropRightWhile=function(n,t){return n&&n.length?Nu(n,Ti(t,3),!0,!0):[]},_e.dropWhile=function(n,t){return n&&n.length?Nu(n,Ti(t,3),!0):[]},_e.fill=function(t,r,e,u){var i=null==t?0:t.length;return i?(e&&'number'!=typeof e&&Gi(t,r,e)&&(e=0,u=i),function(t,r,e,u){var i=t.length;for((e=qf(e))<0&&(e=-e>i?0:i+e),(u=u===n||u>i?i:qf(u))<0&&(u+=i),u=e>u?0:Zf(u);e<u;)t[e++]=r;return t}(t,r,e,u)):[]},_e.filter=function(n,t){return(wf(n)?Vt:Ze)(n,Ti(t,3))},_e.flatMap=function(n,t){return Ke(Qo(n,t),1)},_e.flatMapDeep=function(n,t){return Ke(Qo(n,t),E)},_e.flatMapDepth=function(t,r,e){return e=e===n?1:qf(e),Ke(Qo(t,r),e)},_e.flatten=wo,_e.flattenDeep=function(n){return null!=n&&n.length?Ke(n,E):[]},_e.flattenDepth=function(t,r){return null!=t&&t.length?Ke(t,r=r===n?1:qf(r)):[]},_e.flip=function(n){return Oi(n,x)},_e.flow=Sa,_e.flowRight=La,_e.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},_e.functions=function(n){return null==n?[]:Ye(n,fa(n))},_e.functionsIn=function(n){return null==n?[]:Ye(n,aa(n))},_e.groupBy=Ho,_e.initial=function(n){return null!=n&&n.length?Lu(n,0,-1):[]},_e.intersection=xo,_e.intersectionBy=jo,_e.intersectionWith=Ao,_e.invert=ua,_e.invertBy=ia,_e.invokeMap=Jo,_e.iteratee=Ca,_e.keyBy=Yo,_e.keys=fa,_e.keysIn=aa,_e.map=Qo,_e.mapKeys=function(n,t){var r={};return t=Ti(t,3),He(n,function(n,e,u){Ce(r,t(n,e,u),n)}),r},_e.mapValues=function(n,t){var r={};return t=Ti(t,3),He(n,function(n,e,u){Ce(r,e,t(n,e,u))}),r},_e.matches=function(n){return _u(Te(n,a))},_e.matchesProperty=function(n,t){return gu(n,Te(t,a))},_e.memoize=lf,_e.merge=ca,_e.mergeWith=la,_e.method=Ua,_e.methodOf=Ba,_e.mixin=Ta,_e.negate=sf,_e.nthArg=function(n){return n=qf(n),ku(function(t){return du(t,n)})},_e.omit=sa,_e.omitBy=function(n,t){return pa(n,sf(Ti(t)))},_e.once=function(n){return ef(2,n)},_e.orderBy=function(t,r,e,u){return null==t?[]:(wf(r)||(r=null==r?[]:[r]),wf(e=u?n:e)||(e=null==e?[]:[e]),bu(t,r,e))},_e.over=$a,_e.overArgs=hf,_e.overEvery=Ma,_e.overSome=Fa,_e.partial=pf,_e.partialRight=vf,_e.partition=Xo,_e.pick=ha,_e.pickBy=pa,_e.property=Na,_e.propertyOf=function(t){return function(r){return null==t?n:Qe(t,r)}},_e.pull=Oo,_e.pullAll=Io,_e.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?mu(n,t,Ti(r,2)):n},_e.pullAllWith=function(t,r,e){return t&&t.length&&r&&r.length?mu(t,r,n,e):t},_e.pullAt=Ro,_e.range=Pa,_e.rangeRight=qa,_e.rearg=_f,_e.reject=function(n,t){return(wf(n)?Vt:Ze)(n,sf(Ti(t,3)))},_e.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=Ti(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return xu(n,u),r},_e.rest=function(t,r){if('function'!=typeof t)throw new it(e);return ku(t,r=r===n?r:qf(r))},_e.reverse=Eo,_e.sampleSize=function(t,r,e){return r=(e?Gi(t,r,e):r===n)?1:qf(r),(wf(t)?Ie:Iu)(t,r)},_e.set=function(n,t,r){return null==n?n:Ru(n,t,r)},_e.setWith=function(t,r,e,u){return u='function'==typeof u?u:n,null==t?t:Ru(t,r,e,u)},_e.shuffle=function(n){return(wf(n)?Re:Su)(n)},_e.slice=function(t,r,e){var u=null==t?0:t.length;return u?(e&&'number'!=typeof e&&Gi(t,r,e)?(r=0,e=u):(r=null==r?0:qf(r),e=e===n?u:qf(e)),Lu(t,r,e)):[]},_e.sortBy=nf,_e.sortedUniq=function(n){return n&&n.length?Bu(n):[]},_e.sortedUniqBy=function(n,t){return n&&n.length?Bu(n,Ti(t,2)):[]},_e.split=function(t,r,e){return e&&'number'!=typeof e&&Gi(t,r,e)&&(r=e=n),(e=e===n?W:e>>>0)?(t=Gf(t))&&('string'==typeof r||null!=r&&!Uf(r))&&!(r=Du(r))&&xr(t)?Ju(Er(t),0,e):t.split(r,e):[]},_e.spread=function(n,t){if('function'!=typeof n)throw new it(e);return t=null==t?0:Vr(qf(t),0),ku(function(r){var e=r[t],u=Ju(r,0,t);return e&&Yt(u,e),Nt(n,this,u)})},_e.tail=function(n){var t=null==n?0:n.length;return t?Lu(n,1,t):[]},_e.take=function(t,r,e){return t&&t.length?Lu(t,0,(r=e||r===n?1:qf(r))<0?0:r):[]},_e.takeRight=function(t,r,e){var u=null==t?0:t.length;return u?Lu(t,(r=u-(r=e||r===n?1:qf(r)))<0?0:r,u):[]},_e.takeRightWhile=function(n,t){return n&&n.length?Nu(n,Ti(t,3),!1,!0):[]},_e.takeWhile=function(n,t){return n&&n.length?Nu(n,Ti(t,3)):[]},_e.tap=function(n,t){return t(n),n},_e.throttle=function(n,t,r){var u=!0,i=!0;if('function'!=typeof n)throw new it(e);return zf(r)&&(u='leading'in r?!!r.leading:u,i='trailing'in r?!!r.trailing:i),ff(n,t,{leading:u,maxWait:t,trailing:i})},_e.thru=No,_e.toArray=Nf,_e.toPairs=va,_e.toPairsIn=_a,_e.toPath=function(n){return wf(n)?Jt(n,so):Df(n)?[n]:ui(lo(Gf(n)))},_e.toPlainObject=Vf,_e.transform=function(n,t,r){var e=wf(n),u=e||Af(n)||$f(n);if(t=Ti(t,4),null==r){var i=n&&n.constructor;r=u?e?new i:[]:zf(n)&&If(i)?ge(Ct(n)):{}}return(u?qt:He)(n,function(n,e,u){return t(r,n,e,u)}),r},_e.unary=function(n){return rf(n,1)},_e.union=zo,_e.unionBy=So,_e.unionWith=Lo,_e.uniq=function(n){return n&&n.length?$u(n):[]},_e.uniqBy=function(n,t){return n&&n.length?$u(n,Ti(t,2)):[]},_e.uniqWith=function(t,r){return r='function'==typeof r?r:n,t&&t.length?$u(t,n,r):[]},_e.unset=function(n,t){return null==n||Mu(n,t)},_e.unzip=Wo,_e.unzipWith=Co,_e.update=function(n,t,r){return null==n?n:Fu(n,t,Vu(r))},_e.updateWith=function(t,r,e,u){return u='function'==typeof u?u:n,null==t?t:Fu(t,r,Vu(e),u)},_e.values=ga,_e.valuesIn=function(n){return null==n?[]:_r(n,aa(n))},_e.without=Uo,_e.words=Ia,_e.wrap=function(n,t){return pf(Vu(t),n)},_e.xor=Bo,_e.xorBy=To,_e.xorWith=Do,_e.zip=$o,_e.zipObject=function(n,t){return Zu(n||[],t||[],ze)},_e.zipObjectDeep=function(n,t){return Zu(n||[],t||[],Ru)},_e.zipWith=Mo,_e.entries=va,_e.entriesIn=_a,_e.extend=Jf,_e.extendWith=Yf,Ta(_e,_e),_e.add=Va,_e.attempt=Ra,_e.camelCase=ya,_e.capitalize=da,_e.ceil=Ga,_e.clamp=function(t,r,e){return e===n&&(e=r,r=n),e!==n&&(e=(e=Kf(e))==e?e:0),r!==n&&(r=(r=Kf(r))==r?r:0),Be(Kf(t),r,e)},_e.clone=function(n){return Te(n,l)},_e.cloneDeep=function(n){return Te(n,a|l)},_e.cloneDeepWith=function(t,r){return Te(t,a|l,r='function'==typeof r?r:n)},_e.cloneWith=function(t,r){return Te(t,l,r='function'==typeof r?r:n)},_e.conformsTo=function(n,t){return null==t||De(n,t,fa(t))},_e.deburr=ba,_e.defaultTo=function(n,t){return null==n||n!=n?t:n},_e.divide=Ha,_e.endsWith=function(t,r,e){t=Gf(t),r=Du(r);var u=t.length,i=e=e===n?u:Be(qf(e),0,u);return(e-=r.length)>=0&&t.slice(e,i)==r},_e.eq=gf,_e.escape=function(n){return(n=Gf(n))&&xn.test(n)?n.replace(wn,wr):n},_e.escapeRegExp=function(n){return(n=Gf(n))&&zn.test(n)?n.replace(En,'\\$&'):n},_e.every=function(t,r,e){var u=wf(t)?Kt:Pe;return e&&Gi(t,r,e)&&(r=n),u(t,Ti(r,3))},_e.find=Zo,_e.findIndex=yo,_e.findKey=function(n,t){return rr(n,Ti(t,3),He)},_e.findLast=Ko,_e.findLastIndex=bo,_e.findLastKey=function(n,t){return rr(n,Ti(t,3),Je)},_e.floor=Ja,_e.forEach=Vo,_e.forEachRight=Go,_e.forIn=function(n,t){return null==n?n:Ve(n,Ti(t,3),aa)},_e.forInRight=function(n,t){return null==n?n:Ge(n,Ti(t,3),aa)},_e.forOwn=function(n,t){return n&&He(n,Ti(t,3))},_e.forOwnRight=function(n,t){return n&&Je(n,Ti(t,3))},_e.get=ra,_e.gt=yf,_e.gte=df,_e.has=function(n,t){return null!=n&&qi(n,t,ru)},_e.hasIn=ea,_e.head=mo,_e.identity=Wa,_e.includes=function(n,t,r,e){n=xf(n)?n:ga(n),r=r&&!e?qf(r):0;var u=n.length;return r<0&&(r=Vr(u+r,0)),Tf(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&ur(n,t,r)>-1},_e.indexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:qf(r);return u<0&&(u=Vr(e+u,0)),ur(n,t,u)},_e.inRange=function(t,r,e){return r=Pf(r),e===n?(e=r,r=0):e=Pf(e),function(n,t,r){return n>=Gr(t,r)&&n<Vr(t,r)}(t=Kf(t),r,e)},_e.invoke=oa,_e.isArguments=bf,_e.isArray=wf,_e.isArrayBuffer=mf,_e.isArrayLike=xf,_e.isArrayLikeObject=jf,_e.isBoolean=function(n){return!0===n||!1===n||Sf(n)&&nu(n)==M},_e.isBuffer=Af,_e.isDate=kf,_e.isElement=function(n){return Sf(n)&&1===n.nodeType&&!Cf(n)},_e.isEmpty=function(n){if(null==n)return!0;if(xf(n)&&(wf(n)||'string'==typeof n||'function'==typeof n.splice||Af(n)||$f(n)||bf(n)))return!n.length;var t=Pi(n);if(t==K||t==Q)return!n.size;if(Qi(n))return!su(n).length;for(var r in n)if(st.call(n,r))return!1;return!0},_e.isEqual=function(n,t){return fu(n,t)},_e.isEqualWith=function(t,r,e){var u=(e='function'==typeof e?e:n)?e(t,r):n;return u===n?fu(t,r,n,e):!!u},_e.isError=Of,_e.isFinite=function(n){return'number'==typeof n&&qr(n)},_e.isFunction=If,_e.isInteger=Rf,_e.isLength=Ef,_e.isMap=Lf,_e.isMatch=function(n,t){return n===t||au(n,t,$i(t))},_e.isMatchWith=function(t,r,e){return e='function'==typeof e?e:n,au(t,r,$i(r),e)},_e.isNaN=function(n){return Wf(n)&&n!=+n},_e.isNative=function(n){if(Yi(n))throw new Xn(r);return cu(n)},_e.isNil=function(n){return null==n},_e.isNull=function(n){return null===n},_e.isNumber=Wf,_e.isObject=zf,_e.isObjectLike=Sf,_e.isPlainObject=Cf,_e.isRegExp=Uf,_e.isSafeInteger=function(n){return Rf(n)&&n>=-z&&n<=z},_e.isSet=Bf,_e.isString=Tf,_e.isSymbol=Df,_e.isTypedArray=$f,_e.isUndefined=function(t){return t===n},_e.isWeakMap=function(n){return Sf(n)&&Pi(n)==rn},_e.isWeakSet=function(n){return Sf(n)&&nu(n)==en},_e.join=function(n,t){return null==n?'':Zr.call(n,t)},_e.kebabCase=wa,_e.last=ko,_e.lastIndexOf=function(t,r,e){var u=null==t?0:t.length;if(!u)return-1;var i=u;return e!==n&&(i=(i=qf(e))<0?Vr(u+i,0):Gr(i,u-1)),r==r?function(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}(t,r,i):er(t,or,i,!0)},_e.lowerCase=ma,_e.lowerFirst=xa,_e.lt=Mf,_e.lte=Ff,_e.max=function(t){return t&&t.length?qe(t,Wa,tu):n},_e.maxBy=function(t,r){return t&&t.length?qe(t,Ti(r,2),tu):n},_e.mean=function(n){return fr(n,Wa)},_e.meanBy=function(n,t){return fr(n,Ti(t,2))},_e.min=function(t){return t&&t.length?qe(t,Wa,pu):n},_e.minBy=function(t,r){return t&&t.length?qe(t,Ti(r,2),pu):n},_e.stubArray=Za,_e.stubFalse=Ka,_e.stubObject=function(){return{}},_e.stubString=function(){return''},_e.stubTrue=function(){return!0},_e.multiply=Qa,_e.nth=function(t,r){return t&&t.length?du(t,qf(r)):n},_e.noConflict=function(){return zt._===this&&(zt._=bt),this},_e.noop=Da,_e.now=tf,_e.pad=function(n,t,r){n=Gf(n);var e=(t=qf(t))?Rr(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return bi(Fr(u),r)+n+bi(Mr(u),r)},_e.padEnd=function(n,t,r){n=Gf(n);var e=(t=qf(t))?Rr(n):0;return t&&e<t?n+bi(t-e,r):n},_e.padStart=function(n,t,r){n=Gf(n);var e=(t=qf(t))?Rr(n):0;return t&&e<t?bi(t-e,r)+n:n},_e.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Jr(Gf(n).replace(Sn,''),t||0)},_e.random=function(t,r,e){if(e&&'boolean'!=typeof e&&Gi(t,r,e)&&(r=e=n),e===n&&('boolean'==typeof r?(e=r,r=n):'boolean'==typeof t&&(e=t,t=n)),t===n&&r===n?(t=0,r=1):(t=Pf(t),r===n?(r=t,t=0):r=Pf(r)),t>r){var u=t;t=r,r=u}if(e||t%1||r%1){var i=Yr();return Gr(t+i*(r-t+Ot('1e-'+((i+'').length-1))),r)}return ju(t,r)},_e.reduce=function(n,t,r){var e=wf(n)?Qt:lr,u=arguments.length<3;return e(n,Ti(t,4),r,u,Fe)},_e.reduceRight=function(n,t,r){var e=wf(n)?Xt:lr,u=arguments.length<3;return e(n,Ti(t,4),r,u,Ne)},_e.repeat=function(t,r,e){return r=(e?Gi(t,r,e):r===n)?1:qf(r),Au(Gf(t),r)},_e.replace=function(){var n=arguments,t=Gf(n[0]);return n.length<3?t:t.replace(n[1],n[2])},_e.result=function(t,r,e){var u=-1,i=(r=Gu(r,t)).length;for(i||(i=1,t=n);++u<i;){var o=null==t?n:t[so(r[u])];o===n&&(u=i,o=e),t=If(o)?o.call(t):o}return t},_e.round=Xa,_e.runInContext=Ln,_e.sample=function(n){return(wf(n)?Oe:Ou)(n)},_e.size=function(n){if(null==n)return 0;if(xf(n))return Tf(n)?Rr(n):n.length;var t=Pi(n);return t==K||t==Q?n.size:su(n).length},_e.snakeCase=ja,_e.some=function(t,r,e){var u=wf(t)?nr:Wu;return e&&Gi(t,r,e)&&(r=n),u(t,Ti(r,3))},_e.sortedIndex=function(n,t){return Cu(n,t)},_e.sortedIndexBy=function(n,t,r){return Uu(n,t,Ti(r,2))},_e.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=Cu(n,t);if(e<r&&gf(n[e],t))return e}return-1},_e.sortedLastIndex=function(n,t){return Cu(n,t,!0)},_e.sortedLastIndexBy=function(n,t,r){return Uu(n,t,Ti(r,2),!0)},_e.sortedLastIndexOf=function(n,t){if(null!=n&&n.length){var r=Cu(n,t,!0)-1;if(gf(n[r],t))return r}return-1},_e.startCase=Aa,_e.startsWith=function(n,t,r){return n=Gf(n),r=null==r?0:Be(qf(r),0,n.length),t=Du(t),n.slice(r,r+t.length)==t},_e.subtract=nc,_e.sum=function(n){return n&&n.length?sr(n,Wa):0},_e.sumBy=function(n,t){return n&&n.length?sr(n,Ti(t,2)):0},_e.template=function(t,r,e){var i=_e.templateSettings;e&&Gi(t,r,e)&&(r=n),t=Gf(t),r=Yf({},r,i,Ii);var o,f,a=Yf({},r.imports,i.imports,Ii),c=fa(a),l=_r(a,c),s=0,h=r.interpolate||Vn,p='__p += \'',v=et((r.escape||Vn).source+'|'+h.source+'|'+(h===kn?$n:Vn).source+'|'+(r.evaluate||Vn).source+'|$','g'),_='//# sourceURL='+(st.call(r,'sourceURL')?(r.sourceURL+'').replace(/\s/g,' '):'lodash.templateSources['+ ++xt+']')+'\n';t.replace(v,function(n,r,e,u,i,a){return e||(e=u),p+=t.slice(s,a).replace(Gn,mr),r&&(o=!0,p+='\' +\n__e('+r+') +\n\''),i&&(f=!0,p+='\';\n'+i+';\n__p += \''),e&&(p+='\' +\n((__t = ('+e+')) == null ? \'\' : __t) +\n\''),s=a+n.length,n}),p+='\';\n';var g=st.call(r,'variable')&&r.variable;if(g){if(Tn.test(g))throw new Xn(u)}else p='with (obj) {\n'+p+'\n}\n';p=(f?p.replace(gn,''):p).replace(yn,'$1').replace(dn,'$1;'),p='function('+(g||'obj')+') {\n'+(g?'':'obj || (obj = {});\n')+'var __t, __p = \'\''+(o?', __e = _.escape':'')+(f?', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, \'\') }\n':';\n')+p+'return __p\n}';var y=Ra(function(){return nt(c,_+'return '+p).apply(n,l)});if(y.source=p,Of(y))throw y;return y},_e.times=function(n,t){if((n=qf(n))<1||n>z)return[];var r=W,e=Gr(n,W);t=Ti(t),n-=W;for(var u=hr(e,t);++r<n;)t(r);return u},_e.toFinite=Pf,_e.toInteger=qf,_e.toLength=Zf,_e.toLower=function(n){return Gf(n).toLowerCase()},_e.toNumber=Kf,_e.toSafeInteger=function(n){return n?Be(qf(n),-z,z):0===n?n:0},_e.toString=Gf,_e.toUpper=function(n){return Gf(n).toUpperCase()},_e.trim=function(t,r,e){if((t=Gf(t))&&(e||r===n))return pr(t);if(!t||!(r=Du(r)))return t;var u=Er(t),i=Er(r);return Ju(u,yr(u,i),dr(u,i)+1).join('')},_e.trimEnd=function(t,r,e){if((t=Gf(t))&&(e||r===n))return t.slice(0,zr(t)+1);if(!t||!(r=Du(r)))return t;var u=Er(t);return Ju(u,0,dr(u,Er(r))+1).join('')},_e.trimStart=function(t,r,e){if((t=Gf(t))&&(e||r===n))return t.replace(Sn,'');if(!t||!(r=Du(r)))return t;var u=Er(t);return Ju(u,yr(u,Er(r))).join('')},_e.truncate=function(t,r){var e=j,u=A;if(zf(r)){var i='separator'in r?r.separator:i;e='length'in r?qf(r.length):e,u='omission'in r?Du(r.omission):u}var o=(t=Gf(t)).length;if(xr(t)){var f=Er(t);o=f.length}if(e>=o)return t;var a=e-Rr(u);if(a<1)return u;var c=f?Ju(f,0,a).join(''):t.slice(0,a);if(i===n)return c+u;if(f&&(a+=c.length-a),Uf(i)){if(t.slice(a).search(i)){var l,s=c;for(i.global||(i=et(i.source,Gf(Mn.exec(i))+'g')),i.lastIndex=0;l=i.exec(s);)var h=l.index;c=c.slice(0,h===n?a:h)}}else if(t.indexOf(Du(i),a)!=a){var p=c.lastIndexOf(i);p>-1&&(c=c.slice(0,p))}return c+u},_e.unescape=function(n){return(n=Gf(n))&&mn.test(n)?n.replace(bn,Sr):n},_e.uniqueId=function(n){var t=++ht;return Gf(n)+t},_e.upperCase=ka,_e.upperFirst=Oa,_e.each=Vo,_e.eachRight=Go,_e.first=mo,Ta(_e,(Ya={},He(_e,function(n,t){st.call(_e.prototype,t)||(Ya[t]=n)}),Ya),{chain:!1}),_e.VERSION='4.17.21',qt(['bind','bindKey','curry','curryRight','partial','partialRight'],function(n){_e[n].placeholder=_e}),qt(['drop','take'],function(t,r){be.prototype[t]=function(e){e=e===n?1:Vr(qf(e),0);var u=this.__filtered__&&!r?new be(this):this.clone();return u.__filtered__?u.__takeCount__=Gr(e,u.__takeCount__):u.__views__.push({size:Gr(e,W),type:t+(u.__dir__<0?'Right':'')}),u},be.prototype[t+'Right']=function(n){return this.reverse()[t](n).reverse()}}),qt(['filter','map','takeWhile'],function(n,t){var r=t+1,e=r==I||3==r;be.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:Ti(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),qt(['head','last'],function(n,t){var r='take'+(t?'Right':'');be.prototype[n]=function(){return this[r](1).value()[0]}}),qt(['initial','tail'],function(n,t){var r='drop'+(t?'':'Right');be.prototype[n]=function(){return this.__filtered__?new be(this):this[r](1)}}),be.prototype.compact=function(){return this.filter(Wa)},be.prototype.find=function(n){return this.filter(n).head()},be.prototype.findLast=function(n){return this.reverse().find(n)},be.prototype.invokeMap=ku(function(n,t){return'function'==typeof n?new be(this):this.map(function(r){return iu(r,n,t)})}),be.prototype.reject=function(n){return this.filter(sf(Ti(n)))},be.prototype.slice=function(t,r){t=qf(t);var e=this;return e.__filtered__&&(t>0||r<0)?new be(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),r!==n&&(e=(r=qf(r))<0?e.dropRight(-r):e.take(r-t)),e)},be.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},be.prototype.toArray=function(){return this.take(W)},He(be.prototype,function(t,r){var e=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),i=_e[u?'take'+('last'==r?'Right':''):r],o=u||/^find/.test(r);i&&(_e.prototype[r]=function(){var r=this.__wrapped__,f=u?[1]:arguments,a=r instanceof be,c=f[0],l=a||wf(r),s=function(n){var t=i.apply(_e,Yt([n],f));return u&&h?t[0]:t};l&&e&&'function'==typeof c&&1!=c.length&&(a=l=!1);var h=this.__chain__,p=!!this.__actions__.length,v=o&&!h,_=a&&!p;if(!o&&l){r=_?r:new be(this);var g=t.apply(r,f);return g.__actions__.push({func:No,args:[s],thisArg:n}),new de(g,h)}return v&&_?t.apply(this,f):(g=this.thru(s),v?u?g.value()[0]:g.value():g)})}),qt(['pop','push','shift','sort','splice','unshift'],function(n){var t=ot[n],r=/^(?:push|sort|unshift)$/.test(n)?'tap':'thru',e=/^(?:pop|shift)$/.test(n);_e.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(wf(u)?u:[],n)}return this[r](function(r){return t.apply(wf(r)?r:[],n)})}}),He(be.prototype,function(n,t){var r=_e[t];if(r){var e=r.name+'';st.call(oe,e)||(oe[e]=[]),oe[e].push({name:t,func:r})}}),oe[_i(n,v).name]=[{name:'wrapper',func:n}],be.prototype.clone=function(){var n=new be(this.__wrapped__);return n.__actions__=ui(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ui(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ui(this.__views__),n},be.prototype.reverse=function(){if(this.__filtered__){var n=new be(this);n.__dir__=-1,n.__filtered__=!0}else(n=this.clone()).__dir__*=-1;return n},be.prototype.value=function(){var n=this.__wrapped__.value(),t=this.__dir__,r=wf(n),e=t<0,u=r?n.length:0,i=function(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case'drop':n+=o;break;case'dropRight':t-=o;break;case'take':t=Gr(t,n+o);break;case'takeRight':n=Vr(n,t-o)}}return{start:n,end:t}}(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Gr(a,this.__takeCount__);if(!r||!e&&u==a&&p==a)return Pu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){for(var _=-1,g=n[c+=t];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==R)g=w;else if(!w){if(b==I)continue n;break n}}v[h++]=g}return v},_e.prototype.at=Po,_e.prototype.chain=function(){return Fo(this)},_e.prototype.commit=function(){return new de(this.value(),this.__chain__)},_e.prototype.next=function(){this.__values__===n&&(this.__values__=Nf(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?n:this.__values__[this.__index__++]}},_e.prototype.plant=function(t){for(var r,e=this;e instanceof ye;){var u=po(e);u.__index__=0,u.__values__=n,r?i.__wrapped__=u:r=u;var i=u;e=e.__wrapped__}return i.__wrapped__=t,r},_e.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof be){var r=t;return this.__actions__.length&&(r=new be(this)),(r=r.reverse()).__actions__.push({func:No,args:[Eo],thisArg:n}),new de(r,this.__chain__)}return this.thru(Eo)},_e.prototype.toJSON=_e.prototype.valueOf=_e.prototype.value=function(){return Pu(this.__wrapped__,this.__actions__)},_e.prototype.first=_e.prototype.head,Cr&&(_e.prototype[Cr]=function(){return this}),_e}();'function'==typeof define&&'object'==typeof define.amd&&define.amd?(zt._=Lr,define('lodash',function(){return Lr})):Lt?((Lt.exports=Lr)._=Lr,St._=Lr):zt._=Lr}).call(this);

/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
!function(e,t){'use strict';'object'==typeof module&&'object'==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error('jQuery requires a window with a document');return t(e)}:t(e)}('undefined'!=typeof window?window:this,function(e,t){'use strict';var n=[],r=Object.getPrototypeOf,i=n.slice,o=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f=c.toString,p=f.call(Object),d={},h=function(e){return'function'==typeof e&&'number'!=typeof e.nodeType&&'function'!=typeof e.item},g=function(e){return null!=e&&e===e.window},v=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||v).createElement('script');if(o.text=e,t)for(r in y)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+'':'object'==typeof e||'function'==typeof e?u[l.call(e)]||'object':typeof e}var b=function(e,t){return new b.fn.init(e,t)};function w(e){var t=!!e&&'length'in e&&e.length,n=x(e);return!h(e)&&!g(e)&&('array'===n||0===t||'number'==typeof t&&t>0&&t-1 in e)}b.fn=b.prototype={jquery:'3.6.1',constructor:b,length:0,toArray:function(){return i.call(this)},get:function(e){return null==e?i.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return b.each(this,e)},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(b.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(b.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},b.extend=b.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for('boolean'==typeof a&&(l=a,a=arguments[s]||{},s++),'object'==typeof a||h(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],'__proto__'!==t&&a!==r&&(l&&r&&(b.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||b.isPlainObject(n)?n:{},i=!1,a[t]=b.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},b.extend({expando:'jQuery'+('3.6.1'+Math.random()).replace(/\D/g,''),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||'[object Object]'!==l.call(e))&&(!(t=r(e))||'function'==typeof(n=c.call(t,'constructor')&&t.constructor)&&f.call(n)===p)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(w(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(w(Object(e))?b.merge(n,'string'==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(w(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o(s)},guid:1,support:d}),'function'==typeof Symbol&&(b.fn[Symbol.iterator]=n[Symbol.iterator]),b.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),function(e,t){u['[object '+t+']']=t.toLowerCase()});var T=
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,v,y,m,x,b='sizzle'+1*new Date,w=e.document,T=0,C=0,E=ue(),S=ue(),k=ue(),A=ue(),N=function(e,t){return e===t&&(f=!0),0},j={}.hasOwnProperty,D=[],q=D.pop,L=D.push,H=D.push,O=D.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R='checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',M='[\\x20\\t\\r\\n\\f]',I='(?:\\\\[\\da-fA-F]{1,6}'+M+'?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',W='\\['+M+'*('+I+')(?:'+M+'*([*^$|!~]?=)'+M+'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|('+I+'))|)'+M+'*\\]',F=':('+I+')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|'+W+')*)|.*)\\)|)',$=new RegExp(M+'+','g'),B=new RegExp('^'+M+'+|((?:^|[^\\\\])(?:\\\\.)*)'+M+'+$','g'),_=new RegExp('^'+M+'*,'+M+'*'),z=new RegExp('^'+M+'*([>+~]|'+M+')'+M+'*'),U=new RegExp(M+'|>'),X=new RegExp(F),V=new RegExp('^'+I+'$'),G={ID:new RegExp('^#('+I+')'),CLASS:new RegExp('^\\.('+I+')'),TAG:new RegExp('^('+I+'|[*])'),ATTR:new RegExp('^'+W),PSEUDO:new RegExp('^'+F),CHILD:new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\('+M+'*(even|odd|(([+-]|)(\\d*)n|)'+M+'*(?:([+-]|)'+M+'*(\\d+)|))'+M+'*\\)|)','i'),bool:new RegExp('^(?:'+R+')$','i'),needsContext:new RegExp('^'+M+'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\('+M+'*((?:-\\d)?\\d*)'+M+'*\\)|)(?=[^-]|$)','i')},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp('\\\\[\\da-fA-F]{1,6}'+M+'?|\\\\([^\\r\\n\\f])','g'),ne=function(e,t){var n='0x'+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?'\0'===e?'�':e.slice(0,-1)+'\\'+e.charCodeAt(e.length-1).toString(16)+' ':'\\'+e},oe=function(){p()},ae=be(function(e){return!0===e.disabled&&'fieldset'===e.nodeName.toLowerCase()},{dir:'parentNode',next:'legend'});try{H.apply(D=O.call(w.childNodes),w.childNodes),D[w.childNodes.length].nodeType}catch(e){H={apply:D.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,r,i){var o,s,l,c,f,h,y,m=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],'string'!=typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!i&&(p(t),t=t||d,g)){if(11!==w&&(f=Z.exec(e)))if(o=f[1]){if(9===w){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return H.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return H.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!A[e+' ']&&(!v||!v.test(e))&&(1!==w||'object'!==t.nodeName.toLowerCase())){if(y=e,m=t,1===w&&(U.test(e)||z.test(e))){for((m=ee.test(e)&&ye(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute('id'))?c=c.replace(re,ie):t.setAttribute('id',c=b)),s=(h=a(e)).length;s--;)h[s]=(c?'#'+c:':scope')+' '+xe(h[s]);y=h.join(',')}try{return H.apply(r,m.querySelectorAll(y)),r}catch(t){A(e,!0)}finally{c===b&&t.removeAttribute('id')}}}return u(e.replace(B,'$1'),t,r,i)}function ue(){var e=[];return function t(n,i){return e.push(n+' ')>r.cacheLength&&delete t[e.shift()],t[n+' ']=i}}function le(e){return e[b]=!0,e}function ce(e){var t=d.createElement('fieldset');try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split('|'),i=n.length;i--;)r.attrHandle[n[i]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(e){return function(t){return'input'===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase();return('input'===n||'button'===n)&&t.type===e}}function ge(e){return function(t){return'form'in t?t.parentNode&&!1===t.disabled?'label'in t?'label'in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:'label'in t&&t.disabled===e}}function ve(e){return le(function(t){return t=+t,le(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},o=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||'HTML')},p=se.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!=d&&9===a.nodeType&&a.documentElement?(h=(d=a).documentElement,g=!o(d),w!=d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener('unload',oe,!1):i.attachEvent&&i.attachEvent('onunload',oe)),n.scope=ce(function(e){return h.appendChild(e).appendChild(d.createElement('div')),void 0!==e.querySelectorAll&&!e.querySelectorAll(':scope fieldset div').length}),n.attributes=ce(function(e){return e.className='i',!e.getAttribute('className')}),n.getElementsByTagName=ce(function(e){return e.appendChild(d.createComment('')),!e.getElementsByTagName('*').length}),n.getElementsByClassName=K.test(d.getElementsByClassName),n.getById=ce(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute('id')===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode('id');return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode('id'))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode('id'))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if('*'===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],v=[],(n.qsa=K.test(d.querySelectorAll))&&(ce(function(e){var t;h.appendChild(e).innerHTML='<a id=\''+b+'\'></a><select id=\''+b+'-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>',e.querySelectorAll('[msallowcapture^=\'\']').length&&v.push('[*^$]='+M+'*(?:\'\'|"")'),e.querySelectorAll('[selected]').length||v.push('\\['+M+'*(?:value|'+R+')'),e.querySelectorAll('[id~='+b+'-]').length||v.push('~='),(t=d.createElement('input')).setAttribute('name',''),e.appendChild(t),e.querySelectorAll('[name=\'\']').length||v.push('\\['+M+'*name'+M+'*='+M+'*(?:\'\'|"")'),e.querySelectorAll(':checked').length||v.push(':checked'),e.querySelectorAll('a#'+b+'+*').length||v.push('.#.+[+~]'),e.querySelectorAll('\\\f'),v.push('[\\r\\n\\f]')}),ce(function(e){e.innerHTML='<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';var t=d.createElement('input');t.setAttribute('type','hidden'),e.appendChild(t).setAttribute('name','D'),e.querySelectorAll('[name=d]').length&&v.push('name'+M+'*[*^$|!~]?='),2!==e.querySelectorAll(':enabled').length&&v.push(':enabled',':disabled'),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(':disabled').length&&v.push(':enabled',':disabled'),e.querySelectorAll('*,:x'),v.push(',.*:')})),(n.matchesSelector=K.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce(function(e){n.disconnectedMatch=m.call(e,'*'),m.call(e,'[s!=\'\']:x'),y.push('!=',F)}),v=v.length&&new RegExp(v.join('|')),y=y.length&&new RegExp(y.join('|')),t=K.test(h.compareDocumentPosition),x=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},N=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==d||e.ownerDocument==w&&x(w,e)?-1:t==d||t.ownerDocument==w&&x(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==d?-1:t==d?1:i?-1:o?1:c?P(c,e)-P(c,t):0;if(i===o)return pe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?pe(a[r],s[r]):a[r]==w?-1:s[r]==w?1:0},d):d},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(p(e),n.matchesSelector&&g&&!A[t+' ']&&(!y||!y.test(t))&&(!v||!v.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){A(t,!0)}return se(t,d,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!=d&&p(e),x(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&j.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},se.escape=function(e){return(e+'').replace(re,ie)},se.error=function(e){throw new Error('Syntax error, unrecognized expression: '+e)},se.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(N),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=se.getText=function(e){var t,n='',r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if('string'==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{'>':{dir:'parentNode',first:!0},' ':{dir:'parentNode'},'+':{dir:'previousSibling',first:!0},'~':{dir:'previousSibling'}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||'').replace(te,ne),'~='===e[2]&&(e[3]=' '+e[3]+' '),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),'nth'===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*('even'===e[3]||'odd'===e[3])),e[5]=+(e[7]+e[8]||'odd'===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||'':n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(')',n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return'*'===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+' '];return t||(t=new RegExp('(^|'+M+')'+e+'('+M+'|$)'))&&E(e,function(e){return t.test('string'==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute('class')||'')})},ATTR:function(e,t,n){return function(r){var i=se.attr(r,e);return null==i?'!='===t:!t||(i+='','='===t?i===n:'!='===t?i!==n:'^='===t?n&&0===i.indexOf(n):'*='===t?n&&i.indexOf(n)>-1:'$='===t?n&&i.slice(-n.length)===n:'~='===t?(' '+i.replace($,' ')+' ').indexOf(n)>-1:'|='===t&&(i===n||i.slice(0,n.length+1)===n+'-'))}},CHILD:function(e,t,n,r,i){var o='nth'!==e.slice(0,3),a='last'!==e.slice(-4),s='of-type'===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?'nextSibling':'previousSibling',v=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(v){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g='only'===e&&!h&&'nextSibling'}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){for(x=(d=(l=(c=(f=(p=v)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++x||(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||se.error('unsupported pseudo: '+e);return i[b]?i(t):i.length>1?(n=[e,e,'',t],r.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=P(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:le(function(e){var t=[],n=[],r=s(e.replace(B,'$1'));return r[b]?le(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:le(function(e){return function(t){return se(e,t).length>0}}),contains:le(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}}),lang:le(function(e){return V.test(e||'')||se.error('unsupported lang: '+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute('xml:lang')||t.getAttribute('lang'))return(n=n.toLowerCase())===e||0===n.indexOf(e+'-')}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return'input'===t&&!!e.checked||'option'===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return'input'===t&&'button'===e.type||'button'===t},text:function(e){var t;return'input'===e.nodeName.toLowerCase()&&'text'===e.type&&(null==(t=e.getAttribute('type'))||'text'===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=de(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t);function me(){}function xe(e){for(var t=0,n=e.length,r='';t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&'parentNode'===o,s=C++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(c=(f=t[b]||(t[b]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(e,t,n,r,i,o){return r&&!r[b]&&(r=Ce(r)),i&&!i[b]&&(i=Ce(i,o)),le(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(t||'*',s.nodeType?[s]:s,[]),v=!e||!o&&t?g:Te(g,p,e,s,u),y=n?i||(o?e:h||r)?[]:a:v;if(n&&n(v,y,s,u),r)for(l=Te(y,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(y[d[c]]=!(v[d[c]]=f));if(o){if(i||e){if(i){for(l=[],c=y.length;c--;)(f=y[c])&&l.push(v[c]=f);i(null,y=[],l,u)}for(c=y.length;c--;)(f=y[c])&&(l=i?P(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else y=Te(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function Ee(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[' '],u=a?1:0,c=be(function(e){return e===t},s,!0),f=be(function(e){return P(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[be(we(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return Ce(u>1&&we(p),u>1&&xe(e.slice(0,u-1).concat({value:' '===e[u-2].type?'*':''})).replace(B,'$1'),n,u<i&&Ee(e.slice(u,i)),i<o&&Ee(e=e.slice(i)),i<o&&xe(e))}p.push(n)}return we(p)}return me.prototype=r.filters=r.pseudos,r.setFilters=new me,a=se.tokenize=function(e,t){var n,i,o,a,s,u,l,c=S[e+' '];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=_.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B,' ')}),s=s.slice(n.length)),r.filter)!(i=G[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?se.error(e):S(e,u).slice(0)},s=se.compile=function(e,t){var n,i=[],o=[],s=k[e+' '];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=Ee(t[n]))[b]?i.push(s):o.push(s);(s=k(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,v,y=0,m='0',x=o&&[],b=[],w=l,C=o||i&&r.find.TAG('*',c),E=T+=null==w?1:Math.random()||.1,S=C.length;for(c&&(l=a==d||a||c);m!==S&&null!=(f=C[m]);m++){if(i&&f){for(h=0,a||f.ownerDocument==d||(p(f),s=!g);v=e[h++];)if(v(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!v&&f)&&y--,o&&x.push(f))}if(y+=m,n&&m!==y){for(h=0;v=t[h++];)v(x,b,a,s);if(o){if(y>0)for(;m--;)x[m]||b[m]||(b[m]=q.call(u));b=Te(b)}H.apply(u,b),c&&!o&&b.length>0&&y+t.length>1&&se.uniqueSort(u)}return c&&(T=E,l=w),x};return n?le(o):o}(o,i))).selector=e}return s},u=se.select=function(e,t,n,i){var o,u,l,c,f,p='function'==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&'ID'===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(o=G.needsContext.test(e)?0:u.length;o--&&(l=u[o],!r.relative[c=l.type]);)if((f=r.find[c])&&(i=f(l.matches[0].replace(te,ne),ee.test(u[0].type)&&ye(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&xe(u)))return H.apply(n,i),n;break}}return(p||s(e,d))(i,t,!g,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},n.sortStable=b.split('').sort(N).join('')===b,n.detectDuplicates=!!f,p(),n.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(d.createElement('fieldset'))}),ce(function(e){return e.innerHTML='<a href=\'#\'></a>','#'===e.firstChild.getAttribute('href')})||fe('type|href|height|width',function(e,t,n){if(!n)return e.getAttribute(t,'type'===t.toLowerCase()?1:2)}),n.attributes&&ce(function(e){return e.innerHTML='<input/>',e.firstChild.setAttribute('value',''),''===e.firstChild.getAttribute('value')})||fe('value',function(e,t,n){if(!n&&'input'===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute('disabled')})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(e);b.find=T,b.expr=T.selectors,b.expr[':']=b.expr.pseudos,b.uniqueSort=b.unique=T.uniqueSort,b.text=T.getText,b.isXMLDoc=T.isXML,b.contains=T.contains,b.escapeSelector=T.escape;var C=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&b(e).is(n))break;r.push(e)}return r},E=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=b.expr.match.needsContext;function k(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function N(e,t,n){return h(t)?b.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?b.grep(e,function(e){return e===t!==n}):'string'!=typeof t?b.grep(e,function(e){return s.call(t,e)>-1!==n}):b.filter(t,e,n)}b.filter=function(e,t,n){var r=t[0];return n&&(e=':not('+e+')'),1===t.length&&1===r.nodeType?b.find.matchesSelector(r,e)?[r]:[]:b.find.matches(e,b.grep(t,function(e){return 1===e.nodeType}))},b.fn.extend({find:function(e){var t,n,r=this.length,i=this;if('string'!=typeof e)return this.pushStack(b(e).filter(function(){for(t=0;t<r;t++)if(b.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)b.find(e,i[t],n);return r>1?b.uniqueSort(n):n},filter:function(e){return this.pushStack(N(this,e||[],!1))},not:function(e){return this.pushStack(N(this,e||[],!0))},is:function(e){return!!N(this,'string'==typeof e&&S.test(e)?b(e):e||[],!1).length}});var j,D=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(b.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,'string'==typeof e){if(!(r='<'===e[0]&&'>'===e[e.length-1]&&e.length>=3?[null,e,null]:D.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof b?t[0]:t,b.merge(this,b.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),A.test(r[1])&&b.isPlainObject(t))for(r in t)h(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=v.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):h(e)?void 0!==n.ready?n.ready(e):e(b):b.makeArray(e,this)}).prototype=b.fn,j=b(v);var q=/^(?:parents|prev(?:Until|All))/,L={children:!0,contents:!0,next:!0,prev:!0};function H(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}b.fn.extend({has:function(e){var t=b(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(b.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a='string'!=typeof e&&b(e);if(!S.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&b.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?b.uniqueSort(o):o)},index:function(e){return e?'string'==typeof e?s.call(b(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(b.uniqueSort(b.merge(this.get(),b(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,'parentNode')},parentsUntil:function(e,t,n){return C(e,'parentNode',n)},next:function(e){return H(e,'nextSibling')},prev:function(e){return H(e,'previousSibling')},nextAll:function(e){return C(e,'nextSibling')},prevAll:function(e){return C(e,'previousSibling')},nextUntil:function(e,t,n){return C(e,'nextSibling',n)},prevUntil:function(e,t,n){return C(e,'previousSibling',n)},siblings:function(e){return E((e.parentNode||{}).firstChild,e)},children:function(e){return E(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(k(e,'template')&&(e=e.content||e),b.merge([],e.childNodes))}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return'Until'!==e.slice(-5)&&(r=n),r&&'string'==typeof r&&(i=b.filter(r,i)),this.length>1&&(L[e]||b.uniqueSort(i),q.test(e)&&i.reverse()),this.pushStack(i)}});var O=/[^\x20\t\r\n\f]+/g;function P(e){return e}function R(e){throw e}function M(e,t,n,r){var i;try{e&&h(i=e.promise)?i.call(e).done(t).fail(n):e&&h(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}b.Callbacks=function(e){e='string'==typeof e?function(e){var t={};return b.each(e.match(O)||[],function(e,n){t[n]=!0}),t}(e):b.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:'')},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){b.each(n,function(n,r){h(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&'string'!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return b.each(arguments,function(e,t){for(var n;(n=b.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?b.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n='',this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=''),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},b.extend({Deferred:function(t){var n=[['notify','progress',b.Callbacks('memory'),b.Callbacks('memory'),2],['resolve','done',b.Callbacks('once memory'),b.Callbacks('once memory'),0,'resolved'],['reject','fail',b.Callbacks('once memory'),b.Callbacks('once memory'),1,'rejected']],r='pending',i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return b.Deferred(function(t){b.each(n,function(n,r){var i=h(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&h(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+'With'](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError('Thenable self-resolution');l=e&&('object'==typeof e||'function'==typeof e)&&e.then,h(l)?i?l.call(e,a(o,n,P,i),a(o,n,R,i)):(o++,l.call(e,a(o,n,P,i),a(o,n,R,i),a(o,n,P,n.notifyWith))):(r!==P&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){b.Deferred.exceptionHook&&b.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==R&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(b.Deferred.getStackHook&&(c.stackTrace=b.Deferred.getStackHook()),e.setTimeout(c))}}return b.Deferred(function(e){n[0][3].add(a(0,e,h(i)?i:P,e.notifyWith)),n[1][3].add(a(0,e,h(t)?t:P)),n[2][3].add(a(0,e,h(r)?r:R))}).promise()},promise:function(e){return null!=e?b.extend(e,i):i}},o={};return b.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+'With'](this===o?void 0:this,arguments),this},o[t[0]+'With']=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),o=i.call(arguments),a=b.Deferred(),s=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?i.call(arguments):n,--t||a.resolveWith(r,o)}};if(t<=1&&(M(e,a.done(s(n)).resolve,a.reject,!t),'pending'===a.state()||h(o[n]&&o[n].then)))return a.then();for(;n--;)M(o[n],s(n),a.reject);return a.promise()}});var I=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;b.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&I.test(t.name)&&e.console.warn('jQuery.Deferred exception: '+t.message,t.stack,n)},b.readyException=function(t){e.setTimeout(function(){throw t})};var W=b.Deferred();function F(){v.removeEventListener('DOMContentLoaded',F),e.removeEventListener('load',F),b.ready()}b.fn.ready=function(e){return W.then(e).catch(function(e){b.readyException(e)}),this},b.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--b.readyWait:b.isReady)||(b.isReady=!0,!0!==e&&--b.readyWait>0||W.resolveWith(v,[b]))}}),b.ready.then=W.then,'complete'===v.readyState||'loading'!==v.readyState&&!v.documentElement.doScroll?e.setTimeout(b.ready):(v.addEventListener('DOMContentLoaded',F),e.addEventListener('load',F));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if('object'===x(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,h(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(b(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},B=/^-ms-/,_=/-([a-z])/g;function z(e,t){return t.toUpperCase()}function U(e){return e.replace(B,'ms-').replace(_,z)}var X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function V(){this.expando=b.expando+V.uid++}V.uid=1,V.prototype={cache:function(e){var t=e[this.expando];return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if('string'==typeof t)i[U(t)]=n;else for(r in t)i[U(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][U(t)]},access:function(e,t,n){return void 0===t||t&&'string'==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(U):(t=U(t))in r?[t]:t.match(O)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||b.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!b.isEmptyObject(t)}};var G=new V,Y=new V,Q=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function K(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r='data-'+t.replace(J,'-$&').toLowerCase(),'string'==typeof(n=e.getAttribute(r))){try{n=function(e){return'true'===e||'false'!==e&&('null'===e?null:e===+e+''?+e:Q.test(e)?JSON.parse(e):e)}(n)}catch(e){}Y.set(e,t,n)}else n=void 0;return n}b.extend({hasData:function(e){return Y.hasData(e)||G.hasData(e)},data:function(e,t,n){return Y.access(e,t,n)},removeData:function(e,t){Y.remove(e,t)},_data:function(e,t,n){return G.access(e,t,n)},_removeData:function(e,t){G.remove(e,t)}}),b.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=Y.get(o),1===o.nodeType&&!G.get(o,'hasDataAttrs'))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf('data-')&&(r=U(r.slice(5)),K(o,r,i[r]));G.set(o,'hasDataAttrs',!0)}return i}return'object'==typeof e?this.each(function(){Y.set(this,e)}):$(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=Y.get(o,e))?n:void 0!==(n=K(o,e))?n:void 0;this.each(function(){Y.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Y.remove(this,e)})}}),b.extend({queue:function(e,t,n){var r;if(e)return t=(t||'fx')+'queue',r=G.get(e,t),n&&(!r||Array.isArray(n)?r=G.access(e,t,b.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||'fx';var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t);'inprogress'===i&&(i=n.shift(),r--),i&&('fx'===t&&n.unshift('inprogress'),delete o.stop,i.call(e,function(){b.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+'queueHooks';return G.get(e,n)||G.access(e,n,{empty:b.Callbacks('once memory').add(function(){G.remove(e,[t+'queue',n])})})}}),b.fn.extend({queue:function(e,t){var n=2;return'string'!=typeof e&&(t=e,e='fx',n--),arguments.length<n?b.queue(this[0],e):void 0===t?this:this.each(function(){var n=b.queue(this,e,t);b._queueHooks(this,e),'fx'===e&&'inprogress'!==n[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||'fx',[])},promise:function(e,t){var n,r=1,i=b.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for('string'!=typeof e&&(t=e,e=void 0),e=e||'fx';a--;)(n=G.get(o[a],e+'queueHooks'))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Z=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ee=new RegExp('^(?:([+-])=|)('+Z+')([a-z%]*)$','i'),te=['Top','Right','Bottom','Left'],ne=v.documentElement,re=function(e){return b.contains(e.ownerDocument,e)},ie={composed:!0};ne.getRootNode&&(re=function(e){return b.contains(e.ownerDocument,e)||e.getRootNode(ie)===e.ownerDocument});var oe=function(e,t){return'none'===(e=t||e).style.display||''===e.style.display&&re(e)&&'none'===b.css(e,'display')};function ae(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return b.css(e,t,'')},u=s(),l=n&&n[3]||(b.cssNumber[t]?'':'px'),c=e.nodeType&&(b.cssNumber[t]||'px'!==l&&+u)&&ee.exec(b.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)b.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,b.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var se={};function ue(e){var t,n=e.ownerDocument,r=e.nodeName,i=se[r];return i||(t=n.body.appendChild(n.createElement(r)),i=b.css(t,'display'),t.parentNode.removeChild(t),'none'===i&&(i='block'),se[r]=i,i)}function le(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?('none'===n&&(i[o]=G.get(r,'display')||null,i[o]||(r.style.display='')),''===r.style.display&&oe(r)&&(i[o]=ue(r))):'none'!==n&&(i[o]='none',G.set(r,'display',n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}b.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return'boolean'==typeof e?e?this.show():this.hide():this.each(function(){oe(this)?b(this).show():b(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=v.createDocumentFragment().appendChild(v.createElement('div')),(fe=v.createElement('input')).setAttribute('type','radio'),fe.setAttribute('checked','checked'),fe.setAttribute('name','t'),ce.appendChild(fe),d.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML='<textarea>x</textarea>',d.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML='<option></option>',d.option=!!ce.lastChild;var ge={thead:[1,'<table>','</table>'],col:[2,'<table><colgroup>','</colgroup></table>'],tr:[2,'<table><tbody>','</tbody></table>'],td:[3,'<table><tbody><tr>','</tr></tbody></table>'],_default:[0,'','']};function ve(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||'*'):void 0!==e.querySelectorAll?e.querySelectorAll(t||'*'):[],void 0===t||t&&k(e,t)?b.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)G.set(e[n],'globalEval',!t||G.get(t[n],'globalEval'))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,d.option||(ge.optgroup=ge.option=[1,'<select multiple=\'multiple\'>','</select>']);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if('object'===x(o))b.merge(p,o.nodeType?[o]:o);else if(me.test(o)){for(a=a||f.appendChild(t.createElement('div')),s=(de.exec(o)||['',''])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+b.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;b.merge(p,a.childNodes),(a=f.firstChild).textContent=''}else p.push(t.createTextNode(o));for(f.textContent='',d=0;o=p[d++];)if(r&&b.inArray(o,r)>-1)i&&i.push(o);else if(l=re(o),a=ve(f.appendChild(o),'script'),l&&ye(a),n)for(c=0;o=a[c++];)he.test(o.type||'')&&n.push(o);return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return v.activeElement}catch(e){}}()==('focus'===t)}function Ee(e,t,n,r,i,o){var a,s;if('object'==typeof t){for(s in'string'!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&('string'==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return b().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=b.guid++)),e.each(function(){b.event.add(this,t,i,r,n)})}function Se(e,t,n){n?(G.set(e,t,!1),b.event.add(e,t,{namespace:!1,handler:function(e){var r,o,a=G.get(this,t);if(1&e.isTrigger&&this[t]){if(a.length)(b.event.special[t]||{}).delegateType&&e.stopPropagation();else if(a=i.call(arguments),G.set(this,t,a),r=n(this,t),this[t](),a!==(o=G.get(this,t))||r?G.set(this,t,!1):o={},a!==o)return e.stopImmediatePropagation(),e.preventDefault(),o&&o.value}else a.length&&(G.set(this,t,{value:b.event.trigger(b.extend(a[0],b.Event.prototype),a.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===G.get(e,t)&&b.event.add(e,t,we)}b.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=G.get(e);if(X(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&b.find.matchesSelector(ne,i),n.guid||(n.guid=b.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(t){return void 0!==b&&b.event.triggered!==t.type?b.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||'').match(O)||['']).length;l--;)d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||'').split('.').sort(),d&&(f=b.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=b.event.special[d]||{},c=b.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&b.expr.match.needsContext.test(i),namespace:h.join('.')},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),b.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=G.hasData(e)&&G.get(e);if(v&&(u=v.events)){for(l=(t=(t||'').match(O)||['']).length;l--;)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||'').split('.').sort(),d){for(f=b.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp('(^|\\.)'+h.join('\\.(?:.*\\.|)')+'(\\.|$)'),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&('**'!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||b.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(u)&&G.remove(e,'handle events')}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=b.event.fix(e),l=(G.get(this,'events')||Object.create(null))[u.type]||[],c=b.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(a=b.event.handlers.call(this,u,l),t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((b.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!('click'===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&('click'!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+' ']&&(a[i]=r.needsContext?b(i,this).index(l)>-1:b.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(b.Event.prototype,e,{enumerable:!0,configurable:!0,get:h(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[b.expando]?e:new b.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&k(t,'input')&&Se(t,'click',we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&k(t,'input')&&Se(t,'click'),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&k(t,'input')&&G.get(t,'click')||k(t,'a')}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},b.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},b.Event=function(e,t){if(!(this instanceof b.Event))return new b.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&b.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[b.expando]=!0},b.Event.prototype={constructor:b.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},b.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},b.event.addProp),b.each({focus:'focusin',blur:'focusout'},function(e,t){b.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(t){return G.get(t.target,e)},delegateType:t}}),b.each({mouseenter:'mouseover',mouseleave:'mouseout',pointerenter:'pointerover',pointerleave:'pointerout'},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||b.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),b.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,b(e.delegateTarget).off(r.namespace?r.origType+'.'+r.namespace:r.origType,r.selector,r.handler),this;if('object'==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&'function'!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){b.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return k(e,'table')&&k(11!==t.nodeType?t:t.firstChild,'tr')&&b(e).children('tbody')[0]||e}function De(e){return e.type=(null!==e.getAttribute('type'))+'/'+e.type,e}function qe(e){return'true/'===(e.type||'').slice(0,5)?e.type=e.type.slice(5):e.removeAttribute('type'),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(G.hasData(e)&&(s=G.get(e).events))for(i in G.remove(t,'handle events'),s)for(n=0,r=s[i].length;n<r;n++)b.event.add(t,i,s[i][n]);Y.hasData(e)&&(o=Y.access(e),a=b.extend({},o),Y.set(t,a))}}function He(e,t,n,r){t=o(t);var i,a,s,u,l,c,f=0,p=e.length,g=p-1,v=t[0],y=h(v);if(y||p>1&&'string'==typeof v&&!d.checkClone&&Ae.test(v))return e.each(function(i){var o=e.eq(i);y&&(t[0]=v.call(this,i,o.html())),He(o,t,n,r)});if(p&&(a=(i=xe(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=a),a||r)){for(u=(s=b.map(ve(i,'script'),De)).length;f<p;f++)l=i,f!==g&&(l=b.clone(l,!0,!0),u&&b.merge(s,ve(l,'script'))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,b.map(s,qe),f=0;f<u;f++)l=s[f],he.test(l.type||'')&&!G.access(l,'globalEval')&&b.contains(c,l)&&(l.src&&'module'!==(l.type||'').toLowerCase()?b._evalUrl&&!l.noModule&&b._evalUrl(l.src,{nonce:l.nonce||l.getAttribute('nonce')},c):m(l.textContent.replace(Ne,''),l,c))}return e}function Oe(e,t,n){for(var r,i=t?b.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||b.cleanData(ve(r)),r.parentNode&&(n&&re(r)&&ye(ve(r,'script')),r.parentNode.removeChild(r));return e}b.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=re(e);if(!(d.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,'input'===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:'input'!==l&&'textarea'!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return(a=ve(c,'script')).length>0&&ye(a,!f&&ve(e,'script')),c},cleanData:function(e){for(var t,n,r,i=b.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[G.expando]){if(t.events)for(r in t.events)i[r]?b.event.remove(n,r):b.removeEvent(n,r,t.handle);n[G.expando]=void 0}n[Y.expando]&&(n[Y.expando]=void 0)}}}),b.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?b.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(b.cleanData(ve(e,!1)),e.textContent='');return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if('string'==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||['',''])[1].toLowerCase()]){e=b.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(b.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return He(this,arguments,function(t){var n=this.parentNode;b.inArray(this,e)<0&&(b.cleanData(ve(this)),n&&n.replaceChild(t,this))},e)}}),b.each({appendTo:'append',prependTo:'prepend',insertBefore:'before',insertAfter:'after',replaceAll:'replaceWith'},function(e,t){b.fn[e]=function(e){for(var n,r=[],i=b(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),b(i[s])[t](n),a.apply(r,n.get());return this.pushStack(r)}});var Pe=new RegExp('^('+Z+')(?!px)[a-z%]+$','i'),Re=/^--/,Me=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(te.join('|'),'i'),Fe=new RegExp('^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$','g');function $e(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace(Fe,'$1')),''!==a||re(e)||(a=b.style(e,t)),!d.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+'':a}function Be(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(c){l.style.cssText='position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0',c.style.cssText='position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%',ne.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);r='1%'!==t.top,u=12===n(t.marginLeft),c.style.right='60%',a=36===n(t.right),i=36===n(t.width),c.style.position='absolute',o=12===n(c.offsetWidth/3),ne.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,u,l=v.createElement('div'),c=v.createElement('div');c.style&&(c.style.backgroundClip='content-box',c.cloneNode(!0).style.backgroundClip='',d.clearCloneStyle='content-box'===c.style.backgroundClip,b.extend(d,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),o},reliableTrDimensions:function(){var t,n,r,i;return null==s&&(t=v.createElement('table'),n=v.createElement('tr'),r=v.createElement('div'),t.style.cssText='position:absolute;left:-11111px;border-collapse:separate',n.style.cssText='border:1px solid',n.style.height='1px',r.style.height='9px',r.style.display='block',ne.appendChild(t).appendChild(n).appendChild(r),i=e.getComputedStyle(n),s=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,ne.removeChild(t)),s}}))}();var _e=['Webkit','Moz','ms'],ze=v.createElement('div').style,Ue={};function Xe(e){var t=b.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=_e.length;n--;)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge={position:'absolute',visibility:'hidden',display:'block'},Ye={letterSpacing:'0',fontWeight:'400'};function Qe(e,t,n){var r=ee.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||'px'):t}function Je(e,t,n,r,i,o){var a='width'===t?1:0,s=0,u=0;if(n===(r?'border':'content'))return 0;for(;a<4;a+=2)'margin'===n&&(u+=b.css(e,n+te[a],!0,i)),r?('content'===n&&(u-=b.css(e,'padding'+te[a],!0,i)),'margin'!==n&&(u-=b.css(e,'border'+te[a]+'Width',!0,i))):(u+=b.css(e,'padding'+te[a],!0,i),'padding'!==n?u+=b.css(e,'border'+te[a]+'Width',!0,i):s+=b.css(e,'border'+te[a]+'Width',!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e['offset'+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ke(e,t,n){var r=Me(e),i=(!d.boxSizingReliable()||n)&&'border-box'===b.css(e,'boxSizing',!1,r),o=i,a=$e(e,t,r),s='offset'+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a='auto'}return(!d.boxSizingReliable()&&i||!d.reliableTrDimensions()&&k(e,'tr')||'auto'===a||!parseFloat(a)&&'inline'===b.css(e,'display',!1,r))&&e.getClientRects().length&&(i='border-box'===b.css(e,'boxSizing',!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Je(e,t,n||(i?'border':'content'),o,r,a)+'px'}function Ze(e,t,n,r,i){return new Ze.prototype.init(e,t,n,r,i)}b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=$e(e,'opacity');return''===n?'1':n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=U(t),u=Re.test(t),l=e.style;if(u||(t=Xe(s)),a=b.cssHooks[t]||b.cssHooks[s],void 0===n)return a&&'get'in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];'string'===(o=typeof n)&&(i=ee.exec(n))&&i[1]&&(n=ae(e,t,i),o='number'),null!=n&&n==n&&('number'!==o||u||(n+=i&&i[3]||(b.cssNumber[s]?'':'px')),d.clearCloneStyle||''!==n||0!==t.indexOf('background')||(l[t]='inherit'),a&&'set'in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=U(t);return Re.test(t)||(t=Xe(s)),(a=b.cssHooks[t]||b.cssHooks[s])&&'get'in a&&(i=a.get(e,!0,n)),void 0===i&&(i=$e(e,t,r)),'normal'===i&&t in Ye&&(i=Ye[t]),''===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),b.each(['height','width'],function(e,t){b.cssHooks[t]={get:function(e,n,r){if(n)return!Ve.test(b.css(e,'display'))||e.getClientRects().length&&e.getBoundingClientRect().width?Ke(e,t,r):Ie(e,Ge,function(){return Ke(e,t,r)})},set:function(e,n,r){var i,o=Me(e),a=!d.scrollboxSize()&&'absolute'===o.position,s=(a||r)&&'border-box'===b.css(e,'boxSizing',!1,o),u=r?Je(e,t,r,s,o):0;return s&&a&&(u-=Math.ceil(e['offset'+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Je(e,t,'border',!1,o)-.5)),u&&(i=ee.exec(n))&&'px'!==(i[3]||'px')&&(e.style[t]=n,n=b.css(e,t)),Qe(0,n,u)}}}),b.cssHooks.marginLeft=Be(d.reliableMarginLeft,function(e,t){if(t)return(parseFloat($e(e,'marginLeft'))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+'px'}),b.each({margin:'',padding:'',border:'Width'},function(e,t){b.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o='string'==typeof n?n.split(' '):[n];r<4;r++)i[e+te[r]+t]=o[r]||o[r-2]||o[0];return i}},'margin'!==e&&(b.cssHooks[e+t].set=Qe)}),b.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=b.css(e,t[a],!1,r);return o}return void 0!==n?b.style(e,t,n):b.css(e,t)},e,t,arguments.length>1)}}),b.Tween=Ze,Ze.prototype={constructor:Ze,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||b.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?'':'px')},cur:function(){var e=Ze.propHooks[this.prop];return e&&e.get?e.get(this):Ze.propHooks._default.get(this)},run:function(e){var t,n=Ze.propHooks[this.prop];return this.options.duration?this.pos=t=b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ze.propHooks._default.set(this),this}},Ze.prototype.init.prototype=Ze.prototype,Ze.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=b.css(e.elem,e.prop,''))&&'auto'!==t?t:0},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):1!==e.elem.nodeType||!b.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:b.style(e.elem,e.prop,e.now+e.unit)}}},Ze.propHooks.scrollTop=Ze.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:'swing'},b.fx=Ze.prototype.init,b.fx.step={};var et,tt,nt=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function it(){tt&&(!1===v.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(it):e.setTimeout(it,b.fx.interval),b.fx.tick())}function ot(){return e.setTimeout(function(){et=void 0}),et=Date.now()}function at(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i['margin'+(n=te[r])]=i['padding'+n]=e;return t&&(i.opacity=i.width=e),i}function st(e,t,n){for(var r,i=(ut.tweeners[t]||[]).concat(ut.tweeners['*']),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ut(e,t,n){var r,i,o=0,a=ut.prefilters.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=et||ot(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{},easing:b.easing._default},n),originalProperties:t,originalOptions:n,startTime:et||ot(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=U(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=b.cssHooks[r])&&'expand'in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=ut.prefilters[o].call(l,e,c,l.opts))return h(r.stop)&&(b._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return b.map(c,st,l),h(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}b.Animation=b.extend(ut,{tweeners:{'*':[function(e,t){var n=this.createTween(e,t);return ae(n.elem,e,ee.exec(t),n),n}]},tweener:function(e,t){h(e)?(t=e,e=['*']):e=e.match(O);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f='width'in t||'height'in t,p=this,d={},h=e.style,g=e.nodeType&&oe(e),v=G.get(e,'fxshow');for(r in n.queue||(null==(a=b._queueHooks(e,'fx')).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,b.queue(e,'fx').length||a.empty.fire()})})),t)if(i=t[r],nt.test(i)){if(delete t[r],o=o||'toggle'===i,i===(g?'hide':'show')){if('show'!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||b.style(e,r)}if((u=!b.isEmptyObject(t))||!b.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=G.get(e,'display')),'none'===(c=b.css(e,'display'))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=b.css(e,'display'),le([e]))),('inline'===c||'inline-block'===c&&null!=l)&&'none'===b.css(e,'float')&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l='none'===c?'':c)),h.display='inline-block')),n.overflow&&(h.overflow='hidden',p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?'hidden'in v&&(g=v.hidden):v=G.access(e,'fxshow',{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),G.remove(e,'fxshow'),d)b.style(e,r,d[r])})),u=st(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e)}}),b.speed=function(e,t,n){var r=e&&'object'==typeof e?b.extend({},e):{complete:n||!n&&t||h(e)&&e,duration:e,easing:n&&t||t&&!h(t)&&t};return b.fx.off?r.duration=0:'number'!=typeof r.duration&&(r.duration in b.fx.speeds?r.duration=b.fx.speeds[r.duration]:r.duration=b.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue='fx'),r.old=r.complete,r.complete=function(){h(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(oe).css('opacity',0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=ut(this,b.extend({},e),o);(i||G.get(this,'finish'))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return'string'!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||'fx',[]),this.each(function(){var t=!0,i=null!=e&&e+'queueHooks',o=b.timers,a=G.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&rt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||b.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||'fx'),this.each(function(){var t,n=G.get(this),r=n[e+'queue'],i=n[e+'queueHooks'],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),b.each(['toggle','show','hide'],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||'boolean'==typeof e?n.apply(this,arguments):this.animate(at(t,!0),e,r,i)}}),b.each({slideDown:at('show'),slideUp:at('hide'),slideToggle:at('toggle'),fadeIn:{opacity:'show'},fadeOut:{opacity:'hide'},fadeToggle:{opacity:'toggle'}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.timers=[],b.fx.tick=function(){var e,t=0,n=b.timers;for(et=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||b.fx.stop(),et=void 0},b.fx.timer=function(e){b.timers.push(e),b.fx.start()},b.fx.interval=13,b.fx.start=function(){tt||(tt=!0,it())},b.fx.stop=function(){tt=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fn.delay=function(t,n){return t=b.fx&&b.fx.speeds[t]||t,n=n||'fx',this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=v.createElement('input'),t=v.createElement('select').appendChild(v.createElement('option'));e.type='checkbox',d.checkOn=''!==e.value,d.optSelected=t.selected,(e=v.createElement('input')).value='t',e.type='radio',d.radioValue='t'===e.value}();var lt,ct=b.expr.attrHandle;b.fn.extend({attr:function(e,t){return $(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})}}),b.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?b.prop(e,t,n):(1===o&&b.isXMLDoc(e)||(i=b.attrHooks[t.toLowerCase()]||(b.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void b.removeAttr(e,t):i&&'set'in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+''),n):i&&'get'in i&&null!==(r=i.get(e,t))?r:null==(r=b.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!d.radioValue&&'radio'===t&&k(e,'input')){var n=e.value;return e.setAttribute('type',t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(O);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),lt={set:function(e,t,n){return!1===t?b.removeAttr(e,n):e.setAttribute(n,n),n}},b.each(b.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ct[t]||b.find.attr;ct[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ct[a],ct[a]=i,i=null!=n(e,t,r)?a:null,ct[a]=o),i}});var ft=/^(?:input|select|textarea|button)$/i,pt=/^(?:a|area)$/i;function dt(e){return(e.match(O)||[]).join(' ')}function ht(e){return e.getAttribute&&e.getAttribute('class')||''}function gt(e){return Array.isArray(e)?e:'string'==typeof e&&e.match(O)||[]}b.fn.extend({prop:function(e,t){return $(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[b.propFix[e]||e]})}}),b.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&b.isXMLDoc(e)||(t=b.propFix[t]||t,i=b.propHooks[t]),void 0!==n?i&&'set'in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&'get'in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=b.find.attr(e,'tabindex');return t?parseInt(t,10):ft.test(e.nodeName)||pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:'htmlFor',class:'className'}}),d.optSelected||(b.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),b.each(['tabIndex','readOnly','maxLength','cellSpacing','cellPadding','rowSpan','colSpan','useMap','frameBorder','contentEditable'],function(){b.propFix[this.toLowerCase()]=this}),b.fn.extend({addClass:function(e){var t,n,r,i,o,a;return h(e)?this.each(function(t){b(this).addClass(e.call(this,t,ht(this)))}):(t=gt(e)).length?this.each(function(){if(r=ht(this),n=1===this.nodeType&&' '+dt(r)+' '){for(o=0;o<t.length;o++)i=t[o],n.indexOf(' '+i+' ')<0&&(n+=i+' ');a=dt(n),r!==a&&this.setAttribute('class',a)}}):this},removeClass:function(e){var t,n,r,i,o,a;return h(e)?this.each(function(t){b(this).removeClass(e.call(this,t,ht(this)))}):arguments.length?(t=gt(e)).length?this.each(function(){if(r=ht(this),n=1===this.nodeType&&' '+dt(r)+' '){for(o=0;o<t.length;o++)for(i=t[o];n.indexOf(' '+i+' ')>-1;)n=n.replace(' '+i+' ',' ');a=dt(n),r!==a&&this.setAttribute('class',a)}}):this:this.attr('class','')},toggleClass:function(e,t){var n,r,i,o,a=typeof e,s='string'===a||Array.isArray(e);return h(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,ht(this),t),t)}):'boolean'==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=gt(e),this.each(function(){if(s)for(o=b(this),i=0;i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==e&&'boolean'!==a||((r=ht(this))&&G.set(this,'__className__',r),this.setAttribute&&this.setAttribute('class',r||!1===e?'':G.get(this,'__className__')||''))}))},hasClass:function(e){var t,n,r=0;for(t=' '+e+' ';n=this[r++];)if(1===n.nodeType&&(' '+dt(ht(n))+' ').indexOf(t)>-1)return!0;return!1}});var vt=/\r/g;b.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=h(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,b(this).val()):e)?i='':'number'==typeof i?i+='':Array.isArray(i)&&(i=b.map(i,function(e){return null==e?'':e+''})),(t=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()])&&'set'in t&&void 0!==t.set(this,i,'value')||(this.value=i))})):i?(t=b.valHooks[i.type]||b.valHooks[i.nodeName.toLowerCase()])&&'get'in t&&void 0!==(n=t.get(i,'value'))?n:'string'==typeof(n=i.value)?n.replace(vt,''):null==n?'':n:void 0}}),b.extend({valHooks:{option:{get:function(e){var t=b.find.attr(e,'value');return null!=t?t:dt(b.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a='select-one'===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!k(n.parentNode,'optgroup'))){if(t=b(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=b.makeArray(t),a=i.length;a--;)((r=i[a]).selected=b.inArray(b.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),b.each(['radio','checkbox'],function(){b.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=b.inArray(b(e).val(),t)>-1}},d.checkOn||(b.valHooks[this].get=function(e){return null===e.getAttribute('value')?'on':e.value})}),d.focusin='onfocusin'in e;var yt=/^(?:focusinfocus|focusoutblur)$/,mt=function(e){e.stopPropagation()};b.extend(b.event,{trigger:function(t,n,r,i){var o,a,s,u,l,f,p,d,y=[r||v],m=c.call(t,'type')?t.type:t,x=c.call(t,'namespace')?t.namespace.split('.'):[];if(a=d=s=r=r||v,3!==r.nodeType&&8!==r.nodeType&&!yt.test(m+b.event.triggered)&&(m.indexOf('.')>-1&&(m=(x=m.split('.')).shift(),x.sort()),l=m.indexOf(':')<0&&'on'+m,(t=t[b.expando]?t:new b.Event(m,'object'==typeof t&&t)).isTrigger=i?2:3,t.namespace=x.join('.'),t.rnamespace=t.namespace?new RegExp('(^|\\.)'+x.join('\\.(?:.*\\.|)')+'(\\.|$)'):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:b.makeArray(n,[t]),p=b.event.special[m]||{},i||!p.trigger||!1!==p.trigger.apply(r,n))){if(!i&&!p.noBubble&&!g(r)){for(u=p.delegateType||m,yt.test(u+m)||(a=a.parentNode);a;a=a.parentNode)y.push(a),s=a;s===(r.ownerDocument||v)&&y.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=y[o++])&&!t.isPropagationStopped();)d=a,t.type=o>1?u:p.bindType||m,(f=(G.get(a,'events')||Object.create(null))[t.type]&&G.get(a,'handle'))&&f.apply(a,n),(f=l&&a[l])&&f.apply&&X(a)&&(t.result=f.apply(a,n),!1===t.result&&t.preventDefault());return t.type=m,i||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(y.pop(),n)||!X(r)||l&&h(r[m])&&!g(r)&&((s=r[l])&&(r[l]=null),b.event.triggered=m,t.isPropagationStopped()&&d.addEventListener(m,mt),r[m](),t.isPropagationStopped()&&d.removeEventListener(m,mt),b.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=b.extend(new b.Event,n,{type:e,isSimulated:!0});b.event.trigger(r,null,t)}}),b.fn.extend({trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return b.event.trigger(e,t,n,!0)}}),d.focusin||b.each({focus:'focusin',blur:'focusout'},function(e,t){var n=function(e){b.event.simulate(t,e.target,b.event.fix(e))};b.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=G.access(r,t);i||r.addEventListener(e,n,!0),G.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=G.access(r,t)-1;i?G.access(r,t,i):(r.removeEventListener(e,n,!0),G.remove(r,t))}}});var xt=e.location,bt={guid:Date.now()},wt=/\?/;b.parseXML=function(t){var n,r;if(!t||'string'!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,'text/xml')}catch(e){}return r=n&&n.getElementsByTagName('parsererror')[0],n&&!r||b.error('Invalid XML: '+(r?b.map(r.childNodes,function(e){return e.textContent}).join('\n'):t)),n};var Tt=/\[\]$/,Ct=/\r?\n/g,Et=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function kt(e,t,n,r){var i;if(Array.isArray(t))b.each(t,function(t,i){n||Tt.test(e)?r(e,i):kt(e+'['+('object'==typeof i&&null!=i?t:'')+']',i,n,r)});else if(n||'object'!==x(t))r(e,t);else for(i in t)kt(e+'['+i+']',t[i],n,r)}b.param=function(e,t){var n,r=[],i=function(e,t){var n=h(t)?t():t;r[r.length]=encodeURIComponent(e)+'='+encodeURIComponent(null==n?'':n)};if(null==e)return'';if(Array.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){i(this.name,this.value)});else for(n in e)kt(n,e[n],t,i);return r.join('&')},b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,'elements');return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(':disabled')&&St.test(this.nodeName)&&!Et.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:Array.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(Ct,'\r\n')}}):{name:t.name,value:n.replace(Ct,'\r\n')}}).get()}});var At=/%20/g,Nt=/#.*$/,jt=/([?&])_=[^&]*/,Dt=/^(.*?):[ \t]*([^\r\n]*)$/gm,qt=/^(?:GET|HEAD)$/,Lt=/^\/\//,Ht={},Ot={},Pt='*/'.concat('*'),Rt=v.createElement('a');function Mt(e){return function(t,n){'string'!=typeof t&&(n=t,t='*');var r,i=0,o=t.toLowerCase().match(O)||[];if(h(n))for(;r=o[i++];)'+'===r[0]?(r=r.slice(1)||'*',(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function It(e,t,n,r){var i={},o=e===Ot;function a(s){var u;return i[s]=!0,b.each(e[s]||[],function(e,s){var l=s(t,n,r);return'string'!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i['*']&&a('*')}function Wt(e,t){var n,r,i=b.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&b.extend(!0,e,r),e}Rt.href=xt.href,b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:'GET',isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:'application/x-www-form-urlencoded; charset=UTF-8',accepts:{'*':Pt,text:'text/plain',html:'text/html',xml:'application/xml, text/xml',json:'application/json, text/javascript'},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:'responseXML',text:'responseText',json:'responseJSON'},converters:{'* text':String,'text html':!0,'text json':JSON.parse,'text xml':b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,b.ajaxSettings),t):Wt(b.ajaxSettings,e)},ajaxPrefilter:Mt(Ht),ajaxTransport:Mt(Ot),ajax:function(t,n){'object'==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f,p,d=b.ajaxSetup({},n),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?b(h):b.event,y=b.Deferred(),m=b.Callbacks('once memory'),x=d.statusCode||{},w={},T={},C='canceled',E={readyState:0,getResponseHeader:function(e){var t;if(l){if(!a)for(a={};t=Dt.exec(o);)a[t[1].toLowerCase()+' ']=(a[t[1].toLowerCase()+' ']||[]).concat(t[2]);t=a[e.toLowerCase()+' ']}return null==t?null:t.join(', ')},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return r&&r.abort(t),S(0,t),this}};if(y.promise(E),d.url=((t||d.url||xt.href)+'').replace(Lt,xt.protocol+'//'),d.type=n.method||n.type||d.method||d.type,d.dataTypes=(d.dataType||'*').toLowerCase().match(O)||[''],null==d.crossDomain){u=v.createElement('a');try{u.href=d.url,u.href=u.href,d.crossDomain=Rt.protocol+'//'+Rt.host!=u.protocol+'//'+u.host}catch(e){d.crossDomain=!0}}if(d.data&&d.processData&&'string'!=typeof d.data&&(d.data=b.param(d.data,d.traditional)),It(Ht,d,n,E),l)return E;for(f in(c=b.event&&d.global)&&0==b.active++&&b.event.trigger('ajaxStart'),d.type=d.type.toUpperCase(),d.hasContent=!qt.test(d.type),i=d.url.replace(Nt,''),d.hasContent?d.data&&d.processData&&0===(d.contentType||'').indexOf('application/x-www-form-urlencoded')&&(d.data=d.data.replace(At,'+')):(p=d.url.slice(i.length),d.data&&(d.processData||'string'==typeof d.data)&&(i+=(wt.test(i)?'&':'?')+d.data,delete d.data),!1===d.cache&&(i=i.replace(jt,'$1'),p=(wt.test(i)?'&':'?')+'_='+bt.guid+++p),d.url=i+p),d.ifModified&&(b.lastModified[i]&&E.setRequestHeader('If-Modified-Since',b.lastModified[i]),b.etag[i]&&E.setRequestHeader('If-None-Match',b.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&E.setRequestHeader('Content-Type',d.contentType),E.setRequestHeader('Accept',d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+('*'!==d.dataTypes[0]?', '+Pt+'; q=0.01':''):d.accepts['*']),d.headers)E.setRequestHeader(f,d.headers[f]);if(d.beforeSend&&(!1===d.beforeSend.call(h,E,d)||l))return E.abort();if(C='abort',m.add(d.complete),E.done(d.success),E.fail(d.error),r=It(Ot,d,n,E)){if(E.readyState=1,c&&g.trigger('ajaxSend',[E,d]),l)return E;d.async&&d.timeout>0&&(s=e.setTimeout(function(){E.abort('timeout')},d.timeout));try{l=!1,r.send(w,S)}catch(e){if(l)throw e;S(-1,e)}}else S(-1,'No Transport');function S(t,n,a,u){var f,p,v,w,T,C=n;l||(l=!0,s&&e.clearTimeout(s),r=void 0,o=u||'',E.readyState=t>0?4:0,f=t>=200&&t<300||304===t,a&&(w=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;'*'===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader('Content-Type'));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+' '+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,E,a)),!f&&b.inArray('script',d.dataTypes)>-1&&b.inArray('json',d.dataTypes)<0&&(d.converters['text script']=function(){}),w=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if('*'===o)o=u;else if('*'!==u&&u!==o){if(!(a=l[u+' '+o]||l['* '+o]))for(i in l)if((s=i.split(' '))[1]===o&&(a=l[u+' '+s[0]]||l['* '+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:'parsererror',error:a?e:'No conversion from '+u+' to '+o}}}return{state:'success',data:t}}(d,w,E,f),f?(d.ifModified&&((T=E.getResponseHeader('Last-Modified'))&&(b.lastModified[i]=T),(T=E.getResponseHeader('etag'))&&(b.etag[i]=T)),204===t||'HEAD'===d.type?C='nocontent':304===t?C='notmodified':(C=w.state,p=w.data,f=!(v=w.error))):(v=C,!t&&C||(C='error',t<0&&(t=0))),E.status=t,E.statusText=(n||C)+'',f?y.resolveWith(h,[p,C,E]):y.rejectWith(h,[E,C,v]),E.statusCode(x),x=void 0,c&&g.trigger(f?'ajaxSuccess':'ajaxError',[E,d,f?p:v]),m.fireWith(h,[E,C]),c&&(g.trigger('ajaxComplete',[E,d]),--b.active||b.event.trigger('ajaxStop')))}return E},getJSON:function(e,t,n){return b.get(e,t,n,'json')},getScript:function(e,t){return b.get(e,void 0,t,'script')}}),b.each(['get','post'],function(e,t){b[t]=function(e,n,r,i){return h(n)&&(i=i||r,r=n,n=void 0),b.ajax(b.extend({url:e,type:t,dataType:i,data:n,success:r},b.isPlainObject(e)&&e))}}),b.ajaxPrefilter(function(e){var t;for(t in e.headers)'content-type'===t.toLowerCase()&&(e.contentType=e.headers[t]||'')}),b._evalUrl=function(e,t,n){return b.ajax({url:e,type:'GET',dataType:'script',cache:!0,async:!1,global:!1,converters:{'text script':function(){}},dataFilter:function(e){b.globalEval(e,t,n)}})},b.fn.extend({wrapAll:function(e){var t;return this[0]&&(h(e)&&(e=e.call(this[0])),t=b(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return h(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=h(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not('body').each(function(){b(this).replaceWith(this.childNodes)}),this}}),b.expr.pseudos.hidden=function(e){return!b.expr.pseudos.visible(e)},b.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},b.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Ft={0:200,1223:204},$t=b.ajaxSettings.xhr();d.cors=!!$t&&'withCredentials'in $t,d.ajax=$t=!!$t,b.ajaxTransport(function(t){var n,r;if(d.cors||$t&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i['X-Requested-With']||(i['X-Requested-With']='XMLHttpRequest'),i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,'abort'===e?s.abort():'error'===e?'number'!=typeof s.status?o(0,'error'):o(s.status,s.statusText):o(Ft[s.status]||s.status,s.statusText,'text'!==(s.responseType||'text')||'string'!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n('error'),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n('abort');try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),b.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),b.ajaxSetup({accepts:{script:'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'},contents:{script:/\b(?:java|ecma)script\b/},converters:{'text script':function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter('script',function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type='GET')}),b.ajaxTransport('script',function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=b('<script>').attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on('load error',n=function(e){t.remove(),n=null,e&&i('error'===e.type?404:200,e.type)}),v.head.appendChild(t[0])},abort:function(){n&&n()}}});var Bt,_t=[],zt=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:'callback',jsonpCallback:function(){var e=_t.pop()||b.expando+'_'+bt.guid++;return this[e]=!0,e}}),b.ajaxPrefilter('json jsonp',function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(zt.test(t.url)?'url':'string'==typeof t.data&&0===(t.contentType||'').indexOf('application/x-www-form-urlencoded')&&zt.test(t.data)&&'data');if(s||'jsonp'===t.dataTypes[0])return i=t.jsonpCallback=h(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(zt,'$1'+i):!1!==t.jsonp&&(t.url+=(wt.test(t.url)?'&':'?')+t.jsonp+'='+i),t.converters['script json']=function(){return a||b.error(i+' was not called'),a[0]},t.dataTypes[0]='json',o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?b(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,_t.push(i)),a&&h(o)&&o(a[0]),a=o=void 0}),'script'}),d.createHTMLDocument=((Bt=v.implementation.createHTMLDocument('').body).innerHTML='<form></form><form></form>',2===Bt.childNodes.length),b.parseHTML=function(e,t,n){return'string'!=typeof e?[]:('boolean'==typeof t&&(n=t,t=!1),t||(d.createHTMLDocument?((r=(t=v.implementation.createHTMLDocument('')).createElement('base')).href=v.location.href,t.head.appendChild(r)):t=v),i=A.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&b(o).remove(),b.merge([],i.childNodes)));var r,i,o},b.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(' ');return s>-1&&(r=dt(e.slice(s)),e=e.slice(0,s)),h(t)?(n=t,t=void 0):t&&'object'==typeof t&&(i='POST'),a.length>0&&b.ajax({url:e,type:i||'GET',dataType:'html',data:t}).done(function(e){o=arguments,a.html(r?b('<div>').append(b.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},b.expr.pseudos.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length},b.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=b.css(e,'position'),c=b(e),f={};'static'===l&&(e.style.position='relative'),s=c.offset(),o=b.css(e,'top'),u=b.css(e,'left'),('absolute'===l||'fixed'===l)&&(o+u).indexOf('auto')>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),h(t)&&(t=t.call(e,n,b.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),'using'in t?t.using.call(e,f):c.css(f)}},b.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){b.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if('fixed'===b.css(r,'position'))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&'static'===b.css(e,'position');)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=b(e).offset()).top+=b.css(e,'borderTopWidth',!0),i.left+=b.css(e,'borderLeftWidth',!0))}return{top:t.top-i.top-b.css(r,'marginTop',!0),left:t.left-i.left-b.css(r,'marginLeft',!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&'static'===b.css(e,'position');)e=e.offsetParent;return e||ne})}}),b.each({scrollLeft:'pageXOffset',scrollTop:'pageYOffset'},function(e,t){var n='pageYOffset'===t;b.fn[e]=function(r){return $(this,function(e,r,i){var o;if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),b.each(['top','left'],function(e,t){b.cssHooks[t]=Be(d.pixelPosition,function(e,n){if(n)return n=$e(e,t),Pe.test(n)?b(e).position()[t]+'px':n})}),b.each({Height:'height',Width:'width'},function(e,t){b.each({padding:'inner'+e,content:t,'':'outer'+e},function(n,r){b.fn[r]=function(i,o){var a=arguments.length&&(n||'boolean'!=typeof i),s=n||(!0===i||!0===o?'margin':'border');return $(this,function(t,n,i){var o;return g(t)?0===r.indexOf('outer')?t['inner'+e]:t.document.documentElement['client'+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body['scroll'+e],o['scroll'+e],t.body['offset'+e],o['offset'+e],o['client'+e])):void 0===i?b.css(t,n,s):b.style(t,n,i,s)},t,a?i:void 0,a)}})}),b.each(['ajaxStart','ajaxStop','ajaxComplete','ajaxError','ajaxSuccess','ajaxSend'],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,'**'):this.off(t,e||'**',n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),b.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});var Ut=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;b.proxy=function(e,t){var n,r,o;if('string'==typeof t&&(n=e[t],t=e,e=n),h(e))return r=i.call(arguments,2),(o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}).guid=e.guid=e.guid||b.guid++,o},b.holdReady=function(e){e?b.readyWait++:b.ready(!0)},b.isArray=Array.isArray,b.parseJSON=JSON.parse,b.nodeName=k,b.isFunction=h,b.isWindow=g,b.camelCase=U,b.type=x,b.now=Date.now,b.isNumeric=function(e){var t=b.type(e);return('number'===t||'string'===t)&&!isNaN(e-parseFloat(e))},b.trim=function(e){return null==e?'':(e+'').replace(Ut,'$1')},'function'==typeof define&&define.amd&&define('jquery',[],function(){return b});var Xt=e.jQuery,Vt=e.$;return b.noConflict=function(t){return e.$===b&&(e.$=Vt),t&&e.jQuery===b&&(e.jQuery=Xt),b},void 0===t&&(e.jQuery=e.$=b),b});

/*! jQuery UI - v1.11.1 - 2014-08-13
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
!function(t){'function'==typeof define&&define.amd?define('jquery-ui',['jquery'],t):t(jQuery)}(function(t){var e,i,s,n;function o(e,i){var s,n,o,r=e.nodeName.toLowerCase();return'area'===r?(n=(s=e.parentNode).name,!(!e.href||!n||'map'!==s.nodeName.toLowerCase())&&(!!(o=t('img[usemap=\'#'+n+'\']')[0])&&a(o))):(/input|select|textarea|button|object/.test(r)?!e.disabled:'a'===r&&e.href||i)&&a(e)}function a(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return'hidden'===t.css(this,'visibility')}).length}
/*!
 * jQuery UI Core 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
t.ui=t.ui||{},t.extend(t.ui,{version:'1.11.1',keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css('position'),s='absolute'===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return(!s||'static'!==e.css('position'))&&n.test(e.css('overflow')+e.css('overflow-y')+e.css('overflow-x'))}).eq(0);return'fixed'!==i&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id='ui-id-'+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr('id')})}}),t.extend(t.expr[':'],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(e){return o(e,!isNaN(t.attr(e,'tabindex')))},tabbable:function(e){var i=t.attr(e,'tabindex'),s=isNaN(i);return(s||i>=0)&&o(e,!s)}}),t('<a>').outerWidth(1).jquery||t.each(['Width','Height'],function(e,i){var s='Width'===i?['Left','Right']:['Top','Bottom'],n=i.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function a(e,i,n,o){return t.each(s,function(){i-=parseFloat(t.css(e,'padding'+this))||0,n&&(i-=parseFloat(t.css(e,'border'+this+'Width'))||0),o&&(i-=parseFloat(t.css(e,'margin'+this))||0)}),i}t.fn['inner'+i]=function(e){return void 0===e?o['inner'+i].call(this):this.each(function(){t(this).css(n,a(this,e)+'px')})},t.fn['outer'+i]=function(e,s){return'number'!=typeof e?o['outer'+i].call(this,e):this.each(function(){t(this).css(n,a(this,e,!0,s)+'px')})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t('<a>').data('a-b','a').removeData('a-b').data('a-b')&&(t.fn.removeData=(i=t.fn.removeData,function(e){return arguments.length?i.call(this,t.camelCase(e)):i.call(this)})),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:(n=t.fn.focus,function(e,i){return'number'==typeof e?this.each(function(){var s=this;setTimeout(function(){t(s).focus(),i&&i.call(s)},e)}):n.apply(this,arguments)}),disableSelection:(s='onselectstart'in document.createElement('div')?'selectstart':'mousedown',function(){return this.bind(s+'.ui-disableSelection',function(t){t.preventDefault()})}),enableSelection:function(){return this.unbind('.ui-disableSelection')},zIndex:function(e){if(void 0!==e)return this.css('zIndex',e);if(this.length)for(var i,s,n=t(this[0]);n.length&&n[0]!==document;){if(('absolute'===(i=n.css('position'))||'relative'===i||'fixed'===i)&&(s=parseInt(n.css('zIndex'),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;n<o.length;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}};
/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
var r=0,h=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{(s=t._data(n,'events'))&&s.remove&&t(n).triggerHandler('remove')}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r,h={},l=e.split('.')[0];return e=e.split('.')[1],n=l+'-'+e,s||(s=i,i=t.Widget),t.expr[':'][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[l]=t[l]||{},o=t[l][e],a=t[l][e]=function(t,e){if(!this._createWidget)return new a(t,e);arguments.length&&this._createWidget(t,e)},t.extend(a,o,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(r=new i).options=t.widget.extend({},r.options),t.each(s,function(e,s){var n,o;t.isFunction(s)?h[e]=(n=function(){return i.prototype[e].apply(this,arguments)},o=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=o,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}):h[e]=s}),a.prototype=t.widget.extend(r,{widgetEventPrefix:o&&r.widgetEventPrefix||e},h,{constructor:a,namespace:l,widgetName:e,widgetFullName:n}),o?(t.each(o._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+'.'+s.widgetName,a,i._proto)}),delete o._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var i,s,n=h.call(arguments,1),o=0,a=n.length;o<a;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(t.isPlainObject(s)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):e[i]=s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o='string'==typeof n,a=h.call(arguments,1),r=this;return n=!o&&a.length?t.widget.extend.apply(null,[n].concat(a)):n,o?this.each(function(){var i,o=t.data(this,s);return'instance'===n?(r=o,!1):o?t.isFunction(o[n])&&'_'!==n.charAt(0)?(i=o[n].apply(o,a))!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0:t.error('no such method \''+n+'\' for '+e+' widget instance'):t.error('cannot call methods on '+e+' prior to initialization; attempted to call method \''+n+'\'')}):this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))}),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:'widget',widgetEventPrefix:'',defaultElement:'<div>',options:{disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=r++,this.eventNamespace='.'+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger('create',null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName+'-disabled ui-state-disabled'),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass('ui-state-hover'),this.focusable.removeClass('ui-state-focus')},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if('string'==typeof e)if(a={},e=(s=e.split('.')).shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,'disabled'===t&&(this.widget().toggleClass(this.widgetFullName+'-disabled',!!e),e&&(this.hoverable.removeClass('ui-state-hover'),this.focusable.removeClass('ui-state-focus'))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,s){var n,o=this;'boolean'!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass('ui-state-disabled'))return('string'==typeof a?o[a]:a).apply(o,arguments)}'string'!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.delegate(c,l,r):i.bind(l,r)})},_off:function(t,e){e=(e||'').split(' ').join(this.eventNamespace+' ')+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){var i=this;return setTimeout(function(){return('string'==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass('ui-state-hover')},mouseleave:function(e){t(e.currentTarget).removeClass('ui-state-hover')}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass('ui-state-focus')},focusout:function(e){t(e.currentTarget).removeClass('ui-state-focus')}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:'fadeIn',hide:'fadeOut'},function(e,i){t.Widget.prototype['_'+e]=function(s,n,o){'string'==typeof n&&(n={effect:n});var a,r=n?!0===n||'number'==typeof n?i:n.effect||i:e;'number'==typeof(n=n||{})&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}});t.widget;
/*!
 * jQuery UI Mouse 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */var l=!1;t(document).mouseup(function(){l=!1});t.widget('ui.mouse',{version:'1.11.1',options:{cancel:'input,textarea,button,select,option',distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind('mousedown.'+this.widgetName,function(t){return e._mouseDown(t)}).bind('click.'+this.widgetName,function(i){if(!0===t.data(i.target,e.widgetName+'.preventClickEvent'))return t.removeData(i.target,e.widgetName+'.preventClickEvent'),i.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind('.'+this.widgetName),this._mouseMoveDelegate&&this.document.unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!l){this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n=!('string'!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;return!(s&&!n&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+'.preventClickEvent')&&t.removeData(e.target,this.widgetName+'.preventClickEvent'),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.bind('mousemove.'+this.widgetName,this._mouseMoveDelegate).bind('mouseup.'+this.widgetName,this._mouseUpDelegate),e.preventDefault(),l=!0,!0))}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button?this._mouseUp(e):e.which?this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted):this._mouseUp(e)},_mouseUp:function(e){return this.document.unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+'.preventClickEvent',!0),this._mouseStop(e)),l=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});
/*!
 * jQuery UI Position 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
/*!
 * jQuery UI Position 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(){t.ui=t.ui||{};var e,i,s=Math.max,n=Math.abs,o=Math.round,a=/left|center|right/,r=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,c=/%$/,u=t.fn.position;function d(t,e,i){return[parseFloat(t[0])*(c.test(t[0])?e/100:1),parseFloat(t[1])*(c.test(t[1])?i/100:1)]}function p(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,s,n=t('<div style=\'display:block;position:absolute;width:50px;height:50px;overflow:hidden;\'><div style=\'height:100px;width:auto;\'></div></div>'),o=n.children()[0];return t('body').append(n),i=o.offsetWidth,n.css('overflow','scroll'),i===(s=o.offsetWidth)&&(s=n[0].clientWidth),n.remove(),e=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?'':e.element.css('overflow-x'),s=e.isWindow||e.isDocument?'':e.element.css('overflow-y'),n='scroll'===i||'auto'===i&&e.width<e.element[0].scrollWidth;return{width:'scroll'===s||'auto'===s&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return u.apply(this,arguments);e=t.extend({},e);var c,f,m,g,v,_,b,y,w=t(e.of),x=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(x),C=(e.collision||'flip').split(' '),D={};return _=9===(y=(b=w)[0]).nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:t.isWindow(y)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:y.preventDefault?{width:0,height:0,offset:{top:y.pageY,left:y.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()},w[0].preventDefault&&(e.at='left top'),f=_.width,m=_.height,g=_.offset,v=t.extend({},g),t.each(['my','at'],function(){var t,i,s=(e[this]||'').split(' ');1===s.length&&(s=a.test(s[0])?s.concat(['center']):r.test(s[0])?['center'].concat(s):['center','center']),s[0]=a.test(s[0])?s[0]:'center',s[1]=r.test(s[1])?s[1]:'center',t=h.exec(s[0]),i=h.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[l.exec(s[0])[0],l.exec(s[1])[0]]}),1===C.length&&(C[1]=C[0]),'right'===e.at[0]?v.left+=f:'center'===e.at[0]&&(v.left+=f/2),'bottom'===e.at[1]?v.top+=m:'center'===e.at[1]&&(v.top+=m/2),c=d(D.at,f,m),v.left+=c[0],v.top+=c[1],this.each(function(){var a,r,h=t(this),l=h.outerWidth(),u=h.outerHeight(),_=p(this,'marginLeft'),b=p(this,'marginTop'),y=l+_+p(this,'marginRight')+k.width,I=u+b+p(this,'marginBottom')+k.height,T=t.extend({},v),P=d(D.my,h.outerWidth(),h.outerHeight());'right'===e.my[0]?T.left-=l:'center'===e.my[0]&&(T.left-=l/2),'bottom'===e.my[1]?T.top-=u:'center'===e.my[1]&&(T.top-=u/2),T.left+=P[0],T.top+=P[1],i||(T.left=o(T.left),T.top=o(T.top)),a={marginLeft:_,marginTop:b},t.each(['left','top'],function(i,s){t.ui.position[C[i]]&&t.ui.position[C[i]][s](T,{targetWidth:f,targetHeight:m,elemWidth:l,elemHeight:u,collisionPosition:a,collisionWidth:y,collisionHeight:I,offset:[c[0]+P[0],c[1]+P[1]],my:e.my,at:e.at,within:x,elem:h})}),e.using&&(r=function(t){var i=g.left-T.left,o=i+f-l,a=g.top-T.top,r=a+m-u,c={target:{element:w,left:g.left,top:g.top,width:f,height:m},element:{element:h,left:T.left,top:T.top,width:l,height:u},horizontal:o<0?'left':i>0?'right':'center',vertical:r<0?'top':a>0?'bottom':'middle'};f<l&&n(i+o)<f&&(c.horizontal='center'),m<u&&n(a+r)<m&&(c.vertical='middle'),s(n(i),n(o))>s(n(a),n(r))?c.important='horizontal':c.important='vertical',e.using.call(this,t,c)}),h.offset(t.extend(T,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,a=n.width,r=t.left-e.collisionPosition.marginLeft,h=o-r,l=r+e.collisionWidth-a-o;e.collisionWidth>a?h>0&&l<=0?(i=t.left+h+e.collisionWidth-a-o,t.left+=h-i):t.left=l>0&&h<=0?o:h>l?o+a-e.collisionWidth:o:h>0?t.left+=h:l>0?t.left-=l:t.left=s(t.left-r,t.left)},top:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollTop:n.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=o-r,l=r+e.collisionHeight-a-o;e.collisionHeight>a?h>0&&l<=0?(i=t.top+h+e.collisionHeight-a-o,t.top+=h-i):t.top=l>0&&h<=0?o:h>l?o+a-e.collisionHeight:o:h>0?t.top+=h:l>0?t.top-=l:t.top=s(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,o=e.within,a=o.offset.left+o.scrollLeft,r=o.width,h=o.isWindow?o.scrollLeft:o.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d='left'===e.my[0]?-e.elemWidth:'right'===e.my[0]?e.elemWidth:0,p='left'===e.at[0]?e.targetWidth:'right'===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];c<0?((i=t.left+d+p+f+e.collisionWidth-r-a)<0||i<n(c))&&(t.left+=d+p+f):u>0&&((s=t.left-e.collisionPosition.marginLeft+d+p+f-h)>0||n(s)<u)&&(t.left+=d+p+f)},top:function(t,e){var i,s,o=e.within,a=o.offset.top+o.scrollTop,r=o.height,h=o.isWindow?o.scrollTop:o.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d='top'===e.my[1]?-e.elemHeight:'bottom'===e.my[1]?e.elemHeight:0,p='top'===e.at[1]?e.targetHeight:'bottom'===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];c<0?(s=t.top+d+p+f+e.collisionHeight-r-a,t.top+d+p+f>c&&(s<0||s<n(c))&&(t.top+=d+p+f)):u>0&&(i=t.top-e.collisionPosition.marginTop+d+p+f-h,t.top+d+p+f>u&&(i>0||n(i)<u)&&(t.top+=d+p+f))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,s,n,o,a,r=document.getElementsByTagName('body')[0],h=document.createElement('div');for(a in e=document.createElement(r?'div':'body'),n={visibility:'hidden',width:0,height:0,border:0,margin:0,background:'none'},r&&t.extend(n,{position:'absolute',left:'-1000px',top:'-1000px'}),n)e.style[a]=n[a];e.appendChild(h),(s=r||document.documentElement).insertBefore(e,s.firstChild),h.style.cssText='position: absolute; left: 10.7432222px;',o=t(h).offset().left,i=o>10&&o<11,e.innerHTML='',s.removeChild(e)}()}();t.ui.position,t.widget('ui.accordion',{version:'1.11.1',options:{active:0,animate:{},collapsible:!1,event:'click',header:'> li > :first-child,> :not(li):even',heightStyle:'auto',icons:{activeHeader:'ui-icon-triangle-1-s',header:'ui-icon-triangle-1-e'},activate:null,beforeActivate:null},hideProps:{borderTopWidth:'hide',borderBottomWidth:'hide',paddingTop:'hide',paddingBottom:'hide',height:'hide'},showProps:{borderTopWidth:'show',borderBottomWidth:'show',paddingTop:'show',paddingBottom:'show',height:'show'},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass('ui-accordion ui-widget ui-helper-reset').attr('role','tablist'),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t('<span>').addClass('ui-accordion-header-icon ui-icon '+e.header).prependTo(this.headers),this.active.children('.ui-accordion-header-icon').removeClass(e.header).addClass(e.activeHeader),this.headers.addClass('ui-accordion-icons'))},_destroyIcons:function(){this.headers.removeClass('ui-accordion-icons').children('.ui-accordion-header-icon').remove()},_destroy:function(){var t;this.element.removeClass('ui-accordion ui-widget ui-helper-reset').removeAttr('role'),this.headers.removeClass('ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top').removeAttr('role').removeAttr('aria-expanded').removeAttr('aria-selected').removeAttr('aria-controls').removeAttr('tabIndex').removeUniqueId(),this._destroyIcons(),t=this.headers.next().removeClass('ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled').css('display','').removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby').removeUniqueId(),'content'!==this.options.heightStyle&&t.css('height','')},_setOption:function(t,e){'active'!==t?('event'===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),'collapsible'!==t||e||!1!==this.options.active||this._activate(0),'icons'===t&&(this._destroyIcons(),e&&this._createIcons()),'disabled'===t&&(this.element.toggleClass('ui-state-disabled',!!e).attr('aria-disabled',e),this.headers.add(this.headers.next()).toggleClass('ui-state-disabled',!!e))):this._activate(e)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr('tabIndex',-1),t(o).attr('tabIndex',0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=t()):!1===e.active?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find('.ui-state-disabled').length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass('ui-accordion-header ui-state-default ui-corner-all'),this.headers.next().addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom').filter(':not(.ui-accordion-content-active)').hide()},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass('ui-accordion-header-active ui-state-active ui-corner-top').removeClass('ui-corner-all'),this.active.next().addClass('ui-accordion-content-active').show(),this.headers.attr('role','tab').each(function(){var e=t(this),i=e.uniqueId().attr('id'),s=e.next(),n=s.uniqueId().attr('id');e.attr('aria-controls',n),s.attr('aria-labelledby',i)}).next().attr('role','tabpanel'),this.headers.not(this.active).attr({'aria-selected':'false','aria-expanded':'false',tabIndex:-1}).next().attr({'aria-hidden':'true'}).hide(),this.active.length?this.active.attr({'aria-selected':'true','aria-expanded':'true',tabIndex:0}).next().attr({'aria-hidden':'false'}):this.headers.eq(0).attr('tabIndex',0),this._createIcons(),this._setupEvents(i.event),'fill'===s?(e=n.height(),this.element.siblings(':visible').each(function(){var i=t(this),s=i.css('position');'absolute'!==s&&'fixed'!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css('overflow','auto')):'auto'===s&&(e=0,this.headers.next().each(function(){e=Math.max(e,t(this).css('height','').height())}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return'number'==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:'_keydown'};e&&t.each(e.split(' '),function(t,e){i[e]='_eventHandler'}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:'_panelKeyDown'}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():n.next(),h={oldHeader:s,oldPanel:s.next(),newHeader:a?t():n,newPanel:r};e.preventDefault(),o&&!i.collapsible||!1===this._trigger('beforeActivate',e,h)||(i.active=!a&&this.headers.index(n),this.active=o?t():n,this._toggle(h),s.removeClass('ui-accordion-header-active ui-state-active'),i.icons&&s.children('.ui-accordion-header-icon').removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(n.removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top'),i.icons&&n.children('.ui-accordion-header-icon').removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass('ui-accordion-content-active')))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({'aria-hidden':'true'}),s.prev().attr('aria-selected','false'),i.length&&s.length?s.prev().attr({tabIndex:-1,'aria-expanded':'false'}):i.length&&this.headers.filter(function(){return 0===t(this).attr('tabIndex')}).attr('tabIndex',-1),i.attr('aria-hidden','false').prev().attr({'aria-selected':'true',tabIndex:0,'aria-expanded':'true'})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.length&&(!e.length||t.index()<e.index()),l=this.options.animate||{},c=h&&l.down||l,u=function(){a._toggleComplete(i)};return'number'==typeof c&&(o=c),'string'==typeof c&&(n=c),n=n||c.easing||l.easing,o=o||c.duration||l.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:o,easing:n,complete:u,step:function(t,i){i.now=Math.round(t),'height'!==i.prop?r+=i.now:'content'!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}})):e.animate(this.hideProps,o,n,u):t.animate(this.showProps,o,n,u)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass('ui-accordion-content-active').prev().removeClass('ui-corner-top').addClass('ui-corner-all'),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger('activate',null,t)}}),t.widget('ui.menu',{version:'1.11.1',defaultElement:'<ul>',delay:300,options:{icons:{submenu:'ui-icon-carat-1-e'},items:'> *',menus:'ul',position:{my:'left-1 top',at:'right top'},role:'menu',blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass('ui-menu ui-widget ui-widget-content').toggleClass('ui-menu-icons',!!this.element.find('.ui-icon').length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass('ui-state-disabled').attr('aria-disabled','true'),this._on({'mousedown .ui-menu-item':function(t){t.preventDefault()},'click .ui-menu-item':function(e){var i=t(e.target);!this.mouseHandled&&i.not('.ui-state-disabled').length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has('.ui-menu').length?this.expand(e):!this.element.is(':focus')&&t(this.document[0].activeElement).closest('.ui-menu').length&&(this.element.trigger('focus',[!0]),this.active&&1===this.active.parents('.ui-menu').length&&clearTimeout(this.timer)))},'mouseenter .ui-menu-item':function(e){var i=t(e.currentTarget);i.siblings('.ui-state-active').removeClass('ui-state-active'),this.focus(e,i)},mouseleave:'collapseAll','mouseleave .ui-menu':'collapseAll',focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:'_keydown'}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr('aria-activedescendant').find('.ui-menu').addBack().removeClass('ui-menu ui-widget ui-widget-content ui-menu-icons ui-front').removeAttr('role').removeAttr('tabIndex').removeAttr('aria-labelledby').removeAttr('aria-expanded').removeAttr('aria-hidden').removeAttr('aria-disabled').removeUniqueId().show(),this.element.find('.ui-menu-item').removeClass('ui-menu-item').removeAttr('role').removeAttr('aria-disabled').removeUniqueId().removeClass('ui-state-hover').removeAttr('tabIndex').removeAttr('role').removeAttr('aria-haspopup').children().each(function(){var e=t(this);e.data('ui-menu-submenu-carat')&&e.remove()}),this.element.find('.ui-menu-divider').removeClass('ui-menu-divider ui-widget-content')},_keydown:function(e){var i,s,n,o,a,r=!0;function h(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,'\\$&')}switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move('first','first',e);break;case t.ui.keyCode.END:this._move('last','last',e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is('.ui-state-disabled')&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:r=!1,s=this.previousFilter||'',n=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,a=new RegExp('^'+h(n),'i'),i=this.activeMenu.find(this.options.items).filter(function(){return a.test(t(this).text())}),(i=o&&-1!==i.index(this.active.next())?this.active.nextAll('.ui-menu-item'):i).length||(n=String.fromCharCode(e.keyCode),a=new RegExp('^'+h(n),'i'),i=this.activeMenu.find(this.options.items).filter(function(){return a.test(t(this).text())})),i.length?(this.focus(e,i),i.length>1?(this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}r&&e.preventDefault()},_activate:function(t){this.active.is('.ui-state-disabled')||(this.active.is('[aria-haspopup=\'true\']')?this.expand(t):this.select(t))},refresh:function(){var e,i=this,s=this.options.icons.submenu,n=this.element.find(this.options.menus);this.element.toggleClass('ui-menu-icons',!!this.element.find('.ui-icon').length),n.filter(':not(.ui-menu)').addClass('ui-menu ui-widget ui-widget-content ui-front').hide().attr({role:this.options.role,'aria-hidden':'true','aria-expanded':'false'}).each(function(){var e=t(this),i=e.parent(),n=t('<span>').addClass('ui-menu-icon ui-icon '+s).data('ui-menu-submenu-carat',!0);i.attr('aria-haspopup','true').prepend(n),e.attr('aria-labelledby',i.attr('id'))}),(e=n.add(this.element).find(this.options.items)).not('.ui-menu-item').each(function(){var e=t(this);i._isDivider(e)&&e.addClass('ui-widget-content ui-menu-divider')}),e.not('.ui-menu-item, .ui-menu-divider').addClass('ui-menu-item').uniqueId().attr({tabIndex:-1,role:this._itemRole()}),e.filter('.ui-state-disabled').attr('aria-disabled','true'),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:'menuitem',listbox:'option'}[this.options.role]},_setOption:function(t,e){'icons'===t&&this.element.find('.ui-menu-icon').removeClass(this.options.icons.submenu).addClass(e.submenu),'disabled'===t&&this.element.toggleClass('ui-state-disabled',!!e).attr('aria-disabled',e),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&'focus'===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.addClass('ui-state-focus').removeClass('ui-state-active'),this.options.role&&this.element.attr('aria-activedescendant',s.attr('id')),this.active.parent().closest('.ui-menu-item').addClass('ui-state-active'),t&&'keydown'===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children('.ui-menu')).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger('focus',t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],'borderTopWidth'))||0,s=parseFloat(t.css(this.activeMenu[0],'paddingTop'))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),n<0?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.removeClass('ui-state-focus'),this.active=null,this._trigger('blur',t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),'true'===t.attr('aria-hidden')&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find('.ui-menu').not(e.parents('.ui-menu')).hide().attr('aria-hidden','true'),e.show().removeAttr('aria-hidden').attr('aria-expanded','true').position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find('.ui-menu'));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find('.ui-menu').hide().attr('aria-hidden','true').attr('aria-expanded','false').end().find('.ui-state-active').not('.ui-state-focus').removeClass('ui-state-active')},_closeOnDocumentClick:function(e){return!t(e.target).closest('.ui-menu').length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest('.ui-menu-item',this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children('.ui-menu ').find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move('next','first',t)},previous:function(t){this._move('prev','last',t)},isFirstItem:function(){return this.active&&!this.active.prevAll('.ui-menu-item').length},isLastItem:function(){return this.active&&!this.active.nextAll('.ui-menu-item').length},_move:function(t,e,i){var s;this.active&&(s='first'===t||'last'===t?this.active['first'===t?'prevAll':'nextAll']('.ui-menu-item').eq(-1):this.active[t+'All']('.ui-menu-item').eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;this.active?this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll('.ui-menu-item').each(function(){return(i=t(this)).offset().top-s-n<0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?'last':'first']())):this.next(e)},previousPage:function(e){var i,s,n;this.active?this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll('.ui-menu-item').each(function(){return(i=t(this)).offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())):this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop('scrollHeight')},select:function(e){this.active=this.active||t(e.target).closest('.ui-menu-item');var i={item:this.active};this.active.has('.ui-menu').length||this.collapseAll(e,!0),this._trigger('select',e,i)}})
/*!
 * jQuery UI Accordion 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */;
/*!
 * jQuery UI Autocomplete 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
t.widget('ui.autocomplete',{version:'1.11.1',defaultElement:'<input>',options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:'left top',at:'left bottom',collision:'none'},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o='textarea'===n,a='input'===n;this.isMultiLine=!!o||!a&&this.element.prop('isContentEditable'),this.valueMethod=this.element[o||a?'val':'text'],this.isNewMenu=!0,this.element.addClass('ui-autocomplete-input').attr('autocomplete','off'),this._on(this.element,{keydown:function(n){if(this.element.prop('readOnly'))return e=!0,s=!0,void(i=!0);e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move('previousPage',n);break;case o.PAGE_DOWN:e=!0,this._move('nextPage',n);break;case o.UP:e=!0,this._keyEvent('previous',n);break;case o.DOWN:e=!0,this._keyEvent('next',n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(':visible')&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,void(this.isMultiLine&&!this.menu.element.is(':visible')||s.preventDefault());if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move('previousPage',s);break;case n.PAGE_DOWN:this._move('nextPage',s);break;case n.UP:this._keyEvent('previous',s);break;case n.DOWN:this._keyEvent('next',s)}}},input:function(t){if(s)return s=!1,void t.preventDefault();this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){this.cancelBlur?delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),this._change(t))}}),this._initSource(),this.menu=t('<ul>').addClass('ui-autocomplete ui-front').appendTo(this._appendTo()).menu({role:null}).hide().menu('instance'),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest('.ui-menu-item').length||this._delay(function(){var e=this;this.document.one('mousedown',function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){var s,n;if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),void this.document.one('mousemove',function(){t(e.target).trigger(e.originalEvent)});n=i.item.data('ui-autocomplete-item'),!1!==this._trigger('focus',e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),(s=i.item.attr('aria-label')||n.value)&&t.trim(s).length&&(this.liveRegion.children().hide(),t('<div>').text(s).appendTo(this.liveRegion))},menuselect:function(t,e){var i=e.item.data('ui-autocomplete-item'),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger('select',t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t('<span>',{role:'status','aria-live':'assertive','aria-relevant':'additions'}).addClass('ui-helper-hidden-accessible').appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr('autocomplete')}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass('ui-autocomplete-input').removeAttr('autocomplete'),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),'source'===t&&this._initSource(),'appendTo'===t&&this.menu.element.appendTo(this._appendTo()),'disabled'===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest('.ui-front')),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):'string'==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:'json',success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(':visible'),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;e&&(!e||i||s)||(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger('search',e)?this._search(t):void 0},_search:function(t){this.pending++,this.element.addClass('ui-autocomplete-loading'),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass('ui-autocomplete-loading')},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger('response',null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger('open')):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(':visible')&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger('close',t))},_change:function(t){this.previous!==this._value()&&this._trigger('change',t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return'string'==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width('').outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data('ui-autocomplete-item',e)},_renderItem:function(e,i){return t('<li>').text(i.label).appendTo(e)},_move:function(t,e){if(this.menu.element.is(':visible'))return this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e);this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(':visible')||(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,'\\$&')},filter:function(e,i){var s=new RegExp(t.ui.autocomplete.escapeRegex(i),'i');return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget('ui.autocomplete',t.ui.autocomplete,{options:{messages:{noResults:'No search results.',results:function(t){return t+(t>1?' results are':' result is')+' available, use up and down arrow keys to navigate.'}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t('<div>').text(i).appendTo(this.liveRegion))}});t.ui.autocomplete;
/*!
 * jQuery UI Button 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */var c,u='ui-button ui-widget ui-state-default ui-corner-all',d='ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only',p=function(){var e=t(this);setTimeout(function(){e.find(':ui-button').button('refresh')},1)},f=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,'\\\''),n=s?t(s).find('[name=\''+i+'\'][type=radio]'):t('[name=\''+i+'\'][type=radio]',e.ownerDocument).filter(function(){return!this.form})),n};t.widget('ui.button',{version:'1.11.1',defaultElement:'<button>',options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest('form').unbind('reset'+this.eventNamespace).bind('reset'+this.eventNamespace,p),'boolean'!=typeof this.options.disabled?this.options.disabled=!!this.element.prop('disabled'):this.element.prop('disabled',this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr('title');var e=this,i=this.options,s='checkbox'===this.type||'radio'===this.type,n=s?'':'ui-state-active';null===i.label&&(i.label='input'===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(u).attr('role','button').bind('mouseenter'+this.eventNamespace,function(){i.disabled||this===c&&t(this).addClass('ui-state-active')}).bind('mouseleave'+this.eventNamespace,function(){i.disabled||t(this).removeClass(n)}).bind('click'+this.eventNamespace,function(t){i.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass('ui-state-focus')},blur:function(){this.buttonElement.removeClass('ui-state-focus')}}),s&&this.element.bind('change'+this.eventNamespace,function(){e.refresh()}),'checkbox'===this.type?this.buttonElement.bind('click'+this.eventNamespace,function(){if(i.disabled)return!1}):'radio'===this.type?this.buttonElement.bind('click'+this.eventNamespace,function(){if(i.disabled)return!1;t(this).addClass('ui-state-active'),e.buttonElement.attr('aria-pressed','true');var s=e.element[0];f(s).not(s).map(function(){return t(this).button('widget')[0]}).removeClass('ui-state-active').attr('aria-pressed','false')}):(this.buttonElement.bind('mousedown'+this.eventNamespace,function(){if(i.disabled)return!1;t(this).addClass('ui-state-active'),c=this,e.document.one('mouseup',function(){c=null})}).bind('mouseup'+this.eventNamespace,function(){if(i.disabled)return!1;t(this).removeClass('ui-state-active')}).bind('keydown'+this.eventNamespace,function(e){if(i.disabled)return!1;e.keyCode!==t.ui.keyCode.SPACE&&e.keyCode!==t.ui.keyCode.ENTER||t(this).addClass('ui-state-active')}).bind('keyup'+this.eventNamespace+' blur'+this.eventNamespace,function(){t(this).removeClass('ui-state-active')}),this.buttonElement.is('a')&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption('disabled',i.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.element.is('[type=checkbox]')?this.type='checkbox':this.element.is('[type=radio]')?this.type='radio':this.element.is('input')?this.type='input':this.type='button','checkbox'===this.type||'radio'===this.type?(t=this.element.parents().last(),e='label[for=\''+this.element.attr('id')+'\']',this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass('ui-helper-hidden-accessible'),(i=this.element.is(':checked'))&&this.buttonElement.addClass('ui-state-active'),this.buttonElement.prop('aria-pressed',i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass('ui-helper-hidden-accessible'),this.buttonElement.removeClass(u+' ui-state-active '+d).removeAttr('role').removeAttr('aria-pressed').html(this.buttonElement.find('.ui-button-text').html()),this.hasTitle||this.buttonElement.removeAttr('title')},_setOption:function(t,e){if(this._super(t,e),'disabled'===t)return this.widget().toggleClass('ui-state-disabled',!!e),this.element.prop('disabled',!!e),void(e&&('checkbox'===this.type||'radio'===this.type?this.buttonElement.removeClass('ui-state-focus'):this.buttonElement.removeClass('ui-state-focus ui-state-active')));this._resetButton()},refresh:function(){var e=this.element.is('input, button')?this.element.is(':disabled'):this.element.hasClass('ui-button-disabled');e!==this.options.disabled&&this._setOption('disabled',e),'radio'===this.type?f(this.element[0]).each(function(){t(this).is(':checked')?t(this).button('widget').addClass('ui-state-active').attr('aria-pressed','true'):t(this).button('widget').removeClass('ui-state-active').attr('aria-pressed','false')}):'checkbox'===this.type&&(this.element.is(':checked')?this.buttonElement.addClass('ui-state-active').attr('aria-pressed','true'):this.buttonElement.removeClass('ui-state-active').attr('aria-pressed','false'))},_resetButton:function(){if('input'!==this.type){var e=this.buttonElement.removeClass(d),i=t('<span></span>',this.document[0]).addClass('ui-button-text').html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,o=[];s.primary||s.secondary?(this.options.text&&o.push('ui-button-text-icon'+(n?'s':s.primary?'-primary':'-secondary')),s.primary&&e.prepend('<span class=\'ui-button-icon-primary ui-icon '+s.primary+'\'></span>'),s.secondary&&e.append('<span class=\'ui-button-icon-secondary ui-icon '+s.secondary+'\'></span>'),this.options.text||(o.push(n?'ui-button-icons-only':'ui-button-icon-only'),this.hasTitle||e.attr('title',t.trim(i)))):o.push('ui-button-text-only'),e.addClass(o.join(' '))}else this.options.label&&this.element.val(this.options.label)}}),t.widget('ui.buttonset',{version:'1.11.1',options:{items:'button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)'},_create:function(){this.element.addClass('ui-buttonset')},_init:function(){this.refresh()},_setOption:function(t,e){'disabled'===t&&this.buttons.button('option',t,e),this._super(t,e)},refresh:function(){var e='rtl'===this.element.css('direction'),i=this.element.find(this.options.items),s=i.filter(':ui-button');i.not(':ui-button').button(),s.button('refresh'),this.buttons=i.map(function(){return t(this).button('widget')[0]}).removeClass('ui-corner-all ui-corner-left ui-corner-right').filter(':first').addClass(e?'ui-corner-right':'ui-corner-left').end().filter(':last').addClass(e?'ui-corner-left':'ui-corner-right').end().end()},_destroy:function(){this.element.removeClass('ui-buttonset'),this.buttons.map(function(){return t(this).button('widget')[0]}).removeClass('ui-corner-left ui-corner-right').end().button('destroy')}});var m;
/*!
 * jQuery UI Datepicker 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */t.ui.button;function g(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId='ui-datepicker-div',this._inlineClass='ui-datepicker-inline',this._appendClass='ui-datepicker-append',this._triggerClass='ui-datepicker-trigger',this._dialogClass='ui-datepicker-dialog',this._disableClass='ui-datepicker-disabled',this._unselectableClass='ui-datepicker-unselectable',this._currentClass='ui-datepicker-current-day',this._dayOverClass='ui-datepicker-days-cell-over',this.regional=[],this.regional['']={closeText:'Done',prevText:'Prev',nextText:'Next',currentText:'Today',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],weekHeader:'Wk',dateFormat:'mm/dd/yy',firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:''},this._defaults={showOn:'focus',showAnim:'fadeIn',showOptions:{},defaultDate:null,appendText:'',buttonText:'...',buttonImage:'',buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:'c-10:c+10',showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:'+10',minDate:null,maxDate:null,duration:'fast',beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:'',altFormat:'',constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional['']),this.regional.en=t.extend(!0,{},this.regional['']),this.regional['en-US']=t.extend(!0,{},this.regional.en),this.dpDiv=v(t('<div id=\''+this._mainDivId+'\' class=\'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))}function v(e){var i='button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';return e.delegate(i,'mouseout',function(){t(this).removeClass('ui-state-hover'),-1!==this.className.indexOf('ui-datepicker-prev')&&t(this).removeClass('ui-datepicker-prev-hover'),-1!==this.className.indexOf('ui-datepicker-next')&&t(this).removeClass('ui-datepicker-next-hover')}).delegate(i,'mouseover',_)}function _(){t.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'),t(this).addClass('ui-state-hover'),-1!==this.className.indexOf('ui-datepicker-prev')&&t(this).addClass('ui-datepicker-prev-hover'),-1!==this.className.indexOf('ui-datepicker-next')&&t(this).addClass('ui-datepicker-next-hover'))}function b(e,i){for(var s in t.extend(e,i),i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:'1.11.1'}}),t.extend(g.prototype,{markerClassName:'hasDatepicker',maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return b(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;n='div'===(s=e.nodeName.toLowerCase())||'span'===s,e.id||(this.uuid+=1,e.id='dp'+this.uuid),(o=this._newInst(t(e),n)).settings=t.extend({},i||{}),'input'===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,'\\\\$1'),input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?v(t('<div class=\''+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>')):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,'datepicker',i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,'appendText'),r=this._get(i,'isRTL');i.append&&i.append.remove(),a&&(i.append=t('<span class=\''+this._appendClass+'\'>'+a+'</span>'),e[r?'before':'after'](i.append)),e.unbind('focus',this._showDatepicker),i.trigger&&i.trigger.remove(),'focus'!==(s=this._get(i,'showOn'))&&'both'!==s||e.focus(this._showDatepicker),'button'!==s&&'both'!==s||(n=this._get(i,'buttonText'),o=this._get(i,'buttonImage'),i.trigger=t(this._get(i,'buttonImageOnly')?t('<img/>').addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t('<button type=\'button\'></button>').addClass(this._triggerClass).html(o?t('<img/>').attr({src:o,alt:n,title:n}):n)),e[r?'before':'after'](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,'autoSize')&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,'dateFormat');a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;n<t.length;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?'monthNames':'monthNamesShort'))),o.setDate(e(this._get(t,a.match(/DD/)?'dayNames':'dayNamesShort'))+20-o.getDay())),t.input.attr('size',this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,'datepicker',i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css('display','block'))},_dialogDatepicker:function(e,i,s,n,o){var a,r,h,l,c,u=this._dialogInst;return u||(this.uuid+=1,a='dp'+this.uuid,this._dialogInput=t('<input type=\'text\' id=\''+a+'\' style=\'position: absolute; top: -100px; width: 0px;\'/>'),this._dialogInput.keydown(this._doKeyDown),t('body').append(this._dialogInput),(u=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},t.data(this._dialogInput[0],'datepicker',u)),b(u.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(u,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(r=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[r/2-100+l,h/2-150+c]),this._dialogInput.css('left',this._pos[0]+20+'px').css('top',this._pos[1]+'px'),u.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],'datepicker',u),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,'datepicker');s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,'datepicker'),'input'===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind('focus',this._showDatepicker).unbind('keydown',this._doKeyDown).unbind('keypress',this._doKeyPress).unbind('keyup',this._doKeyUp)):'div'!==i&&'span'!==i||s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,'datepicker');n.hasClass(this.markerClassName)&&('input'===(i=e.nodeName.toLowerCase())?(e.disabled=!1,o.trigger.filter('button').each(function(){this.disabled=!1}).end().filter('img').css({opacity:'1.0',cursor:''})):'div'!==i&&'span'!==i||((s=n.children('.'+this._inlineClass)).children().removeClass('ui-state-disabled'),s.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled',!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,'datepicker');n.hasClass(this.markerClassName)&&('input'===(i=e.nodeName.toLowerCase())?(e.disabled=!0,o.trigger.filter('button').each(function(){this.disabled=!0}).end().filter('img').css({opacity:'0.5',cursor:'default'})):'div'!==i&&'span'!==i||((s=n.children('.'+this._inlineClass)).children().addClass('ui-state-disabled'),s.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled',!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,'datepicker')}catch(t){throw'Missing instance data for this datepicker'}},_optionDatepicker:function(e,i,s){var n,o,a,r,h=this._getInst(e);if(2===arguments.length&&'string'==typeof i)return'defaults'===i?t.extend({},t.datepicker._defaults):h?'all'===i?t.extend({},h.settings):this._get(h,i):null;n=i||{},'string'==typeof i&&((n={})[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),a=this._getMinMaxDate(h,'min'),r=this._getMinMaxDate(h,'max'),b(h.settings,n),null!==a&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,a)),null!==r&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,r)),'disabled'in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is('.ui-datepicker-rtl');if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return(n=t('td.'+t.datepicker._dayOverClass+':not(.'+t.datepicker._currentClass+')',o.dpDiv))[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),(i=t.datepicker._get(o,'onSelect'))?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,'stepBigMonths'):-t.datepicker._get(o,'stepMonths'),'M');break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,'stepBigMonths'):+t.datepicker._get(o,'stepMonths'),'M');break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,'D'),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,'stepBigMonths'):-t.datepicker._get(o,'stepMonths'),'M');break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,'D'),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,'D'),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,'stepBigMonths'):+t.datepicker._get(o,'stepMonths'),'M');break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,'D'),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);if(t.datepicker._get(n,'constrainInput'))return i=t.datepicker._possibleChars(t.datepicker._get(n,'dateFormat')),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||s<' '||!i||i.indexOf(s)>-1},_doKeyUp:function(e){var i=t.datepicker._getInst(e.target);if(i.input.val()!==i.lastVal)try{t.datepicker.parseDate(t.datepicker._get(i,'dateFormat'),i.input?i.input.val():null,t.datepicker._getFormatConfig(i))&&(t.datepicker._setDateFromField(i),t.datepicker._updateAlternate(i),t.datepicker._updateDatepicker(i))}catch(t){}return!0},_showDatepicker:function(e){var i,s,n,o,a,r,h;('input'!==(e=e.target||e).nodeName.toLowerCase()&&(e=t('input',e.parentNode)[0]),t.datepicker._isDisabledDatepicker(e)||t.datepicker._lastInput===e)||(i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),!1!==(n=(s=t.datepicker._get(i,'beforeShow'))?s.apply(e,[e,i]):{})&&(b(i.settings,n),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=''),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),o=!1,t(e).parents().each(function(){return!(o|='fixed'===t(this).css('position'))}),a={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:'absolute',display:'block',top:'-1000px'}),t.datepicker._updateDatepicker(i),a=t.datepicker._checkOffset(i,a,o),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?'static':o?'fixed':'absolute',display:'none',left:a.left+'px',top:a.top+'px'}),i.inline||(r=t.datepicker._get(i,'showAnim'),h=t.datepicker._get(i,'duration'),i.dpDiv.css('z-index',function(t){for(var e,i;t.length&&t[0]!==document;){if(('absolute'===(e=t.css('position'))||'relative'===e||'fixed'===e)&&(i=parseInt(t.css('zIndex'),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[r]?i.dpDiv.show(r,t.datepicker._get(i,'showOptions'),h):i.dpDiv[r||'show'](r?h:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i)))},_updateDatepicker:function(e){this.maxRows=4,m=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],o=e.dpDiv.find('.'+this._dayOverClass+' a');o.length>0&&_.apply(o.get(0)),e.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''),n>1&&e.dpDiv.addClass('ui-datepicker-multi-'+n).css('width',17*n+'em'),e.dpDiv[(1!==s[0]||1!==s[1]?'add':'remove')+'Class']('ui-datepicker-multi'),e.dpDiv[(this._get(e,'isRTL')?'add':'remove')+'Class']('ui-datepicker-rtl'),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find('select.ui-datepicker-year:first').replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(':visible')&&!t.input.is(':disabled')&&!t.input.is(':focus')},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,'isRTL')?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,'isRTL');e&&('hidden'===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?'previousSibling':'nextSibling'];return[(i=t(e).offset()).left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,'datepicker')||this._datepickerShowing&&(i=this._get(a,'showAnim'),s=this._get(a,'duration'),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,'showOptions'),s,n):a.dpDiv['slideDown'===i?'slideUp':'fadeIn'===i?'fadeOut':'hide'](i?s:null,n),i||n(),this._datepickerShowing=!1,(o=this._get(a,'onClose'))&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():'',a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:'absolute',left:'0',top:'-100px'}),t.blockUI&&(t.unblockUI(),t('body').append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar')},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id===t.datepicker._mainDivId||0!==i.parents('#'+t.datepicker._mainDivId).length||i.hasClass(t.datepicker.markerClassName)||i.closest('.'+t.datepicker._triggerClass).length||!t.datepicker._datepickerShowing||t.datepicker._inDialog&&t.blockUI)&&(!i.hasClass(t.datepicker.markerClassName)||t.datepicker._curInst===s)||t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+('M'===s?this._get(o,'showCurrentAtPos'):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,'gotoCurrent')&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o['selected'+('M'===s?'Month':'Year')]=o['draw'+('M'===s?'Month':'Year')]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||((o=this._getInst(a[0])).selectedDay=o.currentDay=t('a',n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,'')},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),(s=this._get(o,'onSelect'))?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger('change'),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],'object'!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,'altField');o&&(i=this._get(e,'altFormat')||this._get(e,'dateFormat'),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&e<6,'']},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw'Invalid arguments';if(''===(i='object'==typeof i?i.toString():i+''))return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c='string'!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,_=-1,b=!1,y=function(t){var i=n+1<e.length&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s='@'===t?14:'!'===t?20:'y'===t&&e?4:'o'===t?3:2,n=new RegExp('^\\d{'+('y'===t?s:1)+','+s+'}'),o=i.substring(h).match(n);if(!o)throw'Missing number at position '+h;return h+=o[0].length,parseInt(o[0],10)},x=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];if(i.substr(h,s.length).toLowerCase()===s.toLowerCase())return o=e[0],h+=s.length,!1}),-1!==o)return o+1;throw'Unknown name at position '+h},k=function(){if(i.charAt(h)!==e.charAt(n))throw'Unexpected literal at position '+h;h++};for(n=0;n<e.length;n++)if(b)'\''!==e.charAt(n)||y('\'')?k():b=!1;else switch(e.charAt(n)){case'd':v=w('d');break;case'D':x('D',u,d);break;case'o':_=w('o');break;case'm':g=w('m');break;case'M':g=x('M',p,f);break;case'y':m=w('y');break;case'@':m=(r=new Date(w('@'))).getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case'!':m=(r=new Date((w('!')-this._ticksTo1970)/1e4)).getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case'\'':y('\'')?k():b=!0;break;default:k()}if(h<i.length&&(a=i.substr(h),!/^\s+/.test(a)))throw'Extra/unparsed characters found in date: '+a;if(-1===m?m=(new Date).getFullYear():m<100&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(m<=c?0:-100)),_>-1)for(g=1,v=_;;){if(v<=(o=this._getDaysInMonth(m,g-1)))break;g++,v-=o}if((r=this._daylightSavingAdjust(new Date(m,g-1,v))).getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw'Invalid date';return r},ATOM:'yy-mm-dd',COOKIE:'D, dd M yy',ISO_8601:'yy-mm-dd',RFC_822:'D, d M y',RFC_850:'DD, dd-M-y',RFC_1036:'D, d M y',RFC_1123:'D, d M yy',RFC_2822:'D, d M yy',RSS:'D, d M y',TICKS:'!',TIMESTAMP:'@',W3C:'yy-mm-dd',_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(t,e,i){if(!e)return'';var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=s+1<t.length&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=''+e;if(h(t))for(;s.length<i;)s='0'+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u='',d=!1;if(e)for(s=0;s<t.length;s++)if(d)'\''!==t.charAt(s)||h('\'')?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case'd':u+=l('d',e.getDate(),2);break;case'D':u+=c('D',e.getDay(),n,o);break;case'o':u+=l('o',Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case'm':u+=l('m',e.getMonth()+1,2);break;case'M':u+=c('M',e.getMonth(),a,r);break;case'y':u+=h('y')?e.getFullYear():(e.getYear()%100<10?'0':'')+e.getYear()%100;break;case'@':u+=e.getTime();break;case'!':u+=1e4*e.getTime()+this._ticksTo1970;break;case'\'':h('\'')?u+='\'':d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i='',s=!1,n=function(i){var s=e+1<t.length&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;e<t.length;e++)if(s)'\''!==t.charAt(e)||n('\'')?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case'd':case'm':case'y':case'@':i+='0123456789';break;case'D':case'M':return null;case'\'':n('\'')?i+='\'':s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,'dateFormat'),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(t){s=e?'':s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,'defaultDate'),new Date))},_determineDate:function(e,i,s){var n=null==i||''===i?s:'string'==typeof i?function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,'dateFormat'),i,t.datepicker._getFormatConfig(e))}catch(t){}for(var s=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,n=s.getFullYear(),o=s.getMonth(),a=s.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=r.exec(i);h;){switch(h[2]||'d'){case'd':case'D':a+=parseInt(h[1],10);break;case'w':case'W':a+=7*parseInt(h[1],10);break;case'm':case'M':o+=parseInt(h[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(n,o));break;case'y':case'Y':n+=parseInt(h[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(n,o))}h=r.exec(i)}return new Date(n,o,a)}(i):'number'==typeof i?isNaN(i)?s:function(t){var e=new Date;return e.setDate(e.getDate()+t),e}(i):new Date(i.getTime());return(n=n&&'Invalid Date'===n.toString()?s:n)&&(n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0)),this._daylightSavingAdjust(n)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?'':this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&''===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(e){var i=this._get(e,'stepMonths'),s='#'+e.id.replace(/\\\\/g,'\\');e.dpDiv.find('[data-handler]').map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,'M')},next:function(){t.datepicker._adjustDate(s,+i,'M')},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute('data-month'),+this.getAttribute('data-year'),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,'M'),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,'Y'),!1}};t(this).bind(this.getAttribute('data-event'),e[this.getAttribute('data-handler')])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,m,g,v,_,b,y,w,x,k,C,D,I,T,P,M,S,z,H,A,N,E,W,O,F,R,L=new Date,Y=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),B=this._get(t,'isRTL'),j=this._get(t,'showButtonPanel'),q=this._get(t,'hideIfNoPrevNext'),K=this._get(t,'navigationAsDateFormat'),U=this._getNumberOfMonths(t),V=this._get(t,'showCurrentAtPos'),X=this._get(t,'stepMonths'),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,'min'),J=this._getMinMaxDate(t,'max'),Z=t.drawMonth-V,tt=t.drawYear;if(Z<0&&(Z+=12,tt--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&e<Q?Q:e;this._daylightSavingAdjust(new Date(tt,Z,1))>e;)--Z<0&&(Z=11,tt--);for(t.drawMonth=Z,t.drawYear=tt,i=this._get(t,'prevText'),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,tt,Z)?'<a class=\'ui-datepicker-prev ui-corner-all\' data-handler=\'prev\' data-event=\'click\' title=\''+i+'\'><span class=\'ui-icon ui-icon-circle-triangle-'+(B?'e':'w')+'\'>'+i+'</span></a>':q?'':'<a class=\'ui-datepicker-prev ui-corner-all ui-state-disabled\' title=\''+i+'\'><span class=\'ui-icon ui-icon-circle-triangle-'+(B?'e':'w')+'\'>'+i+'</span></a>',n=this._get(t,'nextText'),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(tt,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,tt,Z)?'<a class=\'ui-datepicker-next ui-corner-all\' data-handler=\'next\' data-event=\'click\' title=\''+n+'\'><span class=\'ui-icon ui-icon-circle-triangle-'+(B?'w':'e')+'\'>'+n+'</span></a>':q?'':'<a class=\'ui-datepicker-next ui-corner-all ui-state-disabled\' title=\''+n+'\'><span class=\'ui-icon ui-icon-circle-triangle-'+(B?'w':'e')+'\'>'+n+'</span></a>',a=this._get(t,'currentText'),r=this._get(t,'gotoCurrent')&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?'':'<button type=\'button\' class=\'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\' data-handler=\'hide\' data-event=\'click\'>'+this._get(t,'closeText')+'</button>',l=j?'<div class=\'ui-datepicker-buttonpane ui-widget-content\'>'+(B?h:'')+(this._isInRange(t,r)?'<button type=\'button\' class=\'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\' data-handler=\'today\' data-event=\'click\'>'+a+'</button>':'')+(B?'':h)+'</div>':'',c=parseInt(this._get(t,'firstDay'),10),c=isNaN(c)?0:c,u=this._get(t,'showWeek'),d=this._get(t,'dayNames'),p=this._get(t,'dayNamesMin'),f=this._get(t,'monthNames'),m=this._get(t,'monthNamesShort'),g=this._get(t,'beforeShowDay'),v=this._get(t,'showOtherMonths'),_=this._get(t,'selectOtherMonths'),b=this._getDefaultDate(t),y='',x=0;x<U[0];x++){for(k='',this.maxRows=4,C=0;C<U[1];C++){if(D=this._daylightSavingAdjust(new Date(tt,Z,t.selectedDay)),I=' ui-corner-all',T='',$){if(T+='<div class=\'ui-datepicker-group',U[1]>1)switch(C){case 0:T+=' ui-datepicker-group-first',I=' ui-corner-'+(B?'right':'left');break;case U[1]-1:T+=' ui-datepicker-group-last',I=' ui-corner-'+(B?'left':'right');break;default:T+=' ui-datepicker-group-middle',I=''}T+='\'>'}for(T+='<div class=\'ui-datepicker-header ui-widget-header ui-helper-clearfix'+I+'\'>'+(/all|left/.test(I)&&0===x?B?o:s:'')+(/all|right/.test(I)&&0===x?B?s:o:'')+this._generateMonthYearHeader(t,Z,tt,Q,J,x>0||C>0,f,m)+'</div><table class=\'ui-datepicker-calendar\'><thead><tr>',P=u?'<th class=\'ui-datepicker-week-col\'>'+this._get(t,'weekHeader')+'</th>':'',w=0;w<7;w++)M=(w+c)%7,P+='<th scope=\'col\''+((w+c+6)%7>=5?' class=\'ui-datepicker-week-end\'':'')+'><span title=\''+d[M]+'\'>'+p[M]+'</span></th>';for(T+=P+'</tr></thead><tbody>',S=this._getDaysInMonth(tt,Z),tt===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(tt,Z)-c+7)%7,H=Math.ceil((z+S)/7),A=$&&this.maxRows>H?this.maxRows:H,this.maxRows=A,N=this._daylightSavingAdjust(new Date(tt,Z,1-z)),E=0;E<A;E++){for(T+='<tr>',W=u?'<td class=\'ui-datepicker-week-col\'>'+this._get(t,'calculateWeek')(N)+'</td>':'',w=0;w<7;w++)O=g?g.apply(t.input?t.input[0]:null,[N]):[!0,''],R=(F=N.getMonth()!==Z)&&!_||!O[0]||Q&&N<Q||J&&N>J,W+='<td class=\''+((w+c+6)%7>=5?' ui-datepicker-week-end':'')+(F?' ui-datepicker-other-month':'')+(N.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===N.getTime()&&b.getTime()===D.getTime()?' '+this._dayOverClass:'')+(R?' '+this._unselectableClass+' ui-state-disabled':'')+(F&&!v?'':' '+O[1]+(N.getTime()===G.getTime()?' '+this._currentClass:'')+(N.getTime()===Y.getTime()?' ui-datepicker-today':''))+'\''+(F&&!v||!O[2]?'':' title=\''+O[2].replace(/'/g,'&#39;')+'\'')+(R?'':' data-handler=\'selectDay\' data-event=\'click\' data-month=\''+N.getMonth()+'\' data-year=\''+N.getFullYear()+'\'')+'>'+(F&&!v?'&#xa0;':R?'<span class=\'ui-state-default\'>'+N.getDate()+'</span>':'<a class=\'ui-state-default'+(N.getTime()===Y.getTime()?' ui-state-highlight':'')+(N.getTime()===G.getTime()?' ui-state-active':'')+(F?' ui-priority-secondary':'')+'\' href=\'#\'>'+N.getDate()+'</a>')+'</td>',N.setDate(N.getDate()+1),N=this._daylightSavingAdjust(N);T+=W+'</tr>'}++Z>11&&(Z=0,tt++),k+=T+='</tbody></table>'+($?'</div>'+(U[0]>0&&C===U[1]-1?'<div class=\'ui-datepicker-row-break\'></div>':''):'')}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,m,g=this._get(t,'changeMonth'),v=this._get(t,'changeYear'),_=this._get(t,'showMonthAfterYear'),b='<div class=\'ui-datepicker-title\'>',y='';if(o||!g)y+='<span class=\'ui-datepicker-month\'>'+a[e]+'</span>';else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+='<select class=\'ui-datepicker-month\' data-handler=\'selectMonth\' data-event=\'change\'>',c=0;c<12;c++)(!h||c>=s.getMonth())&&(!l||c<=n.getMonth())&&(y+='<option value=\''+c+'\''+(c===e?' selected=\'selected\'':'')+'>'+r[c]+'</option>');y+='</select>'}if(_||(b+=y+(!o&&g&&v?'':'&#xa0;')),!t.yearshtml)if(t.yearshtml='',o||!v)b+='<span class=\'ui-datepicker-year\'>'+i+'</span>';else{for(u=this._get(t,'yearRange').split(':'),d=(new Date).getFullYear(),f=(p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e})(u[0]),m=Math.max(f,p(u[1]||'')),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+='<select class=\'ui-datepicker-year\' data-handler=\'selectYear\' data-event=\'change\'>';f<=m;f++)t.yearshtml+='<option value=\''+f+'\''+(f===i?' selected=\'selected\'':'')+'>'+f+'</option>';t.yearshtml+='</select>',b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,'yearSuffix'),_&&(b+=(!o&&g&&v?'':'&#xa0;')+y),b+='</div>'},_adjustInstDate:function(t,e,i){var s=t.drawYear+('Y'===i?e:0),n=t.drawMonth+('M'===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+('D'===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),'M'!==i&&'Y'!==i||this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,'min'),s=this._getMinMaxDate(t,'max'),n=i&&e<i?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,'onChangeMonthYear');e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,'numberOfMonths');return null==e?[1,1]:'number'==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+'Date'),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(e<0?e:n[0]*n[1]),1));return e<0&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,'min'),o=this._getMinMaxDate(t,'max'),a=null,r=null,h=this._get(t,'yearRange');return h&&(i=h.split(':'),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||e.getFullYear()<=r)},_getFormatConfig:function(t){var e=this._get(t,'shortYearCutoff');return{shortYearCutoff:e='string'!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,'dayNamesShort'),dayNames:this._get(t,'dayNames'),monthNamesShort:this._get(t,'monthNamesShort'),monthNames:this._get(t,'monthNames')}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?'object'==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,'dateFormat'),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t('#'+t.datepicker._mainDivId).length&&t('body').append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return'string'!=typeof e||'isDisabled'!==e&&'getDate'!==e&&'widget'!==e?'option'===e&&2===arguments.length&&'string'==typeof arguments[1]?t.datepicker['_'+e+'Datepicker'].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){'string'==typeof e?t.datepicker['_'+e+'Datepicker'].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker['_'+e+'Datepicker'].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new g,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version='1.11.1';t.datepicker;
/*!
 * jQuery UI Draggable 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */t.widget('ui.draggable',t.ui.mouse,{version:'1.11.1',widgetEventPrefix:'drag',options:{addClasses:!0,appendTo:'parent',axis:!1,connectToSortable:!1,containment:!1,cursor:'auto',cursorAt:!1,grid:!1,handle:!1,helper:'original',iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:'default',scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:'both',snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){'original'!==this.options.helper||/^(?:r|a|f)/.test(this.element.css('position'))||(this.element[0].style.position='relative'),this.options.addClasses&&this.element.addClass('ui-draggable'),this.options.disabled&&this.element.addClass('ui-draggable-disabled'),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),'handle'===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is('.ui-draggable-dragging')?this.destroyOnClear=!0:(this.element.removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled'),this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(e){var i=this.document[0],s=this.options;try{i.activeElement&&'body'!==i.activeElement.nodeName.toLowerCase()&&t(i.activeElement).blur()}catch(t){}return!(this.helper||s.disabled||t(e.target).closest('.ui-resizable-handle').length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(t(!0===s.iframeFix?'iframe':s.iframeFix).each(function(){t('<div class=\'ui-draggable-iframeFix\' style=\'background: #fff;\'></div>').css({width:this.offsetWidth+'px',height:this.offsetHeight+'px',position:'absolute',opacity:'0.001',zIndex:1e3}).css(t(this).offset()).appendTo('body')}),!0))},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass('ui-draggable-dragging'),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css('position'),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css('position'),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),!1===this._trigger('start',e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if('fixed'===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo('absolute'),!i){var s=this._uiHash();if(!1===this._trigger('drag',e,s))return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+'px',this.helper[0].style.top=this.position.top+'px',t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),'invalid'===this.options.revert&&!s||'valid'===this.options.revert&&s||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==i._trigger('stop',e)&&i._clear()}):!1!==this._trigger('stop',e)&&this._clear(),!1},_mouseUp:function(e){return t('div.ui-draggable-iframeFix').each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.element.focus(),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is('.ui-draggable-dragging')?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass('ui-draggable-handle')},_removeHandleClassName:function(){this.handleElement.removeClass('ui-draggable-handle')},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):'clone'===i.helper?this.element.clone().removeAttr('id'):this.element;return s.parents('body').length||s.appendTo('parent'===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css('position'))||s.css('position','absolute'),s},_adjustOffsetFromHelper:function(e){'string'==typeof e&&(e=e.split(' ')),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),'left'in e&&(this.offset.click.left=e.left+this.margins.left),'right'in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),'top'in e&&(this.offset.click.top=e.top+this.margins.top),'bottom'in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return'absolute'===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css('borderTopWidth'),10)||0),left:e.left+(parseInt(this.offsetParent.css('borderLeftWidth'),10)||0)}},_getRelativeOffset:function(){if('relative'!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css('top'),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css('left'),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css('marginLeft'),10)||0,top:parseInt(this.element.css('marginTop'),10)||0,right:parseInt(this.element.css('marginRight'),10)||0,bottom:parseInt(this.element.css('marginBottom'),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];this.relativeContainer=null,n.containment?'window'!==n.containment?'document'!==n.containment?n.containment.constructor!==Array?('parent'===n.containment&&(n.containment=this.helper[0].parentNode),(s=(i=t(n.containment))[0])&&(e='hidden'!==i.css('overflow'),this.containment=[(parseInt(i.css('borderLeftWidth'),10)||0)+(parseInt(i.css('paddingLeft'),10)||0),(parseInt(i.css('borderTopWidth'),10)||0)+(parseInt(i.css('paddingTop'),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css('borderRightWidth'),10)||0)-(parseInt(i.css('paddingRight'),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css('borderBottomWidth'),10)||0)-(parseInt(i.css('paddingBottom'),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i)):this.containment=n.containment:this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var i='absolute'===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-('fixed'===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-('fixed'===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),'y'===a.axis&&(h=this.originalPageX),'x'===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+('fixed'===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+('fixed'===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass('ui-draggable-dragging'),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),'drag'===e&&(this.positionAbs=this._convertPositionTo('absolute')),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add('draggable','connectToSortable',{start:function(e,i,s){var n=s.options,o=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t(this).sortable('instance');i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger('activate',e,o))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,'original'===s.options.helper&&this.instance.currentItem.css({top:'auto',left:'auto'})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger('deactivate',e,n))})},drag:function(e,i,s){var n=this;t.each(s.sortables,function(){var o=!1,a=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(a.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr('id').appendTo(this.instance.element).data('ui-sortable-item',!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger('toSortable',e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger('out',e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger('fromSortable',e),s.dropped=!1)})}}),t.ui.plugin.add('draggable','cursor',{start:function(e,i,s){var n=t('body'),o=s.options;n.css('cursor')&&(o._cursor=n.css('cursor')),n.css('cursor',o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t('body').css('cursor',n._cursor)}}),t.ui.plugin.add('draggable','opacity',{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css('opacity')&&(o._opacity=n.css('opacity')),n.css('opacity',o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css('opacity',n._opacity)}}),t.ui.plugin.add('draggable','scroll',{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&'HTML'!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&'HTML'!==a.tagName?(n.axis&&'x'===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&'y'===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&'x'===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&'y'===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),!1!==o&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add('draggable','snap',{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||':data(ui-draggable)':n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,_=i.offset.top,b=_+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=(h=s.snapElements[d].left)+s.snapElements[d].width,u=(c=s.snapElements[d].top)+s.snapElements[d].height,v<h-m||g>l+m||b<c-m||_>u+m||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):('inner'!==f.snapMode&&(n=Math.abs(c-b)<=m,o=Math.abs(u-_)<=m,a=Math.abs(h-v)<=m,r=Math.abs(l-g)<=m,n&&(i.position.top=s._convertPositionTo('relative',{top:c-s.helperProportions.height,left:0}).top-s.margins.top),o&&(i.position.top=s._convertPositionTo('relative',{top:u,left:0}).top-s.margins.top),a&&(i.position.left=s._convertPositionTo('relative',{top:0,left:h-s.helperProportions.width}).left-s.margins.left),r&&(i.position.left=s._convertPositionTo('relative',{top:0,left:l}).left-s.margins.left)),p=n||o||a||r,'outer'!==f.snapMode&&(n=Math.abs(c-_)<=m,o=Math.abs(u-b)<=m,a=Math.abs(h-g)<=m,r=Math.abs(l-v)<=m,n&&(i.position.top=s._convertPositionTo('relative',{top:c,left:0}).top-s.margins.top),o&&(i.position.top=s._convertPositionTo('relative',{top:u-s.helperProportions.height,left:0}).top-s.margins.top),a&&(i.position.left=s._convertPositionTo('relative',{top:0,left:h}).left-s.margins.left),r&&(i.position.left=s._convertPositionTo('relative',{top:0,left:l-s.helperProportions.width}).left-s.margins.left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add('draggable','stack',{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css('zIndex'),10)||0)-(parseInt(t(i).css('zIndex'),10)||0)});a.length&&(n=parseInt(t(a[0]).css('zIndex'),10)||0,t(a).each(function(e){t(this).css('zIndex',n+e)}),this.css('zIndex',n+a.length))}}),t.ui.plugin.add('draggable','zIndex',{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css('zIndex')&&(o._zIndex=n.css('zIndex')),n.css('zIndex',o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css('zIndex',n._zIndex)}});t.ui.draggable;
/*!
 * jQuery UI Resizable 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */t.widget('ui.resizable',t.ui.mouse,{version:'1.11.1',widgetEventPrefix:'resize',options:{alsoResize:!1,animate:!1,animateDuration:'slow',animateEasing:'swing',aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:'e,s,se',helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(e,i){if('hidden'===t(e).css('overflow'))return!1;var s,n=i&&'left'===i?'scrollLeft':'scrollTop';return e[n]>0||(e[n]=1,s=e[n]>0,e[n]=0,s)},_create:function(){var e,i,s,n,o=this,a=this.options;if(this.element.addClass('ui-resizable'),t.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||'ui-resizable-helper':null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t('<div class=\'ui-wrapper\' style=\'overflow: hidden;\'></div>').css({position:this.element.css('position'),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css('top'),left:this.element.css('left')})),this.element=this.element.parent().data('ui-resizable',this.element.resizable('instance')),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css('marginLeft'),marginTop:this.originalElement.css('marginTop'),marginRight:this.originalElement.css('marginRight'),marginBottom:this.originalElement.css('marginBottom')}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css('resize'),this.originalElement.css('resize','none'),this._proportionallyResizeElements.push(this.originalElement.css({position:'static',zoom:1,display:'block'})),this.originalElement.css({margin:this.originalElement.css('margin')}),this._proportionallyResize()),this.handles=a.handles||(t('.ui-resizable-handle',this.element).length?{n:'.ui-resizable-n',e:'.ui-resizable-e',s:'.ui-resizable-s',w:'.ui-resizable-w',se:'.ui-resizable-se',sw:'.ui-resizable-sw',ne:'.ui-resizable-ne',nw:'.ui-resizable-nw'}:'e,s,se'),this.handles.constructor===String)for('all'===this.handles&&(this.handles='n,e,s,w,se,sw,ne,nw'),e=this.handles.split(','),this.handles={},i=0;i<e.length;i++)s=t.trim(e[i]),(n=t('<div class=\'ui-resizable-handle '+('ui-resizable-'+s)+'\'></div>')).css({zIndex:a.zIndex}),'se'===s&&n.addClass('ui-icon ui-icon-gripsmall-diagonal-se'),this.handles[s]='.ui-resizable-'+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;for(i in e=e||this.element,this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=['padding',/ne|nw|n/.test(i)?'Top':/se|sw|s/.test(i)?'Bottom':/^e$/.test(i)?'Right':'Left'].join(''),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t('.ui-resizable-handle',this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:'se')}),a.autoHide&&(this._handles.hide(),t(this.element).addClass('ui-resizable-autohide').mouseenter(function(){a.disabled||(t(this).removeClass('ui-resizable-autohide'),o._handles.show())}).mouseleave(function(){a.disabled||o.resizing||(t(this).addClass('ui-resizable-autohide'),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass('ui-resizable ui-resizable-disabled ui-resizable-resizing').removeData('resizable').removeData('ui-resizable').unbind('.resizable').find('.ui-resizable-handle').remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css('position'),width:e.outerWidth(),height:e.outerHeight(),top:e.css('top'),left:e.css('left')}).insertAfter(e),e.remove()),this.originalElement.css('resize',this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)((s=t(this.handles[i])[0])===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css('left')),s=this._num(this.helper.css('top')),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio='number'==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t('.ui-resizable-'+this.axis).css('cursor'),t('body').css('cursor','auto'===n?this.axis+'-resize':n),a.addClass('ui-resizable-resizing'),this._propagate('start',e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),!!h&&(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate('resize',e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger('resize',e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options;return this._helper&&(n=(s=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],'left')?0:this.sizeDiff.height,o=s?0:this.sizeDiff.width,a={width:this.helper.width()-o,height:this.helper.height()-n},r=parseInt(this.element.css('left'),10)+(this.position.left-this.originalPosition.left)||null,h=parseInt(this.element.css('top'),10)+(this.position.top-this.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),this.helper.height(this.size.height),this.helper.width(this.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t('body').css('cursor','auto'),this.element.removeClass('ui-resizable-resizing'),this._propagate('stop',e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+'px'),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+'px'),this.size.width!==this.prevSize.width&&(t.width=this.size.width+'px'),this.size.height!==this.prevSize.height&&(t.height=this.size.height+'px'),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),i<o.maxWidth&&(o.maxWidth=i),n<o.maxHeight&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),'sw'===s&&(t.left=e.left+(i.width-t.width),t.top=null),'nw'===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css('borderTopWidth'),t.css('borderRightWidth'),t.css('borderBottomWidth'),t.css('borderLeftWidth')],n=[t.css('paddingTop'),t.css('paddingRight'),t.css('paddingBottom'),t.css('paddingLeft')];e<4;e++)i[e]=parseInt(s[e],10)||0,i[e]+=parseInt(n[e],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t('<div style=\'overflow:hidden;\'></div>'),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:'absolute',left:this.elementOffset.left+'px',top:this.elementOffset.top+'px',zIndex:++i.zIndex}),this.helper.appendTo('body').disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),'resize'!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add('resizable','animate',{stop:function(e){var i=t(this).resizable('instance'),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],'left')?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css('left'),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css('top'),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css('width'),10),height:parseInt(i.element.css('height'),10),top:parseInt(i.element.css('top'),10),left:parseInt(i.element.css('left'),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate('resize',e)}})}}),t.ui.plugin.add('resizable','containment',{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable('instance'),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(['Top','Right','Left','Bottom']).each(function(t,s){i[t]=h._num(e.css('padding'+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,'left')?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable('instance'),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css('position'))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css('position')),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable('instance'),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css('position'))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css('position'))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add('resizable','alsoResize',{start:function(){var e=t(this).resizable('instance').options,i=function(e){t(e).each(function(){var e=t(this);e.data('ui-resizable-alsoresize',{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css('left'),10),top:parseInt(e.css('top'),10)})})};'object'!=typeof e.alsoResize||e.alsoResize.parentNode?i(e.alsoResize):e.alsoResize.length?(e.alsoResize=e.alsoResize[0],i(e.alsoResize)):t.each(e.alsoResize,function(t){i(t)})},resize:function(e,i){var s=t(this).resizable('instance'),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data('ui-resizable-alsoresize'),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?['width','height']:['width','height','top','left'];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};'object'!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData('resizable-alsoresize')}}),t.ui.plugin.add('resizable','ghost',{start:function(){var e=t(this).resizable('instance'),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:'block',position:'relative',height:s.height,width:s.width,margin:0,left:0,top:0}).addClass('ui-resizable-ghost').addClass('string'==typeof i.ghost?i.ghost:''),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable('instance');e.ghost&&e.ghost.css({position:'relative',height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable('instance');e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add('resizable','grid',{resize:function(){var e,i=t(this).resizable('instance'),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h='number'==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,m=s.maxWidth&&s.maxWidth<p,g=s.maxHeight&&s.maxHeight<f,v=s.minWidth&&s.minWidth>p,_=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),_&&(f+=c),m&&(p-=l),g&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((f-c<=0||p-l<=0)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=c-e.height,i.size.width=p,i.position.left=a.left+o.width-p))}});t.ui.resizable,t.widget('ui.dialog',{version:'1.11.1',options:{appendTo:'body',autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:'Close',dialogClass:'',draggable:!0,hide:null,height:'auto',maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:'center',at:'center',of:window,collision:'fit',using:function(e){var i=t(this).css(e).offset().top;i<0&&t(this).css('top',e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr('title'),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr('title').addClass('ui-dialog-content ui-widget-content').appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||'body').eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass('ui-dialog-content ui-widget-content').css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr('title',this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&!1!==this._trigger('beforeClose',e)){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(':focusable').focus().length)try{(i=this.document[0].activeElement)&&'body'!==i.nodeName.toLowerCase()&&t(i).blur()}catch(t){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger('close',e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings('.ui-front:visible').map(function(){return+t(this).css('z-index')}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css('z-index')&&(this.uiDialog.css('z-index',o+1),s=!0),s&&!i&&this._trigger('focus',e),s},open:function(){var e=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css('z-index',this.uiDialog.css('z-index')-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger('focus')}),this._makeFocusTarget(),this._trigger('open'))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find('[autofocus]')),t.length||(t=this.element.find(':tabbable')),t.length||(t=this.uiDialogButtonPane.find(':tabbable')),t.length||(t=this.uiDialogTitlebarClose.filter(':tabbable')),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement;this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t('<div>').addClass('ui-dialog ui-widget ui-widget-content ui-corner-all ui-front '+this.options.dialogClass).hide().attr({tabIndex:-1,role:'dialog'}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(':tabbable'),s=i.filter(':first'),n=i.filter(':last');e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.focus()}),e.preventDefault()):(this._delay(function(){s.focus()}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find('[aria-describedby]').length||this.uiDialog.attr({'aria-describedby':this.element.uniqueId().attr('id')})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t('<div>').addClass('ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix').prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest('.ui-dialog-titlebar-close')||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t('<button type=\'button\'></button>').button({label:this.options.closeText,icons:{primary:'ui-icon-closethick'},text:!1}).addClass('ui-dialog-titlebar-close').appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t('<span>').uniqueId().addClass('ui-dialog-title').prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({'aria-labelledby':e.attr('id')})},_title:function(t){this.options.title||t.html('&#160;'),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t('<div>').addClass('ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'),this.uiButtonSet=t('<div>').addClass('ui-dialog-buttonset').appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?this.uiDialog.removeClass('ui-dialog-buttons'):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:'button'},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t('<button></button>',s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass('ui-dialog-buttons'),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var e=this,i=this.options;function s(t){return{position:t.position,offset:t.offset}}this.uiDialog.draggable({cancel:'.ui-dialog-content, .ui-dialog-titlebar-close',handle:'.ui-dialog-titlebar',containment:'document',start:function(i,n){t(this).addClass('ui-dialog-dragging'),e._blockFrames(),e._trigger('dragStart',i,s(n))},drag:function(t,i){e._trigger('drag',t,s(i))},stop:function(n,o){var a=o.offset.left-e.document.scrollLeft(),r=o.offset.top-e.document.scrollTop();i.position={my:'left top',at:'left'+(a>=0?'+':'')+a+' top'+(r>=0?'+':'')+r,of:e.window},t(this).removeClass('ui-dialog-dragging'),e._unblockFrames(),e._trigger('dragStop',n,s(o))}})},_makeResizable:function(){var e=this,i=this.options,s=i.resizable,n=this.uiDialog.css('position'),o='string'==typeof s?s:'n,e,s,w,se,sw,ne,nw';function a(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}this.uiDialog.resizable({cancel:'.ui-dialog-content',containment:'document',alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:o,start:function(i,s){t(this).addClass('ui-dialog-resizing'),e._blockFrames(),e._trigger('resizeStart',i,a(s))},resize:function(t,i){e._trigger('resize',t,a(i))},stop:function(s,n){var o=e.uiDialog.offset(),r=o.left-e.document.scrollLeft(),h=o.top-e.document.scrollTop();i.height=e.uiDialog.height(),i.width=e.uiDialog.width(),i.position={my:'left top',at:'left'+(r>=0?'+':'')+r+' top'+(h>=0?'+':'')+h,of:e.window},t(this).removeClass('ui-dialog-resizing'),e._unblockFrames(),e._trigger('resizeStop',s,a(n))}}).css('position',n)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data('ui-dialog-instances');return t||(t=[],this.document.data('ui-dialog-instances',t)),t},_minHeight:function(){var t=this.options;return'auto'===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(':visible');t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(':data(ui-resizable)')&&this.uiDialog.resizable('option',n)},_setOption:function(t,e){var i,s,n=this.uiDialog;'dialogClass'===t&&n.removeClass(this.options.dialogClass).addClass(e),'disabled'!==t&&(this._super(t,e),'appendTo'===t&&this.uiDialog.appendTo(this._appendTo()),'buttons'===t&&this._createButtons(),'closeText'===t&&this.uiDialogTitlebarClose.button({label:''+e}),'draggable'===t&&((i=n.is(':data(ui-draggable)'))&&!e&&n.draggable('destroy'),!i&&e&&this._makeDraggable()),'position'===t&&this._position(),'resizable'===t&&((s=n.is(':data(ui-resizable)'))&&!e&&n.resizable('destroy'),s&&'string'==typeof e&&n.resizable('option','handles',e),s||!1===e||this._makeResizable()),'title'===t&&this._title(this.uiDialogTitlebar.find('.ui-dialog-title')))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:'auto',minHeight:0,maxHeight:'none',height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:'auto',width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i='number'==typeof s.maxHeight?Math.max(0,s.maxHeight-t):'none','auto'===s.height?this.element.css({minHeight:e,maxHeight:i,height:'auto'}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(':data(ui-resizable)')&&this.uiDialog.resizable('option','minHeight',this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find('iframe').map(function(){var e=t(this);return t('<div>').css({position:'absolute',width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest('.ui-dialog').length||!!t(e.target).closest('.ui-datepicker').length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data('ui-dialog-overlays')||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t('<div>').addClass('ui-widget-overlay ui-front').appendTo(this._appendTo()),this._on(this.overlay,{mousedown:'_keepFocus'}),this.document.data('ui-dialog-overlays',(this.document.data('ui-dialog-overlays')||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data('ui-dialog-overlays')-1;t?this.document.data('ui-dialog-overlays',t):this.document.unbind('focusin').removeData('ui-dialog-overlays'),this.overlay.remove(),this.overlay=null}}})
/*!
 * jQuery UI Dialog 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */;
/*!
 * jQuery UI Droppable 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
t.widget('ui.droppable',{version:'1.11.1',widgetEventPrefix:'drop',options:{accept:'*',activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:'default',tolerance:'intersect',activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){if(!arguments.length)return e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});e=arguments[0]},this._addToManager(i.scope),i.addClasses&&this.element.addClass('ui-droppable')},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e),this.element.removeClass('ui-droppable ui-droppable-disabled')},_setOption:function(e,i){if('accept'===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if('scope'===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger('activate',e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger('deactivate',e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger('over',e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger('out',e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return!(!s||(s.currentItem||s.element)[0]===this.element[0])&&(this.element.find(':data(ui-droppable)').not('.ui-draggable-dragging').each(function(){var i=t(this).droppable('instance');if(i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e))return n=!0,!1}),!n&&(!!this.accept.call(this.element[0],s.currentItem||s.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger('drop',e,this.ui(s)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(){function t(t,e,i){return t>=e&&t<e+i}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left,a=(e.positionAbs||e.position.absolute).top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case'fit':return l<=o&&r<=u&&c<=a&&h<=d;case'intersect':return l<o+e.helperProportions.width/2&&r-e.helperProportions.width/2<u&&c<a+e.helperProportions.height/2&&h-e.helperProportions.height/2<d;case'pointer':return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case'touch':return(a>=c&&a<=d||h>=c&&h<=d||a<c&&h>d)&&(o>=l&&o<=u||r>=l&&r<=u||o<l&&r>u);default:return!1}}}(),t.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(':data(ui-droppable)').addBack();t:for(s=0;s<o.length;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;n<r.length;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible='none'!==o[s].element.css('display'),o[s].visible&&('mousedown'===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil('body').bind('scroll.droppable',function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance,i),r=!a&&this.isover?'isout':a&&!this.isover?'isover':null;r&&(this.options.greedy&&(n=this.options.scope,(o=this.element.parents(':data(ui-droppable)').filter(function(){return t(this).droppable('instance').options.scope===n})).length&&((s=t(o[0]).droppable('instance')).greedyChild='isover'===r)),s&&'isover'===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this['isout'===r?'isover':'isout']=!1,this['isover'===r?'_over':'_out'].call(this,i),s&&'isout'===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil('body').unbind('scroll.droppable'),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}};t.ui.droppable;
/*!
 * jQuery UI Effects 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */var y,w=t;t.effects={effect:{}},
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(t,e){var i,s=/^([\-+])=\s*(\d+\.?\d*)/,n=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:'hsla',parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],o=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},a={rgba:{props:{red:{idx:0,type:'byte'},green:{idx:1,type:'byte'},blue:{idx:2,type:'byte'}}},hsla:{props:{hue:{idx:0,type:'degrees'},saturation:{idx:1,type:'percent'},lightness:{idx:2,type:'percent'}}}},r={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=o.support={},l=t('<p>')[0],c=t.each;function u(t,e,i){var s=r[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:s.max<t?s.max:t)}function d(e){var s=o(),r=s._rgba=[];return e=e.toLowerCase(),c(n,function(t,i){var n,o=i.re.exec(e),h=o&&i.parse(o),l=i.space||'rgba';if(h)return n=s[l](h),s[a[l].cache]=n[a[l].cache],r=s._rgba=n._rgba,!1}),r.length?('0,0,0,0'===r.join()&&t.extend(r,i.transparent),s):i[e]}function p(t,e,i){return 6*(i=(i+1)%1)<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}l.style.cssText='background-color:rgba(1,1,1,.5)',h.rgba=l.style.backgroundColor.indexOf('rgba')>-1,c(a,function(t,e){e.cache='_'+t,e.props.alpha={idx:3,type:'percent',def:1}}),o.fn=t.extend(o.prototype,{parse:function(e,s,n,r){if(void 0===e)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=t(e).css(s),s=void 0);var h=this,l=t.type(e),p=this._rgba=[];return void 0!==s&&(e=[e,s,n,r],l='array'),'string'===l?this.parse(d(e)||i._default):'array'===l?(c(a.rgba.props,function(t,i){p[i.idx]=u(e[i.idx],i)}),this):'object'===l?(c(a,e instanceof o?function(t,i){e[i.cache]&&(h[i.cache]=e[i.cache].slice())}:function(i,s){var n=s.cache;c(s.props,function(t,i){if(!h[n]&&s.to){if('alpha'===t||null==e[t])return;h[n]=s.to(h._rgba)}h[n][i.idx]=u(e[t],i,!0)}),h[n]&&t.inArray(null,h[n].slice(0,3))<0&&(h[n][3]=1,s.from&&(h._rgba=s.from(h[n])))}),this):void 0},is:function(t){var e=o(t),i=!0,s=this;return c(a,function(t,n){var o,a=e[n.cache];return a&&(o=s[n.cache]||n.to&&n.to(s._rgba)||[],c(n.props,function(t,e){if(null!=a[e.idx])return i=a[e.idx]===o[e.idx]})),i}),i},_space:function(){var t=[],e=this;return c(a,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var i=o(t),s=i._space(),n=a[s],h=0===this.alpha()?o('transparent'):this,l=h[n.cache]||n.to(h._rgba),d=l.slice();return i=i[n.cache],c(n.props,function(t,s){var n=s.idx,o=l[n],a=i[n],h=r[s.type]||{};null!==a&&(null===o?d[n]=a:(h.mod&&(a-o>h.mod/2?o+=h.mod:o-a>h.mod/2&&(o-=h.mod)),d[n]=u((a-o)*e+o,s)))}),this[s](d)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=o(e)._rgba;return o(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e='rgba(',i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e='rgb('),e+i.join()+')'},toHslaString:function(){var e='hsla(',i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&e<3&&(t=Math.round(100*t)+'%'),t});return 1===i[3]&&(i.pop(),e='hsl('),e+i.join()+')'},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),'#'+t.map(i,function(t){return 1===(t=(t||0).toString(16)).length?'0'+t:t}).join('')},toString:function(){return 0===this._rgba[3]?'transparent':this.toRgbaString()}}),o.fn.parse.prototype=o.fn,a.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:u<=.5?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},a.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],n=t[3],o=s<=.5?s*(1+i):s+i-s*i,a=2*s-o;return[Math.round(255*p(a,o,e+1/3)),Math.round(255*p(a,o,e)),Math.round(255*p(a,o,e-1/3)),n]},c(a,function(e,i){var n=i.props,a=i.cache,r=i.to,h=i.from;o.fn[e]=function(e){if(r&&!this[a]&&(this[a]=r(this._rgba)),void 0===e)return this[a].slice();var i,s=t.type(e),l='array'===s||'object'===s?e:arguments,d=this[a].slice();return c(n,function(t,e){var i=l['object'===s?t:e.idx];null==i&&(i=d[e.idx]),d[e.idx]=u(i,e)}),h?((i=o(h(d)))[a]=d,i):o(d)},c(n,function(i,n){o.fn[i]||(o.fn[i]=function(o){var a,r=t.type(o),h='alpha'===i?this._hsla?'hsla':'rgba':e,l=this[h](),c=l[n.idx];return'undefined'===r?c:('function'===r&&(o=o.call(this,c),r=t.type(o)),null==o&&n.empty?this:('string'===r&&(a=s.exec(o))&&(o=c+parseFloat(a[2])*('+'===a[1]?1:-1)),l[n.idx]=o,this[h](l)))})})}),o.hook=function(e){var i=e.split(' ');c(i,function(e,i){t.cssHooks[i]={set:function(e,s){var n,a,r='';if('transparent'!==s&&('string'!==t.type(s)||(n=d(s)))){if(s=o(n||s),!h.rgba&&1!==s._rgba[3]){for(a='backgroundColor'===i?e.parentNode:e;(''===r||'transparent'===r)&&a&&a.style;)try{r=t.css(a,'backgroundColor'),a=a.parentNode}catch(t){}s=s.blend(r&&'transparent'!==r?r:'_default')}s=s.toRgbaString()}try{e.style[i]=s}catch(t){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=o(e.elem,i),e.end=o(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},o.hook('backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor'),t.cssHooks.borderColor={expand:function(t){var e={};return c(['Top','Right','Bottom','Left'],function(i,s){e['border'+s+'Color']=t}),e}},i=t.Color.names={aqua:'#00ffff',black:'#000000',blue:'#0000ff',fuchsia:'#ff00ff',gray:'#808080',green:'#008000',lime:'#00ff00',maroon:'#800000',navy:'#000080',olive:'#808000',purple:'#800080',red:'#ff0000',silver:'#c0c0c0',teal:'#008080',white:'#ffffff',yellow:'#ffff00',transparent:[null,null,null,0],_default:'#ffffff'}}(w),function(){var e,i=['add','remove','toggle'],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function n(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)'string'==typeof n[i=n[s]]&&(o[t.camelCase(i)]=n[i]);else for(i in n)'string'==typeof n[i]&&(o[i]=n[i]);return o}t.each(['borderLeftStyle','borderRightStyle','borderBottomStyle','borderTopStyle'],function(e,i){t.fx.step[i]=function(t){('none'!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(w.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr('class')||'',l=h.children?a.find('*').addBack():a;l=l.map(function(){return{el:t(this),start:n(this)}}),(o=function(){t.each(i,function(t,i){e[i]&&a[i+'Class'](e[i])})})(),l=l.map(function(){return this.end=n(this.el[0]),this.diff=function(e,i){var n,o,a={};for(n in i)o=i[n],e[n]!==o&&(s[n]||!t.fx.step[n]&&isNaN(parseFloat(o))||(a[n]=o));return a}(this.start,this.end),this}),a.attr('class',r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,'')})}),h.complete.call(a[0])})})},t.fn.extend({addClass:(e=t.fn.addClass,function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return'boolean'==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),('number'==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:'number'==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!(e&&'number'!=typeof e&&!t.fx.speeds[e])||('string'==typeof e&&!t.effects.effect[e]||(!!t.isFunction(e)||'object'==typeof e&&!e.effect))}var s;t.extend(t.effects,{version:'1.11.1',save:function(t,e){for(var i=0;i<e.length;i++)null!==e[i]&&t.data('ui-effects-'+e[i],t[0].style[e[i]])},restore:function(t,e){var i,s;for(s=0;s<e.length;s++)null!==e[s]&&(void 0===(i=t.data('ui-effects-'+e[s]))&&(i=''),t.css(e[s],i))},setMode:function(t,e){return'toggle'===e&&(e=t.is(':hidden')?'show':'hide'),e},getBaseline:function(t,e){var i,s;switch(t[0]){case'top':i=0;break;case'middle':i=.5;break;case'bottom':i=1;break;default:i=t[0]/e.height}switch(t[1]){case'left':s=0;break;case'center':s=.5;break;case'right':s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is('.ui-effects-wrapper'))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css('float')},s=t('<div></div>').addClass('ui-effects-wrapper').css({fontSize:'100%',background:'transparent',border:'none',margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),'static'===e.css('position')?(s.css({position:'relative'}),e.css({position:'relative'})):(t.extend(i,{position:e.css('position'),zIndex:e.css('z-index')}),t.each(['top','left','bottom','right'],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]='auto')}),e.css({position:'relative',top:0,left:0,right:'auto',bottom:'auto'})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is('.ui-effects-wrapper')&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){var i=e.apply(this,arguments),s=i.mode,n=i.queue,o=t.effects.effect[i.effect];if(t.fx.off||!o)return s?this[s](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)});function a(e){var s=t(this),n=i.complete,a=i.mode;function r(){t.isFunction(n)&&n.call(s[0]),t.isFunction(e)&&e()}(s.is(':hidden')?'hide'===a:'show'===a)?(s[a](),r()):o.call(s[0],i,r)}return!1===n?this.each(a):this.queue(n||'fx',a)},show:(s=t.fn.show,function(t){if(i(t))return s.apply(this,arguments);var n=e.apply(this,arguments);return n.mode='show',this.effect.call(this,n)}),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode='hide',this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||'boolean'==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode='toggle',this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(['em','px','%','pt'],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),y={},t.each(['Quad','Cubic','Quart','Quint','Expo'],function(t,e){y[e]=function(e){return Math.pow(e,t+2)}}),t.extend(y,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(y,function(e,i){t.easing['easeIn'+e]=i,t.easing['easeOut'+e]=function(t){return 1-i(1-t)},t.easing['easeInOut'+e]=function(t){return t<.5?i(2*t)/2:1-i(-2*t+2)/2}});t.effects,t.effects.effect.blind=function(e,i){var s,n,o,a=t(this),r=['position','top','bottom','left','right','height','width'],h=t.effects.setMode(a,e.mode||'hide'),l=e.direction||'up',c=/up|down|vertical/.test(l),u=c?'height':'width',d=c?'top':'left',p=/up|left|vertical|horizontal/.test(l),f={},m='show'===h;a.parent().is('.ui-effects-wrapper')?t.effects.save(a.parent(),r):t.effects.save(a,r),a.show(),n=(s=t.effects.createWrapper(a).css({overflow:'hidden'}))[u](),o=parseFloat(s.css(d))||0,f[u]=m?n:0,p||(a.css(c?'bottom':'right',0).css(c?'top':'left','auto').css({position:'absolute'}),f[d]=m?o:n+o),m&&(s.css(u,0),p||s.css(d,o+n)),s.animate(f,{duration:e.duration,easing:e.easing,queue:!1,complete:function(){'hide'===h&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})},t.effects.effect.bounce=function(e,i){var s,n,o,a=t(this),r=['position','top','bottom','left','right','height','width'],h=t.effects.setMode(a,e.mode||'effect'),l='hide'===h,c='show'===h,u=e.direction||'up',d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),m=e.duration/f,g=e.easing,v='up'===u||'down'===u?'top':'left',_='up'===u||'left'===u,b=a.queue(),y=b.length;for((c||l)&&r.push('opacity'),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a['top'===v?'outerHeight':'outerWidth']()/3),c&&((o={opacity:1})[v]=0,a.css('opacity',0).css(v,_?2*-d:2*d).animate(o,m,g)),l&&(d/=Math.pow(2,p-1)),(o={})[v]=0,s=0;s<p;s++)(n={})[v]=(_?'-=':'+=')+d,a.animate(n,m,g).animate(o,m,g),d=l?2*d:d/2;l&&((n={opacity:0})[v]=(_?'-=':'+=')+d,a.animate(n,m,g)),a.queue(function(){l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),a.dequeue()},t.effects.effect.clip=function(e,i){var s,n,o,a=t(this),r=['position','top','bottom','left','right','height','width'],h='show'===t.effects.setMode(a,e.mode||'hide'),l='vertical'===(e.direction||'vertical'),c=l?'height':'width',u=l?'top':'left',d={};t.effects.save(a,r),a.show(),s=t.effects.createWrapper(a).css({overflow:'hidden'}),o=(n='IMG'===a[0].tagName?s:a)[c](),h&&(n.css(c,0),n.css(u,o/2)),d[c]=h?o:0,d[u]=h?0:o/2,n.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){h||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})},t.effects.effect.drop=function(e,i){var s,n=t(this),o=['position','top','bottom','left','right','opacity','height','width'],a=t.effects.setMode(n,e.mode||'hide'),r='show'===a,h=e.direction||'left',l='up'===h||'down'===h?'top':'left',c='up'===h||'left'===h?'pos':'neg',u={opacity:r?1:0};t.effects.save(n,o),n.show(),t.effects.createWrapper(n),s=e.distance||n['top'===l?'outerHeight':'outerWidth'](!0)/2,r&&n.css('opacity',0).css(l,'pos'===c?-s:s),u[l]=(r?'pos'===c?'+=':'-=':'pos'===c?'-=':'+=')+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){'hide'===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})},t.effects.effect.explode=function(e,i){var s,n,o,a,r,h,l=e.pieces?Math.round(Math.sqrt(e.pieces)):3,c=l,u=t(this),d='show'===t.effects.setMode(u,e.mode||'hide'),p=u.show().css('visibility','hidden').offset(),f=Math.ceil(u.outerWidth()/c),m=Math.ceil(u.outerHeight()/l),g=[];function v(){g.push(this),g.length===l*c&&function(){u.css({visibility:'visible'}),t(g).remove(),d||u.hide();i()}()}for(s=0;s<l;s++)for(a=p.top+s*m,h=s-(l-1)/2,n=0;n<c;n++)o=p.left+n*f,r=n-(c-1)/2,u.clone().appendTo('body').wrap('<div></div>').css({position:'absolute',visibility:'visible',left:-n*f,top:-s*m}).parent().addClass('ui-effects-explode').css({position:'absolute',overflow:'hidden',width:f,height:m,left:o+(d?r*f:0),top:a+(d?h*m:0),opacity:d?0:1}).animate({left:o+(d?0:r*f),top:a+(d?0:h*m),opacity:d?1:0},e.duration||500,e.easing,v)},t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||'toggle');s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})},t.effects.effect.fold=function(e,i){var s,n,o=t(this),a=['position','top','bottom','left','right','height','width'],r=t.effects.setMode(o,e.mode||'hide'),h='show'===r,l='hide'===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?['width','height']:['height','width'],m=e.duration/2,g={},v={};t.effects.save(o,a),o.show(),s=t.effects.createWrapper(o).css({overflow:'hidden'}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),g[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(g,m,e.easing).animate(v,m,e.easing,function(){l&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()})},t.effects.effect.highlight=function(e,i){var s=t(this),n=['backgroundImage','backgroundColor','opacity'],o=t.effects.setMode(s,e.mode||'show'),a={backgroundColor:s.css('backgroundColor')};'hide'===o&&(a.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:'none',backgroundColor:e.color||'#ffff99'}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){'hide'===o&&s.hide(),t.effects.restore(s,n),i()}})},t.effects.effect.size=function(e,i){var s,n,o,a=t(this),r=['position','top','bottom','left','right','width','height','overflow','opacity'],h=['width','height','overflow'],l=['fontSize'],c=['borderTopWidth','borderBottomWidth','paddingTop','paddingBottom'],u=['borderLeftWidth','borderRightWidth','paddingLeft','paddingRight'],d=t.effects.setMode(a,e.mode||'effect'),p=e.restore||'effect'!==d,f=e.scale||'both',m=e.origin||['middle','center'],g=a.css('position'),v=p?r:['position','top','bottom','left','right','overflow','opacity'],_={height:0,width:0,outerHeight:0,outerWidth:0};'show'===d&&a.show(),s={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},'toggle'===e.mode&&'show'===d?(a.from=e.to||_,a.to=e.from||s):(a.from=e.from||('show'===d?_:s),a.to=e.to||('hide'===d?_:s)),o={from:{y:a.from.height/s.height,x:a.from.width/s.width},to:{y:a.to.height/s.height,x:a.to.width/s.width}},'box'!==f&&'both'!==f||(o.from.y!==o.to.y&&(v=v.concat(c),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),o.from.x!==o.to.x&&(v=v.concat(u),a.from=t.effects.setTransition(a,u,o.from.x,a.from),a.to=t.effects.setTransition(a,u,o.to.x,a.to))),'content'!==f&&'both'!==f||o.from.y!==o.to.y&&(v=v.concat(l).concat(h),a.from=t.effects.setTransition(a,l,o.from.y,a.from),a.to=t.effects.setTransition(a,l,o.to.y,a.to)),t.effects.save(a,v),a.show(),t.effects.createWrapper(a),a.css('overflow','hidden').css(a.from),m&&(n=t.effects.getBaseline(m,s),a.from.top=(s.outerHeight-a.outerHeight())*n.y,a.from.left=(s.outerWidth-a.outerWidth())*n.x,a.to.top=(s.outerHeight-a.to.outerHeight)*n.y,a.to.left=(s.outerWidth-a.to.outerWidth)*n.x),a.css(a.from),'content'!==f&&'both'!==f||(c=c.concat(['marginTop','marginBottom']).concat(l),u=u.concat(['marginLeft','marginRight']),h=r.concat(c).concat(u),a.find('*[width]').each(function(){var i=t(this),s=i.height(),n=i.width(),a=i.outerHeight(),r=i.outerWidth();p&&t.effects.save(i,h),i.from={height:s*o.from.y,width:n*o.from.x,outerHeight:a*o.from.y,outerWidth:r*o.from.x},i.to={height:s*o.to.y,width:n*o.to.x,outerHeight:s*o.to.y,outerWidth:n*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,c,o.from.y,i.from),i.to=t.effects.setTransition(i,c,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,u,o.from.x,i.from),i.to=t.effects.setTransition(i,u,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){p&&t.effects.restore(i,h)})})),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css('opacity',a.from.opacity),'hide'===d&&a.hide(),t.effects.restore(a,v),p||('static'===g?a.css({position:'relative',top:a.to.top,left:a.to.left}):t.each(['top','left'],function(t,e){a.css(e,function(e,i){var s=parseInt(i,10),n=t?a.to.left:a.to.top;return'auto'===i?n+'px':s+n+'px'})})),t.effects.removeWrapper(a),i()}})},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),o=t.effects.setMode(s,e.mode||'effect'),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:'hide'===o?0:100),r=e.direction||'both',h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c='horizontal'!==r?a/100:1,u='vertical'!==r?a/100:1;n.effect='size',n.queue=!1,n.complete=i,'effect'!==o&&(n.origin=h||['middle','center'],n.restore=!0),n.from=e.from||('show'===o?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c,width:l.width*u,outerHeight:l.outerHeight*c,outerWidth:l.outerWidth*u},n.fade&&('show'===o&&(n.from.opacity=0,n.to.opacity=1),'hide'===o&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||'hide'),o='hide'===n,a=parseInt(e.percent,10)||150,r=a/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:'scale',queue:!1,fade:!0,mode:n,complete:i,percent:o?a:100,from:o?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.pulsate=function(e,i){var s,n=t(this),o=t.effects.setMode(n,e.mode||'show'),a='show'===o,r='hide'===o,h=a||'hide'===o,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for(!a&&n.is(':visible')||(n.css('opacity',0).show(),u=1),s=1;s<l;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()},t.effects.effect.shake=function(e,i){var s,n=t(this),o=['position','top','bottom','left','right','height','width'],a=t.effects.setMode(n,e.mode||'effect'),r=e.direction||'left',h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d='up'===r||'down'===r?'top':'left',p='up'===r||'left'===r,f={},m={},g={},v=n.queue(),_=v.length;for(t.effects.save(n,o),n.show(),t.effects.createWrapper(n),f[d]=(p?'-=':'+=')+h,m[d]=(p?'+=':'-=')+2*h,g[d]=(p?'-=':'+=')+2*h,n.animate(f,u,e.easing),s=1;s<l;s++)n.animate(m,u,e.easing).animate(g,u,e.easing);n.animate(m,u,e.easing).animate(f,u/2,e.easing).queue(function(){'hide'===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()},t.effects.effect.slide=function(e,i){var s,n=t(this),o=['position','top','bottom','left','right','width','height'],a=t.effects.setMode(n,e.mode||'show'),r='show'===a,h=e.direction||'left',l='up'===h||'down'===h?'top':'left',c='up'===h||'left'===h,u={};t.effects.save(n,o),n.show(),s=e.distance||n['top'===l?'outerHeight':'outerWidth'](!0),t.effects.createWrapper(n).css({overflow:'hidden'}),r&&n.css(l,c?isNaN(s)?'-'+s:-s:s),u[l]=(r?c?'+=':'-=':c?'-=':'+=')+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){'hide'===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})},t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),o='fixed'===n.css('position'),a=t('body'),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t('<div class=\'ui-effects-transfer\'></div>').appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?'fixed':'absolute'}).animate(c,e.duration,e.easing,function(){d.remove(),i()})},t.widget('ui.progressbar',{version:'1.11.1',options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').attr({role:'progressbar','aria-valuemin':this.min}),this.valueDiv=t('<div class=\'ui-progressbar-value ui-widget-header ui-corner-left\'></div>').appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').removeAttr('role').removeAttr('aria-valuemin').removeAttr('aria-valuemax').removeAttr('aria-valuenow'),this.valueDiv.remove()},value:function(t){if(void 0===t)return this.options.value;this.options.value=this._constrainedValue(t),this._refreshValue()},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,'number'!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){'max'===t&&(e=Math.max(this.min,e)),'disabled'===t&&this.element.toggleClass('ui-state-disabled',!!e).attr('aria-disabled',e),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass('ui-corner-right',e===this.options.max).width(i.toFixed(0)+'%'),this.element.toggleClass('ui-progressbar-indeterminate',this.indeterminate),this.indeterminate?(this.element.removeAttr('aria-valuenow'),this.overlayDiv||(this.overlayDiv=t('<div class=\'ui-progressbar-overlay\'></div>').appendTo(this.valueDiv))):(this.element.attr({'aria-valuemax':this.options.max,'aria-valuenow':e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger('change')),e===this.options.max&&this._trigger('complete')}}),t.widget('ui.selectable',t.ui.mouse,{version:'1.11.1',options:{appendTo:'body',autoRefresh:!0,distance:0,filter:'*',tolerance:'touch',selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass('ui-selectable'),this.dragged=!1,this.refresh=function(){(e=t(i.options.filter,i.element[0])).addClass('ui-selectee'),e.each(function(){var e=t(this),i=e.offset();t.data(this,'selectable-item',{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass('ui-selected'),selecting:e.hasClass('ui-selecting'),unselecting:e.hasClass('ui-unselecting')})})},this.refresh(),this.selectees=e.addClass('ui-selectee'),this._mouseInit(),this.helper=t('<div class=\'ui-selectable-helper\'></div>')},_destroy:function(){this.selectees.removeClass('ui-selectee').removeData('selectable-item'),this.element.removeClass('ui-selectable ui-selectable-disabled'),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger('start',e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter('.ui-selected').each(function(){var s=t.data(this,'selectable-item');s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass('ui-selected'),s.selected=!1,s.$element.addClass('ui-unselecting'),s.unselecting=!0,i._trigger('unselecting',e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,'selectable-item');if(n)return s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass('ui-selected'),n.$element.removeClass(s?'ui-unselecting':'ui-selected').addClass(s?'ui-selecting':'ui-unselecting'),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger('selecting',e,{selecting:n.element}):i._trigger('unselecting',e,{unselecting:n.element}),!1}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,'selectable-item'),l=!1;i&&i.element!==s.element[0]&&('touch'===n.tolerance?l=!(i.left>r||i.right<o||i.top>h||i.bottom<a):'fit'===n.tolerance&&(l=i.left>o&&i.right<r&&i.top>a&&i.bottom<h),l?(i.selected&&(i.$element.removeClass('ui-selected'),i.selected=!1),i.unselecting&&(i.$element.removeClass('ui-unselecting'),i.unselecting=!1),i.selecting||(i.$element.addClass('ui-selecting'),i.selecting=!0,s._trigger('selecting',e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass('ui-selecting'),i.selecting=!1,i.$element.addClass('ui-selected'),i.selected=!0):(i.$element.removeClass('ui-selecting'),i.selecting=!1,i.startselected&&(i.$element.addClass('ui-unselecting'),i.unselecting=!0),s._trigger('unselecting',e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass('ui-selected'),i.selected=!1,i.$element.addClass('ui-unselecting'),i.unselecting=!0,s._trigger('unselecting',e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t('.ui-unselecting',this.element[0]).each(function(){var s=t.data(this,'selectable-item');s.$element.removeClass('ui-unselecting'),s.unselecting=!1,s.startselected=!1,i._trigger('unselected',e,{unselected:s.element})}),t('.ui-selecting',this.element[0]).each(function(){var s=t.data(this,'selectable-item');s.$element.removeClass('ui-selecting').addClass('ui-selected'),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger('selected',e,{selected:s.element})}),this._trigger('stop',e),this.helper.remove(),!1}}),t.widget('ui.selectmenu',{version:'1.11.1',defaultElement:'<select>',options:{appendTo:null,disabled:null,icons:{button:'ui-icon-triangle-1-s'},position:{my:'left top',at:'left bottom',collision:'none'},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr('id');this.ids={element:t,button:t+'-button',menu:t+'-menu'},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var e=this,i=this.element.attr('tabindex');this.label=t('label[for=\''+this.ids.element+'\']').attr('for',this.ids.button),this._on(this.label,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t('<span>',{class:'ui-selectmenu-button ui-widget ui-state-default ui-corner-all',tabindex:i||this.options.disabled?-1:0,id:this.ids.button,role:'combobox','aria-expanded':'false','aria-autocomplete':'list','aria-owns':this.ids.menu,'aria-haspopup':'true'}).insertAfter(this.element),t('<span>',{class:'ui-icon '+this.options.icons.button}).prependTo(this.button),this.buttonText=t('<span>',{class:'ui-selectmenu-text'}).appendTo(this.button),this._setText(this.buttonText,this.element.find('option:selected').text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one('focusin',function(){e.menuItems||e._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var e=this;this.menu=t('<ul>',{'aria-hidden':'true','aria-labelledby':this.ids.button,id:this.ids.menu}),this.menuWrap=t('<div>',{class:'ui-selectmenu-menu ui-front'}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:'listbox',select:function(t,i){t.preventDefault(),e._select(i.item.data('ui-selectmenu-item'),t)},focus:function(t,i){var s=i.item.data('ui-selectmenu-item');null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger('focus',t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr('aria-activedescendant',e.menuItems.eq(s.index).attr('id'))}}).menu('instance'),this.menu.addClass('ui-corner-bottom').removeClass('ui-corner-all'),this.menuInstance._off(this.menu,'mouseleave'),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var t,e=this.element.find('option');e.length&&(this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find('li').not('.ui-selectmenu-optgroup'),t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data('ui-selectmenu-item')),this._setOption('disabled',this.element.prop('disabled')))},open:function(t){this.options.disabled||(this.menuItems?(this.menu.find('.ui-state-focus').removeClass('ui-state-focus'),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger('open',t))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this._off(this.document),this._trigger('close',t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(e,i){var s=this,n='';t.each(i,function(i,o){o.optgroup!==n&&(t('<li>',{class:'ui-selectmenu-optgroup ui-menu-divider'+(o.element.parent('optgroup').prop('disabled')?' ui-state-disabled':''),text:o.optgroup}).appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data('ui-selectmenu-item',e)},_renderItem:function(e,i){var s=t('<li>');return i.disabled&&s.addClass('ui-state-disabled'),this._setText(s,i.label),s.appendTo(e)},_setText:function(t,e){e?t.text(e):t.html('&#160;')},_move:function(t,e){var i,s,n='.ui-menu-item';this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=':not(.ui-state-disabled)'),(s='first'===t||'last'===t?i['first'===t?'prevAll':'nextAll'](n).eq(-1):i[t+'All'](n).eq(0)).length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(t){this[this.isOpen?'close':'open'](t)},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest('.ui-selectmenu-menu, #'+this.ids.button).length||this.close(e))}},_buttonEvents:{mousedown:function(t){t.preventDefault()},click:'_toggle',keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move('prev',e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move('next',e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move('prev',e);break;case t.ui.keyCode.RIGHT:this._move('next',e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move('first',e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move('last',e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex);e.hasClass('ui-state-disabled')||this._select(e.data('ui-selectmenu-item'),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this._setText(this.buttonText,t.label),this._setAria(t),this._trigger('select',e,{item:t}),t.index!==i&&this._trigger('change',e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr('id');this.button.attr({'aria-labelledby':e,'aria-activedescendant':e}),this.menu.attr('aria-activedescendant',e)},_setOption:function(t,e){'icons'===t&&this.button.find('span.ui-icon').removeClass(this.options.icons.button).addClass(e.button),this._super(t,e),'appendTo'===t&&this.menuWrap.appendTo(this._appendTo()),'disabled'===t&&(this.menuInstance.option('disabled',e),this.button.toggleClass('ui-state-disabled',e).attr('aria-disabled',e),this.element.prop('disabled',e),e?(this.button.attr('tabindex',-1),this.close()):this.button.attr('tabindex',0)),'width'===t&&this._resizeButton()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest('.ui-front')),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.toggleClass('ui-corner-top',this.isOpen).toggleClass('ui-corner-all',!this.isOpen).attr('aria-expanded',this.isOpen),this.menuWrap.toggleClass('ui-selectmenu-open',this.isOpen),this.menu.attr('aria-hidden',!this.isOpen)},_resizeButton:function(){var t=this.options.width;t||(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width('').outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop('disabled')}},_parseOptions:function(e){var i=[];e.each(function(e,s){var n=t(s),o=n.parent('optgroup');i.push({element:n,index:e,value:n.attr('value'),label:n.text(),optgroup:o.attr('label')||'',disabled:o.prop('disabled')||n.prop('disabled')})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr('for',this.ids.element)}}),t.widget('ui.slider',t.ui.mouse,{version:'1.11.1',widgetEventPrefix:'slide',options:{animate:!1,distance:0,max:100,min:0,orientation:'horizontal',range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass('ui-slider ui-slider-'+this.orientation+' ui-widget ui-widget-content ui-corner-all'),this._refresh(),this._setOption('disabled',this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find('.ui-slider-handle').addClass('ui-state-default ui-corner-all'),o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;e<i;e++)o.push('<span class=\'ui-slider-handle ui-state-default ui-corner-all\' tabindex=\'0\'></span>');this.handles=n.add(t(o.join('')).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data('ui-slider-handle-index',e)})},_createRange:function(){var e=this.options,i='';e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass('ui-slider-range-min ui-slider-range-max').css({left:'',bottom:''}):(this.range=t('<div></div>').appendTo(this.element),i='ui-slider-range ui-widget-header ui-corner-all'),this.range.addClass(i+('min'===e.range||'max'===e.range?' ui-slider-range-'+e.range:''))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass('ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all'),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l=this,c=this.options;return!c.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-l.values(e));(n>i||n===i&&(e===l._lastChangedValue||l.values(e)===c.min))&&(n=i,o=t(this),a=e)}),!1!==this._start(e,a)&&(this._mouseSliding=!0,this._handleIndex=a,o.addClass('ui-state-active').focus(),r=o.offset(),h=!t(e.target).parents().addBack().is('.ui-slider-handle'),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-r.left-o.width()/2,top:e.pageY-r.top-o.height()/2-(parseInt(o.css('borderTopWidth'),10)||0)-(parseInt(o.css('borderBottomWidth'),10)||0)+(parseInt(o.css('marginTop'),10)||0)},this.handles.hasClass('ui-state-hover')||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass('ui-state-active'),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation='vertical'===this.options.orientation?'vertical':'horizontal'},_normValueFromMouse:function(t){var e,i,s,n,o;return'horizontal'===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),(s=i/e)>1&&(s=1),s<0&&(s=0),'vertical'===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger('start',t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&!0===this.options.range&&(0===e&&i>s||1===e&&i<s)&&(i=s),i!==this.values(e)&&((n=this.values())[e]=i,o=this._trigger('slide',t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),!1!==o&&this.values(e,i))):i!==this.value()&&!1!==(o=this._trigger('slide',t,{handle:this.handles[e],value:i}))&&this.value(i)},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger('stop',t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger('change',t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;o<s.length;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch('range'===e&&!0===this.options.range&&('min'===i?(this.options.value=this._values(0),this.options.values=null):'max'===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),'disabled'===e&&this.element.toggleClass('ui-state-disabled',!!i),this._super(e,i),e){case'orientation':this._detectOrientation(),this.element.removeClass('ui-slider-horizontal ui-slider-vertical').addClass('ui-slider-'+this.orientation),this._refreshValue(),this.handles.css('horizontal'===i?'bottom':'left','');break;case'value':this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case'values':for(this._animateOff=!0,this._refreshValue(),s=0;s<n;s+=1)this._change(null,s);this._animateOff=!1;break;case'min':case'max':this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case'range':this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;s<i.length;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=!this._animateOff&&r.animate,c={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=(h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())*100,c['horizontal'===h.orientation?'left':'bottom']=i+'%',t(this).stop(1,1)[l?'animate':'css'](c,r.animate),!0===h.options.range&&('horizontal'===h.orientation?(0===s&&h.range.stop(1,1)[l?'animate':'css']({left:i+'%'},r.animate),1===s&&h.range[l?'animate':'css']({width:i-e+'%'},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?'animate':'css']({bottom:i+'%'},r.animate),1===s&&h.range[l?'animate':'css']({height:i-e+'%'},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?(s-n)/(o-n)*100:0,c['horizontal'===this.orientation?'left':'bottom']=i+'%',this.handle.stop(1,1)[l?'animate':'css'](c,r.animate),'min'===a&&'horizontal'===this.orientation&&this.range.stop(1,1)[l?'animate':'css']({width:i+'%'},r.animate),'max'===a&&'horizontal'===this.orientation&&this.range[l?'animate':'css']({width:100-i+'%'},{queue:!1,duration:r.animate}),'min'===a&&'vertical'===this.orientation&&this.range.stop(1,1)[l?'animate':'css']({height:i+'%'},r.animate),'max'===a&&'vertical'===this.orientation&&this.range[l?'animate':'css']({height:100-i+'%'},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(e){var i,s,n,o=t(e.target).data('ui-slider-handle-index');switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(e.target).addClass('ui-state-active'),!1===this._start(e,o)))return}switch(n=this.options.step,i=s=this.options.values&&this.options.values.length?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:s=this._valueMin();break;case t.ui.keyCode.END:s=this._valueMax();break;case t.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+n);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-n)}this._slide(e,o,s)},keyup:function(e){var i=t(e.target).data('ui-slider-handle-index');this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass('ui-state-active'))}}}),t.widget('ui.sortable',t.ui.mouse,{version:'1.11.1',widgetEventPrefix:'sort',ready:!1,options:{appendTo:'parent',axis:!1,connectWith:!1,containment:!1,cursor:'auto',cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:'original',items:'> *',opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:'default',tolerance:'intersect',zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&t<e+i},_isFloating:function(t){return/left|right/.test(t.css('float'))||/inline|table-cell/.test(t.css('display'))},_create:function(){var t=this.options;this.containerCache={},this.element.addClass('ui-sortable'),this.refresh(),this.floating=!!this.items.length&&('x'===t.axis||this._isFloating(this.items[0].item)),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),'handle'===t&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find('.ui-sortable-handle').removeClass('ui-sortable-handle'),t.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass('ui-sortable-handle')})},_destroy:function(){this.element.removeClass('ui-sortable ui-sortable-disabled').find('.ui-sortable-handle').removeClass('ui-sortable-handle'),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+'-item');return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return!this.reverting&&(!this.options.disabled&&'static'!==this.options.type&&(this._refreshItems(e),t(e.target).parents().each(function(){if(t.data(this,o.widgetName+'-item')===o)return s=t(this),!1}),t.data(e.target,o.widgetName+'-item')===o&&(s=t(e.target)),!!s&&(!(this.options.handle&&!i&&(t(this.options.handle,s).find('*').addBack().each(function(){this===e.target&&(n=!0)}),!n))&&(this.currentItem=s,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css('position','absolute'),this.cssPosition=this.helper.css('position'),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&'auto'!==a.cursor&&(o=this.document.find('body'),this.storedCursor=o.css('cursor'),o.css('cursor',a.cursor),this.storedStylesheet=t('<style>*{ cursor: '+a.cursor+' !important; }</style>').appendTo(o)),a.opacity&&(this.helper.css('opacity')&&(this._storedOpacity=this.helper.css('opacity')),this.helper.css('opacity',a.opacity)),a.zIndex&&(this.helper.css('zIndex')&&(this._storedZIndex=this.helper.css('zIndex')),this.helper.css('zIndex',a.zIndex)),this.scrollParent[0]!==document&&'HTML'!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger('start',e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger('activate',e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass('ui-sortable-helper'),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo('absolute'),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&'HTML'!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),!1!==r&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo('absolute'),this.options.axis&&'y'===this.options.axis||(this.helper[0].style.left=this.position.left+'px'),this.options.axis&&'x'===this.options.axis||(this.helper[0].style.top=this.position.top+'px'),i=this.items.length-1;i>=0;i--)if(n=(s=this.items[i]).item[0],(o=this._intersectsWithPointer(s))&&s.instance===this.currentContainer&&!(n===this.currentItem[0]||this.placeholder[1===o?'next':'prev']()[0]===n||t.contains(this.placeholder[0],n)||'semi-dynamic'===this.options.type&&t.contains(this.element[0],n))){if(this.direction=1===o?'down':'up','pointer'!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger('change',e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger('sort',e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&'x'!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&'y'!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),'original'===this.options.helper?this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper'):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger('deactivate',null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger('out',null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),'original'!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||'id')||'').match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+'[]')+'='+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+'='),s.join('&')},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||'id')||'')}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u='x'===this.options.axis||s+l>r&&s+l<h,d='y'===this.options.axis||e+c>o&&e+c<a,p=u&&d;return'pointer'===this.options.tolerance||this.options.forcePointerForContainers||'pointer'!==this.options.tolerance&&this.helperProportions[this.floating?'width':'height']>t[this.floating?'width':'height']?p:o<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<a&&r<s+this.helperProportions.height/2&&n-this.helperProportions.height/2<h},_intersectsWithPointer:function(t){var e='x'===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),i='y'===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),s=e&&i,n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return!!s&&(this.floating?o&&'right'===o||'down'===n?2:1:n&&('down'===n?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?'right'===n&&i||'left'===n&&!i:s&&('down'===s&&e||'up'===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?'down':'up')},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?'right':'left')},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,o,a=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(s=(n=t(h[i])).length-1;s>=0;s--)(o=t.data(n[s],this.widgetFullName))&&o!==this&&!o.options.disabled&&r.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),o]);function l(){a.push(this)}for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),this]),i=r.length-1;i>=0;i--)r[i][0].each(l);return t(a)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(':data('+this.widgetName+'-item)');this.items=t.grep(this.items,function(t){for(var i=0;i<e.length;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(s=(n=t(d[i])).length-1;s>=0;s--)(o=t.data(n[s],this.widgetFullName))&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],s=0,l=(r=u[i][0]).length;s<l;s++)(h=t(r[s])).data(this.widgetName+'-item',a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){var i,s,n,o;for(this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),i=this.items.length-1;i>=0;i--)(s=this.items[i]).instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){var i,s=(e=e||this).options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t('<'+s+'>',e.document[0]).addClass(i||e.currentItem[0].className+' ui-sortable-placeholder').removeClass('ui-sortable-helper');return'tr'===s?e.currentItem.children().each(function(){t('<td>&#160;</td>',e.document[0]).attr('colspan',t(this).attr('colspan')||1).appendTo(n)}):'img'===s&&n.attr('src',e.currentItem.attr('src')),i||n.css('visibility','hidden'),n},update:function(t,n){i&&!s.forcePlaceholderSize||(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css('paddingTop')||0,10)-parseInt(e.currentItem.css('paddingBottom')||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css('paddingLeft')||0,10)-parseInt(e.currentItem.css('paddingRight')||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger('out',e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger('over',e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,a=(c=d.floating||this._isFloating(this.currentItem))?'left':'top',r=c?'width':'height',u=c?'clientX':'clientY',s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),Math.abs(e[u]-h)<n&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?'up':'down'));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger('change',e,this._uiHash()),this.containers[p]._trigger('change',e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger('over',e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):'clone'===i.helper?this.currentItem.clone():this.currentItem;return s.parents('body').length||t('parent'!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css('position'),top:this.currentItem.css('top'),left:this.currentItem.css('left')}),s[0].style.width&&!i.forceHelperSize||s.width(this.currentItem.width()),s[0].style.height&&!i.forceHelperSize||s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){'string'==typeof e&&(e=e.split(' ')),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),'left'in e&&(this.offset.click.left=e.left+this.margins.left),'right'in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),'top'in e&&(this.offset.click.top=e.top+this.margins.top),'bottom'in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return'absolute'===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&'html'===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css('borderTopWidth'),10)||0),left:e.left+(parseInt(this.offsetParent.css('borderLeftWidth'),10)||0)}},_getRelativeOffset:function(){if('relative'===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css('top'),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css('left'),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css('marginLeft'),10)||0,top:parseInt(this.currentItem.css('marginTop'),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;'parent'===n.containment&&(n.containment=this.helper[0].parentNode),'document'!==n.containment&&'window'!==n.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t('document'===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t('document'===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s='hidden'!==t(e).css('overflow'),this.containment=[i.left+(parseInt(t(e).css('borderLeftWidth'),10)||0)+(parseInt(t(e).css('paddingLeft'),10)||0)-this.margins.left,i.top+(parseInt(t(e).css('borderTopWidth'),10)||0)+(parseInt(t(e).css('paddingTop'),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css('borderLeftWidth'),10)||0)-(parseInt(t(e).css('paddingRight'),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css('borderTopWidth'),10)||0)-(parseInt(t(e).css('paddingBottom'),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s='absolute'===e?1:-1,n='absolute'!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-('fixed'===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-('fixed'===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r='absolute'!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return'relative'!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+('fixed'===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+('fixed'===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],'down'===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)'auto'!==this._storedCSS[i]&&'static'!==this._storedCSS[i]||(this._storedCSS[i]='');this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper')}else this.currentItem.show();function n(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}for(this.fromOutside&&!e&&s.push(function(t){this._trigger('receive',t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not('.ui-sortable-helper')[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger('update',t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger('remove',t,this._uiHash())}),s.push(function(t){return function(e){t._trigger('receive',e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger('update',e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(n('deactivate',this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(n('out',this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find('body').css('cursor',this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css('opacity',this._storedOpacity),this._storedZIndex&&this.helper.css('zIndex','auto'===this._storedZIndex?'':this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger('beforeStop',t,this._uiHash()),i=0;i<s.length;i++)s[i].call(this,t);this._trigger('stop',t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger('beforeStop',t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;i<s.length;i++)s[i].call(this,t);this._trigger('stop',t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){!1===t.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})
/*!
 * jQuery UI Effects Blind 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */;
/*!
 * jQuery UI Spinner 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 */
function x(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger('change')}}var k;
/*!
 * jQuery UI Tabs 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */t.widget('ui.spinner',{version:'1.11.1',defaultElement:'<input>',widgetEventPrefix:'spin',options:{culture:null,icons:{down:'ui-icon-triangle-1-s',up:'ui-icon-triangle-1-n'},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption('max',this.options.max),this._setOption('min',this.options.min),this._setOption('step',this.options.step),''!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr('autocomplete')}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(['min','max','step'],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:'_stop',focus:function(){this.previous=this.element.val()},blur:function(t){this.cancelBlur?delete this.cancelBlur:(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger('change',t))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},'mousedown .ui-spinner-button':function(e){var i;function s(){this.element[0]===this.document[0].activeElement||(this.element.focus(),this.previous=i,this._delay(function(){this.previous=i}))}i=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),s.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,s.call(this)}),!1!==this._start(e)&&this._repeat(null,t(e.currentTarget).hasClass('ui-spinner-up')?1:-1,e)},'mouseup .ui-spinner-button':'_stop','mouseenter .ui-spinner-button':function(e){if(t(e.currentTarget).hasClass('ui-state-active'))return!1!==this._start(e)&&void this._repeat(null,t(e.currentTarget).hasClass('ui-spinner-up')?1:-1,e)},'mouseleave .ui-spinner-button':'_stop'},_draw:function(){var t=this.uiSpinner=this.element.addClass('ui-spinner-input').attr('autocomplete','off').wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr('role','spinbutton'),this.buttons=t.find('.ui-spinner-button').attr('tabIndex',-1).button().removeClass('ui-corner-all'),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return'<span class=\'ui-spinner ui-widget ui-widget-content ui-corner-all\'></span>'},_buttonHtml:function(){return'<a class=\'ui-spinner-button ui-spinner-up ui-corner-tr\'><span class=\'ui-icon '+this.options.icons.up+'\'>&#9650;</span></a><a class=\'ui-spinner-button ui-spinner-down ui-corner-br\'><span class=\'ui-icon '+this.options.icons.down+'\'>&#9660;</span></a>'},_start:function(t){return!(!this.spinning&&!1===this._trigger('start',t))&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger('spin',e,{value:i})||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf('.');return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return i=t-(e=null!==s.min?s.min:0),t=e+(i=Math.round(i/s.step)*s.step),t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&t<s.min?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger('stop',t))},_setOption:function(t,e){if('culture'===t||'numberFormat'===t){var i=this._parse(this.element.val());return this.options[t]=e,void this.element.val(this._format(i))}'max'!==t&&'min'!==t&&'step'!==t||'string'==typeof e&&(e=this._parse(e)),'icons'===t&&(this.buttons.first().find('.ui-icon').removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find('.ui-icon').removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),'disabled'===t&&(this.widget().toggleClass('ui-state-disabled',!!e),this.element.prop('disabled',!!e),this.buttons.button(e?'disable':'enable'))},_setOptions:x(function(t){this._super(t)}),_parse:function(t){return'string'==typeof t&&''!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),''===t||isNaN(t)?null:t},_format:function(t){return''===t?'':window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({'aria-valuemin':this.options.min,'aria-valuemax':this.options.max,'aria-valuenow':this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;''!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass('ui-spinner-input').prop('disabled',!1).removeAttr('autocomplete').removeAttr('role').removeAttr('aria-valuemin').removeAttr('aria-valuemax').removeAttr('aria-valuenow'),this.uiSpinner.replaceWith(this.element)},stepUp:x(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:x(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:x(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:x(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){if(!arguments.length)return this._parse(this.element.val());x(this._value).call(this,t)},widget:function(){return this.uiSpinner}}),t.widget('ui.tabs',{version:'1.11.1',delay:300,options:{active:null,collapsible:!1,event:'click',heightStyle:'content',hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(k=/#.*$/,function(t){var e,i;e=(t=t.cloneNode(!1)).href.replace(k,''),i=location.href.replace(k,'');try{e=decodeURIComponent(e)}catch(t){}try{i=decodeURIComponent(i)}catch(t){}return t.hash.length>1&&e===i}),_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass('ui-tabs ui-widget ui-widget-content ui-corner-all').toggleClass('ui-tabs-collapsible',i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter('.ui-state-disabled'),function(t){return e.tabs.index(t)}))).sort()),!1!==this.options.active&&this.anchors.length?this.active=this._findActive(i.active):this.active=t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){if(t(n).attr('aria-controls')===s)return e=i,!1}),null===e&&(e=this.tabs.index(this.tabs.filter('.ui-tabs-active'))),null!==e&&-1!==e||(e=!!this.tabs.length&&0)),!1!==e&&-1===(e=this.tabs.index(this.tabs.eq(e)))&&(e=!i&&0),!i&&!1===e&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(this.document[0].activeElement).closest('li'),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(s);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(s!==this.options.active&&s);default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||(i.attr('aria-selected','false'),this.tabs.eq(s).attr('aria-selected','true'),this.activating=this._delay(function(){this.option('active',s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){var s=this.tabs.length-1;for(;-1!==t.inArray((e>s&&(e=0),e<0&&(e=s),e),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){'active'!==t?'disabled'!==t?(this._super(t,e),'collapsible'===t&&(this.element.toggleClass('ui-tabs-collapsible',e),e||!1!==this.options.active||this._activate(0)),'event'===t&&this._setupEvents(e),'heightStyle'===t&&this._setupHeightStyle(e)):this._setupDisabled(e):this._activate(e)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,'\\$&'):''},refresh:function(){var e=this.options,i=this.tablist.children(':has(a[href])');e.disabled=t.map(i.filter('.ui-state-disabled'),function(t){return i.index(t)}),this._processTabs(),!1!==e.active&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({'aria-selected':'false','aria-expanded':'false',tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({'aria-hidden':'true'}),this.active.length?(this.active.addClass('ui-tabs-active ui-state-active').attr({'aria-selected':'true','aria-expanded':'true',tabIndex:0}),this._getPanelForTab(this.active).show().attr({'aria-hidden':'false'})):this.tabs.eq(0).attr('tabIndex',0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').attr('role','tablist').delegate('> li','mousedown'+this.eventNamespace,function(e){t(this).is('.ui-state-disabled')&&e.preventDefault()}).delegate('.ui-tabs-anchor','focus'+this.eventNamespace,function(){t(this).closest('li').is('.ui-state-disabled')&&this.blur()}),this.tabs=this.tablist.find('> li:has(a[href])').addClass('ui-state-default ui-corner-top').attr({role:'tab',tabIndex:-1}),this.anchors=this.tabs.map(function(){return t('a',this)[0]}).addClass('ui-tabs-anchor').attr({role:'presentation',tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr('id'),h=t(s).closest('li'),l=h.attr('aria-controls');e._isLocal(s)?(a=(n=s.hash).substring(1),o=e.element.find(e._sanitizeSelector(n))):(n='#'+(a=h.attr('aria-controls')||t({}).uniqueId()[0].id),(o=e.element.find(n)).length||(o=e._createPanel(a)).insertAfter(e.panels[i-1]||e.tablist),o.attr('aria-live','polite')),o.length&&(e.panels=e.panels.add(o)),l&&h.data('ui-tabs-aria-controls',l),h.attr({'aria-controls':a,'aria-labelledby':r}),o.attr('aria-labelledby',r)}),this.panels.addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').attr('role','tabpanel')},_getList:function(){return this.tablist||this.element.find('ol,ul').eq(0)},_createPanel:function(e){return t('<div>').attr('id',e).addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').data('ui-tabs-destroy',!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)!0===e||-1!==t.inArray(s,e)?t(i).addClass('ui-state-disabled').attr('aria-disabled','true'):t(i).removeClass('ui-state-disabled').removeAttr('aria-disabled');this.options.disabled=e},_setupEvents:function(e){var i={};e&&t.each(e.split(' '),function(t,e){i[e]='_eventHandler'}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:'_tabKeydown'}),this._on(this.panels,{keydown:'_panelKeydown'}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();'fill'===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(':visible').each(function(){var e=t(this),s=e.css('position');'absolute'!==s&&'fixed'!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css('overflow','auto')):'auto'===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height('').height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget).closest('li'),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():this._getPanelForTab(n),h=s.length?this._getPanelForTab(s):t(),l={oldTab:s,oldPanel:h,newTab:a?t():n,newPanel:r};e.preventDefault(),n.hasClass('ui-state-disabled')||n.hasClass('ui-tabs-loading')||this.running||o&&!i.collapsible||!1===this._trigger('beforeActivate',e,l)||(i.active=!a&&this.tabs.index(n),this.active=o?t():n,this.xhr&&this.xhr.abort(),h.length||r.length||t.error('jQuery UI Tabs: Mismatching fragment identifier.'),r.length&&this.load(this.tabs.index(n),e),this._toggle(e,l))},_toggle:function(e,i){var s=this,n=i.newPanel,o=i.oldPanel;function a(){s.running=!1,s._trigger('activate',e,i)}function r(){i.newTab.closest('li').addClass('ui-tabs-active ui-state-active'),n.length&&s.options.show?s._show(n,s.options.show,a):(n.show(),a())}this.running=!0,o.length&&this.options.hide?this._hide(o,this.options.hide,function(){i.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'),r()}):(i.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'),o.hide(),r()),o.attr('aria-hidden','true'),i.oldTab.attr({'aria-selected':'false','aria-expanded':'false'}),n.length&&o.length?i.oldTab.attr('tabIndex',-1):n.length&&this.tabs.filter(function(){return 0===t(this).attr('tabIndex')}).attr('tabIndex',-1),n.attr('aria-hidden','false'),i.newTab.attr({'aria-selected':'true','aria-expanded':'true',tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find('.ui-tabs-anchor')[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return!1===e?t():this.tabs.eq(e)},_getIndex:function(t){return'string'==typeof t&&(t=this.anchors.index(this.anchors.filter('[href$=\''+t+'\']'))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass('ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible'),this.tablist.removeClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').removeAttr('role'),this.anchors.removeClass('ui-tabs-anchor').removeAttr('role').removeAttr('tabIndex').removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){t.data(this,'ui-tabs-destroy')?t(this).remove():t(this).removeClass('ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel').removeAttr('tabIndex').removeAttr('aria-live').removeAttr('aria-busy').removeAttr('aria-selected').removeAttr('aria-labelledby').removeAttr('aria-hidden').removeAttr('aria-expanded').removeAttr('role')}),this.tabs.each(function(){var e=t(this),i=e.data('ui-tabs-aria-controls');i?e.attr('aria-controls',i).removeData('ui-tabs-aria-controls'):e.removeAttr('aria-controls')}),this.panels.show(),'content'!==this.options.heightStyle&&this.panels.css('height','')},enable:function(e){var i=this.options.disabled;!1!==i&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setupDisabled(i))},disable:function(e){var i=this.options.disabled;if(!0!==i){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setupDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find('.ui-tabs-anchor'),a=this._getPanelForTab(n),r={tab:n,panel:a};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&'canceled'!==this.xhr.statusText&&(n.addClass('ui-tabs-loading'),a.attr('aria-busy','true'),this.xhr.success(function(t){setTimeout(function(){a.html(t),s._trigger('load',i,r)},1)}).complete(function(t,e){setTimeout(function(){'abort'===e&&s.panels.stop(!1,!0),n.removeClass('ui-tabs-loading'),a.removeAttr('aria-busy'),t===s.xhr&&delete s.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr('href'),beforeSend:function(e,o){return n._trigger('beforeLoad',i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr('aria-controls');return this.element.find(this._sanitizeSelector('#'+i))}}),t.widget('ui.tooltip',{version:'1.11.1',options:{content:function(){var e=t(this).attr('title')||'';return t('<a>').text(e).html()},hide:!0,items:'[title]:not([disabled])',position:{my:'left top+15',at:'left bottom',collision:'flipfit flip'},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr('aria-describedby')||'').split(/\s+/);s.push(i),e.data('ui-tooltip-id',i).attr('aria-describedby',t.trim(s.join(' ')))},_removeDescribedBy:function(e){var i=e.data('ui-tooltip-id'),s=(e.attr('aria-describedby')||'').split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData('ui-tooltip-id'),(s=t.trim(s.join(' ')))?e.attr('aria-describedby',s):e.removeAttr('aria-describedby')},_create:function(){this._on({mouseover:'open',focusin:'open'}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=t('<div>').attr({role:'log','aria-live':'assertive','aria-relevant':'additions'}).addClass('ui-helper-hidden-accessible').appendTo(this.document[0].body)},_setOption:function(e,i){var s=this;if('disabled'===e)return this[i?'_disable':'_enable'](),void(this.options[e]=i);this._super(e,i),'content'===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)})},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event('blur');n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is('[title]')&&e.data('ui-tooltip-title',e.attr('title')).removeAttr('title')})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data('ui-tooltip-title')&&e.attr('title',e.data('ui-tooltip-title'))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data('ui-tooltip-id')&&(s.attr('title')&&s.data('ui-tooltip-title',s.attr('title')),s.data('ui-tooltip-open',!0),e&&'mouseover'===e.type&&s.parents().each(function(){var e,s=t(this);s.data('ui-tooltip-open')&&((e=t.Event('blur')).target=e.currentTarget=this,i.close(e,!0)),s.attr('title')&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr('title')},s.attr('title',''))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;if('string'==typeof s)return this._open(e,t,s);(i=s.call(t[0],function(i){t.data('ui-tooltip-open')&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}))&&this._open(e,t,i)},_open:function(e,i,s){var n,o,a,r,h=t.extend({},this.options.position);function l(t){h.of=t,n.is(':hidden')||n.position(h)}s&&((n=this._find(i)).length?n.find('.ui-tooltip-content').html(s):(i.is('[title]')&&(e&&'mouseover'===e.type?i.attr('title',''):i.removeAttr('title')),n=this._tooltip(i),this._addDescribedBy(i,n.attr('id')),n.find('.ui-tooltip-content').html(s),this.liveRegion.children().hide(),s.clone?(r=s.clone()).removeAttr('id').find('[id]').removeAttr('id'):r=s,t('<div>').html(r).appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:l}),l(e)):n.position(t.extend({of:i},this.options.position)),this.hiding=!1,this.closing=!1,n.hide(),this._show(n,this.options.show),this.options.show&&this.options.show.delay&&(a=this.delayedShow=setInterval(function(){n.is(':visible')&&(l(h.of),clearInterval(a))},t.fx.interval)),this._trigger('open',e,{tooltip:n}),o={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}},i[0]!==this.element[0]&&(o.remove=function(){this._removeTooltip(n)}),e&&'mouseover'!==e.type||(o.mouseleave='close'),e&&'focusin'!==e.type||(o.focusout='close'),this._on(!0,i,o)))},close:function(e){var i=this,s=t(e?e.currentTarget:this.element),n=this._find(s);this.closing||(clearInterval(this.delayedShow),s.data('ui-tooltip-title')&&!s.attr('title')&&s.attr('title',s.data('ui-tooltip-title')),this._removeDescribedBy(s),this.hiding=!0,n.stop(!0),this._hide(n,this.options.hide,function(){i._removeTooltip(t(this)),this.hiding=!1,this.closing=!1}),s.removeData('ui-tooltip-open'),this._off(s,'mouseleave focusout keyup'),s[0]!==this.element[0]&&this._off(s,'remove'),this._off(this.document,'mousemove'),e&&'mouseleave'===e.type&&t.each(this.parents,function(e,s){t(s.element).attr('title',s.title),delete i.parents[e]}),this.closing=!0,this._trigger('close',e,{tooltip:n}),this.hiding||(this.closing=!1))},_tooltip:function(e){var i=t('<div>').attr('role','tooltip').addClass('ui-tooltip ui-widget ui-corner-all ui-widget-content '+(this.options.tooltipClass||'')),s=i.uniqueId().attr('id');return t('<div>').addClass('ui-tooltip-content').appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]=e,i},_find:function(e){var i=e.data('ui-tooltip-id');return i?t('#'+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr('id')]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event('blur');n.target=n.currentTarget=s[0],e.close(n,!0),t('#'+i).remove(),s.data('ui-tooltip-title')&&(s.attr('title')||s.attr('title',s.data('ui-tooltip-title')),s.removeData('ui-tooltip-title'))}),this.liveRegion.remove()}})});

/**
 * @popperjs/core v2.11.6 - MIT License
 */
!function(e,t){'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define('@popperjs/core',['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).Popper={})}(this,function(e){'use strict';function t(e){if(null==e)return window;if('[object Window]'!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return'undefined'!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+'/'+e.version}).join(' '):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var l=(n(e)?t(e):window).visualViewport,u=!c()&&i,d=(a.left+(u&&l?l.offsetLeft:0))/f,m=(a.top+(u&&l?l.offsetTop:0))/p,h=a.width/f,v=a.height/p;return{width:h,height:v,top:m,right:d+h,bottom:m+v,left:d,x:d,y:m}}function l(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function u(e){return e?(e.nodeName||'').toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function m(e){return p(d(e)).left+l(e).scrollLeft}function h(e){return t(e).getComputedStyle(e)}function v(e){var t=h(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function g(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),h=d(n),g=p(e,c,o),y={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(('body'!==u(n)||v(h))&&(y=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:l(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):h&&(b.x=m(h))),{x:g.left+y.scrollLeft-b.x,y:g.top+y.scrollTop-b.y,width:g.width,height:g.height}}function y(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return'html'===u(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function w(e,n){var o;void 0===n&&(n=[]);var i=function e(t){return['html','body','#document'].indexOf(u(t))>=0?t.ownerDocument.body:r(t)&&v(t)?t:e(b(t))}(e),a=i===(null==(o=e.ownerDocument)?void 0:o.body),s=t(i),f=a?[s].concat(s.visualViewport||[],v(i)?i:[]):i,c=n.concat(f);return a?c:c.concat(w(b(f)))}function x(e){return['table','td','th'].indexOf(u(e))>=0}function O(e){return r(e)&&'fixed'!==h(e).position?e.offsetParent:null}function j(e){for(var n=t(e),i=O(e);i&&x(i)&&'static'===h(i).position;)i=O(i);return i&&('html'===u(i)||'body'===u(i)&&'static'===h(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&'fixed'===h(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&['html','body'].indexOf(u(n))<0;){var i=h(n);if('none'!==i.transform||'none'!==i.perspective||'paint'===i.contain||-1!==['transform','perspective'].indexOf(i.willChange)||t&&'filter'===i.willChange||t&&i.filter&&'none'!==i.filter)return n;n=n.parentNode}return null}(e)||n}var E='top',S='bottom',P='right',A='left',D='auto',k=[E,S,P,A],L='start',M='end',T='clippingParents',q='viewport',W='popper',H='reference',B=k.reduce(function(e,t){return e.concat([t+'-'+L,t+'-'+M])},[]),R=[].concat(k,[D]).reduce(function(e,t){return e.concat([t,t+'-'+L,t+'-'+M])},[]),C=['beforeRead','read','afterRead','beforeMain','main','afterMain','beforeWrite','write','afterWrite'];function V(e){var t=new Map,n=new Set,r=[];return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach(function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}}),r.push(o)}(e)}),r}function I(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return[].concat(n).reduce(function(e,t){return e.replace(/%s/,t)},e)}var N='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',F='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',U=['name','enabled','phase','fn','effect','requires','options'];function _(e){return e.split('-')[0]}function z(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function G(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function X(e,r,o){return r===q?G(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var l=c();(l||!l&&'fixed'===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+m(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,'fixed'===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):G(function(e){var t,n=d(e),r=l(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+m(e),c=-r.scrollTop;return'rtl'===h(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function Y(e,t,o,s){var f='clippingParents'===t?function(e){var t=w(b(e)),o=['absolute','fixed'].indexOf(h(e).position)>=0&&r(e)?j(e):e;return n(o)?t.filter(function(e){return n(e)&&z(e,o)&&'body'!==u(e)}):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],l=c.reduce(function(t,n){var r=X(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t},X(e,p,s));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function J(e){return e.split('-')[1]}function K(e){return['top','bottom'].indexOf(e)>=0?'x':'y'}function Q(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?_(o):null,a=o?J(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case E:t={x:s,y:n.y-r.height};break;case S:t={x:s,y:n.y+n.height};break;case P:t={x:n.x+n.width,y:f};break;case A:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?K(i):null;if(null!=c){var p='y'===c?'height':'width';switch(a){case L:t[c]=t[c]-(n[p]/2-r[p]/2);break;case M:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function $(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function ee(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?T:f,l=r.rootBoundary,u=void 0===l?q:l,m=r.elementContext,h=void 0===m?W:m,v=r.altBoundary,g=void 0!==v&&v,y=r.padding,b=void 0===y?0:y,w=Z('number'!=typeof b?b:$(b,k)),x=h===W?H:W,O=e.rects.popper,j=e.elements[g?x:h],A=Y(n(j)?j:j.contextElement||d(e.elements.popper),c,u,s),D=p(e.elements.reference),L=Q({reference:D,element:O,strategy:'absolute',placement:i}),M=G(Object.assign({},O,L)),B=h===W?M:D,R={top:A.top-B.top+w.top,bottom:B.bottom-A.bottom+w.bottom,left:A.left-B.left+w.left,right:B.right-A.right+w.right},C=e.modifiersData.offset;if(h===W&&C){var V=C[i];Object.keys(R).forEach(function(e){var t=[P,S].indexOf(e)>=0?1:-1,n=[E,S].indexOf(e)>=0?'y':'x';R[e]+=V[n]*t})}return R}var te='Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',ne='Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',re={placement:'bottom',modifiers:[],strategy:'absolute'};function oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&'function'==typeof e.getBoundingClientRect)})}function ie(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?re:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:'bottom',orderedModifiers:[],options:Object.assign({},re,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,l={state:f,setOptions:function(r){var i='function'==typeof r?r(f.options):r;u(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var s=function(e){var t=V(e);return C.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}(function(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}([].concat(o,f.options.modifiers)));(f.orderedModifiers=s.filter(function(e){return e.enabled}),function(e){e.forEach(function(t){[].concat(Object.keys(t),U).filter(function(e,t,n){return n.indexOf(e)===t}).forEach(function(n){switch(n){case'name':'string'!=typeof t.name&&console.error(I(N,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case'enabled':'boolean'!=typeof t.enabled&&console.error(I(N,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));break;case'phase':C.indexOf(t.phase)<0&&console.error(I(N,t.name,'"phase"','either '+C.join(', '),'"'+String(t.phase)+'"'));break;case'fn':'function'!=typeof t.fn&&console.error(I(N,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case'effect':null!=t.effect&&'function'!=typeof t.effect&&console.error(I(N,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case'requires':null==t.requires||Array.isArray(t.requires)||console.error(I(N,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case'requiresIfExists':Array.isArray(t.requiresIfExists)||console.error(I(N,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case'options':case'data':break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+U.map(function(e){return'"'+e+'"'}).join(', ')+'; but "'+n+'" was provided.')}t.requires&&t.requires.forEach(function(n){null==e.find(function(e){return e.name===n})&&console.error(I(F,String(t.name),n,n))})})})}((p=[].concat(s,f.options.modifiers),d=function(e){return e.name},m=new Set,p.filter(function(e){var t=d(e);if(!m.has(t))return m.add(t),!0}))),_(f.options.placement)===D)&&(f.orderedModifiers.find(function(e){return'flip'===e.name})||console.error(['Popper: "auto" placements require the "flip" modifier be','present and enabled to work.'].join(' ')));var p,d,m,v=h(t);return[v.marginTop,v.marginRight,v.marginBottom,v.marginLeft].some(function(e){return parseFloat(e)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding','between the popper and its reference element or boundary.','To replicate margin, use the `offset` modifier, as well as','the `padding` option in the `preventOverflow` and `flip`','modifiers.'].join(' ')),f.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if('function'==typeof o){var i=o({state:f,name:t,instance:l,options:r});c.push(i||function(){})}}),l.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(oe(t,n)){f.rects={reference:g(t,j(n),'fixed'===f.options.strategy),popper:y(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(e){return f.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0,o=0;o<f.orderedModifiers.length;o++){if((r+=1)>100){console.error(ne);break}if(!0!==f.reset){var i=f.orderedModifiers[o],a=i.fn,s=i.options,c=void 0===s?{}:s,u=i.name;'function'==typeof a&&(f=a({state:f,options:c,name:u,instance:l})||f)}else f.reset=!1,o=-1}}else console.error(te)}},update:(i=function(){return new Promise(function(e){l.forceUpdate(),e(f)})},function(){return s||(s=new Promise(function(e){Promise.resolve().then(function(){s=void 0,e(i())})})),s}),destroy:function(){u(),p=!0}};if(!oe(e,t))return console.error(te),l;function u(){c.forEach(function(e){return e()}),c=[]}return l.setOptions(r).then(function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)}),l}}var ae={passive:!0};var se={name:'eventListeners',enabled:!0,phase:'write',fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach(function(e){e.addEventListener('scroll',r.update,ae)}),f&&c.addEventListener('resize',r.update,ae),function(){a&&p.forEach(function(e){e.removeEventListener('scroll',r.update,ae)}),f&&c.removeEventListener('resize',r.update,ae)}},data:{}};var fe={name:'popperOffsets',enabled:!0,phase:'read',fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Q({reference:t.rects.reference,element:t.rects.popper,strategy:'absolute',placement:t.placement})},data:{}},ce={top:'auto',right:'auto',bottom:'auto',left:'auto'};function pe(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,m=e.isFixed,v=f.x,g=void 0===v?0:v,y=f.y,b=void 0===y?0:y,w='function'==typeof u?u({x:g,y:b}):{x:g,y:b};g=w.x,b=w.y;var x=f.hasOwnProperty('x'),O=f.hasOwnProperty('y'),D=A,k=E,L=window;if(l){var T=j(r),q='clientHeight',W='clientWidth';if(T===t(r)&&'static'!==h(T=d(r)).position&&'absolute'===c&&(q='scrollHeight',W='scrollWidth'),T=T,i===E||(i===A||i===P)&&a===M)k=S,b-=(m&&T===L&&L.visualViewport?L.visualViewport.height:T[q])-o.height,b*=p?1:-1;if(i===A||(i===E||i===S)&&a===M)D=P,g-=(m&&T===L&&L.visualViewport?L.visualViewport.width:T[W])-o.width,g*=p?1:-1}var H,B=Object.assign({position:c},l&&ce),R=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:s(t*r)/r||0,y:s(n*r)/r||0}}({x:g,y:b}):{x:g,y:b};return g=R.x,b=R.y,p?Object.assign({},B,((H={})[k]=O?'0':'',H[D]=x?'0':'',H.transform=(L.devicePixelRatio||1)<=1?'translate('+g+'px, '+b+'px)':'translate3d('+g+'px, '+b+'px, 0)',H)):Object.assign({},B,((n={})[k]=O?b+'px':'',n[D]=x?g+'px':'',n.transform='',n))}var le={name:'computeStyles',enabled:!0,phase:'beforeWrite',fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c=h(t.elements.popper).transitionProperty||'';a&&['transform','top','right','bottom','left'].some(function(e){return c.indexOf(e)>=0})&&console.warn(['Popper: Detected CSS transitions on at least one of the following','CSS properties: "transform", "top", "right", "bottom", "left".','\n\n','Disable the "computeStyles" modifier\'s `adaptive` option to allow','for smooth transitions, or remove these properties from the CSS','transition declaration on the popper element if only transitioning','opacity or background-color for example.','\n\n','We recommend using the popper element as a wrapper around an inner','element that can have any CSS property transitioned for animations.'].join(' '));var p={placement:_(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:'fixed'===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,pe(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,pe(Object.assign({},p,{offsets:t.modifiersData.arrow,position:'absolute',adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{'data-popper-placement':t.placement})},data:{}};var ue={name:'applyStyles',enabled:!0,phase:'write',fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&u(i)&&(Object.assign(i.style,n),Object.keys(o).forEach(function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?'':t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]='',e},{});r(o)&&u(o)&&(Object.assign(o.style,a),Object.keys(i).forEach(function(e){o.removeAttribute(e)}))})}},requires:['computeStyles']};var de={name:'offset',enabled:!0,phase:'main',requires:['popperOffsets'],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=R.reduce(function(e,n){return e[n]=function(e,t,n){var r=_(e),o=[A,E].indexOf(r)>=0?-1:1,i='function'==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[A,P].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},me={left:'right',right:'left',bottom:'top',top:'bottom'};function he(e){return e.replace(/left|right|bottom|top/g,function(e){return me[e]})}var ve={start:'end',end:'start'};function ge(e){return e.replace(/start|end/g,function(e){return ve[e]})}function ye(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?R:f,p=J(r),l=p?s?B:B.filter(function(e){return J(e)===p}):k,u=l.filter(function(e){return c.indexOf(e)>=0});0===u.length&&(u=l,console.error(['Popper: The `allowedAutoPlacements` option did not allow any','placements. Ensure the `placement` option matches the variation','of the allowed placements.','For example, "auto" cannot be used to allow "bottom-start".','Use "auto-start" instead.'].join(' ')));var d=u.reduce(function(t,n){return t[n]=ee(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[_(n)],t},{});return Object.keys(d).sort(function(e,t){return d[e]-d[t]})}var be={name:'flip',enabled:!0,phase:'main',fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=_(v),y=f||(g!==v&&m?function(e){if(_(e)===D)return[];var t=he(e);return[ge(e),t,ge(t)]}(v):[he(v)]),b=[v].concat(y).reduce(function(e,n){return e.concat(_(n)===D?ye(t,{placement:n,boundary:p,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,k=b[0],M=0;M<b.length;M++){var T=b[M],q=_(T),W=J(T)===L,H=[E,S].indexOf(q)>=0,B=H?'width':'height',R=ee(t,{placement:T,boundary:p,rootBoundary:l,altBoundary:u,padding:c}),C=H?W?P:A:W?S:E;w[B]>x[B]&&(C=he(C));var V=he(C),I=[];if(i&&I.push(R[q]<=0),s&&I.push(R[C]<=0,R[V]<=0),I.every(function(e){return e})){k=T,j=!1;break}O.set(T,I)}if(j)for(var N=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return k=t,'break'},F=m?3:1;F>0&&'break'!==N(F);F--);t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:['offset'],data:{_skip:!1}};function we(e,t,n){return i(e,a(t,n))}var xe={name:'preventOverflow',enabled:!0,phase:'main',fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,g=void 0===v?0:v,b=ee(t,{boundary:p,rootBoundary:l,padding:d,altBoundary:u}),w=_(t.placement),x=J(t.placement),O=!x,D=K(w),k='x'===D?'y':'x',M=t.modifiersData.popperOffsets,T=t.rects.reference,q=t.rects.popper,W='function'==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,H='number'==typeof W?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(M){if(s){var C,V='y'===D?E:A,I='y'===D?S:P,N='y'===D?'height':'width',F=M[D],U=F+b[V],z=F-b[I],G=h?-q[N]/2:0,X=x===L?T[N]:q[N],Y=x===L?-q[N]:-T[N],Q=t.elements.arrow,Z=h&&Q?y(Q):{width:0,height:0},$=t.modifiersData['arrow#persistent']?t.modifiersData['arrow#persistent'].padding:{top:0,right:0,bottom:0,left:0},te=$[V],ne=$[I],re=we(0,T[N],Z[N]),oe=O?T[N]/2-G-re-te-H.mainAxis:X-re-te-H.mainAxis,ie=O?-T[N]/2+G+re+ne+H.mainAxis:Y+re+ne+H.mainAxis,ae=t.elements.arrow&&j(t.elements.arrow),se=ae?'y'===D?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(C=null==B?void 0:B[D])?C:0,ce=F+ie-fe,pe=we(h?a(U,F+oe-fe-se):U,F,h?i(z,ce):z);M[D]=pe,R[D]=pe-F}if(c){var le,ue='x'===D?E:A,de='x'===D?S:P,me=M[k],he='y'===k?'height':'width',ve=me+b[ue],ge=me-b[de],ye=-1!==[E,A].indexOf(w),be=null!=(le=null==B?void 0:B[k])?le:0,xe=ye?ve:me-T[he]-q[he]-be+H.altAxis,Oe=ye?me+T[he]+q[he]-be-H.altAxis:ge,je=h&&ye?function(e,t,n){var r=we(e,t,n);return r>n?n:r}(xe,me,Oe):we(h?xe:ve,me,h?Oe:ge);M[k]=je,R[k]=je-me}t.modifiersData[r]=R}},requiresIfExists:['offset']},Oe=function(e,t){return Z('number'!=typeof(e='function'==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:$(e,k))};var je={name:'arrow',enabled:!0,phase:'main',fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=_(n.placement),f=K(s),c=[A,P].indexOf(s)>=0?'height':'width';if(i&&a){var p=Oe(o.padding,n),l=y(i),u='y'===f?E:A,d='y'===f?S:P,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=j(i),g=v?'y'===f?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,w=p[u],x=g-l[c]-p[d],O=g/2-l[c]/2+b,D=we(w,O,x),k=f;n.modifiersData[r]=((t={})[k]=D,t.centerOffset=D-O,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?'[data-popper-arrow]':n;null!=o&&('string'!=typeof o||(o=t.elements.popper.querySelector(o)))&&(r(o)||console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).','To use an SVG arrow, wrap it in an HTMLElement that will be used as','the arrow.'].join(' ')),z(t.elements.popper,o)?t.elements.arrow=o:console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper','element.'].join(' ')))},requires:['popperOffsets'],requiresIfExists:['preventOverflow']};function Ee(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Se(e){return[E,P,S,A].some(function(t){return e[t]>=0})}var Pe={name:'hide',enabled:!0,phase:'main',requiresIfExists:['preventOverflow'],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ee(t,{elementContext:'reference'}),s=ee(t,{altBoundary:!0}),f=Ee(a,r),c=Ee(s,o,i),p=Se(f),l=Se(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{'data-popper-reference-hidden':p,'data-popper-escaped':l})}},Ae=ie({defaultModifiers:[se,fe,le,ue]}),De=[se,fe,le,ue,de,be,xe,je,Pe],ke=ie({defaultModifiers:De});e.applyStyles=ue,e.arrow=je,e.computeStyles=le,e.createPopper=ke,e.createPopperLite=Ae,e.defaultModifiers=De,e.detectOverflow=ee,e.eventListeners=se,e.flip=be,e.hide=Pe,e.offset=de,e.popperGenerator=ie,e.popperOffsets=fe,e.preventOverflow=xe,Object.defineProperty(e,'__esModule',{value:!0})});

/*!
  * Bootstrap v5.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){'object'==typeof exports&&'undefined'!=typeof module?module.exports=e(require('@popperjs/core')):'function'==typeof define&&define.amd?define('bootstrap',['@popperjs/core'],e):(t='undefined'!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,function(t){'use strict';const e=function(t){if(t&&t.__esModule)return t;const e=Object.create(null,{[Symbol.toStringTag]:{value:'Module'}});if(t)for(const i in t)if('default'!==i){const s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}(t),i=t=>null===t||void 0===t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),s=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},n=t=>{let e=t.getAttribute('data-bs-target');if(!e||'#'===e){let i=t.getAttribute('href');if(!i||!i.includes('#')&&!i.startsWith('.'))return null;i.includes('#')&&!i.startsWith('#')&&(i=`#${i.split('#')[1]}`),e=i&&'#'!==i?i.trim():null}return e},o=t=>{const e=n(t);return e&&document.querySelector(e)?e:null},r=t=>{const e=n(t);return e?document.querySelector(e):null},a=t=>{t.dispatchEvent(new Event('transitionend'))},l=t=>!(!t||'object'!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:'string'==typeof t&&t.length>0?document.querySelector(t):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return!1;const e='visible'===getComputedStyle(t).getPropertyValue('visibility'),i=t.closest('details:not([open])');if(!i)return e;if(i!==t){const e=t.closest('summary');if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains('disabled')||(void 0!==t.disabled?t.disabled:t.hasAttribute('disabled')&&'false'!==t.getAttribute('disabled'))),u=t=>{if(!document.documentElement.attachShadow)return null;if('function'==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},f=t=>{t.offsetHeight},g=()=>window.jQuery&&!document.body.hasAttribute('data-bs-no-jquery')?window.jQuery:null,p=[],m=()=>'rtl'===document.documentElement.dir,b=t=>{v=(()=>{const e=g();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=(()=>(e.fn[i]=s,t.jQueryInterface))}}),'loading'===document.readyState?(p.length||document.addEventListener('DOMContentLoaded',()=>{for(const t of p)t()}),p.push(v)):v()};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */var v;const y=t=>{'function'==typeof t&&t()},w=(t,e,i=!0)=>{if(!i)return void y(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(',')[0],i=i.split(',')[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let n=!1;const o=({target:i})=>{i===e&&(n=!0,e.removeEventListener('transitionend',o),y(t))};e.addEventListener('transitionend',o),setTimeout(()=>{n||a(e)},s)},A=(t,e,i,s)=>{const n=t.length;let o=t.indexOf(e);return-1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},T=/[^.]*(?=\..*)\.|.*/,E=/\..*/,C=/::\d+$/,k={};let L=1;const I={mouseenter:'mouseover',mouseleave:'mouseout'},O=new Set(['click','dblclick','mouseup','mousedown','contextmenu','mousewheel','DOMMouseScroll','mouseover','mouseout','mousemove','selectstart','selectend','keydown','keypress','keyup','orientationchange','touchstart','touchmove','touchend','touchcancel','pointerdown','pointermove','pointerup','pointerleave','pointercancel','gesturestart','gesturechange','gestureend','focus','blur','change','reset','select','submit','focusin','focusout','load','unload','beforeunload','resize','move','DOMContentLoaded','readystatechange','error','abort','scroll']);function S(t,e){return e&&`${e}::${L++}`||t.uidEvent||L++}function D(t){const e=S(t);return t.uidEvent=e,k[e]=k[e]||{},k[e]}function N(t,e,i=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===i)}function P(t,e,i){const s='string'==typeof e,n=s?i:e||i;let o=j(t);return O.has(o)||(o=t),[s,n,o]}function x(t,e,i,s,n){if('string'!=typeof e||!t)return;let[o,r,a]=P(e,i,s);if(e in I){r=(t=>(function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)}))(r)}const l=D(t),c=l[a]||(l[a]={}),h=N(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=S(r,e.replace(T,'')),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return z(n,{delegateTarget:r}),s.oneOff&&F.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return z(s,{delegateTarget:t}),i.oneOff&&F.off(t,s.type,e),e.apply(t,[s])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function M(t,e,i,s,n){const o=N(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function $(t,e,i,s){const n=e[i]||{};for(const o of Object.keys(n))if(o.includes(s)){const s=n[o];M(t,e,i,s.callable,s.delegationSelector)}}function j(t){return t=t.replace(E,''),I[t]||t}const F={on(t,e,i,s){x(t,e,i,s,!1)},one(t,e,i,s){x(t,e,i,s,!0)},off(t,e,i,s){if('string'!=typeof e||!t)return;const[n,o,r]=P(e,i,s),a=r!==e,l=D(t),c=l[r]||{},h=e.startsWith('.');if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const i of Object.keys(c)){const s=i.replace(C,'');if(!a||e.includes(s)){const e=c[i];M(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;M(t,l,r,o,n?i:null)}},trigger(t,e,i){if('string'!=typeof e||!t)return null;const s=g();let n=null,o=!0,r=!0,a=!1;e!==j(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=z(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}};function z(t,e){for(const[i,s]of Object.entries(e||{}))try{t[i]=s}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>s})}return t}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const H=new Map,q={set(t,e,i){H.has(t)||H.set(t,new Map);const s=H.get(t);s.has(e)||0===s.size?s.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>H.has(t)&&H.get(t).get(e)||null,remove(t,e){if(!H.has(t))return;const i=H.get(t);i.delete(e),0===i.size&&H.delete(t)}};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
function B(t){if('true'===t)return!0;if('false'===t)return!1;if(t===Number(t).toString())return Number(t);if(''===t||'null'===t)return null;if('string'!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function W(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const R={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${W(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${W(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter(t=>t.startsWith('bs')&&!t.startsWith('bsConfig'));for(const s of i){let i=s.replace(/^bs/,'');e[i=i.charAt(0).toLowerCase()+i.slice(1,i.length)]=B(t.dataset[s])}return e},getDataAttribute:(t,e)=>B(t.getAttribute(`data-bs-${W(e)}`))};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */class V{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=l(e)?R.getDataAttribute(e,'config'):{};return{...this.constructor.Default,...'object'==typeof i?i:{},...l(e)?R.getDataAttributes(e):{},...'object'==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const s of Object.keys(e)){const n=e[s],o=t[s],r=l(o)?'element':i(o);if(!new RegExp(n).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)}}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const K='5.2.1';class Q extends V{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),q.set(this._element,this.constructor.DATA_KEY,this))}dispose(){q.remove(this._element,this.constructor.DATA_KEY),F.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){w(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return q.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,'object'==typeof e?e:null)}static get VERSION(){return K}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const X=(t,e='hide')=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;F.on(document,i,`[data-bs-dismiss="${s}"]`,function(i){if(['A','AREA'].includes(this.tagName)&&i.preventDefault(),d(this))return;const n=r(this)||this.closest(`.${s}`);t.getOrCreateInstance(n)[e]()})},Y='alert',U='close.bs.alert',G='closed.bs.alert',J='fade',Z='show';
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */class tt extends Q{static get NAME(){return Y}close(){if(F.trigger(this._element,U).defaultPrevented)return;this._element.classList.remove(Z);const t=this._element.classList.contains(J);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),F.trigger(this._element,G),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=tt.getOrCreateInstance(this);if('string'==typeof t){if(void 0===e[t]||t.startsWith('_')||'constructor'===t)throw new TypeError(`No method named "${t}"`);e[t](this)}})}}X(tt,'close'),b(tt);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const et='button',it='active';class st extends Q{static get NAME(){return et}toggle(){this._element.setAttribute('aria-pressed',this._element.classList.toggle(it))}static jQueryInterface(t){return this.each(function(){const e=st.getOrCreateInstance(this);'toggle'===t&&e[t]()})}}F.on(document,'click.bs.button.data-api','[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');st.getOrCreateInstance(e).toggle()}),b(st);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const nt={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let s=t.parentNode.closest(e);for(;s;)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=['a','button','input','textarea','select','details','[tabindex]','[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(',');return this.find(e,t).filter(t=>!d(t)&&h(t))}},ot='swipe',rt='.bs.swipe',at=`touchstart${rt}`,lt=`touchmove${rt}`,ct=`touchend${rt}`,ht=`pointerdown${rt}`,dt=`pointerup${rt}`,ut='touch',_t='pen',ft='pointer-event',gt=40,pt={endCallback:null,leftCallback:null,rightCallback:null},mt={endCallback:'(function|null)',leftCallback:'(function|null)',rightCallback:'(function|null)'};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */class bt extends V{constructor(t,e){super(),this._element=t,t&&bt.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return pt}static get DefaultType(){return mt}static get NAME(){return ot}dispose(){F.off(this._element,rt)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),y(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=gt)return;const e=t/this._deltaX;this._deltaX=0,e&&y(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(F.on(this._element,ht,t=>this._start(t)),F.on(this._element,dt,t=>this._end(t)),this._element.classList.add(ft)):(F.on(this._element,at,t=>this._start(t)),F.on(this._element,lt,t=>this._move(t)),F.on(this._element,ct,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===_t||t.pointerType===ut)}static isSupported(){return'ontouchstart'in document.documentElement||navigator.maxTouchPoints>0}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const vt='carousel',yt=500,wt='next',At='prev',Tt='left',Et='right',Ct='slide.bs.carousel',kt='slid.bs.carousel',Lt='keydown.bs.carousel',It='mouseenter.bs.carousel',Ot='mouseleave.bs.carousel',St='dragstart.bs.carousel',Dt='carousel',Nt='active',Pt='slide',xt='carousel-item-end',Mt='carousel-item-start',$t='carousel-item-next',jt='carousel-item-prev',Ft='.active',zt='.carousel-item',Ht=Ft+zt,qt='.carousel-item img',Bt='.carousel-indicators',Wt={ArrowLeft:Et,ArrowRight:Tt},Rt={interval:5e3,keyboard:!0,pause:'hover',ride:!1,touch:!0,wrap:!0},Vt={interval:'(number|boolean)',keyboard:'boolean',pause:'(string|boolean)',ride:'(boolean|string)',touch:'boolean',wrap:'boolean'};class Kt extends Q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=nt.findOne(Bt,this._element),this._addEventListeners(),this._config.ride===Dt&&this.cycle()}static get Default(){return Rt}static get DefaultType(){return Vt}static get NAME(){return vt}next(){this._slide(wt)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(At)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?F.one(this._element,kt,()=>this.cycle()):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void F.one(this._element,kt,()=>this.to(t));const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?wt:At;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&F.on(this._element,Lt,t=>this._keydown(t)),'hover'===this._config.pause&&(F.on(this._element,It,()=>this.pause()),F.on(this._element,Ot,()=>this._maybeEnableCycle())),this._config.touch&&bt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of nt.find(qt,this._element))F.on(t,St,t=>t.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(Tt)),rightCallback:()=>this._slide(this._directionToOrder(Et)),endCallback:()=>{'hover'===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),yt+this._config.interval))}};this._swipeHelper=new bt(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Wt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=nt.findOne(Ft,this._indicatorsElement);e.classList.remove(Nt),e.removeAttribute('aria-current');const i=nt.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(Nt),i.setAttribute('aria-current','true'))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute('data-bs-interval'),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===wt,n=e||A(this._getItems(),i,s,this._config.wrap);if(n===i)return;const o=this._getItemIndex(n),r=e=>F.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(Ct).defaultPrevented)return;if(!i||!n)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n;const l=s?Mt:xt,c=s?$t:jt;n.classList.add(c),f(n),i.classList.add(l),n.classList.add(l);this._queueCallback(()=>{n.classList.remove(l,c),n.classList.add(Nt),i.classList.remove(Nt,c,l),this._isSliding=!1,r(kt)},i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains(Pt)}_getActive(){return nt.findOne(Ht,this._element)}_getItems(){return nt.find(zt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return m()?t===Tt?At:wt:t===Tt?wt:At}_orderToDirection(t){return m()?t===At?Tt:Et:t===At?Et:Tt}static jQueryInterface(t){return this.each(function(){const e=Kt.getOrCreateInstance(this,t);if('number'!=typeof t){if('string'==typeof t){if(void 0===e[t]||t.startsWith('_')||'constructor'===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)})}}F.on(document,'click.bs.carousel.data-api','[data-bs-slide], [data-bs-slide-to]',function(t){const e=r(this);if(!e||!e.classList.contains(Dt))return;t.preventDefault();const i=Kt.getOrCreateInstance(e),s=this.getAttribute('data-bs-slide-to');return s?(i.to(s),void i._maybeEnableCycle()):'next'===R.getDataAttribute(this,'slide')?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())}),F.on(window,'load.bs.carousel.data-api',()=>{const t=nt.find('[data-bs-ride="carousel"]');for(const e of t)Kt.getOrCreateInstance(e)}),b(Kt);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const Qt='collapse',Xt='show.bs.collapse',Yt='shown.bs.collapse',Ut='hide.bs.collapse',Gt='hidden.bs.collapse',Jt='show',Zt='collapse',te='collapsing',ee='collapsed',ie=`:scope .${Zt} .${Zt}`,se='collapse-horizontal',ne='width',oe='height',re='.collapse.show, .collapse.collapsing',ae='[data-bs-toggle="collapse"]',le={parent:null,toggle:!0},ce={parent:'(null|element)',toggle:'boolean'};class he extends Q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=nt.find(ae);for(const t of i){const e=o(t),i=nt.find(e).filter(t=>t===this._element);null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return le}static get DefaultType(){return ce}static get NAME(){return Qt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(re).filter(t=>t!==this._element).map(t=>he.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(F.trigger(this._element,Xt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Zt),this._element.classList.add(te),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(te),this._element.classList.add(Zt,Jt),this._element.style[e]='',F.trigger(this._element,Yt)},this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(F.trigger(this._element,Ut).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,f(this._element),this._element.classList.add(te),this._element.classList.remove(Zt,Jt);for(const t of this._triggerArray){const e=r(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]='',this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(te),this._element.classList.add(Zt),F.trigger(this._element,Gt)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(Jt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains(se)?ne:oe}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(ae);for(const e of t){const t=r(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=nt.find(ie,this._config.parent);return nt.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(ee,!e),i.setAttribute('aria-expanded',e)}static jQueryInterface(t){const e={};return'string'==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=he.getOrCreateInstance(this,e);if('string'==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}})}}F.on(document,'click.bs.collapse.data-api',ae,function(t){('A'===t.target.tagName||t.delegateTarget&&'A'===t.delegateTarget.tagName)&&t.preventDefault();const e=o(this),i=nt.find(e);for(const t of i)he.getOrCreateInstance(t,{toggle:!1}).toggle()}),b(he);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const de='dropdown',ue='Escape',_e='Tab',fe='ArrowUp',ge='ArrowDown',pe=2,me='hide.bs.dropdown',be='hidden.bs.dropdown',ve='show.bs.dropdown',ye='shown.bs.dropdown',we='show',Ae='dropup',Te='dropend',Ee='dropstart',Ce='dropup-center',ke='dropdown-center',Le='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ie=`${Le}.${we}`,Oe='.dropdown-menu',Se='.navbar',De='.navbar-nav',Ne='.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',Pe=m()?'top-end':'top-start',xe=m()?'top-start':'top-end',Me=m()?'bottom-end':'bottom-start',$e=m()?'bottom-start':'bottom-end',je=m()?'left-start':'right-start',Fe=m()?'right-start':'left-start',ze='top',He='bottom',qe={autoClose:!0,boundary:'clippingParents',display:'dynamic',offset:[0,2],popperConfig:null,reference:'toggle'},Be={autoClose:'(boolean|string)',boundary:'(string|element)',display:'string',offset:'(array|string|function)',popperConfig:'(null|object|function)',reference:'(string|element|object)'};class We extends Q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=nt.next(this._element,Oe)[0]||nt.prev(this._element,Oe)[0],this._inNavbar=this._detectNavbar()}static get Default(){return qe}static get DefaultType(){return Be}static get NAME(){return de}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!F.trigger(this._element,ve,t).defaultPrevented){if(this._createPopper(),'ontouchstart'in document.documentElement&&!this._parent.closest(De))for(const t of[].concat(...document.body.children))F.on(t,'mouseover',_);this._element.focus(),this._element.setAttribute('aria-expanded',!0),this._menu.classList.add(we),this._element.classList.add(we),F.trigger(this._element,ye,t)}}hide(){if(d(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!F.trigger(this._element,me,t).defaultPrevented){if('ontouchstart'in document.documentElement)for(const t of[].concat(...document.body.children))F.off(t,'mouseover',_);this._popper&&this._popper.destroy(),this._menu.classList.remove(we),this._element.classList.remove(we),this._element.setAttribute('aria-expanded','false'),R.removeDataAttribute(this._menu,'popper'),F.trigger(this._element,be,t)}}_getConfig(t){if('object'==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&'function'!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${de.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===e)throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');let t=this._element;'parent'===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):'object'==typeof this._config.reference&&(t=this._config.reference);const i=this._getPopperConfig();this._popper=e.createPopper(t,this._menu,i)}_isShown(){return this._menu.classList.contains(we)}_getPlacement(){const t=this._parent;if(t.classList.contains(Te))return je;if(t.classList.contains(Ee))return Fe;if(t.classList.contains(Ce))return ze;if(t.classList.contains(ke))return He;const e='end'===getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();return t.classList.contains(Ae)?e?xe:Pe:e?$e:Me}_detectNavbar(){return null!==this._element.closest(Se)}_getOffset(){const{offset:t}=this._config;return'string'==typeof t?t.split(',').map(t=>Number.parseInt(t,10)):'function'==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'offset',options:{offset:this._getOffset()}}]};return(this._inNavbar||'static'===this._config.display)&&(R.setDataAttribute(this._menu,'popper','static'),t.modifiers=[{name:'applyStyles',enabled:!1}]),{...t,...'function'==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=nt.find(Ne,this._menu).filter(t=>h(t));i.length&&A(i,e,t===ge,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=We.getOrCreateInstance(this,t);if('string'==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===pe||'keyup'===t.type&&t.key!==_e)return;const e=nt.find(Ie);for(const i of e){const e=We.getInstance(i);if(!e||!1===e._config.autoClose)continue;const s=t.composedPath(),n=s.includes(e._menu);if(s.includes(e._element)||'inside'===e._config.autoClose&&!n||'outside'===e._config.autoClose&&n)continue;if(e._menu.contains(t.target)&&('keyup'===t.type&&t.key===_e||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};'click'===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===ue,s=[fe,ge].includes(t.key);if(!s&&!i)return;if(e&&!i)return;t.preventDefault();const n=this.matches(Le)?this:nt.prev(this,Le)[0]||nt.next(this,Le)[0],o=We.getOrCreateInstance(n);if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}F.on(document,'keydown.bs.dropdown.data-api',Le,We.dataApiKeydownHandler),F.on(document,'keydown.bs.dropdown.data-api',Oe,We.dataApiKeydownHandler),F.on(document,'click.bs.dropdown.data-api',We.clearMenus),F.on(document,'keyup.bs.dropdown.data-api',We.clearMenus),F.on(document,'click.bs.dropdown.data-api',Le,function(t){t.preventDefault(),We.getOrCreateInstance(this).toggle()}),b(We);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const Re='.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',Ve='.sticky-top',Ke='padding-right',Qe='margin-right';class Xe{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ke,e=>e+t),this._setElementAttributes(Re,Ke,e=>e+t),this._setElementAttributes(Ve,Qe,e=>e-t)}reset(){this._resetElementAttributes(this._element,'overflow'),this._resetElementAttributes(this._element,Ke),this._resetElementAttributes(Re,Ke),this._resetElementAttributes(Ve,Qe)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,'overflow'),this._element.style.overflow='hidden'}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)})}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&R.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=R.getDataAttribute(t,e);null!==i?(R.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)})}_applyManipulationCallback(t,e){if(l(t))e(t);else for(const i of nt.find(t,this._element))e(i)}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const Ye='backdrop',Ue='fade',Ge='show',Je=`mousedown.bs.${Ye}`,Ze={className:'modal-backdrop',clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:'body'},ti={className:'string',clickCallback:'(function|null)',isAnimated:'boolean',isVisible:'boolean',rootElement:'(element|string)'};class ei extends V{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ze}static get DefaultType(){return ti}static get NAME(){return Ye}show(t){if(!this._config.isVisible)return void y(t);this._append();const e=this._getElement();this._config.isAnimated&&f(e),e.classList.add(Ge),this._emulateAnimation(()=>{y(t)})}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ge),this._emulateAnimation(()=>{this.dispose(),y(t)})):y(t)}dispose(){this._isAppended&&(F.off(this._element,Je),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement('div');t.className=this._config.className,this._config.isAnimated&&t.classList.add(Ue),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),F.on(t,Je,()=>{y(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){w(t,this._getElement(),this._config.isAnimated)}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const ii='focustrap',si='.bs.focustrap',ni=`focusin${si}`,oi=`keydown.tab${si}`,ri='Tab',ai='forward',li='backward',ci={autofocus:!0,trapElement:null},hi={autofocus:'boolean',trapElement:'element'};class di extends V{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ci}static get DefaultType(){return hi}static get NAME(){return ii}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),F.off(document,si),F.on(document,ni,t=>this._handleFocusin(t)),F.on(document,oi,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,F.off(document,si))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=nt.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===li?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===ri&&(this._lastTabNavDirection=t.shiftKey?li:ai)}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const ui='modal',_i='.bs.modal',fi='Escape',gi=`hide${_i}`,pi=`hidePrevented${_i}`,mi=`hidden${_i}`,bi=`show${_i}`,vi=`shown${_i}`,yi=`resize${_i}`,wi=`click.dismiss${_i}`,Ai=`mousedown.dismiss${_i}`,Ti=`keydown.dismiss${_i}`,Ei=`click${_i}.data-api`,Ci='modal-open',ki='fade',Li='show',Ii='modal-static',Oi='.modal-dialog',Si='.modal-body',Di={backdrop:!0,focus:!0,keyboard:!0},Ni={backdrop:'(boolean|string)',focus:'boolean',keyboard:'boolean'};class Pi extends Q{constructor(t,e){super(t,e),this._dialog=nt.findOne(Oi,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Xe,this._addEventListeners()}static get Default(){return Di}static get DefaultType(){return Ni}static get NAME(){return ui}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;F.trigger(this._element,bi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ci),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){if(!this._isShown||this._isTransitioning)return;F.trigger(this._element,gi).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Li),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])F.off(t,_i);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ei({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new di({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display='block',this._element.removeAttribute('aria-hidden'),this._element.setAttribute('aria-modal',!0),this._element.setAttribute('role','dialog'),this._element.scrollTop=0;const e=nt.findOne(Si,this._dialog);e&&(e.scrollTop=0),f(this._element),this._element.classList.add(Li);this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,F.trigger(this._element,vi,{relatedTarget:t})},this._dialog,this._isAnimated())}_addEventListeners(){F.on(this._element,Ti,t=>{if(t.key===fi)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),F.on(window,yi,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),F.on(this._element,Ai,t=>{F.one(this._element,wi,e=>{this._dialog.contains(t.target)||this._dialog.contains(e.target)||('static'!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display='none',this._element.setAttribute('aria-hidden',!0),this._element.removeAttribute('aria-modal'),this._element.removeAttribute('role'),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ci),this._resetAdjustments(),this._scrollBar.reset(),F.trigger(this._element,mi)})}_isAnimated(){return this._element.classList.contains(ki)}_triggerBackdropTransition(){if(F.trigger(this._element,pi).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;'hidden'===e||this._element.classList.contains(Ii)||(t||(this._element.style.overflowY='hidden'),this._element.classList.add(Ii),this._queueCallback(()=>{this._element.classList.remove(Ii),this._queueCallback(()=>{this._element.style.overflowY=e},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=m()?'paddingLeft':'paddingRight';this._element.style[t]=`${e}px`}if(!i&&t){const t=m()?'paddingRight':'paddingLeft';this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft='',this._element.style.paddingRight=''}static jQueryInterface(t,e){return this.each(function(){const i=Pi.getOrCreateInstance(this,t);if('string'==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}})}}F.on(document,Ei,'[data-bs-toggle="modal"]',function(t){const e=r(this);['A','AREA'].includes(this.tagName)&&t.preventDefault(),F.one(e,bi,t=>{t.defaultPrevented||F.one(e,mi,()=>{h(this)&&this.focus()})});const i=nt.findOne('.modal.show');i&&Pi.getInstance(i).hide(),Pi.getOrCreateInstance(e).toggle(this)}),X(Pi),b(Pi);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const xi='offcanvas',Mi='Escape',$i='show',ji='showing',Fi='hiding',zi='offcanvas-backdrop',Hi='show.bs.offcanvas',qi='shown.bs.offcanvas',Bi='hide.bs.offcanvas',Wi='hidePrevented.bs.offcanvas',Ri='hidden.bs.offcanvas',Vi='keydown.dismiss.bs.offcanvas',Ki={backdrop:!0,keyboard:!0,scroll:!1},Qi={backdrop:'(boolean|string)',keyboard:'boolean',scroll:'boolean'};class Xi extends Q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ki}static get DefaultType(){return Qi}static get NAME(){return xi}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;if(F.trigger(this._element,Hi,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Xe).hide(),this._element.setAttribute('aria-modal',!0),this._element.setAttribute('role','dialog'),this._element.classList.add(ji);this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add($i),this._element.classList.remove(ji),F.trigger(this._element,qi,{relatedTarget:t})},this._element,!0)}hide(){if(!this._isShown)return;if(F.trigger(this._element,Bi).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Fi),this._backdrop.hide();this._queueCallback(()=>{this._element.classList.remove($i,Fi),this._element.removeAttribute('aria-modal'),this._element.removeAttribute('role'),this._config.scroll||(new Xe).reset(),F.trigger(this._element,Ri)},this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new ei({className:zi,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{'static'!==this._config.backdrop?this.hide():F.trigger(this._element,Wi)}:null})}_initializeFocusTrap(){return new di({trapElement:this._element})}_addEventListeners(){F.on(this._element,Vi,t=>{t.key===Mi&&(this._config.keyboard?this.hide():F.trigger(this._element,Wi))})}static jQueryInterface(t){return this.each(function(){const e=Xi.getOrCreateInstance(this,t);if('string'==typeof t){if(void 0===e[t]||t.startsWith('_')||'constructor'===t)throw new TypeError(`No method named "${t}"`);e[t](this)}})}}F.on(document,'click.bs.offcanvas.data-api','[data-bs-toggle="offcanvas"]',function(t){const e=r(this);if(['A','AREA'].includes(this.tagName)&&t.preventDefault(),d(this))return;F.one(e,Ri,()=>{h(this)&&this.focus()});const i=nt.findOne('.offcanvas.show');i&&i!==e&&Xi.getInstance(i).hide(),Xi.getOrCreateInstance(e).toggle(this)}),F.on(window,'load.bs.offcanvas.data-api',()=>{for(const t of nt.find('.offcanvas.show'))Xi.getOrCreateInstance(t).show()}),F.on(window,'resize.bs.offcanvas',()=>{for(const t of nt.find('[aria-modal][class*=show][class*=offcanvas-]'))'fixed'!==getComputedStyle(t).position&&Xi.getOrCreateInstance(t).hide()}),X(Xi),b(Xi);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const Yi=new Set(['background','cite','href','itemtype','longdesc','poster','src','xlink:href']),Ui=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Gi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ji=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Yi.has(i)||Boolean(Ui.test(t.nodeValue)||Gi.test(t.nodeValue)):e.filter(t=>t instanceof RegExp).some(t=>t.test(i))},Zi={'*':['class','dir','id','lang','role',/^aria-[\w-]*$/i],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','srcset','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const ts='TemplateFactory',es={allowList:Zi,content:{},extraClass:'',html:!1,sanitize:!0,sanitizeFn:null,template:'<div></div>'},is={allowList:'object',content:'object',extraClass:'(string|function)',html:'boolean',sanitize:'boolean',sanitizeFn:'(null|function)',template:'string'},ss={entry:'(string|element|function|null)',selector:'(string|element)'};class ns extends V{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return es}static get DefaultType(){return is}static get NAME(){return ts}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement('div');t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(' ')),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},ss)}_setContent(t,e,i){const s=nt.findOne(i,t);s&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&'function'==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,'text/html'),n=[].concat(...s.body.querySelectorAll('*'));for(const t of n){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const s=[].concat(...t.attributes),n=[].concat(e['*']||[],e[i]||[]);for(const e of s)Ji(e,n)||t.removeAttribute(e.nodeName)}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return'function'==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML='',void e.append(t);e.textContent=t.textContent}}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */const os='tooltip',rs=new Set(['sanitize','allowList','sanitizeFn']),as='fade',ls='show',cs='.tooltip-inner',hs='.modal',ds='hide.bs.modal',us='hover',_s='focus',fs='click',gs='manual',ps='hide',ms='hidden',bs='show',vs='shown',ys='inserted',ws='click',As='focusin',Ts='focusout',Es='mouseenter',Cs='mouseleave',ks={AUTO:'auto',TOP:'top',RIGHT:m()?'left':'right',BOTTOM:'bottom',LEFT:m()?'right':'left'},Ls={allowList:Zi,animation:!0,boundary:'clippingParents',container:!1,customClass:'',delay:0,fallbackPlacements:['top','right','bottom','left'],html:!1,offset:[0,0],placement:'top',popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:'',trigger:'hover focus'},Is={allowList:'object',animation:'boolean',boundary:'(string|element)',container:'(string|element|boolean)',customClass:'(string|function)',delay:'(number|object)',fallbackPlacements:'array',html:'boolean',offset:'(array|string|function)',placement:'(string|function)',popperConfig:'(null|object|function)',sanitize:'boolean',sanitizeFn:'(null|function)',selector:'(string|boolean)',template:'string',title:'(string|element|function)',trigger:'string'};class Os extends Q{constructor(t,i){if(void 0===e)throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');super(t,i),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return Ls}static get DefaultType(){return Is}static get NAME(){return os}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled){if(t){const e=this._initializeOnDelegatedTarget(t);return e._activeTrigger.click=!e._activeTrigger.click,void(e._isWithActiveTrigger()?e._enter():e._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),F.off(this._element.closest(hs),ds,this._hideModalHandler),this.tip&&this.tip.remove(),this._config.originalTitle&&this._element.setAttribute('title',this._config.originalTitle),this._disposePopper(),super.dispose()}show(){if('none'===this._element.style.display)throw new Error('Please use show on visible elements');if(!this._isWithContent()||!this._isEnabled)return;const t=F.trigger(this._element,this.constructor.eventName(bs)),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement();this._element.setAttribute('aria-describedby',i.getAttribute('id'));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),F.trigger(this._element,this.constructor.eventName(ys))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(ls),'ontouchstart'in document.documentElement)for(const t of[].concat(...document.body.children))F.on(t,'mouseover',_);this._queueCallback(()=>{F.trigger(this._element,this.constructor.eventName(vs)),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(F.trigger(this._element,this.constructor.eventName(ps)).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(ls),'ontouchstart'in document.documentElement)for(const t of[].concat(...document.body.children))F.off(t,'mouseover',_);this._activeTrigger[fs]=!1,this._activeTrigger[_s]=!1,this._activeTrigger[us]=!1,this._isHovered=null;this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute('aria-describedby'),F.trigger(this._element,this.constructor.eventName(ms)),this._disposePopper())},this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(as,ls),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=s(this.constructor.NAME).toString();return e.setAttribute('id',i),this._isAnimated()&&e.classList.add(as),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new ns({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[cs]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(as)}_isShown(){return this.tip&&this.tip.classList.contains(ls)}_createPopper(t){const i='function'==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,s=ks[i.toUpperCase()];return e.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return'string'==typeof t?t.split(',').map(t=>Number.parseInt(t,10)):'function'==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return'function'==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:'flip',options:{fallbackPlacements:this._config.fallbackPlacements}},{name:'offset',options:{offset:this._getOffset()}},{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'arrow',options:{element:`.${this.constructor.NAME}-arrow`}},{name:'preSetPlacement',enabled:!0,phase:'beforeMain',fn:t=>{this._getTipElement().setAttribute('data-popper-placement',t.state.placement)}}]};return{...e,...'function'==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(' ');for(const e of t)if('click'===e)F.on(this._element,this.constructor.eventName(ws),this._config.selector,t=>this.toggle(t));else if(e!==gs){const t=e===us?this.constructor.eventName(Es):this.constructor.eventName(As),i=e===us?this.constructor.eventName(Cs):this.constructor.eventName(Ts);F.on(this._element,t,this._config.selector,t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger['focusin'===t.type?_s:us]=!0,e._enter()}),F.on(this._element,i,this._config.selector,t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger['focusout'===t.type?_s:us]=e._element.contains(t.relatedTarget),e._leave()})}this._hideModalHandler=(()=>{this._element&&this.hide()}),F.on(this._element.closest(hs),ds,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:'manual',selector:''}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;t&&(this._element.getAttribute('aria-label')||this._element.textContent.trim()||this._element.setAttribute('aria-label',t),this._element.removeAttribute('title'))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=R.getDataAttributes(this._element);for(const t of Object.keys(e))rs.has(t)&&delete e[t];return t={...e,...'object'==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:c(t.container),'number'==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute('title')||'','number'==typeof t.title&&(t.title=t.title.toString()),'number'==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each(function(){const e=Os.getOrCreateInstance(this,t);if('string'==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}})}}b(Os);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const Ss='popover',Ds='.popover-header',Ns='.popover-body',Ps={...Os.Default,content:'',offset:[0,8],placement:'right',template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:'click'},xs={...Os.DefaultType,content:'(null|string|element|function)'};class Ms extends Os{static get Default(){return Ps}static get DefaultType(){return xs}static get NAME(){return Ss}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Ds]:this._getTitle(),[Ns]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Ms.getOrCreateInstance(this,t);if('string'==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}})}}b(Ms);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const $s='scrollspy',js='activate.bs.scrollspy',Fs='click.bs.scrollspy',zs='dropdown-item',Hs='active',qs='[href]',Bs='.nav, .list-group',Ws='.nav-link, .nav-item > .nav-link, .list-group-item',Rs='.dropdown',Vs='.dropdown-toggle',Ks={offset:null,rootMargin:'0px 0px -25%',smoothScroll:!1,target:null,threshold:[.1,.5,1]},Qs={offset:'(number|null)',rootMargin:'string',smoothScroll:'boolean',target:'element',threshold:'array'};class Xs extends Q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement='visible'===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ks}static get DefaultType(){return Qs}static get NAME(){return $s}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,'string'==typeof t.threshold&&(t.threshold=t.threshold.split(',').map(t=>Number.parseFloat(t))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(F.off(this._config.target,Fs),F.on(this._config.target,Fs,qs,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:s,behavior:'smooth'});i.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&t){if(i(o),!s)return}else n||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=nt.find(qs,this._config.target);for(const e of t){if(!e.hash||d(e))continue;const t=nt.findOne(e.hash,this._element);h(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Hs),this._activateParents(t),F.trigger(this._element,js,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(zs))nt.findOne(Vs,t.closest(Rs)).classList.add(Hs);else for(const e of nt.parents(t,Bs))for(const t of nt.prev(e,Ws))t.classList.add(Hs)}_clearActiveClass(t){t.classList.remove(Hs);const e=nt.find(`${qs}.${Hs}`,t);for(const t of e)t.classList.remove(Hs)}static jQueryInterface(t){return this.each(function(){const e=Xs.getOrCreateInstance(this,t);if('string'==typeof t){if(void 0===e[t]||t.startsWith('_')||'constructor'===t)throw new TypeError(`No method named "${t}"`);e[t]()}})}}F.on(window,'load.bs.scrollspy.data-api',()=>{for(const t of nt.find('[data-bs-spy="scroll"]'))Xs.getOrCreateInstance(t)}),b(Xs);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const Ys='tab',Us='hide.bs.tab',Gs='hidden.bs.tab',Js='show.bs.tab',Zs='shown.bs.tab',tn='keydown.bs.tab',en='ArrowLeft',sn='ArrowRight',nn='ArrowUp',on='ArrowDown',rn='active',an='fade',ln='show',cn='dropdown',hn='.dropdown-toggle',dn='.dropdown-menu',un='.dropdown-item',_n='.list-group, .nav, [role="tablist"]',fn='.nav-item, .list-group-item',gn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',pn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${gn}`,mn=`.${rn}[data-bs-toggle="tab"], .${rn}[data-bs-toggle="pill"], .${rn}[data-bs-toggle="list"]`;class bn extends Q{constructor(t){super(t),this._parent=this._element.closest(_n),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),F.on(this._element,tn,t=>this._keydown(t)))}static get NAME(){return Ys}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?F.trigger(e,Us,{relatedTarget:t}):null;F.trigger(t,Js,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(rn),this._activate(r(t));this._queueCallback(()=>{'tab'===t.getAttribute('role')?(t.focus(),t.removeAttribute('tabindex'),t.setAttribute('aria-selected',!0),this._toggleDropDown(t,!0),F.trigger(t,Zs,{relatedTarget:e})):t.classList.add(ln)},t,t.classList.contains(an))}_deactivate(t,e){if(!t)return;t.classList.remove(rn),t.blur(),this._deactivate(r(t));this._queueCallback(()=>{'tab'===t.getAttribute('role')?(t.setAttribute('aria-selected',!1),t.setAttribute('tabindex','-1'),this._toggleDropDown(t,!1),F.trigger(t,Gs,{relatedTarget:e})):t.classList.remove(ln)},t,t.classList.contains(an))}_keydown(t){if(![en,sn,nn,on].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[sn,on].includes(t.key),i=A(this._getChildren().filter(t=>!d(t)),t.target,e,!0);i&&bn.getOrCreateInstance(i).show()}_getChildren(){return nt.find(pn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,'role','tablist');for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute('aria-selected',e),i!==t&&this._setAttributeIfNotExists(i,'role','presentation'),e||t.setAttribute('tabindex','-1'),this._setAttributeIfNotExists(t,'role','tab'),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=r(t);e&&(this._setAttributeIfNotExists(e,'role','tabpanel'),t.id&&this._setAttributeIfNotExists(e,'aria-labelledby',`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(cn))return;const s=(t,s)=>{const n=nt.findOne(t,i);n&&n.classList.toggle(s,e)};s(hn,rn),s(dn,ln),s(un,rn),i.setAttribute('aria-expanded',e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(rn)}_getInnerElement(t){return t.matches(pn)?t:nt.findOne(pn,t)}_getOuterElement(t){return t.closest(fn)||t}static jQueryInterface(t){return this.each(function(){const e=bn.getOrCreateInstance(this);if('string'==typeof t){if(void 0===e[t]||t.startsWith('_')||'constructor'===t)throw new TypeError(`No method named "${t}"`);e[t]()}})}}F.on(document,'click.bs.tab',gn,function(t){['A','AREA'].includes(this.tagName)&&t.preventDefault(),d(this)||bn.getOrCreateInstance(this).show()}),F.on(window,'load.bs.tab',()=>{for(const t of nt.find(mn))bn.getOrCreateInstance(t)}),b(bn);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.1): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
const vn='toast',yn='mouseover.bs.toast',wn='mouseout.bs.toast',An='focusin.bs.toast',Tn='focusout.bs.toast',En='hide.bs.toast',Cn='hidden.bs.toast',kn='show.bs.toast',Ln='shown.bs.toast',In='fade',On='hide',Sn='show',Dn='showing',Nn={animation:'boolean',autohide:'boolean',delay:'number'},Pn={animation:!0,autohide:!0,delay:5e3};class xn extends Q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Pn}static get DefaultType(){return Nn}static get NAME(){return vn}show(){if(F.trigger(this._element,kn).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(In);this._element.classList.remove(On),f(this._element),this._element.classList.add(Sn,Dn),this._queueCallback(()=>{this._element.classList.remove(Dn),F.trigger(this._element,Ln),this._maybeScheduleHide()},this._element,this._config.animation)}hide(){if(!this.isShown())return;if(F.trigger(this._element,En).defaultPrevented)return;this._element.classList.add(Dn),this._queueCallback(()=>{this._element.classList.add(On),this._element.classList.remove(Dn,Sn),F.trigger(this._element,Cn)},this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Sn),super.dispose()}isShown(){return this._element.classList.contains(Sn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case'mouseover':case'mouseout':this._hasMouseInteraction=e;break;case'focusin':case'focusout':this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){F.on(this._element,yn,t=>this._onInteraction(t,!0)),F.on(this._element,wn,t=>this._onInteraction(t,!1)),F.on(this._element,An,t=>this._onInteraction(t,!0)),F.on(this._element,Tn,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=xn.getOrCreateInstance(this,t);if('string'==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}})}}return X(xn),b(xn),{Alert:tt,Button:st,Carousel:Kt,Collapse:he,Dropdown:We,Modal:Pi,Offcanvas:Xi,Popover:Ms,ScrollSpy:Xs,Tab:bn,Toast:xn,Tooltip:Os}});

/* Notify.js - http://notifyjs.com/ Copyright (c) 2015 MIT */
!function(t){'function'==typeof define&&define.amd?define('notifyjs',['jquery'],t):'object'==typeof module&&module.exports?module.exports=function(i,e){return void 0===e&&(e='undefined'!=typeof window?require('jquery'):require('jquery')(i)),t(e),e}:t(jQuery)}(function(t){var i=[].indexOf||function(t){for(var i=0,e=this.length;i<e;i++)if(i in this&&this[i]===t)return i;return-1},e='notifyjs',n={t:'top',m:'middle',b:'bottom',l:'left',c:'center',r:'right'},o=['l','c','r'],r=['t','m','b'],s=['t','b','l','r'],a={t:'b',m:null,b:'t',l:'r',c:null,r:'l'},l={},h={name:'core',html:'<div class="'+e+'-wrapper">\n\t<div class="'+e+'-arrow"></div>\n\t<div class="'+e+'-container"></div>\n</div>',css:'.'+e+'-corner {\n\tposition: fixed;\n\tmargin: 5px;\n\tz-index: 1050;\n}\n\n.'+e+'-corner .'+e+'-wrapper,\n.'+e+'-corner .'+e+'-container {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\twidth: inherit;\n\tmargin: 3px;\n}\n\n.'+e+'-wrapper {\n\tz-index: 1;\n\tposition: absolute;\n\tdisplay: inline-block;\n\theight: 0;\n\twidth: 0;\n}\n\n.'+e+'-container {\n\tdisplay: none;\n\tz-index: 1;\n\tposition: absolute;\n}\n\n.'+e+'-hidable {\n\tcursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n\tposition: relative;\n}\n\n.'+e+'-arrow {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 0;\n\theight: 0;\n}'},A={'border-radius':['-webkit-','-moz-']},c=function(i,n){if(!i)throw'Missing Style name';if(!n)throw'Missing Style definition';if(!n.html)throw'Missing Style HTML';var o=l[i];o&&o.cssElem&&(window.console&&console.warn('notify: overwriting style \''+i+'\''),l[i].cssElem.remove()),n.name=i,l[i]=n;var r='';n.classes&&t.each(n.classes,function(i,o){return r+='.'+e+'-'+n.name+'-'+i+' {\n',t.each(o,function(i,e){return A[i]&&t.each(A[i],function(t,n){return r+='\t'+n+i+': '+e+';\n'}),r+='\t'+i+': '+e+';\n'}),r+='}\n'}),n.css&&(r+='/* styles for '+n.name+' */\n'+n.css),r&&(n.cssElem=d(r),n.cssElem.attr('id','notify-'+n.name));var s={},a=t(n.html);p('html',a,s),p('text',a,s),n.fields=s},d=function(i){var e;(e=w('style')).attr('type','text/css'),t('head').append(e);try{e.html(i)}catch(t){e[0].styleSheet.cssText=i}return e},p=function(i,e,n){var o;return'html'!==i&&(i='text'),u(e,'['+(o='data-notify-'+i)+']').each(function(){var e;(e=t(this).attr(o))||(e='notify!blank'),n[e]=i})},u=function(t,i){return t.is(i)?t:t.find(i)},f={clickToHide:!0,autoHide:!0,autoHideDelay:5e3,arrowShow:!0,arrowSize:5,breakNewLines:!0,elementPosition:'bottom',globalPosition:'top right',style:'bootstrap',className:'error',showAnimation:'slideDown',showDuration:400,hideAnimation:'slideUp',hideDuration:200,gap:5},g=function(i,e){var n;return(n=function(){}).prototype=i,t.extend(!0,new n,e)},w=function(i){return t('<'+i+'></'+i+'>')},m={},y=function(i){var e;return i.is('[type=radio]')&&(e=i.parents('form:first').find('[type=radio]').filter(function(e,n){return t(n).attr('name')===i.attr('name')}),i=e.first()),i},b=function(t,i,e){var o;if('string'==typeof e)e=parseInt(e,10);else if('number'!=typeof e)return;if(!isNaN(e))return i,void 0!==t[o=n[a[i.charAt(0)]]]&&(i=n[o.charAt(0)],e=-e),void 0===t[i]?t[i]=e:t[i]+=e,null},v=function(t,i,e){if('l'===t||'t'===t)return 0;if('c'===t||'m'===t)return e/2-i/2;if('r'===t||'b'===t)return e-i;throw'Invalid alignment'},C=function(t){return C.e=C.e||w('div'),C.e.text(t).html()};function E(i,n,o){'string'==typeof o&&(o={className:o}),this.options=g(f,t.isPlainObject(o)?o:{}),this.loadHTML(),this.wrapper=t(h.html),this.options.clickToHide&&this.wrapper.addClass(e+'-hidable'),this.wrapper.data(e,this),this.arrow=this.wrapper.find('.'+e+'-arrow'),this.container=this.wrapper.find('.'+e+'-container'),this.container.append(this.userContainer),i&&i.length&&(this.elementType=i.attr('type'),this.originalElement=i,this.elem=y(i),this.elem.data(e,this),this.elem.before(this.wrapper)),this.container.hide(),this.run(n)}E.prototype.loadHTML=function(){var i;i=this.getStyle(),this.userContainer=t(i.html),this.userFields=i.fields},E.prototype.show=function(t,i){var e,n,o,r,s,a;if(a=this,n=function(){if(t||a.elem||a.destroy(),i)return i()},s=this.container.parent().parents(':hidden').length>0,o=this.container.add(this.arrow),e=[],s&&t)r='show';else if(s&&!t)r='hide';else if(!s&&t)r=this.options.showAnimation,e.push(this.options.showDuration);else{if(s||t)return n();r=this.options.hideAnimation,e.push(this.options.hideDuration)}return e.push(n),o[r].apply(o,e)},E.prototype.setGlobalPosition=function(){var i=this.getPosition(),o=i[0],r=i[1],s=n[o],a=n[r],l=o+'|'+r,h=m[l];if(!h){h=m[l]=w('div');var A={};A[s]=0,'middle'===a?A.top='45%':'center'===a?A.left='45%':A[a]=0,h.css(A).addClass(e+'-corner'),t('body').append(h)}return h.prepend(this.wrapper)},E.prototype.setElementPosition=function(){var e,l,h,A,c,d,p,u,f,g,w,m,y,C,E,x,F,S,D,M,k,B,H,Q,R,U,X,z;for(H=(U=this.getPosition())[0],B=U[1],U[2],w=this.elem.position(),u=this.elem.outerHeight(),m=this.elem.outerWidth(),f=this.elem.innerHeight(),g=this.elem.innerWidth(),z=this.wrapper.position(),c=this.container.height(),d=this.container.width(),S=n[H],(p={})[k=n[M=a[H]]]='b'===H?u:'r'===H?m:0,b(p,'top',w.top-z.top),b(p,'left',w.left-z.left),C=0,x=(X=['top','left']).length;C<x;C++)Q=X[C],(D=parseInt(this.elem.css('margin-'+Q),10))&&b(p,Q,D);if(y=Math.max(0,this.options.gap-(this.options.arrowShow?h:0)),b(p,k,y),this.options.arrowShow){for(h=this.options.arrowSize,l=t.extend({},p),e=this.userContainer.css('border-color')||this.userContainer.css('border-top-color')||this.userContainer.css('background-color')||'white',E=0,F=s.length;E<F;E++)R=n[Q=s[E]],Q!==M&&(A=R===S?e:'transparent',l['border-'+R]=h+'px solid '+A);b(p,n[M],h),i.call(s,B)>=0&&b(l,n[B],2*h)}else this.arrow.hide();if(i.call(r,H)>=0?(b(p,'left',v(B,d,m)),l&&b(l,'left',v(B,h,g))):i.call(o,H)>=0&&(b(p,'top',v(B,c,u)),l&&b(l,'top',v(B,h,f))),this.container.is(':visible')&&(p.display='block'),this.container.removeAttr('style').css(p),l)return this.arrow.removeAttr('style').css(l)},E.prototype.getPosition=function(){var e,a,l,h,A,c,d;if(0===(e=function(i){var e;return e=[],t.each(i.split(/\W+/),function(t,i){var o;if(o=i.toLowerCase().charAt(0),n[o])return e.push(o)}),e}(this.options.position||(this.elem?this.options.elementPosition:this.options.globalPosition))).length&&(e[0]='b'),a=e[0],i.call(s,a)<0)throw'Must be one of ['+s+']';return(1===e.length||(l=e[0],i.call(r,l)>=0&&(h=e[1],i.call(o,h)<0))||(A=e[0],i.call(o,A)>=0&&(c=e[1],i.call(r,c)<0)))&&(e[1]=(d=e[0],i.call(o,d)>=0?'m':'l')),2===e.length&&(e[2]=e[1]),e},E.prototype.getStyle=function(t){var i;if(t||(t=this.options.style),t||(t='default'),!(i=l[t]))throw'Missing style: '+t;return i},E.prototype.updateClasses=function(){var i,n;return i=['base'],t.isArray(this.options.className)?i=i.concat(this.options.className):this.options.className&&i.push(this.options.className),n=this.getStyle(),i=t.map(i,function(t){return e+'-'+n.name+'-'+t}).join(' '),this.userContainer.attr('class',i)},E.prototype.run=function(i,e){var n,o,r,s,a;if(t.isPlainObject(e)?t.extend(this.options,e):'string'===t.type(e)&&(this.options.className=e),!this.container||i){if(this.container||i){for(r in o={},t.isPlainObject(i)?o=i:o['notify!blank']=i,o)n=o[r],(s=this.userFields[r])&&('text'===s&&(n=C(n),this.options.breakNewLines&&(n=n.replace(/\n/g,'<br/>'))),a='notify!blank'===r?'':'='+r,u(this.userContainer,'[data-notify-'+s+a+']').html(n));this.updateClasses(),this.elem?this.setElementPosition():this.setGlobalPosition(),this.show(!0),this.options.autoHide&&(clearTimeout(this.autohideTimer),this.autohideTimer=setTimeout(this.show.bind(this,!1),this.options.autoHideDelay))}}else this.show(!1)},E.prototype.destroy=function(){this.wrapper.data(e,null),this.wrapper.remove()},t.notify=function(i,e,n){return i&&i.nodeName||i.jquery?t(i).notify(e,n):(n=e,new E(null,e=i,n)),i},t.fn.notify=function(i,n){return t(this).each(function(){var o=y(t(this)).data(e);o&&o.destroy();new E(t(this),i,n)}),this},t.extend(t.notify,{defaults:function(i){return t.extend(f,i)},addStyle:c,pluginOptions:f,getStyle:function(t){return l[t]},insertCSS:d}),c('bootstrap',{html:'<div>\n<span data-notify-text></span>\n</div>',classes:{base:{'font-weight':'bold',padding:'8px 15px 8px 14px','text-shadow':'0 1px 0 rgba(255, 255, 255, 0.5)','background-color':'#fcf8e3',border:'1px solid #fbeed5','border-radius':'4px','white-space':'nowrap','padding-left':'25px','background-repeat':'no-repeat','background-position':'3px 7px'},error:{color:'#B94A48','background-color':'#F2DEDE','border-color':'#EED3D7','background-image':'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)'},success:{color:'#468847','background-color':'#DFF0D8','border-color':'#D6E9C6','background-image':'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)'},info:{color:'#3A87AD','background-color':'#D9EDF7','border-color':'#BCE8F1','background-image':'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)'},warn:{color:'#C09853','background-color':'#FCF8E3','border-color':'#FBEED5','background-image':'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)'}}}),t(function(){d(h.css).attr('id','core-notify'),t(document).on('click','.'+e+'-hidable',function(i){t(this).trigger('notify-hide')}),t(document).on('notify-hide','.'+e+'-wrapper',function(i){var n=t(this).data(e);n&&n.show(!1)})})});

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define('@js/core', ['lodash'], factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('lodash'))
	} else {
		factory(_)
	}
}(function (_) {

	/**
	 * @module @tyler.thayn/js.core
	*/

	/**
	* Array class
	* @summary [Array@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
	* @class Array
	* @global
	* @type {array}
	*/

	/**
	* Function class
	* @summary [String@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function}
	* @class Function
	* @global
	* @type {function}
	*/

	/**
	* Object class
	* @summary [Object@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object}
	* @class Object
	* @global
	* @type {object}
	*/

	/**
	* String class
	* @summary [String@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String}
	* @class String
	* @global
	* @type {string}
	*/


	/**
	* global reference
	* @global
	* @name global
	* @type {object}
	*/
	if (typeof global !== 'object') {
		if (typeof window === 'object') {
			window.global = window
		} else {
			this.global = this
		}
	}


	const dataDesc = new Set(['configurable', 'enumerable', 'get', 'set'])
	const accDesc = new Set(['configurable', 'enumerable', 'writable', 'value'])
	const _define = (typeof Reflect !== 'undefined' && Reflect.defineProperty) ? Reflect.defineProperty : Object.defineProperty

	function IsDataDesc(keys){return keys.every(k=>dataDesc.has(k))}
	function IsAccessorDesc(keys){return keys.every(k=>accDesc.has(k))}
	function IsObject (val) {return val != null && typeof val === 'object' && Array.isArray(val) === false}

	function IsDescriptor (obj, key, checkProto) {
		if (!IsObject(obj)) return false
		let desc = key ? Object.getOwnPropertyDescriptor(obj, key) : obj

		if (!desc && key && checkProto !== false && obj.constructor) {
			desc = Object.getOwnPropertyDescriptor(obj.constructor.prototype, key)
			if (!IsObject(desc)) return false
			if (typeof desc.configurable !== 'boolean' || typeof desc.enumerable !== 'boolean') {
				return false
			}
		}

		let keys = Object.keys(desc);
		if (IsDataDesc(keys)) {
			if (typeof desc.get !== 'function' && desc.get !== void 0) return false
			if (typeof desc.set !== 'function' && desc.set !== void 0) return false
			return true
		}

		if (IsAccessorDesc(keys)) {
			return typeof desc.writable === 'boolean'
		}
		return false
	}

	function Define (obj, key, val, enumerable = false) {
		if (!IsObject(obj) && typeof obj !== 'function' && !Array.isArray(obj)) {
			throw new TypeError('expected an object, function, or array')
		}

		if (typeof key !== 'string') {
			throw new TypeError('expected "key" to be a string')
		}

		if (IsDescriptor(val)) {
			if (enumerable) {
				val.enumerable = true
			}
			_define(obj, key, val)
			return obj
		}

		_define(obj, key, {
			configurable: true,
			enumerable: enumerable,
			writable: true,
			value: val
		})

		return obj
	}


	/**
	* Defines object elements
	* @global
	* @function Define
	* @param {object}
	* @param {string} name - Name of property
	* @param {*} value - Value of property
	* @param {boolean} [enumerable]
	* @returns {object}
	*/
	Define(global, 'Define', Define)



	/**
	* Defines object elements
	* @memberof Object#
	* @instance
	* @function Define
	* @param {string} name - Name of property
	* @param {*} value - Value of property
	* @param {boolean} [enumerable]
	* @returns {object}
	*/
	//Define(Object.prototype, 'Define', function () {return Define.apply(null, [this].concat(Array.prototype.slice.call(arguments, 0)))})
	Define(Object.prototype, 'Define', function (...args) {
		return Define(this, ...args)
	})


	;(function () {
		var setProperty=function setProperty(target,name,value){'__proto__'===name?Object.defineProperty(target,name,{enumerable:true,configurable:true,value:value,writable:true}):target[name]=value};
		var getProperty=function getProperty(obj,name){if('__proto__'===name){if(!Object.prototype.hasOwnProperty.call(obj,name))return;return Object.getOwnPropertyDescriptor(obj,name).value}return obj[name]};
		var isPlainObject=function isPlainObject(obj){if(!obj||'[object Object]'!==Object.prototype.toString.call(obj))return false;var hasOwnConstructor=Object.prototype.hasOwnProperty.call(obj,'constructor');var hasIsPrototypeOf=obj.constructor&&obj.constructor.prototype&&Object.prototype.hasOwnProperty.call(obj.constructor.prototype,'isPrototypeOf');if(obj.constructor&&!hasOwnConstructor&&!hasIsPrototypeOf)return false;var key;for(key in obj);return'undefined'==typeof key||Object.prototype.hasOwnProperty.call(obj,key)};

		function ExtendArray (...args) {
			let target = args.shift()
			target = target == null || !Array.isArray(target) ? [] : target
			while (args.length > 0) {
				let src = args.shift()
				if (src != null) {
					if (Array.isArray(src)) {
						src.forEach(e => {
							if (!target.includes(e)) {
								target.push(e)
							}
						})
					} else {
						target.push(src)
					}
				}
			}
			return target
		}

		function Extend (...args) {
			let deep = typeof args.first === 'boolean' ? args.shift() : false
			let target = args.shift()
			target = target == null || (typeof target !== 'object' && typeof target !== 'function') ? {} : target

			if (Array.isArray(target)) {
				return ExtendArray(target, ...args)
			}
			while (args.length > 0) {
				let src = args.shift()
				if (src != null) {
					for (name in src) {
						let targetProperty = getProperty(target, name)
						let srcProperty = getProperty(src, name)

						if (typeof srcProperty !== 'undefined' && srcProperty != null && srcProperty !== target) {
							if (Array.isArray(targetProperty)) {
								setProperty(target, name, ExtendArray(targetProperty, srcProperty))
							} else if (!isPlainObject(targetProperty)) {
								setProperty(target, name, srcProperty)
							} else {
								setProperty(target, name, Extend(targetProperty, srcProperty))
							}
						}

					}

				}
			}
			return target
		}

		/**
		* Extend the contents of two or more objects into the target object
		* @global
		* @function Extend
		* @param {(object|array)} target
		* @param {...(object|array)} sources
		* @return {object}
		*/
		Define(global, 'Extend', Extend)
	})()


	/**
	* Recursively (deep) clone
	* @global
	* @function Clone
	* @param {object} parent - Parent value to clone
	* @return {object} - The cloned object
	*/
	Define(global, 'Clone', _.cloneDeep)


	/**
	 * Object extensions
	 *
	 * @name Object.Extensions
	 * @type {Object}
	 */
	Object.Extensions = {}


	/**
	* Determines if objects are equal
	* @global
	* @function IsEqual
	* @param {object[]} objects
	* @returns {boolean} result
	*/
	Define(global, 'IsEqual', function () {
		for (let i=1; i<arguments.length; i++) {
			if (!_.isEqual(arguments[0], arguments[i])) {
				return false
			}
		}
		return true
	})


	/**
	 * log
	 *
	 * @global
	 * @function log
	 * @param {string} msg
	 */
	Define(global, 'log', console.log)


	/**
	 * JSON Logger
	 *
	 * @global
	 * @function logj
	 * @param {*} object - Object to log
	 */
	Define(global, 'logj', function (v) {
		let s = v
		try {
			s = JSON.stringify(v, null, '\t')
		} catch (e) {}
		log(s)
	})


	/**
	* Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
	* @global
	* @function Merge
	* @param {(object|array)} target
	* @param {...(object|array)} sources
	* @return {(object|array)} target
	*/
	Define(global, 'Merge', _.defaults)


	/**
	* Object Type lookup
	* @global
	* @function Type
	* @param {*} item - Item to lookup type of
	* @param {(string|object)} [compare] - Comparison type label string or comparison object
	* @returns {(string|boolean)} result - String representing item type or a boolean from type comparisons
	*/
	Define(global, 'Type', function Type () {

		// Type.call(thisObject) => return type label
		if (arguments.length == 0) {return Type(this)}

		// Type(obj) => return type label
		if (arguments.length == 1) {
			var type = Object.prototype.toString.call(arguments[0]).match(/\[object (.+)\]/i)[1]
			return type != 'Object' ? type : arguments[0].constructor.name || type
		}

		// Type(obj, typeLabel) || Type(obj1, obj2) => return boolean indicating whether type's are the same
		if (arguments.length == 2) {
			if (Array.isArray(arguments[1])) {
				for (i=0; i<arguments[1].length; i++) {
					if (Type(arguments[0], arguments[1][i])) {
						return true
					}
				}
				return false
			}
			return Type(arguments[0]).toLowerCase() === (typeof arguments[1] === 'string' ? arguments[1] : Type(arguments[1])).toLowerCase()
		}

		// Type(obj1, obj2, ...objN) return boolean indicating whether all object type's match
		var type = Type(arguments[0])
		for (var i=1; i<arguments.length; i++) {
			if (!Type(arguments[0], arguments[i])) {
				return false
			}
		}
		return true

	})


	/**
	 * Uuid
	 *
	 * @global
	 * @function Uuid
	 * @returns {string} uuid
	 */
	Define(global, 'Uuid', () => {
		let d = Date.now()
		return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, c => {
			const r = (d + Math.random() * 16) % 16 | 0
			d = Math.floor(d / 16)
			return (c == `x` ? r : (r & 0x3 | 0x8)).toString(16)
		})
	})


	/**
	* Delete array item
	* @memberof Array#
	* @instance
	* @function Delete
	* @param {*} elements - Element or array of elements to delete
	* @param {array} array - The modified array
	*/
	Define(Array.prototype, 'Delete', function () {
		for (let i=0; i<arguments.length; i++) {
			let index = this.indexOf(arguments[i])
			while (index !== -1) {
				this.splice(index, 1)
				index = this.indexOf(arguments[i])
			}
		}
		return this
	})


	/**
	* DeleteAt array item
	* @memberof Array#
	* @instance
	* @function DeleteAt
	* @param {number} indexes - Index or array of indexes to delete
	* @param {array} array - The modified array
	*/
	Define(Array.prototype, 'DeleteAt', function () {
		[...arguments].sort().reverse().forEach((arg) => {console.log(arg);this.splice(arg, 1)})
		return this
	})


	function Array_Difference (a, b) {
		if (!Array.IsArray(a)) {return null}
		if (!Array.IsArray(b)) {return a}

		var diffArray = [];
		for (var i=0; i<a.length; i++) {
			var hasElement = false
			for (var j=0; j< b.length; j++) {
				if (a[i]===b[j]) {
					hasElement = true
					break
				}
			}
			if (hasElement===false) {
				diffArray.push(a[i])
			}
		}
		return diffArray
	}

	/**
	* Difference in arrays
	* @memberof Array.
	* @static
	* @function Difference
	* @param {*} lists - Array or list of arrays
	* @returns {array} diff - List of diffference values
	*/
	Define(Array, 'Difference', function () {
		var diffArray  = arguments[0]
		for (var i=1; i<arguments.length; i++) {
			diffArray = Array_Difference(diffArray, arguments[i])
		}
		return diffArray
	})

	/**
	* Difference in arrays
	* @memberof Array#
	* @instance
	* @function Difference
	* @param {*} lists - Array or list of arrays
	* @returns {array} diff - List of diffference values
	*/
	Define(Array.prototype, 'Difference', function () {
		return Array.Difference.apply(null, [this].concat(Array.prototype.slice.call(arguments, 0)))
	})


	/**
	* First element in an array
	* @memberof Array#
	* @instance
	* @member {*} first
	* @returns {*} element - The first element of the array
	*/
	Define(Array.prototype, 'first', {get: function () {
		if (this.length > 0) {return this[0]}
		return null
	}})


	/**
	* Flatten array elements
	* @memberof Array.
	* @static
	* @function Flatten
	* @param {number} depth
	* @returns {array} list - Flattened list
	*/
	Define(Array, 'Flatten', function (list, depth) {
		depth = (typeof depth == 'number') ? depth : Infinity

		if (!depth) {
			if (Array.IsArray(list)) {
				return list.map(function(i) {return i})
			}
			return list
		}

		return _flatten(list, 1)

		function _flatten(list, d) {
			return list.reduce(function(acc, item) {
				if (Array.IsArray(item) && d < depth) {
					return acc.concat(_flatten(item, d + 1))
				} else {
					return acc.concat(item)
				}
			}, [])
		}
	})


	/**
	* Converts value to an array
	* @memberof Array.
	* @static
	* @function From
	* @param {*} value - value to convert
	* @return {array} array - The converted array
	*/
	Define(Array, 'From', value => _.toArray(value))


	/**
	* Gets all but the last element of array
	* @memberof Array#
	* @instance
	* @member {array} head
	* @param {array} array -  All but the last element of array
	*/
	Define(Array.prototype, 'head', {get: function () {
		return this.slice(0, this.length-1)
	}})


	/**
	* Array Intersection
	* @memberof Array#
	* @instance
	* @function Intersection
	* @param {*} lists - Array or array list
	* @returns {array} array
	*/
	//https://github.com/juliangruber/intersect
	function many (sets) {
	  var o = {}
	  var l = sets.length - 1
	  var first = sets[0]
	  var last = sets[l]
	  for(var i in first) o[first[i]] = 0
	    for(var i = 1; i <= l; i++) {
	    var row = sets[i]
	    for(var j in row) {
	      var key = row[j]
	      if(o[key] === i - 1) o[key] = i
	    }
	  }

	  var a = []
	  for(var i in last) {
	    var key = last[i]
	    if(o[key] === l) a.push(key)
	  }

	  return a
	}

	function intersect (a, b) {
	  if (!b) return many(a)

	  var res = []
	  for (var i = 0; i < a.length; i++) {
	    if (indexOf(b, a[i]) > -1) res.push(a[i])
	  }
	  return res
	}

	intersect.big = function(a, b) {
	  if (!b) return many(a)

	  var ret = []
	  var temp = {}

	  for (var i = 0; i < b.length; i++) {
	    temp[b[i]] = true
	  }
	  for (var i = 0; i < a.length; i++) {
	    if (temp[a[i]]) ret.push(a[i])
	  }

	  return ret
	}

	function indexOf(arr, el) {
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i] === el) return i
	  }
	  return -1
	}

	Define(Array.prototype, 'Intersection', function () {
		var intArray = this
		for (var i=0; i<arguments.length; i++) {
			intArray = intersect(intArray, arguments[i])
		}
		return intArray
	})


	/**
	* Check if an object is an array
	* @memberof Array.
	* @static
	* @function IsArray
	* @param {object} object - Object to check if an array
	* @returns {boolean} result
	*/
	Define(Array, 'IsArray', function (a) {
		return Object.prototype.toString.call(a) == '[object Array]'
	})


	/**
	* Gets the last element of an array
	* @memberof Array#
	* @instance
	* @member {*} last
	* @returns {*} element -  The last element of the array
	*/
	Define(Array.prototype, 'last', {get: function () {
		return this.length > 0 ? this[this.length-1] : null
	}})


	/**
	* Create a new array with elements omitted
	* @memberof Array#
	* @instance
	* @function Omit
	* @param {*} elements - Elements to omit
	* @returns {array} array
	*/
	Define(Array.prototype, 'Omit', function () {
		let a = [], omit = []
		for (let i=0; i<arguments.length; i++) {
			omit.push(arguments[i])
		}
		this.forEach(function (e) {
			if (!omit.contains(e)) {
				a.push(e)
			}
		})
		return a
	})


	/**
	* Create a new array with elements omitted at certain indexes
	* @memberof Array#
	* @instance
	* @function OmitAt
	* @param {*} indexes - Indexes of elements to omit
	* @returns {array} array
	*/
	Define(Array.prototype, 'OmitAt', function () {
		let a = [], omitIndexes = []
		for (let i=0; i<arguments.length; i++) {
			omitIndexes.push(arguments[i])
		}
		for (var i=0; i<this.length; i++) {
			if (!omitIndexes.contains(i)) {
				a.push(this[i])
			}
		}
		return a
	})


	/**
	* Pick elements of an array
	* @memberof Array#
	* @instance
	* @function Pick
	* @param {*} elements - Elements to select
	* @returns {array} array
	*/
	Define(Array.prototype, 'Pick', function () {
		let a = [], select = []
		for (let i=0; i<arguments.length; i++) {
			select.push(arguments[i])
		}
		select.forEach(function (index) {
			a.push(this[index])
		}, this)
		return a
	})


	/**
	* In-place array shuffle
	* @memberof Array#
	* @instance
	* @function Shuffle
	*/
	Define(Array.prototype, 'Shuffle', function (seed = 1000) {
		let i, j, shuffleItem
		if (this.length <= 2) {
			return this
		}

		for (i = 0; i < this.length - 2; i++) {
			j = (Math.round(Math.random() * seed) + i) % this.length;
			shuffleItem = this[i]
			this[i] = this[j]
			this[j] = shuffleItem
		}
		return this
	})


	/**
	* Gets all but the first element of array
	* @memberof Array#
	* @instance
	* @member {array} tail
	* @param {array} array -  All but the first element of array
	*/
	Define(Array.prototype, 'tail', {get: function () {
		return this.length > 1 ? this.slice(1, this.length) : []
	}})


	/**
	* Array Union
	* @memberof Array#
	* @instance
	* @function Union
	* @param {*} lists - Array or array list
	* @returns {array} array
	*/
	Define(Array.prototype, 'Union', function () {
		return (this.concat.apply(this, arguments)).Unique()
	})


	/**
	* Array Unique
	* @memberof Array#
	* @instance
	* @function Unique
	* @param {*} lists - Array or array list
	* @returns {array} array
	*/
	Define(Array.prototype, 'Unique', function (mutate) {
		if (typeof mutate !== 'undefined' && mutate === true) {
			for (var i=this.length-1; i>=0; i--) {
				if (this.indexOf(this[i]) < i) {
					this.splice(i, 1)
				}
			}
			return this
		} else {
			var a = []
			for (var i=0; i<this.length; i++) {
				if (a.indexOf(this[i]) === -1) {
					a.push(this[i])
				}
			}
			return a
		}
	})


	/**
	* Array Xor
	* @memberof Array#
	* @instance
	* @function Xor
	* @param {array} lists - Array or array list
	* @param {array} array
	*/
	Define(Array.prototype, 'Xor', function () {
		let xorArray = this
		for (let i=0; i<arguments.length; i++) {
			xorArray = Array.Difference(xorArray, arguments[i]).concat(Array.Difference(arguments[i], xorArray))
		}
		return xorArray ? xorArray.Unique() : []
	})


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



	/**
	 * Debug Helper Function
	 *
	 * @memberof Function.
	 * @function Debug
	 * @param {string} name
	 * @param {function} logFn
	 * @param (callback} cb
	 */
	Define(Function, 'Debug', function (name, logFn, cb) {

		return function (...args) {
			global.DEBUG[name] = arguments
			logFn(arguments)
			if (cb !== 'undefined') {
				return cb(arguments)
			} else {
				return arguments
			}
		}
	})




	/**
	* Delay function
	* @memberof Function.
	* @function Delay
	* @param {number} time - time to delay
	* @param {callback} cb - callback function
	* @param {...*} args - args to pass to callback
	*/
	Define(Function, 'Delay', function (time, cb, ...args) {
		return setTimeout(function () {
			cb(...args)
		}, time)
	})



	/**
	* No op function
	*
	* @memberof Function.
	* @function Noop
	*/
	Define(Function, 'Noop', function () {

	})


	/**
	* Recursively (deep) clone
	* @memberof Object#
	* @instance
	* @function Clone
	* @return {object} - The cloned object
	*/
	Define(Object.prototype, 'Clone', function () {
		return Clone(this)
	})


	/**
	* Object elements iterator
	* @memberof Object#
	* @instance
	* @function Each
	* @param {function} fn - Iterator function
	* @param {object} this - Iterator this value
	*/
	Define(Object.prototype, 'Each', function (nonEnumerable, cb) {
		if (typeof nonEnumerable === 'function') {
			cb = nonEnumerable
			nonEnumerable = false
		}
		if (Type(this, 'Array')) {
			for (let i=0; i<this.length; i++) {
				if (cb(this[i], i, this) === false) {return}
			}
		} else {
			let keys = nonEnumerable ? Reflect.ownKeys(this) : Object.keys(this)
			for (let i=0; i<keys.length; i++) {
				if (cb(this[keys[i]], keys[i], this) === false) {return}
			}
		}
	})


	/**
	* Extend the contents of two or more objects into the target object
	* @memberof Object#
	* @instance
	* @function Extend
	* @param {...(object|array)} source
	* @return {object}
	*/
	Define(Object.prototype, 'Extend', function () {
		return _.merge.apply(null, [this].concat(Array.From(arguments)))
	})


	/**
	* Get object value at the given path
	* @memberof Object#
	* @instance
	* @function Get
	* @param {string} path - The element object path
	* @param {*} default - Value to return if invalid object path
	* @return {*}  value
	*/
	Define(Object.prototype, 'Get', function (path, defaultValue) {
		return _.get(this, path, defaultValue)
	})


	/**
	* Check if object has the child element paths
	* @memberof Object#
	* @instance
	* @function Has
	* @param {string[]} paths - Array of paths
	* @returns {boolean} result
	*/
	Define(Object.prototype, 'Has', function () {
		for (let i=0; i<arguments.length; i++) {
			if (!_.has(this, arguments[i])) {
				return false
			}
		}
		return true
	})


	/**
	* Check if object has the child element paths
	* @memberof Object#
	* @instance
	* @function Includes
	* @param {string[]} paths - Array of paths
	* @returns {boolean} result
	*/
	Define(Object.prototype, 'Includes', Object.prototype.Has)


	/**
	* Determines if objects are equal
	* @memberof Object#
	* @instance
	* @function IsEqual
	* @param {object[]} objects
	* @returns {boolean} result
	*/
	Define(Object.prototype, 'IsEqual', function () {
		for (let i=0; i<arguments.length; i++) {
			if (!_.isEqual(this, arguments[i])) {
				return false
			}
		}
		return true
	})


	/**
	* Creates an array of the own enumerable property names of object
	* @memberof Object#
	* @instance
	* @function Keys
	* @returns {array} property names
	*/
	Define(Object.prototype, 'Keys', function () {
		return _.keys(this)
	})


	/**
	* Assigns own and inherited enumerable string keyed properties of source objects to the object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
	* @memberof Object#
	* @instance
	* @function Merge
	* @param {...(object|array)} sources
	* @return {object}
	*/
	Define(Object.prototype, 'Merge', function () {
		return Merge.apply(null, [this].concat(_.toArray(arguments)))
	})


	/**
	* Gets a list of object element paths
	* @memberof Object#
	* @instance
	* @function Paths
	* @param {number} [depth] - Depth of recursion
	* @param {array} paths - The object element paths
	*/
	Define(Object.prototype, 'Paths', function(depth = Infinity) {
	    const list = []
	    visit(this)
	    return list.Unique()

	    function visit(object, keys = []) {
			object.Each((value, name) => {
				keys.push(name)
				if (Type(value, 'Array') || Type(value, 'Object')) {
					visit(value, keys)
				} else {
					list.push((keys.length < depth + 1 ? keys : keys.slice(0, depth)).join('.'))
				}
				keys.pop()
			})

		}
	})


	/**
	* Creates an object composed of the picked object properties
	* @memberof Object#
	* @instance
	* @function Pick
	* @param {...(string|string[])} paths
	* @returns {object} object
	*/
	Define(Object.prototype, 'Pick', function () {
		return _.pick.apply(null, [this].concat(_.toArray(arguments)))
	})


	/**
	* Set a value on object at path
	* @memberof Object#
	* @instance
	* @function Set
	* @param {string} path - Object element path
	* @param {*} value
	* @returns {object} object
	*/
	Define(Object.prototype, 'Set', function (path, value) {
	    return null == this ? this : _.set(this, path, value)
	})


	/**
	* Trim empty, null, undefined elements from an object
	* @memberof Object#
	* @instance
	* @function Trim
	* @returns {object} object
	*/
	Define(Object.prototype, 'Trim', function () {
	    Object.keys(this).forEach(function (k) {
			if (typeof this[k] === 'undefined' || this[k] == null) {
				delete this[k]
			} else if (Type(this[k], 'Object')) {
				this[k] = this[k].Trim()
				if (IsEqual(this[k], {})) {
					delete this[k]
				}
			} else if (Type(this[k], 'Array') && this[k].length == 0) {
				delete this[k]
			} else if (Type(this[k], 'String') && this[k] == '') {
				delete this[k]
			} else if (Type(this[k], 'Number') && Number.isNaN(this[k])) {
				delete this[k]
			}
	    }, this)
		return this
	})


	/**
	* Object Type lookup
	* @memberof Object#
	* @instance
	* @function Type
	* @param {...(string|object)} [compare] - Comparison type label string or object
	* @returns {(string|boolean)} result - String representing item type or a boolean from type comparisons
	*/
	Define(Object.prototype, 'Type', function () {
		return arguments.length > 0 ? Type.apply(null, [this].concat(Array.From(arguments))) : Type(this)
	})


	Define(Object.prototype,'Values',function(){
		return _.values(this)
	})


	/**
	* String as ascii text
	* @memberof String#
	* @instance
	* @function AsAscii
	* @returns {string} text - The ascii text
	*/
	Define(String.prototype, 'AsAscii', function (test) {
		try {
			if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(this, 'base64').toString('ascii')} //NodeJs
			if (typeof atob === 'function') {return atob(this)} //Browser
			if (typeof Utilities === 'object' && 'base64Decode' in Utilities) {return Utilities.newBlob(Utilities.base64Decode(this, Utilities.Charset.UTF_8)).getDataAsString()} //GScripts
		} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.AsAscii('${this}'): invalid conversion`)}}
		return this
	})


	/**
	* String as base64 text
	* @memberof String#
	* @instance
	* @function AsBase64
	* @returns {string} text - The base64 text
	*/
	Define(String.prototype, 'AsBase64', function (test) {
		try {
			if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(this).toString('base64')} //NodeJs
			if (typeof btoa === 'function') {return btoa(this)} //Browser
			if (typeof Utilities === 'object' && 'base64Encode' in Utilities) {return Utilities.base64Encode(this)} //GScripts
		} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.$AsAscii('${this}'): invalid conversion`)}}
		return this
	})


	/**
	* String as converted to url match pattern
	* @memberof String#
	* @instance
	* @function AsUrlMatch
	* @returns {string} pattern - The match pattern
	*/
	function AsUrlMatch (t){if("string"!=typeof t)return null;var e="(?:^",n=function(t){return t.replace(/[[^$.|?*+(){}\\]/g,"\\$&")},r=/^(\*|https?|file|ftp|chrome-extension):\/\//.exec(t);if(!r)return null;if(t=t.substr(r[0].length),e+="*"===r[1]?"https?://":r[1]+"://","file"!==r[1]){if(!(r=/^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(t)))return null;t=t.substr(r[0].length),"*"===r[0]?e+="[^/]+":(r[1]&&(e+="(?:[^/]+\\.)?"),e+=n(r[2]))}return e+=t.split("*").map(n).join(".*"),e+="$)"}
	Define(String.prototype, 'AsUrlMatch', function () {return AsUrlMatch(this.toString())})


	/**
	* String converted to camel case
	* @memberof String#
	* @instance
	* @function CamelCase
	* @param {boolean} [UpperCamel] - Set if Upper Camel Case
	* @returns {string} text - Text with camel case
	*/
	const preserveCamelCase=a=>{let b=!1,d=!1,e=!1;for(let f=0;f<a.length;f++){const g=a[f];b&&/[a-zA-Z]/.test(g)&&g.toUpperCase()===g?(a=a.slice(0,f)+'-'+a.slice(f),b=!1,e=d,d=!0,f++):d&&e&&/[a-zA-Z]/.test(g)&&g.toLowerCase()===g?(a=a.slice(0,f-1)+'-'+a.slice(f-1),e=d,d=!1,b=!0):(b=g.toLowerCase()===g,e=d,d=g.toUpperCase()===g)}return a}
	function camelCase(a,b){b=Object.assign({pascalCase:!1},b);const c=e=>b.pascalCase?e.charAt(0).toUpperCase()+e.slice(1):e;if(a=Array.isArray(a)?a.map(e=>e.trim()).filter(e=>e.length).join('-'):a.trim(),0===a.length)return'';if(1===a.length)return b.pascalCase?a.toUpperCase():a.toLowerCase();if(/^[a-z\d]+$/.test(a))return c(a);const d=a!==a.toLowerCase();return d&&(a=preserveCamelCase(a)),a=a.replace(/^[_.\- ]+/,'').toLowerCase().replace(/[_.\- ]+(\w|$)/g,(e,f)=>f.toUpperCase()),c(a)}
	function CamelCase(){const a=camelCase.apply(camelCase,arguments);return a.charAt(0).toUpperCase()+a.slice(1)}

	Define(String.prototype, 'CamelCase', function (upper) {
		return (typeof upper !== 'undefined' && upper === true) ? CamelCase(this) : camelCase(this)
	})



	/**
	* Capitalize words in a string
	* @memberof String#
	* @instance
	* @function Capitalize
	* @param {boolean} [AllWords] - Capitalize first letter of each word
	* @returns {string} text - Capitalized text
	*/
	Define(String.prototype, 'Capitalize', function (allWords) {
		const s = this.toLowerCase()
		if (typeof allWords !== 'undefined' && allWords === true) {
			return s.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
				return m.toUpperCase()
			})
		} else {
			return s.charAt(0).toUpperCase() + s.substring(1)
		}
	})


	/**
	* Generates a hash string
	* @memberof String#
	* @instance
	* @function Hash
	* @param {string} type - Hash type (sha1/md5)
	* @returns {string} hash - Hash string
	*/
	function safeAdd(n,r){var a=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(a>>16)<<16|65535&a}
	function bitRotateLeft(r,d){return r<<d|r>>>32-d}
	function md5(M,r,D){return r?D?rawHMACMD5(r,M):hexHMACMD5(r,M):D?rawMD5(M):hexMD5(M)}
	function md5cmn(r,d,n,t,m,f){return safeAdd(bitRotateLeft(safeAdd(safeAdd(d,r),safeAdd(t,f)),m),n)}
	function md5ff(r,d,n,t,m,f,i){return md5cmn(d&n|~d&t,r,d,m,f,i)}
	function md5gg(r,d,n,t,m,f,i){return md5cmn(d&t|n&~t,r,d,m,f,i)}
	function md5hh(r,d,n,t,m,f,i){return md5cmn(d^n^t,r,d,m,f,i)}
	function md5ii(r,d,n,t,m,f,i){return md5cmn(n^(d|~t),r,d,m,f,i)}
	function binlMD5(r,d){var n,t,m,f,i;r[d>>5]|=128<<d % 32,r[14+(d+64>>>9<<4)]=d;var e=1732584193,h=-271733879,g=-1732584194,o=271733878;for(n=0;n<r.length;n+=16)t=e,m=h,f=g,i=o,h=md5ii(h=md5ii(h=md5ii(h=md5ii(h=md5hh(h=md5hh(h=md5hh(h=md5hh(h=md5gg(h=md5gg(h=md5gg(h=md5gg(h=md5ff(h=md5ff(h=md5ff(h=md5ff(h,g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n],7,-680876936),h,g,r[n+1],12,-389564586),e,h,r[n+2],17,606105819),o,e,r[n+3],22,-1044525330),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+4],7,-176418897),h,g,r[n+5],12,1200080426),e,h,r[n+6],17,-1473231341),o,e,r[n+7],22,-45705983),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+8],7,1770035416),h,g,r[n+9],12,-1958414417),e,h,r[n+10],17,-42063),o,e,r[n+11],22,-1990404162),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+12],7,1804603682),h,g,r[n+13],12,-40341101),e,h,r[n+14],17,-1502002290),o,e,r[n+15],22,1236535329),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+1],5,-165796510),h,g,r[n+6],9,-1069501632),e,h,r[n+11],14,643717713),o,e,r[n],20,-373897302),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+5],5,-701558691),h,g,r[n+10],9,38016083),e,h,r[n+15],14,-660478335),o,e,r[n+4],20,-405537848),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+9],5,568446438),h,g,r[n+14],9,-1019803690),e,h,r[n+3],14,-187363961),o,e,r[n+8],20,1163531501),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+13],5,-1444681467),h,g,r[n+2],9,-51403784),e,h,r[n+7],14,1735328473),o,e,r[n+12],20,-1926607734),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+5],4,-378558),h,g,r[n+8],11,-2022574463),e,h,r[n+11],16,1839030562),o,e,r[n+14],23,-35309556),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+1],4,-1530992060),h,g,r[n+4],11,1272893353),e,h,r[n+7],16,-155497632),o,e,r[n+10],23,-1094730640),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+13],4,681279174),h,g,r[n],11,-358537222),e,h,r[n+3],16,-722521979),o,e,r[n+6],23,76029189),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+9],4,-640364487),h,g,r[n+12],11,-421815835),e,h,r[n+15],16,530742520),o,e,r[n+2],23,-995338651),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n],6,-198630844),h,g,r[n+7],10,1126891415),e,h,r[n+14],15,-1416354905),o,e,r[n+5],21,-57434055),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+12],6,1700485571),h,g,r[n+3],10,-1894986606),e,h,r[n+10],15,-1051523),o,e,r[n+1],21,-2054922799),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+8],6,1873313359),h,g,r[n+15],10,-30611744),e,h,r[n+6],15,-1560198380),o,e,r[n+13],21,1309151649),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+4],6,-145523070),h,g,r[n+11],10,-1120210379),e,h,r[n+2],15,718787259),o,e,r[n+9],21,-343485551),e=safeAdd(e,t),h=safeAdd(h,m),g=safeAdd(g,f),o=safeAdd(o,i);return[e,h,g,o]}
	function binl2rstr(r){var d,n="",t=32*r.length;for(d=0;d<t;d+=8)n+=String.fromCharCode(r[d>>5]>>>d%32&255);return n}
	function rstr2binl(r){var d,n=[];for(n[(r.length>>2)-1]=void 0,d=0;d<n.length;d+=1)n[d]=0;var t=8*r.length;for(d=0;d<t;d+=8)n[d>>5]|=(255&r.charCodeAt(d/8))<<d%32;return n}
	function rstrMD5(r){return binl2rstr(binlMD5(rstr2binl(r),8*r.length))}
	function rstrHMACMD5(r,d){var n,t,m=rstr2binl(r),f=[],i=[];for(f[15]=i[15]=void 0,m.length>16&&(m=binlMD5(m,8*r.length)),n=0;n<16;n+=1)f[n]=909522486^m[n],i[n]=1549556828^m[n];return t=binlMD5(f.concat(rstr2binl(d)),512+8*d.length),binl2rstr(binlMD5(i.concat(t),640))}
	function rstr2hex(r){var d,n,t="0123456789abcdef",m="";for(n=0;n<r.length;n+=1)d=r.charCodeAt(n),m+=t.charAt(d>>>4&15)+t.charAt(15&d);return m}
	function str2rstrUTF8(r){return unescape(encodeURIComponent(r))}
	function rawMD5(r){return rstrMD5(str2rstrUTF8(r))}
	function hexMD5(r){return rstr2hex(rawMD5(r))}
	function rawHMACMD5(r,d){return rstrHMACMD5(str2rstrUTF8(r),str2rstrUTF8(d))}
	function hexHMACMD5(r,d){return rstr2hex(rawHMACMD5(r,d))}

	function fillString(a){var d,b=(a.length+8>>6)+1,c=[];for(d=0;d<16*b;d++)c[d]=0;for(d=0;d<a.length;d++)c[d>>2]|=a.charCodeAt(d)<<24-8*(3&d);return c[d>>2]|=128<<24-8*(3&d),c[16*b-1]=8*a.length,c}
	function binToHex(a){var d,b="0123456789abcdef",c="";for(d=0;d<4*a.length;d++)c+=b.charAt(15&a[d>>2]>>8*(3-d%4)+4)+b.charAt(15&a[d>>2]>>8*(3-d%4));return c}
	function coreFunction(f){var o,p,q,r,s,u,v,x,g=[],h=1732584193,k=4023233417,l=2562383102,m=271733878,n=3285377520;for(v=0;v<f.length;v+=16){for(o=h,p=k,q=l,r=m,s=n,x=0;80>x;x++)g[x]=16>x?f[v+x]:cyclicShift(g[x-3]^g[x-8]^g[x-14]^g[x-16],1),u=modPlus(modPlus(cyclicShift(h,5),ft(x,k,l,m)),modPlus(modPlus(n,g[x]),kt(x))),n=m,m=l,l=cyclicShift(k,30),k=h,h=u;h=modPlus(h,o),k=modPlus(k,p),l=modPlus(l,q),m=modPlus(m,r),n=modPlus(n,s)}return[h,k,l,m,n]}
	function ft(a,e,f,g){return 20>a?e&f|~e&g:40>a?e^f^g:60>a?e&f|e&g|f&g:e^f^g}
	function kt(a){return 20>a?1518500249:40>a?1859775393:60>a?2400959708:3395469782}
	function modPlus(a,b){var c=(65535&a)+(65535&b);return(a>>16)+(b>>16)+(c>>16)<<16|65535&c}
	function cyclicShift(a,b){return a<<b|a>>>32-b}
	function sha1(a){return binToHex(coreFunction(fillString(a)))}

	Define(String.prototype, 'Hash', function (type) {
		return (typeof type !== 'undefined' && (type == 'sha-1' || type == 'sha1')) ? sha1(this) : md5(this)
	})


	/**
	* Tests if a string is Base64 format
	* @memberof String#
	* @instance
	* @function IsBase64
	* @returns {boolean} result
	*/
	Define(String.prototype, 'IsBase64', function () {
		return this.toString() === this.AsAscii(true).AsBase64(true)
	})


	/**
	* Checks if a string is empty, null or undefined
	* @memberof String#
	* @instance
	* @function IsEmpty
	* @returns {boolean} result
	*/
	Define(String.prototype, 'IsEmpty', function () {
		return (typeof this === 'undefined' || this == null || this.length === 0) ? true : false
	})


	/**
	* Test whether a string is JSON
	* @memberof String#
	* @instance
	* @function IsJson
	* @returns {boolean} result
	*/
	Define(String.prototype, 'IsJson', function () {
		try {
			JSON.parse(this)
		} catch (e) {
			return false
		}
		return true
	})


	Define(String.prototype, 'Match', function (m) {
		return !(this.match(m) == null)
	})


	/**
	* Pads a string out to a certain width
	* @memberof String#
	* @instance
	* @function Pad
	* @param {number} length - Length of the string in chars
	* @param {string} [char] - Char to pad with
	* @param {boolean} [rightPad] - Pad chars tot he right instead of the left
	* @returns {string} text - Padded string
	*/
	Define(String.prototype, 'Pad', function (length, padChar, rightPad) {
		let s = this + ''
		length = length - s.length
		if (length <= 0) {return s}
		padChar = (padChar+'').Repeat(length)
		if (typeof rightPad !== 'undefined' && rightPad === true) {
			return s+padChar
		}
		return padChar + s
	})


	/**
	* Repeats a string of text n times
	* @memberof String#
	* @instance
	* @function Repeat
	* @param {number} n - Number of times to repeat
	* @returns {string} text
	*/
	Define(String.prototype, 'Repeat', function (n) {
		let s = ''
		for (let i=0; i<n; i++) {s += this}
		return s
	})


}))

/**
 * AddStyle - Add css style into the head of the document
 * @function AddStyle
 * @param {string} css
 * @param {string} [id] - Id for the <link> tag
 * @param {String[]} [classes] - Classes for the <link> tag
 */
define('Util/AddStyle', ['jquery'], ($) => {

	$.extend({
		AddStyle: (style, id = '', classes = []) => {
			let _style = $(`<style>${style}</style>`)
			if (id != '') {_style.attr('id', id)}
			classes.forEach(c => {_style.addClass(c)})
			$('head').prepend(_style)
			return _style
		}
	})

	return $
})


/**
 * InsertScript - Insert script tag into head of document
 *
 * @function InsertScript
 * @param {string} url - Script url
 * @param {string} [id] - Id for the <script> tag
 * @param {String[]} [classes] - Classes for the <script> tag
 * @param {docLoad} cb - Callback function called once the script is loaded
 */

/**
 * Script load callback
 * @callback docLoad
 * @param {Event} event
 */
define('Util/InsertScript', ['jquery'], ($) => {

	$.extend({
		InsertScript: (...args) => {
			let file = args.shift()
			let id = typeof args[0] === 'string' ? args.shift() : ''
			let classes = Array.isArray(args[0]) ? args.shift() : []
			let cb = args[0] instanceof Function ? args.shift() : () => {}

			let script = $(`<script type="text/javascript" src="${file}">`)
			if (id != '') {script.attr('id', id)}
			classes.forEach(c => {script.addClass(c)})
			script.on('load', cb)
			$('head').append(script)
		}
	})

	return $
})


/**
 * InsertStyle - Insert style tag into head of document
 *
 * @function InsertStyle
 * @param {string} url - Stylesheet url
 * @param {string} [id] - Id for the <link> tag
 * @param {String[]} [classes] - Classes for the <link> tag
 * @param {docLoad} cb - Callback function called once the style is loaded
 */
define('Util/InsertStyle', ['jquery'], ($) => {

	$.extend({
		InsertStyle: (...args) => {
			let file = args.shift()
			let id = typeof args[0] === 'string' ? args.shift() : ''
			let classes = Array.isArray(args[0]) ? args.shift() : []
			let cb = args[0] instanceof Function ? args.shift() : () => {}

			console.dir(file)
			console.dir(id)
			console.dir(classes)
			console.dir(cb)

			let style = $(`<link rel="stylesheet" href="${file}">`)
			if (id != '') {style.attr('id', id)}
			classes.forEach(c => {style.addClass(c)})
			style.on('load', cb)
			$('head').append(style)
		}
	})

	return $
})


define('Util', ['jquery', 'Util/AddStyle', 'Util/InsertScript', 'Util/InsertStyle'], ($) => {
	return $
})


/**
* @module Observers/Data
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Data', ['jquery'], ($) => {

	/** Observers/Data
	* @memberof jQuery.Observers.
	* @name Data
	* @function
	* @fires Element#data-change
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		let observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if (mutationRecord.type == 'attributes' && mutationRecord.attributeName.startsWith('data-')) {
					let data = {}
					data[mutationRecord.attributeName.split('-')[1]] = $(element).attr(mutationRecord.attributeName)
					$(element).triggerHandler(prefix+'data-change', data)
				}
			})
		})
		observer.observe(element, {attributeOldValue: true, attributes : true})
	}

})


/**
* @module Observers/Hidden
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Hidden', ['jquery', 'Observers/ParseStyle'], ($, ParseStyle) => {

	/** Observers/Hidden
	* @memberof jQuery.Observers.
	* @name Hidden
	* @function
	* @fires Element#hidden
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		let hiddenObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if ($(element).hasClass('Hidden') && !mutationRecord.oldValue.includes('Hidden')) {
					/** Element event
					* @event Element#hidden
					*/
					$(element).triggerHandler(prefix+'hidden')
				}
			})
		})
		hiddenObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(old, 'display') && old.display == 'none') {
					if (!Reflect.has(current, 'display') || current.display != 'none') {
						$(element).triggerHandler(prefix+'shown')
					}
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})



/**
* @module Observers
*/
define('Observers', ['jquery', 'Observers/Data', 'Observers/Hidden', 'Observers/Mounted', 'Observers/Resized', 'Observers/Shown'], ($, Data, Hidden, Mounted, Resized, Shown) => {
	Mounted($('body')[0])

	/** Observers() will establish Hidden, Resized and Shown MutationObservers on provided Element
	* @memberof jQuery.
	* @function Observers
	* @param {HtmlElement} element - Element to observer
	* @param {string} [prefix=''] - Event name prefix
	*/
	function Observers (element, prefix = '') {
		Data(element, prefix)
		Hidden(element, prefix)
		Resized(element, prefix)
		Shown(element, prefix)
	}

	Observers.Define('Data', Data)
	Observers.Define('Hidden', Hidden)
	Observers.Define('Mounted', Mounted)
	Observers.Define('Resized', Resized)
	Observers.Define('Shown', Shown)

	$.extend({Observers: Observers})

})


/**
* @module Observers/Mounted
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Mounted', ['jquery'], ($) => {

	/** Observers/Mounted
	* @memberof jQuery.Observers.
	* @function Mounted
	* @fires Element#mounted
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		const observer = new MutationObserver(function callback(mutationList, observer) {
			mutationList.forEach((mutation) => {
				if (mutation.type == 'childList') {
					mutation.addedNodes.forEach(node => {
						/** Element event
						* @event Element#mounted
						*/
						$(node).triggerHandler(prefix+'mounted')
					})
				}
			})
		})
		observer.observe(element, {childList: true, subTree: true})
	}

})


/**
* @module ParseStyle
*/
define('Observers/ParseStyle', [], () => {

	/** ParseStyle
	* @exports ParseStyle
	* @function ParseStyle
	* @param {string} style
	* @returns {object} css
	*/
	return (style) => {
		let css = {}
		if (style == null || style == '') {return css}
		style.split(/;/g).forEach(def => {
			[name, value] = def.split(':').map(v => v.trim())
			css[name] = value
		})
		return css
	}

})


/**
* @module Observers/Resized
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Resized', ['jquery', 'Observers/ParseStyle'], ($, ParseStyle) => {

	/** Observers/Resized
	* @memberof jQuery.Observers.
	* @function Resized
	* @fires Element#resized
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (current.width != old.width || current.height != old.height) {
					/** Element event
					* @event Element#resized
					*/
					$(element).triggerHandler(prefix+'resized')
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})



/**
* @module Observers/Shown
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Shown', ['jquery', 'Observers/ParseStyle'], ($, ParseStyle) => {

	/** Observers/Shown
	* @memberof jQuery.Observers.
	* @function Shown
	* @fires Element#shown
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		let shownObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if (!$(element).hasClass('Hidden') && mutationRecord.oldValue.includes('Hidden')) {
					/** Element event
					* @event Element#shown
					*/
					$(element).triggerHandler(prefix+'shown')
				}
			})
		})
		shownObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(old, 'display') && old.display == 'none') {
					if (!Reflect.has(current, 'display') || current.display != 'none') {
						$(element).triggerHandler(prefix+'shown')
					}
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})



define('jQuery/Action', ['jquery'], ($) => {

	/** Trigger Action for element
	* @memberof jQuery#
	* @function Action
	* @param {string} name - Name of action to trigger
	* @param {...*} [args] - Args to pass to action handler
	*/
	return function (name, ...args) {
		this.each((i, e) => {
			$(e).triggerHandler('action.'+name, args)
		})
	}

})


/** ActionHandler Callback
* @callback ActionHandler
* @param {Event} event
* @param {...*} [args]
* @param {Function} [cb]
*/
define('jQuery/ActionHandler', ['jquery'], ($) => {

	/** Register ActionHandler for element
	* @memberof jQuery#
	* @function ActionHandler
	* @param {string} name - Action name to handle
	* @param {ActionHandler} fn - Handler function
	*/
	return function (name, fn) {
		this.each((i, e) => {
			$(e).on('action.'+name, {action: name}, (event, ...args) => {
				fn.call(e, ...args)
			})
		})
	}

})


define('jQuery/ActionHandlers', ['jquery'], ($) => {

	return {
		Hide: function (effect, cb = () => {}) {
			if (this.style.display != 'none') {
				$(this).hide(effect, () => {
					$(this).triggerHandler('hidden')
					cb()
				})
			} else {
				cb()
			}
		},
		Show: function (effect, cb = () => {}) {
			if (this.style.display == 'none') {
				$(this).show(effect, () => {
					$(this).triggerHandler('shown')
					cb()
				})
			} else {
				cb()
			}
		},
		Toggle: function (effect, cb = () => {}) {
			$(this).toggle(effect, () => {
				$(this).triggerHandler(this.style.display && this.style.display == 'none' ? 'hidden' : 'shown')
				cb()
			})
		}
	}

})


/** data-change event
* @event jQuery#data-change
* @type {object}
* @property {string} name - data property name that changed
*/
define('jQuery/Data', ['jquery'], ($) => {

	let dataFn = $.fn.data

	/** Data
	* @fires jQuery#data-change
	*/
	return function (key, value) {
		if (typeof key === 'undefined') {
			return dataFn.call($(this[0]))
		}
		if (typeof key === 'string' && typeof value === 'undefined') {
			return dataFn.call($(this[0]), key)
		}
		let ret = dataFn.call(this, key, value)
		if (typeof key === 'object') {
			this.trigger('data-change', key)
		} else if (typeof value !== 'undefined') {
			let d = {}
			d[key] = value
			this.trigger('data-change', d)
		}
		return ret
	}

})


define('jQuery/Height', ['jquery', 'jQuery/Value'], ($, Value) => {

	return function (e, v) {
		return Value(e, 'height', v)
	}

})


/** data-change event
* @event jQuery#data-change
* @type {object}
* @property {string} name - data property name that changed
*/

define('jQuery/Property', ['jquery', 'Observers/Data'], ($, Data) => {

	/** Gets or Sets Element property
	* @memberof jQuery#
	* @function Property
	* @param {string|object} name - Property name or object of properties
	* @param {*|function} [value] - Property value.  If function, it is added as listener
	* @returns {*} [value] - Property value
	*/
	return function (name, value) {
		if (typeof name === 'string') {
			if (typeof value === 'undefined') {
				return this.data(name)
			} else if (value instanceof Function) {
				this.each((i, e) => {
					Data(e)
					$(e).on('data-change', (event, data) => {
						if (Reflect.has(data, name)) {
							value.call(this, data[name], name)
						}
					})
				})
			} else {
				this.each((i, e) => {
					$(e).data(name, value)
				})
			}
		} else if (typeof name === 'object') {
			this.each((i, e) => {
				Object.keys(name).forEach(key => {
					$(e).data(key, name[key])
				})
			})
		}
	}

})


define('jQuery/Remove', ['jquery'], ($) => {

	let _remove = $.fn.remove

	return function (...args) {
		$(this).each((i, e) => {
			while(Object.prototype.toString.call(e.previousSibling) == '[object Text]') {e.previousSibling.remove()}
			if (Object.prototype.toString.call(e.previousSibling) == '[object Comment]') {e.previousSibling.remove()}
			while(Object.prototype.toString.call(e.nextSibling) == '[object Text]') {e.nextSibling.remove()}
			if (Object.prototype.toString.call(e.nextSibling) == '[object Comment]') {e.nextSibling.remove()}
			_remove.call($(e), ...args)
		})
	}

})


define('jQuery/Template', ['jquery'], ($) => {

	return {
		Clear: function () {
			$(this).each((i, e) => {
				$(e).find('.TemplateVariable').each((ii, ee) => {
					$(ee).text($(ee).data('default'))
				})
			})
		},
		Get: function (name) {
			if (Array.isArray(name)) {
				return name.map(n => $(this).Get(n))
			} else {
				return $(this).find(`.TemplateVariable[data-name="${name}"]`).text()
			}
		},
		Set: function (name, value) {
			if (typeof name === 'object') {
				Object.keys(name).forEach(key => {
					$(this).Set(key, name[key])
				})
			} else {
				$(this).each((i, e) => {
					$(e).find(`.TemplateVariable[data-name="${name}"]`).text(value)
				})
			}
		},
		Variables: function () {
			return $(this).find('.TemplateVariable').map((i, e) => $(e).data('name')).toArray()
		}
	}

})


define('jQuery/Value', ['jquery', 'jQuery/ValueOf'], ($, ValueOf) => {

	return function (e, name, v) {
		if (e instanceof Element) {
			if (typeof v === 'undefined' || v === null) {
				return ValueOf($(e).css(name))
			} else {
				$(e).css(name, `${v}px`)
				return e
			}
		} else if (e instanceof $) {
			if (typeof v === 'undefined' || v === null) {
				return ValueOf($(e[0]).css(name))
			} else {
				e.css(name, `${v}px`)
				return e
			}
		}
	}

})


define('jQuery/ValueOf', [], () => {

	return function (v) {
		return parseFloat(v.replace(/px$/, ''))
	}

})


define('jQuery/Width', ['jquery', 'jQuery/Value'], ($, Value) => {

	return function Width (e, v) {
		return Value(e, 'width', v)
	}

})



define('jQuery', [
	'jquery',
	'jQuery/Action',
	'jQuery/ActionHandler',
	'jQuery/ActionHandlers',
	'jQuery/Data',
	'jQuery/Height',
	'jQuery/Property',
	'jQuery/Remove',
	'jQuery/Template',
	'jQuery/Value',
	'jQuery/ValueOf',
	'jQuery/Width'
], ($, Action, ActionHandler, ActionHandlers, Data, Height, Property, Remove, Template, Value, ValueOf, Width) => {


	$.extend({
		ActionHandlers: ActionHandlers,

		/** Height - gets or sets the height of an element
		* @memberof jQuery.
		* @function Height
		* @param {Element|jQuery} element
		* @param {number} [height]
		* @returns {Element|jQuery|number}
		*/
		Height: Height,

		/** Value
		* @memberof jQuery.
		* @function Value
		* @param {Element|jQuery} e
		* @param {string} name - css property name
		* @param {*} [value] - css property value
		* @returns {*} value - css property value or the element
		*/
		Value: Value,

		/** ValueOf
		* @memberof jQuery.
		* @function ValueOf
		* @param {string} value - css property value
		* @returns {float} value - css property value as float
		*/
		ValueOf: ValueOf,

		/** Width - gets or sets the width of an element
		* @memberof jQuery.
		* @function Width
		* @param {Element|jQuery} element
		* @param {number} [width]
		* @returns {Element|jQuery|number}
		*/
		Width: Width
	})


	$.fn.extend({
		Action: Action,
		ActionHandler: ActionHandler,
		Clear: Template.Clear,
		data: Data,
		Get: Template.Get,

		/** Height - gets or sets the height of an element
		* @memberof jQuery#
		* @function Height
		* @param {number} [height]
		* @returns {Element|jQuery|number}
		*/
		Height: function (v) {
			return Height(this, v)
		},
		Property: Property,
		remove: Remove,
		Set: Template.Set,
		Template: Template,

		/** Value
		* @memberof jQuery#
		* @function Value
		* @param {string} name - css property name
		* @param {*} [value] - css property value
		* @returns {*} value - css property value or the element
		*/
		Value: function (name, v) {
			return Value(this, name, v)
		},

		Variables: Template.Variables,

		/** Width - gets or sets the width of an element
		* @memberof jQuery#
		* @function Width
		* @param {number} [width]
		* @returns {Element|jQuery|number}
		*/
		Width: function (v) {
			return Width(this, v)
		}
	})

})


/**
* @module Ui/Widgets/Ui
*/
define('Ui/Widgets/Dialog', ['jquery', 'jquery-ui', 'jQuery', 'Observers'], ($) => {

	return $.widget('Ui.Dialog', {
		options: {
			effects: {
				hide: 'fade',
				show: 'fade'
			},
			backdrop: {
				classes: ['DialogBackdrop'],
				styles: {
					'background-color': '#000000aa',
					position: 'fixed',
					top: '0px',
					left: '0px',
					width: '100%',
					height: '100%',
					padding: '0px',
					margin: '0px'
				}
			},
			closeOnOutClick: true,

			// callbacks
			'before-close': Function.Noop,
			'before-open': Function.Noop,
			closed: Function.Noop,
			opened: Function.Noop
		},
		_create: function () {

			this._ProcessDataConfigs()

			//this.element.wrap('<div class="DialogBackdrop" style="display:none;position:fixed;top:0px;left:0px;width:100%;height:100%;padding:0px;margin:0px;">')
			this.element.wrap('<div style="display:none;">')
			this.Update()
			this.element.show()

			this.element.on('click', (event) => {
				event.preventDefault()
				return false
			})
			this.element.parent().on('click', () => {
				if (this.options.closeOnOutClick) {
					this.Close(false)
				}
			})
			this.element.find('[data-action=close]').each((i, e) => {
				$(e).on('click', () => {this.Close(false)})
			})

		},
		_ProcessDataConfigs: function () {
			this.element.data().Keys().forEach(key => {
				if (key != this.widgetFullName) {
					if (this.options.Keys().includes(key)) {
						this._setOption(key, this.element.data(key))
					}
				}
			})
		},
		_triggerHandler: function( type, event, data ) {
				var prop, orig;
				var callback = this.options[ type ];

				data = data || {};
				event = $.Event( event );
				event.type = ( type === this.widgetEventPrefix ?
					type :
					this.widgetEventPrefix + type ).toLowerCase();

				event.target = this.element[ 0 ];

				orig = event.originalEvent;
				if ( orig ) {
					for ( prop in orig ) {
						if ( !( prop in event ) ) {
							event[ prop ] = orig[ prop ];
						}
					}
				}

				this.element.triggerHandler(event, data);
				return !( typeof callback === "function" &&
					callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
					event.isDefaultPrevented() );
		},
		_setOption: function (name, value) {
			if (name == 'classes') {
				this.element.parent().removeClass(this.options.classes.Difference(value).join(' '))
			}
			this._super(name, value)
			this.Update()
		},
		Update: function (cb = Function.Noop) {
			this.element.parent().addClass(this.options.backdrop.classes.join(' '))
			this.element.parent().css(this.options.backdrop.styles)
		},
		Close: function (...args) {
			let cb = args.last instanceof Function ? args.pop() : Function.Noop
			let effect = args.length > 0 ? args.shift() : this.options.effects.hide

			if (this.IsOpen()) {
				let ret = this._triggerHandler('before-close')
				if (ret === false) {return}

				this._hide(this.element.parent(), effect, () => {
					this._triggerHandler('closed')
					cb()
				})
			}
		},
		IsOpen: function () {
			return this.element.parent().css('display') != 'none'
		},
		Open: function (...args) {
			let cb = args.last instanceof Function ? args.pop() : Function.Noop
			let effect = args.length > 0 ? args.shift() : this.options.effects.show

			if (!this.IsOpen()) {
				let ret = this._triggerHandler('before-open')
				if (ret === false) {return cb(false)}

				this._show(this.element.parent(), effect, () => {
					this._triggerHandler('opened')
					cb()
				})
			} else {
				cb(false)
			}
		}
	})

})



/**
* @module Ui/Widgets/Ui
*/
define('Ui/Widgets/Screen', ['jquery', 'jquery-ui', 'Ui/Widgets/Ui'], ($) => {

	return $.widget('Ui.Screen', $.Ui.Ui, {
		options: {
			disabled: false,
			effects: {
				hide: {
					effect: 'slide',
					direction: 'up'
				},
				show: {
					effect: 'slide',
					direction: 'down'
				}
			},
			name: null,
			show: false,

			// callbacks
		},
		_create: function () {


			this.element.addClass('Ui Screen')
			this._super()
		}
	})

})



/**
* @module Ui/Widgets/Ui
*/
define('Ui/Widgets/Tabs', ['jquery', 'jquery-ui', 'jQuery', 'Observers'], ($) => {

	return $.widget('Ui.Tabs', {
		options: {
			effects: {
				hide: 'fade',
				show: 'fade'
			},
			active: 0,

			// callbacks
			'before-hide': Function.Noop,
			'before-show': Function.Noop,
			hidden: Function.Noop,
			ready: Function.Noop,
			shown: Function.Noop
		},
		_create: function () {

			this._ProcessDataConfigs()

			let tabs = this._Tabs()
			Object.keys(tabs).forEach(name => {
				$(tabs[name].link).removeClass('active')
				$(tabs[name].link).on('click', () => {
					log(name)
					this.Show(name)
				})
				this._hide($(tabs[name].pane))
			})

			this.Update(() => {
				this.Show(this.options.active, () => {
					this._triggerHandler('ready')
				})
			})

		},
		_Tabs: function () {
			let tabs = {}, active = null
			this.element.find('.NavTabs > .NavItem > :first-child').each((i, e) => {
				tabs[$(e).data('name')] = {
					link: e,
					pane: this.element.find(`.TabPane[data-name="${$(e).data('name')}"]`)[0]
				}
			})
			return tabs
		},
		_ProcessDataConfigs: function () {
			this.element.data().Keys().forEach(key => {
				if (key != this.widgetFullName) {
					if (this.options.Keys().includes(key)) {
						this._setOption(key, this.element.data(key))
					}
				}
			})
		},
		_triggerHandler: function( type, event, data ) {
				var prop, orig;
				var callback = this.options[ type ];

				data = data || {};
				event = $.Event( event );
				event.type = ( type === this.widgetEventPrefix ?
					type :
					this.widgetEventPrefix + type ).toLowerCase();

				event.target = this.element[ 0 ];
				orig = event.originalEvent;
				if ( orig ) {
					for ( prop in orig ) {
						if ( !( prop in event ) ) {
							event[ prop ] = orig[ prop ];
						}
					}
				}

				this.element.triggerHandler(event, data);
				return !( typeof callback === "function" &&
					callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
					event.isDefaultPrevented() );
		},
		Hide: function (...args) {
			let cb = args.last instanceof Function ? args.pop() : Function.Noop
			let active = args.length > 0 && (Type(args.first, 'number') || Type(args.first, 'string')) ? args.shift() : this.options.active
			let effect = args.length > 0 ? args.shift() : this.options.effects.hide

			let tabs = this._Tabs()
			active = Type(active, 'number') ? Object.values(tabs)[active] : tabs[active]
			if (this.IsShown(active.pane)) {
				this._triggerHandler('before-hide', active)
				$(active.link).removeClass('active')
				this._hide($(active.pane), effect, () => {
					this.options.active = null
					this._triggerHandler('hidden', active)
					cb()
				})
			} else {
				cb()
			}
		},
		IsShown: function (pane) {
			return $(pane).css('display') != 'none'
		},
		/** Update widget
		* @memberof Ui.Widgets.Ui#
		* @function Update
		* @param {function} [cb]
		*/
		Update: function (cb = Function.Noop) {
			this._triggerHandler('updated')
			cb()
		},
		/** Show widget, with animation
		* @see {@link https://api.jqueryui.com/effect/|jQueryUi Effect}
		* @memberof Ui.Widgets.Ui#
		* @function Show
		* @param {string|object} [effect]
		* @param {fn} [cb]
		*/
		Show: function (...args) {
			let cb = args.last instanceof Function ? args.pop() : Function.Noop
			let active = args.length > 0 && (Type(args.first, 'number') || Type(args.first, 'string')) ? args.shift() : 0
			let effect = args.length > 0 ? args.shift() : this.options.effects.show
			let tabs = this._Tabs()
			active = Type(active, 'number') ? Object.values(tabs)[active] : tabs[active]
			if (!this.IsShown(active.pane)) {
				if (this.options.active != null) {
					this.Hide(() => {
						this._triggerHandler('before-show', active)
						this.options.active = $(active.link).data('name')
						$(active.link).addClass('active')
						this._show($(active.pane), effect, () => {
							this._triggerHandler('shown', active)
							cb()
						})
					})
				} else {
					this._triggerHandler('before-show', active)
					this.options.active = $(active.link).data('name')
					$(active.link).addClass('active')
					this._show($(active.pane), effect, () => {
						this._triggerHandler('shown', active)
						cb()
					})
				}
			}
		}
	})

})



/**
* @module Ui/Widgets/Ui
*/
define('Ui/Widgets/Ui', ['jquery', 'jquery-ui', 'jQuery', 'Observers'], ($) => {

	return $.widget('Ui.Ui', {
		options: {
			disabled: false,
			effects: {
				hide: 'fade',
				show: 'fade'
			},
			show: false,

			// callbacks
			'before-hide': Function.Noop,
			'before-show': Function.Noop,
			hidden: Function.Noop,
			mounted: Function.Noop,
			ready: Function.Noop,
			resized: Function.Noop,
			updated: Function.Noop,
			shown: Function.Noop
		},
		_create: function () {

			this.element.on('mounted', (...args) => {this._triggerHandler('mounted', ...args)})
			this.element.parentsUntil('body').each((i, e) => {$(e).on('mounted', (...args) => {this._triggerHandler('mounted', ...args)})})

			if (this.element.parents('.Ui').length > 0) {
				this.element.parents('.Ui').on('uiupdated', () => {
					this.Update()
				})
			}

			this._ProcessDataConfigs()

			this.Update(() => {
				if (this.options.show == 'onCreate') {
					this.Show()
				}
				this._triggerHandler('ready')
			})

		},
		_ProcessDataConfigs: function () {
			this.element.data().Keys().forEach(key => {
				if (key != this.widgetFullName) {
					if (this.options.Keys().includes(key)) {
						this._setOption(key, this.element.data(key))
						//this.element.removeAttr('data-'+key)
					}
				}
			})
		},
		_triggerHandler: function( type, event, data ) {
				var prop, orig;
				var callback = this.options[ type ];

				data = data || {};
				event = $.Event( event );
				event.type = ( type === this.widgetEventPrefix ?
					type :
					this.widgetEventPrefix + type ).toLowerCase();

				// The original event may come from any element
				// so we need to reset the target on the new event
				event.target = this.element[ 0 ];

				// Copy original event properties over to the new event
				orig = event.originalEvent;
				if ( orig ) {
					for ( prop in orig ) {
						if ( !( prop in event ) ) {
							event[ prop ] = orig[ prop ];
						}
					}
				}

				this.element.triggerHandler(event, data);
				return !( typeof callback === "function" &&
					callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
					event.isDefaultPrevented() );
		},
		/** Hide widget, with animation
		* @see {@link https://api.jqueryui.com/effect/|jQueryUi Effect}
		* @memberof Ui.Widgets.Ui#
		* @function Hide
		* @param {string|object} [effect]
		* @param {fn} [cb]
		*/
		Hide: function (...args) {
			let cb = args.last instanceof Function ? args.pop() : Function.Noop
			let effect = args.length > 0 ? args.shift() : this.options.effects.hide

			if (this.IsShown()) {
				this._triggerHandler('before-hide')
				this._hide(this.element, effect, () => {
					this._triggerHandler('hidden')
					cb()
				})
			}
		},
		IsShown: function () {
			return this.element.css('display') != 'none'
		},
		/** Update widget
		* @memberof Ui.Widgets.Ui#
		* @function Update
		* @param {function} [cb]
		*/
		Update: function (cb = Function.Noop) {
			this._triggerHandler('updated')
			cb()
		},
		/** Show widget, with animation
		* @see {@link https://api.jqueryui.com/effect/|jQueryUi Effect}
		* @memberof Ui.Widgets.Ui#
		* @function Show
		* @param {string|object} [effect]
		* @param {fn} [cb]
		*/
		Show: function (...args) {
			let cb = args.last instanceof Function ? args.pop() : Function.Noop
			let effect = args.length > 0 ? args.shift() : this.options.effects.show

			if (!this.IsShown()) {
				this._triggerHandler('before-show')
				this.element.removeClass('Hidden')
				this._show(this.element, effect, () => {
					this._triggerHandler('shown')
					cb()
				})
			}
		}
	})

})



/**
* @module Ui/Widgets/Dialog/Confirm
*/
define('Ui/Widgets/Dialogs/Confirm', ['jquery', 'jquery-ui', 'Ui/Widgets/Dialog'], ($) => {

	return $.widget('Dialog.Confirm', $.Ui.Dialog, {
		options: {
			closeOnOutClick: false,

			// callbacks
			canceled: Function.Noop,
			confirmed: Function.Noop
		},
		_create: function () {
			this._super()

			this.element.find('[data-action=cancel]').each((i, e) => {
				$(e).on('click', () => {
					this._triggerHandler('canceled')
					this.Close()
				})
			})

			this.element.find('[data-action=confirm]').each((i, e) => {
				$(e).on('click', () => {
					this._triggerHandler('confirmed')
					this.Close()
				})
			})
		}
	})

})



/**
* @module Ui/Widgets/Dialog/Form
*/
define('Ui/Widgets/Dialogs/Form', ['jquery', 'jquery-ui', 'Ui/Widgets/Dialog'], ($) => {

	function ProcessForm (form) {
		form = form instanceof $ ? form : $(form)
		let data = {}

		form.find('select,textarea,input[type!=radio][type!=checkbox]').each((i, e) => {
			data[$(e).attr('name')] = $(e).val()
		})

		form.find('input[type=radio]').each((i, e) => {
			if ($(e).is(':checked')) {
				data[$(e).attr('name')] = $(e).val()
			}
		})

		form.find('input[type=checkbox]').each((i, e) => {
			if (!Reflect.has(data, $(e).attr('name'))) {
				data[$(e).attr('name')] = []
			}
			if ($(e).is(':checked')) {
				data[$(e).attr('name')].push($(e).val())
			}
		})

		return data
	}


	return $.widget('Dialog.Form', $.Ui.Dialog, {
		options: {
			closeOnOutClick:	false,
			submitNullOnCancel: true,

			// callbacks
			canceled: Function.Noop,
			submitted: Function.Noop
		},
		_create: function () {
			this._super()

			this.element.find('[data-action=cancel]').each((i, e) => {
				$(e).on('click', () => {
					this._triggerHandler('canceled')
					this.Close()
					if (this.options.submitNullOnCancel) {
						this._triggerHandler('submitted', {}, null)
					}
				})
			})

			this.element.find('[data-action=submit]').each((i, e) => {
				$(e).on('click', () => {
					this._triggerHandler('submitted', {}, ProcessForm(this.element.find('form')))
					this.Close()
				})
			})
		},
		Open: function (...args) {
			this._super(...args)
		}
	})

})



/**
* @module Ui/Widgets/Dialog/Prompt
*/
define('Ui/Widgets/Dialogs/Prompt', ['jquery', 'jquery-ui', 'Ui/Widgets/Dialog'], ($) => {

	return $.widget('Dialog.Prompt', $.Ui.Dialog, {
		options: {
			closeOnOutClick:	false,
			submitNullOnCancel: true,

			// callbacks
			canceled: Function.Noop,
			submitted: Function.Noop
		},
		_create: function () {
			this._super()

			this.element.find('[data-action=cancel]').each((i, e) => {
				$(e).on('click', () => {
					this._triggerHandler('canceled')
					this.Close()
					if (this.options.submitNullOnCancel) {
						this._triggerHandler('submitted', {}, null)
					}
				})
			})

			this.element.find('[data-action=submit]').each((i, e) => {
				$(e).on('click', () => {
					this._triggerHandler('submitted', {}, this.element.find('.Entry').val())
					this.Close()
				})
			})
		},
		Open: function (...args) {
			this.element.find('.Entry').val('')
			this._super(...args)
		}
	})

})



define('Ui/Widgets', ['Ui/Widgets/Ui', 'Ui/Widgets/Dialog', 'Ui/Widgets/Dialogs/Confirm', 'Ui/Widgets/Dialogs/Prompt', 'Ui/Widgets/Dialogs/Form', 'Ui/Widgets/Screen', 'Ui/Widgets/Tabs'], () => {

})



define('Ui/App', ['jquery', 'jquery-ui', 'Ui/Loader', 'Ui/Widgets'], () => {

	function App (...args) {
		let config = Type(args.last, 'object') ? args.pop() : {}

		let e = args.shift()
		e = typeof e === 'undefined' ? $('.App') : e
		e = typeof e === 'string' ? $(e) : e
		e = e instanceof $ ? e[0] : e
		if (!(e instanceof HTMLElement)) {throw new Error('Unknown App element')}

		this.e = e
		this.$e = $(e)

		this.$e.data(config)

		this.screens = {}
		Define(this.screens, 'current', {get: () => {
			let current = null
			Object.values(this.screens).forEach(screen => {
				if (screen.IsShown()) {
					current = screen
				}
			})
			return current
		}})



		this.RegisterActions()

		$.LoadViews().then(() => {
			let loader = this.$e.find('.Loader')
			loader.hide('fade', () => {
				loader.remove()
				this.$e.trigger('ready')
			})
		})

		return this
	}

	App.prototype.Navigate = function (name = 'Home', cb = Function.Noop) {
		if (this.screens.current != null) {
			if (this.screens.current.options.name != name) {
				this.screens.current.Hide(() => {
					this.screens[name].Show(cb)
				})
			}
		} else {
			this.screens[name].Show(cb)
		}
	}

	App.prototype.RegisterActions = function () {
		$('.App').ActionHandler('RegisterScreen', (screen) => {
			this.screens[screen.options.name] = screen
			if (this.screens.current == null && screen.options.name == (this.$e.data('home') || 'Home')) {
				screen.Show()
			}
		})
		$('.App').ActionHandler('Navigate', (screen) => {
			this.Navigate(screen)
		})
		$('.App').ActionHandler('Dialog', (name) => {
			$('.App').find(`.Dialog[data-name="${name}"]`).Dialog('Open')
		})
		$('.App').ActionHandler('Save', () => {
			log('Save')
		})

	}


	$.extend({App: App})

/*
	$('head style[id*=ootstrap]').not('#notify-bootstrap').prop('disabled', true)
	$('head style[id*=ootstrap]').not('#notify-bootstrap').remove()


	let App = Object.Extensions.UiLoader({})

	App.LoadUi($).then(() => {
		$('.app').triggerHandler('ready')
	})

/*
	$('.app').ActionHandler('Navigate', (screen) => {
		function Show () {
			log($('#'+screen))
			$('#'+screen).show({effect: 'slide', direction: 'right'})
		}

		$('.app').find('.Screen').each((i, e) => {
			if (e.style.display != 'none' && screen != $(e).attr('id')) {
				$(e).hide('slide', {direction: 'left'}, Show)
			}
		})

	})

	$(document).on('keypress', event => {
		if (event.originalEvent.ctrlKey && event.originalEvent.code == 'KeyS') {
			$('.app').Action('Save')
		}
		if (event.originalEvent.ctrlKey && event.originalEvent.code == 'KeyO') {
			$('.app').Action('Open')
		}
	})

	App.LoadUi($).then(() => {
		$('.app').triggerHandler('ready')
	})


	/*
	function LoadViews (element) {
		return Promise.all($(element).find('view').toArray().map(e => {
			return new Promise((resolve, reject) => {
				$.UiLoader.Load('views/'+$(e).attr('id')+'.html').then(view => {
					LoadViews(view).then(() => {
						$(e).replaceWith(view)
						resolve()
					}).catch(reject)
				})
			})
		}))
	}

	$(() => {
		LoadViews($('.app')).then(() => {
			log('App.Ready')
			$('.app').triggerHandler('ready')
		})
	})
	*/
})



/**
* @module @tyler.thayn/ui.loader
*/
define('Ui/Loader', ['jquery'], ($) => {

	let id = 0;
	function Id () {
		return (++id).toString()
	}

	function View (element) {
		this.element = element
		this.id = $(element).attr('id') ? $(element).attr('id') : Id()
		this.html = ''
		this.elements = []
		this.scripts = []
		this.styles = []

		return this
	}

	View.prototype.ExecScripts = function () {
		return Promise.all(
			this.elements.map(e => {
				return Promise.all(
					this.scripts.map(script => {

						return new Promise((resolve, reject) => {
							if (Reflect.has(script, 'src') && script.src != '') {
								$(script).on('load', () => {
									resolve()
								})
								$(script).on('error', reject)
								document.head.append(script)
							} else {
								let fn = new Function('$', $(script).text())
								return resolve(fn.call(this.elements[0], $))
							}
						})

					})
				)
			})
		)
	}

	View.prototype.Load = function () {
		return new Promise((resolve, reject) => {
			$.get($(this.element).attr('src'), res => {
				this.html = res

				$(this.html).each((i, e) => {
					if (e instanceof Element) {
						if (e instanceof HTMLScriptElement) {
							this.scripts.push(e)
						} else if (e instanceof HTMLLinkElement) {
							$(e).data('id', this.id)
							this.styles.push(e)
							$('head').append(e)
						} else if (e instanceof HTMLStyleElement) {
							$(e).data('id', this.id)
							this.styles.push(e)
							$('head').append(e)
						} else {
							this.elements.push(e)
						}
					}
				})

				if (this.elements.length < 1) {return reject(new Error('No elements available to load'))}

				Promise.all(
					this.elements.map(e => {
						return Promise.all(
							$(e).find('view').map((i, e) => {
								return LoadView(e)
							})
						)
					})
				).then(() => {
					$(this.element).replaceWith(this.elements)
					this.ExecScripts().then(resolve).catch(reject)
				}).catch(reject)

			})
		})
	}

	function LoadView (element) {
		let view = new View(element)
		return view.Load()
	}

	function LoadViews () {
		return Promise.all(
			$('view').map((i, e) => {return LoadView(e)})
		)
	}

	$.extend({
		LoadView: LoadView,
		LoadViews: LoadViews
	})

})



define('Ui', ['jquery', 'jquery-ui', 'jQuery', 'Observers', 'Ui/Widgets', 'Ui/Loader', 'Ui/App'], () => {

})
