(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],[,,,,,,,,function(t,e,n){},,,,,function(t,e,n){},,function(t,e,n){},,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(6),s=n.n(a),i=n(9),r=n(2),o=(n(13),n.p,n(0));var u=function(t){return Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsxs)("div",{className:"button-box",children:[Object(o.jsx)("button",{id:"1",className:"tabbar-button",onClick:t.create,children:"CREATE"}),Object(o.jsx)("div",{className:"button-background"})]}),Object(o.jsxs)("div",{className:"button-box",children:[Object(o.jsx)("button",{id:"2",className:"tabbar-button",onClick:t.clean,children:"CLEAN"}),Object(o.jsx)("div",{className:"button-background"})]}),Object(o.jsx)("div",{className:"container-background"})]})};n(15),n(16);var b=function(t){var e=Object(c.useState)("D"),n=Object(r.a)(e,2),a=n[0],s=n[1],i=Object(c.useState)(""),u=Object(r.a)(i,2),b=u[0],l=u[1],d=Object(c.useState)(!0),j=Object(r.a)(d,2),x=j[0],O=j[1];return Object(o.jsxs)("div",{className:"card-container",style:!0===x?{borderRadius:"50px",outline:"solid 3px white"}:null,children:[Object(o.jsxs)("div",{className:"card-elements-container",children:[Object(o.jsxs)("div",{className:"card-button-container",children:[Object(o.jsx)("div",{className:"card-button",children:t.id+1}),Object(o.jsx)("button",{className:"card-button",onClick:function(){"D"===a?(O(!1),s("E"),t.edit(b,t.id)):"E"===a&&(O(!0),s("D"))},style:!0===x?{textDecoration:"underline"}:null,children:a}),Object(o.jsx)("button",{className:"card-button",onClick:function(){t.close(t.id)},children:"C"})]}),Object(o.jsx)("p",{className:"card-input",onInput:function(t){l(t.target.innerText)},contentEditable:x,suppressContentEditableWarning:!0,children:t.text})]}),Object(o.jsx)("div",{className:"card-background"})]})};n(8);var l=function(){return Object(o.jsx)("svg",{t:"1636150566807",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2365",width:"20",height:"20",children:Object(o.jsx)("path",{d:"M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952","p-id":"2366",fill:"#ffffff"})})};n(19);var d=function(){return Object(o.jsx)("button",{className:"return-button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(o.jsx)(l,{className:"arrow"})})};n(20);var j=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1];function s(t,e){a((function(n){return n.map((function(n,c){return c===e?t:n}))}))}function l(t){a((function(e){return e.filter((function(e,n){return n!==t}))}))}return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{create:function(){a((function(t){return[].concat(Object(i.a)(t),["Write here..."])}))},clean:function(){a([])}}),Object(o.jsx)("div",{className:"card-box",children:n.map((function(t,e){return Object(o.jsx)(b,{close:l,edit:s,id:e,text:t},e)}))}),Object(o.jsx)(d,{})]})};s.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.43c429c6.chunk.js.map