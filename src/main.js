import { fetchAllCategories } from './js/requests/products';
import { fetchAllProducts } from './js/requests/products';
import { refs } from './js/services/refs';
import { dataAsString } from './js/services/refs';
import { createFiltresCards } from './js/services/markup';
import { handleChange } from './js/requests/products';
import { handleSubmit } from './js/requests/products';
import { normalizeCategory } from './js/requests/products';
// Отримуємо всі категорії
fetchAllCategories().then(data => {
    let modifiedCategories = data.map(data => {
        return normalizeCategory(data);
    });
    localStorage.setItem('filter', dataAsString);
    let markupList = modifiedCategories
        .map(key => `<option >${key}</option>`)
        .join('');
    let additionalGender = `<option  selected  >Show all</option>`;
    refs.productsFiltersSelect.innerHTML = markupList + additionalGender;
}).catch;

// Отримуємо всі продукти
fetchAllProducts().then(data => {
    let test1 = createFiltresCards(data.results);
    refs.productsCards.innerHTML = test1;
}).catch;
// Функція обробки submit в секції filters
refs.productsFiltersSelect.addEventListener('change', handleChange);
// Функція обробки submit в секції filters
refs.btnSubmit.addEventListener('submit', handleSubmit);


