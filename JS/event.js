$(document).ready(function() {
    $(".card").mouseenter(function() {
      var video = $(this).find(".vid")[0];
      video.play();
    });
  
    $(".card").mouseleave(function() {
      var video = $(this).find(".vid")[0];
      video.pause();
      video.currentTime = 0;
    });
  });