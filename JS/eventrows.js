$(document).ready(function() {
    $(".timebox a").click(function(e) {
      e.preventDefault(); 
      var selectedYear = $(this).data("year"); 
      $(".cardlink").hide();
      
      $(".cardbox[data-year='" + selectedYear + "']").parent().show();
    });
  });