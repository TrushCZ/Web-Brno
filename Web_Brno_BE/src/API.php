<?php

require_once 'DBconnection.php';

$response = [];

if ($connection) {
    $query = 'SELECT * FROM `Články`';
    $result = mysqli_query($connection, $query);
    if ($result) {
        $i = 0;
        while($row = mysqli_fetch_assoc($result)) {
            $response[$i]['id'] = $row['Id'];
            $response[$i]['header'] = $row['Header'];
            $response[$i]['perex'] = $row['Perex'];
            $response[$i]['text'] = $row['Text'];
            $response[$i]['mainImg'] = $row['MainImg_ID'];
            $response[$i]['category'] = $row['Category'];
            $response[$i]['interesting'] = $row['Interesting'];
            $response[$i]['created_at'] = $row['Created_at'];
            $i++;
        }
        rsort($response);
        header('Content-type: application/json; charset=UTF-8');
        // CORS policy
        header("Access-Control-Allow-Origin: http://localhost:5173");
        echo json_encode($response, JSON_PRETTY_PRINT| JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
        
    } else {
        echo 'Database connection failed.';
    }
}






