(()=>{"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var i=function(){function i(e){var t=e.main,n=e.wrap,r=e.nextBtn,a=e.prevBtn,o=e.position,s=void 0===o?0:o,l=e.slidersToShow,c=void 0===l?3:l,u=e.infinity,d=void 0===u||u,m=e.interval,f=void 0===m?3e3:m,v=e.responsive,h=void 0===v?[]:v,y=e.sliderWidthValid,p=void 0!==y&&y;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.nextBtn=document.querySelector(r),this.prevBtn=document.querySelector(a),this.slidersToShow=c,this.sliderWidthValid=p,this.options={position:s,infinity:d,interval:f,sliderWidth:parseInt(this.main.clientWidth/this.slidersToShow),maxPosition:this.slides.length-this.slidersToShow},this.responsive=h}var r,a;return r=i,(a=[{key:"init",value:function(){this.sliderWidthValid&&(this.addClass(),this.addStyle()),this.controlSlider(),this.responsive&&this.responseInit(),this.startSlide()}},{key:"addClass",value:function(){var t,n=function(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=e(t))){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var e=i.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==i.return||i.return()}finally{if(l)throw o}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("vi__slider-item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("slidersCorusel-style");e||((e=document.createElement("style")).id="slidersCorusel-style"),e.textContent="\n        .vi__slider-item {\n          min-width: ".concat(this.options.sliderWidth,"px;\n        }\n      "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prevBtn.addEventListener("click",this.prevSlider.bind(this)),this.nextBtn.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"responseInit",value:function(){var n,i=this,r=this.slidersToShow,a=this.responsive.map((function(e){return e.breakpoint})),o=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=a)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=function(){i.options.sliderWidth=parseInt(i.main.clientWidth/i.slidersToShow),i.addStyle()},l=function(){var e=document.documentElement.clientWidth;if(e<o)for(var t=0;t<a.length;t++)e<a[t]&&(i.slidersToShow=i.responsive[t].slidersToShow,s());else i.slidersToShow=r,s()};l(),window.addEventListener("resize",l)}},{key:"autoPlay",value:function(){this.play=setInterval(this.nextSlider.bind(this),this.options.interval)}},{key:"startSlide",value:function(){this.autoPlay(),this.prevBtn.addEventListener("mouseout",this.autoPlay.bind(this)),this.nextBtn.addEventListener("mouseout",this.autoPlay.bind(this)),this.prevBtn.addEventListener("mouseover",this.stopSlide.bind(this)),this.nextBtn.addEventListener("mouseover",this.stopSlide.bind(this))}},{key:"stopSlide",value:function(){clearInterval(this.play)}}])&&n(r.prototype,a),i}();var r=/^[а-яёa-z]{2,}$/i,a=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;const o=function(e){var t=e.target,n=/^(\s*\-*)*/g,i=/[\s*\-*]*$/g,r=function(){t.value=t.value.replace(n,""),t.value=t.value.replace(i,"")};"fio"===t.name&&(r(),t.value=t.value.replace(/( |^)[а-яёa-z]/g,(function(e){return e.toUpperCase()}))),"phone"===t.name&&(r(),t.value=t.value.replace(/\++/g,"+"),t.value=t.value.replace(/\-+/g,"-"),t.value=t.value.replace(/\(+/g,"("),t.value=t.value.replace(/\)+/g,")"))};function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var c=document.querySelector('input[name="calc-total"]');const u=function(e,t,n,i,r){var a=document.querySelectorAll(e),o=document.querySelector(t),s=document.querySelector(".overlay"),l=document.querySelector(i),c=document.querySelector(r),u=document.querySelector(n);console.log(u),a.forEach((function(e){e.addEventListener("click",(function(e){e.triger&&e.preventDefault(),c&&(c.style.display="none"),o.style.display="block",s.style.display="block"}))})),u.addEventListener("click",(function(){o.style.display="none",s.style.display="none",l&&(c.style.display="block",l.style.cssText="width: auto; height: auto;",l.innerHTML="")})),s.addEventListener("click",(function(e){e.target===s&&(o.style.display="none",s.style.display="none",l&&(c.style.display="block",l.style.cssText="width: auto; height: auto;",l.innerHTML=""))}))};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var v,h,y,p,g,b,w,x,S,_;S=document.querySelector(".smooth-scroll"),_=document.querySelector("#benefits"),window.addEventListener("scroll",(function(){_.offsetTop<document.documentElement.scrollTop?(S.classList.add("show-btn"),S.addEventListener("click",(function(e){var t=e.detail;e.preventDefault(),1===t&&window.scrollTo({top:0,behavior:"smooth"})}))):S.classList.remove("show-btn")})),v="30 September 2022",h=document.querySelectorAll(".count_1"),y=document.querySelectorAll(".count_2"),p=document.querySelectorAll(".count_3"),g=document.querySelectorAll(".count_4"),b=0,w=function(e){return e<10?"0".concat(e):e},(x=function(){var e=function(){var e=(new Date(v).getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),i=Math.floor(e/3600%24),r=Math.floor(e/3600/24);return e>0?{timeRemaining:e,days:r,hours:i,minutes:n,seconds:t}:{timeRemaining:0,days:0,hours:0,minutes:0,seconds:0}}(),t=e.days,n=e.hours,i=e.minutes,r=e.seconds,a=e.timeRemaining;h.forEach((function(e){e.querySelector("span").textContent=w(t)})),y.forEach((function(e){e.querySelector("span").textContent=w(n)})),p.forEach((function(e){e.querySelector("span").textContent=w(i)})),g.forEach((function(e){e.querySelector("span").textContent=w(r)})),a<0&&clearInterval(b)})(),b=setInterval(x,1e3);var E,T,k,L,A,q,C,I,M,B,N,j=new i({main:".benefits-inner",wrap:".benefits-wrap",nextBtn:".benefits__arrow--right",prevBtn:".benefits__arrow--left",slidersToShow:3,infinity:!0,sliderWidthValid:!0,interval:4e3,responsive:[{breakpoint:576,slidersToShow:1}]});new i({main:".service__content",wrap:".service-wrap",nextBtn:".services__arrow--right",prevBtn:".services__arrow--left",slidersToShow:2,infinity:!0,responsive:[{breakpoint:769,slidersToShow:1}]}).init(),j.init(),function(){var e=document.getElementById("calc"),t=document.getElementById("calc-type"),n=document.getElementById("calc-input"),i=document.getElementById("calc-type-material"),r=document.getElementById("calc-total");n&&(n.addEventListener("input",(function(){n.value=n.value.replace(/[а-яёa-z]/gi,"")})),e.addEventListener("change",(function(e){var a,o,s,l,c,u=e.target,d="";u!==t&&u!==n&&u!==i||(s=t.options[t.selectedIndex].value,l=i.options[i.selectedIndex].value,c=n.value,"--"===s&&(r.value="",n.value="",i.value="--"),"--"!==s||u!==n?(c&&"--"!==s&&(d="--"===l?parseInt(c*s):parseInt(c*s*l)),d&&(a=d,o=null,window.requestAnimationFrame((function e(t){o||(o=t);var n=Math.min((t-o)/1e3,1);r.value=Math.floor(n*(a+0)+0),n<1&&window.requestAnimationFrame(e)})))):document.querySelector(".message-calc")||function(){var e=document.createElement("div");e.className="message-calc",e.innerHTML="Сначало выберите <b>балкон/лоджия</b>!",document.body.appendChild(e);var t=e.clientHeight;e.style.bottom+="".concat(t-10,"px"),setTimeout((function(){e.style.bottom="-100px",setTimeout((function(){e.remove()}),300)}),3e3)}())})))}(),function(){var e=document.createElement("div");e.style.cssText="\n    position: absolute;\n    z-index: 2;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: black;\n    font-size: 2rem;\n  ";var t=function(e){e.forEach((function(e){"page"!==e.name&&"subject"!==e.name&&(e.value="",e.classList.remove("success"),e.classList.remove("error"))}))},n=function(t,n){t.style.filter="none";var i=t.querySelector("button");n.forEach((function(e){e.removeAttribute("disabled")})),i.removeAttribute("disabled");var r=document.querySelector(".header-modal"),a=document.querySelector(".services-modal"),o=document.querySelector(".overlay"),s=document.querySelector(".smooth-scroll");"callback-form"===t.name&&(r.classList.toggle("active-menu"),o.classList.toggle("active-menu"),s.classList.toggle("active-zindex")),"application-form"===t.name&&(a.classList.toggle("active-menu"),o.classList.toggle("active-menu"),s.classList.toggle("active-zindex")),e.remove()},i=function(i){var l=document.querySelector('form[name="'.concat(i,'"]'));l.querySelectorAll(".form-group input").forEach((function(e){e.addEventListener("input",(function(e){var t,n,i;t=e.target,n=function(){t.classList.add("success"),t.classList.remove("error")},i=function(){t.classList.add("error"),t.classList.remove("success")},"fio"===t.name&&(t.value=t.value.replace(/[\s\d!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\|\\/\"№\;\:]*/gi,""),r.test(t.value)?n():i()),"phone"===t.name&&(t.value=t.value.replace(/[^\d\+\-\s\(\)]+/g,""),a.test(t.value)?n():i())})),e.addEventListener("blur",o)})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function n(e){var n=e.keyCode,i=t,r=i.replace(/\D/g,""),a=this.value.replace(/\D/g,""),o=0,s=i.replace(/[_\d]/g,(function(e){return o<a.length?a.charAt(o++)||r.charAt(o):e}));-1!=(o=s.indexOf("_"))&&(s=s.slice(0,o));var l=i.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}var i,r=s(document.querySelectorAll(e));try{for(r.s();!(i=r.n()).done;){var a=i.value;a.addEventListener("input",n),a.addEventListener("focus",n),a.addEventListener("blur",n)}}catch(e){r.e(e)}finally{r.f()}}('input[name="phone"]'),l.addEventListener("submit",(function(i){i.preventDefault();var r,a,o,s,l=i.target,u=l.querySelectorAll("input");if(s=!0,u.forEach((function(e){if(""===e.value)return e.classList.add("error"),void(s=!1);e.classList.contains("error")&&(s=!1)})),s){l.insertAdjacentElement("beforebegin",e),a=u,o=(r=l).querySelector("button"),a.forEach((function(e){e.setAttribute("disabled","disabled")})),o.setAttribute("disabled","disabled"),r.style.filter="blur(1px)",e.innerHTML='\n        <div class="status-messag">\n          <?xml version="1.0" encoding="utf-8"?>\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n          <g transform="rotate(0 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(30 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(60 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(90 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(120 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(150 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(180 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(210 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(240 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(270 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(300 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(330 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n            </rect>\n          </g>\n          </svg>\n        </div>';var d=new FormData(l),m={};d.forEach((function(e,t){m[t]=e})),null!==c&&c.value&&(m["".concat(c.name)]=c.value);(function(e){return fetch("./server.php",{method:"POST",headers:{"contant-Type":"application/json"},body:JSON.stringify(e)})})(m).then((function(i){if(200!==i.status)throw new Error("status not 200");e.innerHTML='\n        <div class="status-messag status-messag__succes">\n          <img class="status-messag__img" src="images/check.png" alt="Check">\n          <span class="status-messag__text" >Ваши данные у нас ))<span>\n        </div>',t(u),setTimeout((function(){n(l,u)}),3e3)})).catch((function(i){e.innerHTML='\n        <div class="status-messag status-messag__error">\n          <img class="status-messag__img" src="images/close.png" alt="Bad">\n          <span class="status-messag__text" >Произошла ошибка<span>\n        </div>',t(u),setTimeout((function(){n(l,u)}),3e3),console.log(i)}))}}))};i("action-form"),i("action-form2"),i("callback-form"),i("application-form")}(),u('[href="#callback"]',".header-modal",".header-modal__close"),u('[href="#application"]',".services-modal",".services-modal__close"),u(".document-inner",".photo-modal",".photo-modal__close",".photo-modal__content",".photo-modal__spiner"),document.querySelector(".services-img__modal")&&u(".service-image",".services-img__modal",".services-img__close",".services-img__wrap",".services-img__spiner"),function(){var e=document.querySelectorAll(".document-inner"),t=document.querySelector(".photo-modal__content"),n=document.createElement("img");n.classList.add("photo-modal__img");var i,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}(e);try{var a=function(){var e=i.value;e.addEventListener("click",(function(i){i.preventDefault();var r=e.querySelector("a").getAttribute("href");n.setAttribute("src",r),t.appendChild(n)}))};for(r.s();!(i=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}}(),function(){var e,t=document.querySelectorAll(".service-image"),n=document.querySelector(".services-img__wrap"),i=document.querySelector(".services-img__spiner"),r=function(){var e=document.querySelector(".services-img__arrow-right"),t=document.querySelector(".services-img__arrow-left"),r=document.querySelectorAll(".services-img__item"),a=0,o=function(e){var t,i,a,o,s,l,c=m(r);try{for(c.s();!(t=c.n()).done;)t.value.classList.remove("active-slide")}catch(e){c.e(e)}finally{c.f()}a=(i=r[e]).firstElementChild.naturalHeight,o=i.firstElementChild.naturalWidth,s=a,(l=o)>700&&s>800?(s*=.5,l*=.5):(s=s,l=l),n.style.height="".concat(s,"px"),n.style.width="".concat(l,"px"),r[e].classList.add("active-slide")};setTimeout((function(){i.style.display="none",o(a)}),1e3),e.addEventListener("click",(function(){a===r.length-1?o(a=0):(a++,o(a))})),t.addEventListener("click",(function(){0==a?(a=r.length-1,o(a)):(a--,o(a))}))},a=m(t);try{var o=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var i,a=m(t.querySelectorAll("a"));try{for(a.s();!(i=a.n()).done;){var o=i.value.getAttribute("href"),s=document.createElement("div"),l=document.createElement("img");s.classList.add("services-img__item"),l.setAttribute("src",o),s.appendChild(l),n.insertAdjacentElement("beforeend",s)}}catch(e){a.e(e)}finally{a.f()}r()}))};for(a.s();!(e=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}}(),T=document.getElementById("navigation-fixed"),k=document.querySelector("#navigation"),L=document.getElementById("navbar-collapse-fixed"),A=document.getElementById("navbar-collapse"),q=L.querySelectorAll("ul>li>a"),C=document.querySelector(".utp-button").querySelector("a"),I=document.querySelector(".about-wrap").querySelector(".fancyboxModal"),B=function(e){e?document.querySelector(e).classList.toggle("collapse"):A.classList.contains("collapse")?L.classList.contains("collapse")||L.classList.add("collapse"):A.classList.add("collapse")},N=function(e){e.preventDefault(),B();var t=e.currentTarget.getAttribute("href");document.querySelector("".concat(t)).scrollIntoView({behavior:"smooth",block:"start"})},(M=function(){k.offsetTop<=document.documentElement.scrollTop?T.classList.add("hide-menu"):L.classList.contains("collapse")&&T.classList.remove("hide-menu")})(),document.addEventListener("click",(function(e){var t=e.target;t.closest(".icon-bar")||t.closest(".navbar-toggle")?(e.preventDefault(),t.dataset.target?(B(t.dataset.target),M()):(B(t.parentElement.dataset.target),M())):(t.closest("#navigation-fixed")||L.classList.contains("collapse"))&&(t.closest("#navigation")||A.classList.contains("collapse"))||(B(),M())})),window.addEventListener("scroll",(function(){return M()})),q.forEach((function(e){e.addEventListener("click",N)})),C.addEventListener("click",N),I.addEventListener("click",N),E=document.querySelector(".comments-container"),fetch("comments.json").then((function(e){return e.json()})).then((function(e){var t=e.comments,n=[];t.forEach((function(e){if(e.image||(e.image="../users/placeholder.png"),0===e.id||3===e.id){var t='\n          <div class = "row comments-item">\n          <div class="col-xs-3 col-sm-2">\n            <div class="review-user">\n              <img src="images/users/'.concat(e.image,'" alt="').concat(e.id,'" class="img-responsive avatar">\n            </div>\n          </div>\n          <div class="col-xs-9 col-sm-9">\n            <div class="review-inner review-green review-arrow review-arrow-left">\n              <p class="text-normal">').concat(e.author,"</p>\n              <p>").concat(e.comment,"</p>\n            </div>\n          </div>\n        </div>");n.push(t)}else if(1===e.id||4===e.id){var i='\n          <div class = "row comments-item">\n          <div class="col-xs-9 col-sm-9">\n            <div class="review-inner review-gray review-arrow review-arrow-right">\n              <p class="text-normal">'.concat(e.author,"</p>\n              <p>").concat(e.comment,'</p>\n            </div>\n          </div>\n          <div class="col-xs-3 col-sm-2">\n            <div class="review-user">\n              <img src="images/users/').concat(e.image,'" alt="').concat(e.id,'" class="img-responsive avatar">\n            </div>\n          </div>\n        </div>');n.push(i)}else if(2===e.id||5===e.id){var r='\n          <div class = "row comments-item ">\n          <div class="col-xs-3 col-sm-2">\n            <div class="review-user">\n              <img src="images/users/'.concat(e.image,'" alt="').concat(e.id,'" class="img-responsive avatar">\n            </div>\n          </div>\n          <div class="col-xs-9 col-sm-9">\n            <div class="review-inner review-orange review-arrow review-arrow-left">\n              <p class="text-normal">').concat(e.author,"</p>\n              <p>").concat(e.comment,"</p>\n            </div>\n          </div>\n        </div> ");n.push(r)}})),E.innerHTML='\n        <div class="status-messag">\n          <?xml version="1.0" encoding="utf-8"?>\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n          <g transform="rotate(0 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(30 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(60 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(90 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(120 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(150 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(180 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(210 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(240 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(270 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(300 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n          </g><g transform="rotate(330 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">\n              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n            </rect>\n          </g>\n          </svg>\n        </div>',setInterval((function(){!function(){E.innerHTML="";for(var e=0;e<3;e++)E.insertAdjacentHTML("beforeend",n[e])}();var e=n.shift();n.push(e)}),5e3)})).catch((function(e){E.innerHTML='<div class="comments__loading-error"><h2>Ошибка загрузки данных! '.concat(e,"</h2></div>")}))})();