<?php
require_once ('../config/loader.php');

if(isset($_POST['signup'])){

    try {
        $username=$_POST['username'];
        $password=$_POST['password'];
        $phone=$_POST['phone'];
        $email=$_POST['email'];
        //sql
        $query="INSERT INTO users SET  username=? , password=? , mobile=?  , email=?";
        //stmt
        $stmt = $conn->prepare($query);

        //bind
        $stmt->bindValue(1 , $username);
        $stmt->bindValue(2 , $password);
        $stmt->bindValue(3 , $phone);
        $stmt->bindValue(4 , $email);

        //exe
        $stmt->execute();


        //redirect
        header('location:../index.php');
    }catch (PDOException $e){
        echo $e;
    }






}
