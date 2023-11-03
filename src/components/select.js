import { sliderElement } from './slider.js';

const selectedClassName = 'main__form-selected';

sliderElement.addEventListener('click', (event) => {
  if (event.target?.classList.contains('main__form-dropdown-list-item')) {
    const dropdown = event.target.closest('.main__form-dropdown');

    dropdown.querySelector('.main__form-dropdown-input').innerText =
      event.target.innerText;
    dropdown.querySelector('input').value = event.target.innerText;
    dropdown.classList.add(selectedClassName);
  }
});
