//动态的插入一条新闻
//工厂函数
$(document).ready(function(){
    var $lists = $('article ul');
    var $list = $('<li></li>').addClass('news-list').prependTo($lists);
    var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
    var $img = $('<img>').attr('src','img/2.jpg').appendTo($newsImg);
    var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
    var $h1 = $('<h1></h1>').html('女子认不出窃财骗色男网友 原来他去了趟韩国').appendTo($newscontent);
    var $p = $('<p></p>').appendTo($newscontent);
    var $newstime = $('<span></span>').addClass('newstime').html('2016-12-22').appendTo($p);
    var $newssrc = $('<span></span>').addClass('newssrc').html('搜狐两性').appendTo($p);
});