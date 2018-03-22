$(function() {
  $('.js-slider').each(initSlider);
});

function initSlider() {
  var $slides = $(this).children('.js-slide');
  var slideCount = $slides.length;
  setInterval( function () {
    $slides.each(function( i ) {
      if ( $(this).hasClass('active') ) {
        $(this).toggleClass('active');
        console.log($slides[1]);
        if ( i + 1 == slideCount ) {
          $slides.eq(0).toggleClass('active');
        } else {
          $slides.eq(i+1).toggleClass('active');
        }
        return false;
      }
    })
  }, 15000);
}
