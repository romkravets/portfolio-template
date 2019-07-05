const scrollBtn = document.querySelector('.scroll__top');


window.onscroll = () => {
   const navMenu = document.querySelector('#navMenu');
   console.log(navMenu);
   if(this.scrollY <= 10) navMenu.className = 'menu'; else navMenu.className = 'menu_scroll';
   scrollFunction();
 }

 const scrollFunction = () => {
   if(this.scrollY <= 1000) scrollBtn.className = ' '; else scrollBtn.className = 'scroll__top_active';
   console.log(scrollBtn);
}

const topFunction = () => {
   scrollBtn.addEventListener('click', () => {
      console.log('click');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   });
}

const burgerFunction = () => {
   const burger = document.querySelector('.burger');
   const navItems = document.querySelector('.menu__items');
   // const navLinks = document.querySelectorAll('.menu__items li');
   // console.log(navLinks);
   //    navLinks.forEach((link, index) => {
   //       link.addEventListener('click', (e) => {
   //       console.log(link);
   //       navItems.classList.remove('menu__items_opened');
   //       })
   //    });
   // const pageBody = document.querySelector('.page__body');
   // console.log(pageBody);
   burger.addEventListener('click', () => {
      navItems.classList.toggle('menu__items_opened');

      // if (navItems.classList.contains('menu__items_opened')) {
      //    pageBody.classList.add('fixed');
      // } else {
      //    pageBody.classList.remove('fixed');
      // }
   });
}

burgerFunction();
topFunction();