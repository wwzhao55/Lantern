<?php
require 'config.php';
$redirect_url = 'https://'.DOMAIN.'/auth.php';
$share_openid = isset($_GET['share_openid'])?$_GET['share_openid']:'123';
Header("Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=".APPID."&redirect_uri=".$redirect_url."&response_type=code&scope=snsapi_base&state=".$share_openid."#wechat_redirect");

