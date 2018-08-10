$(function() {
  $('.zen-menu').each(initMenu);
});

function initMenu() {
  $(this).on('mouseover', function() {
    $(this).removeClass('folded');
  }).on('mouseout', function() {
    $(this).addClass('folded');
  });

  $(this).find('.contact').on('click', function() {
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
      $('.js-validate').each(initFormValidator);
      initGoogleMaps();
    });
    openModal();
  });
}
