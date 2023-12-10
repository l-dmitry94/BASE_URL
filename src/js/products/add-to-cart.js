import { common } from "../common/common";
import { fetchProduct } from "../requests/products";
import {getData} from '../services/storage';
import check from '../../img/icons.svg'

const cartArr = getData(common.CART_KEY)

export async function addToCart(event) {
    const {target} = event;

    const addBtn = target.closest(".cards__button");

    if(!addBtn) {
        return
    }

    const {id} = addBtn.closest(".cards__item").dataset;

    const product = await fetchProduct(id);

    const inStorage = cartArr.some(({_id}) => id === _id);

    if(inStorage) {
        return
    }

    cartArr.push(product);

    localStorage.setItem(common.CART_KEY, JSON.stringify(cartArr));

    const checkItem = cartArr.some(({_id}) => id === _id);

    if(checkItem) {
        addBtn.innerHTML = `<svg class="icon-checked"><use href="${check}#icon-check"></use></svg>`
    }
}