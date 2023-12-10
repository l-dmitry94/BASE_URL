/* empty css                      */import{a as f,b as y}from"./assets/vendor-0363fca5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const m="https://food-boutique.b.goit.study/api",d=f.create({baseURL:`${m}/products`}),b=f.create({baseURL:`${m}/subscription`});f.create({baseURL:`${m}/orders`});const w=function(){let e;const o=y.create(`
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
`,{onShow:t=>{window.addEventListener("keydown",s),e=t.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>t.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>o.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});o.show();function s(t){t.code==="Escape"&&o.close()}},L=function(){let e;const o=y.create(`
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
`,{onShow:t=>{window.addEventListener("keydown",s),e=t.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>t.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>o.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});o.show();function s(t){t.code==="Escape"&&o.close()}},c={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper")};let $={keyword:null,category:null,page:1,limit:6},u=JSON.stringify($);const k=document.querySelector(".footer__form");k.addEventListener("submit",C);function C(e){e.preventDefault();const{value:o}=e.currentTarget.elements.email;E(o),e.target.reset()}async function E(e){try{(await b({method:"POST",data:{email:e}})).statusText==="Created"&&w()}catch({response:o}){o.statusText==="Conflict"&&L()}}function _(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function g(e){return e=e.replace(/ /g,"_"),e=e.replace(/\//g,encodeURIComponent("&")),e}function v(){const e=c.productsFiltersSelect.options[c.productsFiltersSelect.selectedIndex];let o=localStorage.getItem("filter"),s=o?JSON.parse(o):{};const t=e.textContent!=="Show all"?e.textContent:null;s.category=t,localStorage.setItem("filter",JSON.stringify(s)),s.category===null&&s.keyword===null?(localStorage.setItem("filter",u),s.category=null,p().then(r=>{let a=i(r.results);c.productsCards.innerHTML=a}).catch):s.category!==null&&s.keyword===null?O(g(s.category),s.page,s.limit).then(r=>{let a=i(r.results);c.productsCards.innerHTML=a,console.log(r)}).catch(r=>{console.log(r)}):s.category===null&&s.keyword!==null?(localStorage.setItem("filter",JSON.stringify(s)),p().then(r=>{let a=i(r.results);localStorage.setItem("filter",u),c.productsFilters.value="",c.productsCards.innerHTML=a}).catch,localStorage.setItem("filter",data1),c.productsFilters.value=""):s.category!==null&&s.keyword!==null&&S(s.keyword,g(s.category),s.page,s.limit).then(r=>{let a=i(r.results);c.productsCards.innerHTML=a,console.log(r)}).catch(r=>{console.console.log()})}function T(e){e.preventDefault();const o=c.input.value;let s=localStorage.getItem("filter"),t=s?JSON.parse(s):{};const r=o!==""?o:null;t.keyword=r,localStorage.setItem("filter",JSON.stringify(t));let a=u;t.keyword===null?p().then(l=>{let n=i(l.results);localStorage.setItem("filter",a),c.productsCards.innerHTML=n}).catch(l=>{console.error(l)}):t.keyword!==null&&t.category===null?h(t.keyword,t.page,t.limit).then(l=>{let n=i(l.results);c.productsCards.innerHTML=n}).catch(l=>{console.error(l)}):t.keyword!==null&&t.category!==null?S(t.keyword,t.category,t.page,t.limit).then(l=>{let n=i(l.results);c.productsCards.innerHTML=n}).catch(l=>{console.error(l)}):t.keyword!==null&&t.category===null&&(localStorage.setItem("filter",JSON.stringify(t)),h(t.keyword,t.page,t.limit).then(l=>{let n=i(l.results);c.productsCards.innerHTML=n}).catch(l=>{console.error(l)}))}function i(e){return e.map(({_id:o,name:s,img:t,category:r,price:a,size:l,popularity:n})=>`
                <li class="cards__item" data-id="${o}">
                <a class="cards__link" href="${t}">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${t}" alt="${s}" />
                        </div>
                        <h4 class="cards__title">${s}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${_(r)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${l}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${n}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${a}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="./img/icons.svg#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>`).join("")}function x(e){return e.map(({_id:o,name:s,img:t,category:r,size:a,popularity:l})=>`<li class="cards__item popular__item" data-id="${o}">
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
                                <p class="cards__info-value">${a}</p>
                            </div>
                            <div class="cards__info-item">
                                <p class="cards__info-title">Popularity:</p>
                                <p class="cards__info-value">${l}</p>
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
        </li>`).join("")}function F(e){return e.map(({_id:o,name:s,img:t,price:r})=>`<li class="discount__item" data-id="${o}">
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
                 </li>`).join("")}async function I(){return(await d({method:"GET",url:"/categories"})).data}async function p(){return(await d({method:"GET"})).data}async function h(e,o,s){return(await d({method:"GET",url:`?keyword=${e}&page=${o}&limit=${s}`})).data}async function S(e,o,s,t){return(await d({method:"GET",url:`?keyword=${e}&category=${o}&page=${s}&limit=${t}`})).data}async function O(e,o,s){return(await d({method:"GET",url:`?category=${e}&page=${o}&limit=${s}`})).data}async function q(){const e=await d({method:"GET",url:"/discount"});return console.log(e.data),e.data}async function P(){const e=await d({method:"GET",url:"/popular"});return console.log(e.data),e.data}I().then(e=>{let o=e.map(r=>_(r));localStorage.setItem("filter",u);let s=o.map(r=>`<option value="${r}">${_(r)}</option>`).join(""),t="<option  selected  >Show all</option>";c.productsFiltersSelect.innerHTML=s+t}).catch;p().then(e=>{let o=i(e.results);c.productsCards.innerHTML=o}).catch();c.productsFiltersSelect.addEventListener("change",v);c.btnSubmit.addEventListener("submit",T);c.productsFiltersSelect.addEventListener("change",v);q().then(e=>{let o=F(e.slice(0,2));c.discountCards.innerHTML=o}).catch;P().then(e=>{let o=x(e.slice(0,5));c.popularCards.innerHTML=o}).catch;
//# sourceMappingURL=commonHelpers2.js.map
