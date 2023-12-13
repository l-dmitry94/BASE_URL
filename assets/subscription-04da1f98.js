import{a as $,P as p,b as I}from"./vendor-59e0408b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const O={CART_KEY:"cart"},l={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),pagination:document.querySelector(".tui-pagination"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total"),sendForm:document.querySelector(".checkout__field"),paginationElement:document.querySelector(".tui-pagination")};let R={keyword:null,category:null,page:1,limit:6},W=JSON.stringify(R);const H=document.querySelector(".footer__form");function X(s){return l.cartQuantity.forEach(a=>a.textContent=s.length)}const P="https://food-boutique.b.goit.study/api",g=$.create({baseURL:`${P}/products`}),B=$.create({baseURL:`${P}/subscription`}),Z=$.create({baseURL:`${P}/orders`});function ee(s,a){localStorage.setItem(a,JSON.stringify(s))}function N(s){try{const a=localStorage.getItem(s);return a?JSON.parse(a):[]}catch(a){console.log(a.message)}}const d="/BASE_URL/assets/icons-30be3c26.svg";async function q(){const s=N(O.CART_KEY);s&&s.forEach(({_id:a})=>{const o=document.querySelector(`[data-id="${a}"]`);if(o){const n=o.querySelector(".cards__button");n.innerHTML=`<svg class="icon-checked"><use href="${d}#icon-check"></use></svg>`}})}async function te(){return(await g({method:"GET",url:"/categories"})).data}async function A(){const s=await g({method:"GET"});return q(),s.data}async function U(s,a){return(await g({method:"GET",url:`?page=${s}&limit=${a}`})).data}async function v(s,a,o){return(await g({method:"GET",url:`?keyword=${s}&page=${a}&limit=${o}`})).data}async function E(s,a,o,n){return(await g({method:"GET",url:`?keyword=${s}&category=${a}&page=${o}&limit=${n}`})).data}async function L(s,a,o){return(await g({method:"GET",url:`?category=${s}&page=${a}&limit=${o}`})).data}async function se(s){return(await g({method:"GET",url:`/${s}`})).data}async function oe(){return(await g({method:"GET",url:"/discount"})).data}async function ae(){return(await g({method:"GET",url:"/popular"})).data}const m=l.pagination,i={totalItems:100,itemsPerPage:9,visiblePages:2,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};function _(s){const a=s.page,o=l.productsFiltersSelect.options[l.productsFiltersSelect.selectedIndex];let n=localStorage.getItem("filter"),e=n?JSON.parse(n):{};const t=o.textContent!=="Show all"?o.textContent:null;e.category=t,e.page=a,localStorage.setItem("filter",JSON.stringify(e));const r=l.productsFiltersSelect.value;e.keyword===null&&r==="Show all"?U(a,e.limit).then(c=>{let f=u(c.results);l.productsCards.innerHTML=f}).catch(c=>{console.error(c)}):e.keyword!==null&&r==="Show all"?v(e.keyword,a,e.limit).then(c=>{let f=u(c.results);c.perPage*c.totalPages,l.productsCards.innerHTML=f}).catch(c=>{console.error(c)}):e.keyword!==null&&e.category!==null?E(e.keyword,e.category,a,e.limit).then(c=>{let f=u(c.results);c.perPage*c.totalPages,l.productsCards.innerHTML=f}).catch(c=>{console.error(c)}):e.keyword===null&&e.category!==null&&L(b(e.category),a,e.limit).then(c=>{let f=u(c.results);i.totalItems=c.perPage*c.totalPages,l.productsCards.innerHTML=f}).catch(c=>{console.error(c)})}function S(s){return s=s.replace("_&_"," / "),s=s.replace("_"," "),s}function b(s){return s=s.replace(/ /g,"_"),s=s.replace(/\//g,encodeURIComponent("&")),s}function ne(){const s=l.productsFiltersSelect.options[l.productsFiltersSelect.selectedIndex];let a=localStorage.getItem("filter"),o=a?JSON.parse(a):{};const n=s.textContent!=="Show all"?s.textContent:null;o.category=n,o.category===null&&o.keyword===null?(o.category=null,A().then(e=>{let t=u(e.results);l.productsCards.innerHTML=t,i.totalItems=e.perPage*e.totalPages,new p(m,i).on("beforeMove",_),l.paginationElement.style.display="block"}).catch):o.category!==null&&o.keyword===null?L(b(o.category),o.page,o.limit).then(e=>{if(e.totalPages===0||e.totalPages===1){let t=u(e.results);l.productsCards.innerHTML=t,l.paginationElement.style.display="none"}else{let t=u(e.results);l.productsCards.innerHTML=t,i.totalItems=e.perPage*e.totalPages,new p(m,i).on("beforeMove",_),l.paginationElement.style.display="block"}}).catch(e=>{console.log(e)}):o.category===null&&o.keyword!==null?(localStorage.setItem("filter",JSON.stringify(o)),v(o.keyword,o.page,o.limit).then(e=>{if(e.totalPages===0||e.totalPages===1){let t=u(e.results);l.productsCards.innerHTML=t,l.paginationElement.style.display="none"}else{let t=u(e.results);o.category=null,l.productsCards.innerHTML=t,i.totalItems=e.perPage*e.totalPages,new p(m,i).on("beforeMove",_)}q()}).catch):o.category!==null&&o.keyword!==null&&E(o.keyword,b(o.category),o.page,o.limit).then(e=>{if(e.totalPages===0||e.totalPages===1){let t=u(e.results);l.productsCards.innerHTML=t,l.paginationElement.style.display="none"}else{let t=u(e.results);l.productsCards.innerHTML=t,i.totalItems=e.perPage*e.totalPages,new p(m,i).on("beforeMove",_),l.paginationElement.style.display="block"}}).catch(e=>{console.log(e)}),localStorage.setItem("filter",JSON.stringify(o))}function le(s){s.preventDefault();const a=l.input.value;let o=localStorage.getItem("filter"),n=o?JSON.parse(o):{};const e=a!==""?a:null;n.keyword=e,localStorage.setItem("filter",JSON.stringify(n)),n.keyword===null&&n.category!==null?L(b(n.category),1,n.limit).then(t=>{if(t.totalPages===0||t.totalPages===1){l.paginationElement.style.display="none";let r=u(t.results);l.productsCards.innerHTML=r}else{let r=u(t.results);i.totalItems=t.perPage*t.totalPages,l.paginationElement.style.display="block",new p(m,i).on("beforeMove",_),l.productsCards.innerHTML=r}}).catch(t=>{console.error(t)}):n.keyword===null&&n.category===null?A().then(t=>{let r=u(t.results);i.totalItems=t.perPage*t.totalPages,l.paginationElement.style.display="block",new p(m,i).on("beforeMove",_),l.productsCards.innerHTML=r}).catch(t=>{console.error(t)}):n.keyword!==null&&n.category===null?v(n.keyword,n.page,n.limit).then(t=>{if(t.totalPages===0||t.totalPages===1){let r=u(t.results);l.productsCards.innerHTML=r,l.paginationElement.style.display="none"}else{i.totalItems=t.perPage*t.totalPages,new p(m,i).on("beforeMove",_);let c=u(t.results);l.productsCards.innerHTML=c,l.paginationElement.style.display="block"}}).catch(t=>{console.error(t)}):n.keyword!==null&&n.category!==null?E(n.keyword,n.category,n.page,n.limit).then(t=>{if(t.totalPages===0||t.totalPages===1){l.paginationElement.style.display="none";let r=u(t.results);l.productsCards.innerHTML=r}else{i.totalItems=t.perPage*t.totalPages,new p(m,i).on("beforeMove",_);let c=u(t.results);l.productsCards.innerHTML=c}}).catch(t=>{console.error(t)}):n.keyword!==null&&n.category===null&&(localStorage.setItem("filter",JSON.stringify(n)),v(n.keyword,n.page,n.limit).then(t=>{let r=u(t.results);l.productsCards.innerHTML=r,i.totalItems=t.perPage*t.totalPages,l.paginationElement.style.display="block",new p(m,i).on("beforeMove",_)}).catch(t=>{console.error(t)}))}const M="/BASE_URL/assets/empty-mobile-88cc64a6.png",F="/BASE_URL/assets/empty-mobile@2x-9530797e.png",z="/BASE_URL/assets/empty-tab-8d1fa0db.png",D="/BASE_URL/assets/empty-tab@2x-36112229.png",T="/BASE_URL/assets/checkout-image-046578b5.png",J="/BASE_URL/assets/checkout-image-046578b5.png";function u(s){return s.map(({_id:a,name:o,img:n,category:e,price:t,size:r,popularity:c})=>`
                <li class="cards__item" data-id="${a}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" loading="lazy" src="${n}" alt="${o}" />
                        </div>
                        <h4 class="cards__title">${o}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${S(e)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${r}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${c}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${t}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${d}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`).join("")}function re(s){return s.map(({_id:a,name:o,img:n,category:e,size:t,popularity:r})=>`<li class="cards__item popular__item" data-id="${a}">
                    <a class="popular__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="cards__image-photo-js" loading="lazy" src="${n}" alt="${o}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${o}</h4>
                     <ul class="popular__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${S(e)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${t}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${r}</span></p>
                            </li>
                        </ul>
                </div>
                <button class="popular__card-button cards__button" type="button">
                    <svg class="icon__cart">
                        <use href="${d}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function ce(s){return s.map(({_id:a,name:o,img:n,price:e})=>`<li class="discount__item cards__item" data-id="${a}">
                 <a class="discount__link cards__link" href="#">
                  <div class="discount__image">
            <img class="cards__image-photo-js" loading="lazy" src="${n}" alt="${o}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${o}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${e}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="${d}#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="${d}#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`).join("")}function ie({_id:s,name:a,img:o,category:n,price:e,size:t,popularity:r,desc:c}){return`<div class="modal__item cards__item" data-id="${s}">
                <div class="cards__main-upper">
                    <img class="cards__image-photo" loading="lazy" src="${o}" alt="${a}" />
                    <div class="cards__main up">
                </div>
      <div class="cards__main-modal">
      <h4 class="cards__title modal">${a}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${S(n)}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${t}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${r}</span></p>
                        </li>
                    </ul>
                    <p class="cards__desc-modal">${c}</p>
                </div>
                
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${d}#icon-close"></use>
                    </svg>
                </button>
            </div><div class="cards__main">
            <p class="cards__price">$${e}</p>
            <button class="cards__button add__to-button" type="button"> Add to
                <svg class="icon__cart" width="18" height="18">
                    <use href="${d}#icon-cart"></use>
                </svg>
            </button>
        </div>`}function ue(s){return s.map(({_id:a,name:o,img:n,category:e,price:t,size:r})=>`
            <li class="cart__products-item" data-id="${a}">
                <div class="cart__item-space">
                    <img src="${n}" alt="${o}" loading="lazy" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${o}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${S(e)}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${r}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${t}</span>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${d}#icon-close"></use>
                    </svg>
                </button>
            </li>
    `).join("")}function de(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="${z} 1x, ${D} 2x">
        <source media="(min-width: 320px)" srcset="${M} 1x, ${F} 2x">
        <img class="empty__img" loading="lazy" src="${M}" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}function pe(s){return`
        <div class="checkout__modal">
            <button class="checkout__close">
                <svg class="checkout__modal-close-icon">
                    <use href="${d}#icon-close"></use>
                </svg>
            </button>
            <div class="checkout__modal-image-shadow">
                <img
                    class="checkout__modal-img"
                    loading="lazy"
                    src="${T}"
                    srcset="
                        ${T}   1x,
                        ${J} 2x
                    "
                    alt="Order picture"
                />
                <svg class="icon-ellipse">
                    <use href="${d}#icon-ellipse-1"></use>
                </svg>
            </div>

            <div class="checkout__modal-txt-container">
                <h3 class="checkout__modal-title">ORDER SUCCESS</h3>
                <p class="checkout__modal-descr">
                    ${s}
                </p>
            </div>
        </div>
    `}const G="/BASE_URL/assets/subscription-tab-ac534afc.png",j="/BASE_URL/assets/subscription.png-0e0f2d9d.png",k=window.matchMedia("(min-width: 768px)");let h,w;const y=I.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${d}#icon-close"></use>
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
            src="${h}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,{onShow:()=>{window.addEventListener("keydown",x),w=y.element().querySelector(".footer__modal-close"),w.addEventListener("click",()=>y.close()),document.body.classList.add("modal-open")},onClose:()=>{w.removeEventListener("click",()=>y.close()),window.removeEventListener("keydown",x),k.removeEventListener("change",C),document.body.classList.remove("modal-open")}});function x(s){s.code==="Escape"&&y.close()}function C(){k.addEventListener("change",C),k.matches?h=G:h=j,y.show(()=>{const s=y.element().querySelector(".footer__modal-png");s&&(s.querySelector("img").src=h)})}const Y=function(){let s;const a=I.create(`
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
`,{onShow:n=>{window.addEventListener("keydown",o),s=n.element().querySelector(".footer__modal-close"),s.addEventListener("click",()=>n.close()),document.body.classList.add("modal-open")},onClose:()=>{s.removeEventListener("click",()=>a.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});a.show();function o(n){n.code==="Escape"&&a.close()}};H.addEventListener("submit",K);function K(s){s.preventDefault();const{value:a}=s.currentTarget.elements.email;a!==""&&(Q(a),s.target.reset())}async function Q(s){try{(await B({method:"POST",data:{email:s}})).statusText==="Created"&&C()}catch({response:a}){a.statusText==="Conflict"&&Y()}}export{le as A,U as B,de as a,ue as b,O as c,Z as d,pe as e,oe as f,N as g,ce as h,q as i,ae as j,re as k,se as l,d as m,ie as n,te as o,S as p,X as q,l as r,ee as s,W as t,A as u,u as v,m as w,i as x,_ as y,ne as z};
//# sourceMappingURL=subscription-04da1f98.js.map
