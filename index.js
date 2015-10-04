$( document ).ready(function() {
  clicks = 0;
  $('#pic').click(function(e) {
    clicks += 1;
    $('#clicks').html(clicks);
  });
});
