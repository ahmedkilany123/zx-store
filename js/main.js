let saerchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    saerchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    saerchform.classList.remove('active');
    loginForm.classList.remove('active');

}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    saerchform.classList.remove('active');
    shoppingCart.classList.remove('active');

}


