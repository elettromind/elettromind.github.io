// Appare effetto fade-in per elementi con classe "fade-in"
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const options = {
    threshold: 0.3,
  };

  const onScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(el => onScroll.observe(el));
});
