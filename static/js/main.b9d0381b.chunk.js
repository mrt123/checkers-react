(window["webpackJsonpcheckers-react"]=window["webpackJsonpcheckers-react"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(9),c=n.n(o),a=n(1),l=n(4),u=n(17),f=n(6);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(){return Array.apply(null,{length:64}).map((function(e,t){var n=Math.floor(t/8),r=t-8*n,i={x:r,y:n,highlight:!1,color:b(r,n)};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{pin:y(i)})}))}function b(e,t){return(e+t)%2===0?"white":"black"}function y(e){return e.y<=2&&"black"===e.color?v(e.x,e.y,"orange",1):e.y>=5&&"black"===e.color?v(e.x,e.y,"white",-1):null}function v(e,t,n,r){return{x:e,y:t,color:n,moveDirection:r}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n,r,i){var o={type:"illegal",updatedPin:e};if(null!==t.pin||"white"===t.color||r.color!==e.color)return o;var c=e.x,a=e.y,l=Math.abs(t.x-c),u=t.y-a,p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{x:t.x,y:t.y});if(1!==l||u!==1*e.moveDirection||i){if(2===l&&u===2*e.moveDirection){var s=c+(t.x-c)/2,b=a+(t.y-a)/2,y=n.filter((function(e){return e.x===s&&e.y===b}))[0];return y.pin&&y.pin.color!==e.color?{type:"kill",killed:y.pin,updatedPin:p}:o}return o}return{type:"normal",updatedPin:p}}function O(e,t){var n,r,i=e.x+2,o=e.y+2*e.moveDirection,c=e.x-2,a=e.y+2*e.moveDirection,l=t.filter((function(e){return e.x===i&&e.y===o}))[0],u=t.filter((function(e){return e.x===c&&e.y===a}))[0];console.log({fieldTarget2:u}),void 0!==l&&(n=g(e,l,t,{color:e.color})),void 0!==u&&(r=g(e,u,t,{color:e.color}));var f=[n,r].filter((function(e){return void 0!==e&&"illegal"!==e.type}));return console.log({possibleOutcomes:f}),f.length>0}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return e.map((function(e){return e.x===t.x&&e.y===t.y?P({},e,{highlight:n}):e}))}function m(e){return{color:"orange"===e.color?"white":"orange"}}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{activePlayer:{color:"orange"},activePin:null,blockActivePin:!1,fields:s()},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_PIN":return e.blockActivePin?e:P({},e,{activePin:t.pin});case"SET_HIGHLIGHT_FIELD":var n=g(e.activePin,t.f,e.fields,e.activePlayer,e.blockActivePin);return"illegal"===n.type?e:P({},e,{fields:j(e.fields,t.f,!0)});case"UNSET_HIGHLIGHT_FIELD":return P({},e,{fields:j(e.fields,t.f,!1)});case"TRY_MOVE_PIN":var r=t.f,i=e.activePin,o=g(i,r,e.fields,e.activePlayer,e.blockActivePin);if("illegal"===o.type)return e;var c=e.fields.map((function(e){return o.killed===e.pin?P({},e,{pin:null}):e.x===i.x&&e.y===i.y?P({},e,{pin:null}):e===r?P({},e,{pin:o.updatedPin}):e})),a=P({},e,{fields:c,activePin:o.updatedPin}),l=e.activePlayer,u=m(l);if("kill"===o.type){var f=O(o.updatedPin,c);return P({},a,{blockActivePin:f,activePlayer:f?l:u})}return P({},a,{blockActivePin:!1,activePlayer:u});default:return e}},x=Object(l.c)({board:w,testState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"testState-OK";return e}}),E=[],k=Object(u.createLogger)({collapsed:!0});E.push(k);var D=Object(l.d)(x,l.a.apply(void 0,E)),I=(n(32),n(33),n(7)),S=n(8),T=n(20);function _(){var e=Object(I.a)(["\n  z-index: 202;\n  border-radius: 25px;\n  width: 50px;\n  height: 50px;\n  background-color: ",";\n  visibility: ",";\n  border: 5px solid black;\n"]);return _=function(){return e},e}var H=S.a.div(_(),(function(e){return e.color}),(function(e){return e.visibility})),A=function(e){var t=e.pin,n=Object(a.b)(),o=Object(a.c)((function(e){return e.board.activePin})),c=Object(r.useState)("visible"),l=Object(T.a)(c,2),u=l[0],f=l[1];return i.a.createElement(H,{color:t.color,visibility:u,draggable:"true",onDragStart:function(){o!==t&&n({type:"SET_ACTIVE_PIN",pin:t}),setTimeout((function(){f("hidden")}))},onDragEnd:function(){f("visible")}})};function L(){var e=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  background-color: ",';\n  color: red;\n  font-size: 9px;\n  background-image: url("','");\n  ',";\n"]);return L=function(){return e},e}var G=S.a.div(L(),(function(e){return e.color}),(function(e){return e.img}),(function(e){return e.highlight?"border: 4px dotted yellow":"border: none"})),N=function(e){var t=e.f,n=Object(a.b)(),r=function(){return n({type:"UNSET_HIGHLIGHT_FIELD",f:t})},o="white"===t.color?"white.jpg":"black.jpg",c=null===t.pin?null:i.a.createElement(A,{pin:t.pin}),l={onDragEnter:function(e){return n({type:"SET_HIGHLIGHT_FIELD",f:t})},onDragLeave:function(e){return r()},onDragOver:function(e){return e.preventDefault()},onDrop:function(){n({type:"TRY_MOVE_PIN",f:t}),r()}};return i.a.createElement(G,Object.assign({img:o,color:t.color,highlight:t.highlight},l),c)};function F(){var e=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 480px;\n  height: 480px;\n  background: grey;\n  font-size: 10px;\n"]);return F=function(){return e},e}var M=S.a.div(F()),V=function(e){e.x;var t=Object(a.c)((function(e){return e.board.fields})).map((function(e,t){return i.a.createElement(N,{key:t,f:e})}));return i.a.createElement(M,null,t)};var z=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("p",null,"Checkers-React"),i.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(a.a,{store:D},i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.b9d0381b.chunk.js.map