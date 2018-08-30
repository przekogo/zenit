$(function() {
  $('.js-menu-expandable').each(initMenuToggle);
  $('.contact').each(initContactLink);
});

function initMenuToggle() {
  var $menu = $(this);
  $menu.find('.rz-toggle:first').on('click', function() {
    $menu.toggleClass('open');
  });
}

function initContactLink() {
  $(this).on('click', function() {
    $.ajax({
      url: '/contact',
      type: 'get',
      contentType: 'html',
      beforeSend: function() {
        $('.zen-modal__content').html('');
        $('.zen-modal').addClass('loading');
      }
    }).done(function(html) {
      $('.zen-modal__content').html(html);
      $('.zen-modal').removeClass('loading');
      $('.zen-modal').find('.js-validate').each(initFormValidator);
      initGoogleMaps();
    });
    openModal();
  });
}
