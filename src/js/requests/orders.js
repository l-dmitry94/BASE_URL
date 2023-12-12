import { apiOrders } from '../services/api';

export async function fetchSendOrder(email, arr) {
    const products = arr.map(({ _id }) => ({ productId: _id, amount: 1 }));
    
    const submitBtn = document.querySelector(".cart__submit-button");

    submitBtn.disabled = true;

    const response = await apiOrders({
        method: 'POST',
        data: {
            email: email,
            products: products,
        },
    });


    return response.data;
}
