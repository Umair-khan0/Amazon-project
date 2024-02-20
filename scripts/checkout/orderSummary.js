import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {cart, removeFromCart, calculateCartQuantity, updateDeliveryOption} from "../../data/cart.js"
import {products} from '../../data/products.js';
import {formatCurrency} from '../utils/money.js';
import {deliveryOptions} from '../../data/deliveryOptions.js';

export function rendorOrderSummary(){
    // The cartSummaryHTML variable is for storing the html that are generating through JavaScript and then this variable will be assign to the html grid Element, we store the productId to the productId variable of the product that are in the cart and then the compare cart productId to all products Id, The varible deliveryOption will find out the user option. The dayjs function will help to find out the date it is extenal liberary which are imported.

    let cartSummaryHTML='';
    cart.forEach(cartItem =>{
        const productId=cartItem.productId;
        let matchingProduct;

        products.forEach(product =>{
            if(product.id === productId){
                matchingProduct=product;
            }
        });

        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption;
        deliveryOptions.forEach(option =>{
          if(deliveryOptionId === option.id){
            deliveryOption = option;
          }
        });

        const today = dayjs();

        const deliveryDate= today.add(deliveryOption.deliveryDays, 'days');

        let dateString= deliveryDate.format('dddd, MMMM D');

        cartSummaryHTML+=`<div class="cart-item-container js-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="/${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              ${(formatCurrency(matchingProduct.priceCents))}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
        `
    });

    //Return function for generating html for delivery option and assigning date and charges. 

    function deliveryOptionsHTML(matchingProduct, cartItem){
      let html= '';
      deliveryOptions.forEach((deliveryOption) =>{

        const today = dayjs();

        const deliveryDate= today.add(deliveryOption.deliveryDays, 'days');

        let dateString= deliveryDate.format('dddd, MMMM D');

        let priceString =deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

        const isChecked =  deliveryOption.id === cartItem.deliveryOptionId;

        html += `
          <div class="delivery-option js-delivery-option"
              data-product-id="${matchingProduct.id}"
              data-delivery-option-id="${deliveryOption.id}">
              <input type="radio" 
              
              ${isChecked ? 'checked' : ''}
              
                class="delivery-option-input"
                name="${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  ${dateString}
                </div>
                <div class="delivery-option-price">
                  ${priceString} Shipping
                </div>
              </div>
            </div>`
      })
      return html;
    }

    document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;

    // For deleting or removing a product from the cart
    document.querySelectorAll('.js-delete-link').forEach((link) =>{
      link.addEventListener('click', () =>{
        const productId=link.dataset.productId;
        removeFromCart(productId);
        document.querySelector(`.js-container-${productId}`).remove();
        updateCartQuantity();
      })
    })

    // For calculating products in the cart
    const totalCartItems = document.querySelector('.js-total-cart-quantity');

    function updateCartQuantity(){
      let cartQuantity=calculateCartQuantity();
      totalCartItems.innerHTML= `${cartQuantity} items`;
    }
    updateCartQuantity();

    // For choosing delivery option
    document.querySelectorAll('.js-delivery-option').forEach(element =>{
      element.addEventListener('click', ()=>{
        const {productId, deliveryOptionId}=element.dataset;
        /*it is the short  hand property for
        const productId = element.dataset;
        const deliveryOptionId=element.dataset;*/

        updateDeliveryOption(productId, deliveryOptionId);
        // This function will regenerate the html changes occur in checkout page, this is called recursion function call itself again.
        rendorOrderSummary();
      })
    })
}
