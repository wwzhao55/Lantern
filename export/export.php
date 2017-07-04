<?php 
require '../config.php';
require '../db_connect.php';
$tableNameArray = array(
	'users',
	'reward',
	'record',
	'share',
	'openid'
	);
$tableName = isset($_GET['tableName'])?$_GET['tableName']:'';
if(!in_array($tableName,$tableNameArray)){
	require 'export.html';
	exit;
}
$data = get_table_data($tableName,$database);
export_txt($tableName,$data); //导出

function export_txt($filename,$data){ 
	$filename.='.txt';  
	Header( "Content-type:   application/octet-stream "); 
	Header( "Accept-Ranges:   bytes "); 
	header( "Content-Disposition:   attachment;   filename=$filename "); 
	header( "Expires:   0 "); 
	header( "Cache-Control:   must-revalidate,   post-check=0,   pre-check=0 "); 
	header( "Pragma:   public ");  
    echo $data;   
} 
function get_table_data($tableName,$database){
	
	switch ($tableName) {
		case 'users':
			$data = $database->select($tableName,['id','mobile','openid','time']);			
			$str = "id,mobile,openid,time\n";
			foreach ($data as $value) {
				$str.= $value['id'].',';
				$str.= $value['mobile'].',';
				$str.= $value['openid'].',';
				$str.= $value['time']."\n";
			}
			break;
		case 'openid':
			$data = $database->select($tableName,['id','openid','time']);			
			$str = "id,openid,time\n";
			foreach ($data as $value) {
				$str.= $value['id'].',';
				$str.= $value['openid'].',';
				$str.= $value['time']."\n";
			}
			break;
		case 'share':
			$data = $database->select($tableName,['id','share_openid','shared_openid','time']);
			$str = "id,share_openid,shared_openid,time\n";
			foreach ($data as $value) {
				$str.= $value['id'].',';
				$str.= $value['share_openid'].',';
				$str.= $value['shared_openid'].',';
				$str.= $value['time']."\n";
			}
			break;
		case 'reward':
			$data = $database->select($tableName,['id','reward','openid','time']);
			$str = "id,reward,openid,time\n";
			foreach ($data as $value) {
				$str.= $value['id'].',';
				$str.= $value['reward'].',';
				$str.= $value['openid'].',';
				$str.= $value['time']."\n";
			}
			break;
		case 'record':
			$data = $database->select($tableName,['id','openid','action','time']);
			$str = "id,openid,action,time\n";
			foreach ($data as $value) {
				$str.= $value['id'].',';
				$str.= $value['openid'].',';
				$str.= $value['action'].',';
				$str.= $value['time']."\n";
			}
			break;
		default:
			# code...
			break;
	}
	return $str;
} 