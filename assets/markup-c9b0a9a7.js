import{a as p}from"./vendor-0363fca5.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=t(r);fetch(r.href,c)}})();const v={CART_KEY:"cart"},i={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total")};let $={keyword:null,category:null,page:1,limit:6},d=JSON.stringify($);const q=document.querySelector(".footer__form");function L(e){return i.cartQuantity.forEach(a=>a.textContent=e.length)}const m="https://food-boutique.b.goit.study/api",u=p.create({baseURL:`${m}/products`}),T=p.create({baseURL:`${m}/subscription`});p.create({baseURL:`${m}/orders`});function S(e){try{const a=localStorage.getItem(e);return a?JSON.parse(a):[]}catch(a){console.log(a.message)}}const b="/BASE_URL/assets/icons-30be3c26.svg";async function C(){const e=S(v.CART_KEY);e&&e.forEach(({_id:a})=>{const t=document.querySelector(`[data-id="${a}"]`);if(t){const s=t.querySelector(".cards__button");s&&(s.innerHTML=`<svg class="icon-checked"><use href="${b}#icon-check"></use></svg>`)}})}async function P(){return(await u({method:"GET",url:"/categories"})).data}async function _(){const e=await u({method:"GET"});return C(),e.data}async function f(e,a,t){return(await u({method:"GET",url:`?keyword=${e}&page=${a}&limit=${t}`})).data}async function y(e,a,t,s){return(await u({method:"GET",url:`?keyword=${e}&category=${a}&page=${t}&limit=${s}`})).data}async function k(e,a,t){return(await u({method:"GET",url:`?category=${e}&page=${a}&limit=${t}`})).data}async function x(e){return(await u({method:"GET",url:`/${e}`})).data}function h(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function g(e){return e=e.replace(/ /g,"_"),e=e.replace(/\//g,encodeURIComponent("&")),e}function E(){const e=i.productsFiltersSelect.options[i.productsFiltersSelect.selectedIndex];let a=localStorage.getItem("filter"),t=a?JSON.parse(a):{};const s=e.textContent!=="Show all"?e.textContent:null;t.category=s,localStorage.setItem("filter",JSON.stringify(t)),t.category===null&&t.keyword===null?(localStorage.setItem("filter",d),t.category=null,_().then(r=>{let c=n(r.results);i.productsCards.innerHTML=c}).catch):t.category!==null&&t.keyword===null?k(g(t.category),t.page,t.limit).then(r=>{let c=n(r.results);i.productsCards.innerHTML=c,console.log(r)}).catch(r=>{console.log(r)}):t.category===null&&t.keyword!==null?(localStorage.setItem("filter",JSON.stringify(t)),_().then(r=>{let c=n(r.results);localStorage.setItem("filter",d),i.productsFilters.value="",i.productsCards.innerHTML=c}).catch,localStorage.setItem("filter",data1),i.productsFilters.value=""):t.category!==null&&t.keyword!==null&&y(t.keyword,g(t.category),t.page,t.limit).then(r=>{let c=n(r.results);i.productsCards.innerHTML=c,console.log(r)}).catch(r=>{console.console.log()})}function I(e){e.preventDefault();const a=i.input.value;let t=localStorage.getItem("filter"),s=t?JSON.parse(t):{};const r=a!==""?a:null;s.keyword=r,localStorage.setItem("filter",JSON.stringify(s));let c=d;s.keyword===null?_().then(o=>{let l=n(o.results);localStorage.setItem("filter",c),i.productsCards.innerHTML=l}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null?f(s.keyword,s.page,s.limit).then(o=>{let l=n(o.results);i.productsCards.innerHTML=l}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category!==null?y(s.keyword,s.category,s.page,s.limit).then(o=>{let l=n(o.results);i.productsCards.innerHTML=l}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null&&(localStorage.setItem("filter",JSON.stringify(s)),f(s.keyword,s.page,s.limit).then(o=>{let l=n(o.results);i.productsCards.innerHTML=l}).catch(o=>{console.error(o)}))}function n(e){return e.map(({_id:a,name:t,img:s,category:r,price:c,size:o,popularity:l})=>`
                <li class="cards__item" data-id="${a}">
                <a class="cards__link" href="${s}">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${s}" alt="${t}" />
                        </div>
                        <h4 class="cards__title">${t}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${h(r)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${o}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${l}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${c}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="./img/icons.svg#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`).join("")}function M(e){return e.map(({_id:a,name:t,img:s,category:r,size:c,popularity:o})=>`<li class="cards__item popular__item" data-id="${a}">
                    <a class="popular__link" href="${s}">
                <div class="cards__background-img popular__img">
                    <img class="popular__image-photo-js" src="${s}" alt="${t}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${t}</h4>
                    <ul class="cards__info popular__info">
                        <li class="cards__info-item popular__info-up">
                            <p class="cards__info-title">Category:</p>
                            <p class="cards__info-value">${r}</p>
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
                        <use href="./img/icons.svg#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function O(e){return e.map(({_id:a,name:t,img:s,price:r})=>`<li class="discount__item" data-id="${a}">
                 <a class="discount__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${s}" alt="${t}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${t}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${r}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="./img/icons.svg#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="./img/icons.svg#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`).join("")}function A({_id:e,name:a,img:t,category:s,price:r,size:c,popularity:o,desc:l}){return`<div class="modal__item" data-id="${e}">
      <img class="cards__image-photo" src="${t}" alt="${a}" />
      <div class="cards__main">
      <h4 class="cards__title">${a}</h4>
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
        <p class="cards__desc-modal">${l}</p>
        </div>
        <div class="cards__main">
                <p class="cards__price">${r}</p>
                <button class="cards__button" type="button"> Add to
                    <svg class="icon__cart" width="18" height="18">
                        <use href="./img/icons.svg#icon-cart"></use>
                    </svg>
                </button>
            </div></div>`}function F(e){return e.map(({_id:a,name:t,img:s,category:r,price:c,size:o})=>`
            <li class="cart__products-item" data-id="${a}">
                <div class="cart__item-space">
                    <img src="${s}" alt="${t}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${t}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${h(r)}</p>
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
                                    <use href="../img/icons.svg#icon-minus"></use>
                                </svg>
                            </button>
                            <span class="cart__item-number">1</span>
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="../img/icons.svg#icon-plus"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="../img/icons.svg#icon-close"></use>
                    </svg>
                </button>
            </li>
    `).join("")}function N(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="./img/cart/empty-tab.png 1x, ./img/cart/empty-tab@2x.png 2x">
        <source media="(min-width: 320px)" srcset="./img/cart/empty-mobile.png 1x, ./img/cart/empty-mobile@2x.png 2x">
        <img class="empty__img" src="./img/cart/empty-mobile.png" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}export{N as a,F as b,v as c,T as d,u as e,q as f,S as g,x as h,b as i,A as j,P as k,d as l,_ as m,h as n,n as o,E as p,L as q,i as r,I as s,O as t,M as u};
//# sourceMappingURL=markup-c9b0a9a7.js.map
