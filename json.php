<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: GET, POST');
header('content-type: application/json; charset=utf-8');
$url = $_GET['url'];
$json = file_get_contents($url);
echo $json;
?>