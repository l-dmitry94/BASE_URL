import { apiProducts } from '../services/api';
import { refs } from '../services/refs';
import { createFiltresCards } from '../services/markup';
import { dataAsString } from '../services/refs';

export async function fetchAllCategories() {
    const response = await apiProducts({
        method: 'GET',
        url: '/categories',
    });

    console.log(response.data);

    return response.data;
}
export async function fetchAllProducts() {
    const response = await apiProducts({
        method: 'GET',
    });

    console.log(response.data);

    return response.data;
}

export async function fetchSearchProductsFilters(keyword, category, page, limit) {
    const response = await apiProducts({
        method: 'GET',
        url: `?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`,
    });
    console.log(response.data);
    return response.data;
   
}

export async function fetchSearchProducts(category, page, limit) {
    const response = await apiProducts({
        method: 'GET',
        url: `?category=${category}&page=${page}&limit=${limit}`,
    });
    return response.data;
}

export function normalizeCategory(categ) {
    categ = categ.replace('_&_', ' / ');
    categ = categ.replace('_', ' ');
    return categ;
}

export function handleChange() {
    const selectedOption =
        refs.productsFiltersSelect.options[
            refs.productsFiltersSelect.selectedIndex
        ];
    let local = localStorage.getItem('filter');
    let storedData = local ? JSON.parse(local) : {};
    storedData.category = selectedOption.textContent;
    console.log(storedData.category);
    if (storedData.category === 'Show all') {
        localStorage.setItem('filter', dataAsString);
        fetchAllProducts().then(data => {
            let markup = createFiltresCards(data.results);

            refs.productsCards.innerHTML = markup;
        }).catch;
    } else {
        fetchSearchProducts(
            storedData.category.replace(/ /g, '_'),
            storedData.page,
            storedData.limit
        )
            .then(data => {
                let test2 = createFiltresCards(data.results);
                refs.productsCards.innerHTML = test2;
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
        localStorage.setItem('filter', JSON.stringify(storedData));
    }
}
