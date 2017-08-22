// Initializa objeto vacío.
var shelfCarousel = {};

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


// Init del carousel
shelfCarousel.init = function(element) {
  // Styleguide section-functional.html#kssref-functional-carousel-2-shelfcarousel
  $(element).slick(shelfCarousel.settings);
}


// reInit del carousel
shelfCarousel.reInit = function(element) {
  $(element).slick('unslick');
  $(element).slick(shelfCarousel.settings);
}


shelfCarousel.init('.carousel-shelf');
