"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{137:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),a=t(439),i=t(757),s=t.n(i),o=t(689),c=t(87),l=t(243),d=t(791),u={mainInfo:"MovieDetails_mainInfo__pjFU9",goBack:"MovieDetails_goBack__GNtQz",poster:"MovieDetails_poster__3zlUJ",genre:"MovieDetails_genre__+8ZCC",additionalInfo:"MovieDetails_additionalInfo__+U8SN"},f=t(984),h=t(184),v=function(){var e,n,t,i,v=(0,o.UO)().id,p=(0,d.useState)({genres:[],release_date:""}),m=(0,a.Z)(p,2),x=m[0],_=m[1],j=(0,o.TH)();return(0,d.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("https://api.themoviedb.org/3/movie/".concat(v,"?api_key=a6f1a167469b842b62ef942bf0dd3d8a"));case 2:n=e.sent,console.log(n),_(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.rU,{to:null!==(e=null===(n=j.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",className:u.goBack,children:"Go back"}),(0,h.jsxs)("div",{className:u.mainInfo,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(x.poster_path),alt:"",className:u.poster}),(0,h.jsxs)("div",{className:u.mainDetails,children:[(0,h.jsxs)("h2",{children:[x.title," (",x.release_date.split("-")[0],")"]}),(0,h.jsxs)("p",{children:["User score: ",(10*x.vote_average).toFixed(),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:x.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:x.genres.map((function(e){return(0,h.jsx)("span",{className:u.genre,children:e.name},(0,f.x0)())}))})]})]}),(0,h.jsxs)("div",{className:u.additionalInfo,children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"cast",state:{from:null===(t=j.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"reviews",state:{from:null===(i=j.state)||void 0===i?void 0:i.from},children:"Reviews"})})]})]}),(0,h.jsx)(d.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading subpage..."}),children:(0,h.jsx)(o.j3,{})})]})}},984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=137.1f21544a.chunk.js.map