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

// function showModalProduct(productData) {
//     const modalContent = createModalCards(productData);
//     const instance = basicLightbox.create(modalContent, {
//         onShow: instance => {
//             window.addEventListener('keydown', onEscapePress);
//         },
//         onClose: instance => {
//             window.removeEventListener('keydown', onEscapePress);
//         },
//     });
//     instance.show();

//     function onEscapePress(event) {
//         if (event.code === 'Escape') {
//             instance.close();
//         }
//     }
// }

// function onProductClick(event) {
//     event.preventDefault();
//     if (!event.target.closest('.product__cards')) {
//         return;
//     }

//     const productData = {};

//     showModalProduct(productData);
// }

// const modalContainer = document.querySelector('.hero__title');
// modalContainer.addEventListener('click', onProductClick);
