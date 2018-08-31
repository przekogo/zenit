$(function() {
  $('.rz-news').each(initNews);
});

function initNews() {
  $container = $(this);
  $wrapper = $container.find('.rz-news__wrapper');
  $scrollbar = $container.find('.scrollbar');
  $articles = $wrapper.find('.rz-news__article');

  $container.on('scroll', function() {
    $scrollbar.css("background-image", "linear-gradient(rgba(179, 102, 255, 0), rgba(179, 102, 255, 1) " + scrollPercentage() + "%, rgba(179, 102, 255, 0))");
  });

  $articles.on('click', function() {
    $(this).toggleClass('active');
    toggleCollapse($(this).find('.content'));
  });

  function scrollPercentage() {
    // TODO: add a timeout here and maybe css transition to improve performace
    return 100 * $container.scrollTop() / ($wrapper.outerHeight() - $container.outerHeight())
  }

  function toggleCollapse($collapsible) {
    if ($collapsible.css('max-height') == '0px') {
      expandArticle($collapsible);
    }
    else {
      collapseArticle($collapsible);
    }
  }

  function expandArticle($collapsible) {
    $collapsible.css('max-height', $collapsible.find('p').outerHeight());
  }

  function collapseArticle($collapsible) {
    $collapsible.css('max-height', '0px');
  }
}
