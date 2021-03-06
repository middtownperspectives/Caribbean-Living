$(document).ready(function () {

  alert("Please use Google Chrome or Mozilla Firefox for best experience.");
  //sticky naviation
  $('.js--island-features').waypoint(function (direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {

    offset: '10%',
  });

  //scroll on click
  $('.js--scoll-to-features').click(function () {
    $('html, body').animate({ scrollTop: $('.js--island-features').offset().top }, 1000);
  });

  $('.js--scoll-to-dazzle-me').click(function () {
    $('html, body').animate({ scrollTop: $('.js--dazzle-me').offset().top }, 1000);
  });

  //naviation scrolling --- code from https://css-tricks.com/snippets/jquery/smooth-scrolling/
  // Select all links with hashes
  $('a[href*="#"]:not([href="#"]').click(function () {

      // On-page links
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname) {

        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        // Does a scroll target exist?
        if (target.length) {

          // Only prevent default if animation is actually gonna happen
          $('html, body').animate({ scrollTop: target.offset().top }, 1000);
          return false;
        };

      }
    }
  );

  //animate css using animante.css and waypoint
  $('.js--features-animation').waypoint(function (direction) {
      $('.js--features-animation').addClass('animated fadeIn');
    }, {

      offset: '70%',
    });

  //animate css using animante.css and waypoint
  $('.js--island-animation').waypoint(function (direction) {
      $('.js--island-animation').addClass('animated fadeInUp');
    }, {

      offset: '70%',
    });

  //animate css using animante.css and waypoint
  $('.js--heartbeat').waypoint(function (direction) {
      $('.js--heartbeat').addClass('animated pulse');
    }, {

      offset: '50%',
    });

  //maps
  let map = new GMaps({
    div: 'map',
    lat: 17.746431,
    lng: -64.701858,
    width: '100%',
    height: '540px',
  });

  map.addMarker({
    lat: 17.746431,
    lng: -64.701858,
    title: 'Lima',
    infoWindow: {
      content: '<p>Currently Loving Caribbean Life</p>'
    }
  });

  // mobile navigation 
  $('.js--nav-icon').click(function() {
    let nav = $('.js--main-nav');
    let icon =$('.js--nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

});
