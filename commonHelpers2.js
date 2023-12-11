import{d as b,f as S,e as k,h as C,i as x,r as a,j as T,g as y,c as m,k as w,l as q,m as A,n as g,o as P,p as M,s as F,t as L,u as R,v as B,q as D}from"./assets/markup-71932f76.js";import{b as p}from"./assets/vendor-0363fca5.js";const $="/BASE_URL/assets/subscription-tab-ac534afc.png",H="/BASE_URL/assets/subscription.png-0e0f2d9d.png",f=window.matchMedia("(min-width: 768px)");f.addEventListener("change",h);let r,u;document.querySelector(".modal");const i=p.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${b}#icon-close"></use>
        </svg>
    </button>
    <div class="footer__modal-title-text">
        <h2 class="footer__modal-title">
            Thanks for subscribing for
            <span class="footer__modal-span">new </span>products
        </h2>
        <p class="footer__modal-text">
            We promise you organic and high-quality products that will meet
            your expectations. Please stay with us and we promise you many
            pleasant surprises.
        </p>
    </div>
    <div class="footer__modal-png">
        <img
            src="${r}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,{onShow:e=>{window.addEventListener("keydown",E),u=e.element().querySelector(".footer__modal-close"),u.addEventListener("click",()=>e.close()),document.body.classList.add("modal-open")},onClose:()=>{u.removeEventListener("click",()=>i.close()),window.removeEventListener("keydown",E),document.body.classList.remove("modal-open"),f.removeEventListener("change",h)}});function E(e){e.code==="Escape"&&i.close()}function h(){f.matches?r=$:r=H,i.show(()=>{const e=i.element().querySelector(".footer__modal-png");e&&(e.querySelector("img").src=r)})}const U=function(){let e;const t=p.create(`
        <div class="modal-Existed">
        <div class="footer__modal-Existed">
            <button type="button" class="footer__modal-close">
                <svg class="footer__modal-icon">
                    <use href="../../img/icons.svg#icon-close"></use>
                </svg>
            </button>
            <div class="footer__modal-title-text-Existed">
                <h2 class="footer__modal-title-Existed">
                    This
                    <span class="footer__modal-span-Existed">email address</span>
                    has already been entered
                </h2>
                <p class="footer__modal-text-Existed">
                    You have already subscribed to our new products. Watch for
                    offers at the mailing address.
                </p>
            </div>
        </div>
    </div>
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}};S.addEventListener("submit",I);function I(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;O(t),e.target.reset()}async function O(e){try{(await k({method:"POST",data:{email:e}})).statusText==="Created"&&h()}catch({response:t}){t.statusText==="Conflict"&&U()}}C().then(e=>{let t=x(e.slice(0,2));a.discountCards.innerHTML=t}).catch;async function Y(){return(await T({method:"GET",url:"/popular"})).data}const c=y(m.CART_KEY);async function K(e){const{target:t}=e,o=t.closest(".cards__button");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,n=await w(s);if(c.some(({_id:l})=>s===l))return;c.push(n);const v=document.querySelector(".header__menu-link-quantity");v.textContent=c.length,localStorage.setItem(m.CART_KEY,JSON.stringify(c)),c.some(({_id:l})=>s===l)&&(o.innerHTML=`<svg class="icon-checked"><use href="${b}#icon-check"></use></svg>`)}async function N(e){e.preventDefault();const{target:t}=e,o=t.closest(".cards__button"),s=t.closest(".cards__link");if(o||!s)return;const{id:n}=s.closest(".cards__item").dataset,_=await w(n);p.create(q(_),{onShow:d=>{d.element().querySelector(".modal__item-close").onclick=d.close}}).show()}A().then(e=>{let t=e.map(n=>g(n));localStorage.setItem("filter",P);let o=t.map(n=>`<option value="${n}">${g(n)}</option>`).join(""),s="<option  selected  >Show all</option>";a.productsFiltersSelect.innerHTML=o+s}).catch;M().then(e=>{let t=F(e.results);a.productsCards.innerHTML=t}).catch();a.productsFiltersSelect.addEventListener("change",L);a.btnSubmit.addEventListener("submit",R);a.productsFiltersSelect.addEventListener("change",L);Y().then(e=>{let t=B(e.slice(0,5));a.popularCards.innerHTML=t}).catch;a.productsCards.addEventListener("click",e=>e.preventDefault());a.productsCards.addEventListener("click",K);const j=y(m.CART_KEY);D(j);a.productsCards.addEventListener("click",N);
//# sourceMappingURL=commonHelpers2.js.map
