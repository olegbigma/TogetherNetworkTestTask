/**
 *
 * @param {HTMLInputElement} input
 * @returns {string}
 */
export const validateInput = (input) => {
  const trimmedValue = input.value.trim();
  if (trimmedValue === '') {
    return 'This field is required';
  }

  if (
    input.type === 'email' &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      trimmedValue,
    )
  ) {
    return 'Please provide valid email address';
  }

  return '';
};
