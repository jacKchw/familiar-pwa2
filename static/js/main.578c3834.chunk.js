(this["webpackJsonpfamiliar-pwa2"]=this["webpackJsonpfamiliar-pwa2"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(5),r=n.n(o),a=n(31),i=n.n(a),s=(n(37),n(38),n(8)),u=n(20),l=n.n(u),h=n(10),f=function(e){var t=l()("./img/bg.jpg"),n=Object(s.a)(t,1)[0];return Object(c.jsx)(h.Image,{width:e.w,height:e.h,image:n})},j=function(){var e=l()("./img/walking_01.png"),t=Object(s.a)(e,1)[0];return Object(c.jsx)(h.Image,{width:500,height:500,x:390,y:130,image:t})},g=function(e){return Object(c.jsx)(h.Stage,{className:"stage",width:e.w,height:e.h,children:Object(c.jsxs)(h.Layer,{children:[Object(c.jsx)(f,{w:e.w,h:e.h}),Object(c.jsx)(j,{})]})})},b=n(32),d=function(e){var t=e.chat,n=Object(o.useRef)(null),r=Object(o.useState)(!1),a=Object(s.a)(r,2),i=a[0],u=a[1];return Object(o.useEffect)((function(){n.current.scrollIntoView({block:"end"})}),[t]),Object(c.jsxs)("div",{className:"chats",onClick:function(){u((function(e){return!e}))},children:[t.map((function(e){return Object(c.jsxs)("div",{className:"chat",children:[Object(c.jsx)("strong",{children:"\u3042\u306a\u305f: "}),e.mesage,Object(c.jsx)("br",{}),i?" ("+e.option+")":e.option[e.response]]},e.key)})),Object(c.jsx)("div",{ref:n})]})},v=function(e){var t=e.send,n=Object(o.useState)(""),r=Object(s.a)(n,2),a=r[0],i=r[1],u=Object(o.useState)(""),l=Object(s.a)(u,2),h=l[0],f=l[1],j=function(){t(a,h),i("")};return Object(c.jsxs)("div",{className:"chatInputContainer",onKeyUp:function(e){13===e.keyCode&&j()},children:[Object(c.jsx)("input",{type:"text",className:"chatInput",placeholder:"\u8cea\u554f",onChange:function(e){return i(e.target.value)},value:a}),Object(c.jsx)("input",{type:"text",className:"chatInput",placeholder:"\u306f\u3044/\u3044\u3048\u3048",onChange:function(e){return f(e.target.value)},value:h}),Object(c.jsx)("button",{className:"chatBtn",onClick:j,children:"\u78ba\u8a8d"})]})},m=function(){var e=Object(o.useState)((function(){var e=localStorage.getItem("chat");return null===e?[]:JSON.parse(e)})),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){localStorage.setItem("chat",JSON.stringify(n))}),[n]),Object(c.jsxs)("div",{className:"chatBox text",children:[Object(c.jsx)("strong",{children:"\u30da\u30c3\u30c8\u306b\u805e\u304f:"}),Object(c.jsx)("button",{className:"chatBtn",onClick:function(){return r([])},children:"\u30ea\u30bb\u30c3\u30c8"}),Object(c.jsx)(d,{chat:n}),Object(c.jsx)(v,{send:function(e,t){if(""!==e|""!==t){var c=t.split(/[\s,]/);c=null===c?[]:c,r((function(t){return[].concat(Object(b.a)(t),[(o=e,r=c,{key:n.length,mesage:o,option:r,response:Math.floor(Math.random()*r.length)})]);var o,r}))}}})]})},O=function(){var e=36e6,t=36e6,n=6e4,r=Object(o.useState)((function(){var t=localStorage.getItem("hungryCount");if(null===t|isNaN(Number(t)))return e;var n=localStorage.getItem("hungryTimestamp"),c=t-(Date.now()-n);return c>=e?e:c<0?0:c})),a=Object(s.a)(r,2),i=a[0],u=a[1],l=function(){return Math.round(5*i/e)},h=function(t){u((function(n){var c=n+t;return c>=e?e:c<0?0:c}))};Object(o.useEffect)((function(){localStorage.setItem("hungryCount",i),localStorage.setItem("hungryTimestamp",Date.now())}),[i]);var f=Object(o.useState)((function(){var e=localStorage.getItem("healthCount");if(null===e|isNaN(Number(e)))return t;if(i>0)return e;e=Number(e);var n=localStorage.getItem("healthTimestamp"),c=localStorage.getItem("hungryCount"),o=localStorage.getItem("hungryTimestamp"),r=e+(c-(Date.now()-o))-(Date.now()-n);return r>=t?t:r<0?0:r})),j=Object(s.a)(f,2),g=j[0],b=j[1],d=function(){return Math.floor(5*g/t)},v=function(e){b((function(n){var c=n+e;return c>=t?t:c<0?0:c}))};return Object(o.useEffect)((function(){localStorage.setItem("healthCount",g),localStorage.setItem("healthTimestamp",Date.now())}),[g]),Object(o.useEffect)((function(){if(i>0){var e=setInterval((function(){h(-6e4)}),n);return function(){return clearInterval(e)}}if(g>0){var t=setInterval((function(){v(-6e4)}),n);return function(){return clearInterval(t)}}})),Object(c.jsxs)("div",{className:"text feed",children:[Object(c.jsx)("strong",{children:"\u6e80\u8179\u5ea6:"})," ","\ud83c\udf56".repeat(l())," ",0===l()&&"\uff08\u7a7a\u8179\uff01\ud83d\ude28\uff09",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"\u5065\u5eb7\u5ea6:"})," ","\u2764 ".repeat(d())," ",0===d()&&"\uff08\u7015\u6b7b\uff01\ud83d\udc80\uff09",Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"button",onClick:function(){h(36e5)},children:"\u98df\u4e8b"}),Object(c.jsx)("button",{type:"button",onClick:function(){v(36e5)},children:"\u6cbb\u7642"})]})};var p=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"sub-container",width:1280,height:720,children:[Object(c.jsx)(g,{w:1280,h:720}),Object(c.jsx)(O,{}),Object(c.jsx)(m,{})]})})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/familiar-pwa2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){console.log("isLocalhost");var t="".concat("/familiar-pwa2","/service-worker.js");w?(console.log("isLocalhost"),function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(t,e)}))}}(),S()}},[[85,1,2]]]);
//# sourceMappingURL=main.578c3834.chunk.js.map