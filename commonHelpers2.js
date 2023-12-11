import{d as h,f as E,e as w,h as y,i as L,r as n,j as S,g as _,c as u,k as v,l as k,m as C,n as p,o as x,p as T,s as A,t as g,u as q,v as M,q as P}from"./assets/markup-71932f76.js";import{b as m}from"./assets/vendor-0363fca5.js";const R="/BASE_URL/assets/subscription-tab-ac534afc.png",F="/BASE_URL/assets/subscription.png-0e0f2d9d.png",f=window.matchMedia("(min-width: 768px)");function b(e){let t,o;f.matches?o=R:o=F;const s=m.create(`
    <div class="modal">
    <div class="footer__modal">
        <button type="button" class="footer__modal-close">
            <svg class="footer__modal-icon">
                <use href="${h}#icon-close"></use>
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
                src="${o}"
                alt="bascket of products"
            />
        </div>
    </div>
</div>
`,{onShow:c=>{window.addEventListener("keydown",a),t=c.element().querySelector(".footer__modal-close"),t.addEventListener("click",()=>c.close()),document.body.classList.add("modal-open")},onClose:()=>{t.removeEventListener("click",()=>s.close()),window.removeEventListener("keydown",a),document.body.classList.remove("modal-open")}});s.show();function a(c){c.code==="Escape"&&s.close()}const r=document.querySelector(".modal");r&&(console.dir(r),f.addEventListener("change",b))}const B=function(){let e;const t=m.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}};E.addEventListener("submit",D);function D(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;$(t),e.target.reset()}async function $(e){try{(await w({method:"POST",data:{email:e}})).statusText==="Created"&&b()}catch({response:t}){t.statusText==="Conflict"&&B()}}y().then(e=>{let t=L(e.slice(0,2));n.discountCards.innerHTML=t}).catch;async function H(){return(await S({method:"GET",url:"/popular"})).data}const i=_(u.CART_KEY);async function U(e){const{target:t}=e,o=t.closest(".cards__button");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,a=await v(s);if(i.some(({_id:l})=>s===l))return;i.push(a);const c=document.querySelector(".header__menu-link-quantity");c.textContent=i.length,localStorage.setItem(u.CART_KEY,JSON.stringify(i)),i.some(({_id:l})=>s===l)&&(o.innerHTML=`<svg class="icon-checked"><use href="${h}#icon-check"></use></svg>`)}async function I(e){e.preventDefault();const{target:t}=e,o=t.closest(".cards__button"),s=t.closest(".cards__link");if(o||!s)return;const{id:a}=s.closest(".cards__item").dataset,r=await v(a);m.create(k(r),{onShow:d=>{d.element().querySelector(".modal__item-close").onclick=d.close}}).show()}C().then(e=>{let t=e.map(a=>p(a));localStorage.setItem("filter",x);let o=t.map(a=>`<option value="${a}">${p(a)}</option>`).join(""),s="<option  selected  >Show all</option>";n.productsFiltersSelect.innerHTML=o+s}).catch;T().then(e=>{let t=A(e.results);n.productsCards.innerHTML=t}).catch();n.productsFiltersSelect.addEventListener("change",g);n.btnSubmit.addEventListener("submit",q);n.productsFiltersSelect.addEventListener("change",g);H().then(e=>{let t=M(e.slice(0,5));n.popularCards.innerHTML=t}).catch;n.productsCards.addEventListener("click",e=>e.preventDefault());n.productsCards.addEventListener("click",U);const O=_(u.CART_KEY);P(O);n.productsCards.addEventListener("click",I);
//# sourceMappingURL=commonHelpers2.js.map
