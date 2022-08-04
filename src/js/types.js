document.addEventListener("DOMContentLoaded", () => {

  const brandsShowMore = document.querySelector('.show-more__btn--types');
  const brandsContainer = document.querySelector('.types__list-items');
  const brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text--types');

  const toggleBrandsShowMore = () => {
    brandsContainer.classList.toggle('types__list-items--show-more');
    brandsShowMoreTxt.classList.toggle('show-more__text--hide');

    if (brandsContainer.classList.contains('types__list-items--show-more')) {

      brandsShowMoreTxt.textContent = 'Скрыть';
    } else {
      brandsShowMoreTxt.textContent = 'Показать все';
    }
  }

  brandsShowMore.addEventListener('click', toggleBrandsShowMore);
});
