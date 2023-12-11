import { apiProducts } from '../services/api';
import { refs } from '../services/refs';
import { createFiltresCards } from '../services/markup';
import { dataAsString } from '../services/refs';

export async function fetchAllCategories() {
    const response = await apiProducts({
        method: 'GET',
        url: '/categories',
    });

    // console.log(response.data);

    return response.data;
}

export async function fetchAllProducts() {
    const response = await apiProducts({
        method: 'GET',
    });

    // console.log(response.data);

    return response.data;
}
export async function fetchAllProductsPagination(page,limit) {
    const response = await apiProducts({
        method: 'GET',
        url: `?page=${page}&limit=${limit}`,
    });

    console.log(response.data);

    return response.data;
}





export async function fetchSearchProductsFilter(keyword, page, limit) {
    const response = await apiProducts({
        method: 'GET',
        url: `?keyword=${keyword}&page=${page}&limit=${limit}`,
    });
    // console.log(response.data);
    return response.data;
}

export async function fetchSearchProductsFilters(
    keyword,
    category,
    page,
    limit
) {
    const response = await apiProducts({
        method: 'GET',
        url: `?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`,
    });
    return response.data;
}

export async function fetchSearchProducts(category, page, limit) {
    const response = await apiProducts({
        method: 'GET',
        url: `?category=${category}&page=${page}&limit=${limit}`,
    });
    return response.data;
}