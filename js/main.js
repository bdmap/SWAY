"use strict"







function showMenu() {
   if ($(window).width() > 905.98) {
      $('.header__form input').click(function () {
         $('.header__form').addClass('visible')
      })
      $('.header__form input').on('mouseenter', function () {
         $('.header__links, .header__form').addClass('active')
         $('.header__shop, .header__menu').addClass('top')
      })
      $('.header__form input').on('mouseleave', function () {
         if ($('.header__form').hasClass('visible')) {
            $('.header__form').removeClass('visible')
         } else {
            $('.header__links, .header__form').removeClass('active')
            $('.header__shop, .header__menu').removeClass('top')
         }
      })

      $(document).on('mouseup', function (e) {
         let s = $('.header__form.active');
         let w = $('.header__menu.top');
         let y = $('.header__shop.top');
         let u = $('.header__links.active')
         if (!s.is(e.target) && s.has(e.target).length === 0) {
            s.removeClass('active');
            w.removeClass('top');
            y.removeClass('top');
            u.removeClass('active');
         }
      });

   }

   if ($(window).width() < 905.98) {
      function burger() {
         $('.header__burger').click(function () {
            $('.header__menu, .header__burger').toggleClass('active')
            $('body').toggleClass('lock')
         })
      }
      burger()
      $(document).on('mouseup', function (e) {
         let s = $('.header__burger');
         let w = $('.header__menu');
         let u = $('body.lock');
         let y = $('.header__form input');


         if (!y.is(e.target) && y.has(e.target).length === 0) {
            s.removeClass('active');
            w.removeClass('active');
            u.removeClass('lock');
         }


      });

   }
   if ($(window).width() < 576.98) {

      $('.header__form').appendTo('.header__menu');
   }
}
showMenu()






function resize() {

   $(document).ready(function () {
      let width = $(window).width();

      $(window).resize(function () {
         if ($(window).width() <= 905.98 && width > 905.98) {
            //reload
            location.reload();
         }
         else if ($(window).width() > 905.98 && width <= 905.98) {
            //reload
            location.reload();
         }

      })
      $(window).resize(function () {
         if ($(window).width() <= 576.98 && width > 576.98) {
            //reload
            location.reload();
         }
         else if ($(window).width() > 576.98 && width <= 576.98) {
            //reload
            location.reload();
         }

      })

   })
}
resize()






$(document).ready(function () {
   $('.choose__link').click(function (e) {
      e.preventDefault();
      $('.choose__links').removeClass('active')
      $('.choose__bottom-inner').removeClass('active')
      $(this).removeClass('active')
      $($(this).attr('href')).addClass('active')
   })
   $('.choose__link:first').click();
})


$('.visit__item, .choose__item').on('click', function (event) {
   window.location.href = '#';
});



videojs(document.querySelector('.video-js'))


new Swiper('.reviews__slider', {
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 1,
   navigation: {
      nextEl: '.reviews-next',
      prevEl: '.reviews-prev'
   },
   pagination: {
      el: '.reviews-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true
   },
   breakpoints: {
      768: {
         slidesPerView: 3,
      },
      576: {
         slidesPerView: 2,
      },
      270: {
         slidesPerView: 1,
      },
   }

})


function init() {
   let myMap = new ymaps.Map("map", {
      center: [40.752165494855646, -73.99354713292695],
      zoom: 17
   });
   let placemark = new ymaps.Placemark([40.752165494855646, -73.99354713292695], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/1001/1001022.png',

      iconImageOffset: [-15, -58],
   })
   myMap.geoObjects.add(placemark);
   myMap.controls.remove('geolocationControl');
   myMap.controls.remove('searchControl');
   myMap.controls.remove('trafficControl');
   myMap.controls.remove('typeSelector');
   myMap.controls.remove('fullscreenControl');
   myMap.controls.remove('zoomControl');
   myMap.controls.remove('rulerControl');
   myMap.behaviors.disable(['scrollZoom']);
}


ymaps.ready(init);



