import {
    fetchAllProducts,
    fetchSearchProducts,
    fetchSearchProductsFilter,
    fetchSearchProductsFilters,
} from '../requests/products';
import { apiProducts } from '../services/api';
import { createFiltresCards } from '../services/markup';
import { dataAsString, refs } from '../services/refs';

// Функція обробки категорій які приходять з сервера
export function normalizeCategory(categ) {
    categ = categ.replace('_&_', ' / ');
    categ = categ.replace('_', ' ');
    return categ;
}
// Функція обробки категорій які йдуть сервер
export function normalizeCategoryServ(categ) {
    categ = categ.replace(/ /g, '_');
    categ = categ.replace(/\//g, encodeURIComponent('&'));
    return categ;
}
// Функція обробки selecter
export function handleChange() {
    const selectedOption =
        refs.productsFiltersSelect.options[
            refs.productsFiltersSelect.selectedIndex
        ];
    let local = localStorage.getItem('filter');
    let storedData = local ? JSON.parse(local) : {};
    const inputValue =
        selectedOption.textContent !== 'Show all'
            ? selectedOption.textContent
            : null;
    storedData.category = inputValue;

    localStorage.setItem('filter', JSON.stringify(storedData));
    // console.log(storedData.category);
    if (storedData.category === null && storedData.keyword === null) {
        localStorage.setItem('filter', dataAsString);
        storedData.category = null;

        fetchAllProducts().then(data => {
            let markup = createFiltresCards(data.results);

            refs.productsCards.innerHTML = markup;
        }).catch;
    } else if (storedData.category !== null && storedData.keyword === null) {
        fetchSearchProducts(
            normalizeCategoryServ(storedData.category),
            storedData.page,
            storedData.limit
        )
            .then(data => {
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    } else if (storedData.category === null && storedData.keyword !== null) {
        localStorage.setItem('filter', JSON.stringify(storedData));
        fetchAllProducts().then(data => {
            let test1 = createFiltresCards(data.results);
            localStorage.setItem('filter', dataAsString);
            refs.productsFilters.value = '';
            refs.productsCards.innerHTML = test1;
        }).catch;
        localStorage.setItem('filter', data1);
        refs.productsFilters.value = '';
    } else if (storedData.category !== null && storedData.keyword !== null) {
        fetchSearchProductsFilters(
            storedData.keyword,
            normalizeCategoryServ(storedData.category),
            storedData.page,
            storedData.limit
        )
            .then(data => {
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
                console.log(data);
            })
            .catch(error => {
                console.console.log();
                error;
            });
    }
}
// Функція обробки submit в фукції filters
export function handleSubmit(event) {
    event.preventDefault();
    const textInput = refs.input.value;
    let local = localStorage.getItem('filter');
    let storedData = local ? JSON.parse(local) : {};

    const inputValue = textInput !== '' ? textInput : null;

    storedData.keyword = inputValue;
    localStorage.setItem('filter', JSON.stringify(storedData));
    // console.log(storedData);
    let data1 = dataAsString;
    if (storedData.keyword === null) {
        fetchAllProducts()
            .then(data => {
                let markup = createFiltresCards(data.results);
                localStorage.setItem('filter', data1);

                // console.log(data1);
                refs.productsCards.innerHTML = markup;
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    } else if (storedData.keyword !== null && storedData.category === null) {
        // console.log('10');
        fetchSearchProductsFilter(
            storedData.keyword,
            storedData.page,
            storedData.limit
        )
            .then(data => {
                // console.log('1');
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
                // console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    } else if (storedData.keyword !== null && storedData.category !== null) {
        // console.log('10');
        fetchSearchProductsFilters(
            storedData.keyword,
            storedData.category,
            storedData.page,
            storedData.limit
        )
            .then(data => {
                // console.log('1');
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
            })
            .catch(error => {
                console.error(error);
            });
    } else if (storedData.keyword !== null && storedData.category === null) {
        // console.log(2);
        localStorage.setItem('filter', JSON.stringify(storedData));
        fetchSearchProductsFilter(
            storedData.keyword,
            storedData.page,
            storedData.limit
        )
            .then(data => {
                // console.log('2');
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
                // console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }
}

// yev
export async function fetchProduct(id) {
    const response = await apiProducts({
        method: 'GET',
        url: `/${id}`,
    });

    return response.data;
}
