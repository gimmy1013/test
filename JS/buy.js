$(document).ready(function() {
    $('#levelSelect, #brandSelect, #styleSelect').change(function() {
      var selectedLevel = $('#levelSelect').val();
      var selectedBrand = $('#brandSelect').val();
      var selectedStyle = $('#styleSelect').val();
  
      $('.card').hide();
  
      $('.card').each(function() {
        var level = $(this).data('level');
        var brand = $(this).data('brand');
        var style = $(this).data('style');
  
        if ((selectedLevel === '' || level === selectedLevel) &&
            (selectedBrand === '' || brand === selectedBrand) &&
            (selectedStyle === '' || style === selectedStyle)) {
          $(this).show();
        }
      });
    });
  });