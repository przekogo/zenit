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
    $tooltips.filter('[data-tooltip=' + $(this).attr('data-tooltip') + ']').removeClass('transparent');
  });

  $buttons.on('mouseout', function() {
    $(this).siblings('.zen-gate__tooltip').addClass('transparent');
  });
}
