import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
import { loadProductsFetch } from '../data/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//using Asynch and Await
async function loadPage () {
  await  loadProductsFetch();
  
  await new Promise((resolve) => {
    loadCart(()=> { 
     resolve('value1')
    });
  });
   
    renderOrderSummary();
    renderPaymentSummary();
  }

  loadPage();
  

//using fetch
/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
    loadCart(()=> { 
     resolve();
    });
  })
    
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/



//using promises
/*
  new Promise((resolve) => {
    loadProducts(()=> { 
     resolve('value1')
    });

    }).then((value) => {
      console.log(value);
      return new Promise ((resolve) => {
       loadCart(() => {
        resolve();
      })
      });

    }).then (() => {
       renderOrderSummary();
        renderPaymentSummary();
    });
    */


 /* using callback

    loadProducts(() => {
      loadCart(()=> {
      renderOrderSummary();
      renderPaymentSummary();
      })

 }); */
