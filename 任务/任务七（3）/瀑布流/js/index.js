$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var dataImg = {"data":[{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"}]};
        window.scroll = function(){
            if(scrollSide()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./img"+$(value).attr(("src")).appendTo(content);
                });
                imgLocation();
            }
        }
    });
});
//设置一个临界点
function scrollSide(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop＋Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight )?true:false;
}
//设置图片的瀑布流
function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();//获取第一张图片的高度
    var num = Math.floor($(window).width()/boxWidth);//一排能放多个多少个图片
    var boxArr = [];//创建一个数组来储存高度
    box.each(function(index,value){
        //console.log(index + "--" + value);
        var boxHeight = box.eq(index).height();
        if(index < num){
            boxArr[index] = boxHeight;//把第一排的高度存放在数组中
            //console.log(boxHeight);
        }else {
            var minboxHeight = Math.min.apply(null,boxArr);//在数组中找到最小的高度
            //console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight,boxArr);//在在数组中找到最小的高度的位置
            //console.log(minboxIndex);
            //设置图片的摆放
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            //重新计算高度
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}
