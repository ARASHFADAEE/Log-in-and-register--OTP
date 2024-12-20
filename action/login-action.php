<?php

require_once ('../config/loader.php');

if (isset($_POST['LoginForm'])){

    try {

        $key=$_POST['UserData'];
        $password=$_POST['password'];
        //SQL
        $query = "SELECT * FROM `users` WHERE (`mobile`= :key OR `email`= :key) AND (password = :password )";


        //stmt
        $stmt =$conn->prepare($query);

        //bind
        $stmt->bindValue(":key",$key);
        $stmt->bindValue(":password",$password);


        $stmt->execute();

        $hasuser=$stmt->Rowcount();

        if($hasuser){
            header('location:../login.php?login=ok');
        }else{
            header('location:../login.php?notuser=ok');
        }

    }catch (PDFlibException $e){

        echo  $e;

    }
}