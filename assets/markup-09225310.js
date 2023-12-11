import{a as f}from"./vendor-4f126749.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const k={CART_KEY:"cart"},l={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),pagination:document.querySelector(".tui-pagination"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total"),sendForm:document.querySelector(".checkout__field")};let w={keyword:null,category:null,page:1,limit:6},p=JSON.stringify(w);const P=document.querySelector(".footer__form");function R(t){return l.cartQuantity.forEach(c=>c.textContent=t.length)}const g="https://food-boutique.b.goit.study/api",u=f.create({baseURL:`${g}/products`}),x=f.create({baseURL:`${g}/subscription`}),M=f.create({baseURL:`${g}/orders`});function O(t,c){localStorage.setItem(c,JSON.stringify(t))}function C(t){try{const c=localStorage.getItem(t);return c?JSON.parse(c):[]}catch(c){console.log(c.message)}}const i="/BASE_URL/assets/icons-30be3c26.svg";async function S(){const t=C(k.CART_KEY);t&&t.forEach(({_id:c})=>{const e=document.querySelector(`[data-id="${c}"]`);if(e){const s=e.querySelector(".cards__button");s&&(s.innerHTML=`<svg class="icon-checked"><use href="${i}#icon-check"></use></svg>`)}})}async function F(){return(await u({method:"GET",url:"/categories"})).data}async function m(){const t=await u({method:"GET"});return S(),t.data}async function U(t,c){const e=await u({method:"GET",url:`?page=${t}&limit=${c}`});return console.log(e.data),e.data}async function y(t,c,e){return(await u({method:"GET",url:`?keyword=${t}&page=${c}&limit=${e}`})).data}async function b(t,c,e,s){return(await u({method:"GET",url:`?keyword=${t}&category=${c}&page=${e}&limit=${s}`})).data}async function E(t,c,e){return(await u({method:"GET",url:`?category=${t}&page=${c}&limit=${e}`})).data}async function N(t){return(await u({method:"GET",url:`/${t}`})).data}async function G(){return(await u({method:"GET",url:"/discount"})).data}async function B(){return(await u({method:"GET",url:"/popular"})).data}function _(t){return t=t.replace("_&_"," / "),t=t.replace("_"," "),t}function h(t){return t=t.replace(/ /g,"_"),t=t.replace(/\//g,encodeURIComponent("&")),t}function D(){const t=l.productsFiltersSelect.options[l.productsFiltersSelect.selectedIndex];let c=localStorage.getItem("filter"),e=c?JSON.parse(c):{};const s=t.textContent!=="Show all"?t.textContent:null;e.category=s,localStorage.setItem("filter",JSON.stringify(e)),e.category===null&&e.keyword===null?(localStorage.setItem("filter",p),e.category=null,m().then(a=>{let r=d(a.results);l.productsCards.innerHTML=r}).catch):e.category!==null&&e.keyword===null?E(h(e.category),e.page,e.limit).then(a=>{let r=d(a.results);l.productsCards.innerHTML=r,console.log(a)}).catch(a=>{console.log(a)}):e.category===null&&e.keyword!==null?(localStorage.setItem("filter",JSON.stringify(e)),m().then(a=>{let r=d(a.results);localStorage.setItem("filter",p),l.productsFilters.value="",l.productsCards.innerHTML=r,S()}).catch,localStorage.setItem("filter",data1),l.productsFilters.value=""):e.category!==null&&e.keyword!==null&&b(e.keyword,h(e.category),e.page,e.limit).then(a=>{let r=d(a.results);l.productsCards.innerHTML=r,console.log(a)}).catch(a=>{console.console.log()})}function H(t){t.preventDefault();const c=l.input.value;let e=localStorage.getItem("filter"),s=e?JSON.parse(e):{};const a=c!==""?c:null;s.keyword=a,localStorage.setItem("filter",JSON.stringify(s));let r=p;s.keyword===null?m().then(o=>{let n=d(o.results);localStorage.setItem("filter",r),l.productsCards.innerHTML=n}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null?y(s.keyword,s.page,s.limit).then(o=>{let n=d(o.results);l.productsCards.innerHTML=n}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category!==null?b(s.keyword,s.category,s.page,s.limit).then(o=>{let n=d(o.results);l.productsCards.innerHTML=n}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null&&(localStorage.setItem("filter",JSON.stringify(s)),y(s.keyword,s.page,s.limit).then(o=>{let n=d(o.results);l.productsCards.innerHTML=n}).catch(o=>{console.error(o)}))}const v="/BASE_URL/assets/empty-mobile-88cc64a6.png",L="/BASE_URL/assets/empty-mobile@2x-9530797e.png",q="/BASE_URL/assets/empty-tab-8d1fa0db.png",T="/BASE_URL/assets/empty-tab@2x-36112229.png",$="/BASE_URL/assets/checkout-image-046578b5.png",A="/BASE_URL/assets/checkout-image-046578b5.png";function d(t){return t.map(({_id:c,name:e,img:s,category:a,price:r,size:o,popularity:n})=>`
                <li class="cards__item" data-id="${c}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${s}" alt="${e}" />
                        </div>
                        <h4 class="cards__title">${e}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${_(a)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${o}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${n}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${r}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${i}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`).join("")}function J(t){return t.map(({_id:c,name:e,img:s,category:a,size:r,popularity:o})=>`<li class="cards__item" data-id="${c}">
                    <a class="popular__link cards__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="popular__image-photo-js" src="${s}" alt="${e}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${e}</h4>
                    <ul class="cards__info popular__info">
                        <li class="cards__info-item popular__info-up">
                            <p class="cards__info-title">Category:</p>
                            <p class="cards__info-value">${_(a)}</p>
                        </li>
                        <li class="popular__info-down">
                            <div class="cards__info-item">
                                <p class="cards__info-title">Size:</p>
                                <p class="cards__info-value">${r}</p>
                            </div>
                            <div class="cards__info-item">
                                <p class="cards__info-title">Popularity:</p>
                                <p class="cards__info-value">${o}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <button class="popular__card-button cards__button" type="button">
                    <svg class="popular__icon-cart">
                        <use href="${i}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function j(t){return t.map(({_id:c,name:e,img:s,price:a})=>`<li class="discount__item cards__item" data-id="${c}">
                 <a class="discount__link cards__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${s}" alt="${e}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${e}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${a}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="${i}#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="${i}#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`).join("")}function z({_id:t,name:c,img:e,category:s,price:a,size:r,popularity:o,desc:n}){return`<div class="modal__item" data-id="${t}">
                <img class="cards__image-photo" src="${e}" alt="${c}" />
                <div class="cards__main up">
      <div class="cards__main-modal">
      <h4 class="cards__title modal">${c}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${_(s)}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${r}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${o}</span></p>
                        </li>
                    </ul>
                    <p class="cards__desc-modal">${n}</p>
                </div>
                
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${i}#icon-close"></use>
                    </svg>
                </button>
            </div><div class="cards__main">
            <p class="cards__price">$${a}</p>
            <button class="cards__button add__to-button" type="button"> Add to
                <svg class="icon__cart" width="18" height="18">
                    <use href="${i}#icon-cart"></use>
                </svg>
            </button>
        </div>`}function K(t){return t.map(({_id:c,name:e,img:s,category:a,price:r,size:o})=>`
            <li class="cart__products-item" data-id="${c}">
                <div class="cart__item-space">
                    <img src="${s}" alt="${e}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${e}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${_(a)}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${o}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${r}</span>
                        <div class="cart__item-quantity">
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${i}#icon-minus"></use>
                                </svg>
                            </button>
                            <span class="cart__item-number">1</span>
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${i}#icon-plus"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${i}#icon-close"></use>
                    </svg>
                </button>
            </li>
    `).join("")}function Y(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="${q} 1x, ${T} 2x">
        <source media="(min-width: 320px)" srcset="${v} 1x, ${L} 2x">
        <img class="empty__img" src="${v}" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}function Q(t){return`
        <div class="checkout__modal">
            <button class="checkout__close">
                <svg class="checkout__modal-close-icon">
                    <use href="${i}#icon-close"></use>
                </svg>
            </button>
            <div class="checkout__modal-image-shadow">
                <img
                    class="checkout__modal-img"
                    src="${$}"
                    srcset="
                        ${$}   1x,
                        ${A} 2x
                    "
                    alt="Order picture"
                />
                <svg class="icon-ellipse">
                    <use href="${i}#icon-ellipse-1"></use>
                </svg>
            </div>

            <div class="checkout__modal-txt-container">
                <h3 class="checkout__modal-title">ORDER SUCCESS</h3>
                <p class="checkout__modal-descr">
                    ${t}
                </p>
            </div>
        </div>
    `}export{U as A,Y as a,K as b,k as c,M as d,Q as e,i as f,C as g,P as h,x as i,G as j,j as k,S as l,B as m,J as n,N as o,z as p,R as q,l as r,O as s,F as t,_ as u,p as v,m as w,d as x,D as y,H as z};
//# sourceMappingURL=markup-09225310.js.map
