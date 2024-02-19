import {calculateCartQuantity, addToCart, cart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

// Function for updating cart quantity in the cart
const cartElement=document.querySelector('.js-cart-quantity');
function updateCartQuantity(){
  let cartQuantity=calculateCartQuantity();
  cartElement.innerHTML=cartQuantity;
}
// ForEach loop will generate html for every product that are in the home page and added to the variable productHTML.

let productHTML='';
products.forEach((product) =>{
    // generating html
    productHTML+=`<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="/${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="/images/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
     $${formatCurrency(product.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="/images/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`
});
document.querySelector('.js-products-grid').innerHTML=productHTML;

// it will add those product on which we want to click and will add to the cart by comparing the product id
document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
  button.addEventListener('click', () =>{
    const productId=button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
  })
});