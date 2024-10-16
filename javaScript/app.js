// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

const changePicture = document.getElementById("toggleDarkLightMode");

function toggleDarkLightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.click();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar-links a");
  const currentPage = window.location.pathname;

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
