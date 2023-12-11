import{a as v,b as C}from"./vendor-4f126749.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();const q={CART_KEY:"cart"},l={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),pagination:document.querySelector(".tui-pagination"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total"),sendForm:document.querySelector(".checkout__field")};let P={keyword:null,category:null,page:1,limit:6},g=JSON.stringify(P);const R=document.querySelector(".footer__form");function z(e){return l.cartQuantity.forEach(s=>s.textContent=e.length)}const b="https://food-boutique.b.goit.study/api",d=v.create({baseURL:`${b}/products`}),A=v.create({baseURL:`${b}/subscription`}),Y=v.create({baseURL:`${b}/orders`});function K(e,s){localStorage.setItem(s,JSON.stringify(e))}function I(e){try{const s=localStorage.getItem(e);return s?JSON.parse(s):[]}catch(s){console.log(s.message)}}const i="/BASE_URL/assets/icons-30be3c26.svg";async function x(){const e=I(q.CART_KEY);e&&e.forEach(({_id:s})=>{const t=document.querySelector(`[data-id="${s}"]`);if(t){const a=t.querySelector(".cards__button");a&&(a.innerHTML=`<svg class="icon-checked"><use href="${i}#icon-check"></use></svg>`)}})}async function Q(){return(await d({method:"GET",url:"/categories"})).data}async function h(){const e=await d({method:"GET"});return x(),e.data}async function W(e,s){const t=await d({method:"GET",url:`?page=${e}&limit=${s}`});return console.log(t.data),t.data}async function $(e,s,t){return(await d({method:"GET",url:`?keyword=${e}&page=${s}&limit=${t}`})).data}async function T(e,s,t,a){return(await d({method:"GET",url:`?keyword=${e}&category=${s}&page=${t}&limit=${a}`})).data}async function O(e,s,t){return(await d({method:"GET",url:`?category=${e}&page=${s}&limit=${t}`})).data}async function V(e){return(await d({method:"GET",url:`/${e}`})).data}async function X(){return(await d({method:"GET",url:"/discount"})).data}async function Z(){return(await d({method:"GET",url:"/popular"})).data}function m(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function w(e){return e=e.replace(/ /g,"_"),e=e.replace(/\//g,encodeURIComponent("&")),e}function ee(){const e=l.productsFiltersSelect.options[l.productsFiltersSelect.selectedIndex];let s=localStorage.getItem("filter"),t=s?JSON.parse(s):{};const a=e.textContent!=="Show all"?e.textContent:null;t.category=a,localStorage.setItem("filter",JSON.stringify(t)),t.category===null&&t.keyword===null?(localStorage.setItem("filter",g),t.category=null,h().then(o=>{let c=u(o.results);l.productsCards.innerHTML=c}).catch):t.category!==null&&t.keyword===null?O(w(t.category),t.page,t.limit).then(o=>{let c=u(o.results);l.productsCards.innerHTML=c,console.log(o)}).catch(o=>{console.log(o)}):t.category===null&&t.keyword!==null?(localStorage.setItem("filter",JSON.stringify(t)),h().then(o=>{let c=u(o.results);localStorage.setItem("filter",g),l.productsFilters.value="",l.productsCards.innerHTML=c,x()}).catch,localStorage.setItem("filter",data1),l.productsFilters.value=""):t.category!==null&&t.keyword!==null&&T(t.keyword,w(t.category),t.page,t.limit).then(o=>{let c=u(o.results);l.productsCards.innerHTML=c,console.log(o)}).catch(o=>{console.console.log()})}function te(e){e.preventDefault();const s=l.input.value;let t=localStorage.getItem("filter"),a=t?JSON.parse(t):{};const o=s!==""?s:null;a.keyword=o,localStorage.setItem("filter",JSON.stringify(a));let c=g;a.keyword===null?h().then(r=>{let n=u(r.results);localStorage.setItem("filter",c),l.productsCards.innerHTML=n}).catch(r=>{console.error(r)}):a.keyword!==null&&a.category===null?$(a.keyword,a.page,a.limit).then(r=>{let n=u(r.results);l.productsCards.innerHTML=n}).catch(r=>{console.error(r)}):a.keyword!==null&&a.category!==null?T(a.keyword,a.category,a.page,a.limit).then(r=>{let n=u(r.results);l.productsCards.innerHTML=n}).catch(r=>{console.error(r)}):a.keyword!==null&&a.category===null&&(localStorage.setItem("filter",JSON.stringify(a)),$(a.keyword,a.page,a.limit).then(r=>{let n=u(r.results);l.productsCards.innerHTML=n}).catch(r=>{console.error(r)}))}const k="/BASE_URL/assets/empty-mobile-88cc64a6.png",M="/BASE_URL/assets/empty-mobile@2x-9530797e.png",U="/BASE_URL/assets/empty-tab-8d1fa0db.png",F="/BASE_URL/assets/empty-tab@2x-36112229.png",E="/BASE_URL/assets/checkout-image-046578b5.png",N="/BASE_URL/assets/checkout-image-046578b5.png";function u(e){return e.map(({_id:s,name:t,img:a,category:o,price:c,size:r,popularity:n})=>`
                <li class="cards__item" data-id="${s}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${a}" alt="${t}" />
                        </div>
                        <h4 class="cards__title">${t}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${m(o)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${r}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${n}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${c}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${i}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`).join("")}function se(e){return e.map(({_id:s,name:t,img:a,category:o,size:c,popularity:r})=>`<li class="cards__item" data-id="${s}">
                    <a class="popular__link cards__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="popular__image-photo-js" src="${a}" alt="${t}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${t}</h4>
                    <ul class="cards__info popular__info">
                        <li class="cards__info-item popular__info-up">
                            <p class="cards__info-title">Category:</p>
                            <p class="cards__info-value">${m(o)}</p>
                        </li>
                        <li class="popular__info-down">
                            <div class="cards__info-item">
                                <p class="cards__info-title">Size:</p>
                                <p class="cards__info-value">${c}</p>
                            </div>
                            <div class="cards__info-item">
                                <p class="cards__info-title">Popularity:</p>
                                <p class="cards__info-value">${r}</p>
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
        </li>`).join("")}function ae(e){return e.map(({_id:s,name:t,img:a,price:o})=>`<li class="discount__item cards__item" data-id="${s}">
                 <a class="discount__link cards__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${a}" alt="${t}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${t}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${o}</p>
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
                 </li>`).join("")}function oe({_id:e,name:s,img:t,category:a,price:o,size:c,popularity:r,desc:n}){return`<div class="modal__item cards__item" data-id="${e}">
                <img class="cards__image-photo" src="${t}" alt="${s}" />
                <div class="cards__main up">
      <div class="cards__main-modal">
      <h4 class="cards__title modal">${s}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${m(a)}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${c}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${r}</span></p>
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
            <p class="cards__price">$${o}</p>
            <button class="cards__button add__to-button" type="button"> Add to
                <svg class="icon__cart" width="18" height="18">
                    <use href="${i}#icon-cart"></use>
                </svg>
            </button>
        </div>`}function ce(e){return e.map(({_id:s,name:t,img:a,category:o,price:c,size:r})=>`
            <li class="cart__products-item" data-id="${s}">
                <div class="cart__item-space">
                    <img src="${a}" alt="${t}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${t}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${m(o)}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${r}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${c}</span>
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
    `).join("")}function re(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="${U} 1x, ${F} 2x">
        <source media="(min-width: 320px)" srcset="${k} 1x, ${M} 2x">
        <img class="empty__img" src="${k}" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}function le(e){return`
        <div class="checkout__modal">
            <button class="checkout__close">
                <svg class="checkout__modal-close-icon">
                    <use href="${i}#icon-close"></use>
                </svg>
            </button>
            <div class="checkout__modal-image-shadow">
                <img
                    class="checkout__modal-img"
                    src="${E}"
                    srcset="
                        ${E}   1x,
                        ${N} 2x
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
                    ${e}
                </p>
            </div>
        </div>
    `}const B="/BASE_URL/assets/subscription-tab-ac534afc.png",D="/BASE_URL/assets/subscription.png-0e0f2d9d.png",y=window.matchMedia("(min-width: 768px)");let p,f;const _=C.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${i}#icon-close"></use>
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
            src="${p}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,{onShow:()=>{window.addEventListener("keydown",L),f=_.element().querySelector(".footer__modal-close"),f.addEventListener("click",()=>_.close()),document.body.classList.add("modal-open")},onClose:()=>{f.removeEventListener("click",()=>_.close()),window.removeEventListener("keydown",L),y.removeEventListener("change",S),document.body.classList.remove("modal-open")}});function L(e){e.code==="Escape"&&_.close()}function S(){y.addEventListener("change",S),y.matches?p=B:p=D,_.show(()=>{const e=_.element().querySelector(".footer__modal-png");e&&(e.querySelector("img").src=p)})}const G=function(){let e;const s=C.create(`
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
`,{onShow:a=>{window.addEventListener("keydown",t),e=a.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>a.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>s.close()),window.removeEventListener("keydown",t),document.body.classList.remove("modal-open")}});s.show();function t(a){a.code==="Escape"&&s.close()}};R.addEventListener("submit",H);function H(e){e.preventDefault();const{value:s}=e.currentTarget.elements.email;s!==""&&(J(s),e.target.reset())}async function J(e){try{(await A({method:"POST",data:{email:e}})).statusText==="Created"&&S()}catch({response:s}){s.statusText==="Conflict"&&G()}}export{re as a,ce as b,q as c,Y as d,le as e,X as f,I as g,ae as h,x as i,Z as j,se as k,V as l,i as m,oe as n,Q as o,m as p,z as q,l as r,K as s,g as t,h as u,u as v,ee as w,te as x,W as y};
//# sourceMappingURL=subscription-8712326e.js.map
