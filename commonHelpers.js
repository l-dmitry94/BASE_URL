import{g as i,c,q as f,r as t,a as l,b as E,s as y,d as b,e as C}from"./assets/subscription-c04da169.js";import{b as A}from"./assets/vendor-4f126749.js";async function T(){const e=i(c.CART_KEY);if(f(e),!e.length){t.cardWrapper.innerHTML=l();return}t.cartProducts.insertAdjacentHTML("beforeend",E(e))}async function h(){localStorage.removeItem(c.CART_KEY),t.cardWrapper.innerHTML=l(),t.cartQuantity.forEach(e=>e.textContent=0)}async function _(){const o=i(c.CART_KEY).reduce((a,{price:n})=>a+n,0);t.totalPrice.textContent=`$${Number(o.toFixed(2))}`}async function L(e){const{target:o}=e,a=o.closest(".cart__item-close");if(!a)return;const{id:n}=a.closest(".cart__products-item").dataset,r=i(c.CART_KEY),s=r.findIndex(({_id:m})=>m===n);r.splice(s,1),y(r,c.CART_KEY),t.cartProducts.innerHTML=E(r),_(),f(r),r.length||(t.cardWrapper.innerHTML=l(),localStorage.removeItem(c.CART_KEY))}async function g(e,o){const a=o.map(({_id:s})=>({productId:s,amount:1})),n=document.querySelector(".cart__submit-button");return n.disabled=!0,(await b({method:"POST",data:{email:e,products:a}})).data}const p=document.body;async function S(e){e.preventDefault();const o=document.querySelector(".cart__submit-button"),{email:a}=e.currentTarget.elements,n=a.value.trim();if(!n)return;const r=i(c.CART_KEY);try{const s=await g(n,r);A.create(C(s.message),{onShow:d=>{p.classList.add("modal-open"),window.addEventListener("keydown",u=>{u.code==="Escape"&&d.close()}),d.element().querySelector(".checkout__close").onclick=d.close},onClose:d=>{p.classList.remove("modal-open"),window.removeEventListener("keydown",u=>{u.code==="Escape"&&d.close()})}}).show(),t.sendForm.reset(),t.cardWrapper.innerHTML=l(),localStorage.removeItem(c.CART_KEY),t.cartQuantity.forEach(d=>d.textContent=0),o.disabled=!1}catch(s){console.log(s)}}T();t.deleteAllProductsFromCart.addEventListener("click",h);_();t.cartProducts.addEventListener("click",L);t.sendForm.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
