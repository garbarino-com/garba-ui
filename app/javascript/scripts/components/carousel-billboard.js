// Inicializar Carouseles
$(function () {
  // TODO(ecalvi): Maybe we should consider in the future moving these settings
  // to their own module.

  // Initialize billboard carousel plugins
  // Styleguide section-functional.html#kssref-functional-carousel-1-simplecarousel
  $('.carousel-billboard').slick({
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
  });
});
