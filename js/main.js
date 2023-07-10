let saerchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    saerchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    saerchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    saerchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    saerchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}
window.onscroll = () => {
    navbar.classList.remove('active');
    saerchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


