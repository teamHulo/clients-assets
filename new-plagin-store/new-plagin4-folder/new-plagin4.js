
//lookbook-slider

var Sswiper = new Swiper(".lookbook-slider", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1150: {
            slidesPerView: 3.5,
        },
        930: {
            slidesPerView: 2,
        },
        660: {
            slidesPerView: 1.4,
        },
        550: {
            slidesPerView: 1
        },
    }
});
