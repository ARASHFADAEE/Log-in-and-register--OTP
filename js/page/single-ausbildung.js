import { similarAusbildungs } from '../common/common.js';

const similarAusbildungMobileContainer = document.querySelector(
  '.similar-ausbildung-mobile'
);

const showSimilarAusbildung = (data) => {
  let result = '';
  data.map((item) => {
    result += `
        <a
        class="single-ausbildung text-black d-flex bg-white flex-md-column p-2 gap-2 shadow align-items-center rounded-2"
        href='/pages/ausbildung.html'
        >
        <div class="ausbildung-img-container position-relative similar-ausbildung-image">
          <img
            class="ausbildung-img img-fluid h-100 rounded-2"
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
          class="w-50 w-md-100 h-100 text-center d-flex flex-column"
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
    similarAusbildungMobileContainer.innerHTML = result;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  showSimilarAusbildung(similarAusbildungs);
});
