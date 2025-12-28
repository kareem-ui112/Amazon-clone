import { renderOrderSummary } from "./checkout/orderSummary.js"; 
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from "../data/cart.js";


async function loadPage() {

  await loadProductsFetch();

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
  
}
loadPage()


// Learned already && async await is better


/*
Promise.all([
loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
.then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    })
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})
*/
/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
