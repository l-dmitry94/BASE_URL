import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from '../common/common';
import { fetchSendOrder } from '../requests/orders';
import { getData } from '../services/storage';
import {
    createMarkupEmptyCart,
    createMarkupSuccessOrder,
} from '../services/markup';
import { refs } from '../services/refs';

const body = document.body;

export async function handleSendProducts(event) {
    event.preventDefault();

    const submitBtn = document.querySelector('.cart__submit-button');

    const { email } = event.currentTarget.elements;

    const emailValue = email.value.trim();

    if (!emailValue) {
        return;
    }

    const cartArr = getData(common.CART_KEY);
    try {
        const data = await fetchSendOrder(emailValue, cartArr);

        const instance = basicLightbox.create(
            createMarkupSuccessOrder(data.message),
            {
                onShow: instance => {
                    body.classList.add('modal-open');
                    window.addEventListener('keydown', event => {
                        if (event.code === 'Escape') {
                            instance.close();
                        }
                    });
                    instance
                        .element()
                        .querySelector('.checkout__close').onclick =
                        instance.close;
                },
                onClose: instance => {
                    body.classList.remove('modal-open');
                    window.removeEventListener('keydown', event => {
                        if (event.code === 'Escape') {
                            instance.close();
                        }
                    });
                },
            }
        );

        instance.show();

        refs.sendForm.reset();

        refs.cardWrapper.innerHTML = createMarkupEmptyCart();

        localStorage.removeItem(common.CART_KEY);

        refs.cartQuantity.forEach(item => (item.textContent = 0));

        submitBtn.disabled = false;
    } catch (error) {
        console.log(error);
    }
}
