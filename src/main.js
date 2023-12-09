
import { handleForm } from './js/requests/subscription';
import { fetchAllCategories } from './js/requests/products';
import { fetchAllProducts } from './js/requests/products';
import { refs } from './js/services/refs';
import { dataAsString } from './js/services/refs';
import { createFiltresCards, createDiscountCards } from './js/services/markup';
import { handleChange } from './js/requests/products';
import { fetchAllDiscount } from './js/products/discount';

fetchAllCategories().then(data => {
    let modifiedCategories = data.map(data => {
        return data.replace(/_/, ' ').replace(/_/, ' ');
    });
    localStorage.setItem('categories', JSON.stringify(modifiedCategories));
    localStorage.setItem('filter', dataAsString);

    // console.log(modifiedCategories);
    let markupList = modifiedCategories
        .map(
            key =>
                `<option value="" class="products__filters-select" >${key}</option>`
        )
        .join('');
    let additionalGender = `<option value="" class="products__filters-select" >Show all</option>`;
    // let additionalGender1 = `<option value="" class="products__filters-select" >Categories</option>`;
    refs.productsFiltersSelect.innerHTML = markupList + additionalGender;
}).catch;

// Отримуємо всі продукти
fetchAllProducts().then(data => {
    let test1 = createFiltresCards(data.results);

    refs.productsCards.innerHTML = test1;
}).catch;

refs.productsFiltersSelect.addEventListener('change', handleChange);

fetchAllDiscount().then(data => {
    let discount = createDiscountCards(data.slice(0, 2));
    refs.discountCards.innerHTML = discount;
}).catch;
