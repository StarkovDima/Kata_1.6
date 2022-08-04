import Swiper, {
  Pagination
} from 'swiper';

document.addEventListener("DOMContentLoaded", () => {

  if (window.matchMedia('(max-width: 767px)').matches) {
    const swiper = new Swiper('.swiper', {

      modules: [Pagination],

      direction: 'horizontal',
      loop: true,
      spaceBetween: 16,
      width: 240,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      init: true

    });

    const swiperPrice = new Swiper('.swiper-last', {

      modules: [Pagination],

      direction: 'horizontal',
      loop: true,
      spaceBetween: 16,
      width: 260,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      init: true

    });
  }
});
