const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const hamburgerWrapper = document.querySelector(".hamburgerWrapper");
const headerName = document.querySelector(".header-name");

function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    hamburger.classList.remove("open");
  } else {
    menu.style.display = "block";
    hamburger.classList.add("open");
  }
}

hamburgerWrapper.addEventListener("click", toggleMenu);

menuItems.forEach(function(menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

headerName.addEventListener("mouseover", () => {
  headerName.classList.add("animate__animated", "animate__shakeX");
});

headerName.addEventListener("animationend", () => {
  headerName.classList.remove("animate__animated", "animate__shakeX");
});