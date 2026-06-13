console.log("Deva Logistics Portfolio is running.");

const revealElements = document.querySelectorAll(
  ".focus-card, .project-card, .bima-card, .achievement-card, .leadership-card, .contact-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
