import { apiProducts } from '../services/api';
import { refs } from '../services/refs';
import { createPopularCards } from '../services/markup';

export async function fetchAllPopular() {
    const response = await apiProducts({
        method: 'GET',
        url: '/popular',
    });

    return response.data;
}
