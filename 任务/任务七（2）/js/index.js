
$(document).ready(function(){
    //头部开始
    //导航部分下来菜单
    $(".nav-li").hover(function(){
        $(this).children("div").show(200);
    },function(){
        $(this).children("div").hide(100);
    });
    //头部 login部分
    //猴急图标二维码部分
    $("#appicon").hover(function(){
       $(this).children("dl").toggle();
    });
    //个人中心部分
    $("#loginlist").hover(function(){
        $(this).children("dl").toggle();
    });
    //顶部搜索框部分
    //点击显示
    $("#searh-btn").click(function(){
        $("#searchbox").show(500);
    });
    //点X隐藏
    $("#close-btn").click(function(){
        $("#searchbox").hide();
    });
    //头部结束

    /*peger部分 内容部分*/

    /*内容部分的分类菜单*/
    $(".both").hover(function(){
        $(this).next("dd").toggle();
    });
    //内容图片列表部分
    $("#cf1 .cf-li").hover(function(){
    $(this).children("div").children("a").children("div").slideToggle(100);
    $(this).children("div").children("p").toggle(200);
    });

    //内容标签切换之后的图片列表部分
    $("#cf2 .cf-li").hover(function(){
        $(this).children("div").children("a").children("div").slideToggle(100);
    });
    //内容图片列表部分

    //内容部分左边列表left的上半部分
    $("#aside-cList li").hover(function(){
        $(this).children("div").children("div").toggle(100);
    });
    //内容部分左边列表left的下半部分
    $("#hdlist li").hover(function(){
        $(this).children("a").children("span").css("opacity","1");
    },function(){
        $(this).children("a").children("span").css("opacity","0");
    });
    //内容部分标签切换部分
    $("#list-icon").each(function(index){
        $(this).click(function(){
            $("#changeid ").hide();
            $("#changeid1").show();
        });
    });
    $("#kuai-icon-curr").each(function(index){
        $(this).click(function(){
            $("#changeid1 ").hide();
            $("#changeid").show();
        });
    });
});


