jQuery(document).ready(function ($) {

});



(function ($) {
  "use strict";

  // Jquery clickable functions starts
  jQuery(document).ready(function ($) {
    $(".counter").counterUp({});
    $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
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