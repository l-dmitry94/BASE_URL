import { apiProducts } from '../services/api';
import { refs } from '../services/refs';
import { createDiscountCards } from '../services/markup';

export async function fetchAllDiscount() {
    const response = await apiProducts({
        method: 'GET',
        url: '/discount',
    });

    console.log(response.data);

    return response.data;
}