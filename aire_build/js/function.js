$(function(){

    $logo_bg = $(".circle");
    $cont = $(".content");


    console.log("확인");

    $(window).on("load", function(){
        $logo_bg.fadeOut().delay(500);
    });

    $(window).on("load resize", function(){
        $cont.css({
            PaddingTop : $("body").height()
        });    

        $(".content>li").css({
            height : $(".content>li>a")
        });
        
    });

});