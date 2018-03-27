$(document).ready(function () {

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
});
