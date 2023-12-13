import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

import { common } from '../common/common';
import { quantityProduct } from '../helpers/helpers';
import { createMarkupCartList, createMarkupEmptyCart } from '../services/markup';
import { refs } from '../services/refs';
import { getData } from '../services/storage';

export async function handleCart() {
    const cartArr = getData(common.CART_KEY);
    
    quantityProduct(cartArr);

    if (!cartArr.length) {
        refs.cardWrapper.innerHTML = createMarkupEmptyCart();
        return
    }

    refs.cartProducts.insertAdjacentHTML("beforeend", createMarkupCartList(cartArr));

    new SimpleBar(document.querySelector(".cart__products"));

}


