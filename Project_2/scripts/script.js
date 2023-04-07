    let swiper = new Swiper(".mySwiper-welcome", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        // mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    // Script for Latest News  
    let swiperLatestNews = new Swiper(".mySwiperLatestNews", {
        slidesPerView: 3,
        spaceBetween: 30,


        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });



    //script for smooth scroling to anchor links

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


