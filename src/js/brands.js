document.addEventListener("DOMContentLoaded", () => {

  const brandsShowMore = document.querySelector('.show-more__btn');
  const brandsContainer = document.querySelector('.brands__list-items');
  const brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text--brands');

  const toggleBrandsShowMore = () => {
    brandsContainer.classList.toggle('brands__list-items--show-more');
    brandsShowMoreTxt.classList.toggle('show-more__text--hide');

    if (brandsContainer.classList.contains('brands__list-items--show-more')) {

      brandsShowMoreTxt.textContent = 'Скрыть';
    } else {
      brandsShowMoreTxt.textContent = 'Показать все';
    }
  };

  brandsShowMore.addEventListener('click', toggleBrandsShowMore);
});
