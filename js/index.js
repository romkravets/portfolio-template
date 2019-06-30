const burger = document.querySelector('.burger');
const nav = document.querySelector('.menu__items');

burger.addEventListener('click', () => {
   nav.classList.toggle('menu__items_opened');
});
