import { normalizeCategory } from '../products/products';
import icons from '../../img/icons.svg';

export function createFiltresCards(arr) {
    return arr
        .map(
            ({ _id, name, img, category, price, size, popularity }) =>
                `
                <li class="cards__item" data-id="${_id}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${img}" alt="${name}" />
                        </div>
                        <h4 class="cards__title">${name}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${normalizeCategory(
                                category
                            )}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${size}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${popularity}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${price}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${icons}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`
        )
        .join('');
}

export function createPopularCards(arr) {
    return arr
        .map(
            ({ _id, name, img, category, size, popularity }) =>
                `<li class="cards__item popular__item" data-id="${_id}">
                    <a class="popular__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="popular__image-photo-js" src="${img}" alt="${name}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${name}</h4>
                    <ul class="cards__info popular__info">
                        <li class="cards__info-item popular__info-up">
                            <p class="cards__info-title">Category:</p>
                            <p class="cards__info-value">${category}</p>
                        </li>
                        <li class="popular__info-down">
                            <div class="cards__info-item">
                                <p class="cards__info-title">Size:</p>
                                <p class="cards__info-value">${size}</p>
                            </div>
                            <div class="cards__info-item">
                                <p class="cards__info-title">Popularity:</p>
                                <p class="cards__info-value">${popularity}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <button class="popular__card-button" type="button">
                    <svg class="popular__icon__cart">
                        <use href="${icons}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`
        )
        .join('');
}

export function createDiscountCards(arr) {
    return arr
        .map(
            ({ _id, name, img, price }) =>
                `<li class="discount__item" data-id="${_id}">
                 <a class="discount__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${img}" alt="${name}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${name}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${price}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="${icons}#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="${icons}#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`
        )
        .join('');
}

export function createModalCards({
    _id,
    name,
    img,
    category,
    price,
    size,
    popularity,
    desc,
}) {
    return `<div class="modal__item" data-id="${_id}">
                <img class="cards__image-photo" src="${img}" alt="${name}" />
                <div class="cards__main">
                    <h4 class="cards__title">${name}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${category}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${size}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${popularity}</span></p>
                        </li>
                    </ul>
                    <p class="cards__desc-modal">${desc}</p>
                </div>
                <div class="cards__main">
                    <p class="cards__price">${price}</p>
                    <button class="cards__button" type="button"> Add to
                        <svg class="icon__cart" width="18" height="18">
                            <use href="${icons}#icon-cart"></use>
                        </svg>
                    </button>
                </div>
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${icons}#icon-close"></use>
                    </svg>
                </button>
            </div>`;
}

export function createMarkupCartList(arr) {
    return arr
        .map(
            ({ _id, name, img, category, price, size }) => `
            <li class="cart__products-item" data-id="${_id}">
                <div class="cart__item-space">
                    <img src="${img}" alt="${name}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${name}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${normalizeCategory(
                                category
                            )}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${size}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${price}</span>
                        <div class="cart__item-quantity">
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${icons}#icon-minus"></use>
                                </svg>
                            </button>
                            <span class="cart__item-number">1</span>
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${icons}#icon-plus"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${icons}#icon-close"></use>
                    </svg>
                </button>
            </li>
    `
        )
        .join('');
}

export function createMarkupEmptyCart() {
    return `
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="../img/cart/empty-tab.png 1x, ../img/cart/empty-tab@2x.png 2x">
        <source media="(min-width: 320px)" srcset="../img/cart/empty-mobile.png 1x, ../img/cart/empty-mobile@2x.png 2x">
        <img class="empty__img" src="../img/cart/empty-mobile.png" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`;
}
