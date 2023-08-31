$('form').submit(function () {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "../mail.php",
    data: th.serialize()
  }).done(function () {
    $('#callback-js').addClass('show');
    $('body').addClass('no-scroll');
    $('#phone').val('')
  });
  return false;
});