$(function() {
  $('.rz-news').each(initNews);
});

function initNews() {
  $container = $(this);
  $wrapper = $container.find('.rz-news__wrapper');
  $scrollbar = $container.find('.scrollbar');
  $container.on('scroll', function() {
    console.log(scrollPercentage());
    $scrollbar.css("background-image", "linear-gradient(rgba(179, 102, 255, 0), rgba(179, 102, 255, 1) " + scrollPercentage() + "%, rgba(179, 102, 255, 0))");
  });

  function scrollPercentage() {
    // TODO: add a timeout here and maybe css transition to improve performace
    return 100 * $container.scrollTop() / ($wrapper.outerHeight() - $container.outerHeight())
  }
}
