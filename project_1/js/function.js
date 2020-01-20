// haeder
$(function(){

    var nowIdx = 0;
    var value = [];

    // 1~6 offset top 값 배열 초기화
    var pageTop = function(){
        for(i=0; i<7; i++){
            value[i] = $("#wrap").children().eq(i).offset().top;
            console.log("value = ",value);
        }
    };

    $(window).on("load", function(){
        pageTop();
    });
    
    // 창 크기 조절시 1초마다 이벤트 작동
    $(window).on('resize', _.debounce(function() {
        pageTop();
      },400));

    

    var $main_home = $("header");
    var $topMnu = $main_home.find(".navMnu>ul>li");

    var idxMov = function(){
        $topMnu.eq(nowIdx).addClass("on").siblings().removeClass("on");
        $subList.eq(nowIdx).addClass("on").siblings().removeClass("on");
    };

    // 메뉴 클릭 시 효과 이동
    $topMnu.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $topMnu.index(this);
        idxMov();
        $("html,body").stop().animate({
            scrollTop : value[nowIdx]
        },1000);

        console.log("nowIdx = ", nowIdx);
    });

    $mnuBar = $main_home.find(".mnuBar");
    $subMnu = $main_home.find(".sub-wdMnu");
    $subList = $subMnu.find(".container>ol>li");
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

    //키 입력 이벤트
    $(document).keydown(function(evt){
        // esc를 눌렀을 때
        if(evt.keyCode == '27'){
            subMnu_close();
        }
    });

    //서브메뉴 클릭시 효과 이동
    $subList.on("click", function(evt){
        evt.preventDefault();
        
        nowIdx = $subList.index(this);
        idxMov();
        subMnu_close();
        $("html,body").stop().animate({
            scrollTop : value[nowIdx]
        },1000);

    });

    //scroll down 버튼 클릭시
    $main_home.find(".scroll").on("click", function(){
        $("html,body").stop().animate({
            scrollTop : value[1]
        });
    });

    // 스크롤 이벤트, 탑메뉴 fixed
    $("html, body").on("scroll", function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop>=$main_home.find(".title").offset().top){
            $main_home.find(".mnuBg").slideDown();
            
            $main_home.find(".mnuWrap").addClass("n-fixed");
            $main_home.find(".n-fixed").css({
                marginTop : 0
            });
            $main_home.find(".mnuOpen").addClass("n-fixed");
            $("about").css({
                marginTop : $main_home.height()
            });
            console.log("작동");
        }else{
            $main_home.find(".mnuWrap").removeClass("n-fixed");
            $main_home.find(".n-fixed").css({
                marginTop : -70
            });
            $main_home.find(".mnuOpen").removeClass("n-fixed");
            $main_home.find(".mnuBg").hide();
        }

        for(x=0;x<6;x++){
            if(scrollTop>value[x]-$main_home.height()){
                idxMov();
            }
        }
    });



}) // end of header

// about
$(function(){
    
    // auto infinite slides
    var $about = $("#about");
    var $slides = $about.find(".auto-slides");
    var $slideBar = $slides.children("ul");

    InterverKey = setInterval(function(){
        $slideBar.stop().animate({
            left : -440
        },1000, function(){
            $slideBar.children("li").eq(0).appendTo($slideBar);
            $slideBar.css({left:-220});
        });
        
    },3000);

    var $service = $("#service");
    var $scrnLock = $service.find(".lock");

    var lock = 0;
    var check = false;

    var movEnd = function(){
        check = false;
    }

    // 스크린 잠금 & 해제                               
    $scrnLock.on("click", function(){
        if(check==false){
            check = true;
            if(lock>=1){
                $service.find(".scrn").stop().fadeIn(500);
                lock--;
            }else{
                lock++;
                $service.find(".scrn").stop().fadeOut(500);
            }
           
            check=false;
        }
    });


});

// number
$(function(){
    var $number = $("#number");
    var $CountNum = $number.find(".block");

    $("html, body").on("scroll", function(){

    });
});


var slides = document.getElementsByClassName("auto-slides");


