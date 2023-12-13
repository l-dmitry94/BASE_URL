import { apiProducts } from '../services/api';
import { refs } from '../services/refs';
import { createFiltresCards } from '../services/markup';
import { dataAsString } from '../services/refs';
import { checkProduct } from '../products/check-products';
import { options } from '../services/pagination';

export async function fetchAllCategories() {
    const response = await apiProducts({
        method: 'GET',
        url: '/categories',
    });

    return response.data;
}

export async function fetchAllProducts() {
    const response = await apiProducts({
        method: 'GET',
        url: `?page=1&limit=${options.itemsPerPage}`,
    });
    checkProduct();

    return response.data;
}
export async function fetchAllProductsPagination(page,limit) {
    const response = await apiProducts({
        method: 'GET',
        url: `?page=${page}&limit=${limit}`,
    });

    return response.data;
}





export async function fetchSearchProductsFilter(keyword, page, limit) {
    const response = await apiProducts({
        method: 'GET',
        url: `?keyword=${keyword}&page=${page}&limit=${limit}`,
    });
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

export async function fetchProduct(id) {
    const response = await apiProducts({
        method: 'GET',
        url: `/${id}`,
    });

    return response.data;
}

export async function fetchAllDiscount() {
    const response = await apiProducts({
        method: 'GET',
        url: '/discount',
    });

    return response.data;
}

export async function fetchAllPopular() {
    const response = await apiProducts({
        method: 'GET',
        url: '/popular',
    });

    return response.data;
}
