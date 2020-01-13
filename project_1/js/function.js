$(function(){

    nowIdx = 0;

    $main_home = $("header");
    $topMnu = $main_home.find(".navMnu>ul>li");

    // 메뉴 클릭 시 효과 이동
    $topMnu.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $topMnu.index(this);
        $topMnu.eq(nowIdx).addClass("on").siblings().removeClass("on");

        console.log("nowIdx = ", nowIdx);
    });

    $mnuBar = $main_home.find(".mnuBar");
    $subMnu = $main_home.find(".sub-wdMnu");
    $mnuExit = $main_home.find(".exit");
    $shadow = $main_home.find(".shadow");

    // 서브메뉴열기
    $mnuBar.on("click", function(evt){
        evt.stopPropagation();
        $("body, html").addClass("stop");
        $shadow.show();
        $subMnu.addClass("open");
    });
    //서브메뉴 닫기, 그림자 제거
    var subMnu_close = function(){
        $subMnu.removeClass("open");
        $shadow.hide();
        $("body, html").removeClass("stop");
    }
    // 서브메뉴 닫기를 눌렀을 때
    $mnuExit.on("click", function(){
        subMnu_close();
    });
    // 그림자를 눌렀을 때
    $shadow.on("click", function(){
        subMnu_close();
    });

    $(document).keydown(function(evt){
        if(evt.keyCode == '27'){
            subMnu_close();
        }
    });
})