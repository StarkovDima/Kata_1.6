document.addEventListener('DOMContentLoaded', () => {
  
    const modalLanguage = document.querySelectorAll('.language__item');
  
    modalLanguage.forEach(item => {
      item.addEventListener('click', () => {
          modalLanguage.forEach(element => {
          element.classList.remove('language__item--active');
        });
        item.classList.add('language__item--active');
      });
    });
  });
  