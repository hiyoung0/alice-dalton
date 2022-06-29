$(document).ready(function(){
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
});