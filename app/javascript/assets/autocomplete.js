Autocomplete = function(options) {
  var autocompleteInput = $("#autocomplete-input"),
    autocompleteElement = $("#autocomplete-element"),
    dropdown = $(".gb-search-dropdown"),
    mouseOverInDropdown = false,
    autocompleteLength = 0,
    moreCharactersMessage = "Debes escribir mas caracteres",
    ajaxError = "Ups! Ocurrio un problema al buscar",
    loadingImage = '<img class="gb-search-dropdown-loading" src="https://dj4i04i24axgu.cloudfront.net/product-fe/images/loading.gif" alt="">',
    lastSearch = "";
  that = this;

  dropdown.mouseenter(function(event) {
    mouseOverInDropdown = true;
  });

  dropdown.mouseleave(function(event) {
    mouseOverInDropdown = false;
  });

  autocompleteInput.focusout(function() {
    if (!mouseOverInDropdown) {
      that.closeAutocomplete(options.mobile);
    }
  });

  autocompleteInput.click(function() {
    var autocompleteLength = autocompleteInput.val().length;

    if (autocompleteLength > 2) {
      that.openAutocomplete(options.mobile);
    }
  });

  autocompleteInput.keyup(function(e) {
    var autocompleteVal = autocompleteInput.val();
    autocompleteLength = autocompleteInput.val().length;

    if (autocompleteLength > 0) {
      that.openAutocomplete(options.mobile);
      if (autocompleteLength < 2) {
        lastSearch = "";
        $('.gb-search-dropdown').html(moreCharactersMessage);
      } else {
        if(e.keyCode == 38 || e.keyCode == 40){
            var direction = e.keyCode == 38 ? "UP" : "DOWN";
            e.preventDefault();
            that.navigate(direction);
        }else if (lastSearch != autocompleteVal){
          autocompleteVal = cleanAccents(autocompleteVal);
          lastSearch = autocompleteVal;
          that.search(autocompleteVal, options.layers, options.mobile);
        }
      }
    } else {
      that.closeAutocomplete(options.mobile);
    }

  });

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  autocompleteElement.on("mouseenter", ".gb-search-dropdown ul li", function(){
    var current = autocompleteElement.find("li.current");
    current.removeClass("current");
    $(this).addClass("current");
  });

  this.navigate = function(direction){
    var newOne;
    var current;
    if(direction === "DOWN"){
      current = autocompleteElement.find("li.current").length ? autocompleteElement.find("li.current") : autocompleteElement.find("ul:last-child li:last-child");
      if(current.next().length){
        newOne = current.next();
      }else{
        newOne = current.parent().next("ul").length ? current.parent().next().find("li:first-child") : current.parent().parent().find("ul:first-child").find("li:first-child");
      }
    }else{
      current = autocompleteElement.find("li.current").length ? autocompleteElement.find("li.current") : autocompleteElement.find("ul:first-child li:first-child");
      if(current.prev().length){
        newOne = current.prev();
      }else{
        newOne = current.parent().prev("ul").length ? current.parent().prev().find("li:last-child") : current.parent().parent().find("ul:last-child").find("li:last-child");
      }
    }
    current.removeClass("current");
    newOne.addClass("current");
  }

  this.openAutocomplete = function(mobile) {
    autocompleteElement.addClass("gb--expanded");

    if (mobile) {
      autocompleteElement.addClass("gb--responsive");
    }
  };

  this.closeAutocomplete = function(mobile) {
    autocompleteElement.removeClass("gb--expanded");

    if (mobile) {
      if ($(window).width() <= 1024) {
        autocompleteInput.val('').focus();
      }

      autocompleteElement.removeClass("gb--responsive");
    }
  };



  this.search = function(q, layers) {

    $('.gb-search-dropdown').html(loadingImage);
    q = encodeURI(q);

    var url = "/normandia/autocomplete/search?q=" + q +
      "&categories=" + layers.categories +
      "&products=" + layers.products +
      "&product_list=" + layers.productList +
      "&landings=" + layers.landings +
      "&product_brand=" + layers.productBrand +
      "&cities=" + layers.cities +
      "&suggestions=" + layers.suggestions;
      delay(function() {
        $.ajax({
          type: "GET",
          url: url,
          success: function (autocompleteResponse) {
            var getTemplate = Handlebars.getTemplate('autocomplete');
            var compiledTemplate = getTemplate(autocompleteResponse);

            if (Object.keys(autocompleteResponse).length == 0) {
              compiledTemplate = 'No se encontraron resultados !';
            }

            $('.gb-search-dropdown').html(compiledTemplate);
          },
          error: function (request, status, error) {
            $('.gb-search-dropdown').html(ajaxError);
          },
          statusCode: {
            500: function() {
              $('.gb-search-dropdown').html(ajaxError);
            }
          }
        });
      }, 100);
  }
};

function cleanAccents(str){
  return str.replace(/Á|á/gi,'a')
    .replace(/É|é/gi,'e')
    .replace(/Í|í/gi,'i')
    .replace(/Ó|ó/gi,'o')
    .replace(/Ú|ú/gi,'u')
    .replace(/Ñ|ñ/gi,'n')
    .replace(/Ä|ä/gi,'a')
    .replace(/Ë|ë/gi,'e')
    .replace(/Ï|ï/gi,'i')
    .replace(/Ö|ö/gi,'o')
    .replace(/Ü|ü/gi,'u')
    .replace(/"/gi, '')
    .replace(/\//gi,'')
    .replace(/--/gi, '-');
}

var options = {
 layers: {
   categories: 4,
   products: 5,
   productList: 0,
   landings: 0,
   productBrand: 4,
   cities: 0,
   suggestions: 4
 },
  mobile: true
};

$(document).on("ready", function() {
  var autocomplete = new Autocomplete(options);
});
