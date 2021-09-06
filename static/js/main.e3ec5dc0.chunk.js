(this["webpackJsonprick-and-morty-episodes-app"]=this["webpackJsonprick-and-morty-episodes-app"]||[]).push([[0],{28:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(20),s=c.n(i),a=(c(28),c(18)),o=c(8),r=c(2);var l=function(e){var t=Object(n.useState)(e.edit?e.edit.value:""),c=Object(o.a)(t,2),i=c[0],s=c[1],a=Object(n.useRef)(null);Object(n.useEffect)((function(){a.current.focus()}));var l=function(e){s(e.target.value)};return Object(r.jsx)("form",{className:"towatch-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),s("")},children:e.edit?Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",placeholder:"Update your item",value:i,name:"text",className:"towatch-input edit",onChange:l,ref:a}),Object(r.jsx)("button",{className:"towatch-button edit",children:"Update"})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",placeholder:"Input the code of the episode",value:i,name:"text",className:"towatch-input",onChange:l,ref:a}),Object(r.jsx)("button",{className:"towatch-button",children:"Add an episode"})]})})},j=c(21),d=c(22);var u=function(e){var t=e.todos,c=e.completeToWatch,i=e.removeToWatch,s=e.updateToWatch,a=Object(n.useState)({id:null,value:""}),u=Object(o.a)(a,2),b=u[0],h=u[1];return b.id?Object(r.jsx)(l,{edit:b,onSubmit:function(e){s(b.id,e),h({id:null,value:""})}}):t.map((function(e,t){return Object(r.jsxs)("div",{className:e.isComplete?"towatch-row complete":"towatch-row",children:[Object(r.jsx)("div",{onClick:function(){return c(e.id)},children:e.text},e.id),Object(r.jsxs)("div",{className:"icons",children:[Object(r.jsx)(j.a,{onClick:function(){return i(e.id)},className:"delete-icon"}),Object(r.jsx)(d.a,{onClick:function(){return h({id:e.id,value:e.text})},className:"edit-icon"}),Object(r.jsx)("div",{className:"item-checkbox",onClick:function(){return c(e.id)}},e.id)]})]},t)}))};var b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("mywatchlist"));e&&i(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("mywatchlist",JSON.stringify(c))}),[c]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"My Watch List"}),Object(r.jsx)(l,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(a.a)(c));i(t)}}}),Object(r.jsx)(u,{todos:c,completeToWatch:function(e){var t=c.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));i(t)},removeToWatch:function(e){var t=Object(a.a)(c).filter((function(t){return t.id!==e}));i(t)},updateToWatch:function(e,t){t.text&&!/^\s*$/.test(t.text)&&i((function(c){return c.map((function(c){return c.id===e?t:c}))}))}})]})},h=function(e){var t=e.prev,c=e.next,n=e.onPrevious,i=e.onNext;return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"pagination-list",children:[t?Object(r.jsx)("li",{className:"pagination-list-item",children:Object(r.jsx)("button",{className:"pagination-link",onClick:function(){n()},children:"Previous"})}):null,c?Object(r.jsx)("li",{className:"pagination-list-item",children:Object(r.jsx)("button",{className:"pagination-link",onClick:function(){i()},children:"Next"})}):null]})})};var p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)({}),a=Object(o.a)(s,2),l=a[0],j=a[1],d=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){i(e.results),j(e.info)})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){d("https://rickandmortyapi.com/api/episode")}),[]);var u=function(){d(l.prev)},b=function(){d(l.next)};return Object(r.jsxs)("div",{className:"episodes-list",children:[Object(r.jsx)("h1",{children:"Episodes list"}),Object(r.jsx)(h,{prev:l.prev,next:l.next,onPrevious:u,onNext:b}),c.map((function(e,t){return Object(r.jsx)("div",{className:"episodes-cards-container",children:Object(r.jsxs)("div",{className:"episode-card",children:[Object(r.jsxs)("h3",{className:"episode-name",children:["Name: ",e.name]}),Object(r.jsxs)("p",{className:"episide-air-date",children:[Object(r.jsx)("b",{children:"Air Date:"})," ",e.air_date]}),Object(r.jsxs)("p",{className:"episide-code",children:[Object(r.jsx)("b",{children:"Episode code:"})," ",e.episode]})]})},t)})),Object(r.jsx)(h,{prev:l.prev,next:l.next,onPrevious:u,onNext:b})]})},x=c(12);var m=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("img",{src:"img/Rick_and_Morty_logo.png",className:"logo-img",alt:"Rick and Morty logo"}),Object(r.jsxs)("div",{className:"navigation",children:[Object(r.jsx)(x.b,{to:"/",className:"nav-link",children:"Episodes List"}),Object(r.jsx)(x.b,{to:"/watchlist",className:"nav-link",children:"My Watch List"})]})]})},O=c(3);var f=function(){return Object(r.jsx)("div",{className:"episodes-app",children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(m,{}),Object(r.jsxs)(O.c,{children:[Object(r.jsx)(O.a,{exact:!0,path:"/",component:p}),Object(r.jsx)(O.a,{exact:!0,path:"/watchlist",component:b})]})]})})};s.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e3ec5dc0.chunk.js.map