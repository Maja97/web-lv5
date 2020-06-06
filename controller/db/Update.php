<?php
require __DIR__ . "./../DbHandler.php";

use Db\DbHandler;

    $winner = $_POST['winner'];
    $loser = $_POST['loser'];

$db = new DbHandler();
$db->update("UPDATE cats SET wins = wins+1 WHERE catname = '$winner'");
$db->update("UPDATE cats SET loss = loss+1 WHERE catname = '$loser'");

  ?>
