!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=!1;const t=document.querySelector(".clubs-list"),n=t.querySelector("ul");t.addEventListener("click",()=>{e?(n.style.display="none",e=!1):(n.style.display="block",e=!0)})};var o=()=>{let e=!1;document.querySelector(".open-popup");const t=document.getElementById("free_visit_form");document.addEventListener("click",n=>{let l=n.target;e?e&&(l.classList.contains("overlay")?(t.style.display="none",e=!1):(l=l.closest(".close-form"),l&&l.classList.contains("close-form")&&(t.style.display="none",e=!1))):l&&l.classList.contains("open-popup")&&(t.style.display="block",e=!0)})};var s=()=>{let e=!1;const t=document.querySelector("#call"),n=document.getElementById("callback_form");document.addEventListener("click",l=>{let o=l.target;e?e&&(o.classList.contains("overlay")||o.classList.contains("close-btn")?(n.style.display="none",e=!1):(o=o.closest(".close-form"),o&&o.classList.contains("close-form")&&(n.style.display="none",e=!1))):o&&o===t&&(n.style.display="block",e=!0)})};var c=()=>{let e=!1;const t=document.getElementById("gift"),n=document.querySelector(".fixed-gift");document.addEventListener("click",l=>{let o=l.target;e?e&&(o.classList.contains("overlay")||"ok"===o.id?(t.style.display="none",e=!1):(o=o.closest(".close-form"),o.classList.contains("close-form")&&(t.style.display="none",e=!1))):(o=o.closest(".fixed-gift"),o&&(t.style.display="block",console.log(n),n.style.display="none",e=!0))})};var r=()=>{const e=document.createElement("div");e.style.cssText="font-size: 1.5 rem; color: #fff";const t=document.querySelector("#thanks");let n=!1;const l=e=>{e.nextElementSibling&&"Заполните поле!"===e.nextElementSibling.textContent&&e.nextElementSibling.remove()},o=e=>{const t=document.querySelectorAll('button[type="submit"]'),n=/^(\+7)?8?([-()]*\d){10}$/;if("phone"===e.name){if(e.value=e.value.replace(/^\++/g,"+"),e.value=e.value.replace(/[^+0-9]/g,""),n.test(e.value))"Ошибка в этом поле"===e.parentNode.lastElementChild.textContent&&e.parentNode.lastElementChild.remove(),t.forEach(e=>{e.removeAttribute("disabled")});else{const n=document.createElement("div");if(n.textContent="Ошибка в этом поле",n.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",e.nextElementSibling&&"Ошибка в этом поле"===e.nextElementSibling.textContent)return;e.insertAdjacentElement("afterend",n),t.forEach(e=>{e.setAttribute("disabled",!0)})}}"promocode"===e.id&&(e.value=e.value.replace(/[^+0-9а-яА-Яa-zA-z]/g,"")),"name"===e.name&&"promocode"!==e.id&&(e.value=e.value.replace(/[^а-яё\s]/gi,"")),"user_message"===e.name&&(e.value=e.value.replace(/[^а-яА-Я ,.?!"';:\-\%()\#]/g,""))},s=o=>{{const s=o.querySelectorAll("input"),r=o.querySelector('input[name="phone"]'),i=o.querySelector('input[name="name"]'),a=o.querySelector("#check"),d=t.querySelector("p");if(""!==r.value||""!==r.value&&i&&""!==i.value){if(!a||a&&a.checked){o.appendChild(e),d.textContent="Загрузка...";const l=new FormData(o);let r={};l.forEach((e,t)=>{r[t]=e}),c(r).then(l=>{if(t.style.display="block",n=!0,!0!==l.ok)throw new Error("status network not 200");d.textContent="Спасибо! Мы скоро с Вами свяжемся!",a&&(a.checked=!1);for(let e=0;e<s.length;e++)s[e].value="";setTimeout(()=>{e.remove()},5e3)}).catch(e=>{d.textContent="Что-то пошло не так...",console.log(e)})}else if(a&&!1===a.checked){console.log("error");const e=document.createElement("div");if(e.textContent="Поставьте галочку!",e.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",a.nextElementSibling&&"Поставьте галочку!"===a.nextElementSibling.textContent)return;!1===a.checked&&a.insertAdjacentElement("afterend",e)}}else for(let e=0;e<s.length;e++){const t=document.createElement("div");if(t.textContent="Заполните поле!",t.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",s[e].nextElementSibling&&"Заполните поле!"===s[e].nextElementSibling.textContent)return;""===s[e].value&&s[e].insertAdjacentElement("afterend",t)}document.body.addEventListener("input",l)}},c=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});document.body.addEventListener("input",e=>{e.preventDefault(),o(e.target),l(e.target)}),document.body.addEventListener("submit",e=>{e.preventDefault(),s(e.target)}),document.addEventListener("click",e=>{let l=e.target;n&&(l.classList.contains("overlay")||l.classList.contains("close-btn")?(t.style.display="none",n=!1):(l=l.closest(".close-form"),l.classList.contains("close-form")&&(t.style.display="none",n=!1)))})};var i=()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".close-menu-btn").querySelector("img"),n=document.querySelector(".popup-menu");let l=!1;document.documentElement.clientWidth<768?window.addEventListener("scroll",()=>{window.scrollY>261?e.style.position="fixed":e.style.position="relative"}):e.style.position="relative",document.documentElement.clientWidth<768&&document.addEventListener("click",e=>{let o=e.target;l?l&&(o===t||o.classList.contains("test"))&&(n.style.display="none",l=!1):(o=o.closest(".menu-button"),o&&o.classList.contains("menu-button")&&(n.style.display="block",l=!0))})};var a=()=>{const e=document.getElementById("totop");e.style.display="none";window.addEventListener("scroll",()=>{document.querySelector(".js-arrow-point").getBoundingClientRect().y<=0?e.style.display="block":e.style.display="none"})};var d=()=>{const e=document.querySelectorAll('input[name="card-type"]');card_order;const t=document.getElementById("card_order").querySelectorAll('input[name="club-name"]'),n=document.getElementById("promocode"),l=document.getElementById("price-total");let o;const s={mozaika:"moz",schelkovo:"shel"},c={changeClub(){t.forEach(e=>{e.checked&&(o=s[e.value])}),this.changePeriod()},changePeriod(){e.forEach(e=>e.checked?this.setPrice(e.dataset[o]):"")},checkPromocode(){if(n&&"ТЕЛО2019"===n.value)return!0},setPrice(e){l&&(this.checkPromocode()?l.textContent=Math.ceil(parseInt(.3*e)):l.textContent=Math.ceil(parseInt(e)))},init(){this.changeClub()}};c.init(),t.forEach(e=>{e.addEventListener("change",()=>{c.changeClub()})}),e.forEach(e=>{e.addEventListener("change",()=>{c.changePeriod()})}),n&&n.addEventListener("input",()=>{c.setPrice(l.textContent)})};var u=()=>{const e=document.querySelector("#thanks");let t=!1;document.querySelector(".close-form");document.addEventListener("click",n=>{let l=n.target;console.log(l),t?t&&(l.classList.contains("overlay")||l.classList.contains("close-btn")?(e.style.display="none",t=!1):(l=l.closest(".close-form"),l.classList.contains("close-form")&&(e.style.display="none",t=!1))):l&&l.classList.contains("btn-send")&&(e.style.display="block",t=!0)})};var m=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="block"},2e3)};var y=()=>{const e=document.querySelector(".service-wrapper"),t=e.querySelector(".services-slider"),n=e.querySelectorAll(".slide"),l=e.querySelector(".prev"),o=e.querySelector(".next"),s=parseFloat(getComputedStyle(t).width),c=parseFloat(getComputedStyle(n[0]).width),r=e.querySelectorAll(".services-slider_controls");let i=0,a=0,d=c/s*100,u=[];n.forEach((e,t)=>{u.push({item:e,position:t,transform:0})});let m=0,y=u.length-1;({transformItem(e){if("right"===e){if(i+s/c-1>=y)return;l.classList.contains("active")||l.classList.add("active"),o.classList.contains("active")&&i+s/c>=y&&o.classList.remove("active"),i++,a-=d}if("left"===e){if(i<=m)return;o.classList.contains("active")||o.classList.add("active"),l.classList.contains("active")&&i-1<=m&&l.classList.remove("active"),i--,a+=d}t.style.transform="translateX("+a+"%)"},controlClick(e){if(e.classList.contains("services-slider_controls")){let t=e.classList.contains("next")?"right":"left";this.transformItem(t)}},setUpListeners(){r.forEach(e=>{e.addEventListener("click",()=>{this.controlClick(e)})})},right(){this.transformItem("right")},left(){this.transformItem("left")}}).setUpListeners()};var p=()=>{let e=0;const t=document.querySelector(".gallery-slider .next"),n=document.querySelector(".gallery-slider .prev"),l=document.querySelector(".gallery-slider"),o=l.querySelectorAll(".slide");let s=l.querySelectorAll(".gallery-slider__dots-item");const c={showSlides(t){let n;for(t>o.length&&(e=1),t<1&&(e=o.length),n=0;n<o.length;n++)o[n].style.display="none";for(n=0;n<s.length;n++)s[n].className=s[n].className.replace(" active","");o[e-1].style.display="block",s[e-1].className+=" active"},nextSlide(){this.showSlides(e+=1)},prevSlide(){this.showSlides(e-=1)},currentSlide(t){this.showSlides(e=t)},init(){this.showSlides(e),this.autoPlay()},autoPlay(){setInterval(()=>{this.nextSlide()},2e3)}};c.init(e),t.addEventListener("click",()=>{c.nextSlide()}),n.addEventListener("click",()=>{c.prevSlide()}),s.forEach((e,t)=>{e.addEventListener("click",()=>{c.currentSlide(t+1)})})};"/index.html"===window.location.pathname||window.location.pathname,l(),o(),s(),c(),r(),window.addEventListener("resize",()=>{i()}),a(),u(),m(),y(),p(),d()}]);