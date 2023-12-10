import{f as _,d as g,e as u,g as m,c as i,h as p,i as y,j as E,k as b,n as l,l as w,r as a,m as L,o as C,p as f,s as k,t as S,u as T,q as x}from"./assets/markup-c9b0a9a7.js";import{b as d}from"./assets/vendor-0363fca5.js";const A=function(){let e;const t=d.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}},P=function(){let e;const t=d.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}};_.addEventListener("submit",q);function q(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;F(t),e.target.reset()}async function F(e){try{(await g({method:"POST",data:{email:e}})).statusText==="Created"&&A()}catch({response:t}){t.statusText==="Conflict"&&P()}}async function M(){return(await u({method:"GET",url:"/discount"})).data}async function D(){return(await u({method:"GET",url:"/popular"})).data}const c=m(i.CART_KEY);async function H(e){const{target:t}=e,o=t.closest(".cards__button");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,n=await p(s);if(c.some(({_id:r})=>s===r))return;c.push(n);const v=document.querySelector(".header__menu-link-quantity");v.textContent=c.length,localStorage.setItem(i.CART_KEY,JSON.stringify(c)),c.some(({_id:r})=>s===r)&&(o.innerHTML=`<svg class="icon-checked"><use href="${y}#icon-check"></use></svg>`)}async function I(e){e.preventDefault();const{target:t}=e,o=t.closest(".cards__link");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,n=await p(s);d.create(E(n)).show()}b().then(e=>{let t=e.map(n=>l(n));localStorage.setItem("filter",w);let o=t.map(n=>`<option value="${n}">${l(n)}</option>`).join(""),s="<option  selected  >Show all</option>";a.productsFiltersSelect.innerHTML=o+s}).catch;L().then(e=>{let t=C(e.results);a.productsCards.innerHTML=t}).catch();a.productsFiltersSelect.addEventListener("change",f);a.btnSubmit.addEventListener("submit",k);a.productsFiltersSelect.addEventListener("change",f);M().then(e=>{let t=S(e.slice(0,2));a.discountCards.innerHTML=t}).catch;D().then(e=>{let t=T(e.slice(0,5));a.popularCards.innerHTML=t}).catch;a.productsCards.addEventListener("click",e=>e.preventDefault());a.productsCards.addEventListener("click",H);const O=m(i.CART_KEY);x(O);a.productsCards.addEventListener("click",I);
//# sourceMappingURL=commonHelpers2.js.map
