module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:webpackJsonp([4],{360:function(e,t,n){e.exports=n(361)},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return m});var r=n(24),o=n.n(r),a=n(362),u=n.n(a),i=n(3),l=n.n(i),c=n(176),s=n.n(c);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h={title:"My Portfolio Website - ChrisBemister.com ",description:"I'm building this website to showcase the web applications that I've built, and to motivate me to build more advanced ones.",openGraph:{type:"website",locale:"en_IE",url:"https://www.chrisbemister.com",title:"My Portfolio Website - ChrisBemister.com",description:"I'm building this website to showcase the web applications that I've built, and to motivate me to build more advanced ones.",image:"#",site_name:"ChrisBemister.com",imageWidth:1200,imageHeight:1200},twitter:{handle:"@chrisbemister",cardType:"summary_large_image"}},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,i,c,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.a),n=t,r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return l.a.createElement(a.Container,null,l.a.createElement(s.a,{config:h}),l.a.createElement(t,n))}}],i=[{key:"getInitialProps",value:(c=o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,a={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=c.apply(e,t);function a(e,t){try{var a=o[e](t),l=a.value}catch(e){return void r(e)}a.done?n(l):Promise.resolve(l).then(u,i)}function u(e){a("next",e)}function i(e){a("throw",e)}u()})},function(e){return p.apply(this,arguments)})}],r&&f(n.prototype,r),i&&f(n,i),t}()},362:function(e,t,n){e.exports=n(363)},363:function(e,t,n){"use strict";var r=n(22),o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=P,t.Container=t.default=void 0;var a=o(n(24)),u=o(n(144)),i=o(n(364)),l=o(n(51)),c=o(n(26)),s=o(n(10)),p=o(n(11)),f=o(n(27)),d=o(n(28)),h=r(n(3)),m=o(n(47)),y=o(n(224)),b=n(25),v=n(58),g=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}var n;return(0,d.default)(t,e),(0,p.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router),_containerProps:(0,l.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=P(t);return h.default.createElement(w,null,h.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,b.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=g,Object.defineProperty(g,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(g,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:m.default.any,headManager:m.default.object,router:m.default.object}});var w=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,y.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return h.default.createElement(h.default.Fragment,null,e)}}]),t}(h.Component);t.Container=w,Object.defineProperty(w,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:m.default.any}});var _=(0,b.execOnce)(function(){0});function P(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return _(),r},get pathname(){return _(),t},get asPath(){return _(),n},back:function(){_(),e.back()},push:function(t,n){return _(),e.push(t,n)},pushTo:function(t,n){_();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return _(),e.replace(t,n)},replaceTo:function(t,n){_();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},364:function(e,t,n){var r=n(175);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o}},[360]).default}});