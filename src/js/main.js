const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const hamburgerWrapper = document.querySelector(".hamburgerWrapper");
const headerName = document.querySelector(".header-name");
const headerNameTwo = document.querySelector(".header-name-2");
const headerNameThree = document.querySelector(".header-name-3");

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

// Animation for header 1
headerName.addEventListener("mouseover", () => {
    headerName.classList.add("animate__animated", "animate__shakeX");
});

headerName.addEventListener("animationend", () => {
    headerName.classList.remove("animate__animated", "animate__shakeX");
});

// Animation for header 2
headerNameTwo.addEventListener("mouseover", () => {
    headerNameTwo.classList.add("animate__animated", "animate__shakeX");
});
  
headerNameTwo.addEventListener("animationend", () => {
    headerNameTwo.classList.remove("animate__animated", "animate__shakeX");
});

// Animation for header 3
headerNameThree.addEventListener("mouseover", () => {
    headerNameThree.classList.add("animate__animated", "animate__shakeX");
});
  
headerNameThree.addEventListener("animationend", () => {
    headerNameThree.classList.remove("animate__animated", "animate__shakeX");
  });
