(function ($) {
  "use strict";

  // Jquery clickable functions starts
  jQuery(document).ready(function ($) {
    $(".counter").counterUp({});

  });


  jQuery(window).load(function () {
    $(document).on('scroll', function () {

      console.log('hi document');
      if ($(this).scrollTop() > 100) {
        $('header').addClass("sticky");
      } else {
        $('header').removeClass("sticky");
      }

    });

  });
}(jQuery));

var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper2 = new Swiper('.swiper-container2', {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})