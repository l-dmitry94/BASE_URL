import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api';

export const apiProducts = axios.create({
    baseURL: `${BASE_URL}/products`,
});

export const apiSubscription = axios.create({
    baseURL: `${BASE_URL}/subscription`,
});

export const apiOrders = axios.create({
    baseURL: `${BASE_URL}/orders`,
});
