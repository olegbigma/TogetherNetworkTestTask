/**
 * @param {string} url
 * @param {string} method
 * @param {FormData} body
 * @return {Promise<any>}
 */
export const sendRequest = async (url, method = 'GET', body = null) => {
  const response = await fetch(url, {
    method,
    body,
  });

  return await response.json();
};
