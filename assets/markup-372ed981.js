import{a as m}from"./vendor-0363fca5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=e(a);fetch(a.href,c)}})();const b={CART_KEY:"cart"},l={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total")};let S={keyword:null,category:null,page:1,limit:6},_=JSON.stringify(S);const I=document.querySelector(".footer__form");function A(t){return l.cartQuantity.forEach(r=>r.textContent=t.length)}const f="https://food-boutique.b.goit.study/api",d=m.create({baseURL:`${f}/products`}),P=m.create({baseURL:`${f}/subscription`});m.create({baseURL:`${f}/orders`});function k(t){try{const r=localStorage.getItem(t);return r?JSON.parse(r):[]}catch(r){console.log(r.message)}}const n="/BASE_URL/assets/icons-30be3c26.svg";async function w(){const t=k(b.CART_KEY);t&&t.forEach(({_id:r})=>{const e=document.querySelector(`[data-id="${r}"]`);if(e){const s=e.querySelector(".cards__button");s&&(s.innerHTML=`<svg class="icon-checked"><use href="${n}#icon-check"></use></svg>`)}})}async function x(){return(await d({method:"GET",url:"/categories"})).data}async function p(){const t=await d({method:"GET"});return w(),t.data}async function y(t,r,e){return(await d({method:"GET",url:`?keyword=${t}&page=${r}&limit=${e}`})).data}async function $(t,r,e,s){return(await d({method:"GET",url:`?keyword=${t}&category=${r}&page=${e}&limit=${s}`})).data}async function C(t,r,e){return(await d({method:"GET",url:`?category=${t}&page=${r}&limit=${e}`})).data}async function M(t){return(await d({method:"GET",url:`/${t}`})).data}async function R(){return(await d({method:"GET",url:"/discount"})).data}async function O(){return(await d({method:"GET",url:"/popular"})).data}function g(t){return t=t.replace("_&_"," / "),t=t.replace("_"," "),t}function h(t){return t=t.replace(/ /g,"_"),t=t.replace(/\//g,encodeURIComponent("&")),t}function F(){const t=l.productsFiltersSelect.options[l.productsFiltersSelect.selectedIndex];let r=localStorage.getItem("filter"),e=r?JSON.parse(r):{};const s=t.textContent!=="Show all"?t.textContent:null;e.category=s,localStorage.setItem("filter",JSON.stringify(e)),e.category===null&&e.keyword===null?(localStorage.setItem("filter",_),e.category=null,p().then(a=>{let c=u(a.results);l.productsCards.innerHTML=c}).catch):e.category!==null&&e.keyword===null?C(h(e.category),e.page,e.limit).then(a=>{let c=u(a.results);l.productsCards.innerHTML=c,console.log(a)}).catch(a=>{console.log(a)}):e.category===null&&e.keyword!==null?(localStorage.setItem("filter",JSON.stringify(e)),p().then(a=>{let c=u(a.results);localStorage.setItem("filter",_),l.productsFilters.value="",l.productsCards.innerHTML=c}).catch,localStorage.setItem("filter",data1),l.productsFilters.value=""):e.category!==null&&e.keyword!==null&&$(e.keyword,h(e.category),e.page,e.limit).then(a=>{let c=u(a.results);l.productsCards.innerHTML=c,console.log(a)}).catch(a=>{console.console.log()})}function N(t){t.preventDefault();const r=l.input.value;let e=localStorage.getItem("filter"),s=e?JSON.parse(e):{};const a=r!==""?r:null;s.keyword=a,localStorage.setItem("filter",JSON.stringify(s));let c=_;s.keyword===null?p().then(o=>{let i=u(o.results);localStorage.setItem("filter",c),l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null?y(s.keyword,s.page,s.limit).then(o=>{let i=u(o.results);l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category!==null?$(s.keyword,s.category,s.page,s.limit).then(o=>{let i=u(o.results);l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}):s.keyword!==null&&s.category===null&&(localStorage.setItem("filter",JSON.stringify(s)),y(s.keyword,s.page,s.limit).then(o=>{let i=u(o.results);l.productsCards.innerHTML=i}).catch(o=>{console.error(o)}))}const v="/BASE_URL/assets/empty-mobile-88cc64a6.png",L="/BASE_URL/assets/empty-mobile@2x-9530797e.png",T="/BASE_URL/assets/empty-tab-8d1fa0db.png",q="/BASE_URL/assets/empty-tab@2x-36112229.png";function u(t){return t.map(({_id:r,name:e,img:s,category:a,price:c,size:o,popularity:i})=>`
                <li class="cards__item" data-id="${r}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${s}" alt="${e}" />
                        </div>
                        <h4 class="cards__title">${e}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${g(a)}</span></p>
                        
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
                </li>`).join("")}function U(t){return t.map(({_id:r,name:e,img:s,category:a,size:c,popularity:o})=>`<li class="cards__item" data-id="${r}">
                    <a class="popular__link cards__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="popular__image-photo-js" src="${s}" alt="${e}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${e}</h4>
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
                <button class="popular__card-button cards__button" type="button">
                    <svg class="popular__icon-cart">
                        <use href="${n}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function G(t){return t.map(({_id:r,name:e,img:s,price:a})=>`<li class="discount__item cards__item" data-id="${r}">
                 <a class="discount__link cards__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${s}" alt="${e}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${e}</p>
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
                 </li>`).join("")}function H({_id:t,name:r,img:e,category:s,price:a,size:c,popularity:o,desc:i}){return`<div class="modal__item" data-id="${t}">
                <img class="cards__image-photo" src="${e}" alt="${r}" />
                <div class="cards__main up">
      <div class="cards__main-modal">
      <h4 class="cards__title modal">${r}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${g(s)}</span></p>
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
                
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${n}#icon-close"></use>
                    </svg>
                </button>
            </div><div class="cards__main">
            <p class="cards__price">$${a}</p>
            <button class="cards__button add__to-button" type="button"> Add to
                <svg class="icon__cart" width="18" height="18">
                    <use href="${n}#icon-cart"></use>
                </svg>
            </button>
        </div>`}function j(t){return t.map(({_id:r,name:e,img:s,category:a,price:c,size:o})=>`
            <li class="cart__products-item" data-id="${r}">
                <div class="cart__item-space">
                    <img src="${s}" alt="${e}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${e}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${g(a)}</p>
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
    `).join("")}function J(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="${T} 1x, ${q} 2x">
        <source media="(min-width: 320px)" srcset="${v} 1x, ${L} 2x">
        <img class="empty__img" src="${v}" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}export{J as a,j as b,b as c,n as d,P as e,I as f,k as g,R as h,G as i,w as j,O as k,U as l,M as m,H as n,x as o,g as p,A as q,l as r,_ as s,p as t,u,F as v,N as w};
//# sourceMappingURL=markup-372ed981.js.map
