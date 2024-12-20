
<?php
require_once ('./config/loader.php');


?>

<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ورود به سایت</title>
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
      <form class="bg-white rounded-4 px-4 py-3 register-form w-100 mt-5 mb-4" action="./action/login-action.php" method="post" >
        <div>
          <img src="/assets/icons/user-brand-icon.svg" alt="" />
          <span class="ps-2 fs-4">ورود کاربر</span>
        </div>
        <p class="fs-xs text-gray-200 my-3">
          برای ورود ، لطفا اطلاعات خود را وارد کنید.
        </p>
          <?php
          if (isset($_GET['notuser']) && $_GET['notuser']=='ok'){
              ?>

              <div class="alert alert-danger" style="padding-bottom: 0px !important;">
                  <p>نام کاربری یا رمز عبور اشتباه میباشد</p>
              </div>

          <?php
          }
          ?>
          <?php
          if (isset($_GET['login']) && $_GET['login']=='ok'){
              ?>

              <div class="alert alert-success" style="padding-bottom: 0px !important;">
                  <p>با موفقیت وارد شدید</p>
              </div>

              <?php
          }
          ?>
        <div>
          <label class="fs-xs fw-600 mb-2" for="registerEmail"
            >آدرس ایمیل یا شماره تماس</label
          >
          <div class="p-1 bg-gray-300 w-100 d-flex rounded-1 mb-2">
            <div>
              <img
                class="px-2 py-2"
                src="./assets/icons/user-gray-icon.svg"
                alt=""
              />
            </div>
            <input
              id="registerEmail"
              class="register-fields flex-grow-1 bg-gray-300 px-2"
              type="text"
              placeholder="اطلاعات را وارد کنید"
              name="UserData"
            />
          </div>
        </div>
        <div>
          <label class="fs-xs fw-600 mb-2" for="registerPassword"
            >رمز عبور</label
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
              id="registerPassword"
              class="register-fields flex-grow-1 bg-gray-300 px-2"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              name="password"
            />
          </div>
        </div>

        <button type="submit" name="LoginForm" class="w-100 py-2 mt-3 rounded-3 bg-brand text-white">
          ورود
        </button>
          <a href="./otp.php">
          <button type="button" class="w-100 py-2 mt-3 rounded-3 bg-brand text-white">
              ورود با کد یکبار مصرف
          </button>
          </a>
        <div class="d-flex justify-content-center mt-2 fs-xs">
          <span>حساب کاربری ندارید؟</span>
          <a class="text-brand fw-600 ps-1" href="./register.php"
            >ثبت نام کنید!</a
          >
        </div>
      </form>
      <a class="fs-xs">
        <span class="text-white">بازگشت</span>
        <img
          class="w-25"
          src="./assets/icons/arrow-left-white-icon.svg"
          alt=""
        />
      </a>
    </main>
    <script type="module" src="./js/index.js"></script>
    <script src="./js/bootstrap/bootstrap.bundle.min.js"></script>
  </body>
</html>
