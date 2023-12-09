/* empty css                      */import{a as l,b as u}from"./assets/vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const d="https://food-boutique.b.goit.study/api",n=l.create({baseURL:`${d}/products`}),f=l.create({baseURL:`${d}/subscription`});l.create({baseURL:`${d}/orders`});const m=function(){let e;const t=u.create(`
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
`,{onShow:c=>{window.addEventListener("keydown",o),e=c.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>c.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(c){c.code==="Escape"&&t.close()}},g=function(){let e;const t=u.create(`
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
`,{onShow:c=>{window.addEventListener("keydown",o),e=c.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>c.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(c){c.code==="Escape"&&t.close()}},r={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".product__cards"),discountCards:document.querySelector(".discount__list"),cardWrapper:document.querySelector(".cart__wrapper")};let v={keyword:null,category:null,page:1,limit:6},h=JSON.stringify(v);const y=document.querySelector(".footer__form");y.addEventListener("submit",b);function b(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;S(t),e.target.reset()}async function S(e){try{(await f({method:"POST",data:{email:e}})).statusText==="Created"&&m()}catch({response:t}){t.statusText==="Conflict"&&g()}}function p(e){return e.map(({_id:t,name:o,img:c,category:s,price:a,size:i,popularity:_})=>`<div class="product__cards">
            <ul class="cards">
                <li class="cards__item" data-id="${t}">
                <a class="cards__link" href="${c}">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${c}" alt="${o}" />
                        </div>
                        <h4 class="cards__title">${o}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${C(s)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${i}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${_}</span></p>
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
                </li>
            </ul>
        </div>`).join("")}function w(e){return e.map(({_id:t,name:o,img:c,price:s})=>`<li class="discount__item" data-id="${t}">
                 <a class="discount__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${c}" alt="${o}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${o}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${s}</p>
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
                 </li>`).join("")}async function L(){const e=await n({method:"GET",url:"/categories"});return console.log(e.data),e.data}async function E(){const e=await n({method:"GET"});return console.log(e.data),e.data}async function $(e,t,o){await n({method:"GET",url:`?category=${e}&page=${t}&limit=${o}`})}function C(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function x(){const e=r.productsFiltersSelect.options[r.productsFiltersSelect.selectedIndex];let t=localStorage.getItem("filter"),o=t?JSON.parse(t):{};o.category=e.textContent,console.log(o.category.replace(/ /g,"_")),localStorage.setItem("filter",JSON.stringify(o)),r.productsFilters.value===""&&$(o.category.replace(/ /g,"_"),o.page,o.limit).then(c=>{let s=p(c);r.productsCards.innerHTML=s,console.log(c)}).catch,console.log("no")}async function k(){const e=await n({method:"GET",url:"/discount"});return console.log(e.data),e.data}L().then(e=>{let t=e.map(s=>s.replace(/_/," ").replace(/_/," "));localStorage.setItem("categories",JSON.stringify(t)),localStorage.setItem("filter",h);let o=t.map(s=>`<option value="" class="products__filters-select" >${s}</option>`).join(""),c='<option value="" class="products__filters-select" >Show all</option>';r.productsFiltersSelect.innerHTML=o+c}).catch;E().then(e=>{let t=p(e.results);r.productsCards.innerHTML=t}).catch;r.productsFiltersSelect.addEventListener("change",x);k().then(e=>{let t=w(e.slice(0,2));r.discountCards.innerHTML=t}).catch;
//# sourceMappingURL=commonHelpers2.js.map
