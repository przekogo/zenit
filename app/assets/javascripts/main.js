$(function() {
  $('.js-slider').each(initSlider);
  $(window).scroll(initNavbar);
});

function initSlider() {
  var $slides = $(this).children('.js-slide');
  var slideCount = $slides.length;
  setInterval( function () {
    $slides.each(function( i ) {
      if ( $(this).hasClass('active') ) {
        $(this).toggleClass('active');
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

function initNavbar() {
  $navbar = $('.js-navbar')
  if ($navbar.hasClass('compacted') && $(window).scrollTop() == 0) {
    $navbar.toggleClass('compacted');
    console.log('a');
  }
  else if (!$navbar.hasClass('compacted') && $(window).scrollTop() != 0) {
    $navbar.toggleClass('compacted');
    console.log('b');
  }
}
