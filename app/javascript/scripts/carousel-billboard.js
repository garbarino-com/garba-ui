+function ($, slick) {
  'use strict';

  $.fn.carouselBillboard = function() {
    this.slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      infinite: true,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          fade: true
        }
      }]
    });
    return this;
  };
}( jQuery );

$('.carousel').carouselBillboard();
