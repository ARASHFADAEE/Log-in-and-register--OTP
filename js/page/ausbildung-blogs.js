var popularCitiesSlider = new Swiper('.popular-cities-slider', {
  breakpoints: {
    370: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  grabCursor: true,
  autoplay: {
    delay: 1500,
    loop: true,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});
// var swiper = new Swiper('.mySwiper', {});
