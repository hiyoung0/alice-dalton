$(document).ready(function(){
    // 좌우버튼 슬라이드
    $(".slidebutton_left").click(function(){
        $(".slide_width .art:last").prependTo(".slide_width");
        $(".slide_width").css("margin-left",-330);
        $(".slide_width").stop().animate({marginLeft:0},800);
    });

    $(".slidebutton_right").click(function(){
        $(".slide_width").stop().animate({marginLeft:-330},800,function(){
            $(".slide_width .art:first").appendTo(".slide_width");
            $(".slide_width").css({marginLeft:0});
        });
    });


    // 상품 add_cart
    $(".primg1").hover(function(){
        $(".add1").stop().slideToggle();
    });
    $(".primg2").hover(function(){
        $(".add2").stop().slideToggle();
    });
    $(".primg3").hover(function(){
        $(".add3").stop().slideToggle();
    });
    $(".primg4").hover(function(){
        $(".add4").stop().slideToggle();
    });
    $(".primg5").hover(function(){
        $(".add5").stop().slideToggle();
    });
    $(".primg6").hover(function(){
        $(".add6").stop().slideToggle();
    });
    $(".primg7").hover(function(){
        $(".add7").stop().slideToggle();
    });
    $(".primg8").hover(function(){
        $(".add8").stop().slideToggle();
    });
    $(".primg9").hover(function(){
        $(".add9").stop().slideToggle();
    });
});
