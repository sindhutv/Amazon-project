import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
import { loadProductsFetch } from '../data/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//using Asynch and Await
async function loadPage () {

  try {
    //throw 'error1';

      await  loadProductsFetch();
  
  const value =  await new Promise((resolve,reject) => {
    //throw 'error2'; synchronously
    loadCart(()=> { 
     //reject('error3')Asynchronously for future error
     resolve('value3')
    });
  });
  }
  catch(error)
    {
   console.log('Unexpected error. Please try again later.');
  }
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
