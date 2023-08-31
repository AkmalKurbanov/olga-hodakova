import 'jquery.maskedinput/src/jquery.maskedinput.js'

$("#phone").mask("+ 7 (9 9 9) 9 9 9 - 9 9 - 9 9", {
  completed: function () {
    $('#callback .btn').removeClass('disabled');
  }
});