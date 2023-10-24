document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.mySwiper', {
        effect: 'cards',
        grabCursor: true,
        slidesPerView: 'auto', // Number of slides per view
        spaceBetween: 16, // Space between slides in pixels
        loop: true, // Loop the slides
    });
});

// scrollReveal :

// hero 

ScrollReveal().reveal('.hero_h2', {

    delay: 500 ,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '50px'
});
ScrollReveal().reveal('#hero_p', {

    delay: 700 ,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '50px'
});
ScrollReveal().reveal('#hero_btn', {

    delay: 900 ,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '50px'
});

// features

ScrollReveal().reveal('#feature_h1', {

    delay: 300 ,
    origin: 'right',
    easing: 'ease-in-out',
    distance: '50px'
});
ScrollReveal().reveal('#feature_img', {

    delay: 500 ,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '50px'
});
ScrollReveal().reveal('#feature_p', {

    delay: 700 ,
    origin: 'right',
    easing: 'ease-in-out',
    distance: '50px'
});


// products 

ScrollReveal().reveal('#product_1', {

    delay: 300 ,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '50px'
});
ScrollReveal().reveal('#product_2', {

    delay: 600 ,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '50px'
});
ScrollReveal().reveal('#product_3', {

    delay: 900 ,
    origin: 'left',
    easing: 'ease-in-out',
    distance: '50px'
});


