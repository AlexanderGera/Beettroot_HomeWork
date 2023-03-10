// Script for main slider

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });


// Script for newarrivalslider  
    let swiperNewArrival = new Swiper(".mySwiperNewArrival", {
    slidesPerView: 5,
    spaceBetween: 5,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

    // Script for third swiper - ourpartners  
    let swiperOurPartners = new Swiper(".mySwiperOurPartners", {
    slidesPerView: 8,
    spaceBetween: 5,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });