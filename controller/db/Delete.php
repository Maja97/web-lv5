<?php
require __DIR__ . "./../DbHandler.php";

use Db\DbHandler;

$id = $_GET['id'];

$db = new DbHandler();
$db->delete("$id");
$db->updateIndex("UPDATE cats SET id=@a:=@a+1");
  ?>