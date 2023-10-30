<?php

// General

require_once 'src/Article.php';
require_once 'src/DBconnection.php';

session_start();

// Flashing

if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

if (isset($_POST['success_message'])) {
    $success_message = $_POST['success_message'];
    unset($_POST['success_message']);
}

//Getting data

$id = $_GET['id'];
$query = "SELECT * FROM `Články` WHERE `Id` = '$id'";
$result = mysqli_query($connection, $query);
$result_final = mysqli_fetch_assoc($result);

?>

<!DOCTYPE html>
<html lang="cz">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type='image/png' href="img/Favicony.png">
    <link rel="stylesheet" href="css/style.css">
    <title>Upravit článek</title>
</head>
<body>

<!-- Header -->

<?php require_once 'header.php' ?>

<!-- Container     -->

    <div class='container_createArticle_form'>
       <div class='container_editArticles_emptySpace'></div>

<!-- Notifying users if error or successfully inserted -->

<?php if(!empty($errors)) : ?>
    <?php foreach($errors as $error) : ?>
        <div class='notification_success'><h3><?= $error  ?></h3></div>
    <?php endforeach; ?>
<?php endif; ?>    

<?php if (!empty($success_message)) : ?>
    <?php foreach($success_message as $success) : ?>
        <div class='notification_success'><h3><?= $success ?></h3></div>
    <?php endforeach; ?>
<?php endif; ?>

<!-- Prefilled form for updating-->

<h2 class='container_editArticles_h2'>Editace článku</h2>

    <form class='createArticle_Form' action="update.php?id=<?=$id?>"  method='post' autocomplete='off' enctype='multipart/form-data'>

       <h2>Nadpis</h2>
       <input class='createArticle_Form_header' type="text" name='header' value='<?= htmlspecialchars((string)$result_final['Header'])?>'> <br> 

       <h2>Perex</h2>
       <textarea class='createArticle_Form_perex' name='perex' cols="30" rows="10"><?= htmlspecialchars((string)$result_final['Perex'])?></textarea><br>

       <h2>Text</h2>
       <textarea class='createArticle_Form_text' name='text' cols="30" rows="10"><?= htmlspecialchars((string)$result_final['Text'])?></textarea><br>
       
       <h2>Hlavní obrázek</h2>
       <label for="name">Název: </label><input type="text" name='name' id='name' requierd value='<?= htmlspecialchars($result_final['MainImg_Name'])?>'><br>
       <input type="file" name='image' id='image' accept='.jpg, .jpeg, .png' value=''><br> 

       <h2>Kategorie</h2>
       <select name="category" value=''>
          <option value="Aktuálně"
          <?= $selected = "selected='selected'"; ?>
          <?php if($result_final['Category'] == 'Aktuálně') : ?>
            <?= $selected; ?>
            <?php endif; ?>
          >Aktuálně</option>

          <option value="Gastronomie"
          <?php if ($result_final['Category'] == 'Gastronomie') : ?>
            <?= $selected; ?>
            <?php endif; ?>
          >Gastronomie</option>

          <option value="Volný čas"
          <?php if ($result_final['Category'] == 'Volný čas') : ?>
            <?= $selected; ?>
            <?php endif; ?>
          >Volný čas</option>

          <option value="Inspirace"
          <?php if ($result_final['Category'] == 'Inspirace') : ?>
            <?= $selected; ?>
            <?php endif; ?>
          >Inspirace</option>

          <option value="Sport"
          <?php if ($result_final['Category'] == 'Sport') : ?>
            <?= $selected; ?>
            <?php endif; ?>
          >Sport</option>
       </select> <br>

       <h2>Zajímavé</h2> 
       <select name="interesting">
          <option value="Ano"
            <?php if ($result_final['Interesting'] == 'Ano') : ?>
              <?= $selected ?>
            <?php endif; ?> 
          >Ano</option>

          <option value="Ne"
            <?php if ($result_final['Interesting'] == 'Ne') : ?>
              <?= $selected ?>
            <?php endif; ?> 
          >Ne</option>
       </select> <br>

       <!-- Ivisible input - just to send ID to update.php -->

       <input type="number" name='invisibleInputID' value='<?=$id?>' style='display:none'>

       <button class='createArticle_Form_btn' type='submit' name='submit'>Upravit</button>
    </form>

    </div>

<!-- Footer -->

      <?php require_once 'footer.php' ?>

    </body>
    </html>






