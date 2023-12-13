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
    const category = categoryElement ? categoryElement.textContent : "";

    const priceElement = list.querySelector('.cards__price');
    const price = priceElement ? priceElement.textContent : "";

    const obj = {
        _id: id,
        category: category.dataset.category
            ? category.dataset.category
            : "",
        img: list.querySelector('.cards__image-photo-js').src
            ? list.querySelector('.cards__image-photo-js').src
            : "",
        name: list.querySelector('.cards__title').textContent
            ? list.querySelector('.cards__title').textContent
            : "",
        popularity: values[2].textContent ? values[2].textContent : "",
        price: Number(price.slice(1)) ? Number(price.slice(1)) : "",
        size: values[1].textContent ? values[1].textContent : "",
    };

    if(obj) {
        console.log(true)
    } else console.log(false)

    const inStorage = cartArr.some(({ _id }) => id === _id);

    if (inStorage) {
        return;
    }

    cartArr.push(obj);

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
