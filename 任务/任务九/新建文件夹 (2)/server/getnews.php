<?php
	header("Content-type: application/json; charset=UTF-8");
	
	$link = mysqli_connect('localhost','root','root','news',3306);
	
	if(!$link){
		echo json_encode(array('连接信息' => '连接失败'));
	}else{
		echo json_encode(array('连接信息' => '连接成功'));
	}

	//做一个数组测试功能先
	//$arr = array(
	//		'newtype' => 'baijia',
	//		'newsimg' => 'img/2.jpg',
	//		'newstime' => '2016-02-28',
	//		'newssrc' => "buxianshi",
	//		'newstitle' => 'zhe dfddg fdgfdg fdg dfg dsf dsf'
	//);
	//echo json_encode($arr);
?>