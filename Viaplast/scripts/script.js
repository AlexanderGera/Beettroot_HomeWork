//script for smooth scroling to anchor links


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







//script for menu hamburger and adopt. menu

const hamburger = document.querySelector(".header_menu-hamburger");
const navMenu = document.querySelector(".header_menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav_menu-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}






//slider




// let holder = document.querySelector('.intro-products_slider_holder');
// let track = document.querySelector('.slider-track');
// let items = track.querySelectorAll('.slider-track_item');

// let btnPrev = document.querySelector('.slider-button_prev');
// let btnNext = document.querySelector('.slider-button_next');


// // получаем ширину элемента

// let findTrackItems = track.querySelector('.slider-track_item');
// let trackItemWidth = findTrackItems.offsetWidth;

// // получаем ширину элемента end

// let position = 0;




// btnNext.addEventListener('click', () => {
//     position -= trackItemWidth;
//     if (position < -trackItemWidth * (items.length - 4)) {
//         position = trackItemWidth;
//     } else {
//         setPosition();
//     }



// });

// btnPrev.addEventListener('click', () => {
//     position += trackItemWidth;
//     if (position > 0) {
//         position = -trackItemWidth * (items.length - 3);
//     } else {
//         setPosition();
//     }

// });





// let setPosition = () => {
//     track.style.transform = `translateX(${position}px)`;

// };




