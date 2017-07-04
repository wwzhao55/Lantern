<?php
require 'config.php';
require 'db_connect.php';
$code = isset($_GET['code'])?$_GET['code']:'';
if(!$code){
        Header("Location: https://".DOMAIN."/");
}else{
        $url = 'http://appwxchat.yiguanjinrong.yg/wxChat/netBankRequestOne.action?tranCode=WX21&srcChannel='.API_CHANNEL.'&wxCode='.$code;
	$json_raw = http_get($url);
        $json_data = json_decode(getJson($json_raw));
        $openid = $json_data->openid;
	if(!$openid){
		Header("Location: https://".DOMAIN."/");
        }


	$has_get_reward = $database->has('reward',array('openid'=>$openid));

	if($has_get_reward){
		$has_get_reward = "yes";
		$reward= $database->get('reward','reward',array('openid'=>$openid));
	}else{
		$has_get_reward = "no";
		$reward = '';
	}
	$share_openid = $_GET['state'];

	#----------分享的链接
	if($share_openid != "123"){
		#----------不是自己给自己的分享
		if($share_openid != $openid){
			#---------------分享者必须已经在openid表里
			$has_share_openid = $database->has('openid',array('openid'=>$share_openid));
			if($has_share_openid){
				#-----------分享关系是否已经记录
				$has_shared = $database->has('share',array(
					'AND'=>array(
						'share_openid'=>$share_openid,
						'shared_openid'=>$openid
						)
				));
				if(!$has_shared){
					$database->insert('share',array('share_openid'=>$share_openid,'shared_openid'=>$openid,'time'=>time()));
				}
			}
		}				
	}
	$shared_openid = $database->get('share','share_openid',array('shared_openid'=>$openid));	
	if($shared_openid){
		$shared_mobile = $database->get('users','mobile',array('openid'=>$shared_openid));
	}else{
		$shared_mobile = '';
	}
	$has_openid = $database->has('openid',array('openid'=>$openid));
	if(!$has_openid && $openid){
		$database->insert('openid',array('openid'=>$openid,'time'=>time()));
	}
	require 'tour.html';
}


/**
 * GET 请求
 * @param string $url
 */
function http_get($url){
	$oCurl = curl_init();
	if(stripos($url,"https://")!==FALSE){
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($oCurl, CURLOPT_SSLVERSION, 1); //CURL_SSLVERSION_TLSv1
	}
	curl_setopt($oCurl, CURLOPT_URL, $url);
	curl_setopt($oCurl, CURLOPT_RETURNTRANSFER, 1 );
	$sContent = curl_exec($oCurl);
	$aStatus = curl_getinfo($oCurl);
	curl_close($oCurl);
	if(intval($aStatus["http_code"])==200){
		return $sContent;
	}else{
		return false;
	}
}

function getJson($str)
{
	$result = array();
	preg_match("/(?:\()(.*)(?:\))/i",$str, $result);
	return $result[1];
}