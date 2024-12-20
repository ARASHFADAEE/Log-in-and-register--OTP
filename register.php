<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ثبت نام در سایت</title>
    <link
      rel="icon"
      href="../assets/icons/iran-ausbildung-icon.png"
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
      <form  class="bg-white rounded-4 px-4 py-3 register-form w-100 mt-3 mb-4" method="post"  action="action/register-action.php" >
        <div class="d-flex align-items-center">
          <img src="/assets/icons/user-brand-icon.svg" alt="" />
          <span class="ps-2 fs-4">ثبت نام</span>
        </div>
        <p class="fs-xs text-gray-200 my-3">
          جهت ثبت نام ، لطفا اطلاعات زیر را وارد کنید
        </p>

        <div>
          <label class="fs-xs fw-600 mb-1" for="registerEmail"
            >نام و نام خانوادگی</label
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
              name="name"
            />
          </div>
        </div>
        <div>
          <label class="fs-xs fw-600 mb-1" for="registerPassword"
            >شماره تماس</label
          >
          <div class="p-1 bg-gray-300 w-100 d-flex rounded-1 mb-2">
            <div>
              <img
                class="px-2 py-2"
                src="./assets/icons/phone-gray-icon.svg"
                alt=""
              />
            </div>
            <input
              id="registerPassword"
              class="register-fields flex-grow-1 bg-gray-300 px-2"
              type="text"
              placeholder="مانند :  789 3456 0912"
              name="mobile"
            />
          </div>
        </div>
        <div>
          <label class="fs-xs fw-600 mb-1" for="registerEmail"
            >آدرس ایمیل
          </label>
          <div class="p-1 bg-gray-300 w-100 d-flex rounded-1 mb-2">
            <div>
              <img
                class="px-2 py-2"
                src="./assets/icons/alternate-email-icon.svg"
                alt=""
              />
            </div>
            <input
              id="registerEmail"
              class="register-fields flex-grow-1 bg-gray-300 px-2"
              type="email"
              placeholder="مانند : example@gmail.com"
              name='email'
            />
          </div>
        </div>
        <div>
          <label class="fs-xs fw-600 mb-1" for="registerPassword"
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
        <button name="registerform" type="submit" class="w-100 py-2 mt-3 rounded-3 bg-brand text-white">
          ثبت نام در سایت
        </button>
        <div class="d-flex justify-content-center mt-2 fs-xs">
          <span>حساب کاربری دارید؟</span>
          <a  class="text-brand fw-600 ps-1" href="./login.php"
            >وارد شوید</a
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
