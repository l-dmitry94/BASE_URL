import {
    fetchAllProducts,
    fetchSearchProducts,
    fetchSearchProductsFilter,
    fetchSearchProductsFilters,
} from '../requests/products';
import { apiProducts } from '../services/api';
import { createFiltresCards } from '../services/markup';
import { dataAsString, refs } from '../services/refs';
import Pagination from 'tui-pagination';
// import { pagination } from '../services/pagination';
import { handleBeforeMove } from '../services/pagination';
import { options } from '../services/pagination';

import { container } from '../services/pagination';
import { checkProduct } from './check-products';
import { createMarkupEmptyKeywordFilter } from '../services/markup';

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

    
    if (storedData.category === null && storedData.keyword === null) {
        // localStorage.setItem('filter', dataAsString);
        storedData.category = null;

        fetchAllProducts().then(data => {
            
            let markup = createFiltresCards(data.results);
           
            refs.productsCards.innerHTML = markup;
            options.totalItems = data.perPage * data.totalPages;
            const pagination = new Pagination(container, options);
            pagination.on('beforeMove', handleBeforeMove);
            refs.paginationElement.style.display = 'block';
            
        }).catch;
    } else if (storedData.category !== null && storedData.keyword === null) {
        fetchSearchProducts(
            normalizeCategoryServ(storedData.category),
            1,
            options.itemsPerPage
        )
            .then(data => {
                if (data.totalPages === 0 || data.totalPages === 1) {
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    refs.paginationElement.style.display = 'none';
                  
                } else {
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    options.totalPages = 1;
                    options.totalItems = data.perPage * data.totalPages;
                    const pagination = new Pagination(container, options);
                    pagination.on('beforeMove', handleBeforeMove);
                    refs.paginationElement.style.display = 'block';
                }
                // pagination.movePageTo(1);
                // options.totalItems = data.perPage * data.totalPages;
                // const pagination = new Pagination(container, options);
                // pagination.on('beforeMove', handleBeforeMove);
            })
            .catch(error => {
                console.log(error);
            });
    } else if (storedData.category === null && storedData.keyword !== null) {
        localStorage.setItem('filter', JSON.stringify(storedData));
        fetchSearchProductsFilter(storedData.keyword,storedData.page,options.itemsPerPage).then(data => {
            if (data.totalPages === 0 || data.totalPages === 1) {
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
                refs.paginationElement.style.display = 'none';
                refs.productsCards.innerHTML = createMarkupEmptyKeywordFilter()
            } else {
            let test1 = createFiltresCards(data.results);
            storedData.category = null;
            // refs.productsFilters.value = '';
            refs.productsCards.innerHTML = test1;
            options.totalItems = data.perPage * data.totalPages;
            const pagination = new Pagination(container, options);
            pagination.on('beforeMove', handleBeforeMove);
            refs.paginationElement.style.display = 'block';
            }
            checkProduct();
        }).catch;
        // localStorage.setItem('filter', data1);
        // refs.productsFilters.value = '';
    } else if (storedData.category !== null && storedData.keyword !== null) {
        fetchSearchProductsFilters(
            storedData.keyword,
            normalizeCategoryServ(storedData.category),
            storedData.page,
            options.itemsPerPage
        )
            .then(data => {
                if (data.totalPages === 0 && data.totalPages === 1) {
                    console.log(data.results);
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    refs.paginationElement.style.display = 'none';
                    refs.productsCards.innerHTML = createMarkupEmptyKeywordFilter()
                } else {
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    options.totalItems = data.perPage * data.totalPages;
                    const pagination = new Pagination(container, options);
                    pagination.on('beforeMove', handleBeforeMove);
                    refs.paginationElement.style.display = 'block';
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    localStorage.setItem('filter', JSON.stringify(storedData));
}
const zeroResult = [];
// Функція обробки submit в фукції filters
export function handleSubmit(event) {
    event.preventDefault();
    const textInput = refs.input.value;
    let local = localStorage.getItem('filter');
    let storedData = local ? JSON.parse(local) : {};
    // pagination.movePageTo(1);
    const inputValue = textInput !== '' ? textInput : null;
    // storedData.page = 1;
    storedData.keyword = inputValue;
    localStorage.setItem('filter', JSON.stringify(storedData));
    let data1 = dataAsString;
    // localStorage.setItem('filter', data1);
    if (storedData.keyword === null && storedData.category !== null) {
        fetchSearchProducts(
            normalizeCategoryServ(storedData.category),
            1,
            options.itemsPerPage
        )
            .then(data => {
                if (data.totalPages === 0 || data.totalPages === 1) {
                    refs.paginationElement.style.display = 'none';
                    let markup = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = markup;
                   
                } else {
                    let markup = createFiltresCards(data.results);
                    options.totalItems = data.perPage * data.totalPages;
                    refs.paginationElement.style.display = 'block';
                    const pagination = new Pagination(container, options);
                    pagination.on('beforeMove', handleBeforeMove);
                    refs.productsCards.innerHTML = markup;
                }
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    } else if (storedData.keyword === null && storedData.category === null) {
        fetchAllProducts()
            .then(data => {

                let markup = createFiltresCards(data.results);
                options.totalItems = data.perPage * data.totalPages;
                refs.paginationElement.style.display = 'block';
                const pagination = new Pagination(container, options);
                pagination.on('beforeMove', handleBeforeMove);
                refs.productsCards.innerHTML = markup;
                
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    } else if (storedData.keyword !== null && storedData.category === null) {

        fetchSearchProductsFilter(
            storedData.keyword,
            1,
            options.itemsPerPage
        )
            .then(data => {
                if (data.totalPages === 0 || data.totalPages === 1) {
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    refs.paginationElement.style.display = 'none';
                    console.log(850);
                    refs.productsCards.innerHTML = createMarkupEmptyKeywordFilter()
                } else {
                    options.totalItems = data.perPage * data.totalPages;
                    const pagination = new Pagination(container, options);
console.log(900);
                    pagination.on('beforeMove', handleBeforeMove);
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    refs.paginationElement.style.display = 'block';
                }
            })
            .catch(error => {
                console.error(error);
            });
    } else if (storedData.keyword !== null && storedData.category !== null) {
        fetchSearchProductsFilters(
            storedData.keyword,
            storedData.category,
            1,
            options.itemsPerPage
        )
            .then(data => {
                if (data.totalPages === 0 || data.totalPages === 1) {
                    refs.paginationElement.style.display = 'none';
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    refs.productsCards.innerHTML = createMarkupEmptyKeywordFilter()
                
                } else {
                    options.totalItems = data.perPage * data.totalPages;
                    const pagination = new Pagination(container, options);
                    // refs.paginationElement.style.display = 'block';
                    pagination.on('beforeMove', handleBeforeMove);
                    // let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                }
            })
            .catch(error => {
                console.error(error);
            });
    } else if (storedData.keyword !== null && storedData.category === null) {
        localStorage.setItem('filter', JSON.stringify(storedData));
        fetchSearchProductsFilter(
            storedData.keyword,
            1,
            options.itemsPerPage
        )
            .then(data => {
                if (data.totalPages === 0 && data.totalPages === 1) {
                    refs.paginationElement.style.display = 'none';
                    console.log(data.results.length);
                    let test2 = createFiltresCards(data.results);
                    refs.productsCards.innerHTML = test2;
                    console.log(500);
                  
                    
                } else  {
                // console.log('2');
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
                options.totalItems = data.perPage * data.totalPages;
                refs.paginationElement.style.display = 'block';
                const pagination = new Pagination(container, options);
                pagination.on('beforeMove', handleBeforeMove);
                console.log(600);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}

export async function fetchProduct(id) {
    const response = await apiProducts({
        method: 'GET',
        url: `/${id}`,
    });

    return response.data;
}
