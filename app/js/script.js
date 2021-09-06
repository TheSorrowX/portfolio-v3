/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*===== SHOW SCROLL TOP =====*/

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 260) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
/*===== MIXITUP FILTER PORTFOLIO =====*/
const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 400,
  },
});
/* Link active portfolio */
const linkPortfolio = document.querySelectorAll(".portfolio__nav-item");
function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
}
linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

/*===== GSAP ANIMATION =====*/
gsap.from(".nav", { opacity: 0, duration: 2, delay: 0.2 });
gsap.from(".home__data", { opacity: 0, duration: 2, delay: 0.8, x: 100 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});


/*===== EMAIL JS =====*/
function sendEmail() {
  const success = document.getElementById("success");
  const error = document.getElementById("error");

  const name = document.getElementById("txt_name");
  const email = document.getElementById("txt_email");
  const message = document.getElementById("txt_message");

  const templateParams = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  emailjs.send("default_service", "template_xb5jimy", templateParams).then(
    function (response) {
      success.classList.toggle("hidden");
      name.value = "";
      email.value = "";
      message.value = "";
      setTimeout(function () {
        success.classList.toggle("hidden");
      }, 3000);
    },
    function (err) {
      error.classList.toggle("hidden");
      setTimeout(function () {
        error.classList.toggle("hidden");
      }, 3000);
    }
  );
}
