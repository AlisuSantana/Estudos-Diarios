<?php

$db_host = 'localhost';
$db_name = 'test123';
$db_user = 'root';
$db_pass = '';

$PDO = new PDO("mysql:dbname=$db_name;host=$db_host", $db_user, $db_pass);

$response = [
    'error' => '',
    'result' => []
];
