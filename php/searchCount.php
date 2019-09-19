<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type:text/html;charset=utf-8");

    $searchval = !empty($_GET['searchval']) ? $_GET['searchval'] : null;
    
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
    $result = mysqli_query($conn,"SELECT * FROM film WHERE upper(FILM_title) LIKE '%$searchval%'");
    if (!$result) {
        printf("Error: %s\n", mysqli_error($conn));
        exit();
    }
    echo mysqli_num_rows($result);
?>