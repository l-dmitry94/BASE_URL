import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

import { common } from '../common/common';
import { fetchSendOrder } from '../requests/orders';
import { getData } from '../services/storage';
import { createMarkupEmptyCart, createMarkupSuccessOrder } from '../services/markup';
import { refs } from '../services/refs';

export async function handleSendProducts(event) {
    event.preventDefault();

    const submitBtn = document.querySelector('.cart__submit-button');

    const { email } = event.currentTarget.elements;

    const emailValue = email.value.trim();

    if (!emailValue) {
        Notiflix.Notify.warning('Please enter your email');
        return;
    }

    const cartArr = getData(common.CART_KEY);
    try {
        Notiflix.Loading.standard();
        const data = await fetchSendOrder(emailValue, cartArr);

        const instance = basicLightbox.create(
            createMarkupSuccessOrder(data.message),
            {
                onShow: instance => {
                    instance
                        .element()
                        .querySelector('.checkout__close').onclick =
                        instance.close;
                },
            }
        );

        instance.show();

        refs.sendForm.reset();

        refs.cardWrapper.innerHTML = createMarkupEmptyCart();

        localStorage.removeItem(common.CART_KEY);

        refs.cartQuantity.forEach(item => item.textContent = 0)

        submitBtn.disabled = false;
    } catch (error) {
        Notiflix.Notify.failure('Failed to send order');
    }
}
