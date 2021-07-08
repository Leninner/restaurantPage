(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,'* {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: "Montserrat", sans-serif;\r\n}\r\n\r\n#content {\r\n    min-height: 100%;\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    height: 100px;\r\n    background-color: #003049;\r\n    display: flex;\r\n}\r\n\r\n.topTitle {\r\n    width: 75%;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.topTitle img {\r\n    width: 15%;\r\n}\r\n\r\n.topMenu {\r\n    margin: 40px 50px;\r\n    width: 25%;\r\n}\r\n\r\n.topMenu ul {\r\n    display: flex;\r\n    list-style: none;\r\n    justify-content: space-between;\r\n}\r\n\r\n.topMenu a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.topMenu a:hover {\r\n    color: #f77f00;\r\n    font-weight: 600;\r\n}\r\n\r\n.mainBody {\r\n    width: 800px;\r\n    height: 800px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n    cursor: pointer;\r\n    color: #003049;\r\n}\r\n\r\n.mainBody img {\r\n    width: 85%;\r\n    margin-top: 50px;\r\n}\r\n\r\n.mainBody img:hover {\r\n    border-radius: 75px;\r\n    transition: 0.3s ease all;\r\n    transform: scale(1.05);\r\n}\r\n/* Footer */\r\n\r\n.footer {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    height: 80px;\r\n    font-size: 15px;\r\n    color: white;\r\n    background-color: #003049;\r\n    bottom: 0;\r\n    position: absolute;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Menu */\r\n\r\n.titleMenu {\r\n    width: 300px;\r\n    height: 100px;\r\n    border: 5px solid #003049;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 50px;\r\n    color: #d62828;\r\n}\r\n\r\n.firstFood {\r\n    width: 700px;\r\n    height: 350px;\r\n    border: 5px solid #003049;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    color: #d62828;\r\n}\r\n\r\n.secondFood {\r\n    width: 700px;\r\n    height: 350px;\r\n    border: 5px solid #003049;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    color: #d62828;\r\n}\r\n\r\n.thirdFood {\r\n    width: 700px;\r\n    height: 350px;\r\n    border: 5px solid #003049;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    color: #d62828;\r\n}\r\n',""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(n[p].references++,n[p].updater(m)):n.push({identifier:u,updater:o(m,r),references:1}),a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},699:(e,n,t)=>{e.exports=t.p+"bc3f999fccfa2453d5fe.jpg"},592:(e,n,t)=>{e.exports=t.p+"46879dbb71fc749b17ec.jpg"},196:(e,n,t)=>{e.exports=t.p+"2e9be2e82f6c9255fcf7.jpg"},878:(e,n,t)=>{e.exports=t.p+"644b1cbde73a083ba5ca.png"},338:(e,n,t)=>{e.exports=t.p+"425ef0304ee9e7b52c66.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=document.querySelector("#content");var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(695),c=t.n(a),d=t(216),l=t.n(d),s=t(426),u={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=c()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};u.domAPI=i(),u.insertStyleElement=l(),r()(s.Z,u),s.Z&&s.Z.locals&&s.Z.locals;var p=t(878),m=t(338);const h=document.querySelector("#content");document.querySelector("#content");var f=t(196),v=t(592),g=t(699);const x=document.querySelector("#content");function b(){return console.log(x.childNodes),x.childNodes[2]?x.removeChild(x.childNodes[2]):void 0}!function(n){let t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=new Image,a=document.createElement("div"),c=document.createElement("h1"),d=document.createElement("p"),l=document.createElement("ul"),s=document.createElement("li"),u=document.createElement("li"),p=document.createElement("li"),m=document.createElement("a"),h=document.createElement("a"),f=document.createElement("a");i.src=n,i.alt="Comidita",c.textContent="Cheda",d.textContent="Comida Tradicional",m.textContent="Menú",m.href="#menu",m.setAttribute("id","btnMenu"),h.textContent="Reservaciones",h.href="#reservation",h.setAttribute("id","btnReservation"),f.textContent="Inicio",f.href="#",f.setAttribute("id","btnInicio"),t.classList.add("header"),r.classList.add("topTitle"),o.classList.add("topMenu"),s.appendChild(m),u.appendChild(h),p.appendChild(f),l.append(p,s,u),a.append(c,d),r.append(i,a),o.appendChild(l),t.append(r,o),e.appendChild(t)}(p),function(){let n=document.createElement("div"),t=document.createElement("h3"),r=document.createElement("p");t.textContent="Leninner | Github",r.textContent="DOM y Webpack",n.classList.add("footer"),n.append(t,r),e.appendChild(n)}();const y=document.querySelector("#btnInicio"),E=document.querySelector("#btnReservation"),C=document.querySelector("#btnMenu");y.addEventListener("click",(()=>{b(),function(n){let t=document.createElement("div"),r=new Image,o=document.createElement("h1");r.src=n,r.alt="Chinchulines",o.textContent="Los Mejores Chinchulines",t.classList.add("mainBody"),t.append(o,r),e.appendChild(t)}(m)})),E.addEventListener("click",(()=>{b()})),C.addEventListener("click",(()=>{b(),function(e,n,t){let r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("h1"),l=document.createElement("h3"),s=document.createElement("h3"),u=document.createElement("h3"),p=document.createElement("p"),m=document.createElement("p"),f=document.createElement("p"),v=new Image,g=new Image,x=new Image,b=document.createElement("input"),y=document.createElement("input"),E=document.createElement("input");d.textContent="Menú | Cheda",l.textContent="Chinchulines",s.textContent="Caldo de 31",u.textContent="Seco de Librillo",p.textContent="Un platillo hecho con amor y sazón",m.textContent="¡Ay!, esto es una delicia",f.textContent="¿Vamos a Probarlo?",v.src=e,v.alt="Chinchus",g.src=n,g.alt="Caldito",x.src=t,x.alt="Librillo",b.type="button",b.value="Pedir",y.type="button",y.value="Pedir",E.type="button",E.value="Pedir",o.classList.add("titleMenu"),i.classList.add("firstFood"),a.classList.add("secondFood"),c.classList.add("thirdFood"),o.appendChild(d),i.append(l,v,p,b),a.append(s,g,m,y),c.append(u,x,f,E),r.append(o,i,a,c),h.appendChild(r)}(f,v,g)}))})()})();