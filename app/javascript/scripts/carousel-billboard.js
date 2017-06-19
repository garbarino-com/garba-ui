+function ($) {
  'use strict';

  $.fn.painIt = function() {
    this.css('background', 'red');
  };

}( jQuery );

$('.carousel').painIt();
