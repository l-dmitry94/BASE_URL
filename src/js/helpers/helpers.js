import { refs } from "../services/refs";

export function normalizeCategory(category) {
    category = category.replace('_&_', ' / ');
    category = category.replace('_', ' ');
    return category;
}

export function quantityProduct(cartArr) {
    return refs.cartQuantity.forEach(item => item.textContent = cartArr.length)
}