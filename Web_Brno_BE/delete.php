<?php 

// General

require_once 'src/DBconnection.php';

session_start();

$id = $_GET['id'];

//DB connection

$query = "DELETE FROM `Články` WHERE `Id` = '$id'";
$result = mysqli_query($connection, $query);

$_SESSION['success_message'] = 'Úspěšně smazáno';

header('Location: index.php');