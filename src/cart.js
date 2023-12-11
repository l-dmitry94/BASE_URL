import { handleCart } from "./js/cart/cart";
import { handleDeleteAllFromCart } from "./js/cart/delete-from-cart";
import { handleDeleteProduct } from "./js/cart/delete-product";
import { generalSum } from "./js/cart/general-sum";
import { refs } from "./js/services/refs";

handleCart();

refs.deleteAllProductsFromCart.addEventListener("click", handleDeleteAllFromCart);

generalSum();

refs.cartProducts.addEventListener("click", handleDeleteProduct)