<?php
global $conn;
require_once ('../config/loader.php');


require_once('../config/loader.php');

if (isset($_POST['signin'])) {

    try {
        $key = $_POST['key'];
        $password = $_POST['password'];

        //sql
        $query = "SELECT * FROM `users` WHERE (username = :key OR mobile = :key OR email = :key) AND (password = :password)";
        //stmt
        $stmt = $conn->prepare($query);

        //bind
        $stmt->bindValue(":key", $key);
        $stmt->bindValue(':password', $password);


        //exe
        $stmt->execute();

        $hasuser= $stmt->rowCount();
        if($hasuser===1){
            echo "your loggined";

        }else{
            header('location:../index.php?notuser==ok');
        }

        //redirect
//        header('location:../index.php');
    } catch (PDOException $e) {
        echo $e;
    }


}
