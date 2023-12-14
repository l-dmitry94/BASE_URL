import{a as $,P as p,b as q}from"./vendor-59e0408b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const R={CART_KEY:"cart"},r={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),pagination:document.querySelector(".tui-pagination"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total"),sendForm:document.querySelector(".checkout__field"),paginationElement:document.querySelector(".tui-pagination")};let N={keyword:null,category:null,page:1,limit:6},Z=JSON.stringify(N);const B=document.querySelector(".footer__form");function ee(s){return r.cartQuantity.forEach(o=>o.textContent=s.length)}const E="https://food-boutique.b.goit.study/api",g=$.create({baseURL:`${E}/products`}),F=$.create({baseURL:`${E}/subscription`}),te=$.create({baseURL:`${E}/orders`});function se(s,o){localStorage.setItem(o,JSON.stringify(s))}function U(s){try{const o=localStorage.getItem(s);return o?JSON.parse(o):[]}catch(o){console.log(o.message)}}const u="/BASE_URL/assets/icons-30be3c26.svg";async function A(){const s=U(R.CART_KEY);s&&s.forEach(({_id:o})=>{const a=document.querySelector(`[data-id="${o}"]`);if(a){const n=a.querySelector(".cards__button");n.innerHTML=`<svg class="icon-checked"><use href="${u}#icon-check"></use></svg>`}})}const m=r.pagination,l={totalItems:100,itemsPerPage:9,visiblePages:2,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};function _(s){const o=s.page,a=r.productsFiltersSelect.options[r.productsFiltersSelect.selectedIndex];let n=localStorage.getItem("filter"),t=n?JSON.parse(n):{};const e=a.textContent!=="Show all"?a.textContent:null;t.category=e,t.page=o,localStorage.setItem("filter",JSON.stringify(t));const c=r.productsFiltersSelect.value;t.keyword===null&&c==="Show all"?z(o,l.itemsPerPage).then(i=>{let f=d(i.results);r.productsCards.innerHTML=f}).catch(i=>{console.error(i)}):t.keyword!==null&&c==="Show all"?v(t.keyword,o,l.itemsPerPage).then(i=>{let f=d(i.results);i.perPage*i.totalPages,r.productsCards.innerHTML=f}).catch(i=>{console.error(i)}):t.keyword!==null&&t.category!==null?L(t.keyword,t.category,o,l.itemsPerPage).then(i=>{let f=d(i.results);i.perPage*i.totalPages,r.productsCards.innerHTML=f}).catch(i=>{console.error(i)}):t.keyword===null&&t.category!==null&&C(b(t.category),o,l.itemsPerPage).then(i=>{let f=d(i.results);l.totalItems=i.perPage*i.totalPages,r.productsCards.innerHTML=f}).catch(i=>{console.error(i)})}function H(){window.innerWidth<376?(l.visiblePages=2,l.itemsPerPage=6):window.innerWidth>=376&&window.innerWidth<=1303?(l.visiblePages=3,l.itemsPerPage=8):(l.visiblePages=4,l.itemsPerPage=9)}window.addEventListener("resize",H);H();async function oe(){return(await g({method:"GET",url:"/categories"})).data}async function O(){const s=await g({method:"GET",url:`?page=1&limit=${l.itemsPerPage}`});return A(),s.data}async function z(s,o){return(await g({method:"GET",url:`?page=${s}&limit=${o}`})).data}async function v(s,o,a){return(await g({method:"GET",url:`?keyword=${s}&page=${o}&limit=${a}`})).data}async function L(s,o,a,n){return(await g({method:"GET",url:`?keyword=${s}&category=${o}&page=${a}&limit=${n}`})).data}async function C(s,o,a){return(await g({method:"GET",url:`?category=${s}&page=${o}&limit=${a}`})).data}async function ae(s){return(await g({method:"GET",url:`/${s}`})).data}async function ne(){return(await g({method:"GET",url:"/discount"})).data}async function re(){return(await g({method:"GET",url:"/popular"})).data}function w(s){return s=s.replace("_&_"," / "),s=s.replace("_"," "),s}function b(s){return s=s.replace(/ /g,"_"),s=s.replace(/\//g,encodeURIComponent("&")),s}function le(){const s=r.productsFiltersSelect.options[r.productsFiltersSelect.selectedIndex];let o=localStorage.getItem("filter"),a=o?JSON.parse(o):{};const n=s.textContent!=="Show all"?s.textContent:null;a.category=n,a.category===null&&a.keyword===null?(a.category=null,O().then(t=>{let e=d(t.results);r.productsCards.innerHTML=e,l.totalItems=t.perPage*t.totalPages,new p(m,l).on("beforeMove",_),r.paginationElement.style.display="block"}).catch):a.category!==null&&a.keyword===null?C(b(a.category),1,l.itemsPerPage).then(t=>{if(t.totalPages===0||t.totalPages===1){let e=d(t.results);r.productsCards.innerHTML=e,r.paginationElement.style.display="none"}else{let e=d(t.results);r.productsCards.innerHTML=e,l.totalPages=1,l.totalItems=t.perPage*t.totalPages,new p(m,l).on("beforeMove",_),r.paginationElement.style.display="block"}}).catch(t=>{console.log(t)}):a.category===null&&a.keyword!==null?(localStorage.setItem("filter",JSON.stringify(a)),v(a.keyword,a.page,l.itemsPerPage).then(t=>{if(t.totalPages===0||t.totalPages===1){let e=d(t.results);r.productsCards.innerHTML=e,r.paginationElement.style.display="none",r.productsCards.innerHTML=P()}else{let e=d(t.results);a.category=null,r.productsCards.innerHTML=e,l.totalItems=t.perPage*t.totalPages,new p(m,l).on("beforeMove",_),r.paginationElement.style.display="block"}A()}).catch):a.category!==null&&a.keyword!==null&&L(a.keyword,b(a.category),a.page,l.itemsPerPage).then(t=>{if(t.totalPages===0&&t.totalPages===1){console.log(t.results);let e=d(t.results);r.productsCards.innerHTML=e,r.paginationElement.style.display="none",r.productsCards.innerHTML=P()}else{let e=d(t.results);r.productsCards.innerHTML=e,l.totalItems=t.perPage*t.totalPages,new p(m,l).on("beforeMove",_),r.paginationElement.style.display="block"}}).catch(t=>{console.log(t)}),localStorage.setItem("filter",JSON.stringify(a))}function ce(s){s.preventDefault();const o=r.input.value;let a=localStorage.getItem("filter"),n=a?JSON.parse(a):{};const t=o!==""?o:null;n.keyword=t,localStorage.setItem("filter",JSON.stringify(n)),n.keyword===null&&n.category!==null?C(b(n.category),1,l.itemsPerPage).then(e=>{if(e.totalPages===0||e.totalPages===1){r.paginationElement.style.display="none";let c=d(e.results);r.productsCards.innerHTML=c}else{let c=d(e.results);l.totalItems=e.perPage*e.totalPages,r.paginationElement.style.display="block",new p(m,l).on("beforeMove",_),r.productsCards.innerHTML=c}}).catch(e=>{console.error(e)}):n.keyword===null&&n.category===null?O().then(e=>{let c=d(e.results);l.totalItems=e.perPage*e.totalPages,r.paginationElement.style.display="block",new p(m,l).on("beforeMove",_),r.productsCards.innerHTML=c}).catch(e=>{console.error(e)}):n.keyword!==null&&n.category===null?v(n.keyword,1,l.itemsPerPage).then(e=>{if(e.totalPages===0||e.totalPages===1){let c=d(e.results);r.productsCards.innerHTML=c,r.paginationElement.style.display="none",console.log(850),r.productsCards.innerHTML=P()}else{l.totalItems=e.perPage*e.totalPages;const c=new p(m,l);console.log(900),c.on("beforeMove",_);let i=d(e.results);r.productsCards.innerHTML=i,r.paginationElement.style.display="block"}}).catch(e=>{console.error(e)}):n.keyword!==null&&n.category!==null?L(n.keyword,n.category,1,l.itemsPerPage).then(e=>{if(e.totalPages===0||e.totalPages===1){r.paginationElement.style.display="none";let c=d(e.results);r.productsCards.innerHTML=c,r.productsCards.innerHTML=P()}else l.totalItems=e.perPage*e.totalPages,new p(m,l).on("beforeMove",_),r.productsCards.innerHTML=test2}).catch(e=>{console.error(e)}):n.keyword!==null&&n.category===null&&(localStorage.setItem("filter",JSON.stringify(n)),v(n.keyword,1,l.itemsPerPage).then(e=>{if(e.totalPages===0&&e.totalPages===1){r.paginationElement.style.display="none",console.log(e.results.length);let c=d(e.results);r.productsCards.innerHTML=c,console.log(500)}else{let c=d(e.results);r.productsCards.innerHTML=c,l.totalItems=e.perPage*e.totalPages,r.paginationElement.style.display="block",new p(m,l).on("beforeMove",_),console.log(600)}}).catch(e=>{console.error(e)}))}const T="/BASE_URL/assets/empty-mobile-88cc64a6.png",D="/BASE_URL/assets/empty-mobile@2x-9530797e.png",J="/BASE_URL/assets/empty-tab-8d1fa0db.png",G="/BASE_URL/assets/empty-tab@2x-36112229.png",x="/BASE_URL/assets/checkout-image-046578b5.png",j="/BASE_URL/assets/checkout-image-046578b5.png";function d(s){return s.map(({_id:o,name:a,img:n,category:t,price:e,size:c,popularity:i})=>`
                <li class="cards__item" data-id="${o}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" loading="lazy" src="${n}" alt="${a}" />
                        </div>
                        <h4 class="cards__title">${a}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${w(t)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${c}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${i}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${e}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${u}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                        <svg class="icon__cart-discount">
                        <use href="${u}#icon-discount"></use>
                   </svg>
                    </a>
                </li>`).join("")}function ie(s){return s.map(({_id:o,name:a,img:n,category:t,size:e,popularity:c})=>`<li class="cards__item popular__item" data-id="${o}">
                    <a class="popular__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="cards__image-photo-js" loading="lazy" src="${n}" alt="${a}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${a}</h4>
                     <ul class="popular__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${w(t)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${e}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${c}</span></p>
                            </li>
                        </ul>
                </div>
                <button class="popular__card-button cards__button" type="button">
                    <svg class="icon__cart">
                        <use href="${u}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function de(s){return s.map(({_id:o,name:a,img:n,price:t})=>`<li class="discount__item cards__item" data-id="${o}">
                 <a class="discount__link cards__link" href="#">
                  <div class="discount__image">
            <img class="cards__image-photo-js" loading="lazy" src="${n}" alt="${a}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${a}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${t}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="${u}#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="${u}#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`).join("")}function ue({_id:s,name:o,img:a,category:n,price:t,size:e,popularity:c,desc:i}){return`<div class="modal__item cards__item" data-id="${s}">
                <div class="cards__main-upper">
                    <img class="cards__image-photo" loading="lazy" src="${a}" alt="${o}" />
                    <div class="cards__main up">
                </div>
      <div class="cards__main-modal">
      <h4 class="cards__title modal">${o}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${w(n)}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${e}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${c}</span></p>
                        </li>
                    </ul>
                    <p class="cards__desc-modal">${i}</p>
                </div>
                
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${u}#icon-close"></use>
                    </svg>
                </button>
            </div><div class="cards__main">
            <p class="cards__price">$${t}</p>
            <button class="cards__button add__to-button" type="button"> Add to
                <svg class="icon__cart" width="18" height="18">
                    <use href="${u}#icon-cart"></use>
                </svg>
            </button>
        </div>`}function pe(s){return s.map(({_id:o,name:a,img:n,category:t,price:e,size:c})=>`
            <li class="cart__products-item" data-id="${o}">
                <div class="cart__item-space">
                    <img src="${n}" alt="${a}" loading="lazy" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${a}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${w(t)}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${c}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${e}</span>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${u}#icon-close"></use>
                    </svg>
                </button>
            </li>
    `).join("")}function me(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="${J} 1x, ${G} 2x">
        <source media="(min-width: 320px)" srcset="${T} 1x, ${D} 2x">
        <img class="empty__img" loading="lazy" src="${T}" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}function _e(s){return`
        <div class="checkout__modal">
            <button class="checkout__close">
                <svg class="checkout__modal-close-icon">
                    <use href="${u}#icon-close"></use>
                </svg>
            </button>
            <div class="checkout__modal-image-shadow">
                <img
                    class="checkout__modal-img"
                    loading="lazy"
                    src="${x}"
                    srcset="
                        ${x}   1x,
                        ${j} 2x
                    "
                    alt="Order picture"
                />
                <svg class="icon-ellipse">
                    <use href="${u}#icon-ellipse-1"></use>
                </svg>
            </div>

            <div class="checkout__modal-txt-container">
                <h3 class="checkout__modal-title">ORDER SUCCESS</h3>
                <p class="checkout__modal-descr">
                    ${s}
                </p>
            </div>
        </div>
    `}function P(){return`
        <div class="markup">
            <h3 class="markup-title">
                Nothing was found for the selected
                <span class="markup-title-span">filters...</span>
            </h3>
            <p class="markup-descr">
                Try adjusting your search parameters or browse our range by other
                criteria to find the perfect product for you.
            </p>
        </div>
        `}const W="/BASE_URL/assets/subscription-tab-ac534afc.png",K="/BASE_URL/assets/subscription.png-0e0f2d9d.png",k=window.matchMedia("(min-width: 768px)");let h,S;const y=q.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${u}#icon-close"></use>
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
`,{onShow:()=>{window.addEventListener("keydown",I),S=y.element().querySelector(".footer__modal-close"),S.addEventListener("click",()=>y.close()),document.body.classList.add("modal-open")},onClose:()=>{S.removeEventListener("click",()=>y.close()),window.removeEventListener("keydown",I),k.removeEventListener("change",M),document.body.classList.remove("modal-open")}});function I(s){s.code==="Escape"&&y.close()}function M(){k.addEventListener("change",M),k.matches?h=W:h=K,y.show(()=>{const s=y.element().querySelector(".footer__modal-png");s&&(s.querySelector("img").src=h)})}const Y=function(){let s;const o=q.create(`
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
`,{onShow:n=>{window.addEventListener("keydown",a),s=n.element().querySelector(".footer__modal-close"),s.addEventListener("click",()=>n.close()),document.body.classList.add("modal-open")},onClose:()=>{s.removeEventListener("click",()=>o.close()),window.removeEventListener("keydown",a),document.body.classList.remove("modal-open")}});o.show();function a(n){n.code==="Escape"&&o.close()}};B.addEventListener("submit",Q);function Q(s){s.preventDefault();const{value:o}=s.currentTarget.elements.email;o!==""&&(V(o),s.target.reset())}async function V(s){try{(await F({method:"POST",data:{email:s}})).statusText==="Created"&&M()}catch({response:o}){o.statusText==="Conflict"&&Y()}}export{ce as A,z as B,me as a,pe as b,R as c,te as d,_e as e,ne as f,U as g,de as h,A as i,re as j,ie as k,ae as l,u as m,ue as n,oe as o,w as p,ee as q,r,se as s,Z as t,O as u,d as v,m as w,l as x,_ as y,le as z};
//# sourceMappingURL=subscription-0dbd934a.js.map
