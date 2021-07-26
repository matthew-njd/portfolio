"use strict";

// Smooth Scrolling
const navLinkh = document.querySelector("#nav-h");
const navLink1 = document.querySelector("#nav-1");
const navLink2 = document.querySelector("#nav-2");
const sectionh = document.querySelector("#section-h");
const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");

navLinkh.addEventListener("click", function (e) {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

navLink1.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset - 25,
    behavior: "smooth",
  });
});

navLink2.addEventListener("click", function (e) {
  const s2coords = section2.getBoundingClientRect();

  window.scrollTo({
    left: s2coords.left + window.pageXOffset,
    top: s2coords.top + window.pageYOffset - 25,
    behavior: "smooth",
  });
});

// Show Navbar
const nav = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting)
    nav.classList.add("sticky"), navLinks.classList.add("side");
  else nav.classList.remove("sticky"), navLinks.classList.remove("side");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight * 4}px`,
});
headerObserver.observe(header);

// Tabbed component
const tabs = document.querySelectorAll(".work__tab");
const tabsContainer = document.querySelector(".work__btn-container");
const tabsContent = document.querySelectorAll(".work__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".work__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("work__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("work__content--active"));

  clicked.classList.add("work__tab--active");
  document
    .querySelector(`.work__content--${clicked.dataset.tab}`)
    .classList.add("work__content--active");
});

// Reveal section
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
