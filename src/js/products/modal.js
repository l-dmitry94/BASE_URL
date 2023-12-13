import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { fetchProduct } from '../requests/products';
import { createModalCards } from '../services/markup';
import { refs } from '../services/refs';
import { addToCart } from './add-to-cart';
import { checkProduct } from './check-products';
import { getData, saveData } from '../services/storage';
import { common } from '../common/common';
import check from '../../img/icons.svg';
import icons from '../../img/icons.svg';

const body = document.body;

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

    const modalBtnClickHandler = modalBtn => {
        const cartArr = getData(common.CART_KEY);
        const inStorage = cartArr.find(({ _id }) => id === _id);

        if (inStorage) {
            const findProductIndex = cartArr.findIndex(({ _id }) => _id === id);
            if (findProductIndex !== -1) {
                cartArr.splice(findProductIndex, 1);
            }

            const quantity = document.querySelector(
                '.header__menu-link-quantity'
            );
            quantity.textContent = cartArr.length;
            saveData(cartArr, common.CART_KEY);
            if (!cartArr.length) {
                localStorage.removeItem(common.CART_KEY);
            }

            modalBtn.innerHTML = `Add to <svg class="icon__cart" width="18" height="18"><use href="${icons}#icon-cart"></use></svg>`;
        } else {
            const inStorage = cartArr.some(({ _id }) => id === _id);

            if (inStorage) {
                return;
            }

            cartArr.push(product);

            const quantity = document.querySelector(
                '.header__menu-link-quantity'
            );
            quantity.textContent = cartArr.length;

            saveData(cartArr, common.CART_KEY);

            modalBtn.innerHTML = `Remove from <svg class="icon__cart" width="18" height="18"><use href="${icons}#icon-cart"></use></svg>`;
        }
    };

    const instance = basicLightbox.create(createModalCards(product), {
        onShow: instance => {
            body.classList.add('modal-open');
            window.addEventListener('keydown', event => {
                if (event.code === 'Escape') {
                    instance.close();
                }
            });
            const modalProduct = instance
                .element()
                .querySelector('.modal__item');
            const modalBtn = modalProduct.querySelector('.cards__button');
            const cartArr = getData(common.CART_KEY);
            const inStorage = cartArr.find(({ _id }) => _id === id);
            if (!inStorage) {
                modalBtn.innerHTML = `Add to <svg class="icon__cart" width="18" height="18"><use href="${icons}#icon-cart"></use></svg>`;
            } else {
                modalBtn.innerHTML = `Remove from <svg class="icon__cart" width="18" height="18"><use href="${icons}#icon-cart"></use></svg>`;
            }

            modalBtn.addEventListener('click', () =>
                modalBtnClickHandler(modalBtn)
            );

            checkProduct();
            instance.element().querySelector('.modal__item-close').onclick =
                instance.close;
        },
        onClose: instance => {
            body.classList.remove('modal-open');
            window.removeEventListener('keydown', event => {
                if (event.code === 'Escape') {
                    instance.close();
                }
            });
            const modalProduct = instance
                .element()
                .querySelector('.modal__item');
            const modalBtn = modalProduct.querySelector('.cards__button');
            modalBtn.removeEventListener('click', () =>
                modalBtnClickHandler(modalBtn)
            );
        },
    });

    instance.show();
}
