// Import framework dependencies

// Import plugin shim
var $                    = require('jquery');

// Bootstrap plugins (http://getbootstrap.com/javascript/)
var modal                = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal');
var tooltip              = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip');
var tab                  = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab');
var transition           = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition');

// Miscelaneous plugins
var firstPurchase        = require('./scripts/first-purchase');
var cookie               = require('./scripts/cookie');
var offersHunter         = require('./scripts/offers-hunter');

// Carousel Plugin (http://kenwheeler.github.io/slick/)
var slick                = require('../../node_modules/slick-carousel/slick/slick');

// Initialize bootstrap plugins
// Styleguide section-functional.html#kssref-functional-tooltips
var initializeTooltip    = require('./scripts/components/tooltip');

// Le pone la clase `.item__is-checked` al label padre cuando el usuario hace
// click en un ítem
// Styleguide section-functional.html#kssref-components-celllist-3-checkboxcelllist
var listGrid             = require('./scripts/components/carousel-billboard');



// Objeto Global
//
// Algunas funciones como por ejemplo los
// [carouseles](/section-functional.html#kssref-functional-carousel) están
// disponibles globalmente a través del objeto `gb_ui`.
//
// **Usage**
// ```
// gb_ui: {
//  carousel: {
//    carouselBillboard: {...},
//    carouselShelf: {...}
//  }
// };
// ```
//
// Styleguide Functional.1-GlobalObject

window.gb_ui = {
  carousel: {
    carouselBillboard: {},
    carouselShelf: {}
  }
};


// Carousel Plugin (http://kenwheeler.github.io/slick/)

// Styleguide section-functional.html#kssref-functional-carousel-1-simplecarousel
carouselBillboard  = require('./scripts/components/carousel-billboard');

// Styleguide section-functional.html#kssref-functional-carousel-2-shelfcarousel
carouselShelf      = require('./scripts/components/carousel-shelf');

