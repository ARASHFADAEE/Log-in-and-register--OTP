<?php
require_once './config/loader.php';

if(isset($_POST['send-mobile'])) {
    $mobile_number = $_POST['mobile'];

    try {
        $key = $_POST['send-mobile'];

        //sql
        $query = "SELECT * FROM `users` WHERE (username = :key OR mobile = :key OR email = :key)";
        //stmt
        $stmt = $conn->prepare($query);

        //bind
        $stmt->bindValue(":key", $mobile_number);


        //exe
        $stmt->execute();

        $hasuser = $stmt->rowCount();
        if (!$hasuser) {
            header('location:./otp.php?error=notuser');
        }else{
            header('location:./otp.php?success=true');

        }


    }catch (PDOException $e) {
        echo $e;
    };


    include_once './config/sms-panel.php';
    $opt = rand(1000, 9999);
    $verify= new verify($api_rahpayam,$pattern_rahpayam);
    $verify->send_otp($opt,$mobile_number);

};

?>


<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>login and register with otp</title>
</head>

<body>
<div class="container" id="container">
    <div class="form-container sign-up">
        <!----------------------------------signup-------------------------------------->
        <?php include_once './inc/register-form.php'?>

        <!----------------------------------end signup-------------------------------------->

    </div>
    <div class="form-container sign-in">
        <!----------------------------------Login-------------------------------------->

        <form method="post">
            <h1>OTP</h1>

            <span>OTP</span>
            <?php
            if(isset($_GET['success'])){
                echo '<input type="number" placeholder="enter your Otp Code">';

            }else{
                echo '<input type="text" name="mobile" placeholder="enter your phone number ">
';
            }

            ?>

            <a href="#">Forget your Password?</a>
            <?php
            if(isset($_GET['success'])){
                echo '<button type="submit" name="send-mobile">Check Otp</button>';

            }else{
                echo '<button type="submit" name="send-mobile">Send to mobile</button>';
            }

            ?>

            <?php
            if(isset($_GET['error'])){
                echo '<p class="alert alert-danger  ">user not found</p>';

            };
            if(isset($_GET['success'])){
                echo '<p class="alert alert-success  ">otp code send to mobile</p>';

            };

            ?>
        <!----------------------------------End Login-------------------------------------->

    </div>
    <div class="toggle-container">
        <div class="toggle">
            <div class="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your Personal details to use all of site features</p>
                <button class="hidden" id="login">Sign In</button>
            </div>
            <div class="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your Personal details to use all of site features</p>
                <button class="hidden" id="register">Sign Up</button>
            </div>
        </div>
    </div>
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<script src="assets/js/script.js"></script>
</html>