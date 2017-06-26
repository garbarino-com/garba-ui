// Import framework dependencies

// Import plugin shim
var $ = require('jquery');

// Bootstrap plugins (http://getbootstrap.com/javascript/)
var modal = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal');
var transition = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition');

// Miscelaneous plugins
var firstPurchase = require('./scripts/campaign-modals/first-purchase');
var cookie = require('./scripts/cookie');
var offersHunter = require('./scripts/offers-hunter');

// Carousel Plugin (http://kenwheeler.github.io/slick/)
var slick = require('../../node_modules/slick-carousel/slick/slick');


// Carousel settings
// TODO(ecalvi): Maybe we should consider in the future moving these settings
// to their own module.

// Billboard carousel plugins
// Styleguide section-functional.html#kssref-functional-carousel-1-simplecarousel
$('.carousel').slick({
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

// Shelf carousel plugins
// Styleguide section-functional.html#kssref-functional-carousel-2-shelfcarousel
$('.carousel-shelf').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  lazyLoad: 'ondemand',
  responsive: [{
    breakpoint: 1025,
    settings: 'unslick'
  }]
});
