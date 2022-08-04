document.addEventListener("DOMContentLoaded", () => {

  const textShowMoreBtn = document.querySelector('.about-us__button');
  const textContainer = document.querySelector('.about-us__overflow');

  const toggleBrandsShowMore = () => {
    textContainer.classList.toggle('about-us__overflow--full');
    textShowMoreBtn.classList.toggle('about-us__button--hide');

    if (textContainer.classList.contains('about-us__overflow--full')) {

      textShowMoreBtn.textContent = 'Скрыть';
    } else {
      textShowMoreBtn.textContent = 'Читать далее';
    }
};

  textShowMoreBtn.addEventListener('click', toggleBrandsShowMore);
});