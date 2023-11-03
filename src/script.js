import { slider } from './components/slider.js';
import './components/select.js';
import { validateInput } from './utils/validate.js';
import { hideError, showError } from './utils/inputs.js';
import { sendRequest } from './api/index.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.slider');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let isValid = true;

  [...form.elements].forEach((input) => {
    if (!input.matches('input')) return;
    const errorMessage = validateInput(input);

    if (errorMessage) {
      showError(input, errorMessage);
      isValid = false;
    } else {
      hideError(input);
    }
  });

  if (isValid) {
    const payload = new FormData(form);

    const result = await sendRequest(
      'https://run.mocky.io/v3/f6ca495a-0a08-40de-9889-e73d49d011d2?age=23',
      'GET',
    );

    if (result.errors) {
      Object.entries(result.errors).forEach(([field, [errorMessage]]) => {
        const input = form.elements[field];
        if (input) {
          showError(input, errorMessage);
        }
      });
    }
  }
});
