// class MainHeader extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//     <nav class="navbar fixed-top bg-c-black navbar-expand-md d-flex flex-column pb-0">
//       <div class="container-lg pb-2 d-flex">
//         <div class="">
//           <a class="navbar-brand w-25 nav-bar-logo" href="/">
//             <img
//               src="../assets/icons/iran-ausbildung-icon.png"
//               alt="logo"
//               class="logo-img"
//             />
//             <span class="fs-5 text-white">ایـــران آوسـبـیـلـدونـــگ</span>
//           </a>
//         </div>
//         <button
//           class="navbar-toggler shadow-none border-0"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasNavbar"
//           aria-controls="offcanvasNavbar"
//         >
//           <span class="navbar-toggler bg-black-500">
//             <img src="../assets/icons/hamburger-icon.svg" alt="hamburger-icon">
//           </span>
//         </button>
//         <div
//           class="offcanvas offcanvas-start w-75 "
//           tabindex="-1"
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//         >
//           <div class="offcanvas-header">
//             <a class="navbar-brand nav-bar-logo" href="#">
//               <img
//                 src="../assets/icons/iran-ausbildung-icon.png"
//                 alt="iran-ausbilding-logo"
//                 class="logo-img"
//               />
//               <span class="fs-5 text-white">ایـــران آوسـبـیـلـدونـــگ</span>
//             </a>
//             <button
//               class="border-0 rounded-2 p-2 d-flex justify-content-center align-items-center"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             >
//               <img src="../assets/icons/left_arrow-line.svg" alt="" />
//             </button>
//           </div>
//           <div class="mt-2 mt-md-0">
//             <form class="search-form d-flex" role="search">
//               <div class="mb-2 w-100 d-flex d-md-none justify-content-betwee mx-2">
//                 <input
//                   class="search-form_input bg-light-gray form-control me-2 font-payda border-0 fs-6 shadow-none"
//                   type="search"
//                   placeholder="جستجو کنید ..."
//                   aria-label="Search"
//                 />
//                 <div
//                   class="d-flex bg-light-gray justify-content-center align-items-center h-full search-icon-container"
//                 >
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 18 18"
//                     fill="#fff"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M17.125 16.2413L12.405 11.5213C13.5393 10.1596 14.1049 8.41303 13.9842 6.64495C13.8635 4.87687 13.0658 3.22338 11.757 2.02846C10.4483 0.833537 8.72922 0.189183 6.95748 0.22944C5.18574 0.269697 3.49773 0.991466 2.2446 2.2446C0.991466 3.49773 0.269697 5.18574 0.22944 6.95748C0.189183 8.72922 0.833537 10.4483 2.02846 11.757C3.22338 13.0658 4.87687 13.8635 6.64495 13.9842C8.41303 14.1049 10.1596 13.5393 11.5213 12.405L16.2413 17.125L17.125 16.2413ZM1.50001 7.12501C1.50001 6.01249 1.82991 4.92496 2.44799 3.99993C3.06608 3.0749 3.94458 2.35393 4.97242 1.92819C6.00025 1.50245 7.13125 1.39105 8.22239 1.60809C9.31354 1.82514 10.3158 2.36087 11.1025 3.14754C11.8892 3.93421 12.4249 4.93649 12.6419 6.02763C12.859 7.11877 12.7476 8.24977 12.3218 9.27761C11.8961 10.3054 11.1751 11.1839 10.2501 11.802C9.32507 12.4201 8.23753 12.75 7.12501 12.75C5.63368 12.7484 4.2039 12.1552 3.14936 11.1007C2.09483 10.0461 1.50167 8.61635 1.50001 7.12501Z"
//                       fill="black"
//                       fill-opacity="0.3"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </form>
//             <ul class="navbar-nav fs-xs d-md-none">
//               <li class="nav-item">
//                 <a
//                   class="nav-link border-bottom py-3 ps-3"
//                   aria-current="page"
//                   href="/"
//                   >صفحه اصلی</a
//                 >
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/ausbildungs.html"
//                   >لیست مشاغل</a
//                 >
//               </li>
//               <li class="nav-item dropdown">
//                 <a
//                   class="nav-link dropdown-toggle border-bottom py-3 ps-3 mt-0"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   خدمات ما
//                 </a>
//                 <ul class="dropdown-menu fs-xs border-0 collapse my-0 py-0" id="jobs">
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="/pages/case-acceptance-form.html"
//                       >پذیرش پرونده</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="/pages/write-resume-form.html"
//                       >نگارش رزومه و انگیزه نامه</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="#"
//                       >بررسی رزومه و انگیزه نامه</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="/pages/score-conversion-page.html"
//                       >تبدیل نمره</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="#"
//                       >مقایسه آوسبیلدونگ ها</a
//                     >
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/ausbildung-blogs.html"
//                   >بلاگ آوسبیلدونگ</a
//                 >
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/contact-us.html"
//                   >ارتباط با ما</a
//                 >
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/about-us.html"
//                   >درباره ما</a
//                 >
//               </li>
//             </ul>
//             </div>
//             <div class="mt-auto ms-md-auto mb-3 mb-md-0 mx-2 d-md-flex align-items-center">
//               <a class="w-100 text-black rounded-2 py-2 border d-flex d-md-none justify-content-center align-content-center" href="/pages/login.html">
//                 <img src="../assets/icons/user-icon.svg" alt="user">
//                 <span class="ps-2">ورود / عضویت</span>
//               </a>
//               <a class="py-md-2 me-md-3 px-md-3 border-0 bg-light-black text-white my-2 rounded-2 py-2 border d-flex justify-content-center align-items-center" href="/pages/case-acceptance-form.html">
//                 <img class="img" src="../assets/icons/airplane.svg" alt="user">
//                 <span class="ps-2">پذیرش پرونده</span>
//               </a>
//               <div class="request-dropdown dropup w-100 w-md-0" id="requestDropdown">
//               <button class="py-2 px-2 rounded-2 bg-brand text-white w-100" onclick="toggleDropdown()">
//               <img src="../assets/icons/chat-icon.svg" alt="user">
//               <span class="ps-2">درخواست مشاوره</span>
//               </button>
//               <div class='w-100 d-flex' >
//               <div class="dropdown-content w-100 text-center mb-1 mb-md-0 mt-md-2 rounded-3">
//                 <!-- Dropdown items go here -->
//                 <a class="d-flex gap-2 text-black py-2 px-2 border-bottom" href="#">
//                 <img src="/assets/icons/flight-airplan-brand-icon.svg" alt="" />
//                 <span class='fs-xs' >مشاوره آوسبیلدونگ</span>
//                 </a>
//                 <a class="d-flex gap-2 text-black py-2 px-2 border-bottom" href="#">
//                 <img src="/assets/icons/education-hat-brand-icon.svg" alt="" />
//                 <span class='fs-xs' >مشاوره تحصیلی</span>
//                 </a>
//                 <a class="d-flex gap-2 text-black py-2 px-2 border-bottom" href="#">
//                 <img src="/assets/icons/bag-brand-icon.svg" alt="" />
//                 <span class='fs-xs' >مشاوره کاری</span>
//                 </a>
//                 <a class="d-flex gap-2 text-black py-2 px-2 border-bottom" href="#">
//                 <img src="/assets/icons/language-line-icon.svg" alt="" />
//                 <span class='fs-xs' >مشاوره آزمون زبان</span>
//                 </a>
//                 <a class="d-flex gap-2 text-black py-2 px-2 border-bottom" href="/pages/military-counseling-form.html">
//                 <img src="/assets/icons/soldier-brand-icon.svg" alt="" />
//                 <span class='fs-xs' >مشاوره نظام وظیفه</span>
//                 </a>
//               </div>
//               </div>
//             </div>
//             </div>
//           </div>
//         </div>
//         <!-- bottom nav -->
//         <div class="container-fluid d-none d-md-block bg-light-gray px-0">
//           <div class="container-lg d-flex pe-3 ps-1">
//           <!-- left -->
//           <div class="w-75">
//             <ul class="navbar-nav custom-font">
//               <li class="nav-item">
//                 <a
//                   class="nav-link border-bottom py-3 ps-3"
//                   aria-current="page"
//                   href="/"
//                   >صفحه اصلی</a
//                 >
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/ausbildungs.html"
//                   >لیست مشاغل</a
//                 >
//               </li>
//               <li class="nav-item dropdown">
//                 <a
//                   class="nav-link dropdown-toggle border-bottom py-3 ps-3 mt-0"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   خدمات ما
//                 </a>
//                 <ul class="dropdown-menu border-0 collapse py-0" id="jobs">
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="/pages/case-acceptance-form.html"
//                       >پذیرش پرونده</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="/pages/write-resume-form.html"
//                       >نگارش رزومه و انگیزه نامه</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="#"
//                       >بررسی رزومه و انگیزه نامه</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="/pages/score-conversion-page.html"
//                       >تبدیل نمره</a
//                     >
//                   </li>
//                   <li>
//                     <a
//                       class="dropdown-item font-payda px-1 border-bottom py-2 ps-4"
//                       href="#"
//                       >مقایسه آوسبیلدونگ ها</a
//                     >
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/ausbildung-blogs.html"
//                   >بلاگ آوسبیلدونگ</a
//                 >
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/contact-us.html"
//                   >ارتباط با ما</a
//                 >
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link border-bottom py-3 ps-3" href="/pages/about-us.html"
//                   >درباره ما</a
//                 >
//               </li>
//             </ul>
//           </div>

//           <!-- right -->
//           <div class="d-flex w-29 justify-content-between align-items-center">
//             <form class="search-form d-flex align-items-center w-100" role="search">
//               <div class="w-100 d-flex justify-content-betwee rounded-2 mx-2 bg-gray">
//                 <input
//                   class="bg-gray search-form_input form-control me-2 font-payda border-0 fs-6 shadow-none"
//                   type="search"
//                   placeholder="جستجو کنید ..."
//                   aria-label="Search"
//                 />
//                 <div
//                   class="d-flex bg-gray search-icon-container justify-content-center align-items-center h-full"
//                 >
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 18 18"
//                     fill="#fff"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M17.125 16.2413L12.405 11.5213C13.5393 10.1596 14.1049 8.41303 13.9842 6.64495C13.8635 4.87687 13.0658 3.22338 11.757 2.02846C10.4483 0.833537 8.72922 0.189183 6.95748 0.22944C5.18574 0.269697 3.49773 0.991466 2.2446 2.2446C0.991466 3.49773 0.269697 5.18574 0.22944 6.95748C0.189183 8.72922 0.833537 10.4483 2.02846 11.757C3.22338 13.0658 4.87687 13.8635 6.64495 13.9842C8.41303 14.1049 10.1596 13.5393 11.5213 12.405L16.2413 17.125L17.125 16.2413ZM1.50001 7.12501C1.50001 6.01249 1.82991 4.92496 2.44799 3.99993C3.06608 3.0749 3.94458 2.35393 4.97242 1.92819C6.00025 1.50245 7.13125 1.39105 8.22239 1.60809C9.31354 1.82514 10.3158 2.36087 11.1025 3.14754C11.8892 3.93421 12.4249 4.93649 12.6419 6.02763C12.859 7.11877 12.7476 8.24977 12.3218 9.27761C11.8961 10.3054 11.1751 11.1839 10.2501 11.802C9.32507 12.4201 8.23753 12.75 7.12501 12.75C5.63368 12.7484 4.2039 12.1552 3.14936 11.1007C2.09483 10.0461 1.50167 8.61635 1.50001 7.12501Z"
//                       fill="black"
//                       fill-opacity="0.3"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </form>
//             <a class="rounded-2 py-2 px-2 bg-gray border d-flex justify-content-center align-content-center" href="/pages/login.html">
//               <img src="../assets/icons/user-icon.svg" alt="user">
//             </a>
//           </div>
//         </div>
//       </div>
//       </div>
//     </nav>
//     `;
//   }
// }

class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-c-black">
    <!-- logo -->
    <div class="d-flex justify-content-center align-items-center py-3">
      <a href="/" class="d-flex align-items-center">
        <img src="../assets/images/Logo.png" alt="">
      </a>
    </div>
    <!-- content -->
    <div class="container-xl">
      <div class="row g-0 gap-0 gap-md-3 gap-lg-0 py-4 justify-content-between border-bottom border-top border-2 border-gray-800">
        <div class="col-lg-4 px-3">
          <p class="text-brand fs-5 fw-500">درباره آوسبیلدونگ</p>
          <p class="lh-lg w-90 fs-xs text-white">
            آوسبیلدونگ سریعترین و ارزانترین راه مهاجرت به آلمان است که این امکان را به متقاضی می‌دهد تا نه تنها در کشور آلمان تحصیل کند بلکه یک حرفه جدید بیاموزد و کسب درآمد داشته باشد.
          </p>
          <div class="d-flex flex-column gap-2">
            <div class="d-flex gap-1 align-items-center">
              <img src="../assets/icons/phone-icon.svg" alt="phone">
              <p class="mb-0 fs-xs text-white">5588558 - 021</p>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <img  class="ms-2" src="../assets/icons/mail-icon.svg" alt="phone">
              <p class="mb-0 fs-xs text-white">info@iranausbildung.com</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 px-3 px-md-0 d-flex my-3 my-md-0">
          <div class="w-50">
            <p class="text-brand fs-5 fw-500">دسترسی سریع</p>
            <div>
              <ul class="ps-0" >
                <li class="mb-4">
                  <a class="fs-xs text-white link" href="#">خدمات ما</a>
                </li>
                <li class="mb-4">
                  <a class="fs-xs text-white mb-2 link" href="#">مطالب منتخب</a>
                </li>
                <li class="mb-4">
                  <a class="fs-xs text-white mb-2 link" href="/pages/contact-us.html">تماس با ما</a>
                </li>
                <li class="mb-4">
                  <a class="fs-xs text-white mb-2 link" href="/pages/about-us.html">درباره ما</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-50">
            <p class="text-brand fs-5 fw-500">خدمات ما</p>
            <div>
              <ul class="ps-0" >
                <li class="mb-4">
                  <a class="fs-xs text-white link" href="#">درخواست مشاوره</a>
                </li>
                <li class="mb-4">
                  <a class="fs-xs text-white mb-2 link" href="/pages/write-resume-form.html">فرم رزومه و انگیزه نامه</a>
                </li>
                <li class="mb-4">
                  <a class="fs-xs text-white mb-2 link" href="/pages/score-conversion-page.html">تبدیل نمره</a>
                </li>
                <li class="mb-4">
                  <a class="fs-xs text-white mb-2 link" href="/pages/ausbildung-comparison.html">مقایسه آوسبیلدونگ ها</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 px-3 px-md-0">
          <p class="text-brand fs-5 fw-500">نماد های اعتبار ما</p>
          <div class="d-flex" >
            <div class="d-flex gap-2">
              <a href="">
                <img class="img-fluid" src="../assets/images/trust-symbol.png" alt="">
              </a>
              <a href="">
              <img class="img-fluid" src="../assets/images/zarin-pal-symbol.png" alt="">
              </a>
            </div>
            <div class="d-flex flex-column justify-content-evenly ms-2">
              <a class="fs-x-small d-flex justify-content-center align-items-center py-2 rounded-2 bg-black-500  link text-white px-2" href="">
                نماد وزارت گردشگری
              </a>
              <a class="fs-x-small d-flex justify-content-center align-items-center py-2 rounded-2 bg-black-500  link text-white px-2" href="">
                نماد وزارت علوم کشور
              </a>
            </div>
          </div>
          <div>
          </div>
          <div class="pb-3 pb-md-0">
          <p class="text-brand fs-5 fw-500 my-3">عضویت در خبرنامه</p>
          <form class="newsletters-container d-flex w-md-90">
            <input class="fs-xs border-0 bg-black-500 px-3 py-2" type="text" placeholder="ایمیل خود را وارد کنید" >
            <button class="fs-xs bg-brand px-1 px-md-3 text-white border-0" >عضویت در خبر نامه</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    <!-- copyright -->
    <div class="container footer-copyright d-flex flex-column flex-md-row justify-content-between align-items-center py-3 px-1" >
      <div class="d-flex align-items-center px-2">
        <img class="img-fluid d-none d-md-block" src="../assets/icons/copyright-icon.svg" alt="">
        <span class="text-white-50 ps-1 text-center py-3 py-md-0" style="font-size: 12px;">برای استفاده از مطالب ایران آوسبیلدونگ، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست.  در غیر این‌صورت هرگونه کپی‌برداری، برداشت و بازنشر بخش یا کل هر کدام از محتوا‌ های ارائه شده تنها با کسب مجوز مکتوب امکان پذیر خواهد بود.</span>
      </div>
      <div class="d-flex gap-3 footer-copyright-media">
        <a class="p-1 rounded-2 bg-black-500 d-flex justify-content-center align-items-center">
          <img  src="../assets/icons/youtube-sm-icon.svg" alt="">
        </a>
        <!-- fixBug: change x social media icon in footer -->
        <a class="p-1 rounded-2 bg-black-500 d-flex justify-content-center align-items-center">
                      <img
              class="social-icon-sm"
              src="../assets/icons/x-white-small-icon.svg"
              alt=""
            />
        </a>
        <a class="p-1 rounded-2 bg-black-500 d-flex justify-content-center align-items-center">
          <img  src="../assets/icons/telegram-sm-icon.svg" alt="">
        </a>
        <a class="p-1 rounded-2 bg-black-500 d-flex justify-content-center align-items-center">
          <img  src="../assets/icons/instagram-sm-icon.svg" alt="">
        </a>
      </div>
    </div>
  </footer>
    `;
  }
}

class SocialMedia extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="my-4 mx-3">
    <div class="social-media-container rounded-3 container bg-brand d-flex flex-column flex-md-row align-items-center justify-content-between" >
      <div>
        <p class="fw-500 my-3 fs-6 lh-lg my-md-0 text-center text-md-start text-white font-morabba fs-5 fw-600" >
          ایران آوسبیلدونگ را در شبکه های اجتماعی دنبال کنید
        </p>
      </div>
      <div class="social-media-icons d-flex gap-3">
        <div class="p-1 rounded-1 bg-white d-flex justify-content-center align-items-center pointer">
          <img src="../assets/icons/youtube-icon.svg" alt="">
        </div>
        <div class="p-1 rounded-1 bg-white d-flex justify-content-center align-items-center pointer">
        <!-- change x social media icon -->
          <img src="../assets/icons/x-social-brand-icon.svg" alt="">
        </div>
        <div class="p-1 rounded-1 bg-white d-flex justify-content-center align-items-center pointer">
          <img src="../assets/icons/telegram-icon.svg" alt="">
        </div>
        <div class="p-1 rounded-1 bg-white d-flex justify-content-center align-items-center pointer">
          <img src="../assets/icons/instagram-icon.svg" alt="">
        </div>
      </div>
    </div>
  </section>
    `;
  }
}

class CommentSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="row container g-0 h-100">
    <section class="col-md-8 col-xl-9">
      <div
        class="comment-container me-md-3 border rounded-3 p-4 my-3 my-md-0"
      >
        <div>
          <img src="/assets/icons/message-icon.svg" alt="" />
          <span class="fw-600 fs-5 ps-2">دیدگاه خود را بنویسید</span>
        </div>
        <form class="comment-form" action="">
          <div class="w-md-90 row my-3 g-0">
            <div class="col-md-6 pe-md-3">
              <input
                class="mb-3 mb-md-0 bg-ultraLight-gray w-100 px-2 rounded-2"
                placeholder="نام خود را وارد کنید"
                type="text"
              />
            </div>
            <div class="col-md-6 pe-md-3">
              <input
                class="mb-3 mb-md-0 bg-ultraLight-gray w-100 px-2 rounded-2"
                placeholder="ایمیل خود را وارد کنید"
                type="text"
              />
            </div>
          </div>
          <textarea
            class="w-100 bg-ultraLight-gray border-0 rounded-3 p-2 fs-xs"
            name=""
            id=""
            rows="8"
            placeholder="دیدگاه خود را بنویسید"
          ></textarea>
          <div class="d-flex justify-content-end">
            <button
              class="bg-brand rounded-2 text-white px-3 py-2 my-3 fs-xs"
            >
              ارسال نظر
            </button>
          </div>
        </form>
        <!-- comment messages -->
        <div>
          <!-- header -->
          <div class="border user-comment py-3 px-3 px-md-4 rounded-3">
            <div class="d-flex justify-content-between">
              <div class="d-flex gap-2">
                <img
                  class="img-fluid user-img rounded-4 border border-3"
                  src="/assets/images/user-img.jpg"
                  alt=""
                />
                <div>
                  <p class="mb-0 fw-600">مریم محمدی</p>
                  <p class="mb-0 fs-xs text-gray-200">کاربر آوسبیلدونگ</p>
                </div>
              </div>
              <div class="d-flex gap-2 gap-md-4">
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid like-icon"
                    src="/assets/icons/dislike-icon.svg"
                    alt=""
                  />
                  <span class="fs-xs mt-1 ms-1">2</span>
                </div>
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid like-icon"
                    src="/assets/icons/like-icon.svg"
                    alt=""
                  />
                  <span class="fs-xs mt-1 ms-1">14</span>
                </div>
              </div>
            </div>
            <!-- message -->
            <p class="fs-extra-small lh-lg my-3 text-gray-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
              با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
              و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
              آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
              افزارها شناخت بیشتری را برای طراحان رایانه ای است.
            </p>
            <!-- awnser -->
            <div class="d-flex justify-content-end align-items-center">
              <img src="/assets/icons/reply-brand-icon.svg" alt="" />
              <span class="text-brand fw-500 fs-extra-small ms-1"
                >پاسخ</span
              >
            </div>
          </div>
          <div class="d-flex justify-content-center my-3">
            <div class="d-flex justify-content-center w-100 align-items-center">
              <span class="text-brand fw-500 pe-2">نظرات بیشتر</span>
              <img src="/assets/icons/arrow-down.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="d-none d-md-flex col-md-4 col-xl-3 h-100 d-flex flex-column gap-2"
    >
      <div
        class="h-50 d-flex justify-content-center align-items-center bg-ultraLight-gray"
      >
        ad
      </div>
      <div
        class="h-50 d-flex justify-content-center align-items-center bg-ultraLight-gray"
      >
        ad
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('main-header', MainHeader);
customElements.define('main-footer', MainFooter);
customElements.define('social-media', SocialMedia);
customElements.define('comment-section', CommentSection);

function toggleDropdown() {
  var dropdown = document.getElementById('requestDropdown');
  dropdown.classList.toggle('active');
}

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function (event) {
  var requestDropdown = document.getElementById('requestDropdown');
  if (
    !event.target.matches('.btn') &&
    !requestDropdown.contains(event.target)
  ) {
    requestDropdown.classList.remove('active');
  }
});
