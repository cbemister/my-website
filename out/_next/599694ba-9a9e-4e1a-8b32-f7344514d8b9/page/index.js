module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([3],{474:function(e,t,n){e.exports=n(475)},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),a=n.n(r),u=n(7),o=n.n(u),c=n(129),l=n.n(c),i=n(135),s=(n.n(i),n(171)),f=n.n(s);var p=function(e){var t=e.posts,n=void 0===t?[]:t;return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to a blog!"),o.a.createElement("h2",null,"Posts"),o.a.createElement("ul",null,n.map(function(e){var t=e._id,n=e.title,r=void 0===n?"":n,a=e.slug,u=void 0===a?"":a,c=e._updatedAt,s=void 0===c?"":c;return u&&o.a.createElement("li",{key:t},o.a.createElement(l.a,{prefetch:!0,href:"/blog/".concat(u)},o.a.createElement("a",null,r))," (",Object(i.format)(s,"DD. MMMM, YYYY"),")")})))};p.getInitialProps=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function o(e,t){try{var n=u[e](t),o=n.value}catch(e){return void a(e)}n.done?r(o):Promise.resolve(o).then(c,l)}function c(e){o("next",e)}function l(e){o("throw",e)}c()})}}(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.fetch('*[_type == "post"][0..1000]{\n      _id,\n      title,\n      "slug": slug.current,\n      _updatedAt\n    }');case 2:return e.t0=e.sent,e.abrupt("return",{posts:e.t0});case 4:case"end":return e.stop()}},e,this)})),t.default=p}},[474]).default}});