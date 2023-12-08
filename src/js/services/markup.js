import { normalizeCategory } from "../requests/products";

export function createFiltresCards(arr) {
    return arr
        .map(
            ({ _id, name, img, category, price, size, popularity }) =>
                `<div class="product__cards">
            <ul class="cards">
                <li class="cards__item" data-id="${_id}">
                <a class="cards__link" href="${img}">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${img}" alt="${name}" />
                        </div>
                        <h4 class="cards__title">${name}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${normalizeCategory(category)}</span></p>
                        
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
                </li>
            </ul>
        </div>`
        )
        .join('');
}

export function createPopularCards(arr) {
    return arr
        .map(
            ({ _id, name, img, category, size, popularity }) =>
                `<li class="popular__item" data-id="${_id}">
      <img class="cards__popular-image" src="${img}" alt="${name}" />
      <h4 class="cards__title">${name}</h4>
      <ul class="popular__info">
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
            <button class="popular__button" type="button">
                <svg class="icon__cart" width="12" height="12">
                    <use href="./img/icons.svg#icon-cart"></use>
                </svg>
            </button>
   </li>`
        )
        .join('');
}

export function createDiscountCards(arr) {
    return arr
        .map(
            ({ _id, name, img, price }) =>
                `<li class="discount__item" data-id="${_id}">
            <img class="cards__discount-image" src="${img}" alt="${name}" />
            <div class="discount__desc">
            <h4 class="cards__title">${name}</h4>
            <p class="cards__price">${price}</p>
            </div>
                <button class="cards__button" type="button">
                <svg class="icon__cart" width="18" height="18">
                    <use href="./img/icons.svg#icon-cart"></use>
                </svg>
                </button>
   </li>`
        )
        .join('');
}

export function createModalCards({
    id,
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
                        <use href="./img/icons.svg#icon-cart"></use>
                    </svg>
                </button>
            </div></div>`;
}
