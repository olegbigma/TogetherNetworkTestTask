export const sliderElement = document.querySelector('.slider');
const pagination = document.querySelector('.main-pagination');

const keys = {
  roleStep: 0,
  yourAge: 1,
  address: 2,
  email: 3,
  password: 4,
};

export const slider = {
  scrollToStep(step) {
    this.scrollToId(step);
    this.updatePagination(step.slice(1));
  },
  /**
   * @param {string} id
   */
  scrollToId(id) {
    location.href = `${location.href.split('#')[0]}${id}`;
  },
  updatePagination(step) {
    const className = 'main-pagination__item--filled';

    [...pagination.children].forEach((item, index) => {
      if (index <= keys[step]) item.classList.add(className);
      else item.classList.remove(className);
    });
  },
};

sliderElement.addEventListener('click', (event) => {
  if (
    (event.target.matches('.main__form-back-btn') ||
      event.target.matches('.main-btn')) &&
    event.target.href
  ) {
    slider.updatePagination(event.target.href.split('#')[1]);
  }
});

pagination.addEventListener('click', (event) => {
  if (event.target.classList.contains('main-pagination__item')) {
    const anchor = event.target.href.split('#')[1];
    slider.updatePagination(anchor);
  }
});
