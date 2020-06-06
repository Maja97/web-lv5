<?php
require __DIR__ . "./../DbHandler.php";

use Db\DbHandler;

if (($_FILES['file']['name']!="")){
    // Where the file is going to be stored
     $target_dir = "../../img/";
     $file = $_FILES['file']['name'];
     $path = pathinfo($file);
     $filename = $path['filename'];
     $ext = $path['extension'];
     $temp_name = $_FILES['file']['tmp_name'];
     $path_filename_ext = $target_dir.$filename.".".$ext;
     
    // Check if file already exists
    if (file_exists($path_filename_ext)) {
     echo "Sorry, file already exists.";
     }else{
     move_uploaded_file($temp_name,$path_filename_ext);
     }}
$catname = $_POST['name'];
$age = $_POST['age'];
$info = $_POST['catInfo'];
$wins = $_POST['wins'];
$loss = $_POST['loss'];
$catimage = substr($path_filename_ext, 4);

$db = new DbHandler();
$db->insert("INSERT INTO cats(catname,age,info,wins,loss,catimage) VALUES ('$catname','$age','$info','$wins','$loss','$catimage')");
$db->updateIndex("UPDATE cats SET id=@a:=@a+1");


  ?>
