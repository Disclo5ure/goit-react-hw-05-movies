"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{782:function(t,e,n){n.d(e,{Tg:function(){return s},Y5:function(){return f},vw:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="a6f1a167469b842b62ef942bf0dd3d8a",o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},970:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),o=n(689),s=n(87),f="Home_trendingItem__f5W43",p="Home_header__L8+GQ",d=n(782),h=n(184),v=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],v=(0,o.TH)();return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Tg)();case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:p,children:"Trending today"}),(0,h.jsx)("ul",{children:n.map((function(t){return(0,h.jsx)("li",{className:f,children:(0,h.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{from:v},children:t.original_title})},t.id)}))})]})}}}]);
//# sourceMappingURL=970.ee960cf2.chunk.js.map