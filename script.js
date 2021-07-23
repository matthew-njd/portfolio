"use strict";

const section1 = document.querySelector("#section-1");
const nav = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

let textOne = document.getElementById("header-title-1").textContent;
let textTwo = document.getElementById("header-title-2").textContent;
let textThree = document.getElementById("header-title-3").textContent;

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
