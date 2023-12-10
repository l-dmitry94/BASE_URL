import { handleForm } from './js/requests/subscription';
import { fetchAllCategories } from './js/requests/products';
import { fetchAllProducts } from './js/requests/products';
import { refs } from './js/services/refs';
import { dataAsString } from './js/services/refs';
import {
    createFiltresCards,
    createDiscountCards,
    createPopularCards,
} from './js/services/markup';
import { handleChange } from './js/products/products';
import { handleSubmit } from './js/products/products';
import { normalizeCategory } from './js/products/products';
// Отримуємо всі категорії
import { fetchAllDiscount } from './js/products/discount';
import { fetchAllPopular } from './js/products/popular';
import { handleModal } from './js/cart/modal';

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
fetchAllDiscount().then(data => {
    let discount = createDiscountCards(data.slice(0, 2));
    refs.discountCards.innerHTML = discount;
}).catch;

fetchAllPopular().then(data => {
    let popular = createPopularCards(data.slice(0, 5));
    refs.popularCards.innerHTML = popular;
}).catch;

refs.productsCards.addEventListener('click', handleModal);
