$(function() {
  $('.js-rz-slider').each(initRzSlider);
});

function initRzSlider() {
  $slider = $(this);
  $slider.children('.rz-slider__slide').first().addClass('active');
  $prev = $(this).children('.rz-slider__prev');
  $next = $(this).children('.rz-slider__next');
  $prev.click({change: -1, slider: $slider}, slideRzSlider);
  $next.click({change: +1, slider: $slider}, slideRzSlider);
}

function slideRzSlider(event) {
  change = event.data.change;
  $slides = event.data.slider.children('.rz-slider__slide');
  $active = event.data.slider.find('.rz-slider__slide.active');
  activeIndex = $slides.index( $active );
  $slides.eq(activeIndex).toggleClass('active');
  $slides.eq((activeIndex + change) % $slides.length).toggleClass('active');
}
