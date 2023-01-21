let menu = document.querySelector(".menu")

menuIcon.addEventListener("click",toggleMenu)

function toggleMenu () {
    if (window.getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex'
        menuIcon.src = "assets/images/icon-menu-close.svg";
        menuIcon.style.height = '1.675rem'
    } else {
        menu.style.display = 'none'
        menuIcon.src = "assets/images/icon-menu.svg";
        menuIcon.style.height = 'unset'
    }
}