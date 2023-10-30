<?php

// General

require_once 'src/DBconnection.php';
require_once 'src/Article.php';

session_start();
$id = $_GET['id'];

// Validation_text part

$error= [];
$valid = true;

if (trim($_POST['header'] ?? '') === '') {
    $valid = false;
    $error[] = 'Nadpis nesmí být prázdný';
}

if (trim($_POST['perex'] ?? '') === '') {
    $valid = false;
    $error[] = 'Perex nesmí být prázdný';
}

if (trim($_POST['text'] ?? '') === '') {
    $valid = false;
    $error[] = 'Text nesmí být prázdný';
}

if (!empty($error)) {
    $_SESSION['errors'] = $error;
    header('Location:create.php');
    exit();
}

// Validation_image part

if ($_FILES['image']['size'] > 0) {
if ($_FILES['image']['error'] === 4) {
    echo '<script> alert("Obrázek není nahraný") </script>';
} else {
    $fileName = $_FILES['image']['name'];
    $fileSize = $_FILES['image']['size'];
    $tmpName = $_FILES['image']['tmp_name'];
    $validImageExtention = ['jpg', 'jpeg', 'png'];

    $imageExtention = explode('.', $fileName);
    $imageExtention = strtolower(end($imageExtention));

    if (!in_array($imageExtention, $validImageExtention)) {
        echo '<script> alert("Špatný formát obrázku") </scrtipt>';
    } else if ($fileSize > 2000000) {
        echo '<script>alert("Obrázek je příliš velký")</srcipt>';
    } else {$newImageName = uniqid();
        $newImageName .= '.' . $imageExtention;

        move_uploaded_file($tmpName, 'img_load/'.$newImageName);
    }
}
} else {
    $query = "SELECT `MainImg_ID` FROM `Články` WHERE `Id`= $id";
    $result = mysqli_query($connection, $query);
    $row = mysqli_fetch_assoc($result);
    $newImageName = $row['MainImg_ID'];
}

// Setting data

$article = new Article;

$article->header = $_POST['header'] ?? $article->header ;
$article->perex = $_POST['perex'] ?? $article->perex;
$article->text = $_POST['text'] ?? $article->text;
$article->category = $_POST['category'] ?? $article->category;
$article->interesting = $_POST['interesting'] ?? $article->interesting;
$article->imgName = $_POST['name']?? $article->imgName;
$article->imgID = $newImageName ?? $article->imgID;

// Updating data in DB

$query2 = "UPDATE `Články` SET `Header`= '$article->header',`Perex`='$article->perex', `Text`='$article->text', `Category`= '$article->category', `Interesting` = '$article->interesting', `MainImg_Name`='$article->imgName', `MainImg_ID`='$article->imgID' WHERE `id` = $id";

mysqli_query($connection, $query2);

$_SESSION['success_message'] = "Článek byl úspěšně upraven";

header('Location: index.php');








