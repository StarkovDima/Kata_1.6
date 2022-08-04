document.addEventListener("DOMContentLoaded", () => {

  const navItems = document.querySelectorAll('.services__item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(element => {
        element.classList.remove('services__item--active');
      });
      item.classList.add('services__item--active');
    });
  });
});
