/**
 * Created by Administrator on 2016/10/10.
 */
$(function(){
    $(".nav li").hover(function(){
        $(this).find(".slide").stop().slideDown(300);
    },function(){
        $(this).find(".slide").stop().slideUp(300);
    });
    $(".locate").click(function(){
        $(".location").toggle();
    });
    //login
    $(".on1").click(function(){
        $(this).css({"color":"#0f3677"}).siblings().css({"color":"#abbedc"});
        $(".active1").show().siblings().hide();
    });
    $(".on2").click(function(){
        $(this).css({"color":"#0f3677"}).siblings().css({"color":"#abbedc"});
        $(".active2").show().siblings().hide();
    });
    //轮播part
    var li = $(".swiper li").eq(0).clone();
    $(".swiper").append(li);
    var i=0;
    var t=null;
    t=setInterval(right,2000);
    $('.banner').mouseover(function(){
    	clearInterval(t);
    });
    $('.banner').mouseout(function(){
    	t=setInterval(right,2000);	
    })
    $(".button_next").click(function(){
        right();
    });
    $(".button_prev").click(function(){
        left();
    });
    $(".num li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        i = index;
        $(".swiper").stop().animate({left:-1920*index+"px"},1000);
    });
    function right(){
        i++;
        if(i==6){
            i=1;
            $(".swiper").css({left:0+"px"})
        }
        if(i==5){
            $(".num li").eq(0).addClass("active").siblings().removeClass("active");
        }else{
            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        }
        $(".swiper").stop().animate({left:-1920*i+"px"},1000);
    }
    function left(){
        i--;
        if(i==-1){
            i=4;
            $(".swiper").css({left:-1920*5+"px"})
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".swiper").stop().animate({left:-1920*i+"px"},1920);
    }
});

