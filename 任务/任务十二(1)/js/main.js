///*右侧下拉菜单*/
//$(document).ready(function(){
//    $('#nav-a').hover(function(){
//        $("#more-product").slideToggle(500);
//    })
//
//    $("#tabfirst li").each(function(index){
//        $(this).click(function(){
//                //首先讲原来的内容区域进行隐藏；
//                $(".containerbtn ").removeClass("a");
//                //移到哪个li元素上就给谁天剑相应的div内容部分
//                $(".containerbtn").eq(index).addClass("a");
//        })
//    });
//单例模式
var baidu = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            this.moreProduct = $('#nav-a');//更多产品
            this.tabFfirst = $("#tabfirst li");//导航菜单的切换
        },
        bind:function(){
            var _self = this;
            this.moreProduct.hover(function(){
                $("#more-product").slideToggle(500);
            });
            this.tabFfirst.each(function(index){
                $(this).click(function(){
                    //首先讲原来的内容区域进行隐藏；
                    $(".containerbtn ").removeClass("a");
                    //移到哪个li元素上就给谁天剑相应的div内容部分
                    $(".containerbtn").eq(index).addClass("a");
                })
            });
        }

}
baidu.init();