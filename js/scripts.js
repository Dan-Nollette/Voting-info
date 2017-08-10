$(document).ready(function(){
  var age = prompt("How old are you?");
  if (age <= 17) {
    $('#child').show();
  } else {
    $('#adult').show();
  }
});
