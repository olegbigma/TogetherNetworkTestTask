const hiddenClassName = 'alert-message---hide';

/**
 * @param {HTMLInputElement} input
 * @param {string} message
 */
export const showError = (input, message) => {
  const alertElement = input
    .closest('.main__form')
    .querySelector('.alert-message');
  alertElement.classList.remove(hiddenClassName);
  alertElement.innerText = message;
};
/**
 * @param {HTMLInputElement} input
 */
export const hideError = (input) => {
  const alertElement = input
    .closest('.main__form')
    .querySelector('.alert-message');
  alertElement.classList.add(hiddenClassName);
  alertElement.innerText = '';
};
