import{g as e,c as a,q as i,r,a as n,b as l}from"./assets/markup-72daf5e8.js";import"./assets/vendor-0363fca5.js";async function u(){const t=e(a.CART_KEY);if(i(t),!t.length){r.cardWrapper.innerHTML=n();return}r.cartProducts.insertAdjacentHTML("beforeend",l(t))}async function d(){localStorage.removeItem(a.CART_KEY),r.cardWrapper.innerHTML=n(),r.cartQuantity.forEach(t=>t.textContent=0)}async function m(){const c=e(a.CART_KEY).reduce((o,{price:s})=>o+s,0);r.totalPrice.textContent=`$${c}`}u();r.deleteAllProductsFromCart.addEventListener("click",d);m();
//# sourceMappingURL=commonHelpers.js.map
