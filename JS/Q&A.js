$(document).ready(function() {
    $(".card").click(function() {
      var answer = $(this).find(".a");
      answer.slideToggle();
    });
  });