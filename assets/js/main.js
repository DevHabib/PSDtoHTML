jQuery(document).ready(function ($) {
  $(".counter").counterUp({});
});

$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
});