const burger = document.querySelector('.burger');
const navItems = document.querySelector('.menu__items');

burger.addEventListener('click', () => {
   navItems.classList.toggle('menu__items_opened');
});

window.onscroll = () => {
   const navMenu = document.querySelector('#navMenu');
   if(this.scrollY <= 10) navMenu.className = ''; else navMenu.className = 'menu_scroll';
 };
