import { ausbildungFields, ausbildungs } from '../common/common.js';

const ausbildungFieldsContainer = document.querySelector(
  '.ausbildung-fields-container'
);
const ausbildungContainer = document.querySelector('.ausbildung-container');
const similarAusbildungContainer = document.querySelector(
  '.similar-ausbildung-container'
);
const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');

const showAusbildungFields = (data) => {
  let result = '';
  data.map((item) => {
    result += `
    <!-- change badge style -->
    <div class="job-list-badge bg-white py-2 px-3 border rounded-2 w-10 d-flex align-items-center justify-content-center">
    <img class="me-1" src=${item.icon} alt="" />
    <span class="fw-medium ms-2">${item.title}</span>
  </div>
    `;
    ausbildungFieldsContainer.innerHTML = result;
  });
};

const showAusbildungs = (data) => {
  let result = '';
  data.map((item) => {
    result += `
    <!-- ausbildung card -->
    <a
    class="ausbildung-card text-black d-flex bg-white flex-md-column gap-2 p-2 border justify-content-between align-items-center rounded-2"
    href='/pages/ausbildung.html'
  >
    <div class="position-relative d-flex ausbildung-img-container">
      <img
        class="d-flex ausbildung-img rounded-2"
        src=${item.imgUrl}
        alt=${item.titleFa}
      />

      <button class="position-absolute rounded-2 d-flex justify-content-center align-items-center ausbildung-save-btn">
      <img class="ausbildung-save" src="/assets/icons/save-icon.svg" alt="" />
      </button>
        <button class="position-absolute rounded-2 d-flex justify-content-center align-items-center ausbildung-share-btn">
        <img class="ausbildung-share" src="/assets/icons/share-icon.svg" alt="" />
        </button>
    </div>
    <div
      class="w-md-100 h-100 text-center d-flex flex-column flex-grow-1"
    >
      <div>
        <p class="mb-0 fs-xs fw-500">${item.titleFa}</p>
        <p class="mb-0 fs-xs text-brand fw-500">${item.titleDe}</p>
      </div>
      <ul class="d-flex flex-column gap-2 mt-2 px-2 ">
        <li
          class="w-100 px-1 py-1 rounded-1 fs-x-small px-md-2 py-md-2 fw-500 d-flex justify-content-between align-items-center bg-ultraLight-gray"
        >
          <span>حقوق سال اول:</span>
          <div>
          <span class="me-1 fw-600">&euro;</span><span> 638-1100</span>
          </div>
        </li>
        <li
          class="w-100 px-1 py-1 rounded-1 fs-x-small px-md-2 py-md-2 fw-500 d-flex justify-content-between align-items-center bg-ultraLight-gray"
        >
          <span>حقوق سال اول:</span>
          <div>
          <span class="me-1 fw-600">&euro;</span><span> 638-1100</span>
          </div>
        </li>
        <li
          class="w-100 px-1 py-1 rounded-1 fs-x-small px-md-2 py-md-2 fw-500 d-flex justify-content-between align-items-center bg-ultraLight-gray"
        >
          <span>حقوق سال اول:</span>
          <div>
          <span class="me-1 fw-600">&euro;</span><span> 638-1100</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-100 px-2 d-none d-md-block" >
      <button class="bg-brand-light d-flex justify-content-center py-2 px-2 w-100 rounded-2">
      <span class="text-brand">مشاهده اطلاعات بیشتر</span>
      <img src="/assets/icons/mingcute_left-line.svg" alt="" />
      </button>
    </div>
  </a>
    `;
    ausbildungContainer.innerHTML = result;
  });
};

// const showSimilarAusbildung = () => {
//   let result = '';
//   data.map((item) => {
//     result += `
//     <div class="similar-ausbildung d-flex px-2 py-2">
//     <div>
//       <img
//         class="img-fluid rounded-2"
//         src="/assets/images/ausbildung-img-2.jpg"
//         alt=""
//       />
//     </div>
//     <div class="ps-3 fs-xs d-flex flex-column justify-content-evenly">
//       <p class="mb-0">${item.titleFa}</p>
//       <p class="mb-0 text-brand fw-500">${item.titleDe}</p>
//     </div>
//     <div class="ms-auto d-flex align-items-center arrow-left">
//       <img
//         class="d-flex p-1 rounded-3 bg-ultraLight-gray justify-content-between align-items-center"
//         src="/assets/icons/arrow-left-blck-icon.svg"
//         alt=""
//       />
//     </div>
//   </div>
//     `;
//     similarAusbildungContainer.innerHTML = result;
//   });
// };

document.addEventListener('DOMContentLoaded', () => {
  showAusbildungFields(ausbildungFields);
  showAusbildungs(ausbildungs);
  // showSimilarAusbildung(similarAusbildings);
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
