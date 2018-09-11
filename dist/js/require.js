/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.9 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */var requirejs,require,define;(function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,r){if(e){var n;for(n=0;n<e.length&&!(e[n]&&r(e[n],n,e));n+=1);}}function eachReverse(e,r){if(e){var n;for(n=e.length-1;-1<n&&!(e[n]&&r(e[n],n,e));n-=1);}}function hasProp(e,i){return hasOwn.call(e,i)}function getOwn(e,i){return hasProp(e,i)&&e[i]}function eachProp(e,i){for(var r in e)if(hasProp(e,r)&&i(e[r],r))break}function mixin(e,i,r,n){return i&&eachProp(i,function(i,t){(r||!hasProp(e,t))&&(n&&"string"!=typeof i?(!e[t]&&(e[t]={}),mixin(e[t],i,r,n)):e[t]=i)}),e}function bind(e,i){return function(){return i.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var i=global;return each(e.split("."),function(e){i=i[e]}),i}function makeError(i,r,n,t){var a=new Error(r+"\nhttp://requirejs.org/docs/errors.html#"+i);return a.requireType=i,a.requireModules=t,n&&(a.originalError=n),a}function newContext(e){function r(e){var r,n;for(r=0;e[r];r+=1)if(n=e[r],"."===n)e.splice(r,1),r-=1;else if(".."===n)if(1===r&&(".."===e[2]||".."===e[0]))break;else 0<r&&(e.splice(r-1,2),r-=2)}function i(e,n,t){var a,d,o,p,s,l,m,c,u,f,g,h=n&&n.split("/"),x=h,b=y.map,E=b&&b["*"];if(e&&"."===e.charAt(0)&&(n?(x=getOwn(y.pkgs,n)?h=[n]:h.slice(0,h.length-1),e=x.concat(e.split("/")),r(e),d=getOwn(y.pkgs,a=e[0]),e=e.join("/"),d&&e===a+"/"+d.main&&(e=a)):0===e.indexOf("./")&&(e=e.substring(2))),t&&b&&(h||E)){for(p=e.split("/"),s=p.length;0<s;s-=1){if(m=p.slice(0,s).join("/"),h)for(l=h.length;0<l;l-=1)if(o=getOwn(b,h.slice(0,l).join("/")),o&&(o=getOwn(o,m),o)){c=o,u=s;break}if(c)break;!f&&E&&getOwn(E,m)&&(f=getOwn(E,m),g=s)}!c&&f&&(c=f,u=g),c&&(p.splice(0,u,c),e=p.join("/"))}return e}function n(e){isBrowser&&each(scripts(),function(i){if(i.getAttribute("data-requiremodule")===e&&i.getAttribute("data-requirecontext")===k.contextName)return i.parentNode.removeChild(i),!0})}function t(e){var i=getOwn(y.paths,e);if(i&&isArray(i)&&1<i.length)return i.shift(),k.require.undef(e),k.require([e]),!0}function a(e){var i,r=e?e.indexOf("!"):-1;return-1<r&&(i=e.substring(0,r),e=e.substring(r+1,e.length)),[i,e]}function d(e,r,n,t){var d,o,p,s,l=null,m=r?r.name:null,c=e,u=!0,f="";return e||(u=!1,e="_@r"+(C+=1)),s=a(e),l=s[0],e=s[1],l&&(l=i(l,m,t),o=getOwn(j,l)),e&&(l?o&&o.normalize?f=o.normalize(e,function(e){return i(e,m,t)}):f=i(e,m,t):(f=i(e,m,t),s=a(f),l=s[0],f=s[1],n=!0,d=k.nameToUrl(f))),p=!l||o||n?"":"_unnormalized"+(L+=1),{prefix:l,name:f,parentMap:r,unnormalized:!!p,url:d,originalName:c,isDefine:u,id:(l?l+"!"+f:f)+p}}function o(e){var i=e.id,r=getOwn(v,i);return r||(r=v[i]=new k.Module(e)),r}function p(e,i,r){var n=e.id,t=getOwn(v,n);hasProp(j,n)&&(!t||t.defineEmitComplete)?"defined"===i&&r(j[n]):(t=o(e),t.error&&"error"===i?r(t.error):t.on(i,r))}function s(e,i){var r=e.requireModules,n=!1;i?i(e):(each(r,function(i){var r=getOwn(v,i);r&&(r.error=e,r.events.error&&(n=!0,r.emit("error",e)))}),!n&&req.onError(e))}function l(){globalDefQueue.length&&(apsp.apply(N,[N.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function m(e){delete v[e],delete T[e]}function c(e,r,n){var i=e.map.id;e.error?e.emit("error",e.error):(r[i]=!0,each(e.depMaps,function(t,a){var i=t.id,d=getOwn(v,i);!d||e.depMatched[a]||n[i]||(getOwn(r,i)?(e.defineDep(a,j[i]),e.check()):c(d,r,n))}),n[i]=!0)}function u(){var e,i,r,a,d=1e3*y.waitSeconds,o=d&&k.startTime+d<new Date().getTime(),p=[],l=[],m=!1,f=!0;if(!b)return b=!0,eachProp(T,function(r){if((e=r.map,i=e.id,!!r.enabled)&&(e.isDefine||l.push(r),!r.error))if(!r.inited&&o)t(i)?(a=!0,m=!0):(p.push(i),n(i));else if(!r.inited&&r.fetched&&e.isDefine&&(m=!0,!e.prefix))return f=!1}),o&&p.length?(r=makeError("timeout","Load timeout for modules: ",null,p),r.contextName=k.contextName,s(r)):void(f&&each(l,function(e){c(e,{},{})}),(!o||a)&&m&&(isBrowser||isWebWorker)&&!M&&(M=setTimeout(function(){M=0,u()},50)),b=!1)}function f(e){hasProp(j,e[0])||o(d(e[0],null,!0)).init(e[1],e[2])}function g(e,i,r,n){e.detachEvent&&!isOpera?n&&e.detachEvent(n,i):e.removeEventListener(r,i,!1)}function h(e){var i=e.currentTarget||e.srcElement;return g(i,k.onScriptLoad,"load","onreadystatechange"),g(i,k.onScriptError,"error"),{node:i,id:i&&i.getAttribute("data-requiremodule")}}function x(){var e;for(l();N.length;){if(e=N.shift(),null===e[0])return s(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));f(e)}}var b,E,k,q,M,y={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},v={},T={},S={},N=[],j={},A={},C=1,L=1;return q={require:function(e){return e.require?e.require:e.require=k.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?e.exports:e.exports=j[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){var i,r=getOwn(y.pkgs,e.map.id);return i=r?getOwn(y.config,e.map.id+"/"+r.main):getOwn(y.config,e.map.id),i||{}},exports:j[e.map.id]}}},E=function(e){this.events=getOwn(S,e.id)||{},this.map=e,this.shim=getOwn(y.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},E.prototype={init:function(e,i,r,n){n=n||{},this.inited||(this.factory=i,r?this.on("error",r):this.events.error&&(r=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,this.ignore=n.ignore,n.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,i){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=i)},fetch:function(){if(!this.fetched){this.fetched=!0,k.startTime=new Date().getTime();var e=this.map;return this.shim?void k.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;A[e]||(A[e]=!0,k.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var i,e,r=this.map.id,n=this.depExports,t=this.exports,a=this.factory;if(!this.inited)this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(isFunction(a)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{t=k.execCb(r,a,n,t)}catch(r){i=r}else t=k.execCb(r,a,n,t);if(this.map.isDefine&&(e=this.module,e&&void 0!==e.exports&&e.exports!==this.exports?t=e.exports:void 0===t&&this.usingExports&&(t=this.exports)),i)return i.requireMap=this.map,i.requireModules=this.map.isDefine?[this.map.id]:null,i.requireType=this.map.isDefine?"define":"require",s(this.error=i)}else t=a;this.exports=t,this.map.isDefine&&!this.ignore&&(j[r]=t,req.onResourceLoad&&req.onResourceLoad(k,this.map,this.depMaps)),m(r),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}},callPlugin:function(){var e=this.map,r=e.id,n=d(e.prefix);this.depMaps.push(n),p(n,"defined",bind(this,function(n){var t,a,l,c=this.map.name,u=this.map.parentMap?this.map.parentMap.name:null,f=k.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(n.normalize&&(c=n.normalize(c,function(e){return i(e,u,!0)})||""),a=d(e.prefix+"!"+c,this.map.parentMap),p(a,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),l=getOwn(v,a.id),void(l&&(this.depMaps.push(a),this.events.error&&l.on("error",bind(this,function(e){this.emit("error",e)})),l.enable()))):void(t=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),t.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[r],eachProp(v,function(e){0===e.map.id.indexOf(r+"_unnormalized")&&m(e.map.id)}),s(e)}),t.fromText=bind(this,function(i,n){var a=e.name,p=d(a),l=useInteractive;n&&(i=n),l&&(useInteractive=!1),o(p),hasProp(y.config,r)&&(y.config[a]=y.config[r]);try{req.exec(i)}catch(i){return s(makeError("fromtexteval","fromText eval for "+r+" failed: "+i,i,[r]))}l&&(useInteractive=!0),this.depMaps.push(p),k.completeLoad(a),f([a],t)}),n.load(e.name,f,t,y))})),k.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){T[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,r){var i,n,t;if("string"==typeof e){if(e=d(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[r]=e,t=getOwn(q,e.id),t)return void(this.depExports[r]=t(this));this.depCount+=1,p(e,"defined",bind(this,function(e){this.defineDep(r,e),this.check()})),this.errback&&p(e,"error",bind(this,this.errback))}i=e.id,n=v[i],hasProp(q,i)||!n||n.enabled||k.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var i=getOwn(v,e.id);i&&!i.enabled&&k.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,i){var r=this.events[e];r||(r=this.events[e]=[]),r.push(i)},emit:function(e,i){each(this.events[e],function(e){e(i)}),"error"===e&&delete this.events[e]}},k={config:y,contextName:e,registry:v,defined:j,urlFetched:A,defQueue:N,Module:E,makeModuleMap:d,nextTick:req.nextTick,onError:s,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var i=y.pkgs,r=y.shim,n={paths:!0,config:!0,map:!0};eachProp(e,function(e,i){n[i]?"map"===i?(!y.map&&(y.map={}),mixin(y[i],e,!0,!0)):mixin(y[i],e,!0):y[i]=e}),e.shim&&(eachProp(e.shim,function(e,i){isArray(e)&&(e={deps:e}),(e.exports||e.init)&&!e.exportsFn&&(e.exportsFn=k.makeShimExports(e)),r[i]=e}),y.shim=r),e.packages&&(each(e.packages,function(e){var r;e="string"==typeof e?{name:e}:e,r=e.location,i[e.name]={name:e.name,location:r||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),y.pkgs=i),eachProp(v,function(e,i){e.inited||e.map.unnormalized||(e.map=d(i))}),(e.deps||e.callback)&&k.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var i;return e.init&&(i=e.init.apply(global,arguments)),i||e.exports&&getGlobal(e.exports)}},makeRequire:function(r,t){function a(i,n,p){var l,m,c;return(t.enableBuildCallback&&n&&isFunction(n)&&(n.__requireJsBuild=!0),"string"==typeof i)?isFunction(n)?s(makeError("requireargs","Invalid require call"),p):r&&hasProp(q,i)?q[i](v[r.id]):req.get?req.get(k,i,r,a):(m=d(i,r,!1,!0),l=m.id,hasProp(j,l)?j[l]:s(makeError("notloaded","Module name \""+l+"\" has not been loaded yet for context: "+e+(r?"":". Use require([])")))):(x(),k.nextTick(function(){x(),c=o(d(null,r)),c.skipMap=t.skipMap,c.init(i,n,p,{enabled:!0}),u()}),a)}return t=t||{},mixin(a,{isBrowser:isBrowser,toUrl:function(e){var n,t=e.lastIndexOf("."),a=e.split("/")[0];return-1!==t&&(!("."===a||".."===a)||1<t)&&(n=e.substring(t,e.length),e=e.substring(0,t)),k.nameToUrl(i(e,r&&r.id,!0),n,!0)},defined:function(e){return hasProp(j,d(e,r,!1,!0).id)},specified:function(e){return e=d(e,r,!1,!0).id,hasProp(j,e)||hasProp(v,e)}}),r||(a.undef=function(e){l();var i=d(e,r,!0),t=getOwn(v,e);n(e),delete j[e],delete A[i.url],delete S[e],t&&(t.events.defined&&(S[e]=t.events),m(e))}),a},enable:function(e){var i=getOwn(v,e.id);i&&o(e).enable()},completeLoad:function(e){var i,r,n,a=getOwn(y.shim,e)||{},d=a.exports;for(l();N.length;){if(r=N.shift(),null===r[0]){if(r[0]=e,i)break;i=!0}else r[0]===e&&(i=!0);f(r)}if(n=getOwn(v,e),!i&&!hasProp(j,e)&&n&&!n.inited){if(y.enforceDefine&&(!d||!getGlobal(d)))return t(e)?void 0:s(makeError("nodefine","No define call for "+e,null,[e]));f([e,a.deps||[],a.exportsFn])}u()},nameToUrl:function(e,r,n){var t,a,d,o,p,s,l,m,c;if(req.jsExtRegExp.test(e))m=e+(r||"");else{for(t=y.paths,a=y.pkgs,p=e.split("/"),s=p.length;0<s;s-=1)if(l=p.slice(0,s).join("/"),d=getOwn(a,l),c=getOwn(t,l),c){isArray(c)&&(c=c[0]),p.splice(0,s,c);break}else if(d){o=e===d.name?d.location+"/"+d.main:d.location,p.splice(0,s,o);break}m=p.join("/"),m+=r||(/^data\:|\?/.test(m)||n?"":".js"),m=("/"===m.charAt(0)||m.match(/^[\w\+\.\-]+:/)?"":y.baseUrl)+m}return y.urlArgs?m+((-1===m.indexOf("?")?"?":"&")+y.urlArgs):m},load:function(e,i){req.load(k,e,i)},execCb:function(e,i,r,n){return i.apply(n,r)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var i=h(e);k.completeLoad(i.id)}},onScriptError:function(e){var i=h(e);if(!t(i.id))return s(makeError("scripterror","Script error for: "+i.id,e,[i.id]))}},k.require=k.makeRequire(),k}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.9",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!!("undefined"!=typeof window&&"undefined"!=typeof navigator&&window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,i,r,n){var t,a,d="_";return isArray(e)||"string"==typeof e||(a=e,isArray(i)?(e=i,i=r,r=n):e=[]),a&&a.context&&(d=a.context),t=getOwn(contexts,d),t||(t=contexts[d]=req.s.newContext(d)),a&&t.configure(a),t.require(e,i,r)},req.config=function(e){return req(e)},req.nextTick="undefined"==typeof setTimeout?function(e){e()}:function(e){setTimeout(e,4)},require||(require=req),req.version="2.1.9",req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var i=contexts._;return i.require[e].apply(i,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e){var i=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return i.type=e.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i},req.load=function(i,r,n){var e,t=i&&i.config||{};if(isBrowser)return e=req.createNode(t,r,n),e.setAttribute("data-requirecontext",i.contextName),e.setAttribute("data-requiremodule",r),!e.attachEvent||e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code")||isOpera?(e.addEventListener("load",i.onScriptLoad,!1),e.addEventListener("error",i.onScriptError,!1)):(useInteractive=!0,e.attachEvent("onreadystatechange",i.onScriptLoad)),e.src=n,currentlyAddingScript=e,baseElement?head.insertBefore(e,baseElement):head.appendChild(e),currentlyAddingScript=null,e;if(isWebWorker)try{importScripts(n),i.completeLoad(r)}catch(t){i.onError(makeError("importscripts","importScripts failed for "+r+" at "+n,t,[r]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain)return mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,i,r){var n,t;"string"!=typeof e&&(r=i,i=e,e=null),isArray(i)||(r=i,i=null),!i&&isFunction(r)&&(i=[],r.length&&(r.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,r){i.push(r)}),i=(1===r.length?["require"]:["require","exports","module"]).concat(i))),useInteractive&&(n=currentlyAddingScript||getInteractiveScript(),n&&(!e&&(e=n.getAttribute("data-requiremodule")),t=contexts[n.getAttribute("data-requirecontext")])),(t?t.defQueue:globalDefQueue).push([e,i,r])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}})(this);