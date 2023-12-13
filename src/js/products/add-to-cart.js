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

    console.log(addBtn);
    const { id } = addBtn.closest('.cards__item').dataset;

    const list = addBtn.closest('.cards__item');
    // const product = await fetchProduct(id);
    const allValue = list.querySelectorAll('.cards__info-value');

    const values = [...allValue].map(value => value);

    const categoryElement = list.querySelector('[data-category]');

    const price = list.querySelector('.cards__price').textContent;

    const obj = {
        _id: id,
        category: categoryElement.dataset.category
            ? categoryElement.dataset.category
            : null,
        img: list.querySelector('.cards__image-photo-js').src
            ? list.querySelector('.cards__image-photo-js').src
            : null,
        name: list.querySelector('.cards__title').textContent
            ? list.querySelector('.cards__title').textContent
            : null,
        popularity: values[2].textContent ? values[2].textContent : null,
        price: Number(price.slice(1)) ? Number(price.slice(1)) : null,
        size: values[1].textContent ? values[1].textContent : null,
    };

    const existingIndex = cartArr.findIndex(item => item._id === obj._id);

    if (existingIndex !== -1) {
        // Update existing object if it already exists
        cartArr[existingIndex] = obj;
    } else {
        // Add the new object to cartArr
        cartArr.push(obj);
    }

    const quantity = document.querySelector('.header__menu-link-quantity');
    quantity.textContent = cartArr.length;

    localStorage.setItem(common.CART_KEY, JSON.stringify(cartArr));

    cartArr.forEach(({ _id }) => {
        const products = document.querySelectorAll(`[data-id="${_id}"]`);
        products.forEach(product => {
            const productBtn = product.querySelector('.cards__button');
            productBtn.innerHTML = `<svg class="icon-checked"><use href="${check}#icon-check"></use></svg>`;
        });
    });
}
