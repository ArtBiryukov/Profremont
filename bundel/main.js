(()=>{"use strict";var e,t,s,o,c,n,l;s=document.querySelector(".header-modal"),o=document.querySelector(".services-modal"),c=document.querySelector(".overlay"),n=function(){c.classList.toggle("active-menu"),s.classList.toggle("active-menu")},l=function(){c.classList.toggle("active-menu"),o.classList.toggle("active-menu")},document.addEventListener("click",(function(e){e.preventDefault();var t=e.target;(t.closest(".header-modal__close")||t.closest(".button"))&&n(),(t.closest(".services-modal__close")||t.closest(".service-button"))&&l(),t.classList.contains("overlay")&&(s.classList.contains("active-menu")?n():o.classList.contains("active-menu")&&l())})),e=document.querySelector(".smooth-scroll"),t=document.querySelector("#benefits"),window.addEventListener("scroll",(function(){t.offsetTop<document.documentElement.scrollTop?(e.classList.add("show-btn"),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))):e.classList.remove("show-btn")}))})();