import{d as f,f as b,e as E,h as w,i as y,r as n,j as L,g as h,c as l,k as _,l as C,m as S,n as m,o as k,p as x,s as T,t as v,u as A,v as q,q as M}from"./assets/markup-4f17587e.js";import{b as u}from"./assets/vendor-0363fca5.js";const P="/BASE_URL/assets/subscription-tab-ac534afc.png",R="/BASE_URL/assets/subscription.png-0e0f2d9d.png",p=window.matchMedia("(min-width: 768px)");function g(e){let t,o;p.matches?o=P:o=R;const s=u.create(`
    <div class="modal">
    <div class="footer__modal">
        <button type="button" class="footer__modal-close">
            <svg class="footer__modal-icon">
                <use href="${f}#icon-close"></use>
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
`,{onShow:c=>{window.addEventListener("keydown",a),t=c.element().querySelector(".footer__modal-close"),t.addEventListener("click",()=>c.close()),document.body.classList.add("modal-open")},onClose:()=>{t.removeEventListener("click",()=>s.close()),window.removeEventListener("keydown",a),document.body.classList.remove("modal-open")}});s.show();function a(c){c.code==="Escape"&&s.close()}const i=document.querySelector(".modal");i&&(console.dir(i),p.addEventListener("change",g))}const F=function(){let e;const t=u.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}};b.addEventListener("submit",D);function D(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;$(t),e.target.reset()}async function $(e){try{(await E({method:"POST",data:{email:e}})).statusText==="Created"&&g()}catch({response:t}){t.statusText==="Conflict"&&F()}}w().then(e=>{let t=y(e.slice(0,2));n.discountCards.innerHTML=t}).catch;async function B(){return(await L({method:"GET",url:"/popular"})).data}const r=h(l.CART_KEY);async function H(e){const{target:t}=e,o=t.closest(".cards__button");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,a=await _(s);if(r.some(({_id:d})=>s===d))return;r.push(a);const c=document.querySelector(".header__menu-link-quantity");c.textContent=r.length,localStorage.setItem(l.CART_KEY,JSON.stringify(r)),r.some(({_id:d})=>s===d)&&(o.innerHTML=`<svg class="icon-checked"><use href="${f}#icon-check"></use></svg>`)}async function U(e){e.preventDefault();const{target:t}=e,o=t.closest(".cards__link");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,a=await _(s);u.create(C(a)).show()}S().then(e=>{let t=e.map(a=>m(a));localStorage.setItem("filter",k);let o=t.map(a=>`<option value="${a}">${m(a)}</option>`).join(""),s="<option  selected  >Show all</option>";n.productsFiltersSelect.innerHTML=o+s}).catch;x().then(e=>{let t=T(e.results);n.productsCards.innerHTML=t}).catch();n.productsFiltersSelect.addEventListener("change",v);n.btnSubmit.addEventListener("submit",A);n.productsFiltersSelect.addEventListener("change",v);B().then(e=>{let t=q(e.slice(0,5));n.popularCards.innerHTML=t}).catch;n.productsCards.addEventListener("click",e=>e.preventDefault());n.productsCards.addEventListener("click",H);const I=h(l.CART_KEY);M(I);n.productsCards.addEventListener("click",U);
//# sourceMappingURL=commonHelpers2.js.map
