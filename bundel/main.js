(()=>{"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=/^[а-яёa-z]{2,}$/i,i=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;const r=function(e){var t=e.target,n=/^(\s*\-*)*/g,o=/[\s*\-*]*$/g,i=function(){t.value=t.value.replace(n,""),t.value=t.value.replace(o,"")};"fio"===t.name&&(i(),t.value=t.value.replace(/( |^)[а-яёa-z]/g,(function(e){return e.toUpperCase()}))),"phone"===t.name&&(i(),t.value=t.value.replace(/\++/g,"+"),t.value=t.value.replace(/\-+/g,"-"),t.value=t.value.replace(/\(+/g,"("),t.value=t.value.replace(/\)+/g,")"))};function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw r}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function o(e){var n=e.keyCode,o=t,i=o.replace(/\D/g,""),r=this.value.replace(/\D/g,""),a=0,s=o.replace(/[_\d]/g,(function(e){return a<r.length?r.charAt(a++)||i.charAt(a):e}));-1!=(a=s.indexOf("_"))&&(s=s.slice(0,a));var l=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}var i,r=a(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;s.addEventListener("input",o),s.addEventListener("focus",o),s.addEventListener("blur",o)}}catch(e){r.e(e)}finally{r.f()}}const c=l;l("селектор элементов","маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__");var u=document.querySelector('input[name="calc-total"]');var d,v,f,m,h,p,y,g,S,b,w,_,L,x,E,q,T,A,I,k;w=document.querySelector(".header-modal"),_=document.querySelector(".services-modal"),L=document.querySelector(".overlay"),x=document.querySelector(".photo-modal"),E=x.querySelector(".modal-content"),q=document.querySelector(".smooth-scroll"),T=function(){L.classList.toggle("active-menu"),q.classList.toggle("active-zindex")},A=function(){T(),w.classList.toggle("active-menu")},I=function(){T(),_.classList.toggle("active-menu")},k=function(){T(),x.classList.toggle("active-menu")},document.addEventListener("click",(function(e){var t=e.target;if((t.closest(".header-modal__close")||t.closest(".button"))&&(e.preventDefault(),A()),(t.closest(".services-modal__close")||t.closest(".service-button"))&&(e.preventDefault(),I()),t.closest(".document-overlay")){e.preventDefault();var n=t.closest(".sertificate-document").href;E.src="".concat(n),k()}t.classList.contains("overlay")&&(w.classList.contains("active-menu")&&A(),_.classList.contains("active-menu")&&I()),(t.classList.contains("close__photo")||t.classList.contains("active-menu"))&&k()})),function(){var e=document.querySelector(".smooth-scroll"),t=document.querySelector("#benefits");window.addEventListener("scroll",(function(){t.offsetTop<document.documentElement.scrollTop?(e.classList.add("show-btn"),e.addEventListener("click",(function(e){var t=e.detail;e.preventDefault(),1===t&&window.scrollTo({top:0,behavior:"smooth"})}))):e.classList.remove("show-btn")}))}(),f="23 September  2021",m=document.querySelectorAll(".count_1"),h=document.querySelectorAll(".count_2"),p=document.querySelectorAll(".count_3"),y=document.querySelectorAll(".count_4"),g=0,S=function(e){return e<10?"0".concat(e):e},(b=function(){var e=function(){var e=(new Date(f).getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),o=Math.floor(e/3600%24),i=Math.floor(e/3600/24);return e>0?{timeRemaining:e,days:i,hours:o,minutes:n,seconds:t}:{timeRemaining:0,days:0,hours:0,minutes:0,seconds:0}}(),t=e.days,n=e.hours,o=e.minutes,i=e.seconds,r=e.timeRemaining;m.forEach((function(e){e.querySelector("span").textContent=S(t)})),h.forEach((function(e){e.querySelector("span").textContent=S(n)})),p.forEach((function(e){e.querySelector("span").textContent=S(o)})),y.forEach((function(e){e.querySelector("span").textContent=S(i)})),r<0&&clearInterval(g)})(),g=setInterval(b,1e3),v=new(d=function(){function o(e){var t=e.main,n=e.wrap,i=e.nextBtn,r=e.prevBtn,a=e.position,s=void 0===a?0:a,l=e.slidersToShow,c=void 0===l?3:l,u=e.infinity,d=void 0===u||u,v=e.responsive,f=void 0===v?[]:v,m=e.sliderWidthValid,h=void 0!==m&&m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.nextBtn=document.querySelector(i),this.prevBtn=document.querySelector(r),this.slidersToShow=c,this.sliderWidthValid=h,this.options={position:s,infinity:d,sliderWidth:parseInt(this.main.clientWidth/this.slidersToShow),maxPosition:this.slides.length-this.slidersToShow},this.responsive=f}var i,r;return i=o,(r=[{key:"init",value:function(){this.sliderWidthValid&&(this.addClass(),this.addStyle()),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addClass",value:function(){var t,n=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var e=o.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(l)throw a}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("vi__slider-item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("slidersCorusel-style");e||((e=document.createElement("style")).id="slidersCorusel-style"),e.textContent="\n        .vi__slider-item {\n          min-width: ".concat(this.options.sliderWidth,"px;\n        }\n      "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prevBtn.addEventListener("click",this.prevSlider.bind(this)),this.nextBtn.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"responseInit",value:function(){var n,o=this,i=this.slidersToShow,r=this.responsive.map((function(e){return e.breakpoint})),a=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=function(){o.options.sliderWidth=parseInt(o.main.clientWidth/o.slidersToShow),o.addStyle()},l=function(){var e=document.documentElement.clientWidth;if(e<a)for(var t=0;t<r.length;t++)e<r[t]&&(o.slidersToShow=o.responsive[t].slidersToShow,s());else o.slidersToShow=i,s()};l(),window.addEventListener("resize",l)}}])&&n(i.prototype,r),o}())({main:".benefits-inner",wrap:".benefits-wrap",nextBtn:".benefits__arrow--right",prevBtn:".benefits__arrow--left",slidersToShow:3,infinity:!0,sliderWidthValid:!0,responsive:[{breakpoint:576,slidersToShow:1}]}),new d({main:".service__content",wrap:".service-wrap",nextBtn:".services__arrow--right",prevBtn:".services__arrow--left",slidersToShow:2,infinity:!0,responsive:[{breakpoint:768,slidersToShow:1}]}).init(),v.init(),function(){var e=document.getElementById("calc"),t=document.getElementById("calc-type"),n=document.getElementById("calc-input"),o=document.getElementById("calc-type-material"),i=document.getElementById("calc-total"),r=document.querySelector(".message-calc");n&&(n.addEventListener("input",(function(){n.value=n.value.replace(/[а-яёa-z]/gi,"")})),e.addEventListener("change",(function(e){var a=e.target,s="";a!==t&&a!==n&&a!==o||function(){var e=t.options[t.selectedIndex].value,l=o.options[o.selectedIndex].value,c=n.value;"--"===e&&(i.value="",n.value="",o.value="--");var u,d,v=r.clientHeight,f=function(){r.style.top="calc(100vh + 30px)"};"--"===e&&a===n?(r.style.top="calc(100vh - ".concat(30+v,"px)"),setInterval(f,2500)):f(),c&&"--"!==e&&(s="--"===l?parseInt(c*e):parseInt(c*e*l)),s&&(0,u=s,1e3,d=null,window.requestAnimationFrame((function e(t){d||(d=t);var n=Math.min((t-d)/1e3,1);i.value=Math.floor(n*(u+0)+0),n<1&&window.requestAnimationFrame(e)})))}()})))}(),function(){var e=document.createElement("div");e.style.cssText="\n    position: relative;\n    color: white;\n    font-size: 2rem;\n    background-color: #4b9a22;\n    padding: 10px;\n    border: 2px solid #5dd29c;\n    border-radius: 20px;\n    margin: 10px auto;\n    text-align: center;\n  ";var t=function(e){e.forEach((function(e){"page"!==e.name&&"subject"!==e.name&&(e.value="",e.classList.remove("success"),e.classList.remove("error"))}))},n=function(t){var n=document.querySelector(".header-modal"),o=document.querySelector(".services-modal"),i=document.querySelector(".overlay"),r=document.querySelector(".smooth-scroll");"callback-form"===t.name&&(n.classList.toggle("active-menu"),i.classList.toggle("active-menu"),r.classList.toggle("active-zindex"),e.remove()),"application-form"===t.name&&(o.classList.toggle("active-menu"),i.classList.toggle("active-menu"),r.classList.toggle("active-zindex"),e.remove()),e.remove()},a=function(a){var s=document.querySelector('form[name="'.concat(a,'"]'));s.querySelectorAll(".form-group input").forEach((function(e){e.addEventListener("input",(function(e){var t,n,r;t=e.target,n=function(){t.classList.add("success"),t.classList.remove("error")},r=function(){t.classList.add("error"),t.classList.remove("success")},"fio"===t.name&&(t.value=t.value.replace(/[\s\d!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\|\\/\"№\;\:]*/gi,""),o.test(t.value)?n():r()),"phone"===t.name&&(t.value=t.value.replace(/[^\d\+\-\s\(\)]+/g,""),i.test(t.value)?n():r())})),e.addEventListener("blur",r)})),c('input[name="phone"]'),s.addEventListener("submit",(function(o){o.preventDefault();var i,r=o.target,a=r.querySelectorAll("input");if(i=!0,a.forEach((function(e){if(""===e.value)return e.classList.add("error"),void(i=!1);e.classList.contains("error")&&(i=!1)})),i){r.appendChild(e),e.classList.add("animate__backInRight"),e.textContent="Загрузка ...";var s=new FormData(r),l={};s.forEach((function(e,t){l[t]=e})),null!==u&&u.value&&(l["".concat(u.name)]=u.value),function(e){return fetch("./server.php",{method:"POST",headers:{"contant-Type":"application/json"},body:JSON.stringify(e)})}(l).then((function(o){if(200!==o.status)throw new Error("status not 200");e.style.display="block",e.textContent="Ваши данные у нас ))",t(a),setTimeout(n(r),3e3)})).catch((function(o){e.style.display="block",e.textContent="Что то не то",t(a),setTimeout(n(r),3e3),console.log(o)}))}}))};a("action-form"),a("action-form2"),a("callback-form"),a("application-form")}()})();