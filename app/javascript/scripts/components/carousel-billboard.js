// Link: section-functional.html#kssref-functional-carousel-2-shelfcarousel

$(function () {
  // Billboard carousel settings
  gb_ui.carousel.carouselBillboard.settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      infinite: true,
      mobileFirst: true,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          fade: true,
          pauseOnFocus: true
        }
      }]
  }

  // Billboard carousel init
  gb_ui.carousel.carouselBillboard.init = function(element) {
    $(element).slick(gb_ui.carousel.carouselBillboard.settings);
  }

  // Billboard carousel on class
  gb_ui.carousel.carouselBillboard.init('.carousel-billboard');
});
