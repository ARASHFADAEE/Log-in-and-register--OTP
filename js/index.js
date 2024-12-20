import {
  startSteps,
  ausbildungBlogs,
  jobsSlider,
  bestAusbildungs,
  telegramChanels,
  ausbildungFields,
  userReviews,
} from './common/common.js';

const stepsContainer = document.querySelector('.steps-container');
const blogsContainer = document.querySelector('.blogs-container');
const jobsSwiperContainer = document.querySelector('.job-swiper-container');
const bestAusbildungSlider = document.querySelector('.best-ausbildung-slider');
const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');
// const telegramChanelsContainer = document.querySelector(
//   '.telegram-chanels-container'
// );
const userReviewsContainer = document.querySelector('.user-reviews-slides');
document.querySelector('.ausbildung-fields-container');

// main page

// const showJobsSwiper = (data) => {
//   let result = '';
//   data.map((item) => {
//     result += `
//     <div class="swiper-slide job-slide mx-2 rounded-3 d-flex flex-column justify-content-between px-4 pt-3">
//       <div class="d-flex justify-content-between font-morabba fw-600 fs-x-small">
//         <span>${item.titleFa}</span>
//         <span class="text-brand">${item.titleDe}</span>
//       </div>
//       <div class="job-slide-img">
//         <img class="" src=${item.imgUrl} alt=${item.titleFa}>
//       </div>
//     </div>
//     `;
//     jobsSwiperContainer.innerHTML = result;
//   });
// };

// const showSteps = (data) => {
//   let result = '';
//   data.map((item) => {
//     result += `
//     <div class="step rounded-3 d-flex align-items-center col-6 position-relative fs-xs text-center col-md-1 px-2 bg-ultraLight-gray">
//       <p class="position-absolute fs-2 fw-bold text-brand">${item.id} 0</p>
//       <p class="mb-0" >${item.description}</p>
//     </div>
//     `;
//     stepsContainer.innerHTML = result;
//   });
// };

// best ausbildung

var swiper = new Swiper('.best-ausbildung-swiper', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    370: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
  spaceBetween: 40,
  grabCursor: true,
  navigation: {
    nextEl: '.best-ausbildung-next-btn',
    prevEl: '.best-ausbildung-prev-btn',
  },
});

// const bestAusbildungSwiper = (data) => {
//   let result = '';
//   data.map((item) => {
//     result += `
//     <div
//     class="swiper-slide text-black d-flex bg-white flex-md-column p-3 gap-3 gap-md-2 border align-items-center justify-content-center rounded-3"
//   >
//     <a href="/pages/ausbildung.html" class="w-md-100 best-ausbildung-image">
//       <img
//         class="rounded-2"
//         src=${item.imgUrl}
//         alt=${item.titleFa}
//       />
//     </a>
//     <div
//       class="w-50 w-md-100 h-100 text-center d-flex flex-column"
//     >
//       <a class='text-black' href='/pages/ausbildung.html' >
//         <p class="mb-0 fs-xs fw-500">${item.titleFa}</p>
//         <p class="mb-0 fs-xs text-brand fw-500">${item.titleDe}</p>
//       </a>
//       <ul class="d-flex flex-column gap-2 mt-2 px-1 px-md-2">
//         <li
//           class="w-100 px-1 py-1 fs-x-small rounded-1 px-md-2 py-md-2 fw-500 d-flex justify-content-between align-items-center bg-ultraLight-gray"
//         >
//           <span>حقوق سال اول:</span>
//           <div>
//           <span class="me-1 fw-600">&euro;</span><span> 638-1100</span>
//           </div>
//         </li>
//         <li
//           class="w-100 px-1 py-1 fs-x-small rounded-1 px-md-2 py-md-2 fw-500 d-flex justify-content-between align-items-center bg-ultraLight-gray"
//         >
//           <span>حقوق سال اول:</span>
//           <div>
//           <span class="me-1 fw-600">&euro;</span><span> 638-1100</span>
//           </div>
//         </li>
//         <li
//           class="w-100 px-1 py-1 fs-x-small rounded-1 px-md-2 py-md-2 fw-500 d-flex justify-content-between align-items-center bg-ultraLight-gray"
//         >
//           <span>حقوق سال اول:</span>
//           <div>
//           <span class="me-1 fw-600">&euro;</span><span> 638-1100</span>
//           </div>
//         </li>
//       </ul>
//     </div>
//     <div class="w-100 px-2 d-none d-md-block" >
//       <a href="/pages/ausbildung.html" class="brand-100-btn bg-brand-light d-flex justify-content-center py-2 px-2 w-100 rounded-2">
//       <span class="text-brand">مشاهده اطلاعات بیشتر</span>
//       <img src="/assets/icons/mingcute_left-line.svg" alt="" />
//       </a>
//     </div>
//   </div>
//     `;
//     bestAusbildungSlider.innerHTML = result;
//   });
// };

// const showBlogs = (data) => {
//   let result = '';
//   data.map((item) => {
//     result += `
//     <!-- blog card -->
//     <div href='/pages/blog.html' class="text-black blog-card col-md-3 d-flex flex-lg-column justify-content-between px-0 gap-2">
//       <!-- img -->
//       <a class="blog-card_img d-flex align-items-center">
//         <img class="rounded-3" src=${item.imgUrl} alt="">
//       </a>
//       <!-- description -->
//       <a class="text-black blog-card_description d-flex flex-column justify-content-between">
//         <p class="fw-500 mb-0 lh-lg blog-card_description-title">${item.title}</p>
//         <p class="blog-card_description-text">${item.description}</p>
//         <div class="d-flex">
//         <p class="text-brand mb-0" style="font-size: 12px;">${item.tag}</p>
//         <p class="text-dark-gray d-none d-md-block mb-0 ms-1" style="font-size: 12px;">زمان مطالعه ${item.readingTime} دقیقه</p>
//         </div>
//       </a>
//     </div>
//     `;
//     blogsContainer.innerHTML = result;
//   });
// };

// job-swiper-contanier

var swiper = new Swiper('.jobsSwiper', {
  autoplay: {
    delay: 1500,
    loop: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    370: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    //change: add slider per view for tablet
    1040: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    // change: add new add slider per view for large screen
    1440: {
      slidesPerView: 4.1,
      spaceBetween: 20,
    },
  },
});

// user reviews
// const showUserReview = (data) => {
//   let result = '';
//   data.map((item) => {
//     result += `
//     <div class="swiper-slide user-reviews-slide py-3 z-1 position-relative rounded-3 bg-ultraLight-gray px-md-4 d-flex flex-column flex-md-row align-items-center">
//     <div class="order-1 order-md-0 d-flex flex-column justify-content-center align-items-center align-items-md-start">
//       <img class="d-none d-md-block" src="/assets/icons/main-page/Quotation-mark-icon.svg" alt="">
//       <p class="fs-xs w-90 my-2 lh-lg text-md-start text-center">${item.description}</p>
//       <p class="fs-xs text-brand fw-extrabold mb-0">${item.userReviewName}</p>
//     </div>
//     <div class="order-0 order-md-1 user-reviews-user-img">
//       <img class="" src=${item.imgUrl}>
//     </div>
//   </div>
//     `;
//     userReviewsContainer.innerHTML = result;
//   });
// };

var swiper = new Swiper('.user-reviews-swiper', {
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  breakpoints: {
    370: {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      direction: 'vertical',
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
  },
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// license

var swiper = new Swiper('.mySwiper', {
  breakpoints: {
    370: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 1500,
    loop: true,
    disableOnInteraction: false,
  },
});

// ausbildung's page

const showAusbildungFields = (data) => {
  let result = '';
  data.map((item) => {
    result += `
    <div class="bg-white px-3 py-2 border rounded-1">
    <img src=${item.icon} alt="" />
    <span class="fs-xs fw-medium ms-2">${item.title}</span>
    </div>
    `;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  showJobsSwiper(jobsSlider);
  showSteps(startSteps);
  bestAusbildungSwiper(bestAusbildungs);
  showBlogs(ausbildungBlogs);
  showUserReview(userReviews);

  // ausbildung's page
  showAusbildungFields(ausbildungFields);
});

document.addEventListener('click', function (event) {
  var isClickInside =
    searchResult.contains(event.target) || searchInput.contains(event.target);

  // Check if the click is not happening inside the search input or search result div
  if (!isClickInside) {
    // Hide the search result section when clicked outside
    searchResult.style.display = 'none';
  }
});

searchInput.addEventListener('focus', function () {
  searchResult.style.display = 'block';
});
