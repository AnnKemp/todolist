(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(12),n(4)),l=n(3);function s(e){var t=e.add,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],i=r[1];return o.a.createElement("div",{className:"Item"},o.a.createElement("input",{type:"text",placeholder:"New Task",value:c,onChange:function(e){return i(e.target.value)}}),o.a.createElement("button",{onClick:function(){return t(c)}},"Add"))}function u(e){var t=e.items,n=void 0===t?[]:t,a=e.remove;return n.map((function(e,t){return o.a.createElement(m,{text:t,key:t,remove:a})}))}function m(e){var t=e.text,n=e.index,a=e.remove;return o.a.createElement("div",{className:"Item"},n+1," ",t,o.a.createElement("span",{onClick:function(){return a(n)}},"Done"))}n(13);var d=["Setup basic components","Add some styling"];var v=function(){var e=Object(a.useState)(d),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h2",null,"ToDo App"),o.a.createElement(s,{add:function(e){r([].concat(Object(i.a)(n),[e]))}}),o.a.createElement(u,{items:n,remove:function(e){var t=Object(i.a)(n);t.splice(e,1),r(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.abff8813.chunk.js.map