import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
import {loadCart} from '../data/cart.js';


Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');
        });

    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');    
        });
    })

]).then((values) => {
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary();
});
 





/*
loadProducts(()=>{
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    }); 
});
*/