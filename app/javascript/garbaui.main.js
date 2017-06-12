define(
  [
    'jquery',
    'carousel',
    'cookie',
    'firstPurchase',
    'modal',
    'offersHunter',
    'transition'
  ],
  function(
    $,
    carousel,
    cookie,
    firstPurchase,
    modal,
    offersHunter,
    transition
  ) {
    $('.kss-header').css('background', 'red');
    $('.carousel').slick();
  }
);
