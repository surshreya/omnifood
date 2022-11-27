/*
 * Handle mobile navigation
 */

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

/**
 * Set Copyright year
 */
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();
