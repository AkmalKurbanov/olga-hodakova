$('.about-js').on('click', function () {
  $('#about-js').addClass('show');
  $('body').addClass('no-scroll')
});
$('.popup__close').on('click', function () {
  $('.popup').removeClass('show');
  $('body').removeClass('no-scroll')
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.popup__window');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('.popup').removeClass('show');
      $('body').removeClass('no-scroll');
    }
  });
});