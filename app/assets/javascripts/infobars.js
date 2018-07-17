$(function() {
  $('.js-infobar').each(initInfobar);
});

function initInfobar() {
  var $infobar = $(this);
  $titles = $infobar.find('.zen-infobars__bar__title');
  $details = $infobar.find('.zen-infobars__bar__details');

  $titles.on('click', function() {
    $detail = $(this).siblings('.zen-infobars__bar__details');
    if ($detail.css('max-height')=='0px') {
      $details.each(collapseInfobar);
      $detail.each(expandInfobar);
    }
    else {
      $detail.each(collapseInfobar);
    }
  });
}

function expandInfobar() {
  $(this).css('max-height', $(this).children('p').outerHeight());
}

function collapseInfobar() {
  $(this).css('max-height', '0px');
}
