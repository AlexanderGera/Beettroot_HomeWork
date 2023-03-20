const hamburger = document.querySelector(".header_hamburger");
const navMenu = document.querySelector(".header_menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".header_link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}