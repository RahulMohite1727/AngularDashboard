(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"7YV4":function(e,t,n){"use strict";var r=n("ANjH"),o=n("zE9r"),i=n("gnCc");n("AJX/"),n("HxAg"),n("sZVO"),n("FaTO"),n("w/7T");var u=n("ilyr"),c=n("qEhT"),a=n("GDmm"),s=n("y85s"),l=["string","string[]","number","symbol","function"],f="Expected selector to be one of:\n    "+l.join(",")+". Instead recieved %s";t.NgRedux=function(){function e(t){var n=this;this.ngZone=t,this._store=null,this._store$=null,this.getState=function(){return n._store.getState()},this.subscribe=function(e){return n._store.subscribe(e)},this.replaceReducer=function(e){return n._store.replaceReducer(e)},this.dispatch=function(e){return a.invariant(!!n._store,"Dispatch failed: did you forget to configure your store? https://github.com/angular-redux/ng2-redux/blob/master/README.md#quick-start"),n.ngZone.run((function(){return n._store.dispatch(e)}))},e.instance=this,this._store$=new i.BehaviorSubject(null).filter((function(e){return null!==e})).switchMap((function(e){return o.Observable.from(e)}))}return e.prototype.configureStore=function(e,t,n,o){void 0===n&&(n=[]),void 0===o&&(o=[]),a.invariant(!this._store,"Store already configured!");var i=r.compose.apply(void 0,[r.applyMiddleware.apply(void 0,n)].concat(o))(r.createStore)(e,t);this.setStore(i)},e.prototype.provideStore=function(e){a.invariant(!this._store,"Store already configured!"),this.setStore(e)},e.prototype.select=function(e,t){if(!e)return this._store$.distinctUntilChanged(t);var n;a.invariant(l.indexOf(typeof(n=e),0)>=0||Array.isArray(n),f,e);var r=this._store$.distinctUntilChanged();return("string"==typeof e||"number"==typeof e||"symbol"==typeof e?r.map((function(t){return t[e]})):Array.isArray(e)?r.map((function(t){return s.getIn(t,e)})):r.map(e)).distinctUntilChanged(t)},e.prototype.getStateSlice=function(e,t){var n=t(e);return a.invariant(u.isPlainObject(n),"`mapStateToScope` must return an object. Instead received %s.",n),n},e.prototype.setStore=function(e){this._store=e,this._store$.next(e),this._defaultMapStateToTarget=function(){return{}},this._defaultMapDispatchToTarget=function(e){return{dispatch:e}};var t=c.omit(e,["dispatch","getState","subscribe","replaceReducer"]);Object.assign(this,t)},e}()},"AJX/":function(e,t,n){"use strict";n.r(t);var r=n("HDdC"),o=n("lJxs");r.a.prototype.map=function(e,t){return Object(o.a)(e,t)(this)}},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return b})),n.d(t,"bindActionCreators",(function(){return f})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return y})),n.d(t,"createStore",(function(){return c}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var a=e,s=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=f.indexOf(e);f.splice(n,1),l=null}}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=a(s,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++)(0,t[n])();return e}function v(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,b({type:i.REPLACE})}function g(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return b({type:i.INIT}),(o={dispatch:b,subscribe:y,getState:h,replaceReducer:v})[r.a]=g,o}function a(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var u,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){u=s}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},i=0;i<c.length;i++){var s=c[i],l=e[s],f=(0,n[s])(l,t);if(void 0===f){var d=a(s,t);throw new Error(d)}o[s]=f,r=r||f!==l}return(r=r||c.length!==Object.keys(e).length)?o:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"==typeof e)return l(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=l(o,t))}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return h({},n,{dispatch:r=y.apply(void 0,i)(n.dispatch)})}}}},FaTO:function(e,t,n){"use strict";n.r(t);var r=n("HDdC"),o=n("/uUt");r.a.prototype.distinctUntilChanged=function(e,t){return Object(o.a)(e,t)(this)}},GDmm:function(e,t,n){"use strict";t.invariant=function(e,t,n){if(!e){var r=t;throw n&&(r=-1!==t.indexOf("%s")?t.replace("%s",n):r=t+": "+n),new Error(r)}}},"H/L9":function(e,t,n){"use strict";var r=n("8Y7J"),o=(n("7YV4"),n("8Y7J")),i="undefined"!=typeof window?window:this;t.DevToolsExtension=function(){function e(e,t){var n=this;this.appRef=e,this.ngRedux=t,this.enhancer=function(e){var t;return n.isEnabled()?(i.devToolsExtension.listen((function(e){var r=e.type;"START"===r?t=n.ngRedux.subscribe((function(){o.NgZone.isInAngularZone()||n.appRef.tick()})):"STOP"===r&&t()})),i.devToolsExtension(e)):null}}return e.prototype.isEnabled=function(){return i&&i.devToolsExtension},e.decorators=[{type:r.Injectable}],e}()},HxAg:function(e,t,n){"use strict";n.r(t);var r=n("HDdC"),o=n("pLZG");r.a.prototype.filter=function(e,t){return Object(o.a)(e,t)(this)}},IcB1:function(e,t,n){"use strict";var r=n("7YV4");t.select=function(e,t){return function(n,o){var i=e;e||(i=o.lastIndexOf("$")===o.length-1?o.substring(0,o.length-1):o),delete n[o]&&Object.defineProperty(n,o,{get:function(){return r.NgRedux.instance.select(i,t)},enumerable:!0,configurable:!0})}}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},UJY5:function(e,t,n){"use strict";var r=n("8Y7J"),o=n("7YV4"),i=n("H/L9");function u(e){return new o.NgRedux(e)}t._ngReduxFactory=u,t.NgReduxModule=function(){function e(){}return e.decorators=[{type:r.NgModule,args:[{providers:[i.DevToolsExtension,{provide:o.NgRedux,useFactory:u,deps:[r.NgZone]}]}]}],e}()},bCCX:function(e,t,n){"use strict";(function(e){var r,o=n("SLVX");r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:e;var i=Object(o.a)(r);t.a=i}).call(this,n("3UD+")(e))},gnCc:function(e,t,n){"use strict";n.r(t);var r=n("2Vo4");n.d(t,"BehaviorSubject",(function(){return r.a}))},ilyr:function(e,t,n){"use strict";function r(e){return!!(e&&e.constructor&&e.call&&e.apply)}function o(e){return!(!e||"object"!=typeof e||r(e))}t.isFunction=r,t.isObject=o,t.isPlainObject=function(e){return o(e)&&e.constructor===Object}},pjKi:function(e,t,n){"use strict";var r=n("7YV4");t.NgRedux=r.NgRedux;var o=n("H/L9");t.DevToolsExtension=o.DevToolsExtension;var i=n("IcB1");t.select=i.select;var u=n("UJY5");t.NgReduxModule=u.NgReduxModule},qEhT:function(e,t,n){"use strict";t.omit=function(e,t){var n=Object.assign({},e);return t.forEach((function(e){return delete n[e]})),n}},sOH3:function(e,t,n){"use strict";n.r(t);var r=n("8Y7J"),o=n("pjKi");const i={counter:0};function u(e,t){switch(t.type){case"INCREMENT":return{counter:e.counter+1}}return e}class c{constructor(e){e.configureStore(u,i)}}var a=n("pMnS"),s=n("SVse");let l=(()=>{class e{constructor(e){this.ngRedux=e}ngOnInit(){}increment(){this.ngRedux.dispatch({type:"INCREMENT"})}}return function(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);i>3&&u&&Object.defineProperty(t,n,u)}([Object(o.select)("counter")],e.prototype,"count",void 0),e})();var f=n("7YV4"),d=r["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["redux works!"])),(e()(),r["\u0275eld"](2,0,null,null,2,"p",[],null,null,null,null,null)),(e()(),r["\u0275ted"](3,null,["Counter : ",""])),r["\u0275pid"](131072,s.b,[r.ChangeDetectorRef]),(e()(),r["\u0275eld"](5,0,null,null,1,"button",[],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.increment()&&r),r}),null,null)),(e()(),r["\u0275ted"](-1,null,["Increment"]))],null,(function(e,t){var n=t.component;e(t,3,0,r["\u0275unv"](t,3,0,r["\u0275nov"](t,4).transform(n.count)))}))}var h=r["\u0275ccf"]("app-redux",l,(function(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"app-redux",[],null,null,null,p,d)),r["\u0275did"](1,114688,null,0,l,[f.NgRedux],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),y=n("H/L9"),b=n("iInd");class v{}var g=n("UJY5");n.d(t,"ReduxModuleNgFactory",(function(){return w}));var w=r["\u0275cmf"](c,[],(function(e){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,h]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](4608,s.m,s.l,[r.LOCALE_ID,[2,s.B]]),r["\u0275mpd"](4608,y.DevToolsExtension,y.DevToolsExtension,[r.ApplicationRef,f.NgRedux]),r["\u0275mpd"](1073742336,s.c,s.c,[]),r["\u0275mpd"](1073742336,b.o,b.o,[[2,b.t],[2,b.k]]),r["\u0275mpd"](1073742336,v,v,[]),r["\u0275mpd"](1073742336,g.NgReduxModule,g.NgReduxModule,[]),r["\u0275mpd"](1024,f.NgRedux,g._ngReduxFactory,[r.NgZone]),r["\u0275mpd"](1073742336,c,c,[f.NgRedux]),r["\u0275mpd"](1024,b.i,(function(){return[[{path:"",component:l}]]}),[])])}))},sZVO:function(e,t,n){"use strict";n.r(t);var r=n("HDdC"),o=n("Cfvw");r.a.from=o.a},"w/7T":function(e,t,n){"use strict";n.r(t);var r=n("HDdC"),o=n("eIep");r.a.prototype.switchMap=function(e){return Object(o.a)(e)(this)}},y85s:function(e,t,n){"use strict";t.getIn=function e(t,n){if(!t)return t;if("function"==typeof t.getIn)return t.getIn(n);var r=n[0],o=n.slice(1);return void 0!==t[r]?0===o.length?t[r]:e(t[r],o):void 0}},zE9r:function(e,t,n){"use strict";n.r(t);var r=n("HDdC");n.d(t,"Observable",(function(){return r.a}))}}]);