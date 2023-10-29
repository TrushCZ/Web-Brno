<?php
// General

require_once 'src/DBconnection.php';
session_start();

//Flashing

if (!empty($_SESSION['success_message'])) {
    $success_message = [];
    $success_message[] = $_SESSION['success_message'];
    unset($_SESSION['success_message']);
}
if (!empty($_SESSION['errors'])) {
    $errors = [];
    $errors[] = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

// Getting data from DB + reverse order

    $query = 'SELECT * FROM `Články` ORDER BY `Id` DESC';
    $result = mysqli_query($connection, $query);
    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type='image/png' href="img/Favicony.png">
    <link rel="stylesheet" href="css/style.css">
    <title>BRNOtoday_články</title>
</head>
<body>

<!-- Header -->
    <?php require_once 'header.php' ?>

    <div class='container_editArticles'>
        <div class='container_editArticles_emptySpace'></div>

<!-- Notifying user -->
    <?php if (isset($success_message)) : ?>
        <?php foreach($success_message as $success) : ?>
            <div class='notification_success'><h3><?= $success?></h3></div> 
        <?php endforeach; ?>     
    <?php endif; ?>    
    <?php if (isset($errors)) : ?>
        <?php foreach($errors as $error) : ?>
            <div class='notification_success'><h3><?= $error ?></h3></div>
        <?php endforeach; ?>     
    <?php endif; ?>    

<!-- Form -->
        
    <h2 class='container_editArticles_h2'>Editace článků</h2>
    <div class='container_editArticles_btnCreate' ><a href="create.php">VYTVOŘIT NOVÝ ČLÁNEK</a></div>

    <?php foreach($result as $results) : ?>

    <table class='container_editArticles_table' >
        <tr class='container_editArticles_table_row'>
            <td class='container_editArticles_table_header'><a href="edit.php?id=<?=$results['Id']?>"><?=$results['Header']?><a></td>
            <td class='container_editArticles_table_category'><p><?=$results['Category']?></p></td>
            <td class='container_editArticles_table_time'><p><?=$results['Created_at']?></p></td>
            <td class='container_editArticles_table_btn'><a href="edit.php?id=<?=$results['Id']?>">UPRAVIT</a></td>
            <td class='container_editArticles_table_btn'><a href="delete.php?id=<?=$results['Id']?>">SMAZAT</a></td>
        </tr>
    </table>

    <?php endforeach ; ?> 
    
    </div>
    
<!-- Footer -->
    <?php require_once 'footer.php' ?>    

</body>
</html>










