import { startSteps } from '../common/common.js';

const stepsContainer = document.querySelector('.steps-container');

const showSteps = (data) => {
  let result = '';
  data.map((item) => {
    result += `
    <div class="step rounded-3 d-flex align-items-center col-6 position-relative fs-xs text-center col-md-1 px-2 bg-ultraLight-gray">
      <p class="position-absolute fs-2 fw-bold text-brand">${item.id} 0</p>
      <p class="mb-0" >${item.description}</p>
    </div>
    `;
    stepsContainer.innerHTML = result;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  showSteps(startSteps);
});
