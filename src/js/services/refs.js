export const refs = {
    productsFilters:document.querySelector('.products__filters-input'),
    productsFiltersSelect: document.querySelector('.products__filters-select'),
    productsCards: document.querySelector('.product__cards')
    
}
export let baseDataToStore = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6
  };
 export let dataAsString = JSON.stringify(baseDataToStore);