"use strict";

const section1 = document.querySelector("#section-1");
const nav = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Show Navbar
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
