import { refs } from '../services/refs';
import { createDiscountCards } from '../services/markup';
import { fetchAllDiscount } from '../requests/products';
import { checkProduct } from './check-products';

fetchAllDiscount().then(data => {
    let discount = createDiscountCards(data.slice(0, 2));
    refs.discountCards.innerHTML = discount;
    checkProduct();
}).catch;
