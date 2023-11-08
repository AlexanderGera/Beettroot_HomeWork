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



// new window open in button click

function buttonLinkOpen(url) {

    window.open(url, "_self");

}




// Gallery big image open


document.addEventListener('DOMContentLoaded', function () {
    let previewLinks = document.querySelectorAll('.item_preview-link');

    previewLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let bigPicture = document.querySelector('.item_big-picture');
            let previewImageSrc = this.href;
            bigPicture.src = previewImageSrc;
        });
    });
});


//form letter sending


$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input, textarea").val("");

        $('form').trigger('reset');
    });
    return false;
});