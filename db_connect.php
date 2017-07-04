<?php 
require "medoo.php";
$database = new medoo(array(
    // 必须配置项
    'database_type' => 'mysql',
    'database_name' => DB_NAME,
    'server' => DB_HOST,
    'username' => DB_USER,
    'password' => DB_PASSWORD,
    'charset' => 'utf8',
 
    // 可选参数
    'port' => DB_PORT,
 
    // 连接参数扩展, 更多参考 http://www.php.net/manual/en/pdo.setattribute.php
    'option' => array(
        PDO::ATTR_CASE => PDO::CASE_NATURAL
    )
));


 

