$(function() {
  if ($('.zen-main-menu').length > 0) {
    initOnePage();
  }
});

function initOnePage() {
  $menuItems = $('.zen-main-menu__nav');
  delay = 1100;
  active = true;

  $(window).on('keydown', function(e) {
    if ($(window).width() < 1200) { return; }
    // disable up down pgup pgdn home end
    if ($.inArray( e.which, [33, 34, 35, 36, 38, 40] ) >= 0 ) {
      e.preventDefault();
    }
  });

  $(window).on('wheel', function(event){
    event.preventDefault();
    if(event.originalEvent.deltaY > 0){
      moveToPage('next');
    }
    else {
      moveToPage('previous');
    }
  });

  $menuItems.on('click', function() {
    if ($(this).hasClass('active')) { return 0; }
    page = $(this).attr('data-link');
    moveToPage(page);
  });

  function moveToPage(destination) {
    if (freezeSwitching(delay)) { return; }
    fadeUpClassName = 'fade-up';
    fadeDownClassName = 'fade-down';
    nextClassName = 'next';
    previousClassName = 'previous';
    $pages = $('.rz-onepage__page');
    $active = $('.rz-onepage__page.active');
    activeIndex = $pages.index( $active );
    index = determineIndex();
    $destinationPage = $pages.eq(index);
    fadeClassName = determineFadeClass();

    $active.toggleClass('active')
           .addClass(fadeClassName);
    $destinationPage.toggleClass('active');

    updateMenu($destinationPage.attr('data-link'));

    setTimeout(function() {
      $active.removeClass(fadeClassName);
      setPagePositions();
      }, 1000
    );

    function determineIndex() {
      switch(destination){
        case 'previous': return ((activeIndex - 1) % $pages.length);
        case 'next': return ((activeIndex + 1) % $pages.length);
        default: return $pages.index( $('.rz-onepage__page[data-link = ' + destination + ']') );
      }
    }

    function determineFadeClass(){
      if ($destinationPage.hasClass(nextClassName)) { return fadeUpClassName;}
      else { return fadeDownClassName; }
    }

    function setPagePositions() {
      for (i = 0; i < $pages.length; i++) {
        if ( i < index || index == -1 ) { $pages.eq(i).removeClass(nextClassName).addClass(previousClassName); }
        else if ( i > index ) { $pages.eq(i).removeClass(previousClassName).addClass(nextClassName); }
        else { $pages.eq(i).removeClass(nextClassName).removeClass(previousClassName); }
      }
    }

    function updateMenu(dataLink) {
      $menuItems.removeClass('active');
      $menuItems.filter('[data-link=' + dataLink + ']').addClass('active');
    }
  }

  function freezeSwitching(timeout) {
    if ( active == false ) { return true; }
    active = false;
    setTimeout(function() {
      active = true;
    }, timeout);
    return false;
  }
}




