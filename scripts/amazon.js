import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency} from './utils/money.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">

      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <!-- ✅ Quantity Dropdown -->
      <div class="product-quantity-container">
        <select class="product-quantity">
          <option value="1">1</option>
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

      <button class="add-to-cart-button button-primary js-add-to-cart" 
      data-product-id="${product.id}">       
        Add to Cart
      </button>

    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;
  
function updateCartQuantity () {
  let cartQuantity = 0;

   cart.forEach((cartItemtem) => {
    cartQuantity += cartItemtem.quantity;
   });
  
   // it increases cart quantity in the basket
   document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

// To make the button Add to cart work 
document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener ('click', () => {
   const productId= button.dataset.productId; // this gives what ever the data is attached to the button.
   addToCart(productId);
   updateCartQuantity(); 
  })
})