import { refs } from "./refs";
import { Pagination } from "tui-pagination";
import { fetchAllProductsPagination } from "../requests/products";
import { createFiltresCards } from "./markup";
import { fetchSearchProductsFilter } from "../requests/products";
import { fetchSearchProductsFilters } from "../requests/products";
import { fetchSearchProducts } from "../requests/products";
import { normalizeCategoryServ } from "../products/products";
import { dataAsString } from "./refs";


export const container = refs.pagination;
export const options = {
    // below default value of options
    totalItems: 100,
    itemsPerPage: 6,
    visiblePages: 2,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
    },
};




export function handleBeforeMove(event) {
    const currentPage = event.page;
    console.log(currentPage);
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
    let data1 = dataAsString;
    storedData.page = currentPage;
    localStorage.setItem('filter', JSON.stringify(storedData));

    const {
        totalItems,
        itemsPerPage,
        visiblePages,
        page,
        centerAlign,
        firstItemClassName,
        lastItemClassName,
    } = options;
    const newTotalItems = 0;

    const inputSelectet1 = refs.productsFiltersSelect.value;

    if (storedData.keyword === null && inputSelectet1 === 'Show all') {
        fetchAllProductsPagination(currentPage, storedData.limit)
            .then(data => {
                let markup = createFiltresCards(data.results);
                // console.log(storedData.page);
                // const newTotalItems = data.perPage * data.totalPages;
                // console.log(newTotalItems);
                console.log();
                // options.totalItems = data.perPage * data.totalPages;
                // const pagination = new Pagination(container, options);
                // options.totalItems = data.perPage * data.totalPages;
                // const pagination = new Pagination(container, options);
                //  pagination.on('beforeMove', handleBeforeMove )
                // localStorage.setItem('filter', data1);

                // console.log(data1);
                refs.productsCards.innerHTML = markup;
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    } else if (storedData.keyword !== null && inputSelectet1 === 'Show all') {
        fetchSearchProductsFilter(
            storedData.keyword,
            currentPage,
            storedData.limit
        )
            .then(data => {
                console.log(
                    storedData.keyword,
                    storedData.page,
                    storedData.page
                );
                let markup = createFiltresCards(data.results);
                // console.log(storedData.page);
                const newTotalItems = data.perPage * data.totalPages;
                // console.log(newTotalItems);
                // localStorage.setItem('filter', data1);

                // console.log(data1);
                refs.productsCards.innerHTML = markup;
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    } else if (storedData.keyword !== null && storedData.category !== null) {
        fetchSearchProductsFilters(
            storedData.keyword,
            storedData.category,
            currentPage,
            storedData.limit
        )
            .then(data => {
                console.log(
                    storedData.keyword,
                    storedData.page,
                    storedData.page
                );
                let markup = createFiltresCards(data.results);
                console.log(storedData.page);
                const newTotalItems = data.perPage * data.totalPages;
                console.log(newTotalItems);
                // localStorage.setItem('filter', data1);

                // console.log(data1);
                refs.productsCards.innerHTML = markup;
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    } else if (storedData.keyword === null && storedData.category !== null) {
        fetchSearchProducts(
            normalizeCategoryServ(storedData.category),
            currentPage,
            storedData.limit
        )
            .then(data => {
                let markup = createFiltresCards(data.results);
                console.log(storedData.page);
                // const newTotalItems = data.perPage * data.totalPages;
                // console.log(newTotalItems);
                // localStorage.setItem('filter', data1);
                options.totalItems = data.perPage * data.totalPages;
            
               

                console.log(data1);
                refs.productsCards.innerHTML = markup;
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    }
}
// export const pagination = new Pagination(container, options);

function updatePaginationSettings() {
    if (window.innerWidth >= 375) {
        options.visiblePages = 4;
        options.itemsPerPage = 9;
    } else {
        options.visiblePages = 2;
        options.itemsPerPage = 6;
    }


}


window.addEventListener('resize', updatePaginationSettings);


updatePaginationSettings();