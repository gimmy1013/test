$(document).ready(function() {
    $(".bikephoto img").first().show(); 

    $("#blue").click(function() {
        $(".bikephoto img").fadeOut(200, function() {
            $(".bikephoto img").attr("src", "../img/yzf-r7 800x600 blue.png");
            $(".bikephoto img").fadeIn(200);
        });
    });

    $("#black").click(function() {
        $(".bikephoto img").fadeOut(200, function() {
            $(".bikephoto img").attr("src", "../img/yzf-r7 800x600 black.png");
            $(".bikephoto img").fadeIn(200);
        });
    });
});