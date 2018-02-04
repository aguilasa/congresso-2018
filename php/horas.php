<?php

$data = array();
$today = getdate();
$data = getdate();
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
echo json_encode($data);
?>