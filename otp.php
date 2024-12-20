
<?php

require_once ('./config/loader.php');

if (isset($_POST['otpsend'])){

    try {
        $mobile = $_POST['phoneotp'];

        //SQL
        $query = "SELECT * FROM `users` WHERE (`mobile`= :key OR `email`= :key)";


        //stmt

        $stmt =$conn->prepare($query);

        //bind
        $stmt->bindValue(":key",$mobile);


        $stmt->execute();

        $hasuser=$stmt->Rowcount();

        if($hasuser){

            $rand=rand(10000,99999);

            //sql

            $save_otp="UPDATE `users` SET `otp`=? WHERE mobile=? OR email=?";

            $stmt =$conn->prepare($save_otp);

            $stmt->bindValue(1,$rand);
            $stmt->bindValue(2,$mobile);
            $stmt->bindValue(3,$mobile);



            $stmt->execute();

            $smsnow->send_sms($mobile,257970,$rand);

            header('location: ./otp.php?otp=ok&mobile='.$mobile);

        }else{
            header('location: ./otp.php?usernot=ok');

        }


    }catch (PDFlibException $e){
        echo $e->getMessage();
    }



}


if(isset($_POST['check_otp'])){
    $otp=$_POST['otp_code'];
    $mobile_otp=$_GET['mobile'];


    try {

        //SQL
        $query = "SELECT * FROM `users` WHERE (`mobile`= :key OR `email`= :key) AND `otp`=:otp ";


        //stmt

        $stmt =$conn->prepare($query);

        //bind
        $stmt->bindValue(":key",$mobile_otp);
        $stmt->bindValue(":otp",$otp);



        $stmt->execute();

        $hasuser=$stmt->Rowcount();


        if($hasuser){
            header('location: ./otp.php?otp_verify=ok');
        }else{
            header('location: ./otp.php?otp_verify=notfound');

        }



    }catch (PDFlibException $e){
        echo  $e->getMessage();
    }

}


?>


<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>احراز هویت</title>
    <link
      rel="icon"
      href="./assets/icons/iran-ausbildung-icon.png"
      type="image/x-icon"
          />
    <link rel="stylesheet" href="./styles/normalize.css" />
    <link rel="stylesheet" href="./styles/bootstrap.rtl.min.css" />
    <link rel="stylesheet" href="./styles/style.css" />
  </head>
  <body>
    <main class="register-page px-3">
      <div>
        <a class="navbar-brand nav-bar-logo" href="/">
          <img
            src="./assets/icons/iran-ausbildung-icon.png"
            alt="logo"
            class="logo-img"
/>
          <span class="fs-6 text-white ps-1">ایـــران آوسـبـیـلـدونـــگ</span>
        </a>
      </div>
      <form class="bg-white rounded-4 px-4 py-3 register-form w-100 mt-5 mb-4"  method="post" >
          <?php
          if (isset($_GET['usernot']) && $_GET['usernot']=='ok'){
          ?>

          <div class="alert alert-danger" style="padding-bottom: 0px !important;">
              <p>شماره شما در سایت ثبت نشده لطفا ثبت نام کنید</p>
          </div>

          <?php
          }
          ?>

          <?php
          if (isset($_GET['otp_verify']) && $_GET['otp_verify']=='notfound'){
          ?>
          <div class="alert alert-danger" style="padding-bottom: 0px !important;">
              <p>کد وارد شده اشتباه میباشد</p>
          </div>
          <?php
          }
          ?>

          <?php
          if (isset($_GET['otp_verify']) && $_GET['otp_verify']=='ok'){
              ?>
              <div class="alert alert-success" style="padding-bottom: 0px !important;">
                  <p>ورود با موفقیت انجام شد</p>
              </div>
              <?php
          }
          ?>


          <?php
          if (!isset($_GET['otp'])){
          ?>
        <p class="fs-xs text-gray-200 my-3">
برای ورود لطفا شماره تلفن همراه خود را وارد کنید
        </p>
          <?php }?>
        <div>

            <?php
            if (isset($_GET['otp']) && $_GET['otp']=='ok'){
                ?>

                <div>
                    <label class="fs-xs fw-600 mb-2" for="registerEmail"
                    >کد یک بار مصرف پیامک شده:</label
                    >
                    <div class="p-1 bg-gray-300 w-100 d-flex rounded-1 mb-2">
                        <div>
                            <img
                                    class="px-2 py-2"
                                    src="./assets/icons/lock-open-icon-svg.svg"
                                    alt=""
                            />
                        </div>
                        <input
                                id="registerEmail"
                                class="register-fields flex-grow-1 bg-gray-300 px-2"
                                type="text"
                                placeholder="مثال 1234"
                                name="otp_code"
                        />
                    </div>
                </div>
            <?php
            }else{

            ?>

          <div class="p-1 bg-gray-300 w-100 d-flex rounded-1 mb-2">
            <div>
              <img
                class="px-2 py-2"
                src="./assets/icons/phone-gray-icon.svg"
                alt=""
                    />
            </div>
            <input
              id="registerEmail"
              class="register-fields flex-grow-1 bg-gray-300 px-2"
              type="text"
              placeholder="مثال 09123456789"
              name="phoneotp"
                  />
          </div>
        </div>

<?php }?>
          <?php
          if (isset($_GET['otp']) && $_GET['otp']=='ok'){
          ?>
          <button type="submit" name="check_otp" class="w-100 py-2 mt-3 rounded-3 bg-brand text-white">
برسی کد تایید
        </button>
<?php }else{?>

              <button type="submit" name="otpsend" class="w-100 py-2 mt-3 rounded-3 bg-brand text-white">
                  ارسال کد تایید
              </button>
          <?php }?>
      </form>

    </main>
    <script type="module" src="./js/index.js"></script>
    <script src="./js/bootstrap/bootstrap.bundle.min.js"></script>
  </body>
</html>
