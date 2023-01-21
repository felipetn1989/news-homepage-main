let menu = document.querySelector(".menu");

let overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (window.getComputedStyle(menu).display == "none") {
    menu.style.display = "flex";
    menuIcon.src = "assets/images/icon-menu-close.svg";
    menuIcon.style.height = "1.675rem";
    overlay.style.display = "block";
  } else {
    menu.style.display = "none";
    menuIcon.src = "assets/images/icon-menu.svg";
    menuIcon.style.height = "unset";
    overlay.style.display = "none";
  }
}
