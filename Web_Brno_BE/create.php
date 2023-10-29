<?php

// General

require_once 'src/Article.php';

session_start();

$article = new Article;

// Flashing

if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

?>
<!DOCTYPE html>
<html lang="cz">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type='image/png' href="img/Favicony.png">
    <link rel="stylesheet" href="css/style.css">
    <title>Vytvořit článek</title>
</head>
<body>

<!-- Header -->

    <?php require_once 'header.php' ?>

<!-- Container     -->

    <div class='container_createArticle_form'>
       <div class='container_editArticles_emptySpace'></div>

<!-- Notifying user -->
    <?php if(!empty($errors)) : ?>
        <?php foreach($errors as $error) : ?>
            <div class='notification_success'><h3> <?=$error?></h> </div> 
        <?php endforeach; ?>       
    <?php endif; ?>

<!-- Form with prefilled values -->

    <h2 class='container_editArticles_h2'>Nový článek</h2>

    <form class='createArticle_Form' action="insert.php" method='post' autocomplete='off' enctype='multipart/form-data'>

       <h2>Nadpis</h2>
       <input class='createArticle_Form_header' type='text' name='header'value='<?= htmlspecialchars((string)$article->header)?>'> <br> 

       <h2>Perex</h2>
       <textarea class='createArticle_Form_perex' name='perex' cols="" rows=""><?= htmlspecialchars((string)$article->perex)?></textarea><br>

       <h2>Text</h2>
       <textarea class='createArticle_Form_text' name='text' cols="" rows=""><?= htmlspecialchars((string)$article->text)?></textarea><br>

       <h2>Hlavní obrázek</h2>
       <label for="name">Název: </label><input type="text" name='name' id='name' requierd value=''><br>
       <input type="file" name='image' id='image' accept='.jpg, .jpeg, .png' value=''><br> 

       <h2>Kategorie</h2> 
       <select name="category">
          <option value="Aktuálně">Aktuálně</option>
          <option value="Gastronomie">Gastronomie</option>
          <option value="Volný čas">Volný čas</option>
          <option value="Inspirace">Inspirace</option>
          <option value="Sport">Sport</option>
       </select> <br>

       <button class='createArticle_Form_btn'type='submit' name='submit'>Ulož</button>
    </form>

    </div>

<!-- Footer -->

    <?php require_once 'footer.php' ?>

    
</body>
</html>






