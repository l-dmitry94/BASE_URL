import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { fetchProduct } from '../requests/products';
import { createModalCards } from '../services/markup';
import { refs } from '../services/refs';
import { addToCart } from './add-to-cart';
import { checkProduct } from './check-products';
import { getData } from '../services/storage';
import { common } from '../common/common';
import check from '../../img/icons.svg'

export async function handleModal(event) {
    event.preventDefault();
    const { target } = event;
    const addBtn = target.closest('.cards__button');
    const productLink = target.closest('.cards__link');
    if (addBtn || !productLink) {
        return;
    }
    const { id } = productLink.closest('.cards__item').dataset;
    const product = await fetchProduct(id);

    const instance = basicLightbox.create(createModalCards(product), {
        onShow: instance => {
            const modalProduct = instance.element().querySelector(".modal__item");
            const modalBtn = modalProduct.querySelector(".cards__button")
            modalProduct.addEventListener("click", addToCart);

            const cartArr = getData(common.CART_KEY);
            const inStorage = cartArr.find(({ _id }) => _id === id);

            if (inStorage) {
                modalBtn.innerHTML = `<svg class="icon-checked"><use href="${check}#icon-check"></use></svg>`;
            }

            checkProduct();
            instance
                .element()
                .querySelector('.modal__item-close').onclick =
                instance.close;
        },
    });

    instance.show();
}
