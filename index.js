let searchfoam= document.querySelector('.search-foam');
document.querySelector('#search').onclick= () =>{
    searchfoam.classList.toggle('active');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    shoppingcart.classList.remove('active');
    

}
let shoppingcart= document.querySelector('.shopping-cart');
document.querySelector('#shopping').onclick= () =>{
    shoppingcart.classList.toggle('active');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    
    searchfoam.classList.remove('active');

}
let loginform= document.querySelector('.login-form');
document.querySelector('#user').onclick= () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingcart.classList.remove('active');
    searchfoam.classList.remove('active');

}
let navbar= document.querySelector('.navbar');
document.querySelector('#menu').onclick= () =>{
    
    loginform.classList.remove('active');
    shoppingcart.classList.remove('active');
    searchfoam.classList.remove('active');

    navbar.classList.toggle('active');       
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    shoppingcart.classList.remove('active');
    searchfoam.classList.remove('active');


}
    var swiper = new Swiper(".product-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  autoplay:{
         delay:1000,
         disableOnInteraction:false,
        },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});
var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  autoplay:{
         delay:1000,
         disableOnInteraction:false,
        },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});
