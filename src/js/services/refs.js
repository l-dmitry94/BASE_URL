export const refs = {
    productsFilters: document.querySelector('.products__filters-input'),
    productsFiltersSelect: document.querySelector('.products__filters-select'),
    productsCards: document.querySelector('.cards'),
    btnSubmit: document.querySelector('.products__filters-form'),
    input: document.querySelector('.products__filters-input'),
    discountCards: document.querySelector('.discount__list'),
    popularCards: document.querySelector('.popular__list'),
    cardWrapper: document.querySelector('.cart__wrapper'),
};
export let baseDataToStore = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
};
export let dataAsString = JSON.stringify(baseDataToStore);

export const footerFormRef = document.querySelector('.footer__form');