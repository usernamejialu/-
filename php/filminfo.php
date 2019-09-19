<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type:text/html;charset=utf-8");

    $id = !empty($_GET['id']) ? $_GET['id'] : null; 
    
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
    $result = mysqli_query($conn,"SELECT * FROM film WHERE FILM__id=$id");
    if (!$result) {
        printf("Error: %s\n", mysqli_error($conn));
        exit();
    }
    $row=mysqli_fetch_assoc($result); 
    echo json_encode($row);
?>