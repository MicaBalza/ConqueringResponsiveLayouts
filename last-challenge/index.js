const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
  navToggle.classList.toggle("is-active");
});
