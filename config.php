<?php
define('DB_USER','lantern');
define('DB_PASSWORD','redhatredhat');
define('DB_NAME','lantern');
define('DEBUG', true);
define('GAME_ON',true);
/*if (DEBUG)
{
define('DOMAIN', 'wxapi-dev.yiguanjinrong.com/sky');
define('APPID','wx6144834c1ba761d2');
define('DB_HOST','w.my3307.intra.yiguanjinrong.com');
define('DB_PORT', 3307);
define('API_URL', 'wxchat-dev.yiguanjinrong.com/wxChat');
define('API_CHANNEL', 'WX');
define('REG_URL', '');
define('GOREG_URL', 'wxapi-dev.yiguanjinrong.com/P2BPlat/html');
} else {
define('DOMAIN', 'wx.yiguanjinrong.com/swxhd/sky');
define('APPID','wxaabb0ed653a386d3');
define('DB_HOST','wdb3312.yiguanjinrong.yg');
define('DB_PORT', 3312);
define('API_URL', 'wechat.yiguanjinrong.com');
define('API_CHANNEL', 'WS');
define('REG_URL', '/wxp2b');
define('GOREG_URL', 'wx.yiguanjinrong.com/swxhd');
}*/
define('DOMAIN', 'shop.dataguiding.com/lantern');
define('APPID','wx224d9a47485d07b4');
define('DB_HOST','127.0.0.1');
define('DB_PORT', 3306);
define('API_URL', 'shop.dataguiding.com/wxapi');
define('API_CHANNEL', 'WX');
define('REG_URL', '');
define('GOREG_URL', 'wxapi-dev.yiguanjinrong.com/P2BPlat/html');
if(!GAME_ON){
	echo 'The activity is over!';
	exit;
}