const scrollBtn = document.querySelector('.scroll__top');
const burger = document.querySelector('.burger');
const navItems = document.querySelector('.menu__items');
const modalGallery = document.querySelector('.galleryModal');
const galleryBtns = document.querySelectorAll('.gallery-section__item');
const closeModalGallery = document.querySelector('.close-modal');


window.addEventListener('scroll', () => {
   const navMenu = document.querySelector('#navMenu');
   if(this.scrollY <= 10) navMenu.className = 'menu'; else navMenu.className = 'menu_scroll';
   scrollFunction();
 });

 const scrollFunction = () => {
   if(this.scrollY <= 2000) scrollBtn.className = ' '; else scrollBtn.className = 'scroll__top_active';
}

const topFunction = () => {
   scrollBtn.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   });
}

const burgerFunction = () => {
   burger.addEventListener('click', () => {
      navItems.classList.toggle('menu__items_opened');

   });
}

const searchButton = document.querySelector('.toggleSearch');
const searchBox = document.querySelector('.search-container');
const searchClose = document.querySelector('.search__close');


const searchToggler = () => {
   searchButton.addEventListener('click', () => {
      searchBox.classList.toggle('search-container_opened');
   });
}

const searchClosed = () => {
   searchClose.addEventListener('click', () => {
      searchBox.classList.remove('search-container_opened');
   })
}

galleryBtns.forEach( (galleryBtn) => {
   galleryBtn.addEventListener('click', () => {
      modalGallery.classList.toggle('modal_opened');

   })
})

closeModalGallery.addEventListener('click', () => {
   modalGallery.classList.remove('modal_opened');
});

window.addEventListener('click', (e) => {
   if (e.target === modalGallery) {
      modalGallery.classList.remove('modal_opened');
    }
 })

burgerFunction();
topFunction();
searchToggler();
searchClosed();







