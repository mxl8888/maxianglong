<?php
	header("Content-type: application/json; charset=UTF-8");
	
	$link = mysqli_connect('localhost','root','root','news',3306);
	
	if(!$link){
		echo json_encode(array('������Ϣ' => '����ʧ��'));
	}else{
		echo json_encode(array('������Ϣ' => '���ӳɹ�'));
	}

	//��һ��������Թ�����
	//$arr = array(
	//		'newtype' => 'baijia',
	//		'newsimg' => 'img/2.jpg',
	//		'newstime' => '2016-02-28',
	//		'newssrc' => "buxianshi",
	//		'newstitle' => 'zhe dfddg fdgfdg fdg dfg dsf dsf'
	//);
	//echo json_encode($arr);
?>