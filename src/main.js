// import SlimSelect from 'slim-select';
// import "slim-select/dist/slimselect.css"

import { handleForm } from './js/requests/subscription';
import { fetchAllCategories } from './js/requests/products';
import { fetchAllProducts } from './js/requests/products';
import { refs } from './js/services/refs';
import { dataAsString } from './js/services/refs';
import './js/products/discount.js';
import './js/products/popular.js';
import { createFiltresCards, createPopularCards } from './js/services/markup';
import { handleChange } from './js/products/products';
import { handleSubmit } from './js/products/products';
import { normalizeCategory } from './js/products/products';
// Отримуємо всі категорії
import { fetchAllProductsPagination } from './js/requests/products';
import Pagination from 'tui-pagination';
import { options } from './js/services/pagination.js';
import { container } from './js/services/pagination.js';
import { handleBeforeMove } from './js/services/pagination.js';
import { fetchSearchProductsFilter } from './js/requests/products';
import { fetchSearchProductsFilters } from './js/requests/products';
import { fetchSearchProducts } from './js/requests/products';
import { normalizeCategoryServ } from './js/products/products';
// import { pagination } from './js/services/pagination.js';







import { addToCart } from './js/products/add-to-cart';
import { quantityProduct } from './js/helpers/helpers';
import { getData } from './js/services/storage';
import { common } from './js/common/common';
import { handleModal } from './js/products/modal.js';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
        const {
            totalItems,
            itemsPerPage,
            visiblePages,
            page,
            centerAlign,
            firstItemClassName,
            lastItemClassName,
        } = options;

        // const newTotalItems = data.perPage * data.totalPages;e

        console.log(options);
        // pagination = new Pagination(container, options);

        // const pagination = new Pagination(container, options);

        let test1 = createFiltresCards(data.results);
        refs.productsCards.innerHTML = test1;
        options.totalItems = data.perPage * data.totalPages;
        const pagination = new Pagination(container, options);
        pagination.on('beforeMove', handleBeforeMove);

        // pagination = new Pagination(container, options);
    })
    .catch();

// Функція обробки submit в секції filters
refs.productsFiltersSelect.addEventListener('change', handleChange);
// Функція обробки submit в секції filters
refs.btnSubmit.addEventListener('submit', handleSubmit);

refs.productsFiltersSelect.addEventListener('change', handleChange);

// !!!!!!!


// pagination.on('beforeMove', handleBeforeMove);


    // const pagination = new Pagination(container, options);
    // const updatedOptions = {
    //     ...options, // Копіюємо поточні дані з options
    //     totalItems: newTotalItems,
    // }
    // if (currentPage === currentPage) {
    //     return console.log(currentPage);
    //     // return true;
    // }


refs.productsCards.addEventListener('click', event => event.preventDefault());

refs.productsCards.addEventListener('click', addToCart);
refs.popularCards.addEventListener('click', addToCart);
refs.discountCards.addEventListener('click', addToCart);

const cartArr = getData(common.CART_KEY);
quantityProduct(cartArr);

refs.productsCards.addEventListener('click', handleModal);
refs.popularCards.addEventListener('click', handleModal);
refs.discountCards.addEventListener('click', handleModal);
