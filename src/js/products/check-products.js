import { common } from '../common/common';
import { getData } from '../services/storage';
import check from '../../img/icons.svg';

export async function checkProduct() {
    const cartArr = getData(common.CART_KEY);

    if (cartArr) {
        cartArr.forEach(({ _id }) => {
            const product = document.querySelector(`[data-id="${_id}"]`);

            if(product) {
                const productButton = product.querySelector('.cards__button');
                productButton.innerHTML = `<svg class="icon-checked"><use href="${check}#icon-check"></use></svg>`;

            }
        });
    }
}
