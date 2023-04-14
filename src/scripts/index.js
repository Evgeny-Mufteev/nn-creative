"use strict"
document.addEventListener("DOMContentLoaded", () => {


  const swiperEvents = document?.querySelector('.actual-slider');
  const eventsSlider = new Swiper(swiperEvents, {
      slidesPerView: 'auto',
      loop: false,
      navigation: {
        nextEl: '.actual__next',
        prevEl: '.actual__prev',
      },
  });
})
