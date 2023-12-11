import{g as i,c,q as m,r as e,a as u,b as p,s as _,d as A,e as C}from"./assets/markup-71e8f8eb.js";import{b as T}from"./assets/vendor-4f126749.js";async function b(){const t=i(c.CART_KEY);if(m(t),!t.length){e.cardWrapper.innerHTML=u();return}e.cartProducts.insertAdjacentHTML("beforeend",p(t))}async function h(){localStorage.removeItem(c.CART_KEY),e.cardWrapper.innerHTML=u(),e.cartQuantity.forEach(t=>t.textContent=0)}async function f(){const o=i(c.CART_KEY).reduce((a,{price:n})=>a+n,0);e.totalPrice.textContent=`$${Number(o.toFixed(2))}`}async function E(t){const{target:o}=t,a=o.closest(".cart__item-close");if(!a)return;const{id:n}=a.closest(".cart__products-item").dataset,r=i(c.CART_KEY),s=r.findIndex(({_id:l})=>l===n);r.splice(s,1),_(r,c.CART_KEY),e.cartProducts.innerHTML=p(r),f(),m(r),r.length||(e.cardWrapper.innerHTML=u(),localStorage.removeItem(c.CART_KEY))}async function y(t,o){const a=o.map(({_id:s})=>({productId:s,amount:1})),n=document.querySelector(".cart__submit-button");return n.disabled=!0,(await A({method:"POST",data:{email:t,products:a}})).data}async function g(t){t.preventDefault();const o=document.querySelector(".cart__submit-button"),{email:a}=t.currentTarget.elements,n=a.value.trim();if(!n)return;const r=i(c.CART_KEY);try{const s=await y(n,r);T.create(C(s.message),{onShow:d=>{d.element().querySelector(".checkout__close").onclick=d.close}}).show(),e.sendForm.reset(),e.cardWrapper.innerHTML=u(),localStorage.removeItem(c.CART_KEY),e.cartQuantity.forEach(d=>d.textContent=0),o.disabled=!1}catch(s){console.log(s)}}b();e.deleteAllProductsFromCart.addEventListener("click",h);f();e.cartProducts.addEventListener("click",E);e.sendForm.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map