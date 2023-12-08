import { apiProducts } from "../services/api";
import { refs } from "../services/refs";
import { createFiltresCards } from "../services/markup";

export async function fetchAllCategories() {
    const response = await apiProducts({
        method: "GET",
        url: '/categories'
    })

    console.log(response.data)

    return response.data;
}
export async function fetchAllProducts() {
    const response = await apiProducts({
        method: "GET"
    })

    console.log(response.data)

    return response.data;
}

export async function fetchSearchProducts(category, page, limit) {
    const response = await apiProducts({
        method: "GET",
        url: `?category=${category}&page=${page}&limit=${limit}`
    });
}


export function normalizeCategory (categ) {
    categ = categ.replace('_&_', ' / ')
    categ = categ.replace('_', ' ')
    return categ
}




export function handleChange() {
    const selectedOption = refs.productsFiltersSelect.options[refs.productsFiltersSelect.selectedIndex];
    let local = localStorage.getItem('filter');
    let storedData = local ? JSON.parse(local) : {};
    storedData.category = selectedOption.textContent;
    console.log(storedData.category.replace(/ /g, '_'));

    localStorage.setItem('filter', JSON.stringify(storedData));
   
    if (refs.productsFilters.value === "") {
        fetchSearchProducts(storedData.category.replace(/ /g, '_'), storedData.page, storedData.limit)
        .then (data => {
            let test = createFiltresCards(data);
            refs.productsCards.innerHTML = test;
            console.log(data);
         })
         
     .catch
    }
    console.log("no")
 }