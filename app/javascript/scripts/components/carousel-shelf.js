$(function () {
  // Shelf carousel plugins
  // Styleguide section-functional.html#kssref-functional-carousel-2-shelfcarousel
  $('.carousel-shelf').slick({
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
  });
});
