const burger = document.querySelector('.burger');
const navItems = document.querySelector('.menu__items');
const scrollBtn = document.querySelector('.scroll__top');

burger.addEventListener('click', () => {
   navItems.classList.toggle('menu__items_opened');
});

window.onscroll = () => {
   const navMenu = document.querySelector('#navMenu');
   console.log(navMenu);
   if(this.scrollY <= 10) navMenu.className = 'menu'; else navMenu.className = 'menu_scroll';
   scrollFunction();
 };

 scrollFunction = () => {
   if(this.scrollY <= 1000) scrollBtn.className = ' '; else scrollBtn.className = 'scroll__top_active';
   console.log(scrollBtn);
}


topFunction = () => {
   scrollBtn.addEventListener('click', () => {
      console.log('click');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   });
}

topFunction();








// function scrollFunction() {
//    if (document.body.scrollY > 20 || document.documentElement.scrollY > 20) {
//      document.getElementById('scroll__top').style.display = "block";
//    } else {
//      document.getElementById('scroll__top').style.display = "none";
//    }
//  }



// const searchBtn = document.querySelector('#toggleSearch');
// const searchContainer = document.querySelector('.search-container');

// function search(e) {
//    // e.preventDefault();
//    searchBtn.addEventListener('click', () => {
//       searchContainer.classList.toggle('search-container_opened');
//       // if(this.scrollY <= 10) searchContainer.className = 'search-container'; else searchContainer.className = 'search-container_opened';
//    })
// }

// search();


