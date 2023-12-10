import{a as m}from"./vendor-0363fca5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();const $={CART_KEY:"cart"},l={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total")};let b={keyword:null,category:null,page:1,limit:6},_=JSON.stringify(b);const q=document.querySelector(".footer__form");function L(e){return l.cartQuantity.forEach(r=>r.textContent=e.length)}const f="https://food-boutique.b.goit.study/api",d=m.create({baseURL:`${f}/products`}),T=m.create({baseURL:`${f}/subscription`});m.create({baseURL:`${f}/orders`});function S(e){try{const r=localStorage.getItem(e);return r?JSON.parse(r):[]}catch(r){console.log(r.message)}}const n="/BASE_URL/assets/icons-30be3c26.svg";async function k(){const e=S($.CART_KEY);e&&e.forEach(({_id:r})=>{const t=document.querySelector(`[data-id="${r}"]`);if(t){const s=t.querySelector(".cards__button");s&&(s.innerHTML=`<svg class="icon-checked"><use href="${n}#icon-check"></use></svg>`)}})}async function P(){return(await d({method:"GET",url:"/categories"})).data}async function p(){const e=await d({method:"GET"});return k(),e.data}async function g(e,r,t){return(await d({method:"GET",url:`?keyword=${e}&page=${r}&limit=${t}`})).data}async function h(e,r,t,s){return(await d({method:"GET",url:`?keyword=${e}&category=${r}&page=${t}&limit=${s}`})).data}async function C(e,r,t){return(await d({method:"GET",url:`?category=${e}&page=${r}&limit=${t}`})).data}async function E(e){return(await d({method:"GET",url:`/${e}`})).data}async function x(){return(await d({method:"GET",url:"/discount"})).data}function v(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function y(e){return e=e.replace(/ /g,"_"),e=e.replace(/\//g,encodeURIComponent("&")),e}function I(){const e=l.productsFiltersSelect.options[l.productsFiltersSelect.selectedIndex];let r=localStorage.getItem("filter"),t=r?JSON.parse(r):{};const s=e.textContent!=="Show all"?e.textContent:null;t.category=s,localStorage.setItem("filter",JSON.stringify(t)),t.category===null&&t.keyword===null?(localStorage.setItem("filter",_),t.category=null,p().then(a=>{let c=u(a.results);l.productsCards.innerHTML=c}).catch):t.category!==null&&t.keyword===null?C(y(t.category),t.page,t.limit).then(a=>{let c=u(a.results);l.productsCards.innerHTML=c,console.log(a)}).catch(a=>{console.log(a)}):t.category===null&&t.keyword!==null?(localStorage.setItem("filter",JSON.stringify(t)),p().then(a=>{let c=u(a.results);localStorage.setItem("filter",_),l.productsFilters.value="",l.productsCards.innerHTML=c}).catch,localStorage.setItem("filter",data1),l.productsFilters.value=""):t.category!==null&&t.keyword!==null&&h(t.keyword,y(t.category),t.page,t.limit).then(a=>{let c=u(a.results);l.productsCards.innerHTML=c,console.log(a)}).catch(a=>{console.console.log()})}function A(e){e.preventDefault();const r=l.input.value;let t=localStorage.getItem("filter"),s=t?JSON.parse(t):{};const a=r!==""?r:null;s.keyword=a,localStorage.setItem("filter",JSON.stringify(s));let c=_;s.keyword===null?p().then(o=>{let i=u(o.results);localStorage.setItem("filter",c),l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null?g(s.keyword,s.page,s.limit).then(o=>{let i=u(o.results);l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category!==null?h(s.keyword,s.category,s.page,s.limit).then(o=>{let i=u(o.results);l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null&&(localStorage.setItem("filter",JSON.stringify(s)),g(s.keyword,s.page,s.limit).then(o=>{let i=u(o.results);l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}))}function u(e){return e.map(({_id:r,name:t,img:s,category:a,price:c,size:o,popularity:i})=>`
                <li class="cards__item" data-id="${r}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${s}" alt="${t}" />
                        </div>
                        <h4 class="cards__title">${t}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${v(a)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${o}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${i}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${c}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${n}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`).join("")}function M(e){return e.map(({_id:r,name:t,img:s,category:a,size:c,popularity:o})=>`<li class="cards__item popular__item" data-id="${r}">
                    <a class="popular__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="popular__image-photo-js" src="${s}" alt="${t}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${t}</h4>
                    <ul class="cards__info popular__info">
                        <li class="cards__info-item popular__info-up">
                            <p class="cards__info-title">Category:</p>
                            <p class="cards__info-value">${a}</p>
                        </li>
                        <li class="popular__info-down">
                            <div class="cards__info-item">
                                <p class="cards__info-title">Size:</p>
                                <p class="cards__info-value">${c}</p>
                            </div>
                            <div class="cards__info-item">
                                <p class="cards__info-title">Popularity:</p>
                                <p class="cards__info-value">${o}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <button class="popular__card-button" type="button">
                    <svg class="popular__icon__cart">
                        <use href="${n}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function O(e){return e.map(({_id:r,name:t,img:s,price:a})=>`<li class="discount__item" data-id="${r}">
                 <a class="discount__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${s}" alt="${t}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${t}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${a}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="${n}#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="${n}#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`).join("")}function F({_id:e,name:r,img:t,category:s,price:a,size:c,popularity:o,desc:i}){return`<div class="modal__item" data-id="${e}">
                <img class="cards__image-photo" src="${t}" alt="${r}" />
                <div class="cards__main">
                    <h4 class="cards__title">${r}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${s}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${c}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${o}</span></p>
                        </li>
                    </ul>
                    <p class="cards__desc-modal">${i}</p>
                </div>
                <div class="cards__main">
                    <p class="cards__price">${a}</p>
                    <button class="cards__button" type="button"> Add to
                        <svg class="icon__cart" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                        </svg>
                    </button>
                </div>
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${n}#icon-close"></use>
                    </svg>
                </button>
            </div>`}function N(e){return e.map(({_id:r,name:t,img:s,category:a,price:c,size:o})=>`
            <li class="cart__products-item" data-id="${r}">
                <div class="cart__item-space">
                    <img src="${s}" alt="${t}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${t}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${v(a)}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${o}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${c}</span>
                        <div class="cart__item-quantity">
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${n}#icon-minus"></use>
                                </svg>
                            </button>
                            <span class="cart__item-number">1</span>
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${n}#icon-plus"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${n}#icon-close"></use>
                    </svg>
                </button>
            </li>
    `).join("")}function H(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="./img/cart/empty-tab.png 1x, ./img/cart/empty-tab@2x.png 2x">
        <source media="(min-width: 320px)" srcset="./img/cart/empty-mobile.png 1x, ./img/cart/empty-mobile@2x.png 2x">
        <img class="empty__img" src="./img/cart/empty-mobile.png" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}export{H as a,N as b,$ as c,T as d,x as e,q as f,S as g,O as h,d as i,E as j,n as k,F as l,P as m,v as n,_ as o,p,L as q,l as r,u as s,I as t,A as u,M as v};
//# sourceMappingURL=markup-dc6da092.js.map
