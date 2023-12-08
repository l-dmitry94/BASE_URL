/* empty css                      */import{a as n,b as u}from"./assets/vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const i="https://food-boutique.b.goit.study/api",d=n.create({baseURL:`${i}/products`}),m=n.create({baseURL:`${i}/subscription`});n.create({baseURL:`${i}/orders`});const _=function(){let e;const t=u.create(`
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
`,{onShow:r=>{window.addEventListener("keydown",s),e=r.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>r.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});t.show();function s(r){r.code==="Escape"&&t.close()}},g=function(){let e;const t=u.create(`
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
`,{onShow:r=>{window.addEventListener("keydown",s),e=r.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>r.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",s),document.body.classList.remove("modal-open")}});t.show();function s(r){r.code==="Escape"&&t.close()}},c={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".product__cards")};let h={keyword:null,category:null,page:1,limit:6},v=JSON.stringify(h);const y=document.querySelector(".footer__form");y.addEventListener("submit",b);function b(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;S(t),e.target.reset()}async function S(e){try{(await m({method:"POST",data:{email:e}})).statusText==="Created"&&_()}catch({response:t}){t.statusText==="Conflict"&&g()}}function p(e){return e.map(({_id:t,name:s,img:r,category:o,price:a,size:l,popularity:f})=>`<div class="product__cards">
            <ul class="cards">
                <li class="cards__item" data-id="${t}">
                <a class="cards__link" href="${r}">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" src="${r}" alt="${s}" />
                        </div>
                        <h4 class="cards__title">${s}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${x(o)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${l}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${f}</span></p>
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
        </div>`).join("")}async function w(){const e=await d({method:"GET",url:"/categories"});return console.log(e.data),e.data}async function L(){const e=await d({method:"GET"});return console.log(e.data),e.data}async function E(e,t,s){await d({method:"GET",url:`?category=${e}&page=${t}&limit=${s}`})}function x(e){return e=e.replace("_&_"," / "),e=e.replace("_"," "),e}function $(){const e=c.productsFiltersSelect.options[c.productsFiltersSelect.selectedIndex];let t=localStorage.getItem("filter"),s=t?JSON.parse(t):{};s.category=e.textContent,console.log(s.category.replace(/ /g,"_")),localStorage.setItem("filter",JSON.stringify(s)),c.productsFilters.value===""&&E(s.category.replace(/ /g,"_"),s.page,s.limit).then(r=>{let o=p(r);c.productsCards.innerHTML=o,console.log(r)}).catch,console.log("no")}w().then(e=>{let t=e.map(o=>o.replace(/_/," ").replace(/_/," "));localStorage.setItem("categories",JSON.stringify(t)),localStorage.setItem("filter",v);let s=t.map(o=>`<option value="" class="products__filters-select" >${o}</option>`).join(""),r='<option value="" class="products__filters-select" >Show all</option>';c.productsFiltersSelect.innerHTML=s+r}).catch;L().then(e=>{let t=p(e.results);c.productsCards.innerHTML=t}).catch;c.productsFiltersSelect.addEventListener("change",$);
//# sourceMappingURL=commonHelpers2.js.map
