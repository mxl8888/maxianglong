/*右侧下拉菜单*/
$(document).ready(function(){
    $('#nav-a').hover(function(){
        $("#more-product").slideToggle(500);
    })

    $("#tabfirst li").each(function(index){
        $(this).click(function(){
                //首先讲原来的内容区域进行隐藏；
                $(".containerbtn ").removeClass("a");
                //移到哪个li元素上就给谁天剑相应的div内容部分
                $(".containerbtn").eq(index).addClass("a");
        })
    })
});
