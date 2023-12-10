import { common } from "../common/common";
import { quantityProduct } from "../helpers/helpers";
import { createMarkupEmptyCart } from "../services/markup";
import { refs } from "../services/refs";

export async function handleDeleteAllFromCart() {

    localStorage.removeItem(common.CART_KEY)
    
    refs.cardWrapper.innerHTML = createMarkupEmptyCart();

    refs.cartQuantity.forEach(item => item.textContent = 0)

} 