<?php

$db_host = 'localhost';
$db_name = 'db_api_users';
$db_user = 'root';
$db_pass = '';

$pdo = new PDO("mysql:dbname=$db_name;host=$db_host", $db_user, $db_pass);

$response = [
    'error' => '',
    'result' => []
];

