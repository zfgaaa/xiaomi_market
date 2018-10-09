<?php
    // 获取用户名
    header("Content-type: application/json");
    header("Access-Control-Allow-Origin:*");
    
    $json = file_get_contents("php://input");
    $username = $json -> username;
    var_dump($username);

?>