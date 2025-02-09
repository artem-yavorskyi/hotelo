document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector(".stars-button-5");
  button.focus();
  button.classList.add("active");
});

function toggleMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}
