(self["webpackChunkweb_project"]=self["webpackChunkweb_project"]||[]).push([[998],{1001:function(t,e,n){"use strict";function r(t,e,n,r,i,a,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return r}})},1365:function(t,e,n){var r=n(614),i=n(6330),a=TypeError;t.exports=function(t){if(r(t))return t;throw a(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,a=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw a("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,a=TypeError;t.exports=function(t){if(r(t))return t;throw a(i(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),i=n(1400),a=n(6244),o=function(t){return function(e,n,o){var s,l=r(e),c=a(l),u=i(o,c);if(t&&n!=n){while(c>u)if(s=l[u++],s!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),a=TypeError,o=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(i(t)&&!o(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},4326:function(t,e,n){var r=n(1702),i=r({}.toString),a=r("".slice);t.exports=function(t){return a(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),a=n(4326),o=n(5112),s=o("toStringTag"),l=Object,c="Arguments"==a(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=l(t),s))?n:c?a(e):"Object"==(r=a(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),a=n(1236),o=n(3070);t.exports=function(t,e,n){for(var s=i(e),l=o.f,c=a.f,u=0;u<s.length;u++){var h=s[u];r(t,h)||n&&r(n,h)||l(t,h,c(e,h))}}},8880:function(t,e,n){var r=n(9781),i=n(3070),a=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),a=n(6339),o=n(3072);t.exports=function(t,e,n,s){s||(s={});var l=s.enumerable,c=void 0!==s.name?s.name:e;if(r(n)&&a(n,c,s),s.global)l?t[e]=n:o(e,n);else{try{s.unsafe?t[e]&&(l=!0):delete t[e]}catch(u){}l?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),a=r.document,o=i(a)&&i(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9363:function(t){t.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326);t.exports="undefined"!=typeof process&&"process"==r(process)},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,a=n(7854),o=n(8113),s=a.process,l=a.Deno,c=s&&s.versions||l&&l.version,u=c&&c.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,a=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,l=s.test(o);t.exports=function(t,e){if(l&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=a(t,s,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,a=n(8880),o=n(8052),s=n(3072),l=n(9920),c=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,v=t.target,m=t.global,g=t.stat;if(u=m?r:g?r[v]||s(v,{}):(r[v]||{}).prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=c(m?h:v+(g?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&a(f,"sham",!0),o(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,a=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(a):function(){return o.apply(a,arguments)})},9974:function(t,e,n){var r=n(1470),i=n(1365),a=n(4374),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:a?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),a=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,s=i(a,"name"),l=s&&"something"===function(){}.name,c=s&&(!r||r&&o(a,"name").configurable);t.exports={EXISTS:s,PROPER:l,CONFIGURABLE:c}},1470:function(t,e,n){var r=n(4326),i=n(1702);t.exports=function(t){if("Function"===r(t))return i(t)}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,a=i.call,o=r&&i.bind.bind(a,a);t.exports=r?o:function(t){return function(){return a.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),a=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?a(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(1365),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),a=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),a=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),a=n(4326),o=Object,s=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),i=n(111),a=n(7674);t.exports=function(t,e,n){var o,s;return a&&r(o=e.constructor)&&o!==n&&i(s=o.prototype)&&s!==n.prototype&&a(t,s),t}},2788:function(t,e,n){var r=n(1702),i=n(614),a=n(5465),o=r(Function.toString);i(a.inspectSource)||(a.inspectSource=function(t){return o(t)}),t.exports=a.inspectSource},9909:function(t,e,n){var r,i,a,o=n(4811),s=n(7854),l=n(111),c=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",v=s.TypeError,m=s.WeakMap,g=function(t){return a(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!l(e)||(n=i(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var b=h.state||(h.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw v(p);return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},a=function(t){return b.has(t)}}else{var z=d("state");f[z]=!0,r=function(t,e){if(u(t,z))throw v(p);return e.facade=t,c(t,z,e),e},i=function(t){return u(t,z)?t[z]:{}},a=function(t){return u(t,z)}}t.exports={set:r,get:i,has:a,enforce:g,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),a=/#|\.prototype\./,o=function(t,e){var n=l[s(t)];return n==u||n!=c&&(i(e)?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(a,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),a=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===a}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),a=n(7976),o=n(3307),s=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&a(e.prototype,s(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),a=n(614),o=n(2597),s=n(9781),l=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,v=r("".slice),m=r("".replace),g=r([].join),y=s&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),z=t.exports=function(t,e,n){"Symbol("===v(f(e),0,7)&&(e="["+m(f(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||l&&t.name!==e)&&(s?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=g(b,"string"==typeof e?e:"")),t};Function.prototype.toString=z((function(){return a(this)&&d(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),i=n(4664),a=n(3353),o=n(9670),s=n(4948),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?a?function(t,e,n){if(o(t),e=s(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=u(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),a=n(5296),o=n(9114),s=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=s(t),e=l(e),u)try{return h(t,e)}catch(n){}if(c(t,e))return o(!i(a.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),a=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),a=n(5656),o=n(1318).indexOf,s=n(3501),l=r([].push);t.exports=function(t,e){var n,r=a(t),c=0,u=[];for(n in r)!i(s,n)&&i(r,n)&&l(u,n);while(e.length>c)i(r,n=e[c++])&&(~o(u,n)||l(u,n));return u}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),a=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),a(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),a=n(111),o=TypeError;t.exports=function(t,e){var n,s;if("string"===e&&i(n=t.toString)&&!a(s=r(n,t)))return s;if(i(n=t.valueOf)&&!a(s=r(n,t)))return s;if("string"!==e&&i(n=t.toString)&&!a(s=r(n,t)))return s;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),a=n(8006),o=n(5181),s=n(9670),l=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=a.f(s(t)),n=o.f;return n?l(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},7152:function(t,e,n){"use strict";var r=n(7854),i=n(2104),a=n(614),o=n(9363),s=n(8113),l=n(206),c=n(8053),u=r.Function,h=/MSIE .\./.test(s)||o&&function(){var t=r.Bun.version.split(".");return t.length<3||0==t[0]&&(t[1]<3||3==t[1]&&0==t[2])}();t.exports=function(t,e){var n=e?2:1;return h?function(r,o){var s=c(arguments.length,1)>n,h=a(r)?r:u(r),d=s?l(arguments,n):[],f=s?function(){i(h,this,d)}:h;return e?t(f,o):t(f)}:t}},6200:function(t,e,n){var r=n(2309),i=n(9711),a=r("keys");t.exports=function(t){return a[t]||(a[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),a="__core-js_shared__",o=r[a]||i(a,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.27.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(t,e,n){var r,i,a,o,s=n(7854),l=n(2104),c=n(9974),u=n(614),h=n(2597),d=n(7293),f=n(490),p=n(206),v=n(317),m=n(8053),g=n(6833),y=n(5268),b=s.setImmediate,z=s.clearImmediate,w=s.process,M=s.Dispatch,A=s.Function,C=s.MessageChannel,O=s.String,V=0,S={},H="onreadystatechange";d((function(){r=s.location}));var T=function(t){if(h(S,t)){var e=S[t];delete S[t],e()}},I=function(t){return function(){T(t)}},k=function(t){T(t.data)},_=function(t){s.postMessage(O(t),r.protocol+"//"+r.host)};b&&z||(b=function(t){m(arguments.length,1);var e=u(t)?t:A(t),n=p(arguments,1);return S[++V]=function(){l(e,void 0,n)},i(V),V},z=function(t){delete S[t]},y?i=function(t){w.nextTick(I(t))}:M&&M.now?i=function(t){M.now(I(t))}:C&&!g?(a=new C,o=a.port2,a.port1.onmessage=k,i=c(o.postMessage,o)):s.addEventListener&&u(s.postMessage)&&!s.importScripts&&r&&"file:"!==r.protocol&&!d(_)?(i=_,s.addEventListener("message",k,!1)):i=H in v("script")?function(t){f.appendChild(v("script"))[H]=function(){f.removeChild(this),T(t)}}:function(t){setTimeout(I(t),0)}),t.exports={set:b,clear:z}},1400:function(t,e,n){var r=n(9303),i=Math.max,a=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):a(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),a=n(2190),o=n(8173),s=n(2140),l=n(5112),c=TypeError,u=l("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var n,l=o(t,u);if(l){if(void 0===e&&(e="default"),n=r(l,t,e),!i(n)||a(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),a={};a[i]="z",t.exports="[object z]"===String(a)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,a=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+a,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){var r=n(7854),i=n(614),a=r.WeakMap;t.exports=i(a)&&/native code/.test(String(a))},5112:function(t,e,n){var r=n(7854),i=n(2309),a=n(2597),o=n(9711),s=n(6293),l=n(3307),c=r.Symbol,u=i("wks"),h=l?c["for"]||c:c&&c.withoutSetter||o;t.exports=function(t){return a(u,t)||(u[t]=s&&a(c,t)?c[t]:h("Symbol."+t)),u[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),a=n(6244),o=n(3658),s=n(7207),l=n(7293),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=a(e),r=arguments.length;s(n+r);for(var l=0;l<r;l++)e[n]=arguments[l],n++;return o(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),a=n(6244),o=n(3658),s=n(5117),l=n(7207),c=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=c||!u();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=i(this),n=a(e),r=arguments.length;if(r){l(n+r);var c=n;while(c--){var u=c+r;c in e?e[u]=e[c]:s(e,u)}for(var h=0;h<r;h++)e[h]=arguments[h]}return o(e,n+r)}})},1091:function(t,e,n){var r=n(2109),i=n(7854),a=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==a},{clearImmediate:a})},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),a=n(5005),o=n(9114),s=n(3070).f,l=n(2597),c=n(5787),u=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),v=n(1913),m="DOMException",g=a("Error"),y=a(m),b=function(){c(this,z);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=g(e);return i.name=m,s(r,"stack",o(1,f(i.stack,1))),u(r,this,b),r},z=b.prototype=y.prototype,w="stack"in g(m),M="stack"in new y(1,2),A=y&&p&&Object.getOwnPropertyDescriptor(i,m),C=!!A&&!(A.writable&&A.configurable),O=w&&!C&&!M;r({global:!0,constructor:!0,forced:v||O},{DOMException:O?b:y});var V=a(m),S=V.prototype;if(S.constructor!==V)for(var H in v||s(S,"constructor",o(1,V)),d)if(l(d,H)){var T=d[H],I=T.s;l(V,I)||s(V,I,o(6,T.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var r=n(2109),i=n(7854),a=n(261).set,o=n(7152),s=i.setImmediate?o(a,!1):a;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==s},{setImmediate:s})},7024:function(){},223:function(t,e,n){"use strict";n.d(e,{$s:function(){return K},BH:function(){return y},L:function(){return s},LL:function(){return k},P0:function(){return v},Pz:function(){return g},Sg:function(){return b},UG:function(){return M},ZR:function(){return I},aH:function(){return m},b$:function(){return C},eu:function(){return S},hl:function(){return V},m9:function(){return X},ne:function(){return j},pd:function(){return F},q4:function(){return p},ru:function(){return A},tV:function(){return l},uI:function(){return w},vZ:function(){return B},w1:function(){return O},xO:function(){return x},xb:function(){return E},z$:function(){return z},zI:function(){return H},zd:function(){return D}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=t[n++],o=t[n++],s=t[n++],l=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(1023&l))}else{const a=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return e.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],a=i+1<t.length,o=a?t[i+1]:0,s=i+2<t.length,l=s?t[i+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;s||(d=64,a||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],a=i<t.length,o=a?n[t.charAt(i)]:0;++i;const s=i<t.length,l=s?n[t.charAt(i)]:64;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==l||null==u)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==l){const t=o<<4&240|l>>2;if(r.push(t),64!==u){const t=l<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return a.encodeByteArray(e,!0)},s=function(t){return o(t).replace(/\./g,"")},l=function(t){try{return a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=()=>c().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},f=()=>{try{return u()||h()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},p=t=>{var e,n;return null===(n=null===(e=f())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},m=()=>{var t;return null===(t=f())||void 0===t?void 0:t.config},g=t=>{var e;return null===(e=f())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[s(JSON.stringify(n)),s(JSON.stringify(o)),l].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function w(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function M(){var t;const e=null===(t=f())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function A(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function O(){const t=z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function V(){try{return"object"===typeof indexedDB}catch(t){return!1}}function S(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function H(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],a=i?_(i,n):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new I(r,o,n);return s}}function _(t,e){return t.replace(L,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function B(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],a=e[i];if(P(n)&&P(a)){if(!B(n,a))return!1}else if(n!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function P(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function D(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function F(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){const n=new N(t,e);return n.subscribe.bind(n)}class N{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=$(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=R),void 0===r.error&&(r.error=R),void 0===r.complete&&(r.complete=R);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function R(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=1e3,q=2,W=144e5,G=.5;function K(t,e=U,n=q){const r=e*Math.pow(n,t),i=Math.round(G*r*(Math.random()-.5)*2);return Math.min(W,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const fe=1e6,pe=1e3,ve="transitionend",me=t=>null===t||void 0===t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),ge=t=>{do{t+=Math.floor(Math.random()*fe)}while(document.getElementById(t));return t},ye=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},be=t=>{const e=ye(t);return e&&document.querySelector(e)?e:null},ze=t=>{const e=ye(t);return e?document.querySelector(e):null},we=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),i=Number.parseFloat(n);return r||i?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*pe):0},Me=t=>{t.dispatchEvent(new Event(ve))},Ae=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),Ce=t=>Ae(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,Oe=t=>{if(!Ae(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const e=t.closest("summary");if(e&&e.parentNode!==n)return!1;if(null===e)return!1}return e},Ve=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),Se=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?Se(t.parentNode):null},He=()=>{},Te=t=>{t.offsetHeight},Ie=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ke=[],_e=t=>{"loading"===document.readyState?(ke.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of ke)t()})),ke.push(t)):t()},Le=()=>"rtl"===document.documentElement.dir,Ee=t=>{_e((()=>{const e=Ie();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}}))},Be=t=>{"function"===typeof t&&t()},Pe=(t,e,n=!0)=>{if(!n)return void Be(t);const r=5,i=we(e)+r;let a=!1;const o=({target:n})=>{n===e&&(a=!0,e.removeEventListener(ve,o),Be(t))};e.addEventListener(ve,o),setTimeout((()=>{a||Me(e)}),i)},xe=(t,e,n,r)=>{const i=t.length;let a=t.indexOf(e);return-1===a?!n&&r?t[i-1]:t[0]:(a+=n?1:-1,r&&(a=(a+i)%i),t[Math.max(0,Math.min(a,i-1))])},De=/[^.]*(?=\..*)\.|.*/,Fe=/\..*/,je=/::\d+$/,Ne={};let $e=1;const Re={mouseenter:"mouseover",mouseleave:"mouseout"},Ue=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function qe(t,e){return e&&`${e}::${$e++}`||t.uidEvent||$e++}function We(t){const e=qe(t);return t.uidEvent=e,Ne[e]=Ne[e]||{},Ne[e]}function Ge(t,e){return function n(r){return nn(r,{delegateTarget:t}),n.oneOff&&en.off(t,r.type,e),e.apply(t,[r])}}function Ke(t,e,n){return function r(i){const a=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const s of a)if(s===o)return nn(i,{delegateTarget:o}),r.oneOff&&en.off(t,i.type,e,n),n.apply(o,[i])}}function Xe(t,e,n=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===n))}function Ye(t,e,n){const r="string"===typeof e,i=r?n:e||n;let a=tn(t);return Ue.has(a)||(a=t),[r,i,a]}function Je(t,e,n,r,i){if("string"!==typeof e||!t)return;let[a,o,s]=Ye(e,n,r);if(e in Re){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o=t(o)}const l=We(t),c=l[s]||(l[s]={}),u=Xe(c,o,a?n:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=qe(o,e.replace(De,"")),d=a?Ke(t,n,o):Ge(t,o);d.delegationSelector=a?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(s,d,a)}function Qe(t,e,n,r,i){const a=Xe(e[n],r,i);a&&(t.removeEventListener(n,a,Boolean(i)),delete e[n][a.uidEvent])}function Ze(t,e,n,r){const i=e[n]||{};for(const a of Object.keys(i))if(a.includes(r)){const r=i[a];Qe(t,e,n,r.callable,r.delegationSelector)}}function tn(t){return t=t.replace(Fe,""),Re[t]||t}const en={on(t,e,n,r){Je(t,e,n,r,!1)},one(t,e,n,r){Je(t,e,n,r,!0)},off(t,e,n,r){if("string"!==typeof e||!t)return;const[i,a,o]=Ye(e,n,r),s=o!==e,l=We(t),c=l[o]||{},u=e.startsWith(".");if("undefined"===typeof a){if(u)for(const n of Object.keys(l))Ze(t,l,n,e.slice(1));for(const n of Object.keys(c)){const r=n.replace(je,"");if(!s||e.includes(r)){const e=c[n];Qe(t,l,o,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;Qe(t,l,o,a,i?n:null)}},trigger(t,e,n){if("string"!==typeof e||!t)return null;const r=Ie(),i=tn(e),a=e!==i;let o=null,s=!0,l=!0,c=!1;a&&r&&(o=r.Event(e,n),r(t).trigger(o),s=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(e,{bubbles:s,cancelable:!0});return u=nn(u,n),c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function nn(t,e){for(const[r,i]of Object.entries(e||{}))try{t[r]=i}catch(n){Object.defineProperty(t,r,{configurable:!0,get(){return i}})}return t}const rn=new Map,an={set(t,e,n){rn.has(t)||rn.set(t,new Map);const r=rn.get(t);r.has(e)||0===r.size?r.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(t,e){return rn.has(t)&&rn.get(t).get(e)||null},remove(t,e){if(!rn.has(t))return;const n=rn.get(t);n.delete(e),0===n.size&&rn.delete(t)}};function on(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!==typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function sn(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const ln={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${sn(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${sn(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=on(t.dataset[r])}return e},getDataAttribute(t,e){return on(t.getAttribute(`data-bs-${sn(e)}`))}};class cn{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=Ae(e)?ln.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...Ae(e)?ln.getDataAttributes(e):{},..."object"===typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const r=e[n],i=t[n],a=Ae(i)?"element":me(i);if(!new RegExp(r).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`)}}}const un="5.2.3";class hn extends cn{constructor(t,e){super(),t=Ce(t),t&&(this._element=t,this._config=this._getConfig(e),an.set(this._element,this.constructor.DATA_KEY,this))}dispose(){an.remove(this._element,this.constructor.DATA_KEY),en.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){Pe(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return an.get(Ce(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return un}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const dn=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,r=t.NAME;en.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ve(this))return;const i=ze(this)||this.closest(`.${r}`),a=t.getOrCreateInstance(i);a[e]()}))},fn="alert",pn="bs.alert",vn=`.${pn}`,mn=`close${vn}`,gn=`closed${vn}`,yn="fade",bn="show";class zn extends hn{static get NAME(){return fn}close(){const t=en.trigger(this._element,mn);if(t.defaultPrevented)return;this._element.classList.remove(bn);const e=this._element.classList.contains(yn);this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),en.trigger(this._element,gn),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=zn.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}dn(zn,"close"),Ee(zn);const wn="button",Mn="bs.button",An=`.${Mn}`,Cn=".data-api",On="active",Vn='[data-bs-toggle="button"]',Sn=`click${An}${Cn}`;class Hn extends hn{static get NAME(){return wn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(On))}static jQueryInterface(t){return this.each((function(){const e=Hn.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}en.on(document,Sn,Vn,(t=>{t.preventDefault();const e=t.target.closest(Vn),n=Hn.getOrCreateInstance(e);n.toggle()})),Ee(Hn);const Tn={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const n=[];let r=t.parentNode.closest(e);while(r)n.push(r),r=r.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!Ve(t)&&Oe(t)))}},In="swipe",kn=".bs.swipe",_n=`touchstart${kn}`,Ln=`touchmove${kn}`,En=`touchend${kn}`,Bn=`pointerdown${kn}`,Pn=`pointerup${kn}`,xn="touch",Dn="pen",Fn="pointer-event",jn=40,Nn={endCallback:null,leftCallback:null,rightCallback:null},$n={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Rn extends cn{constructor(t,e){super(),this._element=t,t&&Rn.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Nn}static get DefaultType(){return $n}static get NAME(){return In}dispose(){en.off(this._element,kn)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Be(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=jn)return;const e=t/this._deltaX;this._deltaX=0,e&&Be(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(en.on(this._element,Bn,(t=>this._start(t))),en.on(this._element,Pn,(t=>this._end(t))),this._element.classList.add(Fn)):(en.on(this._element,_n,(t=>this._start(t))),en.on(this._element,Ln,(t=>this._move(t))),en.on(this._element,En,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Dn||t.pointerType===xn)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Un="carousel",qn="bs.carousel",Wn=`.${qn}`,Gn=".data-api",Kn="ArrowLeft",Xn="ArrowRight",Yn=500,Jn="next",Qn="prev",Zn="left",tr="right",er=`slide${Wn}`,nr=`slid${Wn}`,rr=`keydown${Wn}`,ir=`mouseenter${Wn}`,ar=`mouseleave${Wn}`,or=`dragstart${Wn}`,sr=`load${Wn}${Gn}`,lr=`click${Wn}${Gn}`,cr="carousel",ur="active",hr="slide",dr="carousel-item-end",fr="carousel-item-start",pr="carousel-item-next",vr="carousel-item-prev",mr=".active",gr=".carousel-item",yr=mr+gr,br=".carousel-item img",zr=".carousel-indicators",wr="[data-bs-slide], [data-bs-slide-to]",Mr='[data-bs-ride="carousel"]',Ar={[Kn]:tr,[Xn]:Zn},Cr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Or={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Vr extends hn{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Tn.findOne(zr,this._element),this._addEventListeners(),this._config.ride===cr&&this.cycle()}static get Default(){return Cr}static get DefaultType(){return Or}static get NAME(){return Un}next(){this._slide(Jn)}nextWhenVisible(){!document.hidden&&Oe(this._element)&&this.next()}prev(){this._slide(Qn)}pause(){this._isSliding&&Me(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?en.one(this._element,nr,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void en.one(this._element,nr,(()=>this.to(t)));const n=this._getItemIndex(this._getActive());if(n===t)return;const r=t>n?Jn:Qn;this._slide(r,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&en.on(this._element,rr,(t=>this._keydown(t))),"hover"===this._config.pause&&(en.on(this._element,ir,(()=>this.pause())),en.on(this._element,ar,(()=>this._maybeEnableCycle()))),this._config.touch&&Rn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of Tn.find(br,this._element))en.on(n,or,(t=>t.preventDefault()));const t=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Yn+this._config.interval))},e={leftCallback:()=>this._slide(this._directionToOrder(Zn)),rightCallback:()=>this._slide(this._directionToOrder(tr)),endCallback:t};this._swipeHelper=new Rn(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Ar[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Tn.findOne(mr,this._indicatorsElement);e.classList.remove(ur),e.removeAttribute("aria-current");const n=Tn.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(ur),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),r=t===Jn,i=e||xe(this._getItems(),n,r,this._config.wrap);if(i===n)return;const a=this._getItemIndex(i),o=e=>en.trigger(this._element,e,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:a}),s=o(er);if(s.defaultPrevented)return;if(!n||!i)return;const l=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const c=r?fr:dr,u=r?pr:vr;i.classList.add(u),Te(i),n.classList.add(c),i.classList.add(c);const h=()=>{i.classList.remove(c,u),i.classList.add(ur),n.classList.remove(ur,u,c),this._isSliding=!1,o(nr)};this._queueCallback(h,n,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(hr)}_getActive(){return Tn.findOne(yr,this._element)}_getItems(){return Tn.find(gr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Le()?t===Zn?Qn:Jn:t===Zn?Jn:Qn}_orderToDirection(t){return Le()?t===Qn?Zn:tr:t===Qn?tr:Zn}static jQueryInterface(t){return this.each((function(){const e=Vr.getOrCreateInstance(this,t);if("number"!==typeof t){if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}en.on(document,lr,wr,(function(t){const e=ze(this);if(!e||!e.classList.contains(cr))return;t.preventDefault();const n=Vr.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to");return r?(n.to(r),void n._maybeEnableCycle()):"next"===ln.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),en.on(window,sr,(()=>{const t=Tn.find(Mr);for(const e of t)Vr.getOrCreateInstance(e)})),Ee(Vr);const Sr="collapse",Hr="bs.collapse",Tr=`.${Hr}`,Ir=".data-api",kr=`show${Tr}`,_r=`shown${Tr}`,Lr=`hide${Tr}`,Er=`hidden${Tr}`,Br=`click${Tr}${Ir}`,Pr="show",xr="collapse",Dr="collapsing",Fr="collapsed",jr=`:scope .${xr} .${xr}`,Nr="collapse-horizontal",$r="width",Rr="height",Ur=".collapse.show, .collapse.collapsing",qr='[data-bs-toggle="collapse"]',Wr={parent:null,toggle:!0},Gr={parent:"(null|element)",toggle:"boolean"};class Kr extends hn{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Tn.find(qr);for(const r of n){const t=be(r),e=Tn.find(t).filter((t=>t===this._element));null!==t&&e.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Wr}static get DefaultType(){return Gr}static get NAME(){return Sr}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Ur).filter((t=>t!==this._element)).map((t=>Kr.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;const e=en.trigger(this._element,kr);if(e.defaultPrevented)return;for(const o of t)o.hide();const n=this._getDimension();this._element.classList.remove(xr),this._element.classList.add(Dr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Dr),this._element.classList.add(xr,Pr),this._element.style[n]="",en.trigger(this._element,_r)},i=n[0].toUpperCase()+n.slice(1),a=`scroll${i}`;this._queueCallback(r,this._element,!0),this._element.style[n]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=en.trigger(this._element,Lr);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Te(this._element),this._element.classList.add(Dr),this._element.classList.remove(xr,Pr);for(const r of this._triggerArray){const t=ze(r);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Dr),this._element.classList.add(xr),en.trigger(this._element,Er)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Pr)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=Ce(t.parent),t}_getDimension(){return this._element.classList.contains(Nr)?$r:Rr}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(qr);for(const e of t){const t=ze(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=Tn.find(jr,this._config.parent);return Tn.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const n of t)n.classList.toggle(Fr,!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const n=Kr.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}en.on(document,Br,qr,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=be(this),n=Tn.find(e);for(const r of n)Kr.getOrCreateInstance(r,{toggle:!1}).toggle()})),Ee(Kr);const Xr="dropdown",Yr="bs.dropdown",Jr=`.${Yr}`,Qr=".data-api",Zr="Escape",ti="Tab",ei="ArrowUp",ni="ArrowDown",ri=2,ii=`hide${Jr}`,ai=`hidden${Jr}`,oi=`show${Jr}`,si=`shown${Jr}`,li=`click${Jr}${Qr}`,ci=`keydown${Jr}${Qr}`,ui=`keyup${Jr}${Qr}`,hi="show",di="dropup",fi="dropend",pi="dropstart",vi="dropup-center",mi="dropdown-center",gi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',yi=`${gi}.${hi}`,bi=".dropdown-menu",zi=".navbar",wi=".navbar-nav",Mi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ai=Le()?"top-end":"top-start",Ci=Le()?"top-start":"top-end",Oi=Le()?"bottom-end":"bottom-start",Vi=Le()?"bottom-start":"bottom-end",Si=Le()?"left-start":"right-start",Hi=Le()?"right-start":"left-start",Ti="top",Ii="bottom",ki={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},_i={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Li extends hn{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Tn.next(this._element,bi)[0]||Tn.prev(this._element,bi)[0]||Tn.findOne(bi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ki}static get DefaultType(){return _i}static get NAME(){return Xr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ve(this._element)||this._isShown())return;const t={relatedTarget:this._element},e=en.trigger(this._element,oi,t);if(!e.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(wi))for(const t of[].concat(...document.body.children))en.on(t,"mouseover",He);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(hi),this._element.classList.add(hi),en.trigger(this._element,si,t)}}hide(){if(Ve(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const e=en.trigger(this._element,ii,t);if(!e.defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))en.off(t,"mouseover",He);this._popper&&this._popper.destroy(),this._menu.classList.remove(hi),this._element.classList.remove(hi),this._element.setAttribute("aria-expanded","false"),ln.removeDataAttribute(this._menu,"popper"),en.trigger(this._element,ai,t)}}_getConfig(t){if(t=super._getConfig(t),"object"===typeof t.reference&&!Ae(t.reference)&&"function"!==typeof t.reference.getBoundingClientRect)throw new TypeError(`${Xr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:Ae(this._config.reference)?t=Ce(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=ue(t,this._menu,e)}_isShown(){return this._menu.classList.contains(hi)}_getPlacement(){const t=this._parent;if(t.classList.contains(fi))return Si;if(t.classList.contains(pi))return Hi;if(t.classList.contains(vi))return Ti;if(t.classList.contains(mi))return Ii;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains(di)?e?Ci:Ai:e?Vi:Oi}_detectNavbar(){return null!==this._element.closest(zi)}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(ln.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=Tn.find(Mi,this._menu).filter((t=>Oe(t)));n.length&&xe(n,e,t===ni,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Li.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t.button===ri||"keyup"===t.type&&t.key!==ti)return;const e=Tn.find(yi);for(const n of e){const e=Li.getInstance(n);if(!e||!1===e._config.autoClose)continue;const r=t.composedPath(),i=r.includes(e._menu);if(r.includes(e._element)||"inside"===e._config.autoClose&&!i||"outside"===e._config.autoClose&&i)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&t.key===ti||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:e._element};"click"===t.type&&(a.clickEvent=t),e._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n=t.key===Zr,r=[ei,ni].includes(t.key);if(!r&&!n)return;if(e&&!n)return;t.preventDefault();const i=this.matches(gi)?this:Tn.prev(this,gi)[0]||Tn.next(this,gi)[0]||Tn.findOne(gi,t.delegateTarget.parentNode),a=Li.getOrCreateInstance(i);if(r)return t.stopPropagation(),a.show(),void a._selectMenuItem(t);a._isShown()&&(t.stopPropagation(),a.hide(),i.focus())}}en.on(document,ci,gi,Li.dataApiKeydownHandler),en.on(document,ci,bi,Li.dataApiKeydownHandler),en.on(document,li,Li.clearMenus),en.on(document,ui,Li.clearMenus),en.on(document,li,gi,(function(t){t.preventDefault(),Li.getOrCreateInstance(this).toggle()})),Ee(Li);const Ei=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Bi=".sticky-top",Pi="padding-right",xi="margin-right";class Di{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Pi,(e=>e+t)),this._setElementAttributes(Ei,Pi,(e=>e+t)),this._setElementAttributes(Bi,xi,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Pi),this._resetElementAttributes(Ei,Pi),this._resetElementAttributes(Bi,xi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const r=this.getWidth(),i=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+r)return;this._saveInitialAttribute(t,e);const i=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${n(Number.parseFloat(i))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&ln.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=t=>{const n=ln.getDataAttribute(t,e);null!==n?(ln.removeDataAttribute(t,e),t.style.setProperty(e,n)):t.style.removeProperty(e)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(Ae(t))e(t);else for(const n of Tn.find(t,this._element))e(n)}}const Fi="backdrop",ji="fade",Ni="show",$i=`mousedown.bs.${Fi}`,Ri={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ui={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class qi extends cn{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ri}static get DefaultType(){return Ui}static get NAME(){return Fi}show(t){if(!this._config.isVisible)return void Be(t);this._append();const e=this._getElement();this._config.isAnimated&&Te(e),e.classList.add(Ni),this._emulateAnimation((()=>{Be(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ni),this._emulateAnimation((()=>{this.dispose(),Be(t)}))):Be(t)}dispose(){this._isAppended&&(en.off(this._element,$i),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(ji),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Ce(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),en.on(t,$i,(()=>{Be(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){Pe(t,this._getElement(),this._config.isAnimated)}}const Wi="focustrap",Gi="bs.focustrap",Ki=`.${Gi}`,Xi=`focusin${Ki}`,Yi=`keydown.tab${Ki}`,Ji="Tab",Qi="forward",Zi="backward",ta={autofocus:!0,trapElement:null},ea={autofocus:"boolean",trapElement:"element"};class na extends cn{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ta}static get DefaultType(){return ea}static get NAME(){return Wi}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),en.off(document,Ki),en.on(document,Xi,(t=>this._handleFocusin(t))),en.on(document,Yi,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,en.off(document,Ki))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=Tn.focusableChildren(e);0===n.length?e.focus():this._lastTabNavDirection===Zi?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===Ji&&(this._lastTabNavDirection=t.shiftKey?Zi:Qi)}}const ra="modal",ia="bs.modal",aa=`.${ia}`,oa=".data-api",sa="Escape",la=`hide${aa}`,ca=`hidePrevented${aa}`,ua=`hidden${aa}`,ha=`show${aa}`,da=`shown${aa}`,fa=`resize${aa}`,pa=`click.dismiss${aa}`,va=`mousedown.dismiss${aa}`,ma=`keydown.dismiss${aa}`,ga=`click${aa}${oa}`,ya="modal-open",ba="fade",za="show",wa="modal-static",Ma=".modal.show",Aa=".modal-dialog",Ca=".modal-body",Oa='[data-bs-toggle="modal"]',Va={backdrop:!0,focus:!0,keyboard:!0},Sa={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ha extends hn{constructor(t,e){super(t,e),this._dialog=Tn.findOne(Aa,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Di,this._addEventListeners()}static get Default(){return Va}static get DefaultType(){return Sa}static get NAME(){return ra}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=en.trigger(this._element,ha,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ya),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=en.trigger(this._element,la);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(za),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])en.off(t,aa);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new qi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new na({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Tn.findOne(Ca,this._dialog);e&&(e.scrollTop=0),Te(this._element),this._element.classList.add(za);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,en.trigger(this._element,da,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){en.on(this._element,ma,(t=>{if(t.key===sa)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),en.on(window,fa,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),en.on(this._element,va,(t=>{en.one(this._element,pa,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ya),this._resetAdjustments(),this._scrollBar.reset(),en.trigger(this._element,ua)}))}_isAnimated(){return this._element.classList.contains(ba)}_triggerBackdropTransition(){const t=en.trigger(this._element,ca);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(wa)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(wa),this._queueCallback((()=>{this._element.classList.remove(wa),this._queueCallback((()=>{this._element.style.overflowY=n}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const t=Le()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!n&&t){const t=Le()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=Ha.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}en.on(document,ga,Oa,(function(t){const e=ze(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),en.one(e,ha,(t=>{t.defaultPrevented||en.one(e,ua,(()=>{Oe(this)&&this.focus()}))}));const n=Tn.findOne(Ma);n&&Ha.getInstance(n).hide();const r=Ha.getOrCreateInstance(e);r.toggle(this)})),dn(Ha),Ee(Ha);const Ta="offcanvas",Ia="bs.offcanvas",ka=`.${Ia}`,_a=".data-api",La=`load${ka}${_a}`,Ea="Escape",Ba="show",Pa="showing",xa="hiding",Da="offcanvas-backdrop",Fa=".offcanvas.show",ja=`show${ka}`,Na=`shown${ka}`,$a=`hide${ka}`,Ra=`hidePrevented${ka}`,Ua=`hidden${ka}`,qa=`resize${ka}`,Wa=`click${ka}${_a}`,Ga=`keydown.dismiss${ka}`,Ka='[data-bs-toggle="offcanvas"]',Xa={backdrop:!0,keyboard:!0,scroll:!1},Ya={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ja extends hn{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Xa}static get DefaultType(){return Ya}static get NAME(){return Ta}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=en.trigger(this._element,ja,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Di).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Pa);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ba),this._element.classList.remove(Pa),en.trigger(this._element,Na,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=en.trigger(this._element,$a);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(xa),this._backdrop.hide();const e=()=>{this._element.classList.remove(Ba,xa),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Di).reset(),en.trigger(this._element,Ua)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{"static"!==this._config.backdrop?this.hide():en.trigger(this._element,Ra)},e=Boolean(this._config.backdrop);return new qi({className:Da,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new na({trapElement:this._element})}_addEventListeners(){en.on(this._element,Ga,(t=>{t.key===Ea&&(this._config.keyboard?this.hide():en.trigger(this._element,Ra))}))}static jQueryInterface(t){return this.each((function(){const e=Ja.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}en.on(document,Wa,Ka,(function(t){const e=ze(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ve(this))return;en.one(e,Ua,(()=>{Oe(this)&&this.focus()}));const n=Tn.findOne(Fa);n&&n!==e&&Ja.getInstance(n).hide();const r=Ja.getOrCreateInstance(e);r.toggle(this)})),en.on(window,La,(()=>{for(const t of Tn.find(Fa))Ja.getOrCreateInstance(t).show()})),en.on(window,qa,(()=>{for(const t of Tn.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Ja.getOrCreateInstance(t).hide()})),dn(Ja),Ee(Ja);const Qa=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Za=/^aria-[\w-]*$/i,to=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,eo=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,no=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?!Qa.has(n)||Boolean(to.test(t.nodeValue)||eo.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(n)))},ro={"*":["class","dir","id","lang","role",Za],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function io(t,e,n){if(!t.length)return t;if(n&&"function"===typeof n)return n(t);const r=new window.DOMParser,i=r.parseFromString(t,"text/html"),a=[].concat(...i.body.querySelectorAll("*"));for(const o of a){const t=o.nodeName.toLowerCase();if(!Object.keys(e).includes(t)){o.remove();continue}const n=[].concat(...o.attributes),r=[].concat(e["*"]||[],e[t]||[]);for(const e of n)no(e,r)||o.removeAttribute(e.nodeName)}return i.body.innerHTML}const ao="TemplateFactory",oo={allowList:ro,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},so={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},lo={entry:"(string|element|function|null)",selector:"(string|element)"};class co extends cn{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return oo}static get DefaultType(){return so}static get NAME(){return ao}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(t,i,r);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},lo)}_setContent(t,e,n){const r=Tn.findOne(n,t);r&&(e=this._resolvePossibleFunction(e),e?Ae(e)?this._putElementInTemplate(Ce(e),r):this._config.html?r.innerHTML=this._maybeSanitize(e):r.textContent=e:r.remove())}_maybeSanitize(t){return this._config.sanitize?io(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"===typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const uo="tooltip",ho=new Set(["sanitize","allowList","sanitizeFn"]),fo="fade",po="modal",vo="show",mo=".tooltip-inner",go=`.${po}`,yo="hide.bs.modal",bo="hover",zo="focus",wo="click",Mo="manual",Ao="hide",Co="hidden",Oo="show",Vo="shown",So="inserted",Ho="click",To="focusin",Io="focusout",ko="mouseenter",_o="mouseleave",Lo={AUTO:"auto",TOP:"top",RIGHT:Le()?"left":"right",BOTTOM:"bottom",LEFT:Le()?"right":"left"},Eo={allowList:ro,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Bo={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Po extends hn{constructor(t,e){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Eo}static get DefaultType(){return Bo}static get NAME(){return uo}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),en.off(this._element.closest(go),yo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=en.trigger(this._element,this.constructor.eventName(Oo)),e=Se(this._element),n=(e||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!n)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),en.trigger(this._element,this.constructor.eventName(So))),this._popper=this._createPopper(r),r.classList.add(vo),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))en.on(o,"mouseover",He);const a=()=>{en.trigger(this._element,this.constructor.eventName(Vo)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const t=en.trigger(this._element,this.constructor.eventName(Ao));if(t.defaultPrevented)return;const e=this._getTipElement();if(e.classList.remove(vo),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))en.off(r,"mouseover",He);this._activeTrigger[wo]=!1,this._activeTrigger[zo]=!1,this._activeTrigger[bo]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),en.trigger(this._element,this.constructor.eventName(Co)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(fo,vo),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=ge(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(fo),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new co({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[mo]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(fo)}_isShown(){return this.tip&&this.tip.classList.contains(vo)}_createPopper(t){const e="function"===typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,n=Lo[e.toUpperCase()];return ue(this._element,t,this._getPopperConfig(n))}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"===typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)en.on(this._element,this.constructor.eventName(Ho),this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e.toggle()}));else if(e!==Mo){const t=e===bo?this.constructor.eventName(ko):this.constructor.eventName(To),n=e===bo?this.constructor.eventName(_o):this.constructor.eventName(Io);en.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?zo:bo]=!0,e._enter()})),en.on(this._element,n,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?zo:bo]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},en.on(this._element.closest(go),yo,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=ln.getDataAttributes(this._element);for(const n of Object.keys(e))ho.has(n)&&delete e[n];return t={...e,..."object"===typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:Ce(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=Po.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}Ee(Po);const xo="popover",Do=".popover-header",Fo=".popover-body",jo={...Po.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},No={...Po.DefaultType,content:"(null|string|element|function)"};class $o extends Po{static get Default(){return jo}static get DefaultType(){return No}static get NAME(){return xo}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Do]:this._getTitle(),[Fo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=$o.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}Ee($o);const Ro="scrollspy",Uo="bs.scrollspy",qo=`.${Uo}`,Wo=".data-api",Go=`activate${qo}`,Ko=`click${qo}`,Xo=`load${qo}${Wo}`,Yo="dropdown-item",Jo="active",Qo='[data-bs-spy="scroll"]',Zo="[href]",ts=".nav, .list-group",es=".nav-link",ns=".nav-item",rs=".list-group-item",is=`${es}, ${ns} > ${es}, ${rs}`,as=".dropdown",os=".dropdown-toggle",ss={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},ls={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class cs extends hn{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ss}static get DefaultType(){return ls}static get NAME(){return Ro}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Ce(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"===typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(en.off(this._config.target,Ko),en.on(this._config.target,Ko,Zo,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,r=e.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:"smooth"});n.scrollTop=r}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),n=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const a of t){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(a));continue}const t=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&t){if(n(a),!r)return}else i||t||n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Tn.find(Zo,this._config.target);for(const e of t){if(!e.hash||Ve(e))continue;const t=Tn.findOne(e.hash,this._element);Oe(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Jo),this._activateParents(t),en.trigger(this._element,Go,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Yo))Tn.findOne(os,t.closest(as)).classList.add(Jo);else for(const e of Tn.parents(t,ts))for(const t of Tn.prev(e,is))t.classList.add(Jo)}_clearActiveClass(t){t.classList.remove(Jo);const e=Tn.find(`${Zo}.${Jo}`,t);for(const n of e)n.classList.remove(Jo)}static jQueryInterface(t){return this.each((function(){const e=cs.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(window,Xo,(()=>{for(const t of Tn.find(Qo))cs.getOrCreateInstance(t)})),Ee(cs);const us="tab",hs="bs.tab",ds=`.${hs}`,fs=`hide${ds}`,ps=`hidden${ds}`,vs=`show${ds}`,ms=`shown${ds}`,gs=`click${ds}`,ys=`keydown${ds}`,bs=`load${ds}`,zs="ArrowLeft",ws="ArrowRight",Ms="ArrowUp",As="ArrowDown",Cs="active",Os="fade",Vs="show",Ss="dropdown",Hs=".dropdown-toggle",Ts=".dropdown-menu",Is=":not(.dropdown-toggle)",ks='.list-group, .nav, [role="tablist"]',_s=".nav-item, .list-group-item",Ls=`.nav-link${Is}, .list-group-item${Is}, [role="tab"]${Is}`,Es='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Bs=`${Ls}, ${Es}`,Ps=`.${Cs}[data-bs-toggle="tab"], .${Cs}[data-bs-toggle="pill"], .${Cs}[data-bs-toggle="list"]`;class xs extends hn{constructor(t){super(t),this._parent=this._element.closest(ks),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),en.on(this._element,ys,(t=>this._keydown(t))))}static get NAME(){return us}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?en.trigger(e,fs,{relatedTarget:t}):null,r=en.trigger(t,vs,{relatedTarget:e});r.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Cs),this._activate(ze(t));const n=()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),en.trigger(t,ms,{relatedTarget:e})):t.classList.add(Vs)};this._queueCallback(n,t,t.classList.contains(Os))}_deactivate(t,e){if(!t)return;t.classList.remove(Cs),t.blur(),this._deactivate(ze(t));const n=()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),en.trigger(t,ps,{relatedTarget:e})):t.classList.remove(Vs)};this._queueCallback(n,t,t.classList.contains(Os))}_keydown(t){if(![zs,ws,Ms,As].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[ws,As].includes(t.key),n=xe(this._getChildren().filter((t=>!Ve(t))),t.target,e,!0);n&&(n.focus({preventScroll:!0}),xs.getOrCreateInstance(n).show())}_getChildren(){return Tn.find(Bs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=ze(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains(Ss))return;const r=(t,r)=>{const i=Tn.findOne(t,n);i&&i.classList.toggle(r,e)};r(Hs,Cs),r(Ts,Vs),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(Cs)}_getInnerElement(t){return t.matches(Bs)?t:Tn.findOne(Bs,t)}_getOuterElement(t){return t.closest(_s)||t}static jQueryInterface(t){return this.each((function(){const e=xs.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(document,gs,Es,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ve(this)||xs.getOrCreateInstance(this).show()})),en.on(window,bs,(()=>{for(const t of Tn.find(Ps))xs.getOrCreateInstance(t)})),Ee(xs);const Ds="toast",Fs="bs.toast",js=`.${Fs}`,Ns=`mouseover${js}`,$s=`mouseout${js}`,Rs=`focusin${js}`,Us=`focusout${js}`,qs=`hide${js}`,Ws=`hidden${js}`,Gs=`show${js}`,Ks=`shown${js}`,Xs="fade",Ys="hide",Js="show",Qs="showing",Zs={animation:"boolean",autohide:"boolean",delay:"number"},tl={animation:!0,autohide:!0,delay:5e3};class el extends hn{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return tl}static get DefaultType(){return Zs}static get NAME(){return Ds}show(){const t=en.trigger(this._element,Gs);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Xs);const e=()=>{this._element.classList.remove(Qs),en.trigger(this._element,Ks),this._maybeScheduleHide()};this._element.classList.remove(Ys),Te(this._element),this._element.classList.add(Js,Qs),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=en.trigger(this._element,qs);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(Ys),this._element.classList.remove(Qs,Js),en.trigger(this._element,Ws)};this._element.classList.add(Qs),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Js),super.dispose()}isShown(){return this._element.classList.contains(Js)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){en.on(this._element,Ns,(t=>this._onInteraction(t,!0))),en.on(this._element,$s,(t=>this._onInteraction(t,!1))),en.on(this._element,Rs,(t=>this._onInteraction(t,!0))),en.on(this._element,Us,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=el.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}dn(el),Ee(el)},7387:function(t,e,n){var r,i;n(7658),n(541),
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */
function(e,n){"use strict";"object"===typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!==typeof window?window:this,(function(n,a){"use strict";var o=[],s=Object.getPrototypeOf,l=o.slice,c=o.flat?function(t){return o.flat.call(t)}:function(t){return o.concat.apply([],t)},u=o.push,h=o.indexOf,d={},f=d.toString,p=d.hasOwnProperty,v=p.toString,m=v.call(Object),g={},y=function(t){return"function"===typeof t&&"number"!==typeof t.nodeType&&"function"!==typeof t.item},b=function(t){return null!=t&&t===t.window},z=n.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function M(t,e,n){n=n||z;var r,i,a=n.createElement("script");if(a.text=t,e)for(r in w)i=e[r]||e.getAttribute&&e.getAttribute(r),i&&a.setAttribute(r,i);n.head.appendChild(a).parentNode.removeChild(a)}function A(t){return null==t?t+"":"object"===typeof t||"function"===typeof t?d[f.call(t)]||"object":typeof t}var C="3.6.3",O=function(t,e){return new O.fn.init(t,e)};function V(t){var e=!!t&&"length"in t&&t.length,n=A(t);return!y(t)&&!b(t)&&("array"===n||0===e||"number"===typeof e&&e>0&&e-1 in t)}O.fn=O.prototype={jquery:C,constructor:O,length:0,toArray:function(){return l.call(this)},get:function(t){return null==t?l.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=O.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return O.each(this,t)},map:function(t){return this.pushStack(O.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(O.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(O.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:o.sort,splice:o.splice},O.extend=O.fn.extend=function(){var t,e,n,r,i,a,o=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"===typeof o&&(c=o,o=arguments[s]||{},s++),"object"===typeof o||y(o)||(o={}),s===l&&(o=this,s--);s<l;s++)if(null!=(t=arguments[s]))for(e in t)r=t[e],"__proto__"!==e&&o!==r&&(c&&r&&(O.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[e],a=i&&!Array.isArray(n)?[]:i||O.isPlainObject(n)?n:{},i=!1,o[e]=O.extend(c,a,r)):void 0!==r&&(o[e]=r));return o},O.extend({expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==f.call(t))&&(e=s(t),!e||(n=p.call(e,"constructor")&&e.constructor,"function"===typeof n&&v.call(n)===m))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,n){M(t,{nonce:e&&e.nonce},n)},each:function(t,e){var n,r=0;if(V(t)){for(n=t.length;r<n;r++)if(!1===e.call(t[r],r,t[r]))break}else for(r in t)if(!1===e.call(t[r],r,t[r]))break;return t},makeArray:function(t,e){var n=e||[];return null!=t&&(V(Object(t))?O.merge(n,"string"===typeof t?[t]:t):u.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:h.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r,i=[],a=0,o=t.length,s=!n;a<o;a++)r=!e(t[a],a),r!==s&&i.push(t[a]);return i},map:function(t,e,n){var r,i,a=0,o=[];if(V(t))for(r=t.length;a<r;a++)i=e(t[a],a,n),null!=i&&o.push(i);else for(a in t)i=e(t[a],a,n),null!=i&&o.push(i);return c(o)},guid:1,support:g}),"function"===typeof Symbol&&(O.fn[Symbol.iterator]=o[Symbol.iterator]),O.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){d["[object "+e+"]"]=e.toLowerCase()}));var S=
/*!
   * Sizzle CSS Selector Engine v2.3.9
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2022-12-19
   */
function(t){var e,n,r,i,a,o,s,l,c,u,h,d,f,p,v,m,g,y,b,z="sizzle"+1*new Date,w=t.document,M=0,A=0,C=lt(),O=lt(),V=lt(),S=lt(),H=function(t,e){return t===e&&(h=!0),0},T={}.hasOwnProperty,I=[],k=I.pop,_=I.push,L=I.push,E=I.slice,B=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",x="[\\x20\\t\\r\\n\\f]",D="(?:\\\\[\\da-fA-F]{1,6}"+x+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",F="\\["+x+"*("+D+")(?:"+x+"*([*^$|!~]?=)"+x+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+D+"))|)"+x+"*\\]",j=":("+D+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",N=new RegExp(x+"+","g"),$=new RegExp("^"+x+"+|((?:^|[^\\\\])(?:\\\\.)*)"+x+"+$","g"),R=new RegExp("^"+x+"*,"+x+"*"),U=new RegExp("^"+x+"*([>+~]|"+x+")"+x+"*"),q=new RegExp(x+"|>"),W=new RegExp(j),G=new RegExp("^"+D+"$"),K={ID:new RegExp("^#("+D+")"),CLASS:new RegExp("^\\.("+D+")"),TAG:new RegExp("^("+D+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+j),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+x+"*(even|odd|(([+-]|)(\\d*)n|)"+x+"*(?:([+-]|)"+x+"*(\\d+)|))"+x+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+x+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+x+"*((?:-\\d)?\\d*)"+x+"*\\)|)(?=[^-]|$)","i")},X=/HTML$/i,Y=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\[\\da-fA-F]{1,6}"+x+"?|\\\\([^\\r\\n\\f])","g"),nt=function(t,e){var n="0x"+t.slice(1)-65536;return e||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},rt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,it=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},at=function(){d()},ot=zt((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{L.apply(I=E.call(w.childNodes),w.childNodes),I[w.childNodes.length].nodeType}catch(St){L={apply:I.length?function(t,e){_.apply(t,E.call(e))}:function(t,e){var n=t.length,r=0;while(t[n++]=e[r++]);t.length=n-1}}}function st(t,e,r,i){var a,s,c,u,h,p,g,y=e&&e.ownerDocument,w=e?e.nodeType:9;if(r=r||[],"string"!==typeof t||!t||1!==w&&9!==w&&11!==w)return r;if(!i&&(d(e),e=e||f,v)){if(11!==w&&(h=Z.exec(t)))if(a=h[1]){if(9===w){if(!(c=e.getElementById(a)))return r;if(c.id===a)return r.push(c),r}else if(y&&(c=y.getElementById(a))&&b(e,c)&&c.id===a)return r.push(c),r}else{if(h[2])return L.apply(r,e.getElementsByTagName(t)),r;if((a=h[3])&&n.getElementsByClassName&&e.getElementsByClassName)return L.apply(r,e.getElementsByClassName(a)),r}if(n.qsa&&!S[t+" "]&&(!m||!m.test(t))&&(1!==w||"object"!==e.nodeName.toLowerCase())){if(g=t,y=e,1===w&&(q.test(t)||U.test(t))){y=tt.test(t)&&gt(e.parentNode)||e,y===e&&n.scope||((u=e.getAttribute("id"))?u=u.replace(rt,it):e.setAttribute("id",u=z)),p=o(t),s=p.length;while(s--)p[s]=(u?"#"+u:":scope")+" "+bt(p[s]);g=p.join(",")}try{if(n.cssSupportsSelector&&!CSS.supports("selector(:is("+g+"))"))throw new Error;return L.apply(r,y.querySelectorAll(g)),r}catch(M){S(t,!0)}finally{u===z&&e.removeAttribute("id")}}}return l(t.replace($,"$1"),e,r,i)}function lt(){var t=[];function e(n,i){return t.push(n+" ")>r.cacheLength&&delete e[t.shift()],e[n+" "]=i}return e}function ct(t){return t[z]=!0,t}function ut(t){var e=f.createElement("fieldset");try{return!!t(e)}catch(St){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ht(t,e){var n=t.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=e}function dt(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===e)return-1;return t?1:-1}function ft(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function pt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function vt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ot(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function mt(t){return ct((function(e){return e=+e,ct((function(n,r){var i,a=t([],n.length,e),o=a.length;while(o--)n[i=a[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function gt(t){return t&&"undefined"!==typeof t.getElementsByTagName&&t}for(e in n=st.support={},a=st.isXML=function(t){var e=t&&t.namespaceURI,n=t&&(t.ownerDocument||t).documentElement;return!X.test(e||n&&n.nodeName||"HTML")},d=st.setDocument=function(t){var e,i,o=t?t.ownerDocument||t:w;return o!=f&&9===o.nodeType&&o.documentElement?(f=o,p=f.documentElement,v=!a(f),w!=f&&(i=f.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",at,!1):i.attachEvent&&i.attachEvent("onunload",at)),n.scope=ut((function(t){return p.appendChild(t).appendChild(f.createElement("div")),"undefined"!==typeof t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length})),n.cssSupportsSelector=ut((function(){return CSS.supports("selector(*)")&&f.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")})),n.attributes=ut((function(t){return t.className="i",!t.getAttribute("className")})),n.getElementsByTagName=ut((function(t){return t.appendChild(f.createComment("")),!t.getElementsByTagName("*").length})),n.getElementsByClassName=Q.test(f.getElementsByClassName),n.getById=ut((function(t){return p.appendChild(t).id=z,!f.getElementsByName||!f.getElementsByName(z).length})),n.getById?(r.filter["ID"]=function(t){var e=t.replace(et,nt);return function(t){return t.getAttribute("id")===e}},r.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&v){var n=e.getElementById(t);return n?[n]:[]}}):(r.filter["ID"]=function(t){var e=t.replace(et,nt);return function(t){var n="undefined"!==typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},r.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&v){var n,r,i,a=e.getElementById(t);if(a){if(n=a.getAttributeNode("id"),n&&n.value===t)return[a];i=e.getElementsByName(t),r=0;while(a=i[r++])if(n=a.getAttributeNode("id"),n&&n.value===t)return[a]}return[]}}),r.find["TAG"]=n.getElementsByTagName?function(t,e){return"undefined"!==typeof e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,a=e.getElementsByTagName(t);if("*"===t){while(n=a[i++])1===n.nodeType&&r.push(n);return r}return a},r.find["CLASS"]=n.getElementsByClassName&&function(t,e){if("undefined"!==typeof e.getElementsByClassName&&v)return e.getElementsByClassName(t)},g=[],m=[],(n.qsa=Q.test(f.querySelectorAll))&&(ut((function(t){var e;p.appendChild(t).innerHTML="<a id='"+z+"'></a><select id='"+z+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+x+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||m.push("\\["+x+"*(?:value|"+P+")"),t.querySelectorAll("[id~="+z+"-]").length||m.push("~="),e=f.createElement("input"),e.setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||m.push("\\["+x+"*name"+x+"*="+x+"*(?:''|\"\")"),t.querySelectorAll(":checked").length||m.push(":checked"),t.querySelectorAll("a#"+z+"+*").length||m.push(".#.+[+~]"),t.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ut((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=f.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&m.push("name"+x+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=Q.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ut((function(t){n.disconnectedMatch=y.call(t,"*"),y.call(t,"[s!='']:x"),g.push("!=",j)})),n.cssSupportsSelector||m.push(":has"),m=m.length&&new RegExp(m.join("|")),g=g.length&&new RegExp(g.join("|")),e=Q.test(p.compareDocumentPosition),b=e||Q.test(p.contains)?function(t,e){var n=9===t.nodeType&&t.documentElement||t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)while(e=e.parentNode)if(e===t)return!0;return!1},H=e?function(t,e){if(t===e)return h=!0,0;var r=!t.compareDocumentPosition-!e.compareDocumentPosition;return r||(r=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&r||!n.sortDetached&&e.compareDocumentPosition(t)===r?t==f||t.ownerDocument==w&&b(w,t)?-1:e==f||e.ownerDocument==w&&b(w,e)?1:u?B(u,t)-B(u,e):0:4&r?-1:1)}:function(t,e){if(t===e)return h=!0,0;var n,r=0,i=t.parentNode,a=e.parentNode,o=[t],s=[e];if(!i||!a)return t==f?-1:e==f?1:i?-1:a?1:u?B(u,t)-B(u,e):0;if(i===a)return dt(t,e);n=t;while(n=n.parentNode)o.unshift(n);n=e;while(n=n.parentNode)s.unshift(n);while(o[r]===s[r])r++;return r?dt(o[r],s[r]):o[r]==w?-1:s[r]==w?1:0},f):f},st.matches=function(t,e){return st(t,null,null,e)},st.matchesSelector=function(t,e){if(d(t),n.matchesSelector&&v&&!S[e+" "]&&(!g||!g.test(e))&&(!m||!m.test(e)))try{var r=y.call(t,e);if(r||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(St){S(e,!0)}return st(e,f,null,[t]).length>0},st.contains=function(t,e){return(t.ownerDocument||t)!=f&&d(t),b(t,e)},st.attr=function(t,e){(t.ownerDocument||t)!=f&&d(t);var i=r.attrHandle[e.toLowerCase()],a=i&&T.call(r.attrHandle,e.toLowerCase())?i(t,e,!v):void 0;return void 0!==a?a:n.attributes||!v?t.getAttribute(e):(a=t.getAttributeNode(e))&&a.specified?a.value:null},st.escape=function(t){return(t+"").replace(rt,it)},st.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},st.uniqueSort=function(t){var e,r=[],i=0,a=0;if(h=!n.detectDuplicates,u=!n.sortStable&&t.slice(0),t.sort(H),h){while(e=t[a++])e===t[a]&&(i=r.push(a));while(i--)t.splice(r[i],1)}return u=null,t},i=st.getText=function(t){var e,n="",r=0,a=t.nodeType;if(a){if(1===a||9===a||11===a){if("string"===typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=i(t)}else if(3===a||4===a)return t.nodeValue}else while(e=t[r++])n+=i(e);return n},r=st.selectors={cacheLength:50,createPseudo:ct,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,nt),t[3]=(t[3]||t[4]||t[5]||"").replace(et,nt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||st.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&st.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return K["CHILD"].test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&W.test(n)&&(e=o(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,nt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=C[t+" "];return e||(e=new RegExp("(^|"+x+")"+t+"("+x+"|$)"))&&C(t,(function(t){return e.test("string"===typeof t.className&&t.className||"undefined"!==typeof t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,n){return function(r){var i=st.attr(r,t);return null==i?"!="===e:!e||(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i.replace(N," ")+" ").indexOf(n)>-1:"|="===e&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,r,i){var a="nth"!==t.slice(0,3),o="last"!==t.slice(-4),s="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,l){var c,u,h,d,f,p,v=a!==o?"nextSibling":"previousSibling",m=e.parentNode,g=s&&e.nodeName.toLowerCase(),y=!l&&!s,b=!1;if(m){if(a){while(v){d=e;while(d=d[v])if(s?d.nodeName.toLowerCase()===g:1===d.nodeType)return!1;p=v="only"===t&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&y){d=m,h=d[z]||(d[z]={}),u=h[d.uniqueID]||(h[d.uniqueID]={}),c=u[t]||[],f=c[0]===M&&c[1],b=f&&c[2],d=f&&m.childNodes[f];while(d=++f&&d&&d[v]||(b=f=0)||p.pop())if(1===d.nodeType&&++b&&d===e){u[t]=[M,f,b];break}}else if(y&&(d=e,h=d[z]||(d[z]={}),u=h[d.uniqueID]||(h[d.uniqueID]={}),c=u[t]||[],f=c[0]===M&&c[1],b=f),!1===b)while(d=++f&&d&&d[v]||(b=f=0)||p.pop())if((s?d.nodeName.toLowerCase()===g:1===d.nodeType)&&++b&&(y&&(h=d[z]||(d[z]={}),u=h[d.uniqueID]||(h[d.uniqueID]={}),u[t]=[M,b]),d===e))break;return b-=i,b===r||b%r===0&&b/r>=0}}},PSEUDO:function(t,e){var n,i=r.pseudos[t]||r.setFilters[t.toLowerCase()]||st.error("unsupported pseudo: "+t);return i[z]?i(e):i.length>1?(n=[t,t,"",e],r.setFilters.hasOwnProperty(t.toLowerCase())?ct((function(t,n){var r,a=i(t,e),o=a.length;while(o--)r=B(t,a[o]),t[r]=!(n[r]=a[o])})):function(t){return i(t,0,n)}):i}},pseudos:{not:ct((function(t){var e=[],n=[],r=s(t.replace($,"$1"));return r[z]?ct((function(t,e,n,i){var a,o=r(t,null,i,[]),s=t.length;while(s--)(a=o[s])&&(t[s]=!(e[s]=a))})):function(t,i,a){return e[0]=t,r(e,null,a,n),e[0]=null,!n.pop()}})),has:ct((function(t){return function(e){return st(t,e).length>0}})),contains:ct((function(t){return t=t.replace(et,nt),function(e){return(e.textContent||i(e)).indexOf(t)>-1}})),lang:ct((function(t){return G.test(t||"")||st.error("unsupported lang: "+t),t=t.replace(et,nt).toLowerCase(),function(e){var n;do{if(n=v?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===p},focus:function(t){return t===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:vt(!1),disabled:vt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!r.pseudos["empty"](t)},header:function(t){return J.test(t.nodeName)},input:function(t){return Y.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:mt((function(){return[0]})),last:mt((function(t,e){return[e-1]})),eq:mt((function(t,e,n){return[n<0?n+e:n]})),even:mt((function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t})),odd:mt((function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t})),lt:mt((function(t,e,n){for(var r=n<0?n+e:n>e?e:n;--r>=0;)t.push(r);return t})),gt:mt((function(t,e,n){for(var r=n<0?n+e:n;++r<e;)t.push(r);return t}))}},r.pseudos["nth"]=r.pseudos["eq"],{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[e]=ft(e);for(e in{submit:!0,reset:!0})r.pseudos[e]=pt(e);function yt(){}function bt(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e].value;return r}function zt(t,e,n){var r=e.dir,i=e.next,a=i||r,o=n&&"parentNode"===a,s=A++;return e.first?function(e,n,i){while(e=e[r])if(1===e.nodeType||o)return t(e,n,i);return!1}:function(e,n,l){var c,u,h,d=[M,s];if(l){while(e=e[r])if((1===e.nodeType||o)&&t(e,n,l))return!0}else while(e=e[r])if(1===e.nodeType||o)if(h=e[z]||(e[z]={}),u=h[e.uniqueID]||(h[e.uniqueID]={}),i&&i===e.nodeName.toLowerCase())e=e[r]||e;else{if((c=u[a])&&c[0]===M&&c[1]===s)return d[2]=c[2];if(u[a]=d,d[2]=t(e,n,l))return!0}return!1}}function wt(t){return t.length>1?function(e,n,r){var i=t.length;while(i--)if(!t[i](e,n,r))return!1;return!0}:t[0]}function Mt(t,e,n){for(var r=0,i=e.length;r<i;r++)st(t,e[r],n);return n}function At(t,e,n,r,i){for(var a,o=[],s=0,l=t.length,c=null!=e;s<l;s++)(a=t[s])&&(n&&!n(a,r,i)||(o.push(a),c&&e.push(s)));return o}function Ct(t,e,n,r,i,a){return r&&!r[z]&&(r=Ct(r)),i&&!i[z]&&(i=Ct(i,a)),ct((function(a,o,s,l){var c,u,h,d=[],f=[],p=o.length,v=a||Mt(e||"*",s.nodeType?[s]:s,[]),m=!t||!a&&e?v:At(v,d,t,s,l),g=n?i||(a?t:p||r)?[]:o:m;if(n&&n(m,g,s,l),r){c=At(g,f),r(c,[],s,l),u=c.length;while(u--)(h=c[u])&&(g[f[u]]=!(m[f[u]]=h))}if(a){if(i||t){if(i){c=[],u=g.length;while(u--)(h=g[u])&&c.push(m[u]=h);i(null,g=[],c,l)}u=g.length;while(u--)(h=g[u])&&(c=i?B(a,h):d[u])>-1&&(a[c]=!(o[c]=h))}}else g=At(g===o?g.splice(p,g.length):g),i?i(null,o,g,l):L.apply(o,g)}))}function Ot(t){for(var e,n,i,a=t.length,o=r.relative[t[0].type],s=o||r.relative[" "],l=o?1:0,u=zt((function(t){return t===e}),s,!0),h=zt((function(t){return B(e,t)>-1}),s,!0),d=[function(t,n,r){var i=!o&&(r||n!==c)||((e=n).nodeType?u(t,n,r):h(t,n,r));return e=null,i}];l<a;l++)if(n=r.relative[t[l].type])d=[zt(wt(d),n)];else{if(n=r.filter[t[l].type].apply(null,t[l].matches),n[z]){for(i=++l;i<a;i++)if(r.relative[t[i].type])break;return Ct(l>1&&wt(d),l>1&&bt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace($,"$1"),n,l<i&&Ot(t.slice(l,i)),i<a&&Ot(t=t.slice(i)),i<a&&bt(t))}d.push(n)}return wt(d)}function Vt(t,e){var n=e.length>0,i=t.length>0,a=function(a,o,s,l,u){var h,p,m,g=0,y="0",b=a&&[],z=[],w=c,A=a||i&&r.find["TAG"]("*",u),C=M+=null==w?1:Math.random()||.1,O=A.length;for(u&&(c=o==f||o||u);y!==O&&null!=(h=A[y]);y++){if(i&&h){p=0,o||h.ownerDocument==f||(d(h),s=!v);while(m=t[p++])if(m(h,o||f,s)){l.push(h);break}u&&(M=C)}n&&((h=!m&&h)&&g--,a&&b.push(h))}if(g+=y,n&&y!==g){p=0;while(m=e[p++])m(b,z,o,s);if(a){if(g>0)while(y--)b[y]||z[y]||(z[y]=k.call(l));z=At(z)}L.apply(l,z),u&&!a&&z.length>0&&g+e.length>1&&st.uniqueSort(l)}return u&&(M=C,c=w),b};return n?ct(a):a}return yt.prototype=r.filters=r.pseudos,r.setFilters=new yt,o=st.tokenize=function(t,e){var n,i,a,o,s,l,c,u=O[t+" "];if(u)return e?0:u.slice(0);s=t,l=[],c=r.preFilter;while(s){for(o in n&&!(i=R.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(a=[])),n=!1,(i=U.exec(s))&&(n=i.shift(),a.push({value:n,type:i[0].replace($," ")}),s=s.slice(n.length)),r.filter)!(i=K[o].exec(s))||c[o]&&!(i=c[o](i))||(n=i.shift(),a.push({value:n,type:o,matches:i}),s=s.slice(n.length));if(!n)break}return e?s.length:s?st.error(t):O(t,l).slice(0)},s=st.compile=function(t,e){var n,r=[],i=[],a=V[t+" "];if(!a){e||(e=o(t)),n=e.length;while(n--)a=Ot(e[n]),a[z]?r.push(a):i.push(a);a=V(t,Vt(i,r)),a.selector=t}return a},l=st.select=function(t,e,n,i){var a,l,c,u,h,d="function"===typeof t&&t,f=!i&&o(t=d.selector||t);if(n=n||[],1===f.length){if(l=f[0]=f[0].slice(0),l.length>2&&"ID"===(c=l[0]).type&&9===e.nodeType&&v&&r.relative[l[1].type]){if(e=(r.find["ID"](c.matches[0].replace(et,nt),e)||[])[0],!e)return n;d&&(e=e.parentNode),t=t.slice(l.shift().value.length)}a=K["needsContext"].test(t)?0:l.length;while(a--){if(c=l[a],r.relative[u=c.type])break;if((h=r.find[u])&&(i=h(c.matches[0].replace(et,nt),tt.test(l[0].type)&&gt(e.parentNode)||e))){if(l.splice(a,1),t=i.length&&bt(l),!t)return L.apply(n,i),n;break}}}return(d||s(t,f))(i,e,!v,n,!e||tt.test(t)&&gt(e.parentNode)||e),n},n.sortStable=z.split("").sort(H).join("")===z,n.detectDuplicates=!!h,d(),n.sortDetached=ut((function(t){return 1&t.compareDocumentPosition(f.createElement("fieldset"))})),ut((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||ht("type|href|height|width",(function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),n.attributes&&ut((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||ht("value",(function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),ut((function(t){return null==t.getAttribute("disabled")}))||ht(P,(function(t,e,n){var r;if(!n)return!0===t[e]?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null})),st}(n);O.find=S,O.expr=S.selectors,O.expr[":"]=O.expr.pseudos,O.uniqueSort=O.unique=S.uniqueSort,O.text=S.getText,O.isXMLDoc=S.isXML,O.contains=S.contains,O.escapeSelector=S.escape;var H=function(t,e,n){var r=[],i=void 0!==n;while((t=t[e])&&9!==t.nodeType)if(1===t.nodeType){if(i&&O(t).is(n))break;r.push(t)}return r},T=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},I=O.expr.match.needsContext;function k(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var _=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(t,e,n){return y(e)?O.grep(t,(function(t,r){return!!e.call(t,r,t)!==n})):e.nodeType?O.grep(t,(function(t){return t===e!==n})):"string"!==typeof e?O.grep(t,(function(t){return h.call(e,t)>-1!==n})):O.filter(e,t,n)}O.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?O.find.matchesSelector(r,t)?[r]:[]:O.find.matches(t,O.grep(e,(function(t){return 1===t.nodeType})))},O.fn.extend({find:function(t){var e,n,r=this.length,i=this;if("string"!==typeof t)return this.pushStack(O(t).filter((function(){for(e=0;e<r;e++)if(O.contains(i[e],this))return!0})));for(n=this.pushStack([]),e=0;e<r;e++)O.find(t,i[e],n);return r>1?O.uniqueSort(n):n},filter:function(t){return this.pushStack(L(this,t||[],!1))},not:function(t){return this.pushStack(L(this,t||[],!0))},is:function(t){return!!L(this,"string"===typeof t&&I.test(t)?O(t):t||[],!1).length}});var E,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,P=O.fn.init=function(t,e,n){var r,i;if(!t)return this;if(n=n||E,"string"===typeof t){if(r="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:B.exec(t),!r||!r[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(r[1]){if(e=e instanceof O?e[0]:e,O.merge(this,O.parseHTML(r[1],e&&e.nodeType?e.ownerDocument||e:z,!0)),_.test(r[1])&&O.isPlainObject(e))for(r in e)y(this[r])?this[r](e[r]):this.attr(r,e[r]);return this}return i=z.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):y(t)?void 0!==n.ready?n.ready(t):t(O):O.makeArray(t,this)};P.prototype=O.fn,E=O(z);var x=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function F(t,e){while((t=t[e])&&1!==t.nodeType);return t}O.fn.extend({has:function(t){var e=O(t,this),n=e.length;return this.filter((function(){for(var t=0;t<n;t++)if(O.contains(this,e[t]))return!0}))},closest:function(t,e){var n,r=0,i=this.length,a=[],o="string"!==typeof t&&O(t);if(!I.test(t))for(;r<i;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&O.find.matchesSelector(n,t))){a.push(n);break}return this.pushStack(a.length>1?O.uniqueSort(a):a)},index:function(t){return t?"string"===typeof t?h.call(O(t),this[0]):h.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(O.uniqueSort(O.merge(this.get(),O(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),O.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return H(t,"parentNode")},parentsUntil:function(t,e,n){return H(t,"parentNode",n)},next:function(t){return F(t,"nextSibling")},prev:function(t){return F(t,"previousSibling")},nextAll:function(t){return H(t,"nextSibling")},prevAll:function(t){return H(t,"previousSibling")},nextUntil:function(t,e,n){return H(t,"nextSibling",n)},prevUntil:function(t,e,n){return H(t,"previousSibling",n)},siblings:function(t){return T((t.parentNode||{}).firstChild,t)},children:function(t){return T(t.firstChild)},contents:function(t){return null!=t.contentDocument&&s(t.contentDocument)?t.contentDocument:(k(t,"template")&&(t=t.content||t),O.merge([],t.childNodes))}},(function(t,e){O.fn[t]=function(n,r){var i=O.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"===typeof r&&(i=O.filter(r,i)),this.length>1&&(D[t]||O.uniqueSort(i),x.test(t)&&i.reverse()),this.pushStack(i)}}));var j=/[^\x20\t\r\n\f]+/g;function N(t){var e={};return O.each(t.match(j)||[],(function(t,n){e[n]=!0})),e}function $(t){return t}function R(t){throw t}function U(t,e,n,r){var i;try{t&&y(i=t.promise)?i.call(t).done(e).fail(n):t&&y(i=t.then)?i.call(t,e,n):e.apply(void 0,[t].slice(r))}catch(t){n.apply(void 0,[t])}}O.Callbacks=function(t){t="string"===typeof t?N(t):O.extend({},t);var e,n,r,i,a=[],o=[],s=-1,l=function(){for(i=i||t.once,r=e=!0;o.length;s=-1){n=o.shift();while(++s<a.length)!1===a[s].apply(n[0],n[1])&&t.stopOnFalse&&(s=a.length,n=!1)}t.memory||(n=!1),e=!1,i&&(a=n?[]:"")},c={add:function(){return a&&(n&&!e&&(s=a.length-1,o.push(n)),function e(n){O.each(n,(function(n,r){y(r)?t.unique&&c.has(r)||a.push(r):r&&r.length&&"string"!==A(r)&&e(r)}))}(arguments),n&&!e&&l()),this},remove:function(){return O.each(arguments,(function(t,e){var n;while((n=O.inArray(e,a,n))>-1)a.splice(n,1),n<=s&&s--})),this},has:function(t){return t?O.inArray(t,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return i=o=[],a=n="",this},disabled:function(){return!a},lock:function(){return i=o=[],n||e||(a=n=""),this},locked:function(){return!!i},fireWith:function(t,n){return i||(n=n||[],n=[t,n.slice?n.slice():n],o.push(n),e||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},O.extend({Deferred:function(t){var e=[["notify","progress",O.Callbacks("memory"),O.Callbacks("memory"),2],["resolve","done",O.Callbacks("once memory"),O.Callbacks("once memory"),0,"resolved"],["reject","fail",O.Callbacks("once memory"),O.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},catch:function(t){return i.then(null,t)},pipe:function(){var t=arguments;return O.Deferred((function(n){O.each(e,(function(e,r){var i=y(t[r[4]])&&t[r[4]];a[r[1]]((function(){var t=i&&i.apply(this,arguments);t&&y(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[t]:arguments)}))})),t=null})).promise()},then:function(t,r,i){var a=0;function o(t,e,r,i){return function(){var s=this,l=arguments,c=function(){var n,c;if(!(t<a)){if(n=r.apply(s,l),n===e.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"===typeof n||"function"===typeof n)&&n.then,y(c)?i?c.call(n,o(a,e,$,i),o(a,e,R,i)):(a++,c.call(n,o(a,e,$,i),o(a,e,R,i),o(a,e,$,e.notifyWith))):(r!==$&&(s=void 0,l=[n]),(i||e.resolveWith)(s,l))}},u=i?c:function(){try{c()}catch(n){O.Deferred.exceptionHook&&O.Deferred.exceptionHook(n,u.stackTrace),t+1>=a&&(r!==R&&(s=void 0,l=[n]),e.rejectWith(s,l))}};t?u():(O.Deferred.getStackHook&&(u.stackTrace=O.Deferred.getStackHook()),n.setTimeout(u))}}return O.Deferred((function(n){e[0][3].add(o(0,n,y(i)?i:$,n.notifyWith)),e[1][3].add(o(0,n,y(t)?t:$)),e[2][3].add(o(0,n,y(r)?r:R))})).promise()},promise:function(t){return null!=t?O.extend(t,i):i}},a={};return O.each(e,(function(t,n){var o=n[2],s=n[5];i[n[1]]=o.add,s&&o.add((function(){r=s}),e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),o.add(n[3].fire),a[n[0]]=function(){return a[n[0]+"With"](this===a?void 0:this,arguments),this},a[n[0]+"With"]=o.fireWith})),i.promise(a),t&&t.call(a,a),a},when:function(t){var e=arguments.length,n=e,r=Array(n),i=l.call(arguments),a=O.Deferred(),o=function(t){return function(n){r[t]=this,i[t]=arguments.length>1?l.call(arguments):n,--e||a.resolveWith(r,i)}};if(e<=1&&(U(t,a.done(o(n)).resolve,a.reject,!e),"pending"===a.state()||y(i[n]&&i[n].then)))return a.then();while(n--)U(i[n],o(n),a.reject);return a.promise()}});var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;O.Deferred.exceptionHook=function(t,e){n.console&&n.console.warn&&t&&q.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},O.readyException=function(t){n.setTimeout((function(){throw t}))};var W=O.Deferred();function G(){z.removeEventListener("DOMContentLoaded",G),n.removeEventListener("load",G),O.ready()}O.fn.ready=function(t){return W.then(t).catch((function(t){O.readyException(t)})),this},O.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--O.readyWait:O.isReady)||(O.isReady=!0,!0!==t&&--O.readyWait>0||W.resolveWith(z,[O]))}}),O.ready.then=W.then,"complete"===z.readyState||"loading"!==z.readyState&&!z.documentElement.doScroll?n.setTimeout(O.ready):(z.addEventListener("DOMContentLoaded",G),n.addEventListener("load",G));var K=function(t,e,n,r,i,a,o){var s=0,l=t.length,c=null==n;if("object"===A(n))for(s in i=!0,n)K(t,e,s,n[s],!0,a,o);else if(void 0!==r&&(i=!0,y(r)||(o=!0),c&&(o?(e.call(t,r),e=null):(c=e,e=function(t,e,n){return c.call(O(t),n)})),e))for(;s<l;s++)e(t[s],n,o?r:r.call(t[s],s,e(t[s],n)));return i?t:c?e.call(t):l?e(t[0],n):a},X=/^-ms-/,Y=/-([a-z])/g;function J(t,e){return e.toUpperCase()}function Q(t){return t.replace(X,"ms-").replace(Y,J)}var Z=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function tt(){this.expando=O.expando+tt.uid++}tt.uid=1,tt.prototype={cache:function(t){var e=t[this.expando];return e||(e={},Z(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var r,i=this.cache(t);if("string"===typeof e)i[Q(e)]=n;else for(r in e)i[Q(r)]=e[r];return i},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][Q(e)]},access:function(t,e,n){return void 0===e||e&&"string"===typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,r=t[this.expando];if(void 0!==r){if(void 0!==e){Array.isArray(e)?e=e.map(Q):(e=Q(e),e=e in r?[e]:e.match(j)||[]),n=e.length;while(n--)delete r[e[n]]}(void 0===e||O.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!O.isEmptyObject(e)}};var et=new tt,nt=new tt,rt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,it=/[A-Z]/g;function at(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:rt.test(t)?JSON.parse(t):t)}function ot(t,e,n){var r;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(it,"-$&").toLowerCase(),n=t.getAttribute(r),"string"===typeof n){try{n=at(n)}catch(i){}nt.set(t,e,n)}else n=void 0;return n}O.extend({hasData:function(t){return nt.hasData(t)||et.hasData(t)},data:function(t,e,n){return nt.access(t,e,n)},removeData:function(t,e){nt.remove(t,e)},_data:function(t,e,n){return et.access(t,e,n)},_removeData:function(t,e){et.remove(t,e)}}),O.fn.extend({data:function(t,e){var n,r,i,a=this[0],o=a&&a.attributes;if(void 0===t){if(this.length&&(i=nt.get(a),1===a.nodeType&&!et.get(a,"hasDataAttrs"))){n=o.length;while(n--)o[n]&&(r=o[n].name,0===r.indexOf("data-")&&(r=Q(r.slice(5)),ot(a,r,i[r])));et.set(a,"hasDataAttrs",!0)}return i}return"object"===typeof t?this.each((function(){nt.set(this,t)})):K(this,(function(e){var n;if(a&&void 0===e)return n=nt.get(a,t),void 0!==n?n:(n=ot(a,t),void 0!==n?n:void 0);this.each((function(){nt.set(this,t,e)}))}),null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){nt.remove(this,t)}))}}),O.extend({queue:function(t,e,n){var r;if(t)return e=(e||"fx")+"queue",r=et.get(t,e),n&&(!r||Array.isArray(n)?r=et.access(t,e,O.makeArray(n)):r.push(n)),r||[]},dequeue:function(t,e){e=e||"fx";var n=O.queue(t,e),r=n.length,i=n.shift(),a=O._queueHooks(t,e),o=function(){O.dequeue(t,e)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete a.stop,i.call(t,o,a)),!r&&a&&a.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return et.get(t,n)||et.access(t,n,{empty:O.Callbacks("once memory").add((function(){et.remove(t,[e+"queue",n])}))})}}),O.fn.extend({queue:function(t,e){var n=2;return"string"!==typeof t&&(e=t,t="fx",n--),arguments.length<n?O.queue(this[0],t):void 0===e?this:this.each((function(){var n=O.queue(this,t,e);O._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&O.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){O.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=O.Deferred(),a=this,o=this.length,s=function(){--r||i.resolveWith(a,[a])};"string"!==typeof t&&(e=t,t=void 0),t=t||"fx";while(o--)n=et.get(a[o],t+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(e)}});var st=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=new RegExp("^(?:([+-])=|)("+st+")([a-z%]*)$","i"),ct=["Top","Right","Bottom","Left"],ut=z.documentElement,ht=function(t){return O.contains(t.ownerDocument,t)},dt={composed:!0};ut.getRootNode&&(ht=function(t){return O.contains(t.ownerDocument,t)||t.getRootNode(dt)===t.ownerDocument});var ft=function(t,e){return t=e||t,"none"===t.style.display||""===t.style.display&&ht(t)&&"none"===O.css(t,"display")};function pt(t,e,n,r){var i,a,o=20,s=r?function(){return r.cur()}:function(){return O.css(t,e,"")},l=s(),c=n&&n[3]||(O.cssNumber[e]?"":"px"),u=t.nodeType&&(O.cssNumber[e]||"px"!==c&&+l)&&lt.exec(O.css(t,e));if(u&&u[3]!==c){l/=2,c=c||u[3],u=+l||1;while(o--)O.style(t,e,u+c),(1-a)*(1-(a=s()/l||.5))<=0&&(o=0),u/=a;u*=2,O.style(t,e,u+c),n=n||[]}return n&&(u=+u||+l||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=u,r.end=i)),i}var vt={};function mt(t){var e,n=t.ownerDocument,r=t.nodeName,i=vt[r];return i||(e=n.body.appendChild(n.createElement(r)),i=O.css(e,"display"),e.parentNode.removeChild(e),"none"===i&&(i="block"),vt[r]=i,i)}function gt(t,e){for(var n,r,i=[],a=0,o=t.length;a<o;a++)r=t[a],r.style&&(n=r.style.display,e?("none"===n&&(i[a]=et.get(r,"display")||null,i[a]||(r.style.display="")),""===r.style.display&&ft(r)&&(i[a]=mt(r))):"none"!==n&&(i[a]="none",et.set(r,"display",n)));for(a=0;a<o;a++)null!=i[a]&&(t[a].style.display=i[a]);return t}O.fn.extend({show:function(){return gt(this,!0)},hide:function(){return gt(this)},toggle:function(t){return"boolean"===typeof t?t?this.show():this.hide():this.each((function(){ft(this)?O(this).show():O(this).hide()}))}});var yt=/^(?:checkbox|radio)$/i,bt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,zt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=z.createDocumentFragment(),e=t.appendChild(z.createElement("div")),n=z.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),g.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,e.innerHTML="<option></option>",g.option=!!e.lastChild})();var wt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Mt(t,e){var n;return n="undefined"!==typeof t.getElementsByTagName?t.getElementsByTagName(e||"*"):"undefined"!==typeof t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&k(t,e)?O.merge([t],n):n}function At(t,e){for(var n=0,r=t.length;n<r;n++)et.set(t[n],"globalEval",!e||et.get(e[n],"globalEval"))}wt.tbody=wt.tfoot=wt.colgroup=wt.caption=wt.thead,wt.th=wt.td,g.option||(wt.optgroup=wt.option=[1,"<select multiple='multiple'>","</select>"]);var Ct=/<|&#?\w+;/;function Ot(t,e,n,r,i){for(var a,o,s,l,c,u,h=e.createDocumentFragment(),d=[],f=0,p=t.length;f<p;f++)if(a=t[f],a||0===a)if("object"===A(a))O.merge(d,a.nodeType?[a]:a);else if(Ct.test(a)){o=o||h.appendChild(e.createElement("div")),s=(bt.exec(a)||["",""])[1].toLowerCase(),l=wt[s]||wt._default,o.innerHTML=l[1]+O.htmlPrefilter(a)+l[2],u=l[0];while(u--)o=o.lastChild;O.merge(d,o.childNodes),o=h.firstChild,o.textContent=""}else d.push(e.createTextNode(a));h.textContent="",f=0;while(a=d[f++])if(r&&O.inArray(a,r)>-1)i&&i.push(a);else if(c=ht(a),o=Mt(h.appendChild(a),"script"),c&&At(o),n){u=0;while(a=o[u++])zt.test(a.type||"")&&n.push(a)}return h}var Vt=/^([^.]*)(?:\.(.+)|)/;function St(){return!0}function Ht(){return!1}function Tt(t,e){return t===It()===("focus"===e)}function It(){try{return z.activeElement}catch(t){}}function kt(t,e,n,r,i,a){var o,s;if("object"===typeof e){for(s in"string"!==typeof n&&(r=r||n,n=void 0),e)kt(t,s,n,r,e[s],a);return t}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"===typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ht;else if(!i)return t;return 1===a&&(o=i,i=function(t){return O().off(t),o.apply(this,arguments)},i.guid=o.guid||(o.guid=O.guid++)),t.each((function(){O.event.add(this,e,i,r,n)}))}function _t(t,e,n){n?(et.set(t,e,!1),O.event.add(t,e,{namespace:!1,handler:function(t){var r,i,a=et.get(this,e);if(1&t.isTrigger&&this[e]){if(a.length)(O.event.special[e]||{}).delegateType&&t.stopPropagation();else if(a=l.call(arguments),et.set(this,e,a),r=n(this,e),this[e](),i=et.get(this,e),a!==i||r?et.set(this,e,!1):i={},a!==i)return t.stopImmediatePropagation(),t.preventDefault(),i&&i.value}else a.length&&(et.set(this,e,{value:O.event.trigger(O.extend(a[0],O.Event.prototype),a.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===et.get(t,e)&&O.event.add(t,e,St)}O.event={global:{},add:function(t,e,n,r,i){var a,o,s,l,c,u,h,d,f,p,v,m=et.get(t);if(Z(t)){n.handler&&(a=n,n=a.handler,i=a.selector),i&&O.find.matchesSelector(ut,i),n.guid||(n.guid=O.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(e){return"undefined"!==typeof O&&O.event.triggered!==e.type?O.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(j)||[""],c=e.length;while(c--)s=Vt.exec(e[c])||[],f=v=s[1],p=(s[2]||"").split(".").sort(),f&&(h=O.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,h=O.event.special[f]||{},u=O.extend({type:f,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&O.expr.match.needsContext.test(i),namespace:p.join(".")},a),(d=l[f])||(d=l[f]=[],d.delegateCount=0,h.setup&&!1!==h.setup.call(t,r,p,o)||t.addEventListener&&t.addEventListener(f,o)),h.add&&(h.add.call(t,u),u.handler.guid||(u.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,u):d.push(u),O.event.global[f]=!0)}},remove:function(t,e,n,r,i){var a,o,s,l,c,u,h,d,f,p,v,m=et.hasData(t)&&et.get(t);if(m&&(l=m.events)){e=(e||"").match(j)||[""],c=e.length;while(c--)if(s=Vt.exec(e[c])||[],f=v=s[1],p=(s[2]||"").split(".").sort(),f){h=O.event.special[f]||{},f=(r?h.delegateType:h.bindType)||f,d=l[f]||[],s=s[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=a=d.length;while(a--)u=d[a],!i&&v!==u.origType||n&&n.guid!==u.guid||s&&!s.test(u.namespace)||r&&r!==u.selector&&("**"!==r||!u.selector)||(d.splice(a,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(t,u));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(t,p,m.handle)||O.removeEvent(t,f,m.handle),delete l[f])}else for(f in l)O.event.remove(t,f+e[c],n,r,!0);O.isEmptyObject(l)&&et.remove(t,"handle events")}},dispatch:function(t){var e,n,r,i,a,o,s=new Array(arguments.length),l=O.event.fix(t),c=(et.get(this,"events")||Object.create(null))[l.type]||[],u=O.event.special[l.type]||{};for(s[0]=l,e=1;e<arguments.length;e++)s[e]=arguments[e];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){o=O.event.handlers.call(this,l,c),e=0;while((i=o[e++])&&!l.isPropagationStopped()){l.currentTarget=i.elem,n=0;while((a=i.handlers[n++])&&!l.isImmediatePropagationStopped())l.rnamespace&&!1!==a.namespace&&!l.rnamespace.test(a.namespace)||(l.handleObj=a,l.data=a.data,r=((O.event.special[a.origType]||{}).handle||a.handler).apply(i.elem,s),void 0!==r&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()))}return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(t,e){var n,r,i,a,o,s=[],l=e.delegateCount,c=t.target;if(l&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(a=[],o={},n=0;n<l;n++)r=e[n],i=r.selector+" ",void 0===o[i]&&(o[i]=r.needsContext?O(i,this).index(c)>-1:O.find(i,this,null,[c]).length),o[i]&&a.push(r);a.length&&s.push({elem:c,handlers:a})}return c=this,l<e.length&&s.push({elem:c,handlers:e.slice(l)}),s},addProp:function(t,e){Object.defineProperty(O.Event.prototype,t,{enumerable:!0,configurable:!0,get:y(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[O.expando]?t:new O.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return yt.test(e.type)&&e.click&&k(e,"input")&&_t(e,"click",St),!1},trigger:function(t){var e=this||t;return yt.test(e.type)&&e.click&&k(e,"input")&&_t(e,"click"),!0},_default:function(t){var e=t.target;return yt.test(e.type)&&e.click&&k(e,"input")&&et.get(e,"click")||k(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},O.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},O.Event=function(t,e){if(!(this instanceof O.Event))return new O.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?St:Ht,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&O.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[O.expando]=!0},O.Event.prototype={constructor:O.Event,isDefaultPrevented:Ht,isPropagationStopped:Ht,isImmediatePropagationStopped:Ht,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=St,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=St,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=St,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},O.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},O.event.addProp),O.each({focus:"focusin",blur:"focusout"},(function(t,e){O.event.special[t]={setup:function(){return _t(this,t,Tt),!1},trigger:function(){return _t(this,t),!0},_default:function(e){return et.get(e.target,t)},delegateType:e}})),O.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,e){O.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,a=t.handleObj;return i&&(i===r||O.contains(r,i))||(t.type=a.origType,n=a.handler.apply(this,arguments),t.type=e),n}}})),O.fn.extend({on:function(t,e,n,r){return kt(this,t,e,n,r)},one:function(t,e,n,r){return kt(this,t,e,n,r,1)},off:function(t,e,n){var r,i;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,O(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"===typeof t){for(i in t)this.off(i,e,t[i]);return this}return!1!==e&&"function"!==typeof e||(n=e,e=void 0),!1===n&&(n=Ht),this.each((function(){O.event.remove(this,t,n,e)}))}});var Lt=/<script|<style|<link/i,Et=/checked\s*(?:[^=]|=\s*.checked.)/i,Bt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Pt(t,e){return k(t,"table")&&k(11!==e.nodeType?e:e.firstChild,"tr")&&O(t).children("tbody")[0]||t}function xt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Dt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Ft(t,e){var n,r,i,a,o,s,l;if(1===e.nodeType){if(et.hasData(t)&&(a=et.get(t),l=a.events,l))for(i in et.remove(e,"handle events"),l)for(n=0,r=l[i].length;n<r;n++)O.event.add(e,i,l[i][n]);nt.hasData(t)&&(o=nt.access(t),s=O.extend({},o),nt.set(e,s))}}function jt(t,e){var n=e.nodeName.toLowerCase();"input"===n&&yt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function Nt(t,e,n,r){e=c(e);var i,a,o,s,l,u,h=0,d=t.length,f=d-1,p=e[0],v=y(p);if(v||d>1&&"string"===typeof p&&!g.checkClone&&Et.test(p))return t.each((function(i){var a=t.eq(i);v&&(e[0]=p.call(this,i,a.html())),Nt(a,e,n,r)}));if(d&&(i=Ot(e,t[0].ownerDocument,!1,t,r),a=i.firstChild,1===i.childNodes.length&&(i=a),a||r)){for(o=O.map(Mt(i,"script"),xt),s=o.length;h<d;h++)l=i,h!==f&&(l=O.clone(l,!0,!0),s&&O.merge(o,Mt(l,"script"))),n.call(t[h],l,h);if(s)for(u=o[o.length-1].ownerDocument,O.map(o,Dt),h=0;h<s;h++)l=o[h],zt.test(l.type||"")&&!et.access(l,"globalEval")&&O.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?O._evalUrl&&!l.noModule&&O._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},u):M(l.textContent.replace(Bt,""),l,u))}return t}function $t(t,e,n){for(var r,i=e?O.filter(e,t):t,a=0;null!=(r=i[a]);a++)n||1!==r.nodeType||O.cleanData(Mt(r)),r.parentNode&&(n&&ht(r)&&At(Mt(r,"script")),r.parentNode.removeChild(r));return t}O.extend({htmlPrefilter:function(t){return t},clone:function(t,e,n){var r,i,a,o,s=t.cloneNode(!0),l=ht(t);if(!g.noCloneChecked&&(1===t.nodeType||11===t.nodeType)&&!O.isXMLDoc(t))for(o=Mt(s),a=Mt(t),r=0,i=a.length;r<i;r++)jt(a[r],o[r]);if(e)if(n)for(a=a||Mt(t),o=o||Mt(s),r=0,i=a.length;r<i;r++)Ft(a[r],o[r]);else Ft(t,s);return o=Mt(s,"script"),o.length>0&&At(o,!l&&Mt(t,"script")),s},cleanData:function(t){for(var e,n,r,i=O.event.special,a=0;void 0!==(n=t[a]);a++)if(Z(n)){if(e=n[et.expando]){if(e.events)for(r in e.events)i[r]?O.event.remove(n,r):O.removeEvent(n,r,e.handle);n[et.expando]=void 0}n[nt.expando]&&(n[nt.expando]=void 0)}}}),O.fn.extend({detach:function(t){return $t(this,t,!0)},remove:function(t){return $t(this,t)},text:function(t){return K(this,(function(t){return void 0===t?O.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)}))}),null,t,arguments.length)},append:function(){return Nt(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Pt(this,t);e.appendChild(t)}}))},prepend:function(){return Nt(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Pt(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return Nt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return Nt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(O.cleanData(Mt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map((function(){return O.clone(this,t,e)}))},html:function(t){return K(this,(function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"===typeof t&&!Lt.test(t)&&!wt[(bt.exec(t)||["",""])[1].toLowerCase()]){t=O.htmlPrefilter(t);try{for(;n<r;n++)e=this[n]||{},1===e.nodeType&&(O.cleanData(Mt(e,!1)),e.innerHTML=t);e=0}catch(i){}}e&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=[];return Nt(this,arguments,(function(e){var n=this.parentNode;O.inArray(this,t)<0&&(O.cleanData(Mt(this)),n&&n.replaceChild(e,this))}),t)}}),O.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,e){O.fn[t]=function(t){for(var n,r=[],i=O(t),a=i.length-1,o=0;o<=a;o++)n=o===a?this:this.clone(!0),O(i[o])[e](n),u.apply(r,n.get());return this.pushStack(r)}}));var Rt=new RegExp("^("+st+")(?!px)[a-z%]+$","i"),Ut=/^--/,qt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=n),e.getComputedStyle(t)},Wt=function(t,e,n){var r,i,a={};for(i in e)a[i]=t.style[i],t.style[i]=e[i];for(i in r=n.call(t),e)t.style[i]=a[i];return r},Gt=new RegExp(ct.join("|"),"i"),Kt="[\\x20\\t\\r\\n\\f]",Xt=new RegExp("^"+Kt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Kt+"+$","g");function Yt(t,e,n){var r,i,a,o,s=Ut.test(e),l=t.style;return n=n||qt(t),n&&(o=n.getPropertyValue(e)||n[e],s&&o&&(o=o.replace(Xt,"$1")||void 0),""!==o||ht(t)||(o=O.style(t,e)),!g.pixelBoxStyles()&&Rt.test(o)&&Gt.test(e)&&(r=l.width,i=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=r,l.minWidth=i,l.maxWidth=a)),void 0!==o?o+"":o}function Jt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}(function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ut.appendChild(c).appendChild(u);var t=n.getComputedStyle(u);r="1%"!==t.top,l=12===e(t.marginLeft),u.style.right="60%",o=36===e(t.right),i=36===e(t.width),u.style.position="absolute",a=12===e(u.offsetWidth/3),ut.removeChild(c),u=null}}function e(t){return Math.round(parseFloat(t))}var r,i,a,o,s,l,c=z.createElement("div"),u=z.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===u.style.backgroundClip,O.extend(g,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),o},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),a},reliableTrDimensions:function(){var t,e,r,i;return null==s&&(t=z.createElement("table"),e=z.createElement("tr"),r=z.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",e.style.cssText="border:1px solid",e.style.height="1px",r.style.height="9px",r.style.display="block",ut.appendChild(t).appendChild(e).appendChild(r),i=n.getComputedStyle(e),s=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===e.offsetHeight,ut.removeChild(t)),s}}))})();var Qt=["Webkit","Moz","ms"],Zt=z.createElement("div").style,te={};function ee(t){var e=t[0].toUpperCase()+t.slice(1),n=Qt.length;while(n--)if(t=Qt[n]+e,t in Zt)return t}function ne(t){var e=O.cssProps[t]||te[t];return e||(t in Zt?t:te[t]=ee(t)||t)}var re=/^(none|table(?!-c[ea]).+)/,ie={position:"absolute",visibility:"hidden",display:"block"},ae={letterSpacing:"0",fontWeight:"400"};function oe(t,e,n){var r=lt.exec(e);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):e}function se(t,e,n,r,i,a){var o="width"===e?1:0,s=0,l=0;if(n===(r?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(l+=O.css(t,n+ct[o],!0,i)),r?("content"===n&&(l-=O.css(t,"padding"+ct[o],!0,i)),"margin"!==n&&(l-=O.css(t,"border"+ct[o]+"Width",!0,i))):(l+=O.css(t,"padding"+ct[o],!0,i),"padding"!==n?l+=O.css(t,"border"+ct[o]+"Width",!0,i):s+=O.css(t,"border"+ct[o]+"Width",!0,i));return!r&&a>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-a-l-s-.5))||0),l}function le(t,e,n){var r=qt(t),i=!g.boxSizingReliable()||n,a=i&&"border-box"===O.css(t,"boxSizing",!1,r),o=a,s=Yt(t,e,r),l="offset"+e[0].toUpperCase()+e.slice(1);if(Rt.test(s)){if(!n)return s;s="auto"}return(!g.boxSizingReliable()&&a||!g.reliableTrDimensions()&&k(t,"tr")||"auto"===s||!parseFloat(s)&&"inline"===O.css(t,"display",!1,r))&&t.getClientRects().length&&(a="border-box"===O.css(t,"boxSizing",!1,r),o=l in t,o&&(s=t[l])),s=parseFloat(s)||0,s+se(t,e,n||(a?"border":"content"),o,r,s)+"px"}function ce(t,e,n,r,i){return new ce.prototype.init(t,e,n,r,i)}O.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Yt(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,a,o,s=Q(e),l=Ut.test(e),c=t.style;if(l||(e=ne(s)),o=O.cssHooks[e]||O.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(t,!1,r))?i:c[e];a=typeof n,"string"===a&&(i=lt.exec(n))&&i[1]&&(n=pt(t,e,i),a="number"),null!=n&&n===n&&("number"!==a||l||(n+=i&&i[3]||(O.cssNumber[s]?"":"px")),g.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),o&&"set"in o&&void 0===(n=o.set(t,n,r))||(l?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,r){var i,a,o,s=Q(e),l=Ut.test(e);return l||(e=ne(s)),o=O.cssHooks[e]||O.cssHooks[s],o&&"get"in o&&(i=o.get(t,!0,n)),void 0===i&&(i=Yt(t,e,r)),"normal"===i&&e in ae&&(i=ae[e]),""===n||n?(a=parseFloat(i),!0===n||isFinite(a)?a||0:i):i}}),O.each(["height","width"],(function(t,e){O.cssHooks[e]={get:function(t,n,r){if(n)return!re.test(O.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?le(t,e,r):Wt(t,ie,(function(){return le(t,e,r)}))},set:function(t,n,r){var i,a=qt(t),o=!g.scrollboxSize()&&"absolute"===a.position,s=o||r,l=s&&"border-box"===O.css(t,"boxSizing",!1,a),c=r?se(t,e,r,l,a):0;return l&&o&&(c-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(a[e])-se(t,e,"border",!1,a)-.5)),c&&(i=lt.exec(n))&&"px"!==(i[3]||"px")&&(t.style[e]=n,n=O.css(t,e)),oe(t,n,c)}}})),O.cssHooks.marginLeft=Jt(g.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(Yt(t,"marginLeft"))||t.getBoundingClientRect().left-Wt(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),O.each({margin:"",padding:"",border:"Width"},(function(t,e){O.cssHooks[t+e]={expand:function(n){for(var r=0,i={},a="string"===typeof n?n.split(" "):[n];r<4;r++)i[t+ct[r]+e]=a[r]||a[r-2]||a[0];return i}},"margin"!==t&&(O.cssHooks[t+e].set=oe)})),O.fn.extend({css:function(t,e){return K(this,(function(t,e,n){var r,i,a={},o=0;if(Array.isArray(e)){for(r=qt(t),i=e.length;o<i;o++)a[e[o]]=O.css(t,e[o],!1,r);return a}return void 0!==n?O.style(t,e,n):O.css(t,e)}),t,e,arguments.length>1)}}),O.Tween=ce,ce.prototype={constructor:ce,init:function(t,e,n,r,i,a){this.elem=t,this.prop=n,this.easing=i||O.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=a||(O.cssNumber[n]?"":"px")},cur:function(){var t=ce.propHooks[this.prop];return t&&t.get?t.get(this):ce.propHooks._default.get(this)},run:function(t){var e,n=ce.propHooks[this.prop];return this.options.duration?this.pos=e=O.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ce.propHooks._default.set(this),this}},ce.prototype.init.prototype=ce.prototype,ce.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=O.css(t.elem,t.prop,""),e&&"auto"!==e?e:0)},set:function(t){O.fx.step[t.prop]?O.fx.step[t.prop](t):1!==t.elem.nodeType||!O.cssHooks[t.prop]&&null==t.elem.style[ne(t.prop)]?t.elem[t.prop]=t.now:O.style(t.elem,t.prop,t.now+t.unit)}}},ce.propHooks.scrollTop=ce.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},O.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},O.fx=ce.prototype.init,O.fx.step={};var ue,he,de=/^(?:toggle|show|hide)$/,fe=/queueHooks$/;function pe(){he&&(!1===z.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(pe):n.setTimeout(pe,O.fx.interval),O.fx.tick())}function ve(){return n.setTimeout((function(){ue=void 0})),ue=Date.now()}function me(t,e){var n,r=0,i={height:t};for(e=e?1:0;r<4;r+=2-e)n=ct[r],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function ge(t,e,n){for(var r,i=(ze.tweeners[e]||[]).concat(ze.tweeners["*"]),a=0,o=i.length;a<o;a++)if(r=i[a].call(n,e,t))return r}function ye(t,e,n){var r,i,a,o,s,l,c,u,h="width"in e||"height"in e,d=this,f={},p=t.style,v=t.nodeType&&ft(t),m=et.get(t,"fxshow");for(r in n.queue||(o=O._queueHooks(t,"fx"),null==o.unqueued&&(o.unqueued=0,s=o.empty.fire,o.empty.fire=function(){o.unqueued||s()}),o.unqueued++,d.always((function(){d.always((function(){o.unqueued--,O.queue(t,"fx").length||o.empty.fire()}))}))),e)if(i=e[r],de.test(i)){if(delete e[r],a=a||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;v=!0}f[r]=m&&m[r]||O.style(t,r)}if(l=!O.isEmptyObject(e),l||!O.isEmptyObject(f))for(r in h&&1===t.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],c=m&&m.display,null==c&&(c=et.get(t,"display")),u=O.css(t,"display"),"none"===u&&(c?u=c:(gt([t],!0),c=t.style.display||c,u=O.css(t,"display"),gt([t]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===O.css(t,"float")&&(l||(d.done((function(){p.display=c})),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),l=!1,f)l||(m?"hidden"in m&&(v=m.hidden):m=et.access(t,"fxshow",{display:c}),a&&(m.hidden=!v),v&&gt([t],!0),d.done((function(){for(r in v||gt([t]),et.remove(t,"fxshow"),f)O.style(t,r,f[r])}))),l=ge(v?m[r]:0,r,d),r in m||(m[r]=l.start,v&&(l.end=l.start,l.start=0))}function be(t,e){var n,r,i,a,o;for(n in t)if(r=Q(n),i=e[r],a=t[n],Array.isArray(a)&&(i=a[1],a=t[n]=a[0]),n!==r&&(t[r]=a,delete t[n]),o=O.cssHooks[r],o&&"expand"in o)for(n in a=o.expand(a),delete t[r],a)n in t||(t[n]=a[n],e[n]=i);else e[r]=i}function ze(t,e,n){var r,i,a=0,o=ze.prefilters.length,s=O.Deferred().always((function(){delete l.elem})),l=function(){if(i)return!1;for(var e=ue||ve(),n=Math.max(0,c.startTime+c.duration-e),r=n/c.duration||0,a=1-r,o=0,l=c.tweens.length;o<l;o++)c.tweens[o].run(a);return s.notifyWith(t,[c,a,n]),a<1&&l?n:(l||s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c]),!1)},c=s.promise({elem:t,props:O.extend({},e),opts:O.extend(!0,{specialEasing:{},easing:O.easing._default},n),originalProperties:e,originalOptions:n,startTime:ue||ve(),duration:n.duration,tweens:[],createTween:function(e,n){var r=O.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(r),r},stop:function(e){var n=0,r=e?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return e?(s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c,e])):s.rejectWith(t,[c,e]),this}}),u=c.props;for(be(u,c.opts.specialEasing);a<o;a++)if(r=ze.prefilters[a].call(c,t,u,c.opts),r)return y(r.stop)&&(O._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return O.map(u,ge,c),y(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),O.fx.timer(O.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}O.Animation=O.extend(ze,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return pt(n.elem,t,lt.exec(e),n),n}]},tweener:function(t,e){y(t)?(e=t,t=["*"]):t=t.match(j);for(var n,r=0,i=t.length;r<i;r++)n=t[r],ze.tweeners[n]=ze.tweeners[n]||[],ze.tweeners[n].unshift(e)},prefilters:[ye],prefilter:function(t,e){e?ze.prefilters.unshift(t):ze.prefilters.push(t)}}),O.speed=function(t,e,n){var r=t&&"object"===typeof t?O.extend({},t):{complete:n||!n&&e||y(t)&&t,duration:t,easing:n&&e||e&&!y(e)&&e};return O.fx.off?r.duration=0:"number"!==typeof r.duration&&(r.duration in O.fx.speeds?r.duration=O.fx.speeds[r.duration]:r.duration=O.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){y(r.old)&&r.old.call(this),r.queue&&O.dequeue(this,r.queue)},r},O.fn.extend({fadeTo:function(t,e,n,r){return this.filter(ft).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var i=O.isEmptyObject(t),a=O.speed(e,n,r),o=function(){var e=ze(this,O.extend({},t),a);(i||et.get(this,"finish"))&&e.stop(!0)};return o.finish=o,i||!1===a.queue?this.each(o):this.queue(a.queue,o)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!==typeof t&&(n=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each((function(){var e=!0,i=null!=t&&t+"queueHooks",a=O.timers,o=et.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&fe.test(i)&&r(o[i]);for(i=a.length;i--;)a[i].elem!==this||null!=t&&a[i].queue!==t||(a[i].anim.stop(n),e=!1,a.splice(i,1));!e&&n||O.dequeue(this,t)}))},finish:function(t){return!1!==t&&(t=t||"fx"),this.each((function(){var e,n=et.get(this),r=n[t+"queue"],i=n[t+"queueHooks"],a=O.timers,o=r?r.length:0;for(n.finish=!0,O.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=a.length;e--;)a[e].elem===this&&a[e].queue===t&&(a[e].anim.stop(!0),a.splice(e,1));for(e=0;e<o;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish}))}}),O.each(["toggle","show","hide"],(function(t,e){var n=O.fn[e];O.fn[e]=function(t,r,i){return null==t||"boolean"===typeof t?n.apply(this,arguments):this.animate(me(e,!0),t,r,i)}})),O.each({slideDown:me("show"),slideUp:me("hide"),slideToggle:me("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(t,e){O.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}})),O.timers=[],O.fx.tick=function(){var t,e=0,n=O.timers;for(ue=Date.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1);n.length||O.fx.stop(),ue=void 0},O.fx.timer=function(t){O.timers.push(t),O.fx.start()},O.fx.interval=13,O.fx.start=function(){he||(he=!0,pe())},O.fx.stop=function(){he=null},O.fx.speeds={slow:600,fast:200,_default:400},O.fn.delay=function(t,e){return t=O.fx&&O.fx.speeds[t]||t,e=e||"fx",this.queue(e,(function(e,r){var i=n.setTimeout(e,t);r.stop=function(){n.clearTimeout(i)}}))},function(){var t=z.createElement("input"),e=z.createElement("select"),n=e.appendChild(z.createElement("option"));t.type="checkbox",g.checkOn=""!==t.value,g.optSelected=n.selected,t=z.createElement("input"),t.value="t",t.type="radio",g.radioValue="t"===t.value}();var we,Me=O.expr.attrHandle;O.fn.extend({attr:function(t,e){return K(this,O.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each((function(){O.removeAttr(this,t)}))}}),O.extend({attr:function(t,e,n){var r,i,a=t.nodeType;if(3!==a&&8!==a&&2!==a)return"undefined"===typeof t.getAttribute?O.prop(t,e,n):(1===a&&O.isXMLDoc(t)||(i=O.attrHooks[e.toLowerCase()]||(O.expr.match.bool.test(e)?we:void 0)),void 0!==n?null===n?void O.removeAttr(t,e):i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:(t.setAttribute(e,n+""),n):i&&"get"in i&&null!==(r=i.get(t,e))?r:(r=O.find.attr(t,e),null==r?void 0:r))},attrHooks:{type:{set:function(t,e){if(!g.radioValue&&"radio"===e&&k(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,r=0,i=e&&e.match(j);if(i&&1===t.nodeType)while(n=i[r++])t.removeAttribute(n)}}),we={set:function(t,e,n){return!1===e?O.removeAttr(t,n):t.setAttribute(n,n),n}},O.each(O.expr.match.bool.source.match(/\w+/g),(function(t,e){var n=Me[e]||O.find.attr;Me[e]=function(t,e,r){var i,a,o=e.toLowerCase();return r||(a=Me[o],Me[o]=i,i=null!=n(t,e,r)?o:null,Me[o]=a),i}}));var Ae=/^(?:input|select|textarea|button)$/i,Ce=/^(?:a|area)$/i;function Oe(t){var e=t.match(j)||[];return e.join(" ")}function Ve(t){return t.getAttribute&&t.getAttribute("class")||""}function Se(t){return Array.isArray(t)?t:"string"===typeof t&&t.match(j)||[]}O.fn.extend({prop:function(t,e){return K(this,O.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each((function(){delete this[O.propFix[t]||t]}))}}),O.extend({prop:function(t,e,n){var r,i,a=t.nodeType;if(3!==a&&8!==a&&2!==a)return 1===a&&O.isXMLDoc(t)||(e=O.propFix[e]||e,i=O.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]},propHooks:{tabIndex:{get:function(t){var e=O.find.attr(t,"tabindex");return e?parseInt(e,10):Ae.test(t.nodeName)||Ce.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(O.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),O.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){O.propFix[this.toLowerCase()]=this})),O.fn.extend({addClass:function(t){var e,n,r,i,a,o;return y(t)?this.each((function(e){O(this).addClass(t.call(this,e,Ve(this)))})):(e=Se(t),e.length?this.each((function(){if(r=Ve(this),n=1===this.nodeType&&" "+Oe(r)+" ",n){for(a=0;a<e.length;a++)i=e[a],n.indexOf(" "+i+" ")<0&&(n+=i+" ");o=Oe(n),r!==o&&this.setAttribute("class",o)}})):this)},removeClass:function(t){var e,n,r,i,a,o;return y(t)?this.each((function(e){O(this).removeClass(t.call(this,e,Ve(this)))})):arguments.length?(e=Se(t),e.length?this.each((function(){if(r=Ve(this),n=1===this.nodeType&&" "+Oe(r)+" ",n){for(a=0;a<e.length;a++){i=e[a];while(n.indexOf(" "+i+" ")>-1)n=n.replace(" "+i+" "," ")}o=Oe(n),r!==o&&this.setAttribute("class",o)}})):this):this.attr("class","")},toggleClass:function(t,e){var n,r,i,a,o=typeof t,s="string"===o||Array.isArray(t);return y(t)?this.each((function(n){O(this).toggleClass(t.call(this,n,Ve(this),e),e)})):"boolean"===typeof e&&s?e?this.addClass(t):this.removeClass(t):(n=Se(t),this.each((function(){if(s)for(a=O(this),i=0;i<n.length;i++)r=n[i],a.hasClass(r)?a.removeClass(r):a.addClass(r);else void 0!==t&&"boolean"!==o||(r=Ve(this),r&&et.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":et.get(this,"__className__")||""))})))},hasClass:function(t){var e,n,r=0;e=" "+t+" ";while(n=this[r++])if(1===n.nodeType&&(" "+Oe(Ve(n))+" ").indexOf(e)>-1)return!0;return!1}});var He=/\r/g;O.fn.extend({val:function(t){var e,n,r,i=this[0];return arguments.length?(r=y(t),this.each((function(n){var i;1===this.nodeType&&(i=r?t.call(this,n,O(this).val()):t,null==i?i="":"number"===typeof i?i+="":Array.isArray(i)&&(i=O.map(i,(function(t){return null==t?"":t+""}))),e=O.valHooks[this.type]||O.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))}))):i?(e=O.valHooks[i.type]||O.valHooks[i.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:(n=i.value,"string"===typeof n?n.replace(He,""):null==n?"":n)):void 0}}),O.extend({valHooks:{option:{get:function(t){var e=O.find.attr(t,"value");return null!=e?e:Oe(O.text(t))}},select:{get:function(t){var e,n,r,i=t.options,a=t.selectedIndex,o="select-one"===t.type,s=o?null:[],l=o?a+1:i.length;for(r=a<0?l:o?a:0;r<l;r++)if(n=i[r],(n.selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!k(n.parentNode,"optgroup"))){if(e=O(n).val(),o)return e;s.push(e)}return s},set:function(t,e){var n,r,i=t.options,a=O.makeArray(e),o=i.length;while(o--)r=i[o],(r.selected=O.inArray(O.valHooks.option.get(r),a)>-1)&&(n=!0);return n||(t.selectedIndex=-1),a}}}}),O.each(["radio","checkbox"],(function(){O.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=O.inArray(O(t).val(),e)>-1}},g.checkOn||(O.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})),g.focusin="onfocusin"in n;var Te=/^(?:focusinfocus|focusoutblur)$/,Ie=function(t){t.stopPropagation()};O.extend(O.event,{trigger:function(t,e,r,i){var a,o,s,l,c,u,h,d,f=[r||z],v=p.call(t,"type")?t.type:t,m=p.call(t,"namespace")?t.namespace.split("."):[];if(o=d=s=r=r||z,3!==r.nodeType&&8!==r.nodeType&&!Te.test(v+O.event.triggered)&&(v.indexOf(".")>-1&&(m=v.split("."),v=m.shift(),m.sort()),c=v.indexOf(":")<0&&"on"+v,t=t[O.expando]?t:new O.Event(v,"object"===typeof t&&t),t.isTrigger=i?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),e=null==e?[t]:O.makeArray(e,[t]),h=O.event.special[v]||{},i||!h.trigger||!1!==h.trigger.apply(r,e))){if(!i&&!h.noBubble&&!b(r)){for(l=h.delegateType||v,Te.test(l+v)||(o=o.parentNode);o;o=o.parentNode)f.push(o),s=o;s===(r.ownerDocument||z)&&f.push(s.defaultView||s.parentWindow||n)}a=0;while((o=f[a++])&&!t.isPropagationStopped())d=o,t.type=a>1?l:h.bindType||v,u=(et.get(o,"events")||Object.create(null))[t.type]&&et.get(o,"handle"),u&&u.apply(o,e),u=c&&o[c],u&&u.apply&&Z(o)&&(t.result=u.apply(o,e),!1===t.result&&t.preventDefault());return t.type=v,i||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(f.pop(),e)||!Z(r)||c&&y(r[v])&&!b(r)&&(s=r[c],s&&(r[c]=null),O.event.triggered=v,t.isPropagationStopped()&&d.addEventListener(v,Ie),r[v](),t.isPropagationStopped()&&d.removeEventListener(v,Ie),O.event.triggered=void 0,s&&(r[c]=s)),t.result}},simulate:function(t,e,n){var r=O.extend(new O.Event,n,{type:t,isSimulated:!0});O.event.trigger(r,null,e)}}),O.fn.extend({trigger:function(t,e){return this.each((function(){O.event.trigger(t,e,this)}))},triggerHandler:function(t,e){var n=this[0];if(n)return O.event.trigger(t,e,n,!0)}}),g.focusin||O.each({focus:"focusin",blur:"focusout"},(function(t,e){var n=function(t){O.event.simulate(e,t.target,O.event.fix(t))};O.event.special[e]={setup:function(){var r=this.ownerDocument||this.document||this,i=et.access(r,e);i||r.addEventListener(t,n,!0),et.access(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=et.access(r,e)-1;i?et.access(r,e,i):(r.removeEventListener(t,n,!0),et.remove(r,e))}}}));var ke=n.location,_e={guid:Date.now()},Le=/\?/;O.parseXML=function(t){var e,r;if(!t||"string"!==typeof t)return null;try{e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(i){}return r=e&&e.getElementsByTagName("parsererror")[0],e&&!r||O.error("Invalid XML: "+(r?O.map(r.childNodes,(function(t){return t.textContent})).join("\n"):t)),e};var Ee=/\[\]$/,Be=/\r?\n/g,Pe=/^(?:submit|button|image|reset|file)$/i,xe=/^(?:input|select|textarea|keygen)/i;function De(t,e,n,r){var i;if(Array.isArray(e))O.each(e,(function(e,i){n||Ee.test(t)?r(t,i):De(t+"["+("object"===typeof i&&null!=i?e:"")+"]",i,n,r)}));else if(n||"object"!==A(e))r(t,e);else for(i in e)De(t+"["+i+"]",e[i],n,r)}O.param=function(t,e){var n,r=[],i=function(t,e){var n=y(e)?e():e;r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(null==t)return"";if(Array.isArray(t)||t.jquery&&!O.isPlainObject(t))O.each(t,(function(){i(this.name,this.value)}));else for(n in t)De(n,t[n],e,i);return r.join("&")},O.fn.extend({serialize:function(){return O.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=O.prop(this,"elements");return t?O.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!O(this).is(":disabled")&&xe.test(this.nodeName)&&!Pe.test(t)&&(this.checked||!yt.test(t))})).map((function(t,e){var n=O(this).val();return null==n?null:Array.isArray(n)?O.map(n,(function(t){return{name:e.name,value:t.replace(Be,"\r\n")}})):{name:e.name,value:n.replace(Be,"\r\n")}})).get()}});var Fe=/%20/g,je=/#.*$/,Ne=/([?&])_=[^&]*/,$e=/^(.*?):[ \t]*([^\r\n]*)$/gm,Re=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ue=/^(?:GET|HEAD)$/,qe=/^\/\//,We={},Ge={},Ke="*/".concat("*"),Xe=z.createElement("a");function Ye(t){return function(e,n){"string"!==typeof e&&(n=e,e="*");var r,i=0,a=e.toLowerCase().match(j)||[];if(y(n))while(r=a[i++])"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function Je(t,e,n,r){var i={},a=t===Ge;function o(s){var l;return i[s]=!0,O.each(t[s]||[],(function(t,s){var c=s(e,n,r);return"string"!==typeof c||a||i[c]?a?!(l=c):void 0:(e.dataTypes.unshift(c),o(c),!1)})),l}return o(e.dataTypes[0])||!i["*"]&&o("*")}function Qe(t,e){var n,r,i=O.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((i[n]?t:r||(r={}))[n]=e[n]);return r&&O.extend(!0,t,r),t}function Ze(t,e,n){var r,i,a,o,s=t.contents,l=t.dataTypes;while("*"===l[0])l.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){l.unshift(i);break}if(l[0]in n)a=l[0];else{for(i in n){if(!l[0]||t.converters[i+" "+l[0]]){a=i;break}o||(o=i)}a=a||o}if(a)return a!==l[0]&&l.unshift(a),n[a]}function tn(t,e,n,r){var i,a,o,s,l,c={},u=t.dataTypes.slice();if(u[1])for(o in t.converters)c[o.toLowerCase()]=t.converters[o];a=u.shift();while(a)if(t.responseFields[a]&&(n[t.responseFields[a]]=e),!l&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=a,a=u.shift(),a)if("*"===a)a=l;else if("*"!==l&&l!==a){if(o=c[l+" "+a]||c["* "+a],!o)for(i in c)if(s=i.split(" "),s[1]===a&&(o=c[l+" "+s[0]]||c["* "+s[0]],o)){!0===o?o=c[i]:!0!==c[i]&&(a=s[0],u.unshift(s[1]));break}if(!0!==o)if(o&&t.throws)e=o(e);else try{e=o(e)}catch(h){return{state:"parsererror",error:o?h:"No conversion from "+l+" to "+a}}}return{state:"success",data:e}}Xe.href=ke.href,O.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ke.href,type:"GET",isLocal:Re.test(ke.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ke,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":O.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Qe(Qe(t,O.ajaxSettings),e):Qe(O.ajaxSettings,t)},ajaxPrefilter:Ye(We),ajaxTransport:Ye(Ge),ajax:function(t,e){"object"===typeof t&&(e=t,t=void 0),e=e||{};var r,i,a,o,s,l,c,u,h,d,f=O.ajaxSetup({},e),p=f.context||f,v=f.context&&(p.nodeType||p.jquery)?O(p):O.event,m=O.Deferred(),g=O.Callbacks("once memory"),y=f.statusCode||{},b={},w={},M="canceled",A={readyState:0,getResponseHeader:function(t){var e;if(c){if(!o){o={};while(e=$e.exec(a))o[e[1].toLowerCase()+" "]=(o[e[1].toLowerCase()+" "]||[]).concat(e[2])}e=o[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(t,e){return null==c&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,b[t]=e),this},overrideMimeType:function(t){return null==c&&(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(c)A.always(t[A.status]);else for(e in t)y[e]=[y[e],t[e]];return this},abort:function(t){var e=t||M;return r&&r.abort(e),C(0,e),this}};if(m.promise(A),f.url=((t||f.url||ke.href)+"").replace(qe,ke.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(j)||[""],null==f.crossDomain){l=z.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=Xe.protocol+"//"+Xe.host!==l.protocol+"//"+l.host}catch(V){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!==typeof f.data&&(f.data=O.param(f.data,f.traditional)),Je(We,f,e,A),c)return A;for(h in u=O.event&&f.global,u&&0===O.active++&&O.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ue.test(f.type),i=f.url.replace(je,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Fe,"+")):(d=f.url.slice(i.length),f.data&&(f.processData||"string"===typeof f.data)&&(i+=(Le.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(Ne,"$1"),d=(Le.test(i)?"&":"?")+"_="+_e.guid+++d),f.url=i+d),f.ifModified&&(O.lastModified[i]&&A.setRequestHeader("If-Modified-Since",O.lastModified[i]),O.etag[i]&&A.setRequestHeader("If-None-Match",O.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&A.setRequestHeader("Content-Type",f.contentType),A.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ke+"; q=0.01":""):f.accepts["*"]),f.headers)A.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,A,f)||c))return A.abort();if(M="abort",g.add(f.complete),A.done(f.success),A.fail(f.error),r=Je(Ge,f,e,A),r){if(A.readyState=1,u&&v.trigger("ajaxSend",[A,f]),c)return A;f.async&&f.timeout>0&&(s=n.setTimeout((function(){A.abort("timeout")}),f.timeout));try{c=!1,r.send(b,C)}catch(V){if(c)throw V;C(-1,V)}}else C(-1,"No Transport");function C(t,e,o,l){var h,d,b,z,w,M=e;c||(c=!0,s&&n.clearTimeout(s),r=void 0,a=l||"",A.readyState=t>0?4:0,h=t>=200&&t<300||304===t,o&&(z=Ze(f,A,o)),!h&&O.inArray("script",f.dataTypes)>-1&&O.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),z=tn(f,z,A,h),h?(f.ifModified&&(w=A.getResponseHeader("Last-Modified"),w&&(O.lastModified[i]=w),w=A.getResponseHeader("etag"),w&&(O.etag[i]=w)),204===t||"HEAD"===f.type?M="nocontent":304===t?M="notmodified":(M=z.state,d=z.data,b=z.error,h=!b)):(b=M,!t&&M||(M="error",t<0&&(t=0))),A.status=t,A.statusText=(e||M)+"",h?m.resolveWith(p,[d,M,A]):m.rejectWith(p,[A,M,b]),A.statusCode(y),y=void 0,u&&v.trigger(h?"ajaxSuccess":"ajaxError",[A,f,h?d:b]),g.fireWith(p,[A,M]),u&&(v.trigger("ajaxComplete",[A,f]),--O.active||O.event.trigger("ajaxStop")))}return A},getJSON:function(t,e,n){return O.get(t,e,n,"json")},getScript:function(t,e){return O.get(t,void 0,e,"script")}}),O.each(["get","post"],(function(t,e){O[e]=function(t,n,r,i){return y(n)&&(i=i||r,r=n,n=void 0),O.ajax(O.extend({url:t,type:e,dataType:i,data:n,success:r},O.isPlainObject(t)&&t))}})),O.ajaxPrefilter((function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")})),O._evalUrl=function(t,e,n){return O.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){O.globalEval(t,e,n)}})},O.fn.extend({wrapAll:function(t){var e;return this[0]&&(y(t)&&(t=t.call(this[0])),e=O(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map((function(){var t=this;while(t.firstElementChild)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(t){return y(t)?this.each((function(e){O(this).wrapInner(t.call(this,e))})):this.each((function(){var e=O(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)}))},wrap:function(t){var e=y(t);return this.each((function(n){O(this).wrapAll(e?t.call(this,n):t)}))},unwrap:function(t){return this.parent(t).not("body").each((function(){O(this).replaceWith(this.childNodes)})),this}}),O.expr.pseudos.hidden=function(t){return!O.expr.pseudos.visible(t)},O.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},O.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}};var en={0:200,1223:204},nn=O.ajaxSettings.xhr();g.cors=!!nn&&"withCredentials"in nn,g.ajax=nn=!!nn,O.ajaxTransport((function(t){var e,r;if(g.cors||nn&&!t.crossDomain)return{send:function(i,a){var o,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)s[o]=t.xhrFields[o];for(o in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(o,i[o]);e=function(t){return function(){e&&(e=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===t?s.abort():"error"===t?"number"!==typeof s.status?a(0,"error"):a(s.status,s.statusText):a(en[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!==typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=e(),r=s.onerror=s.ontimeout=e("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout((function(){e&&r()}))},e=e("abort");try{s.send(t.hasContent&&t.data||null)}catch(l){if(e)throw l}},abort:function(){e&&e()}}})),O.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),O.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return O.globalEval(t),t}}}),O.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),O.ajaxTransport("script",(function(t){var e,n;if(t.crossDomain||t.scriptAttrs)return{send:function(r,i){e=O("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&i("error"===t.type?404:200,t.type)}),z.head.appendChild(e[0])},abort:function(){n&&n()}}}));var rn=[],an=/(=)\?(?=&|$)|\?\?/;O.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=rn.pop()||O.expando+"_"+_e.guid++;return this[t]=!0,t}}),O.ajaxPrefilter("json jsonp",(function(t,e,r){var i,a,o,s=!1!==t.jsonp&&(an.test(t.url)?"url":"string"===typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&an.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=y(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(an,"$1"+i):!1!==t.jsonp&&(t.url+=(Le.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return o||O.error(i+" was not called"),o[0]},t.dataTypes[0]="json",a=n[i],n[i]=function(){o=arguments},r.always((function(){void 0===a?O(n).removeProp(i):n[i]=a,t[i]&&(t.jsonpCallback=e.jsonpCallback,rn.push(i)),o&&y(a)&&a(o[0]),o=a=void 0})),"script"})),g.createHTMLDocument=function(){var t=z.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),O.parseHTML=function(t,e,n){return"string"!==typeof t?[]:("boolean"===typeof e&&(n=e,e=!1),e||(g.createHTMLDocument?(e=z.implementation.createHTMLDocument(""),r=e.createElement("base"),r.href=z.location.href,e.head.appendChild(r)):e=z),i=_.exec(t),a=!n&&[],i?[e.createElement(i[1])]:(i=Ot([t],e,a),a&&a.length&&O(a).remove(),O.merge([],i.childNodes)));var r,i,a},O.fn.load=function(t,e,n){var r,i,a,o=this,s=t.indexOf(" ");return s>-1&&(r=Oe(t.slice(s)),t=t.slice(0,s)),y(e)?(n=e,e=void 0):e&&"object"===typeof e&&(i="POST"),o.length>0&&O.ajax({url:t,type:i||"GET",dataType:"html",data:e}).done((function(t){a=arguments,o.html(r?O("<div>").append(O.parseHTML(t)).find(r):t)})).always(n&&function(t,e){o.each((function(){n.apply(this,a||[t.responseText,e,t])}))}),this},O.expr.pseudos.animated=function(t){return O.grep(O.timers,(function(e){return t===e.elem})).length},O.offset={setOffset:function(t,e,n){var r,i,a,o,s,l,c,u=O.css(t,"position"),h=O(t),d={};"static"===u&&(t.style.position="relative"),s=h.offset(),a=O.css(t,"top"),l=O.css(t,"left"),c=("absolute"===u||"fixed"===u)&&(a+l).indexOf("auto")>-1,c?(r=h.position(),o=r.top,i=r.left):(o=parseFloat(a)||0,i=parseFloat(l)||0),y(e)&&(e=e.call(t,n,O.extend({},s))),null!=e.top&&(d.top=e.top-s.top+o),null!=e.left&&(d.left=e.left-s.left+i),"using"in e?e.using.call(t,d):h.css(d)}},O.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each((function(e){O.offset.setOffset(this,t,e)}));var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,r=this[0],i={top:0,left:0};if("fixed"===O.css(r,"position"))e=r.getBoundingClientRect();else{e=this.offset(),n=r.ownerDocument,t=r.offsetParent||n.documentElement;while(t&&(t===n.body||t===n.documentElement)&&"static"===O.css(t,"position"))t=t.parentNode;t&&t!==r&&1===t.nodeType&&(i=O(t).offset(),i.top+=O.css(t,"borderTopWidth",!0),i.left+=O.css(t,"borderLeftWidth",!0))}return{top:e.top-i.top-O.css(r,"marginTop",!0),left:e.left-i.left-O.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){var t=this.offsetParent;while(t&&"static"===O.css(t,"position"))t=t.offsetParent;return t||ut}))}}),O.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(t,e){var n="pageYOffset"===e;O.fn[t]=function(r){return K(this,(function(t,r,i){var a;if(b(t)?a=t:9===t.nodeType&&(a=t.defaultView),void 0===i)return a?a[e]:t[r];a?a.scrollTo(n?a.pageXOffset:i,n?i:a.pageYOffset):t[r]=i}),t,r,arguments.length)}})),O.each(["top","left"],(function(t,e){O.cssHooks[e]=Jt(g.pixelPosition,(function(t,n){if(n)return n=Yt(t,e),Rt.test(n)?O(t).position()[e]+"px":n}))})),O.each({Height:"height",Width:"width"},(function(t,e){O.each({padding:"inner"+t,content:e,"":"outer"+t},(function(n,r){O.fn[r]=function(i,a){var o=arguments.length&&(n||"boolean"!==typeof i),s=n||(!0===i||!0===a?"margin":"border");return K(this,(function(e,n,i){var a;return b(e)?0===r.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(a=e.documentElement,Math.max(e.body["scroll"+t],a["scroll"+t],e.body["offset"+t],a["offset"+t],a["client"+t])):void 0===i?O.css(e,n,s):O.style(e,n,i,s)}),e,o?i:void 0,o)}}))})),O.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(t,e){O.fn[e]=function(t){return this.on(e,t)}})),O.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),O.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,e){O.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}));var on=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;O.proxy=function(t,e){var n,r,i;if("string"===typeof e&&(n=t[e],e=t,t=n),y(t))return r=l.call(arguments,2),i=function(){return t.apply(e||this,r.concat(l.call(arguments)))},i.guid=t.guid=t.guid||O.guid++,i},O.holdReady=function(t){t?O.readyWait++:O.ready(!0)},O.isArray=Array.isArray,O.parseJSON=JSON.parse,O.nodeName=k,O.isFunction=y,O.isWindow=b,O.camelCase=Q,O.type=A,O.now=Date.now,O.isNumeric=function(t){var e=O.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},O.trim=function(t){return null==t?"":(t+"").replace(on,"$1")},r=[],i=function(){return O}.apply(e,r),void 0===i||(t.exports=i);var sn=n.jQuery,ln=n.$;return O.noConflict=function(t){return n.$===O&&(n.$=ln),t&&n.jQuery===O&&(n.jQuery=sn),O},"undefined"===typeof a&&(n.jQuery=n.$=O),O}))},7954:function(t,e,n){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}
/*! 
 * portal-vue © Thorsten Lünborg, 2019 
 * 
 * Version: 2.1.7
 * 
 * LICENCE: MIT 
 * 
 * https://github.com/linusborg/portal-vue
 * 
*/
n(7658);var i=r(n(6369));function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t){return s(t)||l(t)||c()}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var u="undefined"!==typeof window;function h(t){return Array.isArray(t)||"object"===a(t)?Object.freeze(t):t}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,n){var r=n.passengers[0],i="function"===typeof r?r(e):n.passengers;return t.concat(i)}),[])}function f(t,e){return t.map((function(t,e){return[e,t]})).sort((function(t,n){return e(t[1],n[1])||t[0]-n[0]})).map((function(t){return t[1]}))}function p(t,e){return e.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var v={},m={},g={},y=i.extend({data:function(){return{transports:v,targets:m,sources:g,trackInstances:u}},methods:{open:function(t){if(u){var e=t.to,n=t.from,r=t.passengers,a=t.order,o=void 0===a?1/0:a;if(e&&n&&r){var s={to:e,from:n,passengers:h(r),order:o},l=Object.keys(this.transports);-1===l.indexOf(e)&&i.set(this.transports,e,[]);var c=this.$_getTransportIndex(s),d=this.transports[e].slice(0);-1===c?d.push(s):d[c]=s,this.transports[e]=f(d,(function(t,e){return t.order-e.order}))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,r=t.from;if(n&&(r||!1!==e)&&this.transports[n])if(e)this.transports[n]=[];else{var i=this.$_getTransportIndex(t);if(i>=0){var a=this.transports[n].slice(0);a.splice(i,1),this.transports[n]=a}}},registerTarget:function(t,e,n){u&&(this.trackInstances&&!n&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,n){u&&(this.trackInstances&&!n&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,n=t.from;for(var r in this.transports[e])if(this.transports[e][r].from===n)return+r;return-1}}}),b=new y(v),z=1,w=i.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(z++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){b.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){b.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};b.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"===typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:o(t),order:this.order};b.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(n,[this.normalizeOwnChildren(e)]):this.slim?t():t(n,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),M=i.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:b.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){b.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){b.unregisterTarget(e),b.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){b.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return d(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),n=this.children(),r=this.transition||this.tag;return e?n[0]:this.slim&&!r?t():t(r,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},n)}}),A=0,C=["disabled","name","order","slim","slotProps","tag","to"],O=["multiple","transition"],V=i.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(A++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!==typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(b.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=b.targets[e.name];else{var n=e.append;if(n){var r="string"===typeof n?n:"DIV",i=document.createElement(r);t.appendChild(i),t=i}var a=p(this.$props,O);a.slim=this.targetSlim,a.tag=this.targetTag,a.slotProps=this.targetSlotProps,a.name=this.to,this.portalTarget=new M({el:t,parent:this.$parent||this,propsData:a})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=p(this.$props,C);return t(w,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var n=this.$scopedSlots.manual({to:this.to});return Array.isArray(n)&&(n=n[0]),n||t()}});function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"Portal",w),t.component(e.portalTargetName||"PortalTarget",M),t.component(e.MountingPortalName||"MountingPortal",V)}var H={install:S};e.h_=w,e.YC=M,e.Df=b},7146:function(t,e,n){var r,i,a;n(7658),function(o){"use strict";i=[n(7387)],r=o,a="function"===typeof r?r.apply(e,i):r,void 0===a||(t.exports=a)}((function(t){"use strict";var e=window.Slick||{};e=function(){var e=0;function n(n,r){var i,a=this;a.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:t(n),appendDots:t(n),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,n){return t('<button type="button" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},a.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},t.extend(a,a.initials),a.activeBreakpoint=null,a.animType=null,a.animProp=null,a.breakpoints=[],a.breakpointSettings=[],a.cssTransitions=!1,a.focussed=!1,a.interrupted=!1,a.hidden="hidden",a.paused=!0,a.positionProp=null,a.respondTo=null,a.rowCount=1,a.shouldClick=!0,a.$slider=t(n),a.$slidesCache=null,a.transformType=null,a.transitionType=null,a.visibilityChange="visibilitychange",a.windowWidth=0,a.windowTimer=null,i=t(n).data("slick")||{},a.options=t.extend({},a.defaults,r,i),a.currentSlide=a.options.initialSlide,a.originalSettings=a.options,"undefined"!==typeof document.mozHidden?(a.hidden="mozHidden",a.visibilityChange="mozvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(a.hidden="webkitHidden",a.visibilityChange="webkitvisibilitychange"),a.autoPlay=t.proxy(a.autoPlay,a),a.autoPlayClear=t.proxy(a.autoPlayClear,a),a.autoPlayIterator=t.proxy(a.autoPlayIterator,a),a.changeSlide=t.proxy(a.changeSlide,a),a.clickHandler=t.proxy(a.clickHandler,a),a.selectHandler=t.proxy(a.selectHandler,a),a.setPosition=t.proxy(a.setPosition,a),a.swipeHandler=t.proxy(a.swipeHandler,a),a.dragHandler=t.proxy(a.dragHandler,a),a.keyHandler=t.proxy(a.keyHandler,a),a.instanceUid=e++,a.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,a.registerBreakpoints(),a.init(!0)}return n}(),e.prototype.activateADA=function(){var t=this;t.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,n,r){var i=this;if("boolean"===typeof n)r=n,n=null;else if(n<0||n>=i.slideCount)return!1;i.unload(),"number"===typeof n?0===n&&0===i.$slides.length?t(e).appendTo(i.$slideTrack):r?t(e).insertBefore(i.$slides.eq(n)):t(e).insertAfter(i.$slides.eq(n)):!0===r?t(e).prependTo(i.$slideTrack):t(e).appendTo(i.$slideTrack),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slides.each((function(e,n){t(n).attr("data-slick-index",e)})),i.$slidesCache=i.$slides,i.reinit()},e.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},e.prototype.animateSlide=function(e,n){var r={},i=this;i.animateHeight(),!0===i.options.rtl&&!1===i.options.vertical&&(e=-e),!1===i.transformsEnabled?!1===i.options.vertical?i.$slideTrack.animate({left:e},i.options.speed,i.options.easing,n):i.$slideTrack.animate({top:e},i.options.speed,i.options.easing,n):!1===i.cssTransitions?(!0===i.options.rtl&&(i.currentLeft=-i.currentLeft),t({animStart:i.currentLeft}).animate({animStart:e},{duration:i.options.speed,easing:i.options.easing,step:function(t){t=Math.ceil(t),!1===i.options.vertical?(r[i.animType]="translate("+t+"px, 0px)",i.$slideTrack.css(r)):(r[i.animType]="translate(0px,"+t+"px)",i.$slideTrack.css(r))},complete:function(){n&&n.call()}})):(i.applyTransition(),e=Math.ceil(e),!1===i.options.vertical?r[i.animType]="translate3d("+e+"px, 0px, 0px)":r[i.animType]="translate3d(0px,"+e+"px, 0px)",i.$slideTrack.css(r),n&&setTimeout((function(){i.disableTransition(),n.call()}),i.options.speed))},e.prototype.getNavTarget=function(){var e=this,n=e.options.asNavFor;return n&&null!==n&&(n=t(n).not(e.$slider)),n},e.prototype.asNavFor=function(e){var n=this,r=n.getNavTarget();null!==r&&"object"===typeof r&&r.each((function(){var n=t(this).slick("getSlick");n.unslicked||n.slideHandler(e,!0)}))},e.prototype.applyTransition=function(t){var e=this,n={};!1===e.options.fade?n[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:n[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(n):e.$slides.eq(t).css(n)},e.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(!1===t.options.infinite&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1===0&&(t.direction=1))),t.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=t(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=t(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,n,r=this;if(!0===r.options.dots&&r.slideCount>r.options.slidesToShow){for(r.$slider.addClass("slick-dotted"),n=t("<ul />").addClass(r.options.dotsClass),e=0;e<=r.getDotCount();e+=1)n.append(t("<li />").append(r.options.customPaging.call(this,r,e)));r.$dots=n.appendTo(r.options.appendDots),r.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each((function(e,n){t(n).attr("data-slick-index",e).data("originalStyling",t(n).attr("style")||"")})),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?t('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),t("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"===typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var t,e,n,r,i,a,o,s=this;if(r=document.createDocumentFragment(),a=s.$slider.children(),s.options.rows>0){for(o=s.options.slidesPerRow*s.options.rows,i=Math.ceil(a.length/o),t=0;t<i;t++){var l=document.createElement("div");for(e=0;e<s.options.rows;e++){var c=document.createElement("div");for(n=0;n<s.options.slidesPerRow;n++){var u=t*o+(e*s.options.slidesPerRow+n);a.get(u)&&c.appendChild(a.get(u))}l.appendChild(c)}r.appendChild(l)}s.$slider.empty().append(r),s.$slider.children().children().children().css({width:100/s.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,n){var r,i,a,o=this,s=!1,l=o.$slider.width(),c=window.innerWidth||t(window).width();if("window"===o.respondTo?a=c:"slider"===o.respondTo?a=l:"min"===o.respondTo&&(a=Math.min(c,l)),o.options.responsive&&o.options.responsive.length&&null!==o.options.responsive){for(r in i=null,o.breakpoints)o.breakpoints.hasOwnProperty(r)&&(!1===o.originalSettings.mobileFirst?a<o.breakpoints[r]&&(i=o.breakpoints[r]):a>o.breakpoints[r]&&(i=o.breakpoints[r]));null!==i?null!==o.activeBreakpoint?(i!==o.activeBreakpoint||n)&&(o.activeBreakpoint=i,"unslick"===o.breakpointSettings[i]?o.unslick(i):(o.options=t.extend({},o.originalSettings,o.breakpointSettings[i]),!0===e&&(o.currentSlide=o.options.initialSlide),o.refresh(e)),s=i):(o.activeBreakpoint=i,"unslick"===o.breakpointSettings[i]?o.unslick(i):(o.options=t.extend({},o.originalSettings,o.breakpointSettings[i]),!0===e&&(o.currentSlide=o.options.initialSlide),o.refresh(e)),s=i):null!==o.activeBreakpoint&&(o.activeBreakpoint=null,o.options=o.originalSettings,!0===e&&(o.currentSlide=o.options.initialSlide),o.refresh(e),s=i),e||!1===s||o.$slider.trigger("breakpoint",[o,s])}},e.prototype.changeSlide=function(e,n){var r,i,a,o=this,s=t(e.currentTarget);switch(s.is("a")&&e.preventDefault(),s.is("li")||(s=s.closest("li")),a=o.slideCount%o.options.slidesToScroll!==0,r=a?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,e.data.message){case"previous":i=0===r?o.options.slidesToScroll:o.options.slidesToShow-r,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-i,!1,n);break;case"next":i=0===r?o.options.slidesToScroll:r,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+i,!1,n);break;case"index":var l=0===e.data.index?0:e.data.index||s.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(l),!1,n),s.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(t){var e,n,r=this;if(e=r.getNavigableIndexes(),n=0,t>e[e.length-1])t=e[e.length-1];else for(var i in e){if(t<e[i]){t=n;break}n=e[i]}return t},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(t("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",t.proxy(e.interrupt,e,!0)).off("mouseleave.slick",t.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),t(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().off("click.slick",e.selectHandler),t(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),t(window).off("resize.slick.slick-"+e.instanceUid,e.resize),t("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),t(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var t,e=this;e.options.rows>0&&(t=e.$slides.children().children(),t.removeAttr("style"),e.$slider.empty().append(t))},e.prototype.clickHandler=function(t){var e=this;!1===e.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},e.prototype.destroy=function(e){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),t(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){t(this).attr("style",t(this).data("originalStyling"))})),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,e||n.$slider.trigger("destroy",[n])},e.prototype.disableTransition=function(t){var e=this,n={};n[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(n):e.$slides.eq(t).css(n)},e.prototype.fadeSlide=function(t,e){var n=this;!1===n.cssTransitions?(n.$slides.eq(t).css({zIndex:n.options.zIndex}),n.$slides.eq(t).animate({opacity:1},n.options.speed,n.options.easing,e)):(n.applyTransition(t),n.$slides.eq(t).css({opacity:1,zIndex:n.options.zIndex}),e&&setTimeout((function(){n.disableTransition(t),e.call()}),n.options.speed))},e.prototype.fadeSlideOut=function(t){var e=this;!1===e.cssTransitions?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",(function(n){n.stopImmediatePropagation();var r=t(this);setTimeout((function(){e.options.pauseOnFocus&&(e.focussed=r.is(":focus"),e.autoPlay())}),0)}))},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var t=this;return t.currentSlide},e.prototype.getDotCount=function(){var t=this,e=0,n=0,r=0;if(!0===t.options.infinite)if(t.slideCount<=t.options.slidesToShow)++r;else while(e<t.slideCount)++r,e=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(!0===t.options.centerMode)r=t.slideCount;else if(t.options.asNavFor)while(e<t.slideCount)++r,e=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else r=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return r-1},e.prototype.getLeft=function(t){var e,n,r,i,a=this,o=0;return a.slideOffset=0,n=a.$slides.first().outerHeight(!0),!0===a.options.infinite?(a.slideCount>a.options.slidesToShow&&(a.slideOffset=a.slideWidth*a.options.slidesToShow*-1,i=-1,!0===a.options.vertical&&!0===a.options.centerMode&&(2===a.options.slidesToShow?i=-1.5:1===a.options.slidesToShow&&(i=-2)),o=n*a.options.slidesToShow*i),a.slideCount%a.options.slidesToScroll!==0&&t+a.options.slidesToScroll>a.slideCount&&a.slideCount>a.options.slidesToShow&&(t>a.slideCount?(a.slideOffset=(a.options.slidesToShow-(t-a.slideCount))*a.slideWidth*-1,o=(a.options.slidesToShow-(t-a.slideCount))*n*-1):(a.slideOffset=a.slideCount%a.options.slidesToScroll*a.slideWidth*-1,o=a.slideCount%a.options.slidesToScroll*n*-1))):t+a.options.slidesToShow>a.slideCount&&(a.slideOffset=(t+a.options.slidesToShow-a.slideCount)*a.slideWidth,o=(t+a.options.slidesToShow-a.slideCount)*n),a.slideCount<=a.options.slidesToShow&&(a.slideOffset=0,o=0),!0===a.options.centerMode&&a.slideCount<=a.options.slidesToShow?a.slideOffset=a.slideWidth*Math.floor(a.options.slidesToShow)/2-a.slideWidth*a.slideCount/2:!0===a.options.centerMode&&!0===a.options.infinite?a.slideOffset+=a.slideWidth*Math.floor(a.options.slidesToShow/2)-a.slideWidth:!0===a.options.centerMode&&(a.slideOffset=0,a.slideOffset+=a.slideWidth*Math.floor(a.options.slidesToShow/2)),e=!1===a.options.vertical?t*a.slideWidth*-1+a.slideOffset:t*n*-1+o,!0===a.options.variableWidth&&(r=a.slideCount<=a.options.slidesToShow||!1===a.options.infinite?a.$slideTrack.children(".slick-slide").eq(t):a.$slideTrack.children(".slick-slide").eq(t+a.options.slidesToShow),e=!0===a.options.rtl?r[0]?-1*(a.$slideTrack.width()-r[0].offsetLeft-r.width()):0:r[0]?-1*r[0].offsetLeft:0,!0===a.options.centerMode&&(r=a.slideCount<=a.options.slidesToShow||!1===a.options.infinite?a.$slideTrack.children(".slick-slide").eq(t):a.$slideTrack.children(".slick-slide").eq(t+a.options.slidesToShow+1),e=!0===a.options.rtl?r[0]?-1*(a.$slideTrack.width()-r[0].offsetLeft-r.width()):0:r[0]?-1*r[0].offsetLeft:0,e+=(a.$list.width()-r.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(t){var e=this;return e.options[t]},e.prototype.getNavigableIndexes=function(){var t,e=this,n=0,r=0,i=[];!1===e.options.infinite?t=e.slideCount:(n=-1*e.options.slidesToScroll,r=-1*e.options.slidesToScroll,t=2*e.slideCount);while(n<t)i.push(n),n=r+e.options.slidesToScroll,r+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return i},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,n,r,i=this;return r=!0===i.options.centerMode?i.slideWidth*Math.floor(i.options.slidesToShow/2):0,!0===i.options.swipeToSlide?(i.$slideTrack.find(".slick-slide").each((function(e,a){if(a.offsetLeft-r+t(a).outerWidth()/2>-1*i.swipeLeft)return n=a,!1})),e=Math.abs(t(n).attr("data-slick-index")-i.currentSlide)||1,e):i.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(t,e){var n=this;n.changeSlide({data:{message:"index",index:parseInt(t)}},e)},e.prototype.init=function(e){var n=this;t(n.$slider).hasClass("slick-initialized")||(t(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),e&&n.$slider.trigger("init",[n]),!0===n.options.accessibility&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},e.prototype.initADA=function(){var e=this,n=Math.ceil(e.slideCount/e.options.slidesToShow),r=e.getNavigableIndexes().filter((function(t){return t>=0&&t<e.slideCount}));e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(n){var i=r.indexOf(n);if(t(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+n,tabindex:-1}),-1!==i){var a="slick-slide-control"+e.instanceUid+i;t("#"+a).length&&t(this).attr({"aria-describedby":a})}})),e.$dots.attr("role","tablist").find("li").each((function(i){var a=r[i];t(this).attr({role:"presentation"}),t(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+i,"aria-controls":"slick-slide"+e.instanceUid+a,"aria-label":i+1+" of "+n,"aria-selected":null,tabindex:"-1"})})).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var i=e.currentSlide,a=i+e.options.slidesToShow;i<a;i++)e.options.focusOnChange?e.$slides.eq(i).attr({tabindex:"0"}):e.$slides.eq(i).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&(t("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&e.slideCount>e.options.slidesToShow&&t("li",e.$dots).on("mouseenter.slick",t.proxy(e.interrupt,e,!0)).on("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",t.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),t(document).on(e.visibilityChange,t.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),t(window).on("orientationchange.slick.slick-"+e.instanceUid,t.proxy(e.orientationChange,e)),t(window).on("resize.slick.slick-"+e.instanceUid,t.proxy(e.resize,e)),t("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),t(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),t(e.setPosition)},e.prototype.initUI=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},e.prototype.keyHandler=function(t){var e=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){var e,n,r,i,a=this;function o(e){t("img[data-lazy]",e).each((function(){var e=t(this),n=t(this).attr("data-lazy"),r=t(this).attr("data-srcset"),i=t(this).attr("data-sizes")||a.$slider.attr("data-sizes"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,(function(){r&&(e.attr("srcset",r),i&&e.attr("sizes",i)),e.attr("src",n).animate({opacity:1},200,(function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),a.$slider.trigger("lazyLoaded",[a,e,n])}))},o.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,e,n])},o.src=n}))}if(!0===a.options.centerMode?!0===a.options.infinite?(r=a.currentSlide+(a.options.slidesToShow/2+1),i=r+a.options.slidesToShow+2):(r=Math.max(0,a.currentSlide-(a.options.slidesToShow/2+1)),i=a.options.slidesToShow/2+1+2+a.currentSlide):(r=a.options.infinite?a.options.slidesToShow+a.currentSlide:a.currentSlide,i=Math.ceil(r+a.options.slidesToShow),!0===a.options.fade&&(r>0&&r--,i<=a.slideCount&&i++)),e=a.$slider.find(".slick-slide").slice(r,i),"anticipated"===a.options.lazyLoad)for(var s=r-1,l=i,c=a.$slider.find(".slick-slide"),u=0;u<a.options.slidesToScroll;u++)s<0&&(s=a.slideCount-1),e=e.add(c.eq(s)),e=e.add(c.eq(l)),s--,l++;o(e),a.slideCount<=a.options.slidesToShow?(n=a.$slider.find(".slick-slide"),o(n)):a.currentSlide>=a.slideCount-a.options.slidesToShow?(n=a.$slider.find(".slick-cloned").slice(0,a.options.slidesToShow),o(n)):0===a.currentSlide&&(n=a.$slider.find(".slick-cloned").slice(-1*a.options.slidesToShow),o(n))},e.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var t=this;t.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},e.prototype.postSlide=function(e){var n=this;if(!n.unslicked&&(n.$slider.trigger("afterChange",[n,e]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),!0===n.options.accessibility&&(n.initADA(),n.options.focusOnChange))){var r=t(n.$slides.get(n.currentSlide));r.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var t=this;t.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var n,r,i,a,o,s=this,l=t("img[data-lazy]",s.$slider);l.length?(n=l.first(),r=n.attr("data-lazy"),i=n.attr("data-srcset"),a=n.attr("data-sizes")||s.$slider.attr("data-sizes"),o=document.createElement("img"),o.onload=function(){i&&(n.attr("srcset",i),a&&n.attr("sizes",a)),n.attr("src",r).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===s.options.adaptiveHeight&&s.setPosition(),s.$slider.trigger("lazyLoaded",[s,n,r]),s.progressiveLazyLoad()},o.onerror=function(){e<3?setTimeout((function(){s.progressiveLazyLoad(e+1)}),500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,n,r]),s.progressiveLazyLoad())},o.src=r):s.$slider.trigger("allImagesLoaded",[s])},e.prototype.refresh=function(e){var n,r,i=this;r=i.slideCount-i.options.slidesToShow,!i.options.infinite&&i.currentSlide>r&&(i.currentSlide=r),i.slideCount<=i.options.slidesToShow&&(i.currentSlide=0),n=i.currentSlide,i.destroy(!0),t.extend(i,i.initials,{currentSlide:n}),i.init(),e||i.changeSlide({data:{message:"index",index:n}},!1)},e.prototype.registerBreakpoints=function(){var e,n,r,i=this,a=i.options.responsive||null;if("array"===t.type(a)&&a.length){for(e in i.respondTo=i.options.respondTo||"window",a)if(r=i.breakpoints.length-1,a.hasOwnProperty(e)){n=a[e].breakpoint;while(r>=0)i.breakpoints[r]&&i.breakpoints[r]===n&&i.breakpoints.splice(r,1),r--;i.breakpoints.push(n),i.breakpointSettings[n]=a[e].settings}i.breakpoints.sort((function(t,e){return i.options.mobileFirst?t-e:e-t}))}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"===typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;t(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout((function(){e.windowWidth=t(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()}),50))},e.prototype.removeSlide=e.prototype.slickRemove=function(t,e,n){var r=this;if("boolean"===typeof t?(e=t,t=!0===e?0:r.slideCount-1):t=!0===e?--t:t,r.slideCount<1||t<0||t>r.slideCount-1)return!1;r.unload(),!0===n?r.$slideTrack.children().remove():r.$slideTrack.children(this.options.slide).eq(t).remove(),r.$slides=r.$slideTrack.children(this.options.slide),r.$slideTrack.children(this.options.slide).detach(),r.$slideTrack.append(r.$slides),r.$slidesCache=r.$slides,r.reinit()},e.prototype.setCSS=function(t){var e,n,r=this,i={};!0===r.options.rtl&&(t=-t),e="left"==r.positionProp?Math.ceil(t)+"px":"0px",n="top"==r.positionProp?Math.ceil(t)+"px":"0px",i[r.positionProp]=t,!1===r.transformsEnabled?r.$slideTrack.css(i):(i={},!1===r.cssTransitions?(i[r.animType]="translate("+e+", "+n+")",r.$slideTrack.css(i)):(i[r.animType]="translate3d("+e+", "+n+", 0px)",r.$slideTrack.css(i)))},e.prototype.setDimensions=function(){var t=this;!1===t.options.vertical?!0===t.options.centerMode&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),!0===t.options.centerMode&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),!1===t.options.vertical&&!1===t.options.variableWidth?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):!0===t.options.variableWidth?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();!1===t.options.variableWidth&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},e.prototype.setFade=function(){var e,n=this;n.$slides.each((function(r,i){e=n.slideWidth*r*-1,!0===n.options.rtl?t(i).css({position:"relative",right:e,top:0,zIndex:n.options.zIndex-2,opacity:0}):t(i).css({position:"relative",left:e,top:0,zIndex:n.options.zIndex-2,opacity:0})})),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,n,r,i,a,o=this,s=!1;if("object"===t.type(arguments[0])?(r=arguments[0],s=arguments[1],a="multiple"):"string"===t.type(arguments[0])&&(r=arguments[0],i=arguments[1],s=arguments[2],"responsive"===arguments[0]&&"array"===t.type(arguments[1])?a="responsive":"undefined"!==typeof arguments[1]&&(a="single")),"single"===a)o.options[r]=i;else if("multiple"===a)t.each(r,(function(t,e){o.options[t]=e}));else if("responsive"===a)for(n in i)if("array"!==t.type(o.options.responsive))o.options.responsive=[i[n]];else{e=o.options.responsive.length-1;while(e>=0)o.options.responsive[e].breakpoint===i[n].breakpoint&&o.options.responsive.splice(e,1),e--;o.options.responsive.push(i[n])}s&&(o.unload(),o.reinit())},e.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),!1===t.options.fade?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},e.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=!0===t.options.vertical?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===t.options.useCSS&&(t.cssTransitions=!0),t.options.fade&&("number"===typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&!1!==t.animType&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&!1!==t.animType},e.prototype.setSlideClasses=function(t){var e,n,r,i,a=this;if(n=a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),a.$slides.eq(t).addClass("slick-current"),!0===a.options.centerMode){var o=a.options.slidesToShow%2===0?1:0;e=Math.floor(a.options.slidesToShow/2),!0===a.options.infinite&&(t>=e&&t<=a.slideCount-1-e?a.$slides.slice(t-e+o,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(r=a.options.slidesToShow+t,n.slice(r-e+1+o,r+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?n.eq(n.length-1-a.options.slidesToShow).addClass("slick-center"):t===a.slideCount-1&&n.eq(a.options.slidesToShow).addClass("slick-center")),a.$slides.eq(t).addClass("slick-center")}else t>=0&&t<=a.slideCount-a.options.slidesToShow?a.$slides.slice(t,t+a.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=a.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(i=a.slideCount%a.options.slidesToShow,r=!0===a.options.infinite?a.options.slidesToShow+t:t,a.options.slidesToShow==a.options.slidesToScroll&&a.slideCount-t<a.options.slidesToShow?n.slice(r-(a.options.slidesToShow-i),r+i).addClass("slick-active").attr("aria-hidden","false"):n.slice(r,r+a.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==a.options.lazyLoad&&"anticipated"!==a.options.lazyLoad||a.lazyLoad()},e.prototype.setupInfinite=function(){var e,n,r,i=this;if(!0===i.options.fade&&(i.options.centerMode=!1),!0===i.options.infinite&&!1===i.options.fade&&(n=null,i.slideCount>i.options.slidesToShow)){for(r=!0===i.options.centerMode?i.options.slidesToShow+1:i.options.slidesToShow,e=i.slideCount;e>i.slideCount-r;e-=1)n=e-1,t(i.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");for(e=0;e<r+i.slideCount;e+=1)n=e,t(i.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");i.$slideTrack.find(".slick-cloned").find("[id]").each((function(){t(this).attr("id","")}))}},e.prototype.interrupt=function(t){var e=this;t||e.autoPlay(),e.interrupted=t},e.prototype.selectHandler=function(e){var n=this,r=t(e.target).is(".slick-slide")?t(e.target):t(e.target).parents(".slick-slide"),i=parseInt(r.attr("data-slick-index"));i||(i=0),n.slideCount<=n.options.slidesToShow?n.slideHandler(i,!1,!0):n.slideHandler(i)},e.prototype.slideHandler=function(t,e,n){var r,i,a,o,s,l=null,c=this;if(e=e||!1,(!0!==c.animating||!0!==c.options.waitForAnimate)&&(!0!==c.options.fade||c.currentSlide!==t))if(!1===e&&c.asNavFor(t),r=t,l=c.getLeft(r),o=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?o:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(t<0||t>c.getDotCount()*c.options.slidesToScroll))!1===c.options.fade&&(r=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(o,(function(){c.postSlide(r)})):c.postSlide(r));else if(!1===c.options.infinite&&!0===c.options.centerMode&&(t<0||t>c.slideCount-c.options.slidesToScroll))!1===c.options.fade&&(r=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(o,(function(){c.postSlide(r)})):c.postSlide(r));else{if(c.options.autoplay&&clearInterval(c.autoPlayTimer),i=r<0?c.slideCount%c.options.slidesToScroll!==0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+r:r>=c.slideCount?c.slideCount%c.options.slidesToScroll!==0?0:r-c.slideCount:r,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,i]),a=c.currentSlide,c.currentSlide=i,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(s=c.getNavTarget(),s=s.slick("getSlick"),s.slideCount<=s.options.slidesToShow&&s.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),!0===c.options.fade)return!0!==n?(c.fadeSlideOut(a),c.fadeSlide(i,(function(){c.postSlide(i)}))):c.postSlide(i),void c.animateHeight();!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(l,(function(){c.postSlide(i)})):c.postSlide(i)}},e.prototype.startLoad=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var t,e,n,r,i=this;return t=i.touchObject.startX-i.touchObject.curX,e=i.touchObject.startY-i.touchObject.curY,n=Math.atan2(e,t),r=Math.round(180*n/Math.PI),r<0&&(r=360-Math.abs(r)),r<=45&&r>=0||r<=360&&r>=315?!1===i.options.rtl?"left":"right":r>=135&&r<=225?!1===i.options.rtl?"right":"left":!0===i.options.verticalSwiping?r>=35&&r<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(t){var e,n,r=this;if(r.dragging=!1,r.swiping=!1,r.scrolling)return r.scrolling=!1,!1;if(r.interrupted=!1,r.shouldClick=!(r.touchObject.swipeLength>10),void 0===r.touchObject.curX)return!1;if(!0===r.touchObject.edgeHit&&r.$slider.trigger("edge",[r,r.swipeDirection()]),r.touchObject.swipeLength>=r.touchObject.minSwipe){switch(n=r.swipeDirection(),n){case"left":case"down":e=r.options.swipeToSlide?r.checkNavigable(r.currentSlide+r.getSlideCount()):r.currentSlide+r.getSlideCount(),r.currentDirection=0;break;case"right":case"up":e=r.options.swipeToSlide?r.checkNavigable(r.currentSlide-r.getSlideCount()):r.currentSlide-r.getSlideCount(),r.currentDirection=1;break;default:}"vertical"!=n&&(r.slideHandler(e),r.touchObject={},r.$slider.trigger("swipe",[r,n]))}else r.touchObject.startX!==r.touchObject.curX&&(r.slideHandler(r.currentSlide),r.touchObject={})},e.prototype.swipeHandler=function(t){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe)&&(!1!==e.options.draggable||-1===t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t);break}},e.prototype.swipeMove=function(t){var e,n,r,i,a,o,s=this;return a=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!s.dragging||s.scrolling||a&&1!==a.length)&&(e=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==a?a[0].pageX:t.clientX,s.touchObject.curY=void 0!==a?a[0].pageY:t.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),o=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2))),!s.options.verticalSwiping&&!s.swiping&&o>4?(s.scrolling=!0,!1):(!0===s.options.verticalSwiping&&(s.touchObject.swipeLength=o),n=s.swipeDirection(),void 0!==t.originalEvent&&s.touchObject.swipeLength>4&&(s.swiping=!0,t.preventDefault()),i=(!1===s.options.rtl?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),!0===s.options.verticalSwiping&&(i=s.touchObject.curY>s.touchObject.startY?1:-1),r=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,!1===s.options.infinite&&(0===s.currentSlide&&"right"===n||s.currentSlide>=s.getDotCount()&&"left"===n)&&(r=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),!1===s.options.vertical?s.swipeLeft=e+r*i:s.swipeLeft=e+r*(s.$list.height()/s.listWidth)*i,!0===s.options.verticalSwiping&&(s.swipeLeft=e+r*i),!0!==s.options.fade&&!1!==s.options.touchMove&&(!0===s.animating?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))))},e.prototype.swipeStart=function(t){var e,n=this;if(n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow)return n.touchObject={},!1;void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==e?e.pageX:t.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==e?e.pageY:t.clientY,n.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},e.prototype.unload=function(){var e=this;t(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(t){var e=this;e.$slider.trigger("unslick",[e,t]),e.destroy()},e.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(t.currentSlide>=t.slideCount-t.options.slidesToShow&&!1===t.options.centerMode||t.currentSlide>=t.slideCount-1&&!0===t.options.centerMode)&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").end(),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},t.fn.slick=function(){var t,n,r=this,i=arguments[0],a=Array.prototype.slice.call(arguments,1),o=r.length;for(t=0;t<o;t++)if("object"==typeof i||"undefined"==typeof i?r[t].slick=new e(r[t],i):n=r[t].slick[i].apply(r[t].slick,a),"undefined"!=typeof n)return n;return r}}))},4807:function(t,e,n){"use strict";n.d(e,{b:function(){return s}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function a(t,e){return e?e.toUpperCase():""}function o(t){for(var e,n={},r=0,o=t.split(i.styleList);r<o.length;r++){var s=o[r].split(i.styleProp),l=s[0],c=s[1];(l=l.trim())&&("string"==typeof c&&(c=c.trim()),n[(e=l,e.replace(i.kebab,a))]=c)}return n}function s(){for(var t,e,n={},i=arguments.length;i--;)for(var a=0,s=Object.keys(arguments[i]);a<s.length;a++)switch(t=s[a]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var l=void 0;l=Array.isArray(arguments[i].style)?arguments[i].style:[arguments[i].style];for(var c=0;c<l.length;c++){var u=l[c];"string"==typeof u&&(l[c]=o(u))}arguments[i].style=l}n[t]=n[t].concat(arguments[i][t]);break;case"staticClass":if(!arguments[i][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":n[t]||(n[t]={});for(var h=0,d=Object.keys(arguments[i][t]||{});h<d.length;h++)e=d[h],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[i][t][e]):n[t][e]=arguments[i][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=r({},arguments[i][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[i][t])}return n}},2631:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Me}});n(7658),n(541);function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,a=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,s=function(t){return encodeURIComponent(t).replace(i,a).replace(o,",")};function l(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(s){r={}}for(var a in e){var o=e[a];r[a]=Array.isArray(o)?o.map(u):u(o)}return r}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=l(n.shift()),i=n.length>0?l(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return s(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(s(e)):r.push(s(e)+"="+s(t)))})),r.join("&")}return s(e)+"="+s(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,a=e.query||{};try{a=v(a)}catch(s){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:a,params:e.params||{},fullPath:y(e,i),matched:t?g(t):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=v(t[n]);return e}return t}var m=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var a=e||d;return(n||"/")+a(r)+i}function b(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&z(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&z(t.query,e.query)&&z(t.params,e.params))))}function z(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var a=t[n],o=r[i];if(o!==n)return!1;var s=e[n];return null==a||null==s?a===s:"object"===typeof a&&"object"===typeof s?z(a,s):String(a)===String(s)}))}function w(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&M(t.query,e.query)}function M(t,e){for(var n in e)if(!(n in t))return!1;return!0}function A(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],a=n.enteredCbs[r];if(i&&a){delete n.enteredCbs[r];for(var o=0;o<a.length;o++)i._isBeingDestroyed||a[o](i)}}}}var C={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,a=e.parent,o=e.data;o.routerView=!0;var s=a.$createElement,l=n.name,c=a.$route,u=a._routerViewCache||(a._routerViewCache={}),h=0,d=!1;while(a&&a._routerRoot!==a){var f=a.$vnode?a.$vnode.data:{};f.routerView&&h++,f.keepAlive&&a._directInactive&&a._inactive&&(d=!0),a=a.$parent}if(o.routerViewDepth=h,d){var p=u[l],v=p&&p.component;return v?(p.configProps&&O(v,o,p.route,p.configProps),s(v,o,i)):s()}var m=c.matched[h],g=m&&m.components[l];if(!m||!g)return u[l]=null,s();u[l]={component:g},o.registerRouteInstance=function(t,e){var n=m.instances[l];(e&&n!==t||!e&&n===t)&&(m.instances[l]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){m.instances[l]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[l]&&(m.instances[l]=t.componentInstance),A(c)};var y=m.props&&m.props[l];return y&&(r(u[l],{route:c,configProps:y}),O(g,o,c,y)),s(g,o,i)}};function O(t,e,n,i){var a=e.props=V(n,i);if(a){a=e.props=r({},a);var o=e.attrs=e.attrs||{};for(var s in a)t.props&&s in t.props||(o[s]=a[s],delete a[s])}}function V(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function S(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),o=0;o<a.length;o++){var s=a[o];".."===s?i.pop():"."!==s&&i.push(s)}return""!==i[0]&&i.unshift(""),i.join("/")}function H(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function T(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var I=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},k=Y,_=x,L=D,E=N,B=X,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function x(t,e){var n,r=[],i=0,a=0,o="",s=e&&e.delimiter||"/";while(null!=(n=P.exec(t))){var l=n[0],c=n[1],u=n.index;if(o+=t.slice(a,u),a=u+l.length,c)o+=c[1];else{var h=t[a],d=n[2],f=n[3],p=n[4],v=n[5],m=n[6],g=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===m||"*"===m,z="?"===m||"*"===m,w=n[2]||s,M=p||v;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:z,repeat:b,partial:y,asterisk:!!g,pattern:M?R(M):g?".*":"[^"+$(w)+"]+?"})}}return a<t.length&&(o+=t.substr(a)),o&&r.push(o),r}function D(t,e){return N(x(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function N(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",q(e)));return function(e,r){for(var i="",a=e||{},o=r||{},s=o.pretty?F:encodeURIComponent,l=0;l<t.length;l++){var c=t[l];if("string"!==typeof c){var u,h=a[c.name];if(null==h){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(I(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=s(h[d]),!n[l].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===d?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?j(h):s(h),!n[l].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');i+=c.prefix+u}}else i+=c}return i}}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function R(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function q(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Y(t[i],e,n).source);var a=new RegExp("(?:"+r.join("|")+")",q(n));return U(a,e)}function K(t,e,n){return X(x(t,n),e,n)}function X(t,e,n){I(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,a="",o=0;o<t.length;o++){var s=t[o];if("string"===typeof s)a+=$(s);else{var l=$(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+l+c+")*"),c=s.optional?s.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")",a+=c}}var u=$(n.delimiter||"/"),h=a.slice(-u.length)===u;return r||(a=(h?a.slice(0,-u.length):a)+"(?:"+u+"(?=$))?"),a+=i?"$":r&&h?"":"(?="+u+"|$)",U(new RegExp("^"+a,q(n)),e)}function Y(t,e,n){return I(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):I(t)?G(t,e,n):K(t,e,n)}k.parse=_,k.compile=L,k.tokensToFunction=E,k.tokensToRegExp=B;var J=Object.create(null);function Q(t,e,n){e=e||{};try{var r=J[t]||(J[t]=k.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var a="string"===typeof t?{path:t}:t;if(a._normalized)return a;if(a.name){a=r({},t);var o=a.params;return o&&"object"===typeof o&&(a.params=r({},o)),a}if(!a.path&&a.params&&e){a=r({},a),a._normalized=!0;var s=r(r({},e.params),a.params);if(e.name)a.name=e.name,a.params=s;else if(e.matched.length){var l=e.matched[e.matched.length-1].path;a.path=Q(l,s,"path "+e.path)}else 0;return a}var u=H(a.path||""),h=e&&e.path||"/",d=u.path?S(u.path,h,n||a.append):h,f=c(u.query,a.query,i&&i.options.parseQuery),p=a.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,a=n.resolve(this.to,i,this.append),o=a.location,s=a.route,l=a.href,c={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,v=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,g=s.redirectedFrom?p(null,Z(s.redirectedFrom),null,n):s;c[m]=b(i,g,this.exactPath),c[v]=this.exact||this.exactPath?c[m]:w(i,g);var y=c[m]?this.ariaCurrentValue:null,z=function(t){at(t)&&(e.replace?n.replace(o,rt):n.push(o,rt))},M={click:at};Array.isArray(this.event)?this.event.forEach((function(t){M[t]=z})):M[this.event]=z;var A={class:c},C=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:s,navigate:z,isActive:c[v],isExactActive:c[m]});if(C){if(1===C.length)return C[0];if(C.length>1||!C.length)return 0===C.length?t():t("span",{},C)}if("a"===this.tag)A.on=M,A.attrs={href:l,"aria-current":y};else{var O=ot(this.$slots.default);if(O){O.isStatic=!1;var V=O.data=r({},O.data);for(var S in V.on=V.on||{},V.on){var H=V.on[S];S in M&&(V.on[S]=Array.isArray(H)?H:[H])}for(var T in M)T in V.on?V.on[T].push(M[T]):V.on[T]=z;var I=O.data.attrs=r({},O.data.attrs);I.href=l,I["aria-current"]=y}else A.on=M}return t(this.tag,A,this.$slots.default)}};function at(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function st(t){if(!st.installed||tt!==t){st.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",C),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var lt="undefined"!==typeof window;function ct(t,e,n,r,i){var a=e||[],o=n||Object.create(null),s=r||Object.create(null);t.forEach((function(t){ut(a,o,s,t,i)}));for(var l=0,c=a.length;l<c;l++)"*"===a[l]&&(a.push(a.splice(l,1)[0]),c--,l--);return{pathList:a,pathMap:o,nameMap:s}}function ut(t,e,n,r,i,a){var o=r.path,s=r.name;var l=r.pathToRegexpOptions||{},c=dt(o,i,l.strict);"boolean"===typeof r.caseSensitive&&(l.sensitive=r.caseSensitive);var u={path:c,regex:ht(c,l),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:s,parent:i,matchAs:a,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=a?T(a+"/"+r.path):void 0;ut(t,e,n,r,u,i)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ut(t,e,n,p,i,u.path||"/")}s&&(n[s]||(n[s]=u))}function ht(t,e){var n=k(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:T(e.path+"/"+t)}function ft(t,e){var n=ct(t),r=n.pathList,i=n.pathMap,a=n.nameMap;function o(t){ct(t,r,i,a)}function s(t,e){var n="object"!==typeof t?a[t]:void 0;ct([e||t],r,i,a,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,a,n)}function l(){return r.map((function(t){return i[t]}))}function c(t,n,o){var s=Z(t,n,!1,e),l=s.name;if(l){var c=a[l];if(!c)return d(null,s);var u=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in s.params)&&u.indexOf(h)>-1&&(s.params[h]=n.params[h]);return s.path=Q(c.path,s.params,'named route "'+l+'"'),d(c,s,o)}if(s.path){s.params={};for(var f=0;f<r.length;f++){var p=r[f],v=i[p];if(pt(v.regex,s.path,s.params))return d(v,s,o)}}return d(null,s)}function u(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,s=o.name,l=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,s){a[s];return c({_normalized:!0,name:s,query:u,hash:h,params:f},void 0,n)}if(l){var v=vt(l,t),m=Q(v,f,'redirect route with path "'+v+'"');return c({_normalized:!0,path:m,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Q(n,e.params,'aliased route with path "'+n+'"'),i=c({_normalized:!0,path:r});if(i){var a=i.matched,o=a[a.length-1];return e.params=i.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?u(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:c,addRoute:s,getRoutes:l,addRoutes:o}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,a=r.length;i<a;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?l(r[i]):r[i])}return!0}function vt(t,e){return S(t,e.parent?e.parent.path:"/",!0)}var mt=lt&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var yt=gt();function bt(){return yt}function zt(t){return yt=t}var wt=Object.create(null);function Mt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Ot),function(){window.removeEventListener("popstate",Ot)}}function At(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var a=Vt(),o=i.call(t,e,n,r?a:null);o&&("function"===typeof o.then?o.then((function(t){Lt(t,a)})).catch((function(t){0})):Lt(o,a))}))}}function Ct(){var t=bt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ot(t){Ct(),t.state&&t.state.key&&zt(t.state.key)}function Vt(){var t=bt();if(t)return wt[t]}function St(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ht(t){return kt(t.x)||kt(t.y)}function Tt(t){return{x:kt(t.x)?t.x:window.pageXOffset,y:kt(t.y)?t.y:window.pageYOffset}}function It(t){return{x:kt(t.x)?t.x:0,y:kt(t.y)?t.y:0}}function kt(t){return"number"===typeof t}var _t=/^#\d/;function Lt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=_t.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=It(i),e=St(r,i)}else Ht(t)&&(e=Tt(t))}else n&&Ht(t)&&(e=Tt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Et=lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Bt(t,e){Ct();var n=window.history;try{if(e){var i=r({},n.state);i.key=bt(),n.replaceState(i,"",t)}else n.pushState({key:zt(gt())},"",t)}catch(a){window.location[e?"replace":"assign"](t)}}function Pt(t){Bt(t,!0)}var xt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Dt(t,e){return $t(t,e,xt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ut(e)+'" via a navigation guard.')}function Ft(t,e){var n=$t(t,e,xt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function jt(t,e){return $t(t,e,xt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Nt(t,e){return $t(t,e,xt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function $t(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Rt=["params","query","hash"];function Ut(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Rt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function qt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return qt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function Kt(t){return function(e,n,r){var i=!1,a=0,o=null;Xt(t,(function(t,e,n,s){if("function"===typeof t&&void 0===t.cid){i=!0,a++;var l,c=Zt((function(e){Qt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[s]=e,a--,a<=0&&r()})),u=Zt((function(t){var e="Failed to resolve async component "+s+": "+t;o||(o=qt(t)?t:new Error(e),r(o))}));try{l=t(c,u)}catch(d){u(d)}if(l)if("function"===typeof l.then)l.then(c,u);else{var h=l.component;h&&"function"===typeof h.then&&h.then(c,u)}}})),i||r()}}function Xt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Qt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Xt(t,(function(t,r,i,a){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,a)})):n(o,r,i,a)}));return Yt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function ae(t){return re(t,"beforeRouteLeave",se,!0)}function oe(t){return re(t,"beforeRouteUpdate",se)}function se(t,e){if(e)return function(){return t.apply(e,arguments)}}function le(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ce(t,n,r)}))}function ce(t,e,n){return function(r,i,a){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),a(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var a=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,a)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Wt(t,xt.redirected)&&a===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var a=function(t){!Wt(t)&&qt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,s=i.matched.length-1;if(b(t,i)&&o===s&&t.matched[o]===i.matched[s])return this.ensureURL(),t.hash&&At(this.router,i,t,!1),a(Ft(i,t));var l=ne(this.current.matched,t.matched),c=l.updated,u=l.deactivated,h=l.activated,d=[].concat(ae(u),this.router.beforeHooks,oe(c),h.map((function(t){return t.beforeEnter})),Kt(h)),f=function(e,n){if(r.pending!==t)return a(jt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),a(Nt(i,t))):qt(e)?(r.ensureURL(!0),a(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(a(Dt(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(o){a(o)}};Gt(d,f,(function(){var n=le(h),o=n.concat(r.router.resolveHooks);Gt(o,f,(function(){if(r.pending!==t)return a(jt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){A(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Et&&n;r&&this.listeners.push(Mt());var i=function(){var n=t.current,i=he(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&At(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,a=i.current;this.transitionTo(t,(function(t){Bt(T(r.base+t.fullPath)),At(r.router,t,a,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,a=i.current;this.transitionTo(t,(function(t){Pt(T(r.base+t.fullPath)),At(r.router,t,a,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=T(this.base+this.current.fullPath);t?Bt(e):Pt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(T(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Et&&n;r&&this.listeners.push(Mt());var i=function(){var e=t.current;pe()&&t.transitionTo(ve(),(function(n){r&&At(t.router,n,e,!0),Et||ye(n.fullPath)}))},a=Et?"popstate":"hashchange";window.addEventListener(a,i),this.listeners.push((function(){window.removeEventListener(a,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,a=i.current;this.transitionTo(t,(function(t){ge(t.fullPath),At(r.router,t,a,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,a=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),At(r.router,t,a,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?ge(e):ye(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(T(t+"/#"+e)),!0}function pe(){var t=ve();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ge(t){Et?Bt(me(t)):window.location.hash=t}function ye(t){Et?Pt(me(t)):window.location.replace(me(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Wt(t,xt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),ze=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Et&&!1!==t.fallback,this.fallback&&(e="hash"),lt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};ze.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},ze.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,a=Et&&i;a&&"fullPath"in t&&At(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},ze.prototype.beforeEach=function(t){return Ae(this.beforeHooks,t)},ze.prototype.beforeResolve=function(t){return Ae(this.resolveHooks,t)},ze.prototype.afterEach=function(t){return Ae(this.afterHooks,t)},ze.prototype.onReady=function(t,e){this.history.onReady(t,e)},ze.prototype.onError=function(t){this.history.onError(t)},ze.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},ze.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},ze.prototype.go=function(t){this.history.go(t)},ze.prototype.back=function(){this.go(-1)},ze.prototype.forward=function(){this.go(1)},ze.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},ze.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),a=i.redirectedFrom||i.fullPath,o=this.history.base,s=Ce(o,a,this.mode);return{location:r,route:i,href:s,normalizedTo:r,resolved:i}},ze.prototype.getRoutes=function(){return this.matcher.getRoutes()},ze.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},ze.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ze.prototype,we);var Me=ze;function Ae(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ce(t,e,n){var r="hash"===n?"#"+e:e;return t?T(t+"/"+r):r}ze.install=st,ze.version="3.6.5",ze.isNavigationFailure=Wt,ze.NavigationFailureType=xt,ze.START_LOCATION=m,lt&&window.Vue&&window.Vue.use(ze)},2915:function(t,e,n){"use strict";var r=n(7387),i=n.n(r);"undefined"!==typeof window&&Promise.resolve(n(7146));var a={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){i()(this.$el).slick("unslick")},methods:{create:function(){var t=i()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=i()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),i()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){i()(this.$el).slick("slickNext")},prev:function(){i()(this.$el).slick("slickPrev")},pause:function(){i()(this.$el).slick("slickPause")},play:function(){i()(this.$el).slick("slickPlay")},goTo:function(t,e){i()(this.$el).slick("slickGoTo",t,e)},currentSlide:function(){return i()(this.$el).slick("slickCurrentSlide")},add:function(t,e,n){i()(this.$el).slick("slickAdd",t,e,n)},remove:function(t,e){i()(this.$el).slick("slickRemove",t,e)},filter:function(t){i()(this.$el).slick("slickFilter",t)},unfilter:function(){i()(this.$el).slick("slickUnfilter")},getOption:function(t){i()(this.$el).slick("slickGetOption",t)},setOption:function(t,e,n){i()(this.$el).slick("slickSetOption",t,e,n)},setPosition:function(){i()(this.$el).slick("setPosition")},onAfterChange:function(t,e,n){this.$emit("afterChange",t,e,n)},onBeforeChange:function(t,e,n,r){this.$emit("beforeChange",t,e,n,r)},onBreakpoint:function(t,e,n){this.$emit("breakpoint",t,e,n)},onDestroy:function(t,e){this.$emit("destroy",t,e)},onEdge:function(t,e,n){this.$emit("edge",t,e,n)},onInit:function(t,e){this.$emit("init",t,e)},onReInit:function(t,e){this.$emit("reInit",t,e)},onSetPosition:function(t,e){this.$emit("setPosition",t,e)},onSwipe:function(t,e,n){this.$emit("swipe",t,e,n)},onLazyLoaded:function(t,e,n,r){this.$emit("lazyLoaded",t,e,n,r)},onLazyLoadError:function(t,e,n,r){this.$emit("lazyLoadError",t,e,n,r)}}};function o(t,e,n,r,i,a,o,s,l,c){"boolean"!==typeof o&&(l=s,s=o,o=!1);var u,h="function"===typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,i&&(h.functional=!0)),r&&(h._scopeId=r),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},h._ssrRegister=u):e&&(u=o?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),u)if(h.functional){var d=h.render;h.render=function(t,e){return u.call(e),d(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,u):[u]}return n}var s=o,l=a,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},u=[];c._withStripped=!0;var h=void 0,d=void 0,f=void 0,p=!1,v=s({render:c,staticRenderFns:u},h,l,d,p,f,void 0,void 0),m=function(t,e){m.installed||t.prototype.$isServer||(m.installed=!0,t.component("slick",v))};v.install=m,e["Z"]=v},6215:function(t,e,n){n(7658),function(e,n){t.exports=n()}(0,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>c});class n{constructor(t,e){this.startedAt=Date.now(),this.callback=t,this.delay=e,this.timer=setTimeout(t,e)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const r=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"}),i={all:a=a||new Map,on:function(t,e){var n=a.get(t);n?n.push(e):a.set(t,[e])},off:function(t,e){var n=a.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):a.set(t,[]))},emit:function(t,e){var n=a.get(t);n&&n.slice().map((function(t){t(e)})),(n=a.get("*"))&&n.slice().map((function(n){n(t,e)}))}};var a,o=function(t,e,n,r,i,a,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}({name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:r.BOTTOM_RIGHT,validator:t=>Object.values(r).includes(t)},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data:()=>({isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}),beforeMount(){this.setupContainer()},mounted(){this.showNotice(),i.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)},shouldQueue(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout((()=>{var t;this.onDismiss.apply(null,arguments),this.$destroy(),void 0!==(t=this.$el).remove?t.remove():t.parentNode.removeChild(t)}),150)},showNotice(){this.shouldQueue()?this.queueTimer=setTimeout(this.showNotice,250):(this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.duration&&(this.timer=new n(this.dismiss,this.duration)))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(t){this.pauseOnHover&&this.timer&&(t?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case r.TOP:case r.TOP_RIGHT:case r.TOP_LEFT:return this.parentTop;case r.BOTTOM:case r.BOTTOM_RIGHT:case r.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case r.TOP:case r.TOP_RIGHT:case r.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case r.BOTTOM:case r.BOTTOM_RIGHT:case r.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeDestroy(){i.off("toast-clear",this.dismiss)}},(function(){var t=this,e=t._self._c;return e("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"v-toast__item",class:["v-toast__item--".concat(t.type),"v-toast__item--".concat(t.position)],attrs:{role:"alert"},on:{mouseover:function(e){return t.toggleTimer(!0)},mouseleave:function(e){return t.toggleTimer(!1)},click:t.whenClicked}},[e("div",{staticClass:"v-toast__icon"}),t._v(" "),e("p",{staticClass:"v-toast__text",domProps:{innerHTML:t._s(t.message)}})])])}),[],!1,null,null,null);const s=o.exports,l=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{open(n){let r;"string"==typeof n&&(r=n);const i={message:r},a=Object.assign({},i,e,n);return new(t.extend(s))({el:document.createElement("div"),propsData:a})},clear(){i.emit("toast-clear")},success(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"success"},e))},error(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"error"},e))},info(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"info"},e))},warning(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"warning"},e))},default(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"default"},e))}}};s.install=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=l(t,e);t.$toast=n,t.prototype.$toast=n};const c=s;return e.default})()))},6369:function(t,e,n){"use strict";n.r(e),n.d(e,{EffectScope:function(){return He},computed:function(){return me},customRef:function(){return se},default:function(){return ra},defineAsyncComponent:function(){return er},defineComponent:function(){return yr},del:function(){return Nt},effectScope:function(){return Te},getCurrentInstance:function(){return mt},getCurrentScope:function(){return ke},h:function(){return Dn},inject:function(){return Be},isProxy:function(){return Xt},isReactive:function(){return Wt},isReadonly:function(){return Kt},isRef:function(){return Zt},isShallow:function(){return Gt},markRaw:function(){return Jt},mergeDefaults:function(){return Cn},nextTick:function(){return Qn},onActivated:function(){return ur},onBeforeMount:function(){return ir},onBeforeUnmount:function(){return lr},onBeforeUpdate:function(){return or},onDeactivated:function(){return hr},onErrorCaptured:function(){return mr},onMounted:function(){return ar},onRenderTracked:function(){return fr},onRenderTriggered:function(){return pr},onScopeDispose:function(){return _e},onServerPrefetch:function(){return dr},onUnmounted:function(){return cr},onUpdated:function(){return sr},provide:function(){return Le},proxyRefs:function(){return ae},reactive:function(){return Rt},readonly:function(){return de},ref:function(){return te},set:function(){return jt},shallowReactive:function(){return Ut},shallowReadonly:function(){return ve},shallowRef:function(){return ee},toRaw:function(){return Yt},toRef:function(){return ce},toRefs:function(){return le},triggerRef:function(){return re},unref:function(){return ie},useAttrs:function(){return wn},useCssModule:function(){return Zn},useCssVars:function(){return tr},useListeners:function(){return Mn},useSlots:function(){return zn},version:function(){return gr},watch:function(){return Ve},watchEffect:function(){return we},watchPostEffect:function(){return Me},watchSyncEffect:function(){return Ae}});n(7658),n(4633),n(541);var r=Object.freeze({}),i=Array.isArray;function a(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function s(t){return!0===t}function l(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function f(t){return"[object Object]"===d.call(t)}function p(t){return"[object RegExp]"===d.call(t)}function v(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function g(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===d?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function b(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}b("slot,component",!0);var z=b("key,ref,slot,slot-scope,is");function w(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var M=Object.prototype.hasOwnProperty;function A(t,e){return M.call(t,e)}function C(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,V=C((function(t){return t.replace(O,(function(t,e){return e?e.toUpperCase():""}))})),S=C((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),H=/\B([A-Z])/g,T=C((function(t){return t.replace(H,"-$1").toLowerCase()}));function I(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){return t.bind(e)}var _=Function.prototype.bind?k:I;function L(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function E(t,e){for(var n in e)t[n]=e[n];return t}function B(t){for(var e={},n=0;n<t.length;n++)t[n]&&E(e,t[n]);return e}function P(t,e,n){}var x=function(t,e,n){return!1},D=function(t){return t};function F(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),a=Array.isArray(e);if(i&&a)return t.length===e.length&&t.every((function(t,n){return F(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every((function(n){return F(t[n],e[n])}))}catch(l){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function N(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function $(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var R="data-server-rendered",U=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:x,isReservedAttr:x,isUnknownElement:x,getTagNamespace:P,parsePlatformTagName:D,mustUseProp:x,async:!0,_lifecycleHooks:q},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function X(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Y=new RegExp("[^".concat(G.source,".$_\\d]"));function J(t){if(!Y.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Q="__proto__"in{},Z="undefined"!==typeof window,tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var it=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var at,ot=tt&&tt.match(/firefox\/(\d+)/),st={}.watch,lt=!1;if(Z)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){lt=!0}}),window.addEventListener("test-passive",null,ct)}catch(il){}var ut=function(){return void 0===at&&(at=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),at},ht=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ft,pt="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);ft="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var vt=null;function mt(){return vt&&{proxy:vt}}function gt(t){void 0===t&&(t=null),t||vt&&vt._scope.off(),vt=t,t&&t._scope.on()}var yt=function(){function t(t,e,n,r,i,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),bt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function zt(t){return new yt(void 0,void 0,void 0,String(t))}function wt(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Mt=0,At=[],Ct=function(){for(var t=0;t<At.length;t++){var e=At[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}At.length=0},Ot=function(){function t(){this._pending=!1,this.id=Mt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,At.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();Ot.target=null;var Vt=[];function St(t){Vt.push(t),Ot.target=t}function Ht(){Vt.pop(),Ot.target=Vt[Vt.length-1]}var Tt=Array.prototype,It=Object.create(Tt),kt=["push","pop","shift","unshift","splice","sort","reverse"];kt.forEach((function(t){var e=Tt[t];X(It,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),a}))}));var _t=Object.getOwnPropertyNames(It),Lt={},Et=!0;function Bt(t){Et=t}var Pt={notify:P,depend:P,addSub:P,removeSub:P},xt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Pt:new Ot,this.vmCount=0,X(t,"__ob__",this),i(t)){if(!n)if(Q)t.__proto__=It;else for(var r=0,a=_t.length;r<a;r++){var o=_t[r];X(t,o,It[o])}e||this.observeArray(t)}else{var s=Object.keys(t);for(r=0;r<s.length;r++){o=s[r];Ft(t,o,Lt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e],!1,this.mock)},t}();function Dt(t,e,n){return t&&A(t,"__ob__")&&t.__ob__ instanceof xt?t.__ob__:!Et||!n&&ut()||!i(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||Zt(t)||t instanceof yt?void 0:new xt(t,e,n)}function Ft(t,e,n,r,a,o){var s=new Ot,l=Object.getOwnPropertyDescriptor(t,e);if(!l||!1!==l.configurable){var c=l&&l.get,u=l&&l.set;c&&!u||n!==Lt&&2!==arguments.length||(n=t[e]);var h=!a&&Dt(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=c?c.call(t):n;return Ot.target&&(s.depend(),h&&(h.dep.depend(),i(e)&&$t(e))),Zt(e)&&!a?e.value:e},set:function(e){var r=c?c.call(t):n;if($(r,e)){if(u)u.call(t,e);else{if(c)return;if(!a&&Zt(r)&&!Zt(e))return void(r.value=e);n=e}h=!a&&Dt(e,!1,o),s.notify()}}}),s}}function jt(t,e,n){if(!Kt(t)){var r=t.__ob__;return i(t)&&v(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Dt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Ft(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function Nt(t,e){if(i(t)&&v(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Kt(t)||A(t,e)&&(delete t[e],n&&n.dep.notify())}}function $t(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&$t(e)}function Rt(t){return qt(t,!1),t}function Ut(t){return qt(t,!0),X(t,"__v_isShallow",!0),t}function qt(t,e){if(!Kt(t)){Dt(t,e,ut());0}}function Wt(t){return Kt(t)?Wt(t["__v_raw"]):!(!t||!t.__ob__)}function Gt(t){return!(!t||!t.__v_isShallow)}function Kt(t){return!(!t||!t.__v_isReadonly)}function Xt(t){return Wt(t)||Kt(t)}function Yt(t){var e=t&&t["__v_raw"];return e?Yt(e):t}function Jt(t){return Object.isExtensible(t)&&X(t,"__v_skip",!0),t}var Qt="__v_isRef";function Zt(t){return!(!t||!0!==t.__v_isRef)}function te(t){return ne(t,!1)}function ee(t){return ne(t,!0)}function ne(t,e){if(Zt(t))return t;var n={};return X(n,Qt,!0),X(n,"__v_isShallow",e),X(n,"dep",Ft(n,"value",t,null,e,ut())),n}function re(t){t.dep&&t.dep.notify()}function ie(t){return Zt(t)?t.value:t}function ae(t){if(Wt(t))return t;for(var e={},n=Object.keys(t),r=0;r<n.length;r++)oe(e,t,n[r]);return e}function oe(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Zt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Zt(r)&&!Zt(t)?r.value=t:e[n]=t}})}function se(t){var e=new Ot,n=t((function(){e.depend()}),(function(){e.notify()})),r=n.get,i=n.set,a={get value(){return r()},set value(t){i(t)}};return X(a,Qt,!0),a}function le(t){var e=i(t)?new Array(t.length):{};for(var n in t)e[n]=ce(t,n);return e}function ce(t,e,n){var r=t[e];if(Zt(r))return r;var i={get value(){var r=t[e];return void 0===r?n:r},set value(n){t[e]=n}};return X(i,Qt,!0),i}var ue="__v_rawToReadonly",he="__v_rawToShallowReadonly";function de(t){return fe(t,!1)}function fe(t,e){if(!f(t))return t;if(Kt(t))return t;var n=e?he:ue,r=t[n];if(r)return r;var i=Object.create(Object.getPrototypeOf(t));X(t,n,i),X(i,"__v_isReadonly",!0),X(i,"__v_raw",t),Zt(t)&&X(i,Qt,!0),(e||Gt(t))&&X(i,"__v_isShallow",!0);for(var a=Object.keys(t),o=0;o<a.length;o++)pe(i,t,a[o],e);return i}function pe(t,e,n,r){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];return r||!f(t)?t:de(t)},set:function(){}})}function ve(t){return fe(t,!0)}function me(t,e){var n,r,i=u(t);i?(n=t,r=P):(n=t.get,r=t.set);var a=ut()?null:new Cr(vt,n,P,{lazy:!0});var o={effect:a,get value(){return a?(a.dirty&&a.evaluate(),Ot.target&&a.depend(),a.value):n()},set value(t){r(t)}};return X(o,Qt,!0),X(o,"__v_isReadonly",i),o}var ge="watcher",ye="".concat(ge," callback"),be="".concat(ge," getter"),ze="".concat(ge," cleanup");function we(t,e){return Se(t,null,e)}function Me(t,e){return Se(t,null,{flush:"post"})}function Ae(t,e){return Se(t,null,{flush:"sync"})}var Ce,Oe={};function Ve(t,e,n){return Se(t,e,n)}function Se(t,e,n){var a=void 0===n?r:n,o=a.immediate,s=a.deep,l=a.flush,c=void 0===l?"pre":l;a.onTrack,a.onTrigger;var h,d,f=vt,p=function(t,e,n){return void 0===n&&(n=null),jn(t,null,n,f,e)},v=!1,m=!1;if(Zt(t)?(h=function(){return t.value},v=Gt(t)):Wt(t)?(h=function(){return t.__ob__.dep.depend(),t},s=!0):i(t)?(m=!0,v=t.some((function(t){return Wt(t)||Gt(t)})),h=function(){return t.map((function(t){return Zt(t)?t.value:Wt(t)?zr(t):u(t)?p(t,be):void 0}))}):h=u(t)?e?function(){return p(t,be)}:function(){if(!f||!f._isDestroyed)return d&&d(),p(t,ge,[y])}:P,e&&s){var g=h;h=function(){return zr(g())}}var y=function(t){d=b.onStop=function(){p(t,ze)}};if(ut())return y=P,e?o&&p(e,ye,[h(),m?[]:void 0,y]):h(),P;var b=new Cr(vt,h,P,{lazy:!0});b.noRecurse=!e;var z=m?[]:Oe;return b.run=function(){if(b.active)if(e){var t=b.get();(s||v||(m?t.some((function(t,e){return $(t,z[e])})):$(t,z)))&&(d&&d(),p(e,ye,[t,z===Oe?void 0:z,y]),z=t)}else b.get()},"sync"===c?b.update=b.run:"post"===c?(b.post=!0,b.update=function(){return ni(b)}):b.update=function(){if(f&&f===vt&&!f._isMounted){var t=f._preWatchers||(f._preWatchers=[]);t.indexOf(b)<0&&t.push(b)}else ni(b)},e?o?b.run():z=b.get():"post"===c&&f?f.$once("hook:mounted",(function(){return b.get()})):b.get(),function(){b.teardown()}}var He=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Ce;try{return Ce=this,t()}finally{Ce=e}}else 0},t.prototype.on=function(){Ce=this},t.prototype.off=function(){Ce=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Te(t){return new He(t)}function Ie(t,e){void 0===e&&(e=Ce),e&&e.active&&e.effects.push(t)}function ke(){return Ce}function _e(t){Ce&&Ce.cleanups.push(t)}function Le(t,e){vt&&(Ee(vt)[t]=e)}function Ee(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}function Be(t,e,n){void 0===n&&(n=!1);var r=vt;if(r){var i=r.$parent&&r.$parent._provided;if(i&&t in i)return i[t];if(arguments.length>1)return n&&u(e)?e.call(r):e}else 0}var Pe=C((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function xe(t,e){function n(){var t=n.fns;if(!i(t))return jn(t,null,arguments,e,"v-on handler");for(var r=t.slice(),a=0;a<r.length;a++)jn(r[a],null,arguments,e,"v-on handler")}return n.fns=t,n}function De(t,e,n,r,i,o){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=Pe(l),a(c)||(a(u)?(a(c.fns)&&(c=t[l]=xe(c,o)),s(h.once)&&(c=t[l]=i(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)a(t[l])&&(h=Pe(l),r(h.name,e[l],h.capture))}function Fe(t,e,n){var r;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function l(){n.apply(this,arguments),w(r.fns,l)}a(i)?r=xe([l]):o(i.fns)&&s(i.merged)?(r=i,r.fns.push(l)):r=xe([i,l]),r.merged=!0,t[e]=r}function je(t,e,n){var r=e.options.props;if(!a(r)){var i={},s=t.attrs,l=t.props;if(o(s)||o(l))for(var c in r){var u=T(c);Ne(i,l,c,u,!0)||Ne(i,s,c,u,!1)}return i}}function Ne(t,e,n,r,i){if(o(e)){if(A(e,n))return t[n]=e[n],i||delete e[n],!0;if(A(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function $e(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function Re(t){return c(t)?[zt(t)]:i(t)?qe(t):void 0}function Ue(t){return o(t)&&o(t.text)&&l(t.isComment)}function qe(t,e){var n,r,l,u,h=[];for(n=0;n<t.length;n++)r=t[n],a(r)||"boolean"===typeof r||(l=h.length-1,u=h[l],i(r)?r.length>0&&(r=qe(r,"".concat(e||"","_").concat(n)),Ue(r[0])&&Ue(u)&&(h[l]=zt(u.text+r[0].text),r.shift()),h.push.apply(h,r)):c(r)?Ue(u)?h[l]=zt(u.text+r):""!==r&&h.push(zt(r)):Ue(r)&&Ue(u)?h[l]=zt(u.text+r.text):(s(t._isVList)&&o(r.tag)&&a(r.key)&&o(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function We(t,e){var n,r,a,s,l=null;if(i(t)||"string"===typeof t)for(l=new Array(t.length),n=0,r=t.length;n<r;n++)l[n]=e(t[n],n);else if("number"===typeof t)for(l=new Array(t),n=0;n<t;n++)l[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){l=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)l.push(e(u.value,l.length)),u=c.next()}else for(a=Object.keys(t),l=new Array(a.length),n=0,r=a.length;n<r;n++)s=a[n],l[n]=e(t[s],s,n);return o(l)||(l=[]),l._isVList=!0,l}function Ge(t,e,n,r){var i,a=this.$scopedSlots[t];a?(n=n||{},r&&(n=E(E({},r),n)),i=a(n)||(u(e)?e():e)):i=this.$slots[t]||(u(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Ke(t){return Ii(this.$options,"filters",t,!0)||D}function Xe(t,e){return i(t)?-1===t.indexOf(e):t!==e}function Ye(t,e,n,r,i){var a=W.keyCodes[e]||n;return i&&r&&!W.keyCodes[e]?Xe(i,r):a?Xe(a,t):r?T(r)!==e:void 0===t}function Je(t,e,n,r,a){if(n)if(h(n)){i(n)&&(n=B(n));var o=void 0,s=function(i){if("class"===i||"style"===i||z(i))o=t;else{var s=t.attrs&&t.attrs.type;o=r||W.mustUseProp(e,s,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=V(i),c=T(i);if(!(l in o)&&!(c in o)&&(o[i]=n[i],a)){var u=t.on||(t.on={});u["update:".concat(i)]=function(t){n[i]=t}}};for(var l in n)s(l)}else;return t}function Qe(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),tn(r,"__static__".concat(t),!1)),r}function Ze(t,e,n){return tn(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function tn(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&en(t[r],"".concat(e,"_").concat(r),n);else en(t,e,n)}function en(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function nn(t,e){if(e)if(f(e)){var n=t.on=t.on?E({},t.on):{};for(var r in e){var i=n[r],a=e[r];n[r]=i?[].concat(i,a):a}}else;return t}function rn(t,e,n,r){e=e||{$stable:!n};for(var a=0;a<t.length;a++){var o=t[a];i(o)?rn(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function an(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function on(t,e){return"string"===typeof t?e+t:t}function sn(t){t._o=Ze,t._n=y,t._s=g,t._l=We,t._t=Ge,t._q=F,t._i=j,t._m=Qe,t._f=Ke,t._k=Ye,t._b=Je,t._v=zt,t._e=bt,t._u=rn,t._g=nn,t._d=an,t._p=on}function ln(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var a=t[r],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(a);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var c in n)n[c].every(cn)&&delete n[c];return n}function cn(t){return t.isComment&&!t.asyncFactory||" "===t.text}function un(t){return t.isComment&&t.asyncFactory}function hn(t,e,n,i){var a,o=Object.keys(n).length>0,s=e?!!e.$stable:!o,l=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&i&&i!==r&&l===i.$key&&!o&&!i.$hasNormal)return i;for(var c in a={},e)e[c]&&"$"!==c[0]&&(a[c]=dn(t,n,c,e[c]))}else a={};for(var u in n)u in a||(a[u]=fn(n,u));return e&&Object.isExtensible(e)&&(e._normalized=a),X(a,"$stable",s),X(a,"$key",l),X(a,"$hasNormal",o),a}function dn(t,e,n,r){var a=function(){var e=vt;gt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:Re(n);var a=n&&n[0];return gt(e),n&&(!a||1===n.length&&a.isComment&&!un(a))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:a,enumerable:!0,configurable:!0}),a}function fn(t,e){return function(){return t[e]}}function pn(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=vn(t);gt(t),St();var i=jn(n,null,[t._props||Ut({}),r],t,"setup");if(Ht(),gt(),u(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var a=t._setupProxy={};for(var o in i)"__sfc"!==o&&oe(a,i,o)}else for(var o in i)K(o)||oe(t,i,o);else 0}}function vn(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};X(e,"_v_attr_proxy",!0),mn(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};mn(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return yn(t)},emit:_(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return oe(t,e,n)}))}}}function mn(t,e,n,r,i){var a=!1;for(var o in e)o in t?e[o]!==n[o]&&(a=!0):(a=!0,gn(t,o,r,i));for(var o in t)o in e||(a=!0,delete t[o]);return a}function gn(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function yn(t){return t._slotsProxy||bn(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function bn(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function zn(){return An().slots}function wn(){return An().attrs}function Mn(){return An().listeners}function An(){var t=vt;return t._setupContext||(t._setupContext=vn(t))}function Cn(t,e){var n=i(t)?t.reduce((function(t,e){return t[e]={},t}),{}):t;for(var r in e){var a=n[r];a?i(a)||u(a)?n[r]={type:a,default:e[r]}:a.default=e[r]:null===a&&(n[r]={default:e[r]})}return n}function On(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=ln(e._renderChildren,i),t.$scopedSlots=n?hn(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return En(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return En(t,e,n,r,i,!0)};var a=n&&n.data;Ft(t,"$attrs",a&&a.attrs||r,null,!0),Ft(t,"$listeners",e._parentListeners||r,null,!0)}var Vn=null;function Sn(t){sn(t.prototype),t.prototype.$nextTick=function(t){return Qn(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,a=n._parentVnode;a&&e._isMounted&&(e.$scopedSlots=hn(e.$parent,a.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&bn(e._slotsProxy,e.$scopedSlots)),e.$vnode=a;try{gt(e),Vn=e,t=r.call(e._renderProxy,e.$createElement)}catch(il){Fn(il,e,"render"),t=e._vnode}finally{Vn=null,gt()}return i(t)&&1===t.length&&(t=t[0]),t instanceof yt||(t=bt()),t.parent=a,t}}function Hn(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Tn(t,e,n,r,i){var a=bt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:r,tag:i},a}function In(t,e){if(s(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=Vn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var r=t.owners=[n],i=!0,l=null,c=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var u=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==l&&(clearTimeout(l),l=null),null!==c&&(clearTimeout(c),c=null))},d=N((function(n){t.resolved=Hn(n,e),i?r.length=0:u(!0)})),f=N((function(e){o(t.errorComp)&&(t.error=!0,u(!0))})),p=t(d,f);return h(p)&&(m(p)?a(t.resolved)&&p.then(d,f):m(p.component)&&(p.component.then(d,f),o(p.error)&&(t.errorComp=Hn(p.error,e)),o(p.loading)&&(t.loadingComp=Hn(p.loading,e),0===p.delay?t.loading=!0:l=setTimeout((function(){l=null,a(t.resolved)&&a(t.error)&&(t.loading=!0,u(!1))}),p.delay||200)),o(p.timeout)&&(c=setTimeout((function(){c=null,a(t.resolved)&&f(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function kn(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||un(n)))return n}}var _n=1,Ln=2;function En(t,e,n,r,a,o){return(i(n)||c(n))&&(a=r,r=n,n=void 0),s(o)&&(a=Ln),Bn(t,e,n,r,a)}function Bn(t,e,n,r,a){if(o(n)&&o(n.__ob__))return bt();if(o(n)&&o(n.is)&&(e=n.is),!e)return bt();var s,l;if(i(r)&&u(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),a===Ln?r=Re(r):a===_n&&(r=$e(r)),"string"===typeof e){var c=void 0;l=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),s=W.isReservedTag(e)?new yt(W.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=Ii(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):fi(c,n,t,r,e)}else s=fi(e,n,t,r);return i(s)?s:o(s)?(o(l)&&Pn(s,l),o(n)&&xn(n),s):bt()}function Pn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var r=0,i=t.children.length;r<i;r++){var l=t.children[r];o(l.tag)&&(a(l.ns)||s(n)&&"svg"!==l.tag)&&Pn(l,e,n)}}function xn(t){h(t.style)&&zr(t.style),h(t.class)&&zr(t.class)}function Dn(t,e,n){return En(vt,t,e,n,2,!0)}function Fn(t,e,n){St();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var a=0;a<i.length;a++)try{var o=!1===i[a].call(r,t,e,n);if(o)return}catch(il){Nn(il,r,"errorCaptured hook")}}}Nn(t,e,n)}finally{Ht()}}function jn(t,e,n,r,i){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&m(a)&&!a._handled&&(a.catch((function(t){return Fn(t,r,i+" (Promise/async)")})),a._handled=!0)}catch(il){Fn(il,r,i)}return a}function Nn(t,e,n){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,n)}catch(il){il!==t&&$n(il,null,"config.errorHandler")}$n(t,e,n)}function $n(t,e,n){if(!Z||"undefined"===typeof console)throw t;console.error(t)}var Rn,Un=!1,qn=[],Wn=!1;function Gn(){Wn=!1;var t=qn.slice(0);qn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var Kn=Promise.resolve();Rn=function(){Kn.then(Gn),it&&setTimeout(P)},Un=!0}else if(et||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Rn="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(Gn)}:function(){setTimeout(Gn,0)};else{var Xn=1,Yn=new MutationObserver(Gn),Jn=document.createTextNode(String(Xn));Yn.observe(Jn,{characterData:!0}),Rn=function(){Xn=(Xn+1)%2,Jn.data=String(Xn)},Un=!0}function Qn(t,e){var n;if(qn.push((function(){if(t)try{t.call(e)}catch(il){Fn(il,e,"nextTick")}else n&&n(e)})),Wn||(Wn=!0,Rn()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function Zn(t){if(void 0===t&&(t="$style"),!vt)return r;var e=vt[t];return e||r}function tr(t){if(Z){var e=vt;e&&Me((function(){var n=e.$el,r=t(e,e._setupProxy);if(n&&1===n.nodeType){var i=n.style;for(var a in r)i.setProperty("--".concat(a),r[a])}}))}}function er(t){u(t)&&(t={loader:t});var e=t.loader,n=t.loadingComponent,r=t.errorComponent,i=t.delay,a=void 0===i?200:i,o=t.timeout,s=(t.suspensible,t.onError);var l=null,c=0,h=function(){return c++,l=null,d()},d=function(){var t;return l||(t=l=e().catch((function(t){if(t=t instanceof Error?t:new Error(String(t)),s)return new Promise((function(e,n){var r=function(){return e(h())},i=function(){return n(t)};s(t,r,i,c+1)}));throw t})).then((function(e){return t!==l&&l?l:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e)})))};return function(){var t=d();return{component:t,delay:a,timeout:o,error:r,loading:n}}}function nr(t){return function(e,n){if(void 0===n&&(n=vt),n)return rr(n,t,e)}}function rr(t,e,n){var r=t.$options;r[e]=Mi(r[e],n)}var ir=nr("beforeMount"),ar=nr("mounted"),or=nr("beforeUpdate"),sr=nr("updated"),lr=nr("beforeDestroy"),cr=nr("destroyed"),ur=nr("activated"),hr=nr("deactivated"),dr=nr("serverPrefetch"),fr=nr("renderTracked"),pr=nr("renderTriggered"),vr=nr("errorCaptured");function mr(t,e){void 0===e&&(e=vt),vr(t,e)}var gr="2.7.14";function yr(t){return t}var br=new ft;function zr(t){return wr(t,br),br.clear(),t}function wr(t,e){var n,r,a=i(t);if(!(!a&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(a){n=t.length;while(n--)wr(t[n],e)}else if(Zt(t))wr(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)wr(t[r[n]],e)}}}var Mr,Ar=0,Cr=function(){function t(t,e,n,r,i){Ie(this,Ce&&!Ce._vm?Ce:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ar,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ft,this.newDepIds=new ft,this.expression="",u(e)?this.getter=e:(this.getter=J(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;St(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(il){if(!this.user)throw il;Fn(il,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&zr(t),Ht(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ni(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');jn(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function Or(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Tr(t,e)}function Vr(t,e){Mr.$on(t,e)}function Sr(t,e){Mr.$off(t,e)}function Hr(t,e){var n=Mr;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Tr(t,e,n){Mr=t,De(e,n||{},Vr,Sr,Hr,t),Mr=void 0}function Ir(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var a=0,o=t.length;a<o;a++)r.$on(t[a],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,a=t.length;r<a;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var l=s.length;while(l--)if(o=s[l],o===e||o.fn===e){s.splice(l,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?L(n):n;for(var r=L(arguments,1),i='event handler for "'.concat(t,'"'),a=0,o=n.length;a<o;a++)jn(n[a],e,r,e,i)}return e}}var kr=null;function _r(t){var e=kr;return kr=t,function(){kr=e}}function Lr(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Er(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,a=_r(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),a(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){jr(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),jr(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Br(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=bt),jr(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&jr(t,"beforeUpdate")}};new Cr(t,r,P,i,!0),n=!1;var a=t._preWatchers;if(a)for(var o=0;o<a.length;o++)a[o].run();return null==t.$vnode&&(t._isMounted=!0,jr(t,"mounted")),t}function Pr(t,e,n,i,a){var o=i.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==r&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),c=!!(a||t.$options._renderChildren||l),u=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=a;var h=i.data.attrs||r;t._attrsProxy&&mn(t._attrsProxy,h,u.data&&u.data.attrs||r,t,"$attrs")&&(c=!0),t.$attrs=h,n=n||r;var d=t.$options._parentListeners;if(t._listenersProxy&&mn(t._listenersProxy,n,d||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,Tr(t,n,d),e&&t.$options.props){Bt(!1);for(var f=t._props,p=t.$options._propKeys||[],v=0;v<p.length;v++){var m=p[v],g=t.$options.props;f[m]=ki(m,g,e,t)}Bt(!0),t.$options.propsData=e}c&&(t.$slots=ln(a,i.context),t.$forceUpdate())}function xr(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dr(t,e){if(e){if(t._directInactive=!1,xr(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dr(t.$children[n]);jr(t,"activated")}}function Fr(t,e){if((!e||(t._directInactive=!0,!xr(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fr(t.$children[n]);jr(t,"deactivated")}}function jr(t,e,n,r){void 0===r&&(r=!0),St();var i=vt;r&&gt(t);var a=t.$options[e],o="".concat(e," hook");if(a)for(var s=0,l=a.length;s<l;s++)jn(a[s],t,n||null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),r&&gt(i),Ht()}var Nr=[],$r=[],Rr={},Ur=!1,qr=!1,Wr=0;function Gr(){Wr=Nr.length=$r.length=0,Rr={},Ur=qr=!1}var Kr=0,Xr=Date.now;if(Z&&!et){var Yr=window.performance;Yr&&"function"===typeof Yr.now&&Xr()>document.createEvent("Event").timeStamp&&(Xr=function(){return Yr.now()})}var Jr=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Qr(){var t,e;for(Kr=Xr(),qr=!0,Nr.sort(Jr),Wr=0;Wr<Nr.length;Wr++)t=Nr[Wr],t.before&&t.before(),e=t.id,Rr[e]=null,t.run();var n=$r.slice(),r=Nr.slice();Gr(),ei(n),Zr(r),Ct(),ht&&W.devtools&&ht.emit("flush")}function Zr(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&jr(r,"updated")}}function ti(t){t._inactive=!1,$r.push(t)}function ei(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dr(t[e],!0)}function ni(t){var e=t.id;if(null==Rr[e]&&(t!==Ot.target||!t.noRecurse)){if(Rr[e]=!0,qr){var n=Nr.length-1;while(n>Wr&&Nr[n].id>t.id)n--;Nr.splice(n+1,0,t)}else Nr.push(t);Ur||(Ur=!0,Qn(Qr))}}function ri(t){var e=t.$options.provide;if(e){var n=u(e)?e.call(t):e;if(!h(n))return;for(var r=Ee(t),i=pt?Reflect.ownKeys(n):Object.keys(n),a=0;a<i.length;a++){var o=i[a];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function ii(t){var e=ai(t.$options.inject,t);e&&(Bt(!1),Object.keys(e).forEach((function(n){Ft(t,n,e[n])})),Bt(!0))}function ai(t,e){if(t){for(var n=Object.create(null),r=pt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var a=r[i];if("__ob__"!==a){var o=t[a].from;if(o in e._provided)n[a]=e._provided[o];else if("default"in t[a]){var s=t[a].default;n[a]=u(s)?s.call(e):s}else 0}}return n}}function oi(t,e,n,a,o){var l,c=this,u=o.options;A(a,"_uid")?(l=Object.create(a),l._original=a):(l=a,a=a._original);var h=s(u._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=a,this.listeners=t.on||r,this.injections=ai(u.inject,a),this.slots=function(){return c.$slots||hn(a,t.scopedSlots,c.$slots=ln(n,a)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return hn(a,t.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=hn(a,t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=En(l,t,e,n,r,d);return o&&!i(o)&&(o.fnScopeId=u._scopeId,o.fnContext=a),o}:this._c=function(t,e,n,r){return En(l,t,e,n,r,d)}}function si(t,e,n,a,s){var l=t.options,c={},u=l.props;if(o(u))for(var h in u)c[h]=ki(h,u,e||r);else o(n.attrs)&&ci(c,n.attrs),o(n.props)&&ci(c,n.props);var d=new oi(n,c,s,a,t),f=l.render.call(null,d._c,d);if(f instanceof yt)return li(f,n,d.parent,l,d);if(i(f)){for(var p=Re(f)||[],v=new Array(p.length),m=0;m<p.length;m++)v[m]=li(p[m],n,d.parent,l,d);return v}}function li(t,e,n,r,i){var a=wt(t);return a.fnContext=n,a.fnOptions=r,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function ci(t,e){for(var n in e)t[V(n)]=e[n]}function ui(t){return t.name||t.__name||t._componentTag}sn(oi.prototype);var hi={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;hi.prepatch(n,n)}else{var r=t.componentInstance=pi(t,kr);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Pr(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,jr(n,"mounted")),t.data.keepAlive&&(e._isMounted?ti(n):Dr(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fr(e,!0):e.$destroy())}},di=Object.keys(hi);function fi(t,e,n,r,i){if(!a(t)){var l=n.$options._base;if(h(t)&&(t=l.extend(t)),"function"===typeof t){var c;if(a(t.cid)&&(c=t,t=In(c,l),void 0===t))return Tn(c,e,n,r,i);e=e||{},ea(t),o(e.model)&&gi(t.options,e);var u=je(e,t,i);if(s(t.options.functional))return si(t,u,e,n,r);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}vi(e);var p=ui(t.options)||i,v=new yt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:u,listeners:d,tag:i,children:r},c);return v}}}function pi(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function vi(t){for(var e=t.hook||(t.hook={}),n=0;n<di.length;n++){var r=di[n],i=e[r],a=hi[r];i===a||i&&i._merged||(e[r]=i?mi(a,i):a)}}function mi(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function gi(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),s=a[r],l=e.model.callback;o(s)?(i(s)?-1===s.indexOf(l):s!==l)&&(a[r]=[l].concat(s)):a[r]=l}var yi=P,bi=W.optionMergeStrategies;function zi(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,a,o=pt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)r=o[s],"__ob__"!==r&&(i=t[r],a=e[r],n&&A(t,r)?i!==a&&f(i)&&f(a)&&zi(i,a):jt(t,r,a));return t}function wi(t,e,n){return n?function(){var r=u(e)?e.call(n,n):e,i=u(t)?t.call(n,n):t;return r?zi(r,i):i}:e?t?function(){return zi(u(e)?e.call(this,this):e,u(t)?t.call(this,this):t)}:e:t}function Mi(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?Ai(n):n}function Ai(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ci(t,e,n,r){var i=Object.create(t||null);return e?E(i,e):i}bi.data=function(t,e,n){return n?wi(t,e,n):e&&"function"!==typeof e?t:wi(t,e)},q.forEach((function(t){bi[t]=Mi})),U.forEach((function(t){bi[t+"s"]=Ci})),bi.watch=function(t,e,n,r){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var a={};for(var o in E(a,t),e){var s=a[o],l=e[o];s&&!i(s)&&(s=[s]),a[o]=s?s.concat(l):i(l)?l:[l]}return a},bi.props=bi.methods=bi.inject=bi.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return E(i,t),e&&E(i,e),i},bi.provide=function(t,e){return t?function(){var n=Object.create(null);return zi(n,u(t)?t.call(this):t),e&&zi(n,u(e)?e.call(this):e,!1),n}:e};var Oi=function(t,e){return void 0===e?t:e};function Vi(t,e){var n=t.props;if(n){var r,a,o,s={};if(i(n)){r=n.length;while(r--)a=n[r],"string"===typeof a&&(o=V(a),s[o]={type:null})}else if(f(n))for(var l in n)a=n[l],o=V(l),s[o]=f(a)?a:{type:a};else 0;t.props=s}}function Si(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var a=0;a<n.length;a++)r[n[a]]={from:n[a]};else if(f(n))for(var o in n){var s=n[o];r[o]=f(s)?E({from:o},s):{from:s}}else 0}}function Hi(t){var e=t.directives;if(e)for(var n in e){var r=e[n];u(r)&&(e[n]={bind:r,update:r})}}function Ti(t,e,n){if(u(e)&&(e=e.options),Vi(e,n),Si(e,n),Hi(e),!e._base&&(e.extends&&(t=Ti(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ti(t,e.mixins[r],n);var a,o={};for(a in t)s(a);for(a in e)A(t,a)||s(a);function s(r){var i=bi[r]||Oi;o[r]=i(t[r],e[r],n,r)}return o}function Ii(t,e,n,r){if("string"===typeof n){var i=t[e];if(A(i,n))return i[n];var a=V(n);if(A(i,a))return i[a];var o=S(a);if(A(i,o))return i[o];var s=i[n]||i[a]||i[o];return s}}function ki(t,e,n,r){var i=e[t],a=!A(n,t),o=n[t],s=Pi(Boolean,i.type);if(s>-1)if(a&&!A(i,"default"))o=!1;else if(""===o||o===T(t)){var l=Pi(String,i.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=_i(r,i,t);var c=Et;Bt(!0),Dt(o),Bt(c)}return o}function _i(t,e,n){if(A(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:u(r)&&"Function"!==Ei(e.type)?r.call(t):r}}var Li=/^\s*function (\w+)/;function Ei(t){var e=t&&t.toString().match(Li);return e?e[1]:""}function Bi(t,e){return Ei(t)===Ei(e)}function Pi(t,e){if(!i(e))return Bi(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Bi(e[n],t))return n;return-1}var xi={enumerable:!0,configurable:!0,get:P,set:P};function Di(t,e,n){xi.get=function(){return this[e][n]},xi.set=function(t){this[e][n]=t},Object.defineProperty(t,n,xi)}function Fi(t){var e=t.$options;if(e.props&&ji(t,e.props),pn(t),e.methods&&Ki(t,e.methods),e.data)Ni(t);else{var n=Dt(t._data={});n&&n.vmCount++}e.computed&&Ui(t,e.computed),e.watch&&e.watch!==st&&Xi(t,e.watch)}function ji(t,e){var n=t.$options.propsData||{},r=t._props=Ut({}),i=t.$options._propKeys=[],a=!t.$parent;a||Bt(!1);var o=function(a){i.push(a);var o=ki(a,e,n,t);Ft(r,a,o),a in t||Di(t,"_props",a)};for(var s in e)o(s);Bt(!0)}function Ni(t){var e=t.$options.data;e=t._data=u(e)?$i(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var a=n[i];0,r&&A(r,a)||K(a)||Di(t,"_data",a)}var o=Dt(e);o&&o.vmCount++}function $i(t,e){St();try{return t.call(e,e)}catch(il){return Fn(il,e,"data()"),{}}finally{Ht()}}var Ri={lazy:!0};function Ui(t,e){var n=t._computedWatchers=Object.create(null),r=ut();for(var i in e){var a=e[i],o=u(a)?a:a.get;0,r||(n[i]=new Cr(t,o||P,P,Ri)),i in t||qi(t,i,a)}}function qi(t,e,n){var r=!ut();u(n)?(xi.get=r?Wi(e):Gi(n),xi.set=P):(xi.get=n.get?r&&!1!==n.cache?Wi(e):Gi(n.get):P,xi.set=n.set||P),Object.defineProperty(t,e,xi)}function Wi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Ot.target&&e.depend(),e.value}}function Gi(t){return function(){return t.call(this,this)}}function Ki(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:_(e[n],t)}function Xi(t,e){for(var n in e){var r=e[n];if(i(r))for(var a=0;a<r.length;a++)Yi(t,n,r[a]);else Yi(t,n,r)}}function Yi(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ji(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=jt,t.prototype.$delete=Nt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Yi(r,t,e,n);n=n||{},n.user=!0;var i=new Cr(r,t,e,n);if(n.immediate){var a='callback for immediate watcher "'.concat(i.expression,'"');St(),jn(e,r,[i.value],r,a),Ht()}return function(){i.teardown()}}}var Qi=0;function Zi(t){t.prototype._init=function(t){var e=this;e._uid=Qi++,e._isVue=!0,e.__v_skip=!0,e._scope=new He(!0),e._scope._vm=!0,t&&t._isComponent?ta(e,t):e.$options=Ti(ea(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Lr(e),Or(e),On(e),jr(e,"beforeCreate",void 0,!1),ii(e),Fi(e),ri(e),jr(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function ta(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function ea(t){var e=t.options;if(t.super){var n=ea(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=na(t);i&&E(t.extendOptions,i),e=t.options=Ti(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function na(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function ra(t){this._init(t)}function ia(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=L(arguments,1);return n.unshift(this),u(t.install)?t.install.apply(t,n):u(t)&&t.apply(null,n),e.push(t),this}}function aa(t){t.mixin=function(t){return this.options=Ti(this.options,t),this}}function oa(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var a=ui(t)||ui(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ti(n.options,t),o["super"]=n,o.options.props&&sa(o),o.options.computed&&la(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,U.forEach((function(t){o[t]=n[t]})),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=E({},o.options),i[r]=o,o}}function sa(t){var e=t.options.props;for(var n in e)Di(t.prototype,"_props",n)}function la(t){var e=t.options.computed;for(var n in e)qi(t.prototype,n,e[n])}function ca(t){U.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&u(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ua(t){return t&&(ui(t.Ctor.options)||t.tag)}function ha(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function da(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var a in n){var o=n[a];if(o){var s=o.name;s&&!e(s)&&fa(n,a,r,i)}}}function fa(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,w(n,e)}Zi(ra),Ji(ra),Ir(ra),Er(ra),Sn(ra);var pa=[String,RegExp,Array],va={name:"keep-alive",abstract:!0,props:{include:pa,exclude:pa,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var a=r.tag,o=r.componentInstance,s=r.componentOptions;e[i]={name:ua(s),tag:a,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&fa(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)fa(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){da(t,(function(t){return ha(e,t)}))})),this.$watch("exclude",(function(e){da(t,(function(t){return!ha(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=kn(t),n=e&&e.componentOptions;if(n){var r=ua(n),i=this,a=i.include,o=i.exclude;if(a&&(!r||!ha(a,r))||o&&r&&ha(o,r))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,w(c,u),c.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},ma={KeepAlive:va};function ga(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:yi,extend:E,mergeOptions:Ti,defineReactive:Ft},t.set=jt,t.delete=Nt,t.nextTick=Qn,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),U.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,E(t.options.components,ma),ia(t),aa(t),oa(t),ca(t)}ga(ra),Object.defineProperty(ra.prototype,"$isServer",{get:ut}),Object.defineProperty(ra.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ra,"FunctionalRenderContext",{value:oi}),ra.version=gr;var ya=b("style,class"),ba=b("input,textarea,option,select,progress"),za=function(t,e,n){return"value"===n&&ba(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},wa=b("contenteditable,draggable,spellcheck"),Ma=b("events,caret,typing,plaintext-only"),Aa=function(t,e){return Ha(e)||"false"===e?"false":"contenteditable"===t&&Ma(e)?e:"true"},Ca=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Oa="http://www.w3.org/1999/xlink",Va=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Sa=function(t){return Va(t)?t.slice(6,t.length):""},Ha=function(t){return null==t||!1===t};function Ta(t){var e=t.data,n=t,r=t;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Ia(r.data,e));while(o(n=n.parent))n&&n.data&&(e=Ia(e,n.data));return ka(e.staticClass,e.class)}function Ia(t,e){return{staticClass:_a(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function ka(t,e){return o(t)||o(e)?_a(t,La(e)):""}function _a(t,e){return t?e?t+" "+e:t:e||""}function La(t){return Array.isArray(t)?Ea(t):h(t)?Ba(t):"string"===typeof t?t:""}function Ea(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=La(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ba(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Pa={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},xa=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Da=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Fa=function(t){return xa(t)||Da(t)};function ja(t){return Da(t)?"svg":"math"===t?"math":void 0}var Na=Object.create(null);function $a(t){if(!Z)return!0;if(Fa(t))return!1;if(t=t.toLowerCase(),null!=Na[t])return Na[t];var e=document.createElement(t);return t.indexOf("-")>-1?Na[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Na[t]=/HTMLUnknownElement/.test(e.toString())}var Ra=b("text,number,password,search,email,tel,url");function Ua(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function qa(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Wa(t,e){return document.createElementNS(Pa[t],e)}function Ga(t){return document.createTextNode(t)}function Ka(t){return document.createComment(t)}function Xa(t,e,n){t.insertBefore(e,n)}function Ya(t,e){t.removeChild(e)}function Ja(t,e){t.appendChild(e)}function Qa(t){return t.parentNode}function Za(t){return t.nextSibling}function to(t){return t.tagName}function eo(t,e){t.textContent=e}function no(t,e){t.setAttribute(e,"")}var ro=Object.freeze({__proto__:null,createElement:qa,createElementNS:Wa,createTextNode:Ga,createComment:Ka,insertBefore:Xa,removeChild:Ya,appendChild:Ja,parentNode:Qa,nextSibling:Za,tagName:to,setTextContent:eo,setStyleScope:no}),io={create:function(t,e){ao(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ao(t,!0),ao(e))},destroy:function(t){ao(t,!0)}};function ao(t,e){var n=t.data.ref;if(o(n)){var r=t.context,a=t.componentInstance||t.elm,s=e?null:a,l=e?void 0:a;if(u(n))jn(n,r,[s],r,"template ref function");else{var c=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Zt(n),f=r.$refs;if(h||d)if(c){var p=h?f[n]:n.value;e?i(p)&&w(p,a):i(p)?p.includes(a)||p.push(a):h?(f[n]=[a],oo(r,n,f[n])):n.value=[a]}else if(h){if(e&&f[n]!==a)return;f[n]=l,oo(r,n,s)}else if(d){if(e&&n.value!==a)return;n.value=s}else 0}}}function oo(t,e,n){var r=t._setupState;r&&A(r,e)&&(Zt(r[e])?r[e].value=n:r[e]=n)}var so=new yt("",{},[]),lo=["create","activate","update","remove","destroy"];function co(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&uo(t,e)||s(t.isAsyncPlaceholder)&&a(e.asyncFactory.error))}function uo(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||Ra(r)&&Ra(i)}function ho(t,e,n){var r,i,a={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(a[i]=r);return a}function fo(t){var e,n,r={},l=t.modules,u=t.nodeOps;for(e=0;e<lo.length;++e)for(r[lo[e]]=[],n=0;n<l.length;++n)o(l[n][lo[e]])&&r[lo[e]].push(l[n][lo[e]]);function h(t){return new yt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function p(t,e,n,r,i,a,l){if(o(t.elm)&&o(a)&&(t=a[l]=wt(t)),t.isRootInsert=!i,!v(t,e,n,r)){var c=t.data,h=t.children,d=t.tag;o(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),A(t),z(t,h,e),o(c)&&M(t,e),y(n,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function v(t,e,n,r){var i=t.data;if(o(i)){var a=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return m(t,e),y(n,t.elm,r),s(a)&&g(t,e,n,r),!0}}function m(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(M(t,e),A(t)):(ao(t),e.push(t))}function g(t,e,n,i){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](so,s);e.push(s);break}y(n,t.elm,i)}function y(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function z(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function M(t,n){for(var i=0;i<r.create.length;++i)r.create[i](so,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(so,t),o(e.insert)&&n.push(t))}function A(t){var e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=kr)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function C(t,e,n,r,i,a){for(;r<=i;++r)p(n[r],a,t,e,!1,n,r)}function O(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function V(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(o(r.tag)?(S(r),O(r)):f(r.elm))}}function S(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=d(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&S(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function H(t,e,n,r,i){var s,l,c,h,d=0,f=0,v=e.length-1,m=e[0],g=e[v],y=n.length-1,b=n[0],z=n[y],w=!i;while(d<=v&&f<=y)a(m)?m=e[++d]:a(g)?g=e[--v]:co(m,b)?(I(m,b,r,n,f),m=e[++d],b=n[++f]):co(g,z)?(I(g,z,r,n,y),g=e[--v],z=n[--y]):co(m,z)?(I(m,z,r,n,y),w&&u.insertBefore(t,m.elm,u.nextSibling(g.elm)),m=e[++d],z=n[--y]):co(g,b)?(I(g,b,r,n,f),w&&u.insertBefore(t,g.elm,m.elm),g=e[--v],b=n[++f]):(a(s)&&(s=ho(e,d,v)),l=o(b.key)?s[b.key]:T(b,e,d,v),a(l)?p(b,r,t,m.elm,!1,n,f):(c=e[l],co(c,b)?(I(c,b,r,n,f),e[l]=void 0,w&&u.insertBefore(t,c.elm,m.elm)):p(b,r,t,m.elm,!1,n,f)),b=n[++f]);d>v?(h=a(n[y+1])?null:n[y+1].elm,C(t,h,n,f,y,r)):f>y&&V(e,d,v)}function T(t,e,n,r){for(var i=n;i<r;i++){var a=e[i];if(o(a)&&co(t,a))return i}}function I(t,e,n,i,l,c){if(t!==e){o(e.elm)&&o(i)&&(e=i[l]=wt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?L(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(o(f)&&w(e)){for(d=0;d<r.update.length;++d)r.update[d](t,e);o(d=f.hook)&&o(d=d.update)&&d(t,e)}a(e.text)?o(p)&&o(v)?p!==v&&H(h,p,v,n,c):o(v)?(o(t.text)&&u.setTextContent(h,""),C(h,null,v,0,v.length-1,n)):o(p)?V(p,0,p.length-1):o(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(t,e)}}}function k(t,e,n){if(s(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var _=b("attrs,class,staticClass,staticStyle,key");function L(t,e,n,r){var i,a=e.tag,l=e.data,c=e.children;if(r=r||l&&l.pre,e.elm=t,s(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(l)&&(o(i=l.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return m(e,n),!0;if(o(a)){if(o(c))if(t.hasChildNodes())if(o(i=l)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<c.length;d++){if(!h||!L(h,c[d],n,r)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else z(e,c,n);if(o(l)){var f=!1;for(var p in l)if(!_(p)){f=!0,M(e,n);break}!f&&l["class"]&&zr(l["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!a(e)){var l=!1,c=[];if(a(t))l=!0,p(e,c);else{var d=o(t.nodeType);if(!d&&co(t,e))I(t,e,c,null,null,i);else{if(d){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),s(n)&&L(t,e,c))return k(e,c,!0),t;t=h(t)}var f=t.elm,v=u.parentNode(f);if(p(e,c,f._leaveCb?null:v,u.nextSibling(f)),o(e.parent)){var m=e.parent,g=w(e);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=e.elm,g){for(var b=0;b<r.create.length;++b)r.create[b](so,m);var z=m.data.hook.insert;if(z.merged)for(var M=1;M<z.fns.length;M++)z.fns[M]()}else ao(m);m=m.parent}}o(v)?V([t],0,0):o(t.tag)&&O(t)}}return k(e,c,l),e.elm}o(t)&&O(t)}}var po={create:vo,update:vo,destroy:function(t){vo(t,so)}};function vo(t,e){(t.data.directives||e.data.directives)&&mo(t,e)}function mo(t,e){var n,r,i,a=t===so,o=e===so,s=yo(t.data.directives,t.context),l=yo(e.data.directives,e.context),c=[],u=[];for(n in l)r=s[n],i=l[n],r?(i.oldValue=r.value,i.oldArg=r.arg,zo(i,"update",e,t),i.def&&i.def.componentUpdated&&u.push(i)):(zo(i,"bind",e,t),i.def&&i.def.inserted&&c.push(i));if(c.length){var h=function(){for(var n=0;n<c.length;n++)zo(c[n],"inserted",e,t)};a?Fe(e,"insert",h):h()}if(u.length&&Fe(e,"postpatch",(function(){for(var n=0;n<u.length;n++)zo(u[n],"componentUpdated",e,t)})),!a)for(n in s)l[n]||zo(s[n],"unbind",t,t,o)}var go=Object.create(null);function yo(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=go),i[bo(r)]=r,e._setupState&&e._setupState.__sfc){var a=r.def||Ii(e,"_setupState","v-"+r.name);r.def="function"===typeof a?{bind:a,update:a}:a}r.def=r.def||Ii(e.$options,"directives",r.name,!0)}return i}function bo(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function zo(t,e,n,r,i){var a=t.def&&t.def[e];if(a)try{a(n.elm,t,n,r,i)}catch(il){Fn(il,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var wo=[io,po];function Mo(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!a(t.data.attrs)||!a(e.data.attrs))){var r,i,l,c=e.elm,u=t.data.attrs||{},h=e.data.attrs||{};for(r in(o(h.__ob__)||s(h._v_attr_proxy))&&(h=e.data.attrs=E({},h)),h)i=h[r],l=u[r],l!==i&&Ao(c,r,i,e.data.pre);for(r in(et||rt)&&h.value!==u.value&&Ao(c,"value",h.value),u)a(h[r])&&(Va(r)?c.removeAttributeNS(Oa,Sa(r)):wa(r)||c.removeAttribute(r))}}function Ao(t,e,n,r){r||t.tagName.indexOf("-")>-1?Co(t,e,n):Ca(e)?Ha(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):wa(e)?t.setAttribute(e,Aa(e,n)):Va(e)?Ha(n)?t.removeAttributeNS(Oa,Sa(e)):t.setAttributeNS(Oa,e,n):Co(t,e,n)}function Co(t,e,n){if(Ha(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Oo={create:Mo,update:Mo};function Vo(t,e){var n=e.elm,r=e.data,i=t.data;if(!(a(r.staticClass)&&a(r.class)&&(a(i)||a(i.staticClass)&&a(i.class)))){var s=Ta(e),l=n._transitionClasses;o(l)&&(s=_a(s,La(l))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var So,Ho={create:Vo,update:Vo},To="__r",Io="__c";function ko(t){if(o(t[To])){var e=et?"change":"input";t[e]=[].concat(t[To],t[e]||[]),delete t[To]}o(t[Io])&&(t.change=[].concat(t[Io],t.change||[]),delete t[Io])}function _o(t,e,n){var r=So;return function i(){var a=e.apply(null,arguments);null!==a&&Bo(t,i,n,r)}}var Lo=Un&&!(ot&&Number(ot[1])<=53);function Eo(t,e,n,r){if(Lo){var i=Kr,a=e;e=a._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return a.apply(this,arguments)}}So.addEventListener(t,e,lt?{capture:n,passive:r}:n)}function Bo(t,e,n,r){(r||So).removeEventListener(t,e._wrapper||e,n)}function Po(t,e){if(!a(t.data.on)||!a(e.data.on)){var n=e.data.on||{},r=t.data.on||{};So=e.elm||t.elm,ko(n),De(n,r,Eo,Bo,_o,e.context),So=void 0}}var xo,Do={create:Po,update:Po,destroy:function(t){return Po(t,so)}};function Fo(t,e){if(!a(t.data.domProps)||!a(e.data.domProps)){var n,r,i=e.elm,l=t.data.domProps||{},c=e.data.domProps||{};for(n in(o(c.__ob__)||s(c._v_attr_proxy))&&(c=e.data.domProps=E({},c)),l)n in c||(i[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===l[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var u=a(r)?"":String(r);jo(i,u)&&(i.value=u)}else if("innerHTML"===n&&Da(i.tagName)&&a(i.innerHTML)){xo=xo||document.createElement("div"),xo.innerHTML="<svg>".concat(r,"</svg>");var h=xo.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==l[n])try{i[n]=r}catch(il){}}}}function jo(t,e){return!t.composing&&("OPTION"===t.tagName||No(t,e)||$o(t,e))}function No(t,e){var n=!0;try{n=document.activeElement!==t}catch(il){}return n&&t.value!==e}function $o(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return y(n)!==y(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Ro={create:Fo,update:Fo},Uo=C((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function qo(t){var e=Wo(t.style);return t.staticStyle?E(t.staticStyle,e):e}function Wo(t){return Array.isArray(t)?B(t):"string"===typeof t?Uo(t):t}function Go(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=qo(i.data))&&E(r,n)}(n=qo(t.data))&&E(r,n);var a=t;while(a=a.parent)a.data&&(n=qo(a.data))&&E(r,n);return r}var Ko,Xo=/^--/,Yo=/\s*!important$/,Jo=function(t,e,n){if(Xo.test(e))t.style.setProperty(e,n);else if(Yo.test(n))t.style.setProperty(T(e),n.replace(Yo,""),"important");else{var r=Zo(e);if(Array.isArray(n))for(var i=0,a=n.length;i<a;i++)t.style[r]=n[i];else t.style[r]=n}},Qo=["Webkit","Moz","ms"],Zo=C((function(t){if(Ko=Ko||document.createElement("div").style,t=V(t),"filter"!==t&&t in Ko)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Qo.length;n++){var r=Qo[n]+e;if(r in Ko)return r}}));function ts(t,e){var n=e.data,r=t.data;if(!(a(n.staticStyle)&&a(n.style)&&a(r.staticStyle)&&a(r.style))){var i,s,l=e.elm,c=r.staticStyle,u=r.normalizedStyle||r.style||{},h=c||u,d=Wo(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?E({},d):d;var f=Go(e,!0);for(s in h)a(f[s])&&Jo(l,s,"");for(s in f)i=f[s],i!==h[s]&&Jo(l,s,null==i?"":i)}}var es={create:ts,update:ts},ns=/\s+/;function rs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ns).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function is(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ns).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function as(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&E(e,os(t.name||"v")),E(e,t),e}return"string"===typeof t?os(t):void 0}}var os=C((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),ss=Z&&!nt,ls="transition",cs="animation",us="transition",hs="transitionend",ds="animation",fs="animationend";ss&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(us="WebkitTransition",hs="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ds="WebkitAnimation",fs="webkitAnimationEnd"));var ps=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function vs(t){ps((function(){ps(t)}))}function ms(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),rs(t,e))}function gs(t,e){t._transitionClasses&&w(t._transitionClasses,e),is(t,e)}function ys(t,e,n){var r=zs(t,e),i=r.type,a=r.timeout,o=r.propCount;if(!i)return n();var s=i===ls?hs:fs,l=0,c=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),a+1),t.addEventListener(s,u)}var bs=/\b(transform|all)(,|$)/;function zs(t,e){var n,r=window.getComputedStyle(t),i=(r[us+"Delay"]||"").split(", "),a=(r[us+"Duration"]||"").split(", "),o=ws(i,a),s=(r[ds+"Delay"]||"").split(", "),l=(r[ds+"Duration"]||"").split(", "),c=ws(s,l),u=0,h=0;e===ls?o>0&&(n=ls,u=o,h=a.length):e===cs?c>0&&(n=cs,u=c,h=l.length):(u=Math.max(o,c),n=u>0?o>c?ls:cs:null,h=n?n===ls?a.length:l.length:0);var d=n===ls&&bs.test(r[us+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function ws(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Ms(e)+Ms(t[n])})))}function Ms(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function As(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=as(t.data.transition);if(!a(r)&&!o(n._enterCb)&&1===n.nodeType){var i=r.css,s=r.type,l=r.enterClass,c=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,v=r.appearActiveClass,m=r.beforeEnter,g=r.enter,b=r.afterEnter,z=r.enterCancelled,w=r.beforeAppear,M=r.appear,A=r.afterAppear,C=r.appearCancelled,O=r.duration,V=kr,S=kr.$vnode;while(S&&S.parent)V=S.context,S=S.parent;var H=!V._isMounted||!t.isRootInsert;if(!H||M||""===M){var T=H&&f?f:l,I=H&&v?v:d,k=H&&p?p:c,_=H&&w||m,L=H&&u(M)?M:g,E=H&&A||b,B=H&&C||z,P=y(h(O)?O.enter:O);0;var x=!1!==i&&!nt,D=Vs(L),F=n._enterCb=N((function(){x&&(gs(n,k),gs(n,I)),F.cancelled?(x&&gs(n,T),B&&B(n)):E&&E(n),n._enterCb=null}));t.data.show||Fe(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),L&&L(n,F)})),_&&_(n),x&&(ms(n,T),ms(n,I),vs((function(){gs(n,T),F.cancelled||(ms(n,k),D||(Os(P)?setTimeout(F,P):ys(n,s,F)))}))),t.data.show&&(e&&e(),L&&L(n,F)),x||D||F()}}}function Cs(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=as(t.data.transition);if(a(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var i=r.css,s=r.type,l=r.leaveClass,c=r.leaveToClass,u=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,v=r.leaveCancelled,m=r.delayLeave,g=r.duration,b=!1!==i&&!nt,z=Vs(f),w=y(h(g)?g.leave:g);0;var M=n._leaveCb=N((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(gs(n,c),gs(n,u)),M.cancelled?(b&&gs(n,l),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(A):A()}function A(){M.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(ms(n,l),ms(n,u),vs((function(){gs(n,l),M.cancelled||(ms(n,c),z||(Os(w)?setTimeout(M,w):ys(n,s,M)))}))),f&&f(n,M),b||z||M())}}function Os(t){return"number"===typeof t&&!isNaN(t)}function Vs(t){if(a(t))return!1;var e=t.fns;return o(e)?Vs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ss(t,e){!0!==e.data.show&&As(e)}var Hs=Z?{create:Ss,activate:Ss,remove:function(t,e){!0!==t.data.show?Cs(t,e):e()}}:{},Ts=[Oo,Ho,Do,Ro,es,Hs],Is=Ts.concat(wo),ks=fo({nodeOps:ro,modules:Is});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Fs(t,"input")}));var _s={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Fe(n,"postpatch",(function(){_s.componentUpdated(t,e,n)})):Ls(t,e,n.context),t._vOptions=[].map.call(t.options,Ps)):("textarea"===n.tag||Ra(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",xs),t.addEventListener("compositionend",Ds),t.addEventListener("change",Ds),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Ls(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,Ps);if(i.some((function(t,e){return!F(t,r[e])}))){var a=t.multiple?e.value.some((function(t){return Bs(t,i)})):e.value!==e.oldValue&&Bs(e.value,i);a&&Fs(t,"change")}}}};function Ls(t,e,n){Es(t,e,n),(et||rt)&&setTimeout((function(){Es(t,e,n)}),0)}function Es(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var a,o,s=0,l=t.options.length;s<l;s++)if(o=t.options[s],i)a=j(r,Ps(o))>-1,o.selected!==a&&(o.selected=a);else if(F(Ps(o),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function Bs(t,e){return e.every((function(e){return!F(e,t)}))}function Ps(t){return"_value"in t?t._value:t.value}function xs(t){t.target.composing=!0}function Ds(t){t.target.composing&&(t.target.composing=!1,Fs(t.target,"input"))}function Fs(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function js(t){return!t.componentInstance||t.data&&t.data.transition?t:js(t.componentInstance._vnode)}var Ns={bind:function(t,e,n){var r=e.value;n=js(n);var i=n.data&&n.data.transition,a=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,As(n,(function(){t.style.display=a}))):t.style.display=r?a:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=js(n);var a=n.data&&n.data.transition;a?(n.data.show=!0,r?As(n,(function(){t.style.display=t.__vOriginalDisplay})):Cs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},$s={model:_s,show:Ns},Rs={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Us(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Us(kn(e.children)):t}function qs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[V(r)]=i[r];return e}function Ws(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Gs(t){while(t=t.parent)if(t.data.transition)return!0}function Ks(t,e){return e.key===t.key&&e.tag===t.tag}var Xs=function(t){return t.tag||un(t)},Ys=function(t){return"show"===t.name},Js={name:"transition",props:Rs,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Xs),n.length)){0;var r=this.mode;0;var i=n[0];if(Gs(this.$vnode))return i;var a=Us(i);if(!a)return i;if(this._leaving)return Ws(t,i);var o="__transition-".concat(this._uid,"-");a.key=null==a.key?a.isComment?o+"comment":o+a.tag:c(a.key)?0===String(a.key).indexOf(o)?a.key:o+a.key:a.key;var s=(a.data||(a.data={})).transition=qs(this),l=this._vnode,u=Us(l);if(a.data.directives&&a.data.directives.some(Ys)&&(a.data.show=!0),u&&u.data&&!Ks(a,u)&&!un(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=E({},s);if("out-in"===r)return this._leaving=!0,Fe(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Ws(t,i);if("in-out"===r){if(un(a))return l;var d,f=function(){d()};Fe(s,"afterEnter",f),Fe(s,"enterCancelled",f),Fe(h,"delayLeave",(function(t){d=t}))}}return i}}},Qs=E({tag:String,moveClass:String},Rs);delete Qs.mode;var Zs={props:Qs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=_r(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],o=qs(this),s=0;s<i.length;s++){var l=i[s];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))a.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(r){var c=[],u=[];for(s=0;s<r.length;s++){l=r[s];l.data.transition=o,l.data.pos=l.elm.getBoundingClientRect(),n[l.key]?c.push(l):u.push(l)}this.kept=t(e,null,c),this.removed=u}return t(e,null,a)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(tl),t.forEach(el),t.forEach(nl),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;ms(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(hs,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(hs,t),n._moveCb=null,gs(n,e))})}})))},methods:{hasMove:function(t,e){if(!ss)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){is(n,t)})),rs(n,e),n.style.display="none",this.$el.appendChild(n);var r=zs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function tl(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function el(t){t.data.newPos=t.elm.getBoundingClientRect()}function nl(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var a=t.elm.style;a.transform=a.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),a.transitionDuration="0s"}}var rl={Transition:Js,TransitionGroup:Zs};ra.config.mustUseProp=za,ra.config.isReservedTag=Fa,ra.config.isReservedAttr=ya,ra.config.getTagNamespace=ja,ra.config.isUnknownElement=$a,E(ra.options.directives,$s),E(ra.options.components,rl),ra.prototype.__patch__=Z?ks:P,ra.prototype.$mount=function(t,e){return t=t&&Z?Ua(t):void 0,Br(this,t,e)},Z&&setTimeout((function(){W.devtools&&ht&&ht.emit("init",ra)}),0)},9684:function(t,e,n){"use strict";n.d(e,{Jn:function(){return G},KN:function(){return Y},Mq:function(){return X},Xd:function(){return $},ZF:function(){return K},qX:function(){return R}});n(7658);var r=n(7142),i=n(5168),a=n(223),o=n(3831);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(l(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function l(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.9.3",h=new i.Yd("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",v="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",z="@firebase/database-compat",w="@firebase/functions",M="@firebase/functions-compat",A="@firebase/installations",C="@firebase/installations-compat",O="@firebase/messaging",V="@firebase/messaging-compat",S="@firebase/performance",H="@firebase/performance-compat",T="@firebase/remote-config",I="@firebase/remote-config-compat",k="@firebase/storage",_="@firebase/storage-compat",L="@firebase/firestore",E="@firebase/firestore-compat",B="firebase",P="9.17.1",x="[DEFAULT]",D={[c]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[v]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[z]:"fire-rtdb-compat",[w]:"fire-fn",[M]:"fire-fn-compat",[A]:"fire-iid",[C]:"fire-iid-compat",[O]:"fire-fcm",[V]:"fire-fcm-compat",[S]:"fire-perf",[H]:"fire-perf-compat",[T]:"fire-rc",[I]:"fire-rc-compat",[k]:"fire-gcs",[_]:"fire-gcs-compat",[L]:"fire-fst",[E]:"fire-fst-compat","fire-js":"fire-js",[B]:"fire-js-all"},F=new Map,j=new Map;function N(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $(t){const e=t.name;if(j.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;j.set(e,t);for(const n of F.values())N(n,t);return!0}function R(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},q=new a.LL("app","Firebase",U);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=P;function K(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:x,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw q.create("bad-app-name",{appName:String(o)});if(n||(n=(0,a.aH)()),!n)throw q.create("no-options");const s=F.get(o);if(s){if((0,a.vZ)(n,s.options)&&(0,a.vZ)(i,s.config))return s;throw q.create("duplicate-app",{appName:o})}const l=new r.H0(o);for(const r of j.values())l.addComponent(r);const c=new W(n,i,l);return F.set(o,c),c}function X(t=x){const e=F.get(t);if(!e&&t===x)return K();if(!e)throw q.create("no-app",{appName:t});return e}function Y(t,e,n){var i;let a=null!==(i=D[t])&&void 0!==i?i:t;n&&(a+=`-${n}`);const o=a.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${a}" with version "${e}":`];return o&&t.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}$(new r.wA(`${a}-version`,(()=>({library:a,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-heartbeat-database",Q=1,Z="firebase-heartbeat-store";let tt=null;function et(){return tt||(tt=(0,o.X3)(J,Q,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Z)}}}).catch((t=>{throw q.create("idb-open",{originalErrorMessage:t.message})}))),tt}async function nt(t){try{const e=await et();return e.transaction(Z).objectStore(Z).get(it(t))}catch(e){if(e instanceof a.ZR)h.warn(e.message);else{const t=q.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function rt(t,e){try{const n=await et(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(e,it(t)),r.done}catch(n){if(n instanceof a.ZR)h.warn(n.message);else{const t=q.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function it(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=1024,ot=2592e6;class st{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ut(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=lt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ot})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=lt(),{heartbeatsToSend:e,unsentEntries:n}=ct(this._heartbeatsCache.heartbeats),r=(0,a.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function lt(){const t=new Date;return t.toISOString().substring(0,10)}function ct(t,e=at){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),ht(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ht(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await nt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ht(t){return(0,a.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){$(new r.wA("platform-logger",(t=>new s(t)),"PRIVATE")),$(new r.wA("heartbeat",(t=>new st(t)),"PRIVATE")),Y(c,u,t),Y(c,u,"esm2017"),Y("fire-js","")}dt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=a){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=a){return this.instances.has(t)}getOptions(t=a){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&a.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&t(a,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=a){return this.component?this.component.multipleInstances?t:a:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===a?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=s[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?a[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},4466:function(t,e,n){"use strict";n.d(e,{IH:function(){return ye}});n(7658);var r=n(9684),i=n(5168),a=n(223),o=n(7142),s=(n(2801),n(3831));const l="@firebase/installations",c="0.6.3",u=1e4,h=`w:${c}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,v="installations",m="Installations",g={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new a.LL(v,m,g);function b(t){return t instanceof a.ZR&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z({projectId:t}){return`${f}/projects/${t}/installations`}function w(t){return{token:t.token,requestStatus:2,expiresIn:V(t.expiresIn),creationTime:Date.now()}}async function M(t,e){const n=await e.json(),r=n.error;return y.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function A({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function C(t,{refreshToken:e}){const n=A(t);return n.append("Authorization",S(e)),n}async function O(t){const e=await t();return e.status>=500&&e.status<600?t():e}function V(t){return Number(t.replace("s","000"))}function S(t){return`${d} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=z(t),i=A(t),a=e.getImmediate({optional:!0});if(a){const t=await a.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:d,appId:t.appId,sdkVersion:h},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await O((()=>fetch(r,s)));if(l.ok){const t=await l.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:w(t.authToken)};return e}throw await M("Create Installation",l)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=/^[cdef][\w-]{21}$/,_="";function L(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=E(t);return k.test(n)?n:_}catch(t){return _}}function E(t){const e=I(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=new Map;function x(t,e){const n=B(t);D(n,e),F(n,e)}function D(t,e){const n=P.get(t);if(n)for(const r of n)r(e)}function F(t,e){const n=N();n&&n.postMessage({key:t,fid:e}),$()}let j=null;function N(){return!j&&"BroadcastChannel"in self&&(j=new BroadcastChannel("[Firebase] FID Change"),j.onmessage=t=>{D(t.data.key,t.data.fid)}),j}function $(){0===P.size&&j&&(j.close(),j=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="firebase-installations-database",U=1,q="firebase-installations-store";let W=null;function G(){return W||(W=(0,s.X3)(R,U,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(q)}}})),W}async function K(t,e){const n=B(t),r=await G(),i=r.transaction(q,"readwrite"),a=i.objectStore(q),o=await a.get(n);return await a.put(e,n),await i.done,o&&o.fid===e.fid||x(t,e.fid),e}async function X(t){const e=B(t),n=await G(),r=n.transaction(q,"readwrite");await r.objectStore(q).delete(e),await r.done}async function Y(t,e){const n=B(t),r=await G(),i=r.transaction(q,"readwrite"),a=i.objectStore(q),o=await a.get(n),s=e(o);return void 0===s?await a.delete(n):await a.put(s,n),await i.done,!s||o&&o.fid===s.fid||x(t,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){let e;const n=await Y(t.appConfig,(n=>{const r=Q(n),i=Z(t,r);return e=i.registrationPromise,i.installationEntry}));return n.fid===_?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Q(t){const e=t||{fid:L(),registrationStatus:0};return rt(e)}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(y.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tt(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await H(t,e);return K(t.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await X(t.appConfig):await K(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t.appConfig);while(1===e.registrationStatus)await T(100),e=await nt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await J(t);return n||e}return e}function nt(t){return Y(t,(t=>{if(!t)throw y.create("installation-not-found");return rt(t)}))}function rt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at({appConfig:t,heartbeatServiceProvider:e},n){const r=ot(t,n),i=C(t,n),a=e.getImmediate({optional:!0});if(a){const t=await a.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:h,appId:t.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await O((()=>fetch(r,s)));if(l.ok){const t=await l.json(),e=w(t);return e}throw await M("Generate Auth Token",l)}function ot(t,{fid:e}){return`${z(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e=!1){let n;const r=await Y(t.appConfig,(r=>{if(!ht(r))throw y.create("not-registered");const i=r.authToken;if(!e&&dt(i))return r;if(1===i.requestStatus)return n=lt(t,e),r;{if(!navigator.onLine)throw y.create("app-offline");const e=pt(r);return n=ut(t,e),e}})),i=n?await n:r.authToken;return i}async function lt(t,e){let n=await ct(t.appConfig);while(1===n.authToken.requestStatus)await T(100),n=await ct(t.appConfig);const r=n.authToken;return 0===r.requestStatus?st(t,e):r}function ct(t){return Y(t,(t=>{if(!ht(t))throw y.create("not-registered");const e=t.authToken;return vt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function ut(t,e){try{const n=await at(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await K(t.appConfig,r),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await K(t.appConfig,n)}else await X(t.appConfig);throw n}}function ht(t){return void 0!==t&&2===t.registrationStatus}function dt(t){return 2===t.requestStatus&&!ft(t)}function ft(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vt(t){return 1===t.requestStatus&&t.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:r}=await J(e);return r?r.catch(console.error):st(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t,e=!1){const n=t;await yt(n);const r=await st(n,e);return r.token}async function yt(t){const{registrationPromise:e}=await J(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(t){if(!t||!t.options)throw zt("App Configuration");if(!t.name)throw zt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function zt(t){return y.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="installations",Mt="installations-internal",At=t=>{const e=t.getProvider("app").getImmediate(),n=bt(e),i=(0,r.qX)(e,"heartbeat"),a={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return a},Ct=t=>{const e=t.getProvider("app").getImmediate(),n=(0,r.qX)(e,wt).getImmediate(),i={getId:()=>mt(n),getToken:t=>gt(n,t)};return i};function Ot(){(0,r.Xd)(new o.wA(wt,At,"PUBLIC")),(0,r.Xd)(new o.wA(Mt,Ct,"PRIVATE"))}Ot(),(0,r.KN)(l,c),(0,r.KN)(l,c,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt="analytics",St="firebase_id",Ht="origin",Tt=6e4,It="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kt="https://www.googletagmanager.com/gtag/js",_t=new i.Yd("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Et(t,e){const n=document.createElement("script");n.src=`${kt}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Bt(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Pt(t,e,n,r,i,a){const o=r[i];try{if(o)await e[o];else{const t=await Lt(n),r=t.find((t=>t.measurementId===i));r&&await e[r.appId]}}catch(s){_t.error(s)}t("config",i,a)}async function xt(t,e,n,r,i){try{let a=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await Lt(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){a=[];break}a.push(i)}}0===a.length&&(a=Object.values(e)),await Promise.all(a),t("event",r,i||{})}catch(a){_t.error(a)}}function Dt(t,e,n,r){async function i(i,a,o){try{"event"===i?await xt(t,e,n,a,o):"config"===i?await Pt(t,e,n,r,a,o):"consent"===i?t("consent","update",o):t("set",a)}catch(s){_t.error(s)}}return i}function Ft(t,e,n,r,i){let a=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(a=window[i]),window[i]=Dt(a,t,e,n),{gtagCore:a,wrappedGtag:window[i]}}function jt(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kt)&&n.src.includes(t))return n;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},$t=new a.LL("analytics","Analytics",Nt),Rt=30,Ut=1e3;class qt{constructor(t={},e=Ut){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Wt=new qt;function Gt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Kt(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Gt(r)},a=It.replace("{app-id}",n),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(s){}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function Xt(t,e=Wt,n){const{appId:r,apiKey:i,measurementId:a}=t.options;if(!r)throw $t.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Zt;return setTimeout((async()=>{s.abort()}),void 0!==n?n:Tt),Yt({appId:r,apiKey:i,measurementId:a},o,s,e)}async function Yt(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Wt){var o;const{appId:s,measurementId:l}=t;try{await Jt(r,e)}catch(c){if(l)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===c||void 0===c?void 0:c.message}]`),{appId:s,measurementId:l};throw c}try{const e=await Kt(t);return i.deleteThrottleMetadata(s),e}catch(c){const e=c;if(!Qt(e)){if(i.deleteThrottleMetadata(s),l)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:s,measurementId:l};throw c}const u=503===Number(null===(o=null===e||void 0===e?void 0:e.customData)||void 0===o?void 0:o.httpStatus)?(0,a.$s)(n,i.intervalMillis,Rt):(0,a.$s)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(s,h),_t.debug(`Calling attemptFetch again in ${u} millis`),Yt(t,h,r,i)}}function Jt(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(a),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function Qt(t){if(!(t instanceof a.ZR)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class Zt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te,ee;async function ne(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}function re(t){ee=t}function ie(t){te=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(){if(!(0,a.hl)())return _t.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,a.eu)()}catch(t){return _t.warn($t.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function oe(t,e,n,r,i,a,o){var s;const l=Xt(t);l.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>_t.error(t))),e.push(l);const c=ae().then((t=>t?r.getId():void 0)),[u,h]=await Promise.all([l,c]);jt(a)||Et(a,u.measurementId),ee&&(i("consent","default",ee),re(void 0)),i("js",new Date);const d=null!==(s=null===o||void 0===o?void 0:o.config)&&void 0!==s?s:{};return d[Ht]="firebase",d.update=!0,null!=h&&(d[St]=h),i("config",u.measurementId,d),te&&(i("set",te),ie(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.app=t}_delete(){return delete le[this.app.options.appId],Promise.resolve()}}let le={},ce=[];const ue={};let he,de,fe="dataLayer",pe="gtag",ve=!1;function me(){const t=[];if((0,a.ru)()&&t.push("This is a browser extension environment."),(0,a.zI)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function ge(t,e,n){me();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw $t.create("no-api-key");_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=le[r])throw $t.create("already-exists",{id:r});if(!ve){Bt(fe);const{wrappedGtag:t,gtagCore:e}=Ft(le,ce,ue,fe,pe);de=t,he=e,ve=!0}le[r]=oe(t,ce,ue,e,he,fe,n);const i=new se(t);return i}function ye(t=(0,r.Mq)()){t=(0,a.m9)(t);const e=(0,r.qX)(t,Vt);return e.isInitialized()?e.getImmediate():be(t)}function be(t,e={}){const n=(0,r.qX)(t,Vt);if(n.isInitialized()){const t=n.getImmediate();if((0,a.vZ)(e,n.getOptions()))return t;throw $t.create("already-initialized")}const i=n.initialize({options:e});return i}function ze(t,e,n,r){t=(0,a.m9)(t),ne(de,le[t.app.options.appId],e,n,r).catch((t=>_t.error(t)))}const we="@firebase/analytics",Me="0.9.3";function Ae(){function t(t){try{const e=t.getProvider(Vt).getImmediate();return{logEvent:(t,n,r)=>ze(e,t,n,r)}}catch(e){throw $t.create("interop-component-reg-failed",{reason:e})}}(0,r.Xd)(new o.wA(Vt,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return ge(n,r,e)}),"PUBLIC")),(0,r.Xd)(new o.wA("analytics-internal",t,"PRIVATE")),(0,r.KN)(we,Me),(0,r.KN)(we,Me,"esm2017")}Ae()},7795:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(9684),i="firebase",a="9.17.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,a,"app")},8829:function(t,e,n){"use strict";n.d(e,{Xb:function(){return fe},v0:function(){return Ar},Aj:function(){return be},e5:function(){return pe},w7:function(){return ze},ck:function(){return me}});n(7658);var r=n(223),i=n(9684),a=n(5168);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var s=n(7142);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.LL("auth","Firebase",l()),h=new a.Yd("@firebase/auth");function d(t,...e){h.logLevel<=a["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function v(t,e,n){const i=Object.assign(Object.assign({},c()),{[e]:n}),a=new r.LL("auth","Firebase",i);return a.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function g(t,e,...n){if(!t)throw m(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=new Map;function w(t){b(t instanceof Function,"Expected a class definition");let e=z.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,z.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const a=n.initialize({options:e});return a}function A(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function O(){return"http:"===V()||"https:"===V()}function V(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function H(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function B(t,e,n,i,a={}){return P(t,a,(async()=>{let a={},o={};i&&("GET"===e?o=i:a={body:JSON.stringify(i)});const s=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),k.fetch()(D(t,t.config.apiHost,n,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},a))}))}async function P(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},_),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw j(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const e=r.ok?a.errorMessage:a.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",a);if("USER_DISABLED"===n)throw j(t,"user-disabled",a);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(t,s,o);f(t,s)}}catch(a){if(a instanceof r.ZR)throw a;f(t,"network-request-failed")}}async function x(t,e,n,r,i={}){const a=await B(t,e,n,r,i);return"mfaPendingCredential"in a&&f(t,"multi-factor-auth-required",{_serverResponse:a}),a}function D(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?I(t.config,i):`${t.config.apiScheme}://${i}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(t,e){return B(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return B(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),a=W(i);g(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const o="object"===typeof a.firebase?a.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:a,token:i,authTime:R(q(a.auth_time)),issuedAtTime:R(q(a.iat)),expirationTime:R(q(a.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function W(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(a){return d("Caught error parsing JWT payload as JSON",null===a||void 0===a?void 0:a.toString()),null}}function G(t){const e=W(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=R(this.lastLoginAt),this.creationTime=R(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await K(t,$(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const o=(null===(e=a.providerUserInfo)||void 0===e?void 0:e.length)?et(a.providerUserInfo):[],s=tt(t.providerData,o),l=t.isAnonymous,c=!(t.email&&a.passwordHash)&&!(null===s||void 0===s?void 0:s.length),u=!!l&&c,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new J(a.createdAt,a.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await P(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,o=D(t,i,"/v1/token",`key=${a}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,a=new rt;return n&&(g("string"===typeof n,"internal-error",{appName:t}),a.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:t}),a.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class at{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return U(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new at(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,N(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,a,o,s,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(a=e.photoURL)&&void 0!==a?a:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:z,isAnonymous:w,providerData:M,stsTokenManager:A}=e;g(b&&A,t,"internal-error");const C=rt.fromJSON(this.name,A);g("string"===typeof b,t,"internal-error"),it(u,t.name),it(h,t.name),g("boolean"===typeof z,t,"internal-error"),g("boolean"===typeof w,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(v,t.name),it(m,t.name),it(y,t.name);const O=new at({uid:b,auth:t,email:h,emailVerified:z,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:y});return M&&Array.isArray(M)&&(O.providerData=M.map((t=>Object.assign({},t)))),v&&(O._redirectEventId=v),O}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new at({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const st=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=lt(this.userKey,r.apiKey,i),this.fullPersistenceKey=lt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?at._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(w(st),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||w(st);const a=lt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(a);if(e){const n=at._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch(l){}const s=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],o&&await i._set(a,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(a)}catch(l){}}))),new ct(i,t,n)):new ct(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(vt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function vt(t=(0,r.z$)()){return/android/i.test(t)}function mt(t=(0,r.z$)()){return/blackberry/i.test(t)}function gt(t=(0,r.z$)()){return/webos/i.test(t)}function yt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bt(t=(0,r.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function zt(){return(0,r.w1)()&&10===document.documentMode}function wt(t=(0,r.z$)()){return yt(t)||vt(t)||gt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Mt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e=[]){let n;switch(t){case"Browser":n=ut((0,r.z$)());break;case"Worker":n=`${ut((0,r.z$)())}-${t}`;break;default:n=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${a}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.beforeStateQueue=new Ct(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,a=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==a||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(a)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=H()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),a=this._isInitialized?Promise.resolve():this._initializationPromise;return g(a,this,"internal-error"),a.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=At(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Vt(t){return(0,r.m9)(t)}class St{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ht(t,e,n){const r=Vt(t);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),a=Tt(e),{host:o,port:s}=It(e),l=null===s?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_t()}function Tt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function It(t){const e=Tt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:kt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:kt(e)}}}function kt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _t(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(t,e){return B(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bt(t,e){return x(t,"POST","/v1/accounts:signInWithPassword",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",E(t,e))}async function xt(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Lt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Dt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Dt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Bt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Et(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return x(t,"POST","/v1/accounts:signInWithIdp",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="http://localhost";class Nt extends Lt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Nt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Nt(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Ft(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Ft(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ft(t,e)}buildRequest(){const t={requestUri:jt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t,e){return B(t,"POST","/v1/accounts:sendVerificationCode",E(t,e))}async function Rt(t,e){return x(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,e))}async function Ut(t,e){const n=await x(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const qt={["USER_NOT_FOUND"]:"user-not-found"};async function Wt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return x(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,n),qt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Lt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Gt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Gt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Rt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ut(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Wt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Gt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],a=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return a||i||n||e||t}class Yt{constructor(t){var e,n,i,a,o,s;const l=(0,r.zd)((0,r.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Kt(null!==(i=l["mode"])&&void 0!==i?i:null);g(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(a=l["continueUrl"])&&void 0!==a?a:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=Xt(t);try{return new Yt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(){this.providerId=Jt.PROVIDER_ID}static credential(t,e){return Dt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Yt.parseLink(e);return g(n,"argument-error"),Dt._fromEmailAndCode(t,n.code,n.tenantId)}}Jt.PROVIDER_ID="password",Jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Qt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends Zt{constructor(){super("facebook.com")}static credential(t){return Nt._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return te.credential(t.oauthAccessToken)}catch(e){return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com",te.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends Zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Nt._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ee.credential(e,n)}catch(r){return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com",ee.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends Zt{constructor(){super("github.com")}static credential(t){return Nt._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ne.credential(t.oauthAccessToken)}catch(e){return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com",ne.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends Zt{constructor(){super("twitter.com")}static credential(t,e){return Nt._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return re.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e){return x(t,"POST","/v1/accounts:signUp",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.TWITTER_SIGN_IN_METHOD="twitter.com",re.PROVIDER_ID="twitter.com";class ae{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await at._fromIdTokenResponse(t,n,r),a=oe(n),o=new ae({user:i,providerId:a,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=oe(n);return new ae({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function oe(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,se.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new se(t,e,n,r)}}function le(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw se._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e,n=!1){const r=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ae._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ue(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const a=await K(t,le(r,i,e,t),n);g(a.idToken,r,"internal-error");const o=W(a.idToken);g(o,r,"internal-error");const{sub:s}=o;return g(t.uid===s,r,"user-mismatch"),ae._forOperation(t,i,a)}catch(a){throw"auth/user-not-found"===(null===a||void 0===a?void 0:a.code)&&f(r,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e,n=!1){const r="signIn",i=await le(t,r,e),a=await ae._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(a.user),a}async function de(t,e){return he(Vt(t),e)}async function fe(t,e,n){const r=Vt(t),i=await ie(r,{returnSecureToken:!0,email:e,password:n}),a=await ae._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(a.user),a}function pe(t,e,n){return de((0,r.m9)(t),Jt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ve(t,e){return B(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=(0,r.m9)(t),a=await i.getIdToken(),o={idToken:a,displayName:e,photoUrl:n,returnSecureToken:!0},s=await K(i,ve(i.auth,o));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const l=i.providerData.find((({providerId:t})=>"password"===t));l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function ge(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function ye(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function be(t,e,n,i){return(0,r.m9)(t).onAuthStateChanged(e,n,i)}function ze(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(t,e){return B(t,"POST","/v2/accounts/mfaEnrollment:start",E(t,e))}function Me(t,e){return B(t,"POST","/v2/accounts/mfaEnrollment:finalize",E(t,e))}new WeakMap;const Ae="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ae,"1"),this.storage.removeItem(Ae),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){const t=(0,r.z$)();return dt(t)||yt(t)}const Ve=1e3,Se=10;class He extends Ce{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Oe()&&Mt(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);zt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Se):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Ve)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}He.type="LOCAL";const Te=He;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Ce{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ie.type="SESSION";const ke=Ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Le(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,a=this.handlersMap[r];if(!(null===a||void 0===a?void 0:a.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(a).map((async t=>t(e.origin,i))),s=await _e(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ee(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.receivers=[];class Be{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise(((o,s)=>{const l=Ee("",20);r.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);a={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[r.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function xe(t){Pe().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return"undefined"!==typeof Pe()["WorkerGlobalScope"]&&"function"===typeof Pe()["importScripts"]}async function Fe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function je(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ne(){return De()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="firebaseLocalStorageDb",Re=1,Ue="firebaseLocalStorage",qe="fbase_key";class We{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Ge(t,e){return t.transaction([Ue],e?"readwrite":"readonly").objectStore(Ue)}function Ke(){const t=indexedDB.deleteDatabase($e);return new We(t).toPromise()}function Xe(){const t=indexedDB.open($e,Re);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ue,{keyPath:qe})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ue)?e(n):(n.close(),await Ke(),e(await Xe()))}))}))}async function Ye(t,e,n){const r=Ge(t,!0).put({[qe]:e,value:n});return new We(r).toPromise()}async function Je(t,e){const n=Ge(t,!1).get(e),r=await new We(n).toPromise();return void 0===r?null:r.value}function Qe(t,e){const n=Ge(t,!0).delete(e);return new We(n).toPromise()}const Ze=800,tn=3;class en{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return De()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Le._getInstance(Ne()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Fe(),!this.activeServiceWorker)return;this.sender=new Be(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&je()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xe();return await Ye(t,Ae,"1"),await Qe(t,Ae),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ye(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Je(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Qe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ge(t,!1).getAll();return new We(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ze)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}en.type="LOCAL";const nn=en;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){return B(t,"POST","/v2/accounts/mfaSignIn:start",E(t,e))}function an(t,e){return B(t,"POST","/v2/accounts/mfaSignIn:finalize",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function sn(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",on().appendChild(r)}))}function ln(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ln("rcb"),new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn="recaptcha";async function un(t,e,n){var r;const i=await n.verify();try{let a;if(g("string"===typeof i,t,"argument-error"),g(n.type===cn,t,"argument-error"),a="string"===typeof e?{phoneNumber:e}:e,"session"in a){const e=a.session;if("phoneNumber"in a){g("enroll"===e.type,t,"internal-error");const n=await we(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;g(n,t,"missing-multi-factor-info");const o=await rn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await $t(t,{phoneNumber:a.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(t){this.providerId=hn.PROVIDER_ID,this.auth=Vt(t)}verifyPhoneNumber(t,e){return un(this.auth,t,(0,r.m9)(e))}static credential(t,e){return Gt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return hn.credentialFromTaggedObject(e)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Gt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dn(t,e){return e?w(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.PROVIDER_ID="phone",hn.PHONE_SIGN_IN_METHOD="phone";class fn extends Lt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ft(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ft(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ft(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function pn(t){return he(t.auth,new fn(t),t.bypassAuthState)}function vn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ue(n,new fn(t),t.bypassAuthState)}async function mn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ce(n,new fn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=t;if(a)return void this.reject(a);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pn;case"linkViaPopup":case"linkViaRedirect":return mn;case"reauthViaPopup":case"reauthViaRedirect":return vn;default:f(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new T(2e3,1e4);class bn extends gn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Ee();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,yn.get())};t()}}bn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zn="pendingRedirect",wn=new Map;class Mn extends gn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=wn.get(this.auth._key());if(!t){try{const e=await An(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}wn.set(this.auth._key(),t)}return this.bypassAuthState||wn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function An(t,e){const n=Vn(e),r=On(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Cn(t,e){wn.set(t._key(),e)}function On(t){return w(t._redirectPersistence)}function Vn(t){return lt(zn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e,n=!1){const r=Vt(t),i=dn(r,e),a=new Mn(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=6e5;class Tn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!_n(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!kn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Hn&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(t))}saveEventToCache(t){this.cachedEventUids.add(In(t)),this.lastProcessedEventTime=Date.now()}}function In(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function kn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function _n(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e={}){return B(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bn=/^https?/;async function Pn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ln(t);for(const r of e)try{if(xn(r))return}catch(n){}f(t,"unauthorized-domain")}function xn(t){const e=C(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Bn.test(n))return!1;if(En.test(t))return r===t;const i=t.replace(/\./g,"\\."),a=new RegExp("^(.+\\."+i+"|"+i+")$","i");return a.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new T(3e4,6e4);function Fn(){const t=Pe().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function jn(t){return new Promise(((e,n)=>{var r,i,a;function o(){Fn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fn(),n(p(t,"network-request-failed"))},timeout:Dn.get()})}if(null===(i=null===(r=Pe().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(a=Pe().gapi)||void 0===a?void 0:a.load)){const e=ln("iframefcb");return Pe()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Nn=null,t}))}let Nn=null;function $n(t){return Nn=Nn||jn(t),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new T(5e3,15e3),Un="__/auth/iframe",qn="emulator/auth/iframe",Wn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?I(e,qn):`https://${t.config.authDomain}/${Un}`,a={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=Gn.get(t.config.apiHost);o&&(a.eid=o);const s=t._getFrameworks();return s.length&&(a.fw=s.join(",")),`${n}?${(0,r.xO)(a).slice(1)}`}async function Xn(t){const e=await $n(t),n=Pe().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Kn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),a=Pe().setTimeout((()=>{r(i)}),Rn.get());function o(){Pe().clearTimeout(a),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jn=500,Qn=600,Zn="_blank",tr="http://localhost";class er{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function nr(t,e,n,i=Jn,a=Qn){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Yn),{width:i.toString(),height:a.toString(),top:o,left:s}),u=(0,r.z$)().toLowerCase();n&&(l=ft(u)?Zn:n),ht(u)&&(e=e||tr,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(bt(u)&&"_self"!==l)return rr(e||"",l),new er(null);const d=window.open(e||"",l,h);g(d,t,"popup-blocked");try{d.focus()}catch(f){}return new er(d)}function rr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="__/auth/handler",ar="emulator/auth/handler";function or(t,e,n,a,o,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:a,v:i.Jn,eventId:o};if(e instanceof Qt){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))l[t]=e}if(e instanceof Zt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${sr(t)}?${(0,r.xO)(c).slice(1)}`}function sr({config:t}){return t.emulator?I(t,ar):`https://${t.authDomain}/${ir}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="webStorageSupport";class cr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ke,this._completeRedirectFn=Sn,this._overrideRedirectResult=Cn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const a=or(t,e,n,C(),r);return nr(t,a,Ee())}async _openRedirect(t,e,n,r){return await this._originValidation(t),xe(or(t,e,n,C(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Xn(t),n=new Tn(t);return e.register("authEvent",(e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(lr,{type:lr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[lr];void 0!==i&&e(!!i),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Pn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const ur=cr;class hr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class dr extends hr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new dr(t)}_finalizeEnroll(t,e,n){return Me(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return an(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fr{constructor(){}static assertion(t){return dr._fromCredential(t)}}fr.FACTOR_ID="phone";var pr="@firebase/auth",vr="0.21.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yr(t){(0,i.Xd)(new s.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:a,authDomain:o}=r.options;return((e,r)=>{g(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:At(t)},s=new Ot(e,r,i);return A(s,n),s})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new s.wA("auth-internal",(t=>{const e=Vt(t.getProvider("auth").getImmediate());return(t=>new mr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(pr,vr,gr(t)),(0,i.KN)(pr,vr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=300,zr=(0,r.Pz)("authIdTokenMaxAge")||br;let wr=null;const Mr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zr)return;const i=null===n||void 0===n?void 0:n.token;wr!==i&&(wr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ar(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=M(t,{popupRedirectResolver:ur,persistence:[nn,Te,ke]}),a=(0,r.Pz)("authTokenSyncURL");if(a){const t=Mr(a);ye(n,t,(()=>t(n.currentUser))),ge(n,(e=>t(e)))}const o=(0,r.q4)("auth");return o&&Ht(n,`http://${o}`),n}yr("Browser")},36:function(t,e,n){"use strict";n.d(e,{hJ:function(){return fu},oe:function(){return mh},JU:function(){return pu},QT:function(){return hh},PL:function(){return fh},ad:function(){return Su},pl:function(){return ph},r7:function(){return vh}});n(7658),n(2801);var r,i=n(9684),a=n(7142),o=n(5168),s=n(223),l=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),c={},u=u||{},h=l||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function v(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function z(t,e,n){return z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,z.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function M(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return e.prototype[n].apply(t,i)}}function A(){this.s=this.s,this.o=this.o}var C=0;A.prototype.s=!1,A.prototype.na=function(){this.s||(this.s=!0,this.M(),0==C)||v(this)},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const O=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function V(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function H(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function I(t){return/^[\s\xa0]*$/.test(t)}var k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _(t,e){return t<e?-1:t>e?1:0}function L(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function E(t){return-1!=L().indexOf(t)}function B(t){return B[" "](t),t}function P(t){var e=X;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}B[" "]=d;var x,D=E("Opera"),F=E("Trident")||E("MSIE"),j=E("Edge"),N=j||F,$=E("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),R=-1!=L().toLowerCase().indexOf("webkit")&&!E("Edge");function U(){var t=h.document;return t?t.documentMode:void 0}t:{var q="",W=function(){var t=L();return $?/rv:([^\);]+)(\)|;)/.exec(t):j?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):R?/WebKit\/(\S+)/.exec(t):D?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(W&&(q=W?W[1]:""),F){var G=U();if(null!=G&&G>parseFloat(q)){x=String(G);break t}}x=q}var K,X={};function Y(){return P((function(){let t=0;const e=k(String(x)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",a=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==i[0].length&&0==a[0].length)break;t=_(0==i[1].length?0:parseInt(i[1],10),0==a[1].length?0:parseInt(a[1],10))||_(0==i[2].length,0==a[2].length)||_(i[2],a[2]),i=i[3],a=a[3]}while(0==t)}return 0<=t}))}if(h.document&&F){var J=U();K=J||(parseInt(x,10)||void 0)}else K=void 0;var Q=K;function Z(t,e){if(H.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{B(e.nodeName);var i=!0;break t}catch(a){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}M(Z,H);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function at(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<st.length;e++)n=st[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ct(t){this.src=t,this.g={},this.h=0}function ut(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],a=O(i,e);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,r){for(var i=0;i<t.length;++i){var a=t[i];if(!a.ba&&a.listener==e&&a.capture==!!n&&a.ha==r)return i}return-1}ct.prototype.add=function(t,e,n,r,i){var a=t.toString();t=this.g[a],t||(t=this.g[a]=[],this.h++);var o=ht(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rt(e,this.src,a,!!r,i),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,r,i){if(r&&r.once)return gt(t,e,n,r,i);if(Array.isArray(e)){for(var a=0;a<e.length;a++)pt(t,e[a],n,r,i);return null}return n=Ct(n),t&&t[et]?t.N(e,n,p(r)?!!r.capture:!!r,i):vt(t,e,n,!1,r,i)}function vt(t,e,n,r,i,a){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,s=Mt(t);if(s||(t[dt]=s=new ct(t)),n=s.add(e,n,r,o,a),n.proxy)return n;if(r=mt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)T||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(zt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=wt;return t}function gt(t,e,n,r,i){if(Array.isArray(e)){for(var a=0;a<e.length;a++)gt(t,e[a],n,r,i);return null}return n=Ct(n),t&&t[et]?t.O(e,n,p(r)?!!r.capture:!!r,i):vt(t,e,n,!0,r,i)}function yt(t,e,n,r,i){if(Array.isArray(e))for(var a=0;a<e.length;a++)yt(t,e[a],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ct(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(a=t.g[e],n=ht(a,n,r,i),-1<n&&(it(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[e],t.h--)))):t&&(t=Mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,r,i)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])ut(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Mt(e))?(ut(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function zt(t){return t in ft?ft[t]:ft[t]="on"+t}function wt(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bt(t),t=n.call(r,e)}return t}function Mt(t){return t=t[dt],t instanceof ct?t:null}var At="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ct(t){return"function"===typeof t?t:(t[At]||(t[At]=function(e){return t.handleEvent(e)}),t[At])}function Ot(){A.call(this),this.i=new ct(this),this.P=this,this.I=null}function Vt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new H(e,t);else if(e instanceof H)e.target=e.target||t;else{var i=e;e=new H(r,t),lt(e,i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=e.g=n[a];i=St(o,r,!0,e)&&i}if(o=e.g=t,i=St(o,r,!0,e)&&i,i=St(o,r,!1,e)&&i,n)for(a=0;a<n.length;a++)o=e.g=n[a],i=St(o,r,!1,e)&&i}function St(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,a=0;a<e.length;++a){var o=e[a];if(o&&!o.ba&&o.capture==n){var s=o.listener,l=o.ha||o.src;o.ea&&ut(t.i,o),i=!1!==s.call(l,r)&&i}}return i&&!r.defaultPrevented}M(Ot,A),Ot.prototype[et]=!0,Ot.prototype.removeEventListener=function(t,e,n,r){yt(this,t,e,n,r)},Ot.prototype.M=function(){if(Ot.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.I=null},Ot.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ht=h.JSON.stringify;function Tt(){var t=Dt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class It{constructor(){this.h=this.g=null}add(t,e){const n=_t.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt,_t=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Lt),(t=>t.reset()));class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Et(t){h.setTimeout((()=>{throw t}),0)}function Bt(t,e){kt||Pt(),xt||(kt(),xt=!0),Dt.add(t,e)}function Pt(){var t=h.Promise.resolve(void 0);kt=function(){t.then(Ft)}}var xt=!1,Dt=new It;function Ft(){for(var t;t=Tt();){try{t.h.call(t.g)}catch(n){Et(n)}var e=_t;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xt=!1}function jt(t,e){Ot.call(this),this.h=t||1,this.g=e||h,this.j=z(this.lb,this),this.l=Date.now()}function Nt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=z(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=z(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Rt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,Rt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}M(jt,Ot),r=jt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Vt(this,"tick"),this.ca&&(Nt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){jt.X.M.call(this),Nt(this),delete this.g};class Ut extends A{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qt(t){A.call(this),this.h=t,this.g={}}M(qt,A);var Wt=[];function Gt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var i=0;i<n.length;i++){var a=pt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}}function Kt(t){at(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,r,i,a){t.info((function(){if(t.g)if(a)for(var o="",s=a.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,a,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+a+" "+o}))}function Qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(r?" "+r:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Ht(n)}catch(s){return e}}qt.prototype.M=function(){qt.X.M.call(this),Kt(this)},qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ee={},ne=null;function re(){return ne=ne||new Ot}function ie(t){H.call(this,ee.Pa,t)}function ae(t){const e=re();Vt(e,new ie(e))}function oe(t,e){H.call(this,ee.STAT_EVENT,t),this.stat=e}function se(t){const e=re();Vt(e,new oe(e,t))}function le(t,e){H.call(this,ee.Qa,t),this.size=e}function ce(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",M(ie,H),ee.STAT_EVENT="statevent",M(oe,H),ee.Qa="timingevent",M(le,H);var ue={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var ve,me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ge(){H.call(this,"d")}function ye(){H.call(this,"c")}function be(){}function ze(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new qt(this),this.O=Me,t=N?125:void 0,this.T=new jt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new we}function we(){this.i=null,this.g="",this.h=!1}M(ge,H),M(ye,H),M(be,de),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},ve=new be;var Me=45e3,Ae={},Ce={};function Oe(t,e,n){t.K=1,t.v=Ge($e(e)),t.s=n,t.P=!0,Ve(t,null)}function Ve(t,e){t.F=Date.now(),Ie(t),t.A=$e(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),sn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new we,t.g=hr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ut(z(t.La,t,t.g),t.N)),Gt(t.S,t.g,"readystatechange",t.ib),e=t.H?ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ae(),Yt(t.j,t.u,t.A,t.m,t.U,t.s)}function Se(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function He(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Te(t,n),r==Ce){4==e&&(t.o=4,se(14),i=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ae){t.o=4,se(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Qt(t.j,t.m,r,null),Be(t,r)}Se(t)&&r!=Ce&&r!=Ae&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,se(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.K=!0,se(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),Ee(t),Le(t))}function Te(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ce:(n=Number(e.substring(n,r)),isNaN(n)?Ae:(r+=1,r+n>e.length?Ce:(e=e.substr(r,n),t.C=r+n,e)))}function Ie(t){t.V=Date.now()+t.O,ke(t,t.O)}function ke(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ce(z(t.gb,t),e)}function _e(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||or(t.l,t)}function Ee(t){_e(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Nt(t.T),Kt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||vn(n.h,t)))if(!t.J&&vn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ar(n),Kn(n)}nr(n),se(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ce(z(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else lr(n,11)}else if((t.J||n.g==t)&&ar(n),!I(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var a=r.h;a.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(a.j=a.l,a.g=new Set,a.h&&(mn(a,a.h),a.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,We(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=ur(r,r.H?r.ka:null,r.V),o.J){gn(r.h,o);var s=o,l=r.J;l&&s.setTimeout(l),s.B&&(_e(s),Ie(s)),r.g=o}else er(r);0<n.i.length&&Yn(n)}else"stop"!=c[0]&&"close"!=c[0]||lr(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?lr(n,7):Gn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}ae(4)}catch(c){}}function Pe(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function xe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function De(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=xe(t),r=Pe(t),i=r.length,a=0;a<i;a++)e.call(void 0,r[a],n&&n[a],t)}r=ze.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==Nn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const u=Nn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(3!=u||N||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=u||7==e||ae(8==e||0>=d?3:2),_e(this);var n=this.g.aa();this.Y=n;e:if(Se(this)){var r=$n(this.g);t="";var i=r.length,a=4==Nn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ee(this),Le(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:a&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(s)){var c=s;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,se(12),Ee(this),Le(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Be(this,n)}this.P?(He(this,u,o),N&&this.i&&3==u&&(Gt(this.S,this.T,"tick",this.hb),this.T.start())):(Qt(this.j,this.m,o,null),Be(this,o)),4==u&&Ee(this),this.i&&!this.I&&(4==u?or(this.l,this):(this.i=!1,Ie(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,se(12)):(this.o=0,se(13)),Ee(this),Le(this)}}}catch(u){}},r.hb=function(){if(this.g){var t=Nn(this.g),e=this.g.fa();this.C<e.length&&(_e(this),He(this,t,e),this.i&&4!=t&&Ie(this))}},r.cancel=function(){this.I=!0,Ee(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(ae(),se(17)),Ee(this),this.o=2,Le(this)):ke(this,this.V-t)};var Fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function je(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var a=t[n].substring(0,r);i=t[n].substring(r+1)}else a=t[n];e(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ne(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ne){this.h=void 0!==e?e:t.h,Re(this,t.j),this.s=t.s,this.g=t.g,Ue(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qe(this,n),this.o=t.o}else t&&(n=String(t).match(Fe))?(this.h=!!e,Re(this,n[1]||"",!0),this.s=Ke(n[2]||""),this.g=Ke(n[3]||"",!0),Ue(this,n[4]),this.l=Ke(n[5]||"",!0),qe(this,n[6]||"",!0),this.o=Ke(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function $e(t){return new Ne(t)}function Re(t,e,n){t.j=n?Ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ue(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qe(t,e,n){e instanceof nn?(t.i=e,cn(t.i,t.h)):(n||(e=Xe(e,tn)),t.i=new nn(e,t.h))}function We(t,e,n){t.i.set(e,n)}function Ge(t){return We(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ye),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ye(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ne.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xe(e,Je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Xe(e,Je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Xe(n,"/"==n.charAt(0)?Ze:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xe(n,en)),t.join("")};var Je=/[#\/\?@]/g,Qe=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&je(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function an(t,e){rn(t),e=ln(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return rn(t),e=ln(t,e),t.g.has(e)}function sn(t,e,n){an(t,e),0<n.length&&(t.i=null,t.g.set(ln(t,e),V(n)),t.h+=n.length)}function ln(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cn(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(an(this,e),sn(this,n,t))}),t)),t.j=e}r=nn.prototype,r.add=function(t,e){rn(this),this.i=null,t=ln(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){rn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(ln(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return rn(this),this.i=null,t=ln(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const a=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=a;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var un=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function vn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function gn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function yn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return V(t.i)}function bn(){}function zn(){this.g=new bn}function wn(t,e,n){const r=n||"";try{De(t,(function(t,n){let i=t;p(t)&&(i=Ht(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Mn(t,e){const n=new Xt;if(h.Image){const r=new Image;r.onload=w(An,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(An,n,r,"TestLoadImage: error",!1,e),r.onabort=w(An,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(An,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function An(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(a){}}function Cn(t){this.l=t.ac||null,this.j=t.jb||!1}function On(t,e){Ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},bn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},bn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},M(Cn,de),Cn.prototype.g=function(){return new On(this.l,this.j)},Cn.prototype.i=function(t){return function(){return t}}({}),M(On,Ot);var Vn=0;function Sn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Hn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Tn(t)}function Tn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=On.prototype,r.open=function(t,e){if(this.readyState!=Vn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Tn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Hn(this)),this.readyState=Vn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hn(this):Tn(this),3==this.readyState&&Sn(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,Hn(this))},r.Ua=function(t){this.g&&(this.response=t,Hn(this))},r.ga=function(){this.g&&Hn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(On.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var In=h.JSON.parse;function kn(t){Ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_n,this.K=this.L=!1}M(kn,Ot);var _n="",Ln=/^https?$/i,En=["POST","PUT"];function Bn(t){return F&&Y()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xn(t),Fn(t)}function xn(t){t.D||(t.D=!0,Vt(t,"complete"),Vt(t,"error"))}function Dn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Nn(t)||2!=t.aa()))if(t.v&&4==Nn(t))$t(t.Ha,0,t);else if(Vt(t,"readystatechange"),4==Nn(t)){t.h=!1;try{const l=t.aa();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===l){var i=String(t.H).match(Fe)[1]||null;if(!i&&h.self&&h.self.location){var a=h.self.location.protocol;i=a.substr(0,a.length-1)}r=!Ln.test(i?i.toLowerCase():"")}n=r}if(n)Vt(t,"complete"),Vt(t,"success");else{t.m=6;try{var o=2<Nn(t)?t.g.statusText:""}catch(s){o=""}t.j=o+" ["+t.aa()+"]",xn(t)}}finally{Fn(t)}}}function Fn(t,e){if(t.g){jn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||Vt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Nn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Sr){return null}}function Rn(t){let e="";return at(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Un(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Rn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):We(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wn(t){this.Ca=0,this.i=[],this.j=new Xt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qn("baseRetryDelayMs",5e3,t),this.bb=qn("retryDelaySeedMs",1e4,t),this.$a=qn("forwardChannelMaxRetries",2,t),this.ta=qn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new zn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(t){if(Xn(t),3==t.G){var e=t.U++,n=$e(t.F);We(n,"SID",t.I),We(n,"RID",e),We(n,"TYPE","terminate"),Zn(t,n),e=new ze(t,t.j,e,void 0),e.K=2,e.v=Ge($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hr(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ie(e)}cr(t)}function Kn(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Xn(t){Kn(t),t.u&&(h.clearTimeout(t.u),t.u=null),ar(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Yn(t){fn(t.h)||t.m||(t.m=!0,Bt(t.Ja,t),t.C=0)}function Jn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ce(z(t.Ja,t,e),sr(t,t.C)),t.C++,!0))}function Qn(t,e){var n;n=e?e.m:t.U++;const r=$e(t.F);We(r,"SID",t.I),We(r,"RID",n),We(r,"AID",t.T),Zn(t,r),t.o&&t.s&&Un(r,t.o,t.s),n=new ze(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=tr(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mn(t.h,n),Oe(n,r,e)}function Zn(t,e){t.ia&&at(t.ia,(function(t,n){We(e,n,t)})),t.l&&De({},(function(t,n){We(e,n,t)}))}function tr(t,e,n){n=Math.min(t.i.length,n);var r=t.l?z(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const l=i[s].g;if(n-=e,0>n)e=Math.max(0,i[s].h-100),o=!1;else try{wn(l,t,"req"+n+"_")}catch(a){r&&r(l)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function er(t){t.g||t.u||(t.Z=1,Bt(t.Ia,t),t.A=0)}function nr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ce(z(t.Ia,t),sr(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new ze(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=$e(t.sa);We(e,"RID","rpc"),We(e,"SID",t.I),We(e,"CI",t.L?"0":"1"),We(e,"AID",t.T),We(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&Un(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ge($e(e)),n.s=null,n.P=!0,Ve(n,t)}function ar(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function or(t,e){var n=null;if(t.g==e){ar(t),rr(t),t.g=null;var r=2}else{if(!vn(t.h,e))return;n=e.D,gn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=re(),Vt(r,new le(r,n)),Yn(t)}else er(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&Jn(t,e)||2==r&&nr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}function sr(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function lr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=z(t.kb,t);n||(n=new Ne("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Re(n,"https"),Ge(n)),Mn(n.toString(),r)}else se(2);t.G=0,t.l&&t.l.va(e),cr(t),Xn(t)}function cr(t){if(t.G=0,t.la=[],t.l){const e=yn(t.h);0==e.length&&0==t.i.length||(S(t.la,e),S(t.la,t.i),t.h.i.length=0,V(t.i),t.i.length=0),t.l.ua()}}function ur(t,e,n){var r=n instanceof Ne?$e(n):new Ne(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Ue(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var a=new Ne(null,void 0);r&&Re(a,r),e&&(a.g=e),i&&Ue(a,i),n&&(a.l=n),r=a}return n=t.D,e=t.za,n&&e&&We(r,n,e),We(r,"VER",t.ma),Zn(t,r),r}function hr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new kn(new Cn({jb:!0})):new kn(t.ra),e.Ka(t.H),e}function dr(){}function fr(){if(F&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function pr(t,e){Ot.call(this),this.g=new Wn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!I(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!I(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function vr(t){ge.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mr(){ye.call(this),this.status=1}function gr(t){this.g=t}r=kn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ve.g(),this.C=this.u?fe(this.u):fe(ve),this.g.onreadystatechange=z(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(a){return void Pn(this,a)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=O(En,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=z(this.qa,this)):this.A=$t(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(a){Pn(this,a)}},r.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Vt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Vt(this,"complete"),Vt(this,"abort"),Fn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),kn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Dn(this):this.fb())},r.fb=function(){Dn(this)},r.aa=function(){try{return 2<Nn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),In(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Wn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ze(this,this.j,t,void 0);let a=this.s;if(this.S&&(a?(a=ot(a),lt(a,this.S)):a=this.S),null!==this.o||this.N||(i.H=a,a=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tr(this,i,e),n=$e(this.F),We(n,"RID",t),We(n,"CVER",22),this.D&&We(n,"X-HTTP-Session-Id",this.D),Zn(this,n),a&&(this.N?e="headers="+encodeURIComponent(String(Rn(a)))+"&"+e:this.o&&Un(n,this.o,a)),mn(this.h,i),this.Ya&&We(n,"TYPE","init"),this.O?(We(n,"$req",e),We(n,"SID","null"),i.Z=!0,Oe(i,n,null)):Oe(i,n,e),this.G=2}}else 3==this.G&&(t?Qn(this,t):0==this.i.length||fn(this.h)||Qn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ce(z(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,se(10),Kn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Kn(this),nr(this),se(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(t,e){return new pr(t,e)},M(pr,Ot),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;se(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ur(t,null,t.V),Yn(t)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ht(t),t=n);e.i.push(new un(e.ab++,t)),3==e.G&&Yn(e)},pr.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.X.M.call(this)},M(vr,ge),M(mr,ye),M(gr,dr),gr.prototype.xa=function(){Vt(this.g,"a")},gr.prototype.wa=function(t){Vt(this.g,new vr(t))},gr.prototype.va=function(t){Vt(this.g,new mr)},gr.prototype.ua=function(){Vt(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ue.NO_ERROR=0,ue.TIMEOUT=8,ue.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",Ot.prototype.listen=Ot.prototype.N,kn.prototype.listenOnce=kn.prototype.O,kn.prototype.getLastError=kn.prototype.Oa,kn.prototype.getLastErrorCode=kn.prototype.Ea,kn.prototype.getStatus=kn.prototype.aa,kn.prototype.getResponseJson=kn.prototype.Sa,kn.prototype.getResponseText=kn.prototype.fa,kn.prototype.send=kn.prototype.da,kn.prototype.setWithCredentials=kn.prototype.Ka;var yr=c.createWebChannelTransport=function(){return new fr},br=c.getStatEventTarget=function(){return re()},zr=c.ErrorCode=ue,wr=c.EventType=he,Mr=c.Event=ee,Ar=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Cr=c.FetchXmlHttpFactory=Cn,Or=c.WebChannel=pe,Vr=c.XhrIo=kn;const Sr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Hr.UNAUTHENTICATED=new Hr(null),Hr.GOOGLE_CREDENTIALS=new Hr("google-credentials-uid"),Hr.FIRST_PARTY=new Hr("first-party-uid"),Hr.MOCK_USER=new Hr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Tr="9.17.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new o.Yd("@firebase/firestore");function kr(){return Ir.logLevel}function _r(t,...e){if(Ir.logLevel<=o["in"].DEBUG){const n=e.map(Br);Ir.debug(`Firestore (${Tr}): ${t}`,...n)}}function Lr(t,...e){if(Ir.logLevel<=o["in"].ERROR){const n=e.map(Br);Ir.error(`Firestore (${Tr}): ${t}`,...n)}}function Er(t,...e){if(Ir.logLevel<=o["in"].WARN){const n=e.map(Br);Ir.warn(`Firestore (${Tr}): ${t}`,...n)}}function Br(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t="Unexpected state"){const e=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: `+t;throw Lr(e),new Error(e)}function xr(t,e){t||Pr()}function Dr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jr extends s.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Hr.UNAUTHENTICATED)))}shutdown(){}}class Ur{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class qr{constructor(t){this.t=t,this.currentUser=Hr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nr,t.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{_r("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(_r("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nr)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(_r("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(xr("string"==typeof e.accessToken),new $r(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return xr(null===t||"string"==typeof t),new Hr(t)}}class Wr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Hr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(xr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Wr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Hr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&_r("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,_r("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{_r("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):_r("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(xr("string"==typeof t.token),this.A=t.token,new Kr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Yr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Qr(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new jr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new jr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new jr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new jr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ti.fromMillis(Date.now())}static fromDate(t){return ti.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ti(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Qr(this.nanoseconds,t.nanoseconds):Qr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ei(t)}static min(){return new ei(new ti(0,0))}static max(){return new ei(new ti(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,n){void 0===e?e=0:e>t.length&&Pr(),void 0===n?n=t.length-e:n>t.length-e&&Pr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ni.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ni?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ri extends ni{construct(t,e,n){return new ri(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new jr(Fr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ri(e)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ai extends ni{construct(t,e,n){return new ai(t,e,n)}static isValidIdentifier(t){return ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ai.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ai(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new jr(Fr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new jr(Fr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new jr(Fr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(a=!a,r++):"."!==e||a?(n+=e,r++):(i(),r++)}if(i(),a)throw new jr(Fr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ai(e)}static emptyPath(){return new ai([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this.path=t}static fromPath(t){return new oi(ri.fromString(t))}static fromName(t){return new oi(ri.fromString(t).popFirst(5))}static empty(){return new oi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ri.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ri.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new oi(new ri(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}si.UNKNOWN_ID=-1;function li(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ei.fromTimestamp(1e9===r?new ti(n+1,0):new ti(n,r));return new ui(i,oi.empty(),e)}function ci(t){return new ui(t.readTime,t.key,-1)}class ui{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ui(ei.min(),oi.empty(),-1)}static max(){return new ui(ei.max(),oi.empty(),-1)}}function hi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=oi.comparator(t.documentKey,e.documentKey),0!==n?n:Qr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==Fr.FAILED_PRECONDITION||t.message!==di)throw t;_r("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Pr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new vi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof vi?e:vi.resolve(e)}catch(t){return vi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):vi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):vi.reject(e)}static resolve(t){return new vi(((e,n)=>{e(t)}))}static reject(t){return new vi(((e,n)=>{n(t)}))}static waitFor(t){return new vi(((e,n)=>{let r=0,i=0,a=!1;t.forEach((t=>{++r,t.next((()=>{++i,a&&i===r&&e()}),(t=>n(t)))})),a=!0,i===r&&e()}))}static or(t){let e=vi.resolve(!1);for(const n of t)e=e.next((t=>t?vi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new vi(((n,r)=>{const i=t.length,a=new Array(i);let o=0;for(let s=0;s<i;s++){const l=s;e(t[l]).next((t=>{a[l]=t,++o,o===i&&n(a)}),(t=>r(t)))}}))}static doWhile(t,e){return new vi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}gi.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(t,e,n,r,i,a,o,s){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=s}}class bi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof bi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){return null==t}function Ci(t){return 0===t&&1/t==-1/0}function Oi(t){return"number"==typeof t&&Number.isInteger(t)&&!Ci(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Vi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Vi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Qr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vi.EMPTY_BYTE_STRING=new Vi("");const Si=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hi(t){if(xr(!!t),"string"==typeof t){let e=0;const n=Si.exec(t);if(xr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ti(t.seconds),nanos:Ti(t.nanos)}}function Ti(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ii(t){return"string"==typeof t?Vi.fromBase64String(t):Vi.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _i(t){const e=t.mapValue.fields.__previous_value__;return ki(e)?_i(e):e}function Li(t){const e=Hi(t.mapValue.fields.__local_write_time__.timestampValue);return new ti(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ki(t)?4:Ki(t)?9007199254740991:10:Pr()}function Pi(t,e){if(t===e)return!0;const n=Bi(t);if(n!==Bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Li(t).isEqual(Li(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Hi(t.timestampValue),r=Hi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ii(t.bytesValue).isEqual(Ii(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ti(t.geoPointValue.latitude)===Ti(e.geoPointValue.latitude)&&Ti(t.geoPointValue.longitude)===Ti(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ti(t.integerValue)===Ti(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ti(t.doubleValue),r=Ti(e.doubleValue);return n===r?Ci(n)===Ci(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],Pi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(zi(n)!==zi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Pi(n[i],r[i])))return!1;return!0}(t,e);default:return Pr()}}function xi(t,e){return void 0!==(t.values||[]).find((t=>Pi(t,e)))}function Di(t,e){if(t===e)return 0;const n=Bi(t),r=Bi(e);if(n!==r)return Qr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ti(t.integerValue||t.doubleValue),r=Ti(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Fi(t.timestampValue,e.timestampValue);case 4:return Fi(Li(t),Li(e));case 5:return Qr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ii(t),r=Ii(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Qr(n[i],r[i]);if(0!==t)return t}return Qr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Qr(Ti(t.latitude),Ti(e.latitude));return 0!==n?n:Qr(Ti(t.longitude),Ti(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Di(n[i],r[i]);if(t)return t}return Qr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ei.mapValue&&e===Ei.mapValue)return 0;if(t===Ei.mapValue)return 1;if(e===Ei.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let o=0;o<r.length&&o<a.length;++o){const t=Qr(r[o],a[o]);if(0!==t)return t;const e=Di(n[r[o]],i[a[o]]);if(0!==e)return e}return Qr(r.length,a.length)}(t.mapValue,e.mapValue);default:throw Pr()}}function Fi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Qr(t,e);const n=Hi(t),r=Hi(e),i=Qr(n.seconds,r.seconds);return 0!==i?i:Qr(n.nanos,r.nanos)}function ji(t){return Ni(t)}function Ni(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Hi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,oi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ni(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ni(t.fields[i])}`;return n+"}"}(t.mapValue):Pr();var e,n}function $i(t){return!!t&&"integerValue"in t}function Ri(t){return!!t&&"arrayValue"in t}function Ui(t){return!!t&&"nullValue"in t}function qi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wi(t){return!!t&&"mapValue"in t}function Gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Gi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ki(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t,e){this.position=t,this.inclusive=e}}function Yi(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const a=e[i],o=t.position[i];if(r=a.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):Di(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function Ji(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{}class Zi extends Qi{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new sa(t,e,n):"array-contains"===e?new ha(t,n):"in"===e?new da(t,n):"not-in"===e?new fa(t,n):"array-contains-any"===e?new pa(t,n):new Zi(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new la(t,n):new ca(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Di(e,this.value)):null!==e&&Bi(this.value)===Bi(e)&&this.matchesComparison(Di(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Pr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ta extends Qi{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new ta(t,e)}matches(t){return ea(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function ea(t){return"and"===t.op}function na(t){return ra(t)&&ea(t)}function ra(t){for(const e of t.filters)if(e instanceof ta)return!1;return!0}function ia(t){if(t instanceof Zi)return t.field.canonicalString()+t.op.toString()+ji(t.value);if(na(t))return t.filters.map((t=>ia(t))).join(",");{const e=t.filters.map((t=>ia(t))).join(",");return`${t.op}(${e})`}}function aa(t,e){return t instanceof Zi?function(t,e){return e instanceof Zi&&t.op===e.op&&t.field.isEqual(e.field)&&Pi(t.value,e.value)}(t,e):t instanceof ta?function(t,e){return e instanceof ta&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&aa(n,e.filters[r])),!0)}(t,e):void Pr()}function oa(t){return t instanceof Zi?function(t){return`${t.field.canonicalString()} ${t.op} ${ji(t.value)}`}(t):t instanceof ta?function(t){return t.op.toString()+" {"+t.getFilters().map(oa).join(" ,")+"}"}(t):"Filter"}class sa extends Zi{constructor(t,e,n){super(t,e,n),this.key=oi.fromName(n.referenceValue)}matches(t){const e=oi.comparator(t.key,this.key);return this.matchesComparison(e)}}class la extends Zi{constructor(t,e){super(t,"in",e),this.keys=ua("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ca extends Zi{constructor(t,e){super(t,"not-in",e),this.keys=ua("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ua(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>oi.fromName(t.referenceValue)))}class ha extends Zi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ri(e)&&xi(e.arrayValue,this.value)}}class da extends Zi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&xi(this.value.arrayValue,e)}}class fa extends Zi{constructor(t,e){super(t,"not-in",e)}matches(t){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xi(this.value.arrayValue,e)}}class pa extends Zi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ri(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>xi(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e="asc"){this.field=t,this.dir=e}}function ma(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e){this.comparator=t,this.root=e||ba.EMPTY}insert(t,e){return new ga(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ba.BLACK,null,null))}remove(t){return new ga(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ba.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ya(this.root,t,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ya(this.root,t,this.comparator,!0)}}class ya{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ba{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ba.RED,this.left=null!=r?r:ba.EMPTY,this.right=null!=i?i:ba.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new ba(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ba.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ba.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ba.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ba.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pr();if(this.right.isRed())throw Pr();const t=this.left.check();if(t!==this.right.check())throw Pr();return t+(this.isRed()?0:1)}}ba.EMPTY=null,ba.RED=!0,ba.BLACK=!1,ba.EMPTY=new class{constructor(){this.size=0}get key(){throw Pr()}get value(){throw Pr()}get color(){throw Pr()}get left(){throw Pr()}get right(){throw Pr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ba(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(t){this.comparator=t,this.data=new ga(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wa(this.data.getIterator())}getIteratorFrom(t){return new wa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof za))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new za(this.comparator);return e.data=t,e}}class wa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(t){this.fields=t,t.sort(ai.comparator)}static empty(){return new Ma([])}unionWith(t){let e=new za(ai.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ma(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){this.value=t}static empty(){return new Aa({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Wi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gi(e)}setAll(t){let e=ai.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Gi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Wi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Wi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){wi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Aa(Gi(this.value))}}function Ca(t){const e=[];return wi(t.fields,((t,n)=>{const r=new ai([t]);if(Wi(n)){const t=Ca(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ma(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Oa{constructor(t,e,n,r,i,a,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(t){return new Oa(t,0,ei.min(),ei.min(),ei.min(),Aa.empty(),0)}static newFoundDocument(t,e,n,r){return new Oa(t,1,e,ei.min(),n,r,0)}static newNoDocument(t,e){return new Oa(t,2,e,ei.min(),ei.min(),Aa.empty(),0)}static newUnknownDocument(t,e){return new Oa(t,3,e,ei.min(),ei.min(),Aa.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Aa.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Aa.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Oa&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Oa(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e=null,n=[],r=[],i=null,a=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=o,this.ft=null}}function Sa(t,e=null,n=[],r=[],i=null,a=null,o=null){return new Va(t,e,n,r,i,a,o)}function Ha(t){const e=Dr(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ia(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ai(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ji(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ji(t))).join(",")),e.ft=t}return e.ft}function Ta(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ma(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!aa(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ji(t.startAt,e.startAt)&&Ji(t.endAt,e.endAt)}function Ia(t){return oi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka{constructor(t,e=null,n=[],r=[],i=null,a="F",o=null,s=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=s,this.dt=null,this._t=null,this.startAt,this.endAt}}function _a(t,e,n,r,i,a,o,s){return new ka(t,e,n,r,i,a,o,s)}function La(t){return new ka(t)}function Ea(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ba(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pa(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function xa(t){return null!==t.collectionGroup}function Da(t){const e=Dr(t);if(null===e.dt){e.dt=[];const t=Pa(e),n=Ba(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new va(t)),e.dt.push(new va(ai.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new va(ai.keyField(),t))}}}return e.dt}function Fa(t){const e=Dr(t);if(!e._t)if("F"===e.limitType)e._t=Sa(e.path,e.collectionGroup,Da(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Da(e)){const e="desc"===i.dir?"asc":"desc";t.push(new va(i.field,e))}const n=e.endAt?new Xi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Xi(e.startAt.position,e.startAt.inclusive):null;e._t=Sa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function ja(t,e,n){return new ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return Ta(Fa(t),Fa(e))&&t.limitType===e.limitType}function $a(t){return`${Ha(Fa(t))}|lt:${t.limitType}`}function Ra(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>oa(t))).join(", ")}]`),Ai(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ji(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ji(t))).join(",")),`Target(${e})`}(Fa(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):oi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Da(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Yi(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Da(t),e))&&!(t.endAt&&!function(t,e,n){const r=Yi(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Da(t),e))}(t,e)}function qa(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wa(t){return(e,n)=>{let r=!1;for(const i of Da(t)){const t=Ga(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ga(t,e,n){const r=t.field.isKeyField()?oi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Di(r,i):Pr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Pr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ci(e)?"-0":e}}function Xa(t){return{integerValue:""+t}}function Ya(t,e){return Oi(e)?Xa(e):Ka(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this._=void 0}}function Qa(t,e,n){return t instanceof eo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof no?ro(t,e):t instanceof io?ao(t,e):function(t,e){const n=to(t,e),r=so(n)+so(t.gt);return $i(n)&&$i(t.gt)?Xa(r):Ka(t.yt,r)}(t,e)}function Za(t,e,n){return t instanceof no?ro(t,e):t instanceof io?ao(t,e):n}function to(t,e){return t instanceof oo?$i(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class eo extends Ja{}class no extends Ja{constructor(t){super(),this.elements=t}}function ro(t,e){const n=lo(e);for(const r of t.elements)n.some((t=>Pi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class io extends Ja{constructor(t){super(),this.elements=t}}function ao(t,e){let n=lo(e);for(const r of t.elements)n=n.filter((t=>!Pi(t,r)));return{arrayValue:{values:n}}}class oo extends Ja{constructor(t,e){super(),this.yt=t,this.gt=e}}function so(t){return Ti(t.integerValue||t.doubleValue)}function lo(t){return Ri(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof no&&e instanceof no||t instanceof io&&e instanceof io?Zr(t.elements,e.elements,Pi):t instanceof oo&&e instanceof oo?Pi(t.gt,e.gt):t instanceof eo&&e instanceof eo}(t.transform,e.transform)}class uo{constructor(t,e){this.version=t,this.transformResults=e}}class ho{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ho}static exists(t){return new ho(void 0,t)}static updateTime(t){return new ho(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class po{}function vo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Oo(t.key,ho.none()):new zo(t.key,t.data,ho.none());{const n=t.data,r=Aa.empty();let i=new za(ai.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new wo(t.key,r,new Ma(i.toArray()),ho.none())}}function mo(t,e,n){t instanceof zo?function(t,e,n){const r=t.value.clone(),i=Ao(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof wo?function(t,e,n){if(!fo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ao(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Mo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof zo?function(t,e,n,r){if(!fo(t.precondition,e))return n;const i=t.value.clone(),a=Co(t.fieldTransforms,r,e);return i.setAll(a),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof wo?function(t,e,n,r){if(!fo(t.precondition,e))return n;const i=Co(t.fieldTransforms,r,e),a=e.data;return a.setAll(Mo(t)),a.setAll(i),e.convertToFoundDocument(e.version,a).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return fo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function yo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=to(r.transform,t||null);null!=i&&(null===n&&(n=Aa.empty()),n.set(r.field,i))}return n||null}function bo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zr(t,e,((t,e)=>co(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends po{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wo extends po{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ao(t,e,n){const r=new Map;xr(t.length===n.length);for(let i=0;i<n.length;i++){const a=t[i],o=a.transform,s=e.data.field(a.field);r.set(a.field,Za(o,s,n[i]))}return r}function Co(t,e,n){const r=new Map;for(const i of t){const t=i.transform,a=n.data.field(i.field);r.set(i.field,Qa(t,a,e))}return r}class Oo extends po{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vo extends po{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho,To;function Io(t){switch(t){default:return Pr();case Fr.CANCELLED:case Fr.UNKNOWN:case Fr.DEADLINE_EXCEEDED:case Fr.RESOURCE_EXHAUSTED:case Fr.INTERNAL:case Fr.UNAVAILABLE:case Fr.UNAUTHENTICATED:return!1;case Fr.INVALID_ARGUMENT:case Fr.NOT_FOUND:case Fr.ALREADY_EXISTS:case Fr.PERMISSION_DENIED:case Fr.FAILED_PRECONDITION:case Fr.ABORTED:case Fr.OUT_OF_RANGE:case Fr.UNIMPLEMENTED:case Fr.DATA_LOSS:return!0}}function ko(t){if(void 0===t)return Lr("GRPC error has no .code"),Fr.UNKNOWN;switch(t){case Ho.OK:return Fr.OK;case Ho.CANCELLED:return Fr.CANCELLED;case Ho.UNKNOWN:return Fr.UNKNOWN;case Ho.DEADLINE_EXCEEDED:return Fr.DEADLINE_EXCEEDED;case Ho.RESOURCE_EXHAUSTED:return Fr.RESOURCE_EXHAUSTED;case Ho.INTERNAL:return Fr.INTERNAL;case Ho.UNAVAILABLE:return Fr.UNAVAILABLE;case Ho.UNAUTHENTICATED:return Fr.UNAUTHENTICATED;case Ho.INVALID_ARGUMENT:return Fr.INVALID_ARGUMENT;case Ho.NOT_FOUND:return Fr.NOT_FOUND;case Ho.ALREADY_EXISTS:return Fr.ALREADY_EXISTS;case Ho.PERMISSION_DENIED:return Fr.PERMISSION_DENIED;case Ho.FAILED_PRECONDITION:return Fr.FAILED_PRECONDITION;case Ho.ABORTED:return Fr.ABORTED;case Ho.OUT_OF_RANGE:return Fr.OUT_OF_RANGE;case Ho.UNIMPLEMENTED:return Fr.UNIMPLEMENTED;case Ho.DATA_LOSS:return Fr.DATA_LOSS;default:return Pr()}}(To=Ho||(Ho={}))[To.OK=0]="OK",To[To.CANCELLED=1]="CANCELLED",To[To.UNKNOWN=2]="UNKNOWN",To[To.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",To[To.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",To[To.NOT_FOUND=5]="NOT_FOUND",To[To.ALREADY_EXISTS=6]="ALREADY_EXISTS",To[To.PERMISSION_DENIED=7]="PERMISSION_DENIED",To[To.UNAUTHENTICATED=16]="UNAUTHENTICATED",To[To.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",To[To.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",To[To.ABORTED=10]="ABORTED",To[To.OUT_OF_RANGE=11]="OUT_OF_RANGE",To[To.UNIMPLEMENTED=12]="UNIMPLEMENTED",To[To.INTERNAL=13]="INTERNAL",To[To.UNAVAILABLE=14]="UNAVAILABLE",To[To.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){wi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Mi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new ga(oi.comparator);function Eo(){return Lo}const Bo=new ga(oi.comparator);function Po(...t){let e=Bo;for(const n of t)e=e.insert(n.key,n);return e}function xo(t){let e=Bo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Do(){return jo()}function Fo(){return jo()}function jo(){return new _o((t=>t.toString()),((t,e)=>t.isEqual(e)))}const No=new ga(oi.comparator),$o=new za(oi.comparator);function Ro(...t){let e=$o;for(const n of t)e=e.add(n);return e}const Uo=new za(Qr);function qo(){return Uo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Go.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Wo(ei.min(),r,qo(),Eo(),Ro())}}class Go{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Go(n,e,Ro(),Ro(),Ro())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e,n,r){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=r}}class Xo{constructor(t,e){this.targetId=t,this.Et=e}}class Yo{constructor(t,e,n=Vi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Jo{constructor(){this.At=0,this.Rt=ts(),this.bt=Vi.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=Ro(),e=Ro(),n=Ro();return this.Rt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Pr()}})),new Go(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=ts()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Qo{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Eo(),this.qt=Zo(),this.Ut=new za(Qr)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Pr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,r=this.Yt(e);if(r){const t=r.target;if(Ia(t))if(0===n){const n=new oi(t.path);this.Qt(e,n,Oa.newNoDocument(n,ei.min()))}else xr(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Ia(i.target)){const e=new oi(i.target.path);null!==this.Lt.get(e)||this.te(r,e)||this.Qt(r,e,Oa.newNoDocument(e,t))}n.St&&(e.set(r,n.Ct()),n.xt())}}));let n=Ro();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const r=new Wo(t,e,this.Ut,this.Lt,n);return this.Lt=Eo(),this.qt=Zo(),this.Ut=new za(Qr),r}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,e)?r.Nt(e,1):r.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Jo,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new za(Qr),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||_r("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Jo),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}}function Zo(){return new ga(oi.comparator)}function ts(){return new ga(oi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ns=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),rs=(()=>{const t={and:"AND",or:"OR"};return t})();class is{constructor(t,e){this.databaseId=t,this.wt=e}}function as(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function os(t,e){return t.wt?e.toBase64():e.toUint8Array()}function ss(t,e){return as(t,e.toTimestamp())}function ls(t){return xr(!!t),ei.fromTimestamp(function(t){const e=Hi(t);return new ti(e.seconds,e.nanos)}(t))}function cs(t,e){return function(t){return new ri(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function us(t){const e=ri.fromString(t);return xr(Ls(e)),e}function hs(t,e){return cs(t.databaseId,e.path)}function ds(t,e){const n=us(e);if(n.get(1)!==t.databaseId.projectId)throw new jr(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new jr(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oi(ms(n))}function fs(t,e){return cs(t.databaseId,e)}function ps(t){const e=us(t);return 4===e.length?ri.emptyPath():ms(e)}function vs(t){return new ri(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ms(t){return xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function gs(t,e,n){return{name:hs(t,e),fields:n.value.mapValue.fields}}function ys(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Pr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(t,e){return t.wt?(xr(void 0===e||"string"==typeof e),Vi.fromBase64String(e||"")):(xr(void 0===e||e instanceof Uint8Array),Vi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,s=o&&function(t){const e=void 0===t.code?Fr.UNKNOWN:ko(t.code);return new jr(e,t.message||"")}(o);n=new Yo(r,i,a,s||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ds(t,r.document.name),a=ls(r.document.updateTime),o=r.document.createTime?ls(r.document.createTime):ei.min(),s=new Aa({mapValue:{fields:r.document.fields}}),l=Oa.newFoundDocument(i,a,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ko(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ds(t,r.document),a=r.readTime?ls(r.readTime):ei.min(),o=Oa.newNoDocument(i,a),s=r.removedTargetIds||[];n=new Ko([],s,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ds(t,r.document),a=r.removedTargetIds||[];n=new Ko([],a,i,null)}else{if(!("filter"in e))return Pr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new So(r),a=t.targetId;n=new Xo(a,i)}}return n}function bs(t,e){let n;if(e instanceof zo)n={update:gs(t,e.key,e.value)};else if(e instanceof Oo)n={delete:hs(t,e.key)};else if(e instanceof wo)n={update:gs(t,e.key,e.data),updateMask:_s(e.fieldMask)};else{if(!(e instanceof Vo))return Pr();n={verify:hs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof eo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof no)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof io)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof oo)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw Pr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ss(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Pr()}(t,e.precondition)),n}function zs(t,e){return t&&t.length>0?(xr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ls(t.updateTime):ls(e);return n.isEqual(ei.min())&&(n=ls(e)),new uo(n,t.transformResults||[])}(t,e)))):[]}function ws(t,e){return{documents:[fs(t,e.path)]}}function Ms(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=fs(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fs(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return ks(ta.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ts(t.field),direction:Vs(t.dir)}}(t)))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const o=function(t,e){return t.wt||Ai(e)?e:{value:e}}(t,e.limit);var s;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(s=e.startAt).inclusive,values:s.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function As(t){let e=ps(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let a=[];n.where&&(a=function(t){const e=Os(t);return e instanceof ta&&na(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new va(Is(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let s=null;n.limit&&(s=function(t){let e;return e="object"==typeof t?t.value:t,Ai(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Xi(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Xi(n,e)}(n.endAt)),_a(e,i,o,a,s,"F",l,c)}function Cs(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Pr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Os(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Is(t.unaryFilter.field);return Zi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Is(t.unaryFilter.field);return Zi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Is(t.unaryFilter.field);return Zi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Is(t.unaryFilter.field);return Zi.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Pr()}}(t):void 0!==t.fieldFilter?function(t){return Zi.create(Is(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ta.create(t.compositeFilter.filters.map((t=>Os(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Pr()}}(t.compositeFilter.op))}(t):Pr()}function Vs(t){return es[t]}function Ss(t){return ns[t]}function Hs(t){return rs[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Is(t){return ai.fromServerFormat(t.fieldPath)}function ks(t){return t instanceof Zi?function(t){if("=="===t.op){if(qi(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NAN"}};if(Ui(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(qi(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NAN"}};if(Ui(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(t.field),op:Ss(t.op),value:t.value}}}(t):t instanceof ta?function(t){const e=t.getFilters().map((t=>ks(t)));return 1===e.length?e[0]:{compositeFilter:{op:Hs(t.op),filters:e}}}(t):Pr()}function _s(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ls(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ps=Bs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&mo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=go(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=go(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fo();return this.mutations.forEach((r=>{const i=t.get(r.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=e.has(r.key)?null:o;const s=vo(a,o);null!==s&&n.set(r.key,s),a.isValidDocument()||a.convertToNoDocument(ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ro())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,((t,e)=>bo(t,e)))&&Zr(this.baseMutations,t.baseMutations,((t,e)=>bo(t,e)))}}class Ds{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){xr(t.mutations.length===n.length);let r=No;const i=t.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,n[a].version);return new Ds(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e,n,r,i=ei.min(),a=ei.min(),o=Vi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o}withSequenceNumber(t){return new js(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t){this.ie=t}}function $s(t){const e=As({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ja(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(Ti(t.integerValue));else if("doubleValue"in t){const n=Ti(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Ci(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Ii(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Ki(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Pr()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const r of Object.keys(n))this.de(r,e),this.ce(n[r],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const r of n)this.ce(r,e)}me(t,e){this.he(e,37),oi.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}}Rs.Ie=new Rs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(){this.Je=new qs}addToCollectionParentIndex(t,e){return this.Je.add(e),vi.resolve()}getCollectionParents(t,e){return vi.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return vi.resolve()}deleteFieldIndex(t,e){return vi.resolve()}getDocumentsMatchingTarget(t,e){return vi.resolve(null)}getIndexType(t,e){return vi.resolve(0)}getFieldIndexes(t,e){return vi.resolve([])}getNextCollectionGroupToUpdate(t){return vi.resolve(null)}getMinOffset(t,e){return vi.resolve(ui.min())}getMinOffsetFromCollectionGroup(t,e){return vi.resolve(ui.min())}updateCollectionGroup(t,e,n){return vi.resolve()}updateIndexEntries(t,e){return vi.resolve()}}class qs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new za(ri.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new za(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ws{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ws(t,Ws.DEFAULT_COLLECTION_PERCENTILE,Ws.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ws.DEFAULT_COLLECTION_PERCENTILE=10,Ws.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ws.DEFAULT=new Ws(41943040,Ws.DEFAULT_COLLECTION_PERCENTILE,Ws.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ws.DISABLED=new Ws(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Gs(0)}static vn(){return new Gs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{constructor(){this.changes=new _o((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Oa.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?vi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&go(n.mutation,t,Ma.empty(),ti.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ro()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ro()){const r=Do();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Po();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Do();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ro())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Eo();const a=jo(),o=jo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof wo)?i=i.insert(e.key,e):void 0!==o?(a.set(e.key,o.mutation.getFieldMask()),go(o.mutation,e,o.mutation.getFieldMask(),ti.now())):a.set(e.key,Ma.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>a.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Xs(e,null!==(n=a.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=jo();let r=new ga(((t,e)=>t-e)),i=Ro();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const a=e.get(t);if(null===a)return;let o=n.get(t)||Ma.empty();o=i.applyToLocalView(a,o),n.set(t,o);const s=(r.get(i.batchId)||Ro()).add(t);r=r.insert(i.batchId,s)}))})).next((()=>{const a=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),s=r.key,l=r.value,c=Fo();l.forEach((t=>{if(!i.has(t)){const r=vo(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),a.push(this.documentOverlayCache.saveOverlays(t,s,c))}return vi.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return oi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):vi.resolve(Do());let o=-1,s=i;return a.next((e=>vi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?vi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{s=s.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,s,e,Ro()))).next((t=>({batchId:o,changes:xo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new oi(e)).next((t=>{let e=Po();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Po();return this.indexManager.getCollectionParents(t,r).next((a=>vi.forEach(a,(a=>{const o=function(t,e){return new ka(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Oa.newInvalidDocument(r)))}));let n=Po();return t.forEach(((t,i)=>{const a=r.get(t);void 0!==a&&go(a.mutation,i,Ma.empty(),ti.now()),Ua(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return vi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:ls(n.createTime)}),vi.resolve()}getNamedQuery(t,e){return vi.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:$s(t.bundledQuery),readTime:ls(t.readTime)}}(e)),vi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.overlays=new ga(oi.comparator),this.es=new Map}getOverlay(t,e){return vi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Do();return vi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.oe(t,e,r)})),vi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),vi.resolve()}getOverlaysForCollection(t,e,n){const r=Do(),i=e.length+1,a=new oi(e.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const t=o.getNext().value,a=t.getKey();if(!e.isPrefixOf(a.path))break;a.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return vi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ga(((t,e)=>t-e));const a=this.overlays.getIterator();for(;a.hasNext();){const t=a.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Do(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Do(),s=i.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return vi.resolve(o)}oe(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Fs(e,n));let i=this.es.get(e);void 0===i&&(i=Ro(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.ns=new za(tl.ss),this.rs=new za(tl.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new tl(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new tl(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new oi(new ri([])),n=new tl(e,t),r=new tl(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new oi(new ri([])),n=new tl(e,t),r=new tl(e,t+1);let i=Ro();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new tl(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class tl{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return oi.comparator(t.key,e.key)||Qr(t._s,e._s)}static os(t,e){return Qr(t._s,e._s)||oi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new za(tl.ss)}checkEmpty(t){return vi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new xs(i,e,n,r);this.mutationQueue.push(a);for(const o of r)this.gs=this.gs.add(new tl(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return vi.resolve(a)}lookupMutationBatch(t,e){return vi.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return vi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return vi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return vi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new tl(e,0),r=new tl(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),vi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new za(Qr);return e.forEach((t=>{const e=new tl(t,0),r=new tl(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),vi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const a=new tl(new oi(i),0);let o=new za(Qr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),a),vi.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){xr(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return vi.forEach(e.mutations,(r=>{const i=new tl(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new tl(e,0),r=this.gs.firstAfterOrEqual(n);return vi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,vi.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t){this.Es=t,this.docs=new ga(oi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,a=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return vi.resolve(n?n.document.mutableCopy():Oa.newInvalidDocument(e))}getEntries(t,e){let n=Eo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Oa.newInvalidDocument(t))})),vi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Eo();const a=e.path,o=new oi(a.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:t,value:{document:o}}=s.getNext();if(!a.isPrefixOf(t.path))break;t.path.length>a.length+1||hi(ci(o),n)<=0||(r.has(o.key)||Ua(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return vi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Pr()}As(t,e){return vi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new rl(this)}getSize(t){return vi.resolve(this.size)}}class rl extends Ks{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),vi.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this.persistence=t,this.Rs=new _o((t=>Ha(t)),Ta),this.lastRemoteSnapshotVersion=ei.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Zs,this.targetCount=0,this.vs=Gs.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),vi.resolve()}getLastRemoteSnapshotVersion(t){return vi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return vi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),vi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),vi.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Gs(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,vi.resolve()}updateTargetData(t,e){return this.Dn(e),vi.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,vi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((a,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(a),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),vi.waitFor(i).next((()=>r))}getTargetCount(t){return vi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return vi.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),vi.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),vi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),vi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return vi.resolve(n)}containsKey(t,e){return vi.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new gi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new il(this),this.indexManager=new Us,this.remoteDocumentCache=function(t){return new nl(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new Ns(e),this.Ns=new Js(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qs,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new el(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){_r("MemoryPersistence","Starting transaction:",t);const r=new ol(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return vi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class ol extends fi{constructor(t){super(),this.currentSequenceNumber=t}}class sl{constructor(t){this.persistence=t,this.Fs=new Zs,this.$s=null}static Bs(t){return new sl(t)}get Ls(){if(this.$s)return this.$s;throw Pr()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),vi.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),vi.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),vi.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return vi.forEach(this.Ls,(n=>{const r=oi.fromPath(n);return this.qs(t,r).next((t=>{t||e.removeEntry(r,ei.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return vi.or([()=>vi.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=Ro(),r=Ro();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ll(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(Ea(e))return vi.resolve(null);let n=Fa(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ja(e,null,"F"),n=Fa(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ro(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const a=this.Fi(e,r);return this.$i(e,a,i,n.readTime)?this.ki(t,ja(e,null,"F")):this.Bi(t,a,e,n)}))))})))))}Oi(t,e,n,r){return Ea(e)||r.isEqual(ei.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const a=this.Fi(e,i);return this.$i(e,a,n,r)?this.Mi(t,e):(kr()<=o["in"].DEBUG&&_r("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ra(e)),this.Bi(t,a,e,li(r,-1)))}))}Fi(t,e){let n=new za(Wa(t));return e.forEach(((e,r)=>{Ua(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return kr()<=o["in"].DEBUG&&_r("QueryEngine","Using full collection scan to execute query:",Ra(e)),this.Ni.getDocumentsMatchingQuery(t,e,ui.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.yt=r,this.qi=new ga(Qr),this.Ui=new _o((t=>Ha(t)),Ta),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ys(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}}function hl(t,e,n,r){return new ul(t,e,n,r)}async function dl(t,e){const n=Dr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],a=[];let o=Ro();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){a.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:a})))}))}))}function fl(t,e){const n=Dr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,a=i.keys();let o=vi.resolve();return a.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const a=n.docVersions.get(t);xr(null!==a),e.version.compareTo(a)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ro();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function pl(t){const e=Dr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function vl(t,e){const n=Dr(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const a=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];e.targetChanges.forEach(((a,s)=>{const l=i.get(s);if(!l)return;o.push(n.Cs.removeMatchingKeys(t,a.removedDocuments,s).next((()=>n.Cs.addMatchingKeys(t,a.addedDocuments,s))));let c=l.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(s)?c=c.withResumeToken(Vi.EMPTY_BYTE_STRING,ei.min()).withLastLimboFreeSnapshotVersion(ei.min()):a.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(a.resumeToken,r)),i=i.insert(s,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,a)&&o.push(n.Cs.updateTargetData(t,c))}));let s=Eo(),l=Ro();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ml(t,a,e.documentUpdates).next((t=>{s=t.Wi,l=t.zi}))),!r.isEqual(ei.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return vi.waitFor(o).next((()=>a.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,s,l))).next((()=>s))})).then((t=>(n.qi=i,t)))}function ml(t,e,n){let r=Ro(),i=Ro();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Eo();return n.forEach(((n,a)=>{const o=t.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(ei.min())?(e.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(a),r=r.insert(n,a)):_r("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{Wi:r,zi:i}}))}function gl(t,e){const n=Dr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function yl(t,e){const n=Dr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((i=>i?(r=i,vi.resolve(r)):n.Cs.allocateTargetId(t).next((i=>(r=new js(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.qi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function bl(t,e,n){const r=Dr(t),i=r.qi.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!mi(t))throw t;_r("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function zl(t,e,n){const r=Dr(t);let i=ei.min(),a=Ro();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Dr(t),i=r.Ui.get(n);return void 0!==i?vi.resolve(r.qi.get(i)):r.Cs.getTargetData(e,n)}(r,t,Fa(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{a=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:ei.min(),n?a:Ro()))).next((t=>(wl(r,qa(e),t),{documents:t,Hi:a})))))}function wl(t,e,n){let r=t.Ki.get(e)||ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class Ml{constructor(){this.activeTargetIds=qo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Al{constructor(){this.Lr=new Ml,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Ml,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{Ur(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){_r("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){_r("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const a=this.ho(t,e);_r("RestConnection","Sending: ",a,n);const o={};return this.lo(o,r,i),this.fo(t,a,o,n).then((t=>(_r("RestConnection","Received: ",t),t)),(e=>{throw Er("RestConnection",`${t} failed with error: `,e,"url: ",a,"request:",n),e}))}_o(t,e,n,r,i,a){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Tr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Vl[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((i,a)=>{const o=new Vr;o.setWithCredentials(!0),o.listenOnce(wr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case zr.NO_ERROR:const e=o.getResponseJson();_r("Connection","XHR received:",JSON.stringify(e)),i(e);break;case zr.TIMEOUT:_r("Connection",'RPC "'+t+'" timed out'),a(new jr(Fr.DEADLINE_EXCEEDED,"Request time out"));break;case zr.HTTP_ERROR:const n=o.getStatus();if(_r("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Fr).indexOf(e)>=0?e:Fr.UNKNOWN}(e.status);a(new jr(t,e.message))}else a(new jr(Fr.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new jr(Fr.UNAVAILABLE,"Connection failed."));break;default:Pr()}}finally{_r("Connection",'RPC "'+t+'" completed.')}}));const s=JSON.stringify(r);o.send(e,"POST",s,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=yr(),a=br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Cr({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const s=r.join("");_r("Connection","Creating WebChannel: "+s,o);const l=i.createWebChannel(s,o);let c=!1,u=!1;const h=new Sl({Hr:t=>{u?_r("Connection","Not sending because WebChannel is closed:",t):(c||(_r("Connection","Opening WebChannel transport."),l.open(),c=!0),_r("Connection","WebChannel sending:",t),l.send(t))},Jr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,Or.EventType.OPEN,(()=>{u||_r("Connection","WebChannel transport opened.")})),d(l,Or.EventType.CLOSE,(()=>{u||(u=!0,_r("Connection","WebChannel transport closed"),h.io())})),d(l,Or.EventType.ERROR,(t=>{u||(u=!0,Er("Connection","WebChannel transport errored:",t),h.io(new jr(Fr.UNAVAILABLE,"The operation could not be completed")))})),d(l,Or.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];xr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){_r("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ho[t];if(void 0!==e)return ko(e)}(t),n=i.message;void 0===e&&(e=Fr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,h.io(new jr(e,n)),l.close()}else _r("Connection","WebChannel received:",n),h.ro(n)}})),d(a,Mr.STAT_EVENT,(t=>{t.stat===Ar.PROXY?_r("Connection","Detected buffering proxy"):t.stat===Ar.NOPROXY&&_r("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){return new is(t,!0)}class kl{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&_r("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,n,r,i,a,o,s){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new kl(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Fr.RESOURCE_EXHAUSTED?(Lr(e.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===Fr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new jr(Fr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return _r("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(_r("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ll extends _l{constructor(t,e,n,r,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,a),this.yt=i}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=ys(this.yt,t),n=function(t){if(!("targetChange"in t))return ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ei.min():e.readTime?ls(e.readTime):ei.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=vs(this.yt),e.addTarget=function(t,e){let n;const r=e.target;return n=Ia(r)?{documents:ws(t,r)}:{query:Ms(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=os(t,e.resumeToken):e.snapshotVersion.compareTo(ei.min())>0&&(n.readTime=as(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=Cs(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=vs(this.yt),e.removeTarget=t,this.Bo(e)}}class El extends _l{constructor(t,e,n,r,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,a),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(xr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=zs(t.writeResults,t.commitTime),n=ls(t.commitTime);return this.listener.Zo(n,e)}return xr(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=vs(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>bs(this.yt,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new jr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jr(Fr.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection._o(t,e,n,i,a,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jr(Fr.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class Pl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Lr(e),this.ou=!1):_r("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{Wl(this)&&(_r("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Dr(t);e._u.add(4),await Fl(e),e.gu.set("Unknown"),e._u.delete(4),await Dl(e)}(this))}))})),this.gu=new Pl(n,r)}}async function Dl(t){if(Wl(t))for(const e of t.wu)await e(!0)}async function Fl(t){for(const e of t.wu)await e(!1)}function jl(t,e){const n=Dr(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ql(n)?Ul(n):uc(n).ko()&&$l(n,e))}function Nl(t,e){const n=Dr(t),r=uc(n);n.du.delete(e),r.ko()&&Rl(n,e),0===n.du.size&&(r.ko()?r.Fo():Wl(n)&&n.gu.set("Unknown"))}function $l(t,e){t.yu.Ot(e.targetId),uc(t).zo(e)}function Rl(t,e){t.yu.Ot(e),uc(t).Ho(e)}function Ul(t){t.yu=new Qo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),uc(t).start(),t.gu.uu()}function ql(t){return Wl(t)&&!uc(t).No()&&t.du.size>0}function Wl(t){return 0===Dr(t)._u.size}function Gl(t){t.yu=void 0}async function Kl(t){t.du.forEach(((e,n)=>{$l(t,e)}))}async function Xl(t,e){Gl(t),ql(t)?(t.gu.hu(e),Ul(t)):t.gu.set("Unknown")}async function Yl(t,e,n){if(t.gu.set("Online"),e instanceof Yo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){_r("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Jl(t,n)}else if(e instanceof Ko?t.yu.Kt(e):e instanceof Xo?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ei.min()))try{const e=await pl(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(r);i&&t.du.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Vi.EMPTY_BYTE_STRING,n.snapshotVersion)),Rl(t,e);const r=new js(n.target,e,1,n.sequenceNumber);$l(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){_r("RemoteStore","Failed to raise snapshot:",e),await Jl(t,e)}}async function Jl(t,e,n){if(!mi(e))throw e;t._u.add(1),await Fl(t),t.gu.set("Offline"),n||(n=()=>pl(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{_r("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Dl(t)}))}function Ql(t,e){return e().catch((n=>Jl(t,n,e)))}async function Zl(t){const e=Dr(t),n=hc(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;tc(e);)try{const t=await gl(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,ec(e,t)}catch(t){await Jl(e,t)}nc(e)&&rc(e)}function tc(t){return Wl(t)&&t.fu.length<10}function ec(t,e){t.fu.push(e);const n=hc(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function nc(t){return Wl(t)&&!hc(t).No()&&t.fu.length>0}function rc(t){hc(t).start()}async function ic(t){hc(t).eu()}async function ac(t){const e=hc(t);for(const n of t.fu)e.Xo(n.mutations)}async function oc(t,e,n){const r=t.fu.shift(),i=Ds.from(r,e,n);await Ql(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Zl(t)}async function sc(t,e){e&&hc(t).Yo&&await async function(t,e){if(n=e.code,Io(n)&&n!==Fr.ABORTED){const n=t.fu.shift();hc(t).Mo(),await Ql(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zl(t)}var n}(t,e),nc(t)&&rc(t)}async function lc(t,e){const n=Dr(t);n.asyncQueue.verifyOperationInProgress(),_r("RemoteStore","RemoteStore received new credentials");const r=Wl(n);n._u.add(3),await Fl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Dl(n)}async function cc(t,e){const n=Dr(t);e?(n._u.delete(2),await Dl(n)):e||(n._u.add(2),await Fl(n),n.gu.set("Unknown"))}function uc(t){return t.pu||(t.pu=function(t,e,n){const r=Dr(t);return r.su(),new Ll(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Kl.bind(null,t),Zr:Xl.bind(null,t),Wo:Yl.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),ql(t)?Ul(t):t.gu.set("Unknown")):(await t.pu.stop(),Gl(t))}))),t.pu}function hc(t){return t.Iu||(t.Iu=function(t,e,n){const r=Dr(t);return r.su(),new El(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(t.datastore,t.asyncQueue,{Yr:ic.bind(null,t),Zr:sc.bind(null,t),tu:ac.bind(null,t),Zo:oc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Zl(t)):(await t.Iu.stop(),t.fu.length>0&&(_r("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const a=Date.now()+n,o=new dc(t,e,a,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jr(Fr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fc(t,e){if(Lr("AsyncQueue",`${e}: ${t}`),mi(t))return new jr(Fr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||oi.comparator(e.key,n.key):(t,e)=>oi.comparator(t.key,e.key),this.keyedMap=Po(),this.sortedSet=new ga(this.comparator)}static emptySet(t){return new pc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new pc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.Tu=new ga(oi.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Pr():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class mc{constructor(t,e,n,r,i,a,o,s,l){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(t,e,n,r,i){const a=[];return e.forEach((t=>{a.push({type:0,doc:t})})),new mc(t,e,pc.emptySet(e),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Na(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.Au=void 0,this.listeners=[]}}class yc{constructor(){this.queries=new _o((t=>$a(t)),Na),this.onlineState="Unknown",this.Ru=new Set}}async function bc(t,e){const n=Dr(t),r=e.query;let i=!1,a=n.queries.get(r);if(a||(i=!0,a=new gc),i)try{a.Au=await n.onListen(r)}catch(t){const n=fc(t,`Initialization of query '${Ra(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,a),a.listeners.push(e),e.bu(n.onlineState),a.Au&&e.Pu(a.Au)&&Ac(n)}async function zc(t,e){const n=Dr(t),r=e.query;let i=!1;const a=n.queries.get(r);if(a){const t=a.listeners.indexOf(e);t>=0&&(a.listeners.splice(t,1),i=0===a.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function wc(t,e){const n=Dr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(i)&&(r=!0);e.Au=i}}r&&Ac(n)}function Mc(t,e,n){const r=Dr(t),i=r.queries.get(e);if(i)for(const a of i.listeners)a.onError(n);r.queries.delete(e)}function Ac(t){t.Ru.forEach((t=>{t.next()}))}class Cc{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new mc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=mc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{constructor(t){this.key=t}}class Vc{constructor(t){this.key=t}}class Sc{constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ro(),this.mutatedKeys=Ro(),this.Gu=Wa(t),this.Qu=new pc(this.Gu)}get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new vc,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,a=r,o=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),u=Ua(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(c,u)||(n.track({type:2,doc:u}),f=!0,(s&&this.Gu(u,s)>0||l&&this.Gu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(s||l)&&(o=!0)),f&&(u?(a=a.add(u),i=d?i.add(t):i.delete(t)):(a=a.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;a.size>this.query.limit;){const t="F"===this.query.limitType?a.last():a.first();a=a.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:a,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const a=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,s=o!==this.Uu;return this.Uu=o,0!==i.length||s?{snapshot:new mc(this.query,t.Qu,r,i,t.mutatedKeys,0===o,s,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:a}:{Xu:a}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new vc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Ro(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Vc(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Oc(n))})),e}tc(t){this.qu=t.Hi,this.Ku=Ro();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return mc.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Hc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Tc{constructor(t){this.key=t,this.nc=!1}}class Ic{constructor(t,e,n,r,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.sc={},this.ic=new _o((t=>$a(t)),Na),this.rc=new Map,this.oc=new Set,this.uc=new ga(oi.comparator),this.cc=new Map,this.ac=new Zs,this.hc={},this.lc=new Map,this.fc=Gs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function kc(t,e){const n=Yc(t);let r,i;const a=n.ic.get(e);if(a)r=a.targetId,n.sharedClientState.addLocalQueryTarget(r),i=a.view.ec();else{const t=await yl(n.localStore,Fa(e));n.isPrimaryClient&&jl(n.remoteStore,t);const a=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await _c(n,e,r,"current"===a,t.resumeToken)}return i}async function _c(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await zl(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const a=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,a);return Uc(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const a=await zl(t.localStore,e,!0),o=new Sc(e,a.Hi),s=o.Wu(a.documents),l=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(s,t.isPrimaryClient,l);Uc(t,n,c.Xu);const u=new Hc(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function Lc(t,e){const n=Dr(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((t=>!Na(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Nl(n.remoteStore,r.targetId),$c(n,r.targetId)})).catch(pi)):($c(n,r.targetId),await bl(n.localStore,r.targetId,!0))}async function Ec(t,e,n){const r=Jc(t);try{const t=await function(t,e){const n=Dr(t),r=ti.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ro());let a,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let s=Eo(),l=Ro();return n.Gi.getEntries(t,i).next((t=>{s=t,s.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,s))).next((i=>{a=i;const o=[];for(const t of e){const e=yo(t,a.get(t.key).overlayedDocument);null!=e&&o.push(new wo(t.key,e,Ca(e.value.mapValue),ho.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(a,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xo(a)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new ga(Qr)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Gc(r,t.changes),await Zl(r.remoteStore)}catch(t){const e=fc(t,"Failed to persist write");n.reject(e)}}async function Bc(t,e){const n=Dr(t);try{const t=await vl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(xr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?xr(r.nc):t.removedDocuments.size>0&&(xr(r.nc),r.nc=!1))})),await Gc(n,t,e)}catch(t){await pi(t)}}function Pc(t,e,n){const r=Dr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Dr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.bu(e)&&(r=!0)})),r&&Ac(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xc(t,e,n){const r=Dr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),a=i&&i.key;if(a){let t=new ga(oi.comparator);t=t.insert(a,Oa.newNoDocument(a,ei.min()));const n=Ro().add(a),i=new Wo(ei.min(),new Map,new za(Qr),t,n);await Bc(r,i),r.uc=r.uc.remove(a),r.cc.delete(e),Wc(r)}else await bl(r.localStore,e,!1).then((()=>$c(r,e,n))).catch(pi)}async function Dc(t,e){const n=Dr(t),r=e.batch.batchId;try{const t=await fl(n.localStore,e);Nc(n,r,null),jc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gc(n,t)}catch(t){await pi(t)}}async function Fc(t,e,n){const r=Dr(t);try{const t=await function(t,e){const n=Dr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(xr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Nc(r,e,n),jc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gc(r,t)}catch(n){await pi(n)}}function jc(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Nc(t,e,n){const r=Dr(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function $c(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Rc(t,e)}))}function Rc(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Nl(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Wc(t))}function Uc(t,e,n){for(const r of n)r instanceof Oc?(t.ac.addReference(r.key,e),qc(t,r)):r instanceof Vc?(_r("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Rc(t,r.key)):Pr()}function qc(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(_r("SyncEngine","New document in limbo: "+n),t.oc.add(r),Wc(t))}function Wc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new oi(ri.fromString(e)),r=t.fc.next();t.cc.set(r,new Tc(n)),t.uc=t.uc.insert(n,r),jl(t.remoteStore,new js(Fa(La(n.path)),r,2,gi.at))}}async function Gc(t,e,n){const r=Dr(t),i=[],a=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((t,s)=>{o.push(r._c(s,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(s.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=ll.Ci(s.targetId,t);a.push(e)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(t,e){const n=Dr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>vi.forEach(e,(e=>vi.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>vi.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!mi(t))throw t;_r("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,i)}}}(r.localStore,a))}async function Kc(t,e){const n=Dr(t);if(!n.currentUser.isEqual(e)){_r("SyncEngine","User change. New user:",e.toKey());const t=await dl(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new jr(Fr.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Gc(n,t.ji)}}function Xc(t,e){const n=Dr(t),r=n.cc.get(e);if(r&&r.nc)return Ro().add(r.key);{let t=Ro();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function Yc(t){const e=Dr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xc.bind(null,e),e.sc.Wo=wc.bind(null,e.eventManager),e.sc.wc=Mc.bind(null,e.eventManager),e}function Jc(t){const e=Dr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fc.bind(null,e),e}class Qc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Il(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return hl(this.persistence,new cl,t.initialUser,this.yt)}yc(t){return new al(sl.Bs,this.yt)}gc(t){return new Al}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Pc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kc.bind(null,this.syncEngine),await cc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yc}createDatastore(t){const e=Il(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Hl(r));var r;return function(t,e,n,r){return new Bl(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Pc(this.syncEngine,t,0),a=Ol.C()?new Ol:new Cl,new xl(e,n,r,i,a);var e,n,r,i,a}createSyncEngine(t,e){return function(t,e,n,r,i,a,o){const s=new Ic(t,e,n,r,i,a);return o&&(s.dc=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Dr(t);_r("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Fl(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e,n){if(!n)throw new jr(Fr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eu(t,e,n,r){if(!0===e&&!0===r)throw new jr(Fr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nu(t){if(!oi.isDocumentKey(t))throw new jr(Fr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ru(t){if(oi.isDocumentKey(t))throw new jr(Fr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function iu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Pr()}function au(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new jr(Fr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iu(t);throw new jr(Fr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ou=new Map;class su{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new jr(Fr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new jr(Fr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,eu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new su({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jr(Fr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new jr(Fr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new su(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Rr;switch(t.type){case"gapi":const e=t.client;return new Gr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new jr(Fr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ou.get(t);e&&(_r("ComponentProvider","Removing Datastore"),ou.delete(t),e.terminate())}(this),Promise.resolve()}}function cu(t,e,n,r={}){var i;const a=(t=au(t,lu))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==e&&Er("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},a),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Hr.MOCK_USER;else{e=(0,s.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const a=r.mockUserToken.sub||r.mockUserToken.user_id;if(!a)throw new jr(Fr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Hr(a)}t._authCredentials=new Ur(new $r(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new du(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new uu(this.firestore,t,this._key)}}class hu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hu(this.firestore,t,this._query)}}class du extends hu{constructor(t,e,n){super(t,e,La(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new uu(this.firestore,null,new oi(t))}withConverter(t){return new du(this.firestore,t,this._path)}}function fu(t,e,...n){if(t=(0,s.m9)(t),tu("collection","path",e),t instanceof lu){const r=ri.fromString(e,...n);return ru(r),new du(t,null,r)}{if(!(t instanceof uu||t instanceof du))throw new jr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return ru(r),new du(t.firestore,null,r)}}function pu(t,e,...n){if(t=(0,s.m9)(t),1===arguments.length&&(e=Jr.R()),tu("doc","path",e),t instanceof lu){const r=ri.fromString(e,...n);return nu(r),new uu(t,null,new oi(r))}{if(!(t instanceof uu||t instanceof du))throw new jr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return nu(r),new uu(t.firestore,t instanceof du?t.converter:null,new oi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Lr("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Hr.UNAUTHENTICATED,this.clientId=Jr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{_r("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(_r("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=fc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function gu(t,e){t.asyncQueue.verifyOperationInProgress(),_r("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await dl(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function yu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bu(t);_r("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>lc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>lc(e.remoteStore,n))),t.onlineComponents=e}async function bu(t){return t.offlineComponents||(_r("FirestoreClient","Using default OfflineComponentProvider"),await gu(t,new Qc)),t.offlineComponents}async function zu(t){return t.onlineComponents||(_r("FirestoreClient","Using default OnlineComponentProvider"),await yu(t,new Zc)),t.onlineComponents}function wu(t){return zu(t).then((t=>t.syncEngine))}async function Mu(t){const e=await zu(t),n=e.eventManager;return n.onListen=kc.bind(null,e.syncEngine),n.onUnlisten=Lc.bind(null,e.syncEngine),n}function Au(t,e,n={}){const r=new Nr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const a=new vu({next:a=>{e.enqueueAndForget((()=>zc(t,o)));const s=a.docs.has(n);!s&&a.fromCache?i.reject(new jr(Fr.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&a.fromCache&&r&&"server"===r.source?i.reject(new jr(Fr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new Cc(La(n.path),a,{includeMetadataChanges:!0,Nu:!0});return bc(t,o)}(await Mu(t),t.asyncQueue,e,n,r))),r.promise}function Cu(t,e,n={}){const r=new Nr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const a=new vu({next:n=>{e.enqueueAndForget((()=>zc(t,o))),n.fromCache&&"server"===r.source?i.reject(new jr(Fr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Cc(n,a,{includeMetadataChanges:!0,Nu:!0});return bc(t,o)}(await Mu(t),t.asyncQueue,e,n,r))),r.promise}class Ou{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new kl(this,"async_queue_retry"),this.Wc=()=>{const t=Tl();t&&_r("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Tl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=Tl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new Nr;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(M){if(!mi(M))throw M;_r("AsyncQueue","Operation failed with retryable error: "+M)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Lr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=dc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(r),r}zc(){this.Kc&&Pr()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}class Vu extends lu{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ou,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tu(this),this._firestoreClient.terminate()}}function Su(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",a=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!a._initialized){const t=(0,s.P0)("firestore");t&&cu(a,...t)}return a}function Hu(t){return t._firestoreClient||Tu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tu(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new yi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new mu(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Iu(Vi.fromBase64String(t))}catch(t){throw new jr(Fr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Iu(Vi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new jr(Fr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ai(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _u{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new jr(Fr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new jr(Fr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Qr(this._lat,t._lat)||Qr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=/^__.*__$/;class Bu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new wo(t,this.data,this.fieldMask,e,this.fieldTransforms):new zo(t,this.data,e,this.fieldTransforms)}}class Pu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new wo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function xu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pr()}}class Du{constructor(t,e,n,r,i,a){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Du(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Qu(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(xu(this.sa)&&Eu.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Fu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||Il(t)}da(t,e,n,r=!1){return new Du({sa:t,methodName:e,fa:n,path:ai.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ju(t){const e=t._freezeSettings(),n=Il(t._databaseId);return new Fu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nu(t,e,n,r,i,a={}){const o=t.da(a.merge||a.mergeFields?2:0,e,n,i);Ku("Data must be an object, but it was:",o,r);const s=Wu(r,o);let l,c;if(a.merge)l=new Ma(o.fieldMask),c=o.fieldTransforms;else if(a.mergeFields){const t=[];for(const r of a.mergeFields){const i=Xu(e,r,n);if(!o.contains(i))throw new jr(Fr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Zu(t,i)||t.push(i)}l=new Ma(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Bu(new Aa(s),l,c)}class $u extends _u{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $u}}function Ru(t,e,n,r){const i=t.da(1,e,n);Ku("Data must be an object, but it was:",i,r);const a=[],o=Aa.empty();wi(r,((t,r)=>{const l=Ju(e,t,n);r=(0,s.m9)(r);const c=i.ca(l);if(r instanceof $u)a.push(l);else{const t=qu(r,c);null!=t&&(a.push(l),o.set(l,t))}}));const l=new Ma(a);return new Pu(o,l,i.fieldTransforms)}function Uu(t,e,n,r,i,a){const o=t.da(1,e,n),l=[Xu(e,r,n)],c=[i];if(a.length%2!=0)throw new jr(Fr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<a.length;s+=2)l.push(Xu(e,a[s])),c.push(a[s+1]);const u=[],h=Aa.empty();for(let f=l.length-1;f>=0;--f)if(!Zu(u,l[f])){const t=l[f];let e=c[f];e=(0,s.m9)(e);const n=o.ca(t);if(e instanceof $u)u.push(t);else{const r=qu(e,n);null!=r&&(u.push(t),h.set(t,r))}}const d=new Ma(u);return new Pu(h,d,o.fieldTransforms)}function qu(t,e){if(Gu(t=(0,s.m9)(t)))return Ku("Unsupported field value:",e,t),Wu(t,e);if(t instanceof _u)return function(t,e){if(!xu(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=qu(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,s.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ya(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ti.fromDate(t);return{timestampValue:as(e.yt,n)}}if(t instanceof ti){const n=new ti(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:as(e.yt,n)}}if(t instanceof Lu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Iu)return{bytesValue:os(e.yt,t._byteString)};if(t instanceof uu){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:cs(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${iu(t)}`)}(t,e)}function Wu(t,e){const n={};return Mi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wi(t,((t,r)=>{const i=qu(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Gu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ti||t instanceof Lu||t instanceof Iu||t instanceof uu||t instanceof _u)}function Ku(t,e,n){if(!Gu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=iu(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Xu(t,e,n){if((e=(0,s.m9)(e))instanceof ku)return e._internalPath;if("string"==typeof e)return Ju(t,e);throw Qu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yu=new RegExp("[~\\*/\\[\\]]");function Ju(t,e,n){if(e.search(Yu)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ku(...e.split("."))._internalPath}catch(r){throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qu(t,e,n,r,i){const a=r&&!r.isEmpty(),o=void 0!==i;let s=`Function ${e}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(a||o)&&(l+=" (found",a&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new jr(Fr.INVALID_ARGUMENT,s+t+l)}function Zu(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new uu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new eh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(nh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class eh extends th{data(){return super.data()}}function nh(t,e){return"string"==typeof e?Ju(t,e):e instanceof ku?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new jr(Fr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ih{convertValue(t,e="none"){switch(Bi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ti(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ii(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Pr()}}convertObject(t,e){const n={};return wi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Lu(Ti(t.latitude),Ti(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=_i(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Li(t));default:return null}}convertTimestamp(t){const e=Hi(t);return new ti(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ri.fromString(t);xr(Ls(n));const r=new bi(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return r.isEqual(e)||Lr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sh extends th{constructor(t,e,n,r,i,a){super(t,e,n,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(nh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lh extends sh{data(t={}){return super.data(t)}}class ch{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new oh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new lh(this._firestore,this._userDataWriter,n.key,n,new oh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new jr(Fr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new lh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new oh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new lh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new oh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,a=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),a=n.indexOf(e.doc.key)),{type:uh(e.type),doc:r,oldIndex:i,newIndex:a}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function uh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Pr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hh(t){t=au(t,uu);const e=au(t.firestore,Vu);return Au(Hu(e),t._key).then((n=>yh(e,t,n)))}class dh extends ih{constructor(t){super(),this.firestore=t}convertBytes(t){return new Iu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new uu(this.firestore,null,e)}}function fh(t){t=au(t,hu);const e=au(t.firestore,Vu),n=Hu(e),r=new dh(e);return rh(t._query),Cu(n,t._query).then((n=>new ch(e,r,t,n)))}function ph(t,e,n){t=au(t,uu);const r=au(t.firestore,Vu),i=ah(t.converter,e,n);return gh(r,[Nu(ju(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ho.none())])}function vh(t,e,n,...r){t=au(t,uu);const i=au(t.firestore,Vu),a=ju(i);let o;return o="string"==typeof(e=(0,s.m9)(e))||e instanceof ku?Uu(a,"updateDoc",t._key,e,n,r):Ru(a,"updateDoc",t._key,e),gh(i,[o.toMutation(t._key,ho.exists(!0))])}function mh(t){return gh(au(t.firestore,Vu),[new Oo(t._key,ho.none())])}function gh(t,e){return function(t,e){const n=new Nr;return t.asyncQueue.enqueueAndForget((async()=>Ec(await wu(t),e,n))),n.promise}(Hu(t),e)}function yh(t,e,n){const r=n.docs.get(e._key),i=new dh(t);return new sh(t,i,e._key,r,new oh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Tr=t}(i.Jn),(0,i.Xd)(new a.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),a=new Vu(new qr(t.getProvider("auth-internal")),new Xr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new jr(Fr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Sr,"3.8.3",t),(0,i.KN)(Sr,"3.8.3","esm2017")}()},3831:function(t,e,n){"use strict";n.d(e,{X3:function(){return w}});n(2801);const r=(t,e)=>e.some((e=>t instanceof e));let i,a;function o(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s(){return a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;function f(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{e(b(t.result)),r()},a=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&l.set(e,t)})).catch((()=>{})),d.set(e,t),e}function p(t){if(c.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{e(),r()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)}));c.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return c.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function m(t){v=t(v)}function g(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?s().includes(t)?function(...e){return t.apply(z(this),e),b(l.get(this))}:function(...e){return b(t.apply(z(this),e))}:function(e,...n){const r=t.call(z(this),e,...n);return u.set(r,e.sort?e.sort():[e]),b(r)}}function y(t){return"function"===typeof t?g(t):(t instanceof IDBTransaction&&p(t),r(t,o())?new Proxy(t,v):t)}function b(t){if(t instanceof IDBRequest)return f(t);if(h.has(t))return h.get(t);const e=y(t);return e!==t&&(h.set(t,e),d.set(e,t)),e}const z=t=>d.get(t);function w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(t,e),s=b(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(b(o.result),t.oldVersion,t.newVersion,b(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((t=>{a&&t.addEventListener("close",(()=>a())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}const M=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],C=new Map;function O(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!M.includes(n))return;const a=async function(t,...e){const a=this.transaction(t,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&a.done]))[0]};return C.set(e,a),a}m((t=>({...t,get:(e,n,r)=>O(e,n)||t.get(e,n,r),has:(e,n)=>!!O(e,n)||t.has(e,n)})))}}]);
//# sourceMappingURL=chunk-vendors.6aa0b789.js.map