import { handleCart } from './js/cart/cart';
import { handleDeleteAllFromCart } from './js/cart/delete-from-cart';
import { handleDeleteProduct } from './js/cart/delete-product';
import { generalSum } from './js/cart/general-sum';
import { handleSendProducts } from './js/cart/send-products';
import { refs } from './js/services/refs';
import './js/requests/subscription';

handleCart();

refs.deleteAllProductsFromCart.addEventListener(
    'click',
    handleDeleteAllFromCart
);

generalSum();

refs.cartProducts.addEventListener('click', handleDeleteProduct);

refs.sendForm.addEventListener('submit', handleSendProducts);
