<?php
require 'config.php';
require 'db_connect.php';

function get_reward(){
    $rand = rand(0,99);
    if($rand==0){
        return 3;
    }else if($rand==1){
        return 2;
    }else{
        return 1;
    }
}

$mobile = isset($_POST['mobile'])?$_POST['mobile']:'';
if(!$mobile){
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败，手机号输入不能为空',
        'data'=>-2
    ));
    exit;
}
if(!preg_match('/^1[34578]\d{9}$/',$mobile)){
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败，手机号输入格式不正确',
        'data'=>-3
    ));
    exit;
}
$has_mobile = $database->has('users',array('mobile'=>$mobile));
if($has_mobile){
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败，您的手机号已经用过啦',
        'data'=>-5
        ));
    exit;
}


$random = get_reward();

$is_new = isset($_POST['is_new'])?$_POST['is_new']:1;
$reward = $is_new?$random:0;
$openid = isset($_POST['openid'])?$_POST['openid']:'';
$has_get_luck = $database->has('reward',array('openid'=>$openid));
if($has_get_luck){
	echo json_encode(array(
		'status'=>'fail',
		'message'=>'获取幸运失败，已经参与过活动！',
		'data'=>-7
		));
	exit;
}


$has_openid = $database->has('openid',array('openid'=>$openid));
if(!$openid || !$has_openid){
	echo json_encode(array(
		'status'=>'fail',
		'message'=>'获取幸运失败，请重新进入网页！',
		'data'=>-4
		));
	exit;
}


if (DEBUG && $mobile=='17310227187') {
    echo json_encode(array(
        'status'=>'success',
        'message'=>'获取幸运成功',
        'data'=>$reward
    ));
    exit;
} else {
    $result1 = $database->insert('users',array(
    'mobile'=>$mobile,
    'openid'=>$openid,
    'time'=>time(),
    ));
$result2 = $database->insert('reward',array(
    'openid'=>$openid,
    'reward'=>$reward,
    'time'=>time()
    ));
if($result1 && $result2){
    echo json_encode(array(
        'status'=>'success',
        'message'=>'获取幸运成功',
        'data'=>$reward
    ));
    exit;
}else{
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败！网络错误',
        'data'=>-6
    ));
    exit;
}
}
