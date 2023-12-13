import { common } from '../common/common';
import { fetchProduct } from '../requests/products';
import { getData } from '../services/storage';
import check from '../../img/icons.svg';
import icons from '../../img/icons.svg';
import { checkProduct } from './check-products';

const cartArr = getData(common.CART_KEY);

export async function addToCart(event) {
    const { target } = event;

    const addBtn = target.closest('.cards__button');

    if (!addBtn) {
        return;
    }

    const { id } = addBtn.closest('.cards__item').dataset;

    const product = await fetchProduct(id);

    const inStorage = cartArr.some(({ _id }) => id === _id);

    if (inStorage) {
        return;
    }

    cartArr.push(product);

    const quantity = document.querySelector('.header__menu-link-quantity');
    quantity.textContent = cartArr.length;

    localStorage.setItem(common.CART_KEY, JSON.stringify(cartArr));

    cartArr.forEach(({_id}) => {
        const products = document.querySelectorAll(`[data-id="${_id}"]`);
        products.forEach(product => {
            const productBtn = product.querySelector(".cards__button");
            productBtn.innerHTML = `<svg class="icon-checked"><use href="${check}#icon-check"></use></svg>`;
        })
    })

}
