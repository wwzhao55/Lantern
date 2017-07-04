<?php 
require "config.php";
require "db_connect.php";
$openid = isset($_POST['openid'])?$_POST['openid']:'';
$action = isset($_POST['action'])?$_POST['action']:'';
if($openid=='' || $action==''){
	echo json_encode(array(
		'status'=>'fail',
		'message'=>'参数不能为空',
		'data'=>-1
		));
	exit;
}

$has_openid = $database->has('openid',array('openid'=>$openid));
if(!$has_openid){
	echo json_encode(array(
		'status'=>'fail',
		'message'=>'openid参数错误,没有查到该参数',
		'data'=>-2
		));
	exit;
}
$result = $database->insert('record',array(
	'openid'=>$openid,
	'action'=>$action,
	'time'=>time()
	));
if($result){
	echo json_encode(array(
		'status'=>'success',
		'message'=>'行为记录成功！',
		'data'=>1
		));
	exit;
}