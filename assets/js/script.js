$(document).ready(function() {
    $('.testimony__slider').slick({
        centerMode: !0,
        centerPadding: '80',
        slidesToShow: 3,
        arrows: !1,
        dots: !0,
        autoplay: !0,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1023,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
    });
      //===== Back to top

  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });

  $('.back-to-top').on('click',function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

    $('.blog_slider').slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        arrows: !1,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $(".hamburger").click(function() {
        var nav = $('.navigation__main');
        $(".navigation__main").toggleClass('navigation__main--open');
        $(".hamburger").toggleClass('cross')
    });
    $(function() {
        var prevScroll = 0,
            curDir = 'down',
            prevDir = 'up';
        $(window).scroll(function() {
            if ($(this).scrollTop() >= prevScroll) {
                curDir = 'down';
                if (curDir != prevDir) {
                    $('header').stop();
                    $('header').animate({
                        top: '-90px'
                    }, 300);
                    prevDir = curDir
                }
            } else {
                curDir = 'up';
                if (curDir != prevDir) {
                    $('header').stop();
                    $('header').animate({
                        top: '0px'
                    }, 300);
                    prevDir = curDir
                }
            }
            prevScroll = $(this).scrollTop()
        })
    })
     // Preloader
     $(window).on('load', function() {
        if ($('#preloader').length) {
          $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
          });
        }
      });
        // Init AOS
    function aos_init() {
        AOS.init({
          duration: 1000,
          once: true
        });
      }
      $(window).on('load', function() {
        aos_init();
      });
      
})