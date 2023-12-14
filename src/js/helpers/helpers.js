import { refs } from '../services/refs';

export function normalizeCategory(category) {
    category = category.replace('_&_', ' / ');
    category = category.replace('_', ' ');
    return category;
}

export function quantityProduct(cartArr) {
    return refs.cartQuantity.forEach(
        item => (item.textContent = cartArr.length)
    );
}
export function addDiscountToCart(data) {
    const iconDiscounts = document.querySelectorAll('.icon__cart-discount');
    data.results.forEach(({ is10PercentOff }, index) => {
        if (is10PercentOff) {
            iconDiscounts[index].classList.add('icon-visible');
        }
    });
}
