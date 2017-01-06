//动态的插入一条新闻
//工厂函数
$(document).ready(function(){
    refreshNews();
});

function refreshNews(){
    var $lists = $('article ul')
    var $lists = $('<ul></ul>').addClass('news-lists ').prependTo('.news-main2');
    //首先把新闻列表都删除掉
    $lists.empty();

    $.ajax({
        url:'../server/getnews.php',
        type:'get',
        datatype:'json',
        success:function(data){//从服务器回传回来的数据一般都会保存这个里
            //data.each(function(){
            //    var $list = $('<li></li>').addClass('news-list').prependTo($lists);
            //    var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
            //    var $img = $('<img>').attr('src',data.newsimg).appendTo($newsImg);
            //    var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
            //    var $h1 = $('<h1></h1>').html(data.newstitle).appendTo($newscontent);
            //    var $p = $('<p></p>').appendTo($newscontent);
            //    var $newstime = $('<span></span>').addClass('newstime').html(data.newstime).appendTo($p);
            //    var $newssrc = $('<span></span>').addClass('newssrc').html(data.newssrc).appendTo($p);
            //
            //    var $list = $('<li></li>').addClass('news-list').prependTo($lists);
            //    var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
            //    var $img = $('<img>').attr('src','img/lno1 (3).jpg').appendTo($newsImg);
            //    var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
            //    var $h1 = $('<h1></h1>').html('正部级单位也吸一样的空气：实拍霾中各大部委').appendTo($newscontent);
            //    var $p = $('<p></p>').appendTo($newscontent);
            //    var $newstime = $('<span></span>').addClass('newstime').html('2016-12-22').appendTo($p);
            //    var $newssrc = $('<span></span>').addClass('newssrc').html('搜狐两性').appendTo($p);
            //
            //    var $list = $('<li></li>').addClass('news-list').prependTo($lists);
            //    var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
            //    var $img = $('<img>').attr('src','img/lno1 (2).jpg').appendTo($newsImg);
            //    var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
            //    var $h1 = $('<h1></h1>').html('正部级单位也吸一样的空气：实拍霾中各大部委').appendTo($newscontent);
            //    var $p = $('<p></p>').appendTo($newscontent);
            //    var $newstime = $('<span></span>').addClass('newstime').html('2016-12-22').appendTo($p);
            //    var $newssrc = $('<span></span>').addClass('newssrc').html('搜狐两性').appendTo($p);
            //
            //    var $list = $('<li></li>').addClass('news-list').prependTo($lists);
            //    var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
            //    var $img = $('<img>').attr('src','img/lno1 (4).jpg').appendTo($newsImg);
            //    var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
            //    var $h1 = $('<h1></h1>').html('正部级单位也吸一样的空气：实拍霾中各大部委').appendTo($newscontent);
            //    var $p = $('<p></p>').appendTo($newscontent);
            //    var $newstime = $('<span></span>').addClass('newstime').html('2016-12-22').appendTo($p);
            //    var $newssrc = $('<span></span>').addClass('newssrc').html('搜狐两性').appendTo($p);
            //
            //})
            console.log(data);
        }
    });
}