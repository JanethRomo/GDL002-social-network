!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o='\n<section id =\'log-in\' class="tabs">\n  <div class="logo"></div>\n  <button class="logInWindow">Iniciar Sesión</button>\n  <button class="registerWindow">Registrarse</button>\n</section>\n\n<div class="container-tabs">\n  <section class="flex-user" id=\'containerlogIn\'>\n    <input id=\'emailIn\' type="text" class="inputStyle" placeholder=\'Ingresa tu email\'>\n    <input id=\'passwordIn\' type="password" class="inputStyle" placeholder=\'Contraseña\'>\n    <button class=\'btn-logIn\'>Iniciar Sesión</button>\n  </section>\n</div>\n';function i(){const e=document.getElementById("email").value,t=document.getElementById("password").value;firebase.auth().createUserWithEmailAndPassword(e,t).catch(function(e){e.code;var t=e.message;alert(t)})}function a(){const e=document.getElementById("emailIn").value,t=document.getElementById("passwordIn").value;firebase.auth().signInWithEmailAndPassword(e,t).catch(function(e){e.code;var t=e.message;alert(t)})}function r(){firebase.auth().signOut()}firebase.auth().onAuthStateChanged(function(e){if(e){if(d("/muro"),null!=(e=firebase.auth().currentUser)){const t=e.email;console.log(t),document.getElementById("saludo").innerHTML="Escribe algo en el foro "+t}}else d("/ingresar")});var s={homeEvents:function(){const e=document.querySelector(".logInWindow"),t=document.querySelector(".registerWindow"),n=document.querySelector(".btn-register"),o=document.querySelector(".btn-logIn");e&&e.addEventListener("click",function(e){e.preventDefault(),console.log("loginoption"),d("/ingresar")}),t&&t.addEventListener("click",function(e){e.preventDefault(),d("/registrar")}),n&&n.addEventListener("click",i),o&&o.addEventListener("click",a)},wallEvents:function(){const e=document.querySelector("#logout");e&&e.addEventListener("click",r);const t=document.querySelector("#submit-post"),n=(new Date).toLocaleDateString(),o=document.querySelector("#publish"),i=firebase.auth().currentUser.email;t.comment.value="",o.addEventListener("click",e=>{e.preventDefault(),db.collection("post").add({comment:t.comment.value,user:i,date:n})});const a=document.querySelector("#post-list");db.collection("post").orderBy("date").onSnapshot(e=>{e.docChanges().forEach(e=>{if("added"==e.type)!function(e){let t=document.createElement("section"),n=document.createElement("header"),o=document.createElement("span"),i=document.createElement("span"),r=document.createElement("div"),s=document.createElement("div"),l=document.createElement("button"),c=document.createElement("button"),d=document.createElement("p");t.setAttribute("data-id",e.id),t.setAttribute("class","each-post"),o.textContent=e.data().user,i.textContent=e.data().date,l.textContent="edit",c.textContent="x",d.textContent=e.data().comment,t.appendChild(n),n.appendChild(o),n.appendChild(i),t.appendChild(r),r.appendChild(s),s.appendChild(l),s.appendChild(c),r.appendChild(d),a.appendChild(t),c.addEventListener("click",e=>{e.stopPropagation();let t=e.target.parentElement.parentElement.parentElement.getAttribute("data-id");db.collection("post").doc(t).delete()})}(e.doc);else if("removed"==e.type){let t=a.querySelector("[data-id="+e.doc.id+"]");a.removeChild(t)}})})}};n.d(t,"elementClick",function(){return d}),n.d(t,"routes",function(){return c});const l=document.querySelector(".content");let c={"/":{template:o,events:s.homeEvents},"/index.html":{template:o,events:s.homeEvents},"/ingresar":{template:o,events:s.homeEvents},"/registrar":{template:'\n<section class="tabs">\n  <div class="logo"></div>\n  <button class="logInWindow">Iniciar Sesión</button>\n  <button class="registerWindow">Registrarse</button>\n</section>\n\n<div class="container-tabs">\n  <section class=\'flex-user\' id=\'container\'>\n    <input id=\'email\' type="text" class="inputStyle" placeholder=\'Registra tu email\'>\n    <input id=\'password\' type="password" class="inputStyle" placeholder=\'Contraseña\'>\n    <button class=\'btn-register\'>Register</button>\n  </section>\n</div>\n',events:s.homeEvents},"/muro":{template:"\n<nav>\n<p id='saludo'></p>\n<button id='logout'>Cerrar sesión</button>\n</nav>\n\n<form id='submit-post'>\n<textarea class='post-area' name='comment' placeholder='Escribe aquí'></textarea>\n\n<button id='publish'>publicar</button>\n</form>\n\n<div id='post-list'>\n\n</div>\n",events:s.wallEvents}};window.onpopstate=function(){};let d=e=>{window.history.pushState({},e,window.location.origin+e),window.history.pushState({},e,window.location.origin+e),window.history.back(),l.innerHTML=c[e].template,c[e].events()};l.innerHTML=c[window.location.pathname].template,s.homeEvents()}]);