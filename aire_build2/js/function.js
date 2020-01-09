$(function(){
   
    $load = $(".loading");

    $(window).on("load", function(){
        $load.delay(1500).fadeOut();

        $("html, body").stop().animate({
            scrollTop : 0
        });
    });

    $(window).on("load resize", function(){
        $load.css({
            height : $(window).height()
        });
    });

});