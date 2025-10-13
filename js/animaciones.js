document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h1", { duration: 1, y: -50, opacity: 0 });
  gsap.from("nav ul li", {
    duration: 0.5,
    x: -20,
    opacity: 0,
    stagger: 0.2
  });
});
