// Cart variable for storing the product that are in the cart,if cart does not have products it will assign some default products to the cart
export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1',
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2',
  }];
}

// Function for calculating cart quantity,and then return the value that are store in the cartQuantity variable.

export function calculateCartQuantity(){
  let cartQuantity=0;
  cart.forEach(cartItem =>{
    cartQuantity+=cartItem.quantity;
  })
  return cartQuantity;
}

// Function for storing the cart product to the localStorage.

function saveStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function for updating the product quantity that has already in the cart, firt we check the product that it is present in the cart or not if matching item found it will update the product quantity if not it will recieve the default values.

export function addToCart(productId){  
    let matchingItem;
      cart.forEach((item) =>{
        if(productId===item.productId){
          matchingItem=item;
        }
      });
      if(matchingItem){
        matchingItem.quantity+=1;
      }else{
        cart.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1',
        });
      }
      saveStorage();
  }

  // Function for pushing product to the newcart and then reassigning to the cart, for this we created a new array and the ForEach loop will push all those product that are not equal to the those product which have that productId(parameter).
 export function removeFromCart(productId){
    const newCart=[];
    cart.forEach(cartItem =>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
      cart = newCart;
    })
    saveStorage();
  }

// Function for updating the delivery option date, first we find the product in the cart that user want to update through product id and the second we find the user option through the delivery option id and then save it to the local storage.

export  function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
      cart.forEach((cartItem) =>{
        if(productId===cartItem.productId){
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId=deliveryOptionId;
      saveStorage();
  }


