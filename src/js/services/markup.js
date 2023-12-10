import { normalizeCategory } from '../products/products';

export function createFiltresCards(arr) {
    return arr
        .map(
            ({ _id, name, img, category, price, size, popularity }) =>
                `
                <li class="cards__item" data-id="${_id}">
                <a class="cards__link" href="${img}">
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
                                    <use href="./img/icons.svg#icon-cart"></use>
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
                    <a class="popular__link" href="${img}">
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
                        <use href="./img/icons.svg#icon-cart"></use>
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
                    <use href="./img/icons.svg#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="./img/icons.svg#icon-discount"></use>
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
    return `<div class="modal" data-id="${_id}">
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
                        <use href="./img/icons.svg#icon-cart"></use>
                    </svg>
                </button>
            </div></div>`;
}
