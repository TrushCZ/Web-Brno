<?php

// General

require_once 'src/Article.php';
require_once 'src/DBconnection.php';

session_start();

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

// Setting data

$article = new Article;

$article->header = $_POST['header'] ?? $article->header ;
$article->perex = $_POST['perex'] ?? $article->perex;
$article->text = $_POST['text'] ?? $article->text;
$article->category = $_POST['category'] ?? $article->category;
$article->interesting = $_POST['interesting'] ?? $article->interesting;
$article->imgName = $_POST['name'];
$article->imgID = $newImageName;

// Insering data to DB

$query = "INSERT INTO `Články` (Header, Perex, Text, Category, Interesting, MainImg_Name, MainImg_ID) VALUES('$article->header', '$article->perex', '$article->text', '$article->category', '$article->interesting', '$article->imgName', '$article->imgID')";

$result = mysqli_query($connection, $query);

$_SESSION['success_message'] = 'Článek úspěšně přidán';

header('Location: index.php');
