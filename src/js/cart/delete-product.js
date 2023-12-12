import { common } from "../common/common";
import { quantityProduct } from "../helpers/helpers";
import { createMarkupCartList, createMarkupEmptyCart } from "../services/markup";
import { refs } from "../services/refs";
import { getData, saveData } from "../services/storage";
import { generalSum } from "./general-sum";

export async function handleDeleteProduct(event) {
    const { target } = event;

    const deleteBtn = target.closest(".cart__item-close");

    if(!deleteBtn) {
        return
    }

    const {id} = deleteBtn.closest(".cart__products-item").dataset;

    const cartArr = getData(common.CART_KEY);

    const findProductIndex = cartArr.findIndex(({_id}) => _id === id)

    cartArr.splice(findProductIndex, 1);

    saveData(cartArr, common.CART_KEY)

    refs.cartProducts.innerHTML = createMarkupCartList(cartArr)

    generalSum();

    quantityProduct(cartArr);

    if(!cartArr.length) {
        refs.cardWrapper.innerHTML = createMarkupEmptyCart();
        localStorage.removeItem(common.CART_KEY)
    }
}
