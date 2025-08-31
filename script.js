// script.js

// Show a welcome message when the page loads
window.onload = function () {
  alert("Welcome to Ajok Pioth's Portfolio Website!");
};

// Example: Smooth scroll when clicking nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
