$(function(){
    console.log("js conect")

    $main_home = $("header");

    $main_home.find("mnuOpen").on("mouseenter", function(){
        $main_home.find(".bar").css({
            width : 100 + "%"
        });
    });

    // $main_home.find(".link").on("mouseenter", function(){
    //     $main_home.find(".link").stop().animate()({
    //         background : "linear-gradient(to right, #fff , #00aaad)"
    //     });
    // });
});