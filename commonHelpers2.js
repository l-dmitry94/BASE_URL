import{f as b,h as I,r as s,i as _,j as H,k as x,g as S,c as i,l as E,m as p,n as R,s as A,o as q,p as k,t as T,u as $,v as f,w,x as P,y as D,z as y,A as F,B as K,q as Y}from"./assets/subscription-da2324c1.js";import{b as B,S as O,P as M}from"./assets/vendor-235ad0d8.js";b().then(e=>{let o=I(e.slice(0,2));s.discountCards.innerHTML=o,_()}).catch;H().then(e=>{let o=x(e.slice(0,5));s.popularCards.innerHTML=o,_()}).catch;const h=S(i.CART_KEY);async function C(e){const{target:o}=e,a=o.closest(".cards__button");if(!a)return;const{id:n}=a.closest(".cards__item").dataset,t=await E(n);if(h.some(({_id:l})=>n===l))return;h.push(t);const m=document.querySelector(".header__menu-link-quantity");m.textContent=h.length,localStorage.setItem(i.CART_KEY,JSON.stringify(h)),h.some(({_id:l})=>n===l)&&(a.innerHTML=`<svg class="icon-checked"><use href="${p}#icon-check"></use></svg>`)}async function L(e){e.preventDefault();const{target:o}=e,a=o.closest(".cards__button"),n=o.closest(".cards__link");if(a||!n)return;const{id:t}=n.closest(".cards__item").dataset,d=await E(t);B.create(R(d),{onShow:r=>{const u=r.element().querySelector(".modal__item").querySelector(".cards__button");S(i.CART_KEY).find(({_id:c})=>c===t)?u.innerHTML=`Remove from <svg class="icon__cart" width="18" height="18"><use href="${p}#icon-cart"></use></svg>`:u.innerHTML=`Add to <svg class="icon__cart" width="18" height="18"><use href="${p}#icon-cart"></use></svg>`,u.addEventListener("click",()=>{const c=S(i.CART_KEY);if(c.some(({_id:g})=>t===g)){const g=c.findIndex(({_id:v})=>v===t);g!==-1&&c.splice(g,1),A(c,i.CART_KEY),u.innerHTML=`Add to <svg class="icon__cart" width="18" height="18"><use href="${p}#icon-cart"></use></svg>`}else{if(c.some(({_id:v})=>t===v))return;c.push(d),A(c,i.CART_KEY),u.innerHTML=`Remove from <svg class="icon__cart" width="18" height="18"><use href="${p}#icon-cart"></use></svg>`}}),_(),r.element().querySelector(".modal__item-close").onclick=r.close}}).show()}q().then(e=>{let o=e.map(t=>k(t));localStorage.setItem("filter",T);let a=o.map(t=>`<option value="${t}">${k(t)}</option>`).join(""),n="<option  selected  >Show all</option>";s.productsFiltersSelect.innerHTML=a+n,new O({select:s.productsFiltersSelect,showSearch:!1})}).catch;$().then(e=>{console.log(f);let o=w(e.results);s.productsCards.innerHTML=o,f.totalItems=e.perPage*e.totalPages,new M(P,f).on("beforeMove",D),_()}).catch();s.productsFiltersSelect.addEventListener("change",y);s.btnSubmit.addEventListener("submit",F);s.productsFiltersSelect.addEventListener("change",y);const J=new M(P,f);J.on("beforeMove",e=>{const o=e.page,a=s.productsFiltersSelect.options[s.productsFiltersSelect.selectedIndex];let n=localStorage.getItem("filter"),t=n?JSON.parse(n):{};const d=a.textContent!=="Show all"?a.textContent:null;t.category=d;let m=T;t.page=o,localStorage.setItem("filter",JSON.stringify(t)),t.keyword===null&&t.category===null&&K(o,t.limit).then(r=>{let l=w(r.results);console.log(t.page),localStorage.setItem("filter",m),s.productsCards.innerHTML=l}).catch(r=>{console.error(r)})});s.productsCards.addEventListener("click",e=>e.preventDefault());s.productsCards.addEventListener("click",C);s.popularCards.addEventListener("click",C);s.discountCards.addEventListener("click",C);const N=S(i.CART_KEY);Y(N);s.productsCards.addEventListener("click",L);s.popularCards.addEventListener("click",L);s.discountCards.addEventListener("click",L);
//# sourceMappingURL=commonHelpers2.js.map
