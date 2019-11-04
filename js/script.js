$(document).ready(function() {
  $(".my-design p").hide();
  $("#img-design").click(function() {
    $("#img-design").toggle();
    $("#design").toggle();
  });
  $("#image-dev").click(function() {
    $("#image-dev").toggle();
    $("#develop").toggle();
  });
  $("#img-manage").click(function() {
    $("#img-manage").toggle();
    $("#manage").toggle();
  });
});
