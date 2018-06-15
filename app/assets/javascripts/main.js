$(function() {
  if ($('.js-navbar-expandable').length) {
    $(window).scroll(compactNavbar);
  }
  $('.js-navbar').each(initNavbar);
  $('.js-slider').each(initSlider);
  $('#zen_map_main').each(initGoogleMaps);
});

function initSlider() {
  var $slides = $(this).children('.js-slide');
  var slideCount = $slides.length;
  setInterval( function () {
    $slides.each(function( i ) {
      if ( $(this).hasClass('active') ) {
        $(this).toggleClass('active');
        if ( i + 1 == slideCount ) {
          $slides.eq(0).toggleClass('active');
        } else {
          $slides.eq(i+1).toggleClass('active');
        }
        return false;
      }
    });
  }, 15000);
}

function compactNavbar() {
  if ($(window).width() < 768) {
    return;
  }
  var $navbar = $('.js-navbar');
  if (!$navbar.hasClass('compacted') && $(window).scrollTop() == 0) {
    return;
  }
  if ($navbar.hasClass('compacted') && $(window).scrollTop() == 0) {
    $navbar.toggleClass('compacted');
  }
  else if (!$navbar.hasClass('compacted') && $(window).scrollTop() != 0) {
    $navbar.toggleClass('compacted');
  }
}

function initNavbar() {
  var $navbar = $(this);
  $navbar.find('.zen-navbar__toggle').on('click', function() {
    $navbar.toggleClass('open');
  });
}

function initZenMapMain() {
  var zenitLocation = {lat: 51.757231, lng: 19.4646147};
  var map = new google.maps.Map(
    document.getElementById('zen_map_main'), {
    center: zenitLocation,
    zoom: 15
  });

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({
    placeId: 'ChIJv3xdkNE0GkcRzuAEvwhlC6w'
  }, function(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: zenitLocation
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>'
          + place.formatted_address + '</div>');
        infowindow.open(map, this);
      });
    }
  });
}

function initGoogleMaps() {
  $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAgaZfr3xRgDZfZfdO9iLyv_YAELn9TgFg&libraries=places&callback=initZenMapMain');
}
