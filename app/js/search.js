$('.search-js').on('click', function () {
  $('.search').addClass('active');
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.search__input, .search');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      if ($('.search input').val() != '') {
        $('.search').addClass('active');
      } else {
        $('.search').removeClass('active');
      }

    }
  });
});

