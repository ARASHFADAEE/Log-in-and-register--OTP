
<form method="post" action="./action/sign-in.php">
    <h1>Sign In</h1>

    <span>or use your email/password</span>
    <input type="text" name="key" placeholder="Mobile / Email / UserName">
    <input type="password" name="password" placeholder="Password">
    <a href="#">Forget your Password?</a>

    <button type="submit" name="signin">Sign In</button>
    <a style="font-weight: bold" href="./otp.php">Send Otp </a>

    <?php
    if(isset($_GET['notuser'])){?>
    <p class="alert alert-danger  ">user not found</p>
    <?php
    }elseif (isset($_GET['userlogin'])){?>
        <p class="alert alert-success  ">login to website</p>
<?php
    }


    ?>




</form>
