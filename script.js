document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector(".stars-button-5");
  button.classList.add("active");
  button.focus({ preventScroll: true });
});

function toggleMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}
