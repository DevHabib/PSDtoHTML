jQuery(document).ready(function ($) {

});



(function ($) {
  "use strict";

  // Jquery clickable functions starts
  jQuery(document).ready(function ($) {
    $(".counter").counterUp({});


    $('.testimonial').owlCarousel({
      margin: 0,
      loop: true,
      autoWidth: false,
      items: 1,
      nav: true,
      dots: false,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
    })
    $('.quote-carousel').owlCarousel({
      margin: 0,
      loop: true,
      autoWidth: false,
      items: 1,
      nav: true,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
    })
  });


  jQuery(window).load(function () {
    /* Sticky Header */
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('header').addClass("sticky");
      } else {
        $('header').removeClass("sticky");
      }
    });
  });
}(jQuery));