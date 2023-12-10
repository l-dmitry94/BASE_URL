import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { fetchProduct } from '../requests/products';
import { refs } from '../services/refs';
import { createModalCards } from '../services/markup';

export async function handleModal(event) {
    event.preventDefault();
    const { target } = event;
    const productLink = target.closest('.cards__link');
    if (!productLink) return;
    const { id } = productLink.closest('.cards__item').dataset;
    const product = await fetchProduct(id);

    const instance = basicLightbox.create(createModalCards(product));

    /*, {
        onShow: instance => {
            instance.element().querySelector('a').onclick = instance.close;
        },
    }); */

    instance.show();
}
