<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type:text/html;charset=utf-8");

    $currentPage = !empty($_GET['currentPage']) ? $_GET['currentPage'] : null; 
    $startPage = ($currentPage-1)*10;
    
    $servername = "localhost";
    $username = "root";
    $password = "123456";
    $dbname = "filmdb";
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    $result = mysqli_query($conn,"SELECT * FROM film limit $startPage,10");
    if (!$result) {
        printf("Error: %s\n", mysqli_error($conn));
        exit();
    }
    $arr=mysqli_fetch_all($result,MYSQLI_ASSOC); 
    echo json_encode($arr);
?>