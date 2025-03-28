const btn = document.getElementById("toggle");
const nav = document.getElementById("nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("active");
});
