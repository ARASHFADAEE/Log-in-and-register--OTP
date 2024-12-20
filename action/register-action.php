<?php

require_once ('../config/loader.php');

if (isset($_POST['registerform'])){

    try {
        $Name=$_POST['name'];
        $Email=$_POST['email'];
        $Password=$_POST['password'];
        $Mobile=$_POST['mobile'];

        //SQL
        $query = "INSERT INTO users SET name=? , email=?, password=?,mobile=?";


        //stmt

        $stmt =$conn->prepare($query);

        //bind
        $stmt->bindValue(1,$Name);
        $stmt->bindValue(2,$Email);
        $stmt->bindValue(3,$Password);
        $stmt->bindValue(4,$Mobile);

        $stmt->execute();

        echo 'ok shod';
        header('location:../login.php');
    }catch (PDFlibException $e){
        echo $e;
    }




}