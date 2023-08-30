// set current year 
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// make mobile nav work 
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open');
});

// navbar auto close
const navLink = document.querySelector(".main-nav-list");
navLink.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// sticky navigation 
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0];

  if(ent.isIntersecting === false) {
    document.body.classList.add('sticky')
  }  
  if (ent.isIntersecting) {
    document.body.classList.remove("sticky");
  }
}, {
  // in viewport
  root: null, 
  threshold: 0,
  rootMargin: "-80px"
}
);
observer.observe(sectionHeroEl);


