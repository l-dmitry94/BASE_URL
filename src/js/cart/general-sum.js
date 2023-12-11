import { common } from "../common/common";
import { refs } from "../services/refs";
import { getData } from "../services/storage";

export async function generalSum() {
    const cartArr = getData(common.CART_KEY);
    
    const totalSum = cartArr.reduce((total, {price}) => {
        return total + price;
    }, 0)

    refs.totalPrice.textContent = `$${Number(totalSum.toFixed(2))}`
}