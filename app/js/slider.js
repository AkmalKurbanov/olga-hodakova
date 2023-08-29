import Swiper from "swiper/bundle";

var swiper = new Swiper(".reviews-js", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: ".reviews__nav-btn_next",
    prevEl: ".reviews__nav-btn_prev",
  }
});


if (window.matchMedia('(max-width: 575px)').matches) {

  var swiper = new Swiper(".certificates-js", {
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  });

}

var swiper = new Swiper(".criterion-js", {
  slidesPerView: 4,

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
});