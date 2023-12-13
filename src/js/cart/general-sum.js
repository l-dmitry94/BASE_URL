import { common } from "../common/common";
import { refs } from "../services/refs";
import { getData } from "../services/storage";

export async function generalSum() {
    const cartArr = getData(common.CART_KEY);

    console.log(cartArr)
    
    const totalSum = cartArr.reduce((total, {price}) => {
        return total + Number(price);
    }, 0)

    console.log(totalSum)

    refs.totalPrice.textContent = `$${Number(totalSum.toFixed(2))}`
}