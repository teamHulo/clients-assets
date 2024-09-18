
//main-banner-slider
const swipers = new Swiper(".main-banner-slider", {
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    slidersPerView: 1,
    effect: "fade"
});
