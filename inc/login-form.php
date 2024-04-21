
<form method="post" action="./action/sign-in.php">
    <h1>Sign In</h1>
    <div class="social-icons">
        <a href="#" class="icons"><i class="fa-brands fa-google-plus-g"></i></a>
        <a href="#" class="icons"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" class="icons"><i class="fa-brands fa-github"></i></a>
        <a href="#" class="icons"><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
    <span>or use your email/password</span>
    <input type="text" name="key" placeholder="Mobile / Email / UserName">
    <input type="password" name="password" placeholder="Password">
    <a href="#">Forget your Password?</a>

    <button type="submit" name="signin">Sign In</button>
    <a style="font-weight: bold" href="./otp.php">Send Otp </a>

    <?php
    if(isset($_GET['notuser'])){?>
    <p>user not found</p>
    <?php
    }


    ?>




</form>
