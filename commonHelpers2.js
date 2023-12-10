/* empty css                      */import{a as m,b as S}from"./assets/vendor-0363fca5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();const g="https://food-boutique.b.goit.study/api",d=m.create({baseURL:`${g}/products`}),L=m.create({baseURL:`${g}/subscription`});m.create({baseURL:`${g}/orders`});const $=function(){let e;const o=S.create(`
    <div class="modal">
    <div class="footer__modal">
        <button type="button" class="footer__modal-close">
            <svg class="footer__modal-icon">
                <use href="../../img/icons.svg#icon-close"></use>
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
                src="../../img/footer/subscription.png.png"
                alt="bascket of products"
            />
        </div>
    </div>
</div>
`,{onShow:t=>{window.addEventListener("keydown",s),e=t.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>t.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>o.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});o.show();function s(t){t.code==="Escape"&&o.close()}},E=function(){let e;const o=S.create(`
        <div class="modal">
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
`,{onShow:t=>{window.addEventListener("keydown",s),e=t.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>t.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>o.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});o.show();function s(t){t.code==="Escape"&&o.close()}},n={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper")};let C={keyword:null,category:null,page:1,limit:6},p=JSON.stringify(C);const T=document.querySelector(".footer__form");T.addEventListener("submit",x);function x(e){e.preventDefault();const{value:o}=e.currentTarget.elements.email;I(o),e.target.reset()}async function I(e){try{(await L({method:"POST",data:{email:e}})).statusText==="Created"&&$()}catch({response:o}){o.statusText==="Conflict"&&E()}}function f(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function y(e){return e=e.replace(/ /g,"_"),e=e.replace(/\//g,encodeURIComponent("&")),e}function b(){const e=n.productsFiltersSelect.options[n.productsFiltersSelect.selectedIndex];let o=localStorage.getItem("filter"),s=o?JSON.parse(o):{};const t=e.textContent!=="Show all"?e.textContent:null;s.category=t,localStorage.setItem("filter",JSON.stringify(s)),s.category===null&&s.keyword===null?(localStorage.setItem("filter",p),s.category=null,_().then(r=>{let c=i(r.results);n.productsCards.innerHTML=c}).catch):s.category!==null&&s.keyword===null?M(y(s.category),s.page,s.limit).then(r=>{let c=i(r.results);n.productsCards.innerHTML=c,console.log(r)}).catch(r=>{console.log(r)}):s.category===null&&s.keyword!==null?(localStorage.setItem("filter",JSON.stringify(s)),_().then(r=>{let c=i(r.results);localStorage.setItem("filter",p),n.productsFilters.value="",n.productsCards.innerHTML=c}).catch,localStorage.setItem("filter",data1),n.productsFilters.value=""):s.category!==null&&s.keyword!==null&&k(s.keyword,y(s.category),s.page,s.limit).then(r=>{let c=i(r.results);n.productsCards.innerHTML=c,console.log(r)}).catch(r=>{console.console.log()})}function F(e){e.preventDefault();const o=n.input.value;let s=localStorage.getItem("filter"),t=s?JSON.parse(s):{};const r=o!==""?o:null;t.keyword=r,localStorage.setItem("filter",JSON.stringify(t));let c=p;t.keyword===null?_().then(a=>{let l=i(a.results);localStorage.setItem("filter",c),n.productsCards.innerHTML=l}).catch(a=>{console.error(a)}):t.keyword!==null&&t.category===null?v(t.keyword,t.page,t.limit).then(a=>{let l=i(a.results);n.productsCards.innerHTML=l}).catch(a=>{console.error(a)}):t.keyword!==null&&t.category!==null?k(t.keyword,t.category,t.page,t.limit).then(a=>{let l=i(a.results);n.productsCards.innerHTML=l}).catch(a=>{console.error(a)}):t.keyword!==null&&t.category===null&&(localStorage.setItem("filter",JSON.stringify(t)),v(t.keyword,t.page,t.limit).then(a=>{let l=i(a.results);n.productsCards.innerHTML=l}).catch(a=>{console.error(a)}))}function i(e){return e.map(({_id:o,name:s,img:t,category:r,price:c,size:a,popularity:l})=>`
                <li class="cards__item" data-id="${o}">
                <a class="cards__link" href="${t}">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${t}" alt="${s}" />
                        </div>
                        <h4 class="cards__title">${s}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${f(r)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${a}</span></p>
                               
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
                </li>`).join("")}function O(e){return e.map(({_id:o,name:s,img:t,category:r,size:c,popularity:a})=>`<li class="cards__item popular__item" data-id="${o}">
                    <a class="popular__link" href="${t}">
                <div class="cards__background-img popular__img">
                    <img class="popular__image-photo-js" src="${t}" alt="${s}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${s}</h4>
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
                                <p class="cards__info-value">${a}</p>
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
        </li>`).join("")}function q(e){return e.map(({_id:o,name:s,img:t,price:r})=>`<li class="discount__item" data-id="${o}">
                 <a class="discount__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${t}" alt="${s}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${s}</p>
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
                 </li>`).join("")}const h={CART_KEY:"cart"};function w(e){try{const o=localStorage.getItem(e);return o?JSON.parse(o):[]}catch(o){console.log(o.message)}}async function P(){w(h.CART_KEY).forEach(({_id:o})=>{const s=document.querySelector(`[data-id="${o}"]`);if(s){const t=s.querySelector(".cards__button");t.innerHTML=`<svg class="icon-checked"><use href="${check}#icon-check"></use></svg>`}})}async function A(){return(await d({method:"GET",url:"/categories"})).data}async function _(){const e=await d({method:"GET"});return P(),e.data}async function v(e,o,s){return(await d({method:"GET",url:`?keyword=${e}&page=${o}&limit=${s}`})).data}async function k(e,o,s,t){return(await d({method:"GET",url:`?keyword=${e}&category=${o}&page=${s}&limit=${t}`})).data}async function M(e,o,s){return(await d({method:"GET",url:`?category=${e}&page=${o}&limit=${s}`})).data}async function H(e){return(await d({method:"GET",url:`/${e}`})).data}async function N(){const e=await d({method:"GET",url:"/discount"});return console.log(e.data),e.data}async function R(){const e=await d({method:"GET",url:"/popular"});return console.log(e.data),e.data}const D="/BASE_URL/assets/icons-242b7a09.svg",u=w(h.CART_KEY);async function G(e){const{target:o}=e,s=o.closest(".cards__button");if(!s)return;const{id:t}=s.closest(".cards__item").dataset,r=await H(t);if(u.some(({_id:l})=>t===l))return;u.push(r),localStorage.setItem(h.CART_KEY,JSON.stringify(u)),u.some(({_id:l})=>t===l)&&(s.innerHTML=`<svg class="icon-checked"><use href="${D}#icon-check"></use></svg>`)}A().then(e=>{let o=e.map(r=>f(r));localStorage.setItem("filter",p);let s=o.map(r=>`<option value="${r}">${f(r)}</option>`).join(""),t="<option  selected  >Show all</option>";n.productsFiltersSelect.innerHTML=s+t}).catch;_().then(e=>{let o=i(e.results);n.productsCards.innerHTML=o}).catch();n.productsFiltersSelect.addEventListener("change",b);n.btnSubmit.addEventListener("submit",F);n.productsFiltersSelect.addEventListener("change",b);N().then(e=>{let o=q(e.slice(0,2));n.discountCards.innerHTML=o}).catch;R().then(e=>{let o=O(e.slice(0,5));n.popularCards.innerHTML=o}).catch;n.productsCards.addEventListener("click",e=>e.preventDefault());n.productsCards.addEventListener("click",G);
//# sourceMappingURL=commonHelpers2.js.map
