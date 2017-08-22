// Initializa objeto vacío.
// Esto se inicializa en window para que esté disponible desde afuera.

window.shelfCarousel = {};

shelfCarousel.settings = {
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4.8,
  dots: false,
  infinite: false,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1025,
    settings: 'unslick'
  }]
};


// Init shelf carousel
shelfCarousel.init = function(element) {
  // Styleguide section-functional.html#kssref-functional-carousel-2-shelfcarousel
  $(element).slick(shelfCarousel.settings);
}


shelfCarousel.init('.carousel-shelf');
