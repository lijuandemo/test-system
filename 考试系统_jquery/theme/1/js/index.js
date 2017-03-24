/**
 * Created by 李娟 on 2017/3/8.
 */
$(function(){
    $(".baseUI>li>ul").slideUp();
    //绑事件
    $(".baseUI>li").off("click");
    $(".baseUI>li").on("click",function(){
        if($(this).children("ul").css("display")=="none"){
            //先让所有的都隐藏
            $(".baseUI>li>ul").slideUp();
            $(this).children("ul").stop().slideDown(500);
        }
    });
    //让其中的一个提前做展示
    $(".baseUI>li>ul").eq(0).slideDown(500);

    $(".baseUI>li>ul>li").on("click",function(event){
        $(".baseUI>li>ul>li").removeClass("current");
        $(this).addClass("current");
        var  url = $(this).attr("val");
        $(".right").load(url);
    });
    $(".t_exit").on("click",function(){
        location.href="Login.html";
    })
})
$(document).ready(function(){
    $(".baseUI>li>ul>li").eq(0).trigger("click")
});