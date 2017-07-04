<?php
require 'config.php';
require 'db_connect.php';
$openid = isset($_POST['openid'])?$_POST['openid']:'';
if($openid){
	$has_get_reward = $database->has('reward',array('openid'=>$openid));
	if($has_get_reward){
		$reward = $database->get('reward','reward',array('openid'=>$openid));
		echo json_encode(array(
			'status'=>'success',
			'message'=>'获取成功',
			'reward'=>$reward,
			));
		exit;
	}else{
		echo json_encode(array(
			'status'=>'success',
			'message'=>'获取成功',
			'reward'=>'no',
			));
		exit;
	}
}else{
	$cash = intval(isset($_GET['cash'])?$_GET['cash']:'');
	$openid = isset($_GET['openid'])?$_GET['openid']:'';
	require 'reward.html';
}
