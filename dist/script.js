"use strict";var showMenu=function(e,t){var o=document.getElementById(e),n=document.getElementById(t);o&&n&&o.addEventListener("click",(function(){n.classList.toggle("show-menu")}))};showMenu("nav-toggle","nav-menu");var navLink=document.querySelectorAll(".nav__link");function linkAction(){document.getElementById("nav-menu").classList.remove("show-menu")}navLink.forEach((function(e){return e.addEventListener("click",linkAction)}));var sections=document.querySelectorAll("section[id]");function scrollActive(){var e=window.pageYOffset;sections.forEach((function(t){var o=t.offsetHeight,n=t.offsetTop-50,i=t.getAttribute("id");e>n&&e<=n+o?document.querySelector(".nav__menu a[href*="+i+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+i+"]").classList.remove("active-link")}))}function scrollHeader(){var e=document.getElementById("header");this.scrollY>=200?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}function scrollTop(){var e=document.getElementById("scroll-top");this.scrollY>=260?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",scrollActive),window.addEventListener("scroll",scrollHeader),window.addEventListener("scroll",scrollTop);var mixer=mixitup(".portfolio__container",{selectors:{target:".portfolio__content"},animation:{duration:400}}),linkPortfolio=document.querySelectorAll(".portfolio__nav-item");function activePortfolio(){linkPortfolio&&(linkPortfolio.forEach((function(e){return e.classList.remove("active-portfolio")})),this.classList.add("active-portfolio"))}function sendEmail(){var e=document.getElementById("success"),t=document.getElementById("error"),o=document.getElementById("txt_name"),n=document.getElementById("txt_email"),i=document.getElementById("txt_message"),l={name:o.value,email:n.value,message:i.value};emailjs.send("default_service","template_xb5jimy",l).then((function(t){e.classList.toggle("hidden"),o.value="",n.value="",i.value="",setTimeout((function(){e.classList.toggle("hidden")}),3e3)}),(function(e){t.classList.toggle("hidden"),setTimeout((function(){t.classList.toggle("hidden")}),3e3)}))}linkPortfolio.forEach((function(e){return e.addEventListener("click",activePortfolio)})),gsap.from(".nav",{opacity:0,duration:2,delay:.2}),gsap.from(".home__data",{opacity:0,duration:2,delay:.8,x:100}),gsap.from(".home__greeting, .home__name, .home__profession, .home__button",{opacity:0,duration:2,delay:1,y:25,ease:"expo.out",stagger:.2});
//# sourceMappingURL=script.js.map