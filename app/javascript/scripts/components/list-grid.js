$(function () {
  $('.list-grid :checkbox').on('change', function() {
    $(this).closest('label').toggleClass('item__is-checked', this.checked)
  });
});
