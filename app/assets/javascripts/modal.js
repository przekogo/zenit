$(function() {
  $('.zen-modal').each(initModal);
});

function initModal() {
  $modal = $('.zen-modal');
  $backdrop = $('.zen-backdrop');

  $backdrop.on('click', function(e) {
    if (e.target !== this)
      return;
    closeModal();
  });

  $('.zen-backdrop__close').on('click', closeModal);
}

function closeModal() {
  $('.zen-backdrop').addClass('inactive');
  window.setTimeout(function() {
      $('.zen-backdrop').addClass('hidden');
    },
    300
  );
}

function openModal() {
  $('.zen-backdrop').removeClass('hidden');
  window.setTimeout(function() {
      $('.zen-backdrop').removeClass('inactive');
    },
    50
  )
}
