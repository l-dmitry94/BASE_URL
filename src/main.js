import { handleForm } from './js/requests/subscription';
import { fetchAllCategories } from './js/requests/products';
import { fetchAllProducts } from './js/requests/products';
import { refs } from './js/services/refs';
import { dataAsString } from './js/services/refs';
import { createFiltresCards } from './js/services/markup';
import { handleChange } from './js/requests/products';
import { fetchSearchProducts } from './js/requests/products';
import { fetchSearchProductsFilters } from './js/requests/products';
// import { handleSubmit } from './js/requests/products';

fetchAllCategories()
.then(data => {
    let modifiedCategories = data.map(data => {
        return data.replace(/_/, ' ').replace(/_/, ' ');
    });
    localStorage.setItem('categories', JSON.stringify(modifiedCategories));
    localStorage.setItem('filter', dataAsString);

    // console.log(modifiedCategories);
    let markupList = modifiedCategories
        .map(key => `<option value="" class="products__filters-select" >${key}</option>`)
        .join('');
    let additionalGender = `<option value="" class="products__filters-select" >Show all</option>`;
    // let additionalGender1 = `<option value="" class="products__filters-select" >Categories</option>`;
    refs.productsFiltersSelect.innerHTML = markupList + additionalGender;
}).catch;



// Отримуємо всі продукти
    fetchAllProducts()
    .then (data => {
       let test1 = createFiltresCards(data.results);
 
       refs.productsCards.innerHTML = test1;
    })
.catch

 refs.productsFiltersSelect.addEventListener("change", handleChange) 
 
 
 refs.btnSubmit.addEventListener("submit", handleSubmit); 

function handleSubmit(event) {
    event.preventDefault()
    
    const textInput = refs.input.value;
    console.log(textInput);
    let local = localStorage.getItem('filter');
    let storedData = local ? JSON.parse(local) : {};
    storedData.keyword = textInput;
    console.log(storedData.keyword);

if (storedData.keyword === "") {
    localStorage.setItem('filter', dataAsString);
    // refs.productsFiltersSelect.textContent = 'Show all'
    fetchAllProducts()
    .then (data => {
       let markup = createFiltresCards(data.results);
 
       refs.productsCards.innerHTML = markup;
    })
.catch
} else {
    localStorage.setItem('filter', JSON.stringify(storedData));
    console.log(storedData.keyword);
fetchSearchProductsFilters(storedData.keyword, storedData.category.replace(/ /g, '_'), storedData.page, storedData.limit)
    .then(data => {
       
        
        let test2 = createFiltresCards(data.results);
        refs.productsCards.innerHTML = test2;
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}
}