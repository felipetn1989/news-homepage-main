let menu = document.querySelector(".menu")

menuIcon.addEventListener("click",toggleMenu)

function toggleMenu () {
    if (window.getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}