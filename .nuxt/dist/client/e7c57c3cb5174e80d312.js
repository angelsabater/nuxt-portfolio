(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,n){"use strict";n.d(e,"i",function(){return m}),n.d(e,"j",function(){return v}),n.d(e,"a",function(){return x}),n.d(e,"o",function(){return y}),n.d(e,"e",function(){return w}),n.d(e,"f",function(){return _}),n.d(e,"c",function(){return O}),n.d(e,"n",function(){return j}),n.d(e,"h",function(){return k}),n.d(e,"p",function(){return $}),n.d(e,"k",function(){return R}),n.d(e,"m",function(){return S}),n.d(e,"d",function(){return P}),n.d(e,"b",function(){return T}),n.d(e,"g",function(){return A}),n.d(e,"l",function(){return N});n(63),n(33);var r=n(36),o=(n(90),n(131),n(132),n(25)),c=(n(134),n(136),n(89),n(137),n(35),n(56),n(7)),l=(n(68),n(34),n(18),n(47),n(61),n(24)),f=n(0);function d(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach(function(e){Object(l.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}function m(t){f.default.config.errorHandler&&f.default.config.errorHandler(t)}function v(t){return t.then(function(t){return t.default||t})}function x(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),h({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=f.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}function O(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function j(t){return Promise.all(O(t,function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=y(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function k(t){return C.apply(this,arguments)}function C(){return(C=Object(c.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,j(e);case 4:return t.abrupt("return",h({},e,{meta:w(e).map(function(t,n){return h({},t.options.meta,{},(e.matched[n]||{}).meta)})}));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function $(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark(function t(e,n){var c,l,f,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=B(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([k(n.route),k(n.from)]);case 3:c=t.sent,l=Object(r.a)(c,2),f=l[0],d=l[1],n.route&&(e.context.route=f),n.from&&(e.context.from=d),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(n.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():S(t[0],e).then(function(){return R(t.slice(1),e)})}function S(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function P(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function T(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?D:encodeURIComponent,l=0;l<t.length;l++){var f=t[l];if("string"!=typeof f){var d=data[f.name||"pathMatch"],h=void 0;if(null==d){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<d.length;m++){if(h=c(d[m]),!e[l].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===m?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(d),!e[l].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=L.exec(t));){var f=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+f.length,d)path+=d[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],O=n[7];path&&(r.push(path),path="");var j=null!=v&&null!=m&&m!==v,k="+"===_||"*"===_,C="?"===_||"*"===_,$=n[2]||l,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:$,optional:C,repeat:k,partial:j,asterisk:Boolean(O),pattern:pattern?M(pattern):O?".*":"[^"+I($)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function A(t,e){var n={},r=h({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function N(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return h({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function I(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function B(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,l=t.split("/"),f=(n?n+"://":"//")+l.shift(),path=l.filter(Boolean).join("/");if(2===(l=path.split("#")).length){var d=l,h=Object(r.a)(d,2);path=h[0],c=h[1]}return f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),f+=c?"#"+c:""}},126:function(t,e,n){"use strict";n.r(e);n(35),n(89);e.default=function(t){var e=t.isHMR,n=t.app,r=t.store,o=t.route,c=t.params,l=t.error,f=t.redirect,d=n.i18n.fallbackLocale;if(!e){var h=c.lang||d;if(-1===r.state.locales.indexOf(h))return l({message:"This page could not be found.",statusCode:404});if(r.commit("SET_LANG",h),n.i18n.locale=r.state.locale,h===d&&0===o.fullPath.indexOf("/"+d)){var m="^/"+d+(0===o.fullPath.indexOf("/"+d+"/")?"/":""),v=new RegExp(m);return f(o.fullPath.replace(v,"/"))}}}},142:function(t,e,n){"use strict";var r=n(48);n.n(r).a},143:function(t,e,n){"use strict";var r=n(49);n.n(r).a},145:function(t,e,n){},148:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o}),n.d(e,"actions",function(){return c});n(35);var r=function(){return{locales:["en","ja"],locale:"en"}},o={SET_LANG:function(t,e){-1!==t.locales.indexOf(e)&&(t.locale=e)}},c={changeLang:function(t,e){var n=e.router,r=e.lang;n.replace("/".concat(r))}}},149:function(t){t.exports=JSON.parse('{"header":"Hi, I\'m Angel.","description":"A back-end web developer based in Tokyo, Japan.","sub-description":"Mainly involved with back-end development and contributes in database management.","nav":{"works":"works","workLink":"/","about":"about","aboutLink":"/about","resume":"résumé"},"works":{"tab1":{"id":null,"image":"/yonmoque.jpg","title":"Yonmoque 🎮","status":"ON-GOING","description":"Creating a mobile application version of a japanese board game owned by Logy Games. It\'s a multi-player board game combining Shogu (Japanese Chess) and Othello (Reversi).","language":"Available in Japanese and English","tools":["/react-native.png","/expo.png","/google.png"]},"tab2":{"id":null,"image":"/jflearn.jpg","title":"Babel Method 👩‍🏫","status":"ON-GOING","description":"An E-learning website aiming to teach foreigners. Basically in charge of database administration and adding main functions. Also contributing in file management using AWS.","language":"Available in Japanese","tools":["/node.png","/sql.png"]},"tab3":{"id":null,"image":"/dnus.jpg","title":"DNUS 🌏","status":"RELEASED","description":"A business-to-business (B2B) website specializing in hiring foreigners owned by DOC Inc.","language":"Available in Japanese","tools":["/ruby.png","/sql.png"]}},"about":{"name":"Angel Lynn Sabater"}}')},150:function(t){t.exports=JSON.parse('{"header":"こんにちは！エンジェルと申します。","description":"東京にバックエンドWeb開発者。","sub-description":"主にバックエンド開発とデータベース管理に関与しています。","nav":{"works":"プロジェクト","workLink":"/ja","about":"自身について","aboutLink":"/ja/about","resume":"英語の履歴書"},"works":{"tab1":{"id":null,"image":"/yonmoque.jpg","title":"Yonmoque 🎮","status":"開発中","description":"「ヨンモク」という2人で対戦するボードゲームのモバイルアプリ版を作っています。現在、ゲームロジックの作成と設計を行っています。完成したら、Googleストアにアップロードする予定です。","tools":["/react-native.png","/expo.png","/google.png"]},"tab2":{"id":null,"image":"/jflearn.jpg","title":"Babel Method 👩‍🏫","status":"開発中","description":"「Babel Method」という日本語学習プロジェクトのバックエンドチームに参加しています。データベースに関する開発と機能の開発を担当しています。","tools":["/node.png","/sql.png"]},"tab3":{"id":null,"image":"/dnus.jpg","title":"DNUS 🌏","status":"終わった","description":"Considered a business-to-business (B2B) website specializing in hiring foreigners.","tools":["/ruby.png","/sql.png"]}},"about":{"name":"エンジェル・リン・サバテル"}}')},19:function(t,e,n){"use strict";n(63),n(33),n(34),n(47),n(18);var r=n(24),o=(n(56),n(7)),c=(n(61),n(0)),l=n(92),f=n.n(l),d=n(65),h=n(1),m=function(){return Object(h.j)(n.e(4).then(n.bind(null,153)))},v=function(){return Object(h.j)(n.e(5).then(n.bind(null,154)))},x=function(){return Object(h.j)(n.e(3).then(n.bind(null,151)))},y=function(){return Object(h.j)(n.e(2).then(n.bind(null,152)))};c.default.use(d.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var w=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var _=n(93);function O(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}var j=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},n.n(_).a,{name:"NoSsr"}),k={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var d=c[f]||l,h={};C.forEach(function(t){void 0!==d[t]&&(h[t]=d[t])});var m={};$.forEach(function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:h,on:m},x)}},C=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],$=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],E={props:["error"],layout:"blog"},R=(n(142),n(9)),S=Object(R.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("v-img",{attrs:{src:"/old.png","max-width":"60","max-height":"60"}}),this._v(" "),404===this.error.statusCode?e("h1",[this._v("Oh snap! Page not found.")]):e("h1",[this._v("An error occurred")]),this._v(" "),e("v-card-text",[e("v-btn",{attrs:{icon:"",to:"/"}},[e("v-icon",{attrs:{size:"24px"}},[this._v("fa-home")])],1)],1)],1)},[],!1,null,null,null).exports,P=(n(35),n(36)),T={name:"Nuxt",components:{NuxtChild:k,NuxtError:S},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(h.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(P.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},A={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},N=(n(143),Object(R.a)(A,void 0,void 0,!1,null,null,null).exports),L=(n(144),n(145),n(146),{computed:{otherLang:function(){return"ja"==this.$i18n.locale?"en":"ja"}},methods:{changeLang:function(){var t=this.$router;this.$store.dispatch("changeLang",{router:t,lang:this.otherLang})}}}),D=Object(R.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{staticStyle:{"margin-top":"50px"},attrs:{flat:""}},[n("v-img",{attrs:{src:"/logo.png","max-width":"100"}}),t._v(" "),n("div",{staticClass:"flex-grow-1"}),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",text:"",href:t.$t("nav.workLink")}},[t._v(" "+t._s(t.$t("nav.works")))]),t._v(" "),n("v-btn",{attrs:{flat:"",text:"",href:"https://drive.google.com/file/d/1MjNEgL_LjTJQknlvfWtYsIXO4ly-8LyS/view",target:"_blank"}},[t._v(t._s(t.$t("nav.resume")))]),t._v(" "),n("v-btn",{attrs:{flat:"",text:""},on:{click:function(e){return t.changeLang()}}},[n("v-img",{attrs:{src:"/language.png","max-width":"30"}})],1)],1)],1)],1)},[],!1,null,null,null).exports,I=Object(R.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",[e("v-flex",{attrs:{"pa-4":"","text-xs-right":"",xs9:"",md11:"",lg11:""}},[e("span",[this._v("© "+this._s((new Date).getFullYear())+" | Angel Sabater")])])],1)},[],!1,null,null,null).exports,M=n(94),B=n.n(M),J=(n(147),{components:{Nav:D,Footer:I},mounted:function(){B.a.init()}}),U={_default:Object(R.a)(J,function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-content",[e("Nav"),this._v(" "),e("v-container",[e("nuxt")],1)],1),this._v(" "),e("Footer")],1)},[],!1,null,null,null).exports},F={head:{titleTemplate:"Angel Sabater",title:"online_portfolio",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"An online portfolio made with Nuxt.js"}],link:[{rel:"icon",type:"image/x-icon",href:"/icon.png"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&U["_"+t]||(t="default"),this.layoutName=t,this.layout=U["_"+t],this.layout},loadLayout:function(t){return t&&U["_"+t]||(t="default"),Promise.resolve(U["_"+t])}},components:{NuxtLoading:N}},G=(n(59),n(90),n(66));c.default.use(G.a);var H={};(H=function(t,e){if((t=t.default||t).commit)throw new Error("[nuxt] ".concat(e," should export a method that returns a Vuex instance."));return"function"!=typeof t&&(t=Object.assign({},t)),Q(t,e)}(n(148),"store/index.js")).modules=H.modules||{};var K=H instanceof Function?H:function(){return new G.a.Store(Object.assign({strict:!1},H))};function Q(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}var X=n(95),W=n.n(X);c.default.use(W.a,{theme:{primary:"#1976d2",accent:"#424242",secondary:"#ff8f00",info:"#26a69a",warning:"#ffc107",error:"#dd2c00",success:"#00e676"}});var Y=n(67);c.default.use(Y.a);var z=function(t){var e=t.app,r=t.store;e.i18n=new Y.a({locale:r.state.locale,fallbackLocale:"en",messages:{en:n(149),ja:n(150)}})};function V(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}function Z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}n.d(e,"b",function(){return et}),n.d(e,"a",function(){return S}),c.default.component(j.name,j),c.default.component(k.name,k),c.default.component("NChild",k),c.default.component(T.name,T),c.default.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var tt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function et(t){return nt.apply(this,arguments)}function nt(){return(nt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,l,f,path,_;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new d.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:w,routes:[{path:"/about",component:m,name:"about"},{path:"/",component:v,name:"index"},{path:"/:lang",component:x,name:"lang"},{path:"/:lang/about",component:y,name:"lang-about"}],fallback:!1});case 2:return n=t.sent,(r=K(e)).$router=n,o=Z({router:n,store:r,nuxt:{defaultTransition:tt,transitions:[tt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},tt,{name:t}):Object.assign({},tt,t):tt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=Boolean(t),t=t?Object(h.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},F),r.app=o,l=e?e.next:function(t){return o.router.push(t)},e?f=n.resolve(e.url).route:(path=Object(h.d)(n.options.base),f=n.resolve(path).route),t.next=11,Object(h.p)(o,{route:f,next:l,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 11:_=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use(function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=16;break;case 16:if("function"!=typeof z){t.next=19;break}return t.next=19,z(o.context,_);case 19:t.next=22;break;case 22:return t.abrupt("return",{app:o,store:r,router:n});case 23:case"end":return t.stop()}},t)}))).apply(this,arguments)}},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n(18),n(77),n(33),n(34),n(59),n(81);var r=n(0),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},c=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var f=o.value,d=f();d instanceof Promise&&d.catch(function(){}),f.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==l.return||l.return()}finally{if(n)throw r}}}}}}},64:function(t,e,n){"use strict";var r={};r.i18n=n(126),r.i18n=r.i18n.default||r.i18n,e.a=r},96:function(t,e,n){t.exports=n(97)},97:function(t,e,n){"use strict";n.r(e),function(t){n(68),n(77),n(33);var e=n(25),r=(n(56),n(107),n(7)),o=(n(59),n(81),n(34),n(18),n(47),n(61),n(84),n(111),n(123),n(125),n(0)),c=n(91),l=n(64),f=n(1),d=n(19),h=n(50);o.default.component(h.a.name,h.a),o.default.component("NLink",h.a),t.fetch||(t.fetch=c.a);var m,v,x=[],y=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var w=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function O(t,e,n){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,d,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(f.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(f.n)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,d=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(d)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:d}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function k(t,e){return y.serverRendered&&e&&Object(f.a)(t,e),t._Ctor=t,t}function C(t){var path=Object(f.d)(t.options.base,t.options.mode);return Object(f.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=k(Object(f.o)(e),y.data?y.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function $(t,e,n){var r=this,o=["i18n"],c=!1;if(void 0!==n&&(o=[],(n=Object(f.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof l.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),l.a[t])}),!c)return Object(f.k)(o,e)}function E(t,e,n){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,h,v,y,w,O,j,k,C,E,R,S,P,T,A=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?x=[]:(o=[],x=Object(f.e)(n,o).map(function(t,i){return Object(f.b)(n.matched[o[i]].path)(n.params)})),c=!1,l=function(path){n.path===path.path&&A.$loading.finish&&A.$loading.finish(),n.path!==path.path&&A.$loading.pause&&A.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(f.p)(m,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),h=[],(v=Object(f.e)(e,h)).length){t.next=25;break}return t.next=14,$.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof d.a.layout?d.a.layout(m.context):d.a.layout);case 18:return y=t.sent,t.next=21,$.call(this,v,m.context,y);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,$.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=v[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,$.call(this,v,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:O=!0,t.prev=46,j=!0,k=!1,C=void 0,t.prev=50,E=v[Symbol.iterator]();case 52:if(j=(R=E.next()).done){t.next=64;break}if("function"==typeof(S=R.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,S.options.validate(m.context);case 58:if(O=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:j=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),k=!0,C=t.t0;case 70:t.prev=70,t.prev=71,j||null==E.return||E.return();case 73:if(t.prev=73,!k){t.next=76;break}throw C;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(O){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map(function(t,i){if(t._path=Object(f.b)(e.matched[h[i]].path)(e.params),t._dataRefresh=!1,A._pathChanged&&A._queryChanged||t._path!==x[i])t._dataRefresh=!0;else if(!A._pathChanged&&A._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return A._diffQuery[t]}))}if(!A._hadError&&A._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=Boolean(t.options.fetch),l=o&&c?30:45;if(o){var d=Object(f.m)(t.options.asyncData,m.context).then(function(e){Object(f.a)(t,e),A.$loading.increase&&A.$loading.increase(l)});r.push(d)}if(A.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){A.$loading.increase&&A.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(P=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,P));case 97:return x=[],Object(f.i)(P),"function"==typeof(T=d.a.layout)&&(T=T(m.context)),t.next=103,this.loadLayout(T);case 103:this.error(P),this.$nuxt.$emit("routeChanged",e,n,P),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function S(t,n){Object(f.c)(t,function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t})}function P(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?d.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function T(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=[],c=Object(f.f)(t,r),l=Object(f.e)(t,r);o.default.nextTick(function(){c.forEach(function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&l[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}),P.call(n,t)})}}function A(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach(function(e,n){o.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function N(){return(N=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,e.store,t.next=5,Promise.all(C(v));case 5:if(n=t.sent,r=new o.default(m),c=function(){r.$mount("#__nuxt"),v.afterEach(S),v.afterEach(T.bind(r)),o.default.nextTick(function(){A(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),x=v.currentRoute.matched.map(function(t){return Object(f.b)(t.path)(v.currentRoute.params)})),r.$loading={},y.error&&r.error(y.error),v.beforeEach(O.bind(r)),v.beforeEach(E.bind(r)),!y.serverRendered){t.next=17;break}return c(),t.abrupt("return");case 17:l=function(){S(v.currentRoute,v.currentRoute),P.call(r,v.currentRoute),c()},E.call(r,v.currentRoute,v.currentRoute,function(path){if(path){var t=v.afterEach(function(e,n){t(),l()});v.push(path,void 0,function(t){t&&w(t)})}else l()});case 19:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(d.b)().then(function(t){return N.apply(this,arguments)}).catch(w)}.call(this,n(15))}},[[96,6,1,7]]]);