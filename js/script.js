/*
 * Handle mobile navigation
 */

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

/*
 * Set Copyright year
 */
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

/*
 * Implement smooth scrolling
 */
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(link.classList);
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/*
 * Implement sticky navigation after hero section
 */

const heroSectionEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      headerEl.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      headerEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-120px",
  }
);

obs.observe(heroSectionEl);
