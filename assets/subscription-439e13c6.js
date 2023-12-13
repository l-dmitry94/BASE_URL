import{a as P,P as m,b as q}from"./vendor-59e0408b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const H={CART_KEY:"cart"},n={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),pagination:document.querySelector(".tui-pagination"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total"),sendForm:document.querySelector(".checkout__field"),paginationElement:document.querySelector(".tui-pagination")};let B={keyword:null,category:null,page:1,limit:6},N=JSON.stringify(B);const U=document.querySelector(".footer__form");function ee(s){return n.cartQuantity.forEach(a=>a.textContent=s.length)}const E="https://food-boutique.b.goit.study/api",f=P.create({baseURL:`${E}/products`}),F=P.create({baseURL:`${E}/subscription`}),te=P.create({baseURL:`${E}/orders`});function se(s,a){localStorage.setItem(a,JSON.stringify(s))}function D(s){try{const a=localStorage.getItem(s);return a?JSON.parse(a):[]}catch(a){console.log(a.message)}}const p="/BASE_URL/assets/icons-30be3c26.svg";async function A(){const s=D(H.CART_KEY);s&&s.forEach(({_id:a})=>{const o=document.querySelector(`[data-id="${a}"]`);if(o){const l=o.querySelector(".cards__button");l.innerHTML=`<svg class="icon-checked"><use href="${p}#icon-check"></use></svg>`}})}async function oe(){return(await f({method:"GET",url:"/categories"})).data}async function O(){const s=await f({method:"GET"});return A(),s.data}async function J(s,a){const o=await f({method:"GET",url:`?page=${s}&limit=${a}`});return console.log(o.data),o.data}async function b(s,a,o){return(await f({method:"GET",url:`?keyword=${s}&page=${a}&limit=${o}`})).data}async function L(s,a,o,l){return(await f({method:"GET",url:`?keyword=${s}&category=${a}&page=${o}&limit=${l}`})).data}async function C(s,a,o){return(await f({method:"GET",url:`?category=${s}&page=${a}&limit=${o}`})).data}async function ae(s){return(await f({method:"GET",url:`/${s}`})).data}async function le(){return(await f({method:"GET",url:"/discount"})).data}async function ne(){return(await f({method:"GET",url:"/popular"})).data}const _=n.pagination,i={totalItems:100,itemsPerPage:9,visiblePages:2,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};function g(s){const a=s.page;console.log(a);const o=n.productsFiltersSelect.options[n.productsFiltersSelect.selectedIndex];let l=localStorage.getItem("filter"),e=l?JSON.parse(l):{};const t=o.textContent!=="Show all"?o.textContent:null;e.category=t;let c=N;e.page=a,localStorage.setItem("filter",JSON.stringify(e));const d=n.productsFiltersSelect.value;e.keyword===null&&d==="Show all"?J(a,e.limit).then(r=>{let y=u(r.results);console.log(),n.productsCards.innerHTML=y}).catch(r=>{console.error(r)}):e.keyword!==null&&d==="Show all"?b(e.keyword,a,e.limit).then(r=>{console.log(e.keyword,e.page,e.page);let y=u(r.results);r.perPage*r.totalPages,n.productsCards.innerHTML=y}).catch(r=>{console.error(r)}):e.keyword!==null&&e.category!==null?L(e.keyword,e.category,a,e.limit).then(r=>{console.log(e.keyword,e.page,e.page);let y=u(r.results);console.log(e.page);const R=r.perPage*r.totalPages;console.log(R),n.productsCards.innerHTML=y}).catch(r=>{console.error(r)}):e.keyword===null&&e.category!==null&&C(S(e.category),a,e.limit).then(r=>{let y=u(r.results);console.log(e.page),i.totalItems=r.perPage*r.totalPages,console.log(c),n.productsCards.innerHTML=y}).catch(r=>{console.error(r)})}function w(s){return s=s.replace("_&_"," / "),s=s.replace("_"," "),s}function S(s){return s=s.replace(/ /g,"_"),s=s.replace(/\//g,encodeURIComponent("&")),s}function ce(){const s=n.productsFiltersSelect.options[n.productsFiltersSelect.selectedIndex];let a=localStorage.getItem("filter"),o=a?JSON.parse(a):{};const l=s.textContent!=="Show all"?s.textContent:null;o.category=l,o.category===null&&o.keyword===null?(o.category=null,O().then(e=>{let t=u(e.results);n.productsCards.innerHTML=t,i.totalItems=e.perPage*e.totalPages,new m(_,i).on("beforeMove",g),n.paginationElement.style.display="block"}).catch):o.category!==null&&o.keyword===null?C(S(o.category),o.page,o.limit).then(e=>{if(e.totalPages===0||e.totalPages===1){console.log(e.results);let t=u(e.results);n.productsCards.innerHTML=t,n.paginationElement.style.display="none"}else{let t=u(e.results);n.productsCards.innerHTML=t,console.log(12),i.totalItems=e.perPage*e.totalPages,new m(_,i).on("beforeMove",g),n.paginationElement.style.display="block"}}).catch(e=>{console.log(e)}):o.category===null&&o.keyword!==null?(localStorage.setItem("filter",JSON.stringify(o)),b(o.keyword,o.page,o.limit).then(e=>{if(e.totalPages===0||e.totalPages===1){console.log(e.results);let t=u(e.results);n.productsCards.innerHTML=t,n.paginationElement.style.display="none"}else{let t=u(e.results);o.category=null,n.productsCards.innerHTML=t,i.totalItems=e.perPage*e.totalPages,new m(_,i).on("beforeMove",g)}A()}).catch):o.category!==null&&o.keyword!==null&&L(o.keyword,S(o.category),o.page,o.limit).then(e=>{if(e.totalPages===0||e.totalPages===1){console.log(e.results);let t=u(e.results);n.productsCards.innerHTML=t,n.paginationElement.style.display="none"}else{let t=u(e.results);n.productsCards.innerHTML=t,console.log(e),i.totalItems=e.perPage*e.totalPages,new m(_,i).on("beforeMove",g),n.paginationElement.style.display="block"}}).catch(e=>{console.console.log()}),localStorage.setItem("filter",JSON.stringify(o))}function re(s){s.preventDefault();const a=n.input.value;let o=localStorage.getItem("filter");console.log(a);let l=o?JSON.parse(o):{};const e=a!==""?a:null;l.keyword=e,localStorage.setItem("filter",JSON.stringify(l)),l.keyword===null&&l.category!==null?C(S(l.category),1,l.limit).then(t=>{if(console.log(t),t.totalPages===0||t.totalPages===1){n.paginationElement.style.display="none";let c=u(t.results);n.productsCards.innerHTML=c}else{let c=u(t.results);i.totalItems=t.perPage*t.totalPages,n.paginationElement.style.display="block",new m(_,i).on("beforeMove",g),n.productsCards.innerHTML=c}}).catch(t=>{console.error(t)}):l.keyword===null&&l.category===null?O().then(t=>{console.log(t);let c=u(t.results);i.totalItems=t.perPage*t.totalPages,n.paginationElement.style.display="block",new m(_,i).on("beforeMove",g),n.productsCards.innerHTML=c}).catch(t=>{console.error(t)}):l.keyword!==null&&l.category===null?b(l.keyword,l.page,l.limit).then(t=>{if(t.totalPages===0||t.totalPages===1){console.log(t.results);let c=u(t.results);n.productsCards.innerHTML=c,n.paginationElement.style.display="none"}else{i.totalItems=t.perPage*t.totalPages,new m(_,i).on("beforeMove",g);let d=u(t.results);n.productsCards.innerHTML=d,n.paginationElement.style.display="block"}}).catch(t=>{console.error(t)}):l.keyword!==null&&l.category!==null?L(l.keyword,l.category,l.page,l.limit).then(t=>{if(t.totalPages===0||t.totalPages===1){n.paginationElement.style.display="none",console.log(t.results.length);let c=u(t.results);n.productsCards.innerHTML=c}else{i.totalItems=t.perPage*t.totalPages,new m(_,i).on("beforeMove",g);let d=u(t.results);n.productsCards.innerHTML=d}}).catch(t=>{console.error(t)}):l.keyword!==null&&l.category===null&&(localStorage.setItem("filter",JSON.stringify(l)),b(l.keyword,l.page,l.limit).then(t=>{let c=u(t.results);n.productsCards.innerHTML=c,i.totalItems=t.perPage*t.totalPages,n.paginationElement.style.display="block",new m(_,i).on("beforeMove",g)}).catch(t=>{console.error(t)}))}const T="/BASE_URL/assets/empty-mobile-88cc64a6.png",G="/BASE_URL/assets/empty-mobile@2x-9530797e.png",j="/BASE_URL/assets/empty-tab-8d1fa0db.png",z="/BASE_URL/assets/empty-tab@2x-36112229.png",x="/BASE_URL/assets/checkout-image2x-046578b5.png",Y="/BASE_URL/assets/checkout-image2x-046578b5.png";function u(s){return s.map(({_id:a,name:o,img:l,category:e,price:t,size:c,popularity:d})=>`
                <li class="cards__item" data-id="${a}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${l}" alt="${o}" />
                        </div>
                        <h4 class="cards__title">${o}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value" data-category="${e}">${w(e)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${c}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${d}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${t}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${p}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`).join("")}function ie(s){return s.map(({_id:a,name:o,img:l,category:e,size:t,popularity:c})=>`<li class="cards__item popular__item" data-id="${a}">
                    <a class="popular__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="cards__image-photo-js" src="${l}" alt="${o}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${o}</h4>
                     <ul class="popular__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value" data-category="${e}">${w(e)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${t}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${c}</span></p>
                            </li>
                        </ul>
                </div>
                <button class="popular__card-button cards__button" type="button">
                    <svg class="icon__cart">
                        <use href="${p}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function ue(s){return s.map(({_id:a,name:o,img:l,price:e})=>`<li class="discount__item cards__item" data-id="${a}">
                 <a class="discount__link cards__link" href="#">
                  <div class="discount__image">
            <img class="cards__image-photo-js" src="${l}" alt="${o}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${o}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${e}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="${p}#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="${p}#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`).join("")}function de({_id:s,name:a,img:o,category:l,price:e,size:t,popularity:c,desc:d}){return`<div class="modal__item cards__item" data-id="${s}">
                <div class="cards__main-upper">
                    <img class="cards__image-photo" src="${o}" alt="${a}" />
                    <div class="cards__main up">
                </div>
      <div class="cards__main-modal">
      <h4 class="cards__title modal">${a}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${w(l)}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${t}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${c}</span></p>
                        </li>
                    </ul>
                    <p class="cards__desc-modal">${d}</p>
                </div>
                
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${p}#icon-close"></use>
                    </svg>
                </button>
            </div><div class="cards__main">
            <p class="cards__price">$${e}</p>
            <button class="cards__button add__to-button" type="button"> Add to
                <svg class="icon__cart" width="18" height="18">
                    <use href="${p}#icon-cart"></use>
                </svg>
            </button>
        </div>`}function pe(s){return s.map(({_id:a,name:o,img:l,category:e,price:t,size:c})=>`
            <li class="cart__products-item" data-id="${a}">
                <div class="cart__item-space">
                    <img src="${l}" alt="${o}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${o}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${w(e)}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${c}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${t}</span>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${p}#icon-close"></use>
                    </svg>
                </button>
            </li>
    `).join("")}function me(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="${j} 1x, ${z} 2x">
        <source media="(min-width: 320px)" srcset="${T} 1x, ${G} 2x">
        <img class="empty__img" src="${T}" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}function _e(s){return`
        <div class="checkout__modal">
            <button class="checkout__close">
                <svg class="checkout__modal-close-icon">
                    <use href="${p}#icon-close"></use>
                </svg>
            </button>
            <div class="checkout__modal-image-shadow">
                <img
                    class="checkout__modal-img"
                    src="${x}"
                    srcset="
                        ${x}   1x,
                        ${Y} 2x
                    "
                    alt="Order picture"
                />
                <svg class="icon-ellipse">
                    <use href="${p}#icon-ellipse-1"></use>
                </svg>
            </div>

            <div class="checkout__modal-txt-container">
                <h3 class="checkout__modal-title">ORDER SUCCESS</h3>
                <p class="checkout__modal-descr">
                    ${s}
                </p>
            </div>
        </div>
    `}const K="/BASE_URL/assets/subscription-tab-ac534afc.png",Q="/BASE_URL/assets/subscription.png-0e0f2d9d.png",$=window.matchMedia("(min-width: 768px)");let v,k;const h=q.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${p}#icon-close"></use>
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
            src="${v}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,{onShow:()=>{window.addEventListener("keydown",I),k=h.element().querySelector(".footer__modal-close"),k.addEventListener("click",()=>h.close()),document.body.classList.add("modal-open")},onClose:()=>{k.removeEventListener("click",()=>h.close()),window.removeEventListener("keydown",I),$.removeEventListener("change",M),document.body.classList.remove("modal-open")}});function I(s){s.code==="Escape"&&h.close()}function M(){$.addEventListener("change",M),$.matches?v=K:v=Q,h.show(()=>{const s=h.element().querySelector(".footer__modal-png");s&&(s.querySelector("img").src=v)})}const V=function(){let s;const a=q.create(`
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
`,{onShow:l=>{window.addEventListener("keydown",o),s=l.element().querySelector(".footer__modal-close"),s.addEventListener("click",()=>l.close()),document.body.classList.add("modal-open")},onClose:()=>{s.removeEventListener("click",()=>a.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});a.show();function o(l){l.code==="Escape"&&a.close()}};U.addEventListener("submit",W);function W(s){s.preventDefault();const{value:a}=s.currentTarget.elements.email;a!==""&&(X(a),s.target.reset())}async function X(s){try{(await F({method:"POST",data:{email:s}})).statusText==="Created"&&M()}catch({response:a}){a.statusText==="Conflict"&&V()}}export{re as A,J as B,me as a,pe as b,H as c,te as d,_e as e,le as f,D as g,ue as h,A as i,ne as j,ie as k,p as l,ae as m,de as n,oe as o,w as p,ee as q,n as r,se as s,N as t,O as u,i as v,u as w,_ as x,g as y,ce as z};
//# sourceMappingURL=subscription-439e13c6.js.map
