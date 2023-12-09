/* empty css                      */import{a as f,b as h}from"./assets/vendor-0363fca5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const m="https://food-boutique.b.goit.study/api",d=f.create({baseURL:`${m}/products`}),b=f.create({baseURL:`${m}/subscription`});f.create({baseURL:`${m}/orders`});const w=function(){let e;const r=h.create(`
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
`,{onShow:t=>{window.addEventListener("keydown",s),e=t.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>t.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>r.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});r.show();function s(t){t.code==="Escape"&&r.close()}},L=function(){let e;const r=h.create(`
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
`,{onShow:t=>{window.addEventListener("keydown",s),e=t.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>t.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>r.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});r.show();function s(t){t.code==="Escape"&&r.close()}},l={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".product__cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),cardWrapper:document.querySelector(".cart__wrapper")};let k={keyword:null,category:null,page:1,limit:6},_=JSON.stringify(k);const E=document.querySelector(".footer__form");E.addEventListener("submit",$);function $(e){e.preventDefault();const{value:r}=e.currentTarget.elements.email;C(r),e.target.reset()}async function C(e){try{(await b({method:"POST",data:{email:e}})).statusText==="Created"&&w()}catch({response:r}){r.statusText==="Conflict"&&L()}}function p(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function g(e){return e=e.replace(/ /g,"_"),e=e.replace(/\//g,encodeURIComponent("&")),e}function v(){const e=l.productsFiltersSelect.options[l.productsFiltersSelect.selectedIndex];let r=localStorage.getItem("filter"),s=r?JSON.parse(r):{};const t=e.textContent!=="Show all"?e.textContent:null;s.category=t,localStorage.setItem("filter",JSON.stringify(s)),s.category===null&&s.keyword===null?(localStorage.setItem("filter",_),s.category=null,u().then(o=>{let n=i(o.results);l.productsCards.innerHTML=n}).catch):s.category!==null&&s.keyword===null?O(g(s.category),s.page,s.limit).then(o=>{let n=i(o.results);l.productsCards.innerHTML=n,console.log(o)}).catch(o=>{console.log(o)}):s.category===null&&s.keyword!==null?(localStorage.setItem("filter",JSON.stringify(s)),u().then(o=>{let n=i(o.results);l.productsCards.innerHTML=n}).catch,localStorage.setItem("filter",data1),l.productsFilters.value=""):s.category!==null&&s.keyword!==null&&S(s.keyword,g(s.category),s.page,s.limit).then(o=>{let n=i(o.results);l.productsCards.innerHTML=n,console.log(o)}).catch(o=>{console.console.log()})}function T(e){e.preventDefault();const r=l.input.value;let s=localStorage.getItem("filter"),t=s?JSON.parse(s):{};const o=r!==""?r:null;t.keyword=o,localStorage.setItem("filter",JSON.stringify(t));let n=_;t.keyword===null?u().then(c=>{let a=i(c.results);localStorage.setItem("filter",n),l.productsCards.innerHTML=a}).catch(c=>{console.error(c)}):t.keyword!==null&&t.category===null?y(t.keyword,t.page,t.limit).then(c=>{let a=i(c.results);l.productsCards.innerHTML=a}).catch(c=>{console.error(c)}):t.keyword!==null&&t.category!==null?S(t.keyword,t.category,t.page,t.limit).then(c=>{let a=i(c.results);l.productsCards.innerHTML=a}).catch(c=>{console.error(c)}):t.keyword!==null&&t.category===null&&(localStorage.setItem("filter",JSON.stringify(t)),y(t.keyword,t.page,t.limit).then(c=>{let a=i(c.results);l.productsCards.innerHTML=a}).catch(c=>{console.error(c)}))}function i(e){return e.map(({_id:r,name:s,img:t,category:o,price:n,size:c,popularity:a})=>`<div class="product__cards">
            <ul class="cards">
                <li class="cards__item" data-id="${r}">
                <a class="cards__link" href="${t}">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${t}" alt="${s}" />
                        </div>
                        <h4 class="cards__title">${s}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${p(o)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${c}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${a}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${n}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="./img/icons.svg#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                    </a>
                </li>
            </ul>
        </div>`).join("")}function x(e){return e.map(({_id:r,name:s,img:t,price:o})=>`<li class="discount__item" data-id="${r}">
                 <a class="discount__link" href="#">
                  <div class="discount__image">
            <img class="discount__image-photo-js" src="${t}" alt="${s}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${s}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${o}</p>
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
                 </li>`).join("")}async function F(){return(await d({method:"GET",url:"/categories"})).data}async function u(){return(await d({method:"GET"})).data}async function y(e,r,s){return(await d({method:"GET",url:`?keyword=${e}&page=${r}&limit=${s}`})).data}async function S(e,r,s,t){return(await d({method:"GET",url:`?keyword=${e}&category=${r}&page=${s}&limit=${t}`})).data}async function O(e,r,s){return(await d({method:"GET",url:`?category=${e}&page=${r}&limit=${s}`})).data}async function I(){const e=await d({method:"GET",url:"/discount"});return console.log(e.data),e.data}F().then(e=>{let r=e.map(o=>p(o));localStorage.setItem("filter",_);let s=r.map(o=>`<option value="${o}">${p(o)}</option>`).join(""),t="<option  selected  >Show all</option>";l.productsFiltersSelect.innerHTML=s+t}).catch;u().then(e=>{let r=i(e.results);l.productsCards.innerHTML=r}).catch();l.productsFiltersSelect.addEventListener("change",v);l.btnSubmit.addEventListener("submit",T);l.productsFiltersSelect.addEventListener("change",v);I().then(e=>{let r=x(e.slice(0,2));l.discountCards.innerHTML=r}).catch;
//# sourceMappingURL=commonHelpers2.js.map
