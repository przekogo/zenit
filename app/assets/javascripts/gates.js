$(function() {
  $('.zen-gates').each(initGates);
  $('.zen-gate__actions').each(initGateButtons);
});

function initGates() {
  $gates = $(this).children('.zen-gates__revealable');
  $gates.on('click', function() {
    if (!$(this).hasClass('active')) {
      $gates.removeClass('active');
    }
      $(this).addClass('active');
  });
}

function initGateButtons() {
  $buttons = $(this).children('.zen-gate__button');

  $buttons.on('mouseover', function() {
    $tooltips = $(this).siblings('.zen-gate__tooltip');
    $tooltips.addClass('transparent');
    $tooltips.filter('[data-type=' + $(this).attr('data-type') + ']').removeClass('transparent');
  });

  $buttons.on('mouseout', function() {
    $(this).siblings('.zen-gate__tooltip').addClass('transparent');
  });

  $buttons.on('click', function() {
    building = $(this).attr('data-building');
    type = $(this).attr('data-type');
    $.ajax({
      url: '/' + type,
      type: 'get',
      data: {'building': building},
      contentType: 'html',
      beforeSend: function() {
        $('.zen-modal__content').html('');
        $('.zen-modal').addClass('loading');
      }
    }).done(function(html) {
      $('.zen-modal__content').html(html);
      $('.zen-modal').removeClass('loading');
      $('.zen-modal__content > .js-rz-slider').each(initRzSlider);
    });
    openModal();
  });
}
