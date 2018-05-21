$(function() {
  if ($('.js-navbar').length) {
    $(window).scroll(initNavbar);
  }
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

function initNavbar() {
  $navbar = $('.js-navbar');
  if ($navbar.hasClass('compacted') && $(window).scrollTop() == 0) {
    $navbar.toggleClass('compacted');
  }
  else if (!$navbar.hasClass('compacted') && $(window).scrollTop() != 0) {
    $navbar.toggleClass('compacted');
  }
}

function initZenMapMain() {
  zenitLocation = {lat: 51.757231, lng: 19.4646147};
  map = new google.maps.Map(
    document.getElementById('zen_map_main'), {
    center: zenitLocation,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);

  service.getDetails({
    placeId: 'ChIJv3xdkNE0GkcRzuAEvwhlC6w'
  }, function(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      marker = new google.maps.Marker({
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
