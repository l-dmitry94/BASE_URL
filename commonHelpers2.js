import{f as w,h as x,i as T,j as A,k as q,r as s,l as y,m as P,n as M,g as k,c as p,o as C,p as F,t as R,u as L,v as B,w as D,x as $,y as S,z as H,q as U}from"./assets/markup-f742fa4d.js";import{b as f}from"./assets/vendor-87a64248.js";const I="/BASE_URL/assets/subscription-tab-ac534afc.png",O="/BASE_URL/assets/subscription.png-0e0f2d9d.png",m=window.matchMedia("(min-width: 768px)");let r,u;const i=f.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${w}#icon-close"></use>
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
            src="${r}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,{onShow:e=>{window.addEventListener("keydown",b),u=e.element().querySelector(".footer__modal-close"),u.addEventListener("click",()=>e.close())},onClose:()=>{u.removeEventListener("click",()=>i.close()),window.removeEventListener("keydown",b),m.removeEventListener("change",h)}});function b(e){e.code==="Escape"&&i.close()}function h(){m.addEventListener("change",h),m.matches?r=I:r=O,i.show(()=>{const e=i.element().querySelector(".footer__modal-png");e&&(e.querySelector("img").src=r)})}const Y=function(){let e;const t=f.create(`
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
`,{onShow:o=>{window.addEventListener("keydown",a),e=o.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>o.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",a),document.body.classList.remove("modal-open")}});t.show();function a(o){o.code==="Escape"&&t.close()}};x.addEventListener("submit",K);function K(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;N(t),e.target.reset()}async function N(e){try{(await T({method:"POST",data:{email:e}})).statusText==="Created"&&h()}catch({response:t}){t.statusText==="Conflict"&&Y()}}A().then(e=>{let t=q(e.slice(0,2));s.discountCards.innerHTML=t,y()}).catch;P().then(e=>{let t=M(e.slice(0,5));s.popularCards.innerHTML=t,y()}).catch;const c=k(p.CART_KEY);async function _(e){const{target:t}=e,a=t.closest(".cards__button");if(!a)return;const{id:o}=a.closest(".cards__item").dataset,n=await C(o);if(c.some(({_id:l})=>o===l))return;c.push(n);const E=document.querySelector(".header__menu-link-quantity");E.textContent=c.length,localStorage.setItem(p.CART_KEY,JSON.stringify(c)),c.some(({_id:l})=>o===l)&&(a.innerHTML=`<svg class="icon-checked"><use href="${w}#icon-check"></use></svg>`)}async function v(e){e.preventDefault();const{target:t}=e,a=t.closest(".cards__button"),o=t.closest(".cards__link");if(a||!o)return;const{id:n}=o.closest(".cards__item").dataset,g=await C(n);f.create(F(g),{onShow:d=>{d.element().querySelector(".modal__item-close").onclick=d.close}}).show()}R().then(e=>{let t=e.map(n=>L(n));localStorage.setItem("filter",B);let a=t.map(n=>`<option value="${n}">${L(n)}</option>`).join(""),o="<option  selected  >Show all</option>";s.productsFiltersSelect.innerHTML=a+o}).catch;D().then(e=>{let t=$(e.results);s.productsCards.innerHTML=t}).catch();s.productsFiltersSelect.addEventListener("change",S);s.btnSubmit.addEventListener("submit",H);s.productsFiltersSelect.addEventListener("change",S);s.productsCards.addEventListener("click",e=>e.preventDefault());s.productsCards.addEventListener("click",_);s.popularCards.addEventListener("click",_);s.discountCards.addEventListener("click",_);const j=k(p.CART_KEY);U(j);s.productsCards.addEventListener("click",v);s.popularCards.addEventListener("click",v);s.discountCards.addEventListener("click",v);
//# sourceMappingURL=commonHelpers2.js.map
