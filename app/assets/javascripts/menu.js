$(function() {
  $('.zen-menu').each(initMenu);
  $('.contact').each(initContactLink);
});

function initMenu() {
  $(this).on('mouseover', function() {
    $(this).removeClass('folded');
  }).on('mouseout', function() {
    $(this).addClass('folded');
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
