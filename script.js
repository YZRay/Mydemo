const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
// Scroll page
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#work-experience");

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});
// navagations
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// nav
const navbarToggle = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav__links");

navbarToggle.addEventListener("click", () => {
  navLinks.classList.toggle("collapsed");
});

// fade in
const fadeIn = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
});

fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
