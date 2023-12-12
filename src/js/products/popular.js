import { fetchAllPopular } from "../requests/products";
import { createPopularCards } from "../services/markup";
import { refs } from "../services/refs";
import { checkProduct } from "./check-products";

fetchAllPopular().then(data => {
    let popular = createPopularCards(data.slice(0, 5));
    refs.popularCards.innerHTML = popular;
    checkProduct();
}).catch;
