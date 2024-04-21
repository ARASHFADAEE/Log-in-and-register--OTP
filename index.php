
<?php

require_once ('./config/loader.php');




?>


<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

        <form>
        <h1>Sign In</h1>
        <div class="social-icons">
          <a href="#" class="icons"><i class="fa-brands fa-google-plus-g"></i></a>
          <a href="#" class="icons"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="icons"><i class="fa-brands fa-github"></i></a>
          <a href="#" class="icons"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
        <span>or use your email/password</span>
        <input type="text" placeholder="Mobile / Email / UserName">
        <input type="password" placeholder="Password">
        <a href="#">Forget your Password?</a>

            <button>Sign In</button>
            <a style="font-weight: bold" href="otp.php">Send Otp </a>




        </form>

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
<script src="assets/js/script.js"></script>
</html>