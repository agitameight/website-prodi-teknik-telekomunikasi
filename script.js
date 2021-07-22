$(document).ready(function(){

  $('#hide').click(function() {
    $('.col-md-4').hide(1000);
  });

  $('#show').click(function() {
    $('.col-md-4').show(1000);
  });

  $('button').click(function(){
    $('.col-md-4').animate({
        height: 'toggle'
  });
  });

});