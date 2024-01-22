const products=[ {image: '/images/products/athletic-cotton-socks-6-pairs.jpg',
name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
rating: {
    stars: 4.5,
    count: 87
},
priceCents: 1090,
},

{image: '/images/products/intermediate-composite-basketball.jpg',
name: 'Intermediate Size Basketball',
rating: {
    stars: 4,
    count: 127
},
priceCents: 2095
},
{image: '/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
name: 'Adults Plain Cotton T-Shirt - 2 Pack',
rating: {
    stars: 4.5,
    count: 56
},
priceCents: 799
},
{
image: '/images/products/black-2-slot-toaster.jpg',
name: '2 Slot Toaster - Black',
rating: {
stars: 5,
count: 2197
},
priceCents: 1899, 
},{
    image: '/images/products/6-piece-non-stick-baking-set.webp',
    name: '6-Piece Non Stick Baking set',
    rating: {
        stars: 4,
        count: 37,
    },
    priceCents: 2067,
},{
    image: '/images/products/6-piece-white-dinner-plate-set.jpg',
    name: '6-Piece White Dinner Plate Set',
    rating: {
        stars: 4.5,
        count: 175,
    },
    priceCents: 3499,
},{
    image: '/images/products/plain-hooded-fleece-sweatshirt-yellow.jpg',
    name: 'Plain Hooded Fleece Seatshirt Yellow',
    rating: {
        stars: 4.5,
        count: 317,
    },
    priceCents: 2400,
},{
    image: '/images/products/luxury-towel-set-6-piece.jpg',
    name: 'Luxury Towel Set Graphite Gray',
    rating: {
        stars: 4.5,
        count: 144,
    },
    priceCents: 3599,
},{
    image: '/images/products/liquid-laundry-detergent-plain.jpg',
    name: 'Liquid Laundry Detergent Plain',
    rating: {
        stars: 4.5,
        count: 305,
    },
    priceCents: 2899,
},{
    image: '/images/products/men-athletic-shoes-green.jpg',
    name: 'Waterproof Knit Athletic Sneaker Shoes',
    rating: {
        stars: 4,
        count: 89,
    },
    priceCents: 3390,
},{
    image: '/images/products/women-chiffon-beachwear-coverup-black.jpg',
    name: 'Women Chiffon Beachwear Coverup Black',
    rating: {
        stars: 4.5,
        count: 235,
    },
    priceCents: 2070,
},{
    image: '/images/products/round-sunglasses-black.jpg',
    name: 'Round Sunglasses',
    rating: {
        stars: 4.5,
        count: 30,
    },
    priceCents: 2899,
},{
    image: '/images/products/women-beach-sandals.jpg',
    name: "Women's Beach Sandals",
    rating: {
        stars: 4.5,
        count: 562,
    },
    priceCents: 2499,
},{
    image: '/images/products/blackout-curtain-set-beige.webp',
    name: 'Blackout Curtains Set-4 Pack -Beige',
    rating: {
        stars: 4.5,
        count: 232,
    },
    priceCents: 3599,
},{
    image: '/images/products/women-chunky-beanie-gray.webp',
    name: 'Women Chunky Beanie Gray',
    rating: {
        stars: 4.5,
        count: 209,
    },
    priceCents: 1099,
},]

let productHTML='';
products.forEach((product) =>{
    // generating html
    productHTML+=`<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
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
     $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
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

    <button class="add-to-cart-button button-primary">
      Add to Cart
    </button>
  </div>`
});
document.querySelector('.js-products-grid').innerHTML=productHTML;