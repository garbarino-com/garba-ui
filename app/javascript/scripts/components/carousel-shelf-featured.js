// Link: section-functional.html#kssref-functional-carousel-2-shelfcarousel

$(function () {
  // Shelf carousel settings
  gb_ui.carousel.carouselShelfFeatured.settings = {
    lazyLoad: 'ondemand',
    speed: 300,
    slidesToShow: 4.2,
    dots: false,
    infinite: false,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1025,
      settings: 'unslick'
    }]
  }

  // Shelf carousel init
  gb_ui.carousel.carouselShelfFeatured.init = function(element) {
    $(element).slick(gb_ui.carousel.carouselShelf.settings);
  }

  // Shelf carousel on class
  gb_ui.carousel.carouselShelfFeatured.init('.carousel-shelf--featured');
});
