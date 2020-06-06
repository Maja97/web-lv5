<?php
require __DIR__ . "./../DbHandler.php";

use Db\DbHandler;

$catname = $_POST['name'];
$age = $_POST['age'];
$info = $_POST['catInfo'];
$wins = $_POST['wins'];
$loss = $_POST['loss'];
$catimage = $_POST['path'];
$id = $_POST['id'];

$db = new DbHandler();
$db->update("UPDATE cats SET catname='$catname',age='$age',info='$info',wins='$wins',loss='$loss',catimage='$catimage' WHERE id='$id'");
  ?>
