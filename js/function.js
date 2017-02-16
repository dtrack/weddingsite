/*Scripts starts*/
$(document).on('ready', function () {
    'use strict';
    //Vertical icon-menu active script
    $('.horizontal_iconmenu li').on('click', function () {
        $('.page-top').removeClass('display_none');
        $('.wow').attr('style', 'visibility: hidden; animation-name: none; -webkit-transform:translateY(20px); -moz-transform:translateY(20px); -ms-transform:translateY(20px); -o-transform:translateY(20px); transform:translateY(20px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;');

        $('.horizontal_iconmenu li').removeClass('hover_active');
        $(this).addClass('hover_active');
        setTimeout(function () {
            $('.wow').each(function () {

                $(this).attr('style', 'visibility: visible; animation-name: ' + $(this).attr('data-class') + '; -webkit-transform:translateY(0px); -moz-transform:translateY(0px); -ms-transform:translateY(0px); -o-transform:translateY(0px); transform:translateY(0px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;');
            });
        }, 500);
    });

    // JavaScript Document
    $(window).load(function () {
        if ($.find('.gridlayout').length) {
            $('.gridlayout').isotope({
                // options...
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        }
    });

    $('.hamburger').on('click', function () {
        if ($('.navbar-fixed-top').css('right') == '-100px') {
            $('.navbar-fixed-top').animate({ right: '0px' }, 'slow');
        }
        else {
            if ($('.navbar-fixed-top').css('overflow-y') == 'scroll') {
                $('.navbar-fixed-top').animate({ right: '-100px' }, 'slow');
            }
        }
    });
    $('body').on('click', function (evt) {
        if ($('.navbar-fixed-top').css('z-index') == 10030) {
            if (evt.target.class == 'hamburger') {
                return;
            }
            if ($(evt.target).closest('.hamburger').length)
            { return; }
            else
            {
                if ($('.navbar-fixed-top').css('overflow-y') == 'scroll') {
                    $('.navbar-fixed-top').animate({ right: '-100px' }, 'slow');
                }
            }
        }
    });

    //Horizontal Tab
    if ($.find('#parentHorizontalTab').length) {
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }
    // Child Tab

    if ($.find('#ChildVerticalTab_1').length) {
        $('#ChildVerticalTab_1').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: null,
            inactive_bg: null,
            active_border_color: null,
            active_content_border_color: null
        });
    }
    //Vertical Tab


    if ($.find('#parentVerticalTab').length) {
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    /*---------------------*/


    /*------------slick slider-------------------*/



    /*-----photo gallery------------*/

    if ($.find('.fancybox').length) {
        $('.fancybox').fancybox();
    }
    //gallery option 2

    if ($.find('.fancybox2').length) {
        $('.fancybox2').fancybox();
    }
    /*-----------------------------------people page slider------------------------*/

    $('.the-people-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
  {
      breakpoint: 981,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
      }
  },

   {
       breakpoint: 769,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false
       }
   },
    {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
    },
   {
       breakpoint: 361,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false
       }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: 'unslick'
   // instead of a settings object
        ]
    });

    $('.ceremony-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
              breakpoint: 1025,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: false
              }
          },
          {
              breakpoint: 769,
              settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 481,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: 'unslick'
          // instead of a settings object
        ]
    });



    var wow = new WOW({
        animateClass: 'animated',
        offset: 0,
        callback: function (box) {
        }
    });
    wow.init();

    $('.pt-page').fadeIn(
      function () {
        var today = new Date();

        var target = new Date(Date.parse('2017-09-09T14:00:00+01:00'));
        var start = new Date(Date.parse('2016-09-09T14:00:00+01:00'));
        $('.countdown').final_countdown({
            'start': start.getTime() / 1000,
            'end': target.getTime() / 1000,
            'now': today.getTime() / 1000
        }, function () {
            // Finish Callback
        });
      }
    );

});



// document.onreadystatechange = function () {
//     var state = document.readyState
//     if (state == 'interactive') {
//     } else if (state == 'complete') {
//         setTimeout(function () {
//             $('#load').animate({ 'opacity': '0' }, 'fast');
//
//         }, 1000);
//     }
// }
