"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{782:function(t,e,r){r.d(e,{Bt:function(){return v},Tg:function(){return s},Y5:function(){return f},vw:function(){return i},y:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(243),o="a6f1a167469b842b62ef942bf0dd3d8a",i=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=a6f1a167469b842b62ef942bf0dd3d8a"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=a6f1a167469b842b62ef942bf0dd3d8a"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},577:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(861),a=r(439),u=r(757),c=r.n(u),o={searchbar:"Movies_searchbar__51H03",input:"Movies_input__+JkfI",searchButton:"Movies_searchButton__cozX1"},i=r(87),s=r(689),f=r(984),p=r(791),v=r(782),d=r(184),h=function(){var t=(0,i.lr)(),e=(0,a.Z)(t,2),r=e[0],u=e[1],h=(0,p.useState)([]),l=(0,a.Z)(h,2),m=l[0],b=l[1],y=(0,p.useState)(""),g=(0,a.Z)(y,2),x=g[0],w=g[1],_=(0,s.TH)(),k=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,v.vw)(e);case 2:r=t.sent,b(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,p.useEffect)((function(){r.get("query")&&w(r.get("query"))}),[]),(0,p.useEffect)((function(){x?(u({query:x}),k(x)):x||(u({}),k(x))}),[x]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:o.form,onSubmit:function(t){t.preventDefault();var e=t.currentTarget.query.value;w(e)},children:[(0,d.jsx)("input",{type:"text",name:"query",autoComplete:"off",autoFocus:!0,className:o.input}),(0,d.jsx)("button",{type:"submit",className:o.searchButton,children:"Search"})]}),0!==m.length&&(0,d.jsx)("ul",{children:m.map((function(t){return(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:_},children:t.original_title})},(0,f.x0)())}))})]})}},984:function(t,e,r){r.d(e,{x0:function(){return n}});var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=577.8f7f5466.chunk.js.map