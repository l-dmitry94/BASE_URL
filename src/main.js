// import SlimSelect from 'slim-select';
// import "slim-select/dist/slimselect.css"

import { handleForm } from './js/requests/subscription';
import { fetchAllCategories } from './js/requests/products';
import { fetchAllProducts } from './js/requests/products';
import { refs } from './js/services/refs';
import { dataAsString } from './js/services/refs';
import './js/products/discount.js';
import './js/products/popular.js';
import {
    createFiltresCards,
    createPopularCards,
} from './js/services/markup';
import { handleChange } from './js/products/products';
import { handleSubmit } from './js/products/products';
import { normalizeCategory } from './js/products/products';
// Отримуємо всі категорії
import { addToCart } from './js/products/add-to-cart';
import { quantityProduct } from './js/helpers/helpers';
import { getData } from './js/services/storage';
import { common } from './js/common/common';
import { handleModal } from './js/products/modal.js';

fetchAllCategories().then(data => {
    let modifiedCategories = data.map(data => {
        return normalizeCategory(data);
    });
    localStorage.setItem('filter', dataAsString);
    let markupList = modifiedCategories
        .map(key => `<option value="${key}">${normalizeCategory(key)}</option>`)
        .join('');

    let additionalGender = `<option  selected  >Show all</option>`;
    refs.productsFiltersSelect.innerHTML = markupList + additionalGender;
    // new SlimSelect({
    //     select: refs.productsFiltersSelect,
    //     showSearch: false,
    //   })
}).catch;

// Отримуємо всі продукти
fetchAllProducts()
    .then(data => {
        let test1 = createFiltresCards(data.results);
        refs.productsCards.innerHTML = test1;
    })
    .catch();

// Функція обробки submit в секції filters
refs.productsFiltersSelect.addEventListener('change', handleChange);
// Функція обробки submit в секції filters
refs.btnSubmit.addEventListener('submit', handleSubmit);

refs.productsFiltersSelect.addEventListener('change', handleChange);

refs.productsCards.addEventListener('click', event => event.preventDefault());

refs.productsCards.addEventListener('click', addToCart);
refs.popularCards.addEventListener('click', addToCart);
refs.discountCards.addEventListener('click', addToCart);

const cartArr = getData(common.CART_KEY);
quantityProduct(cartArr);

refs.productsCards.addEventListener('click', handleModal);
refs.popularCards.addEventListener('click', handleModal);
refs.discountCards.addEventListener('click', handleModal);
