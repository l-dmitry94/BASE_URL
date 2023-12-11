import{d as y,f as x,e as T,h as q,i as A,r as s,j as w,k as P,l as M,g as k,c as m,m as C,n as F,o as R,p as L,s as B,t as D,u as $,v as S,w as H,q as U}from"./assets/markup-372ed981.js";import{b as p}from"./assets/vendor-0363fca5.js";const I="/BASE_URL/assets/subscription-tab-ac534afc.png",O="/BASE_URL/assets/subscription.png-0e0f2d9d.png",f=window.matchMedia("(min-width: 768px)");f.addEventListener("change",h);let r,u;document.querySelector(".modal");const d=p.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${y}#icon-close"></use>
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
`,{onShow:e=>{window.addEventListener("keydown",b),u=e.element().querySelector(".footer__modal-close"),u.addEventListener("click",()=>e.close()),document.body.classList.add("modal-open")},onClose:()=>{u.removeEventListener("click",()=>d.close()),window.removeEventListener("keydown",b),document.body.classList.remove("modal-open"),f.removeEventListener("change",h)}});function b(e){e.code==="Escape"&&d.close()}function h(){f.matches?r=I:r=O,d.show(()=>{const e=d.element().querySelector(".footer__modal-png");e&&(e.querySelector("img").src=r)})}const Y=function(){let e;const t=p.create(`
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
`,{onShow:o=>{window.addEventListener("keydown",a),e=o.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>o.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",a),document.body.classList.remove("modal-open")}});t.show();function a(o){o.code==="Escape"&&t.close()}};x.addEventListener("submit",K);function K(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;N(t),e.target.reset()}async function N(e){try{(await T({method:"POST",data:{email:e}})).statusText==="Created"&&h()}catch({response:t}){t.statusText==="Conflict"&&Y()}}q().then(e=>{let t=A(e.slice(0,2));s.discountCards.innerHTML=t,w()}).catch;P().then(e=>{let t=M(e.slice(0,5));s.popularCards.innerHTML=t,w()}).catch;const c=k(m.CART_KEY);async function _(e){const{target:t}=e,a=t.closest(".cards__button");if(!a)return;const{id:o}=a.closest(".cards__item").dataset,n=await C(o);if(c.some(({_id:l})=>o===l))return;c.push(n);const E=document.querySelector(".header__menu-link-quantity");E.textContent=c.length,localStorage.setItem(m.CART_KEY,JSON.stringify(c)),c.some(({_id:l})=>o===l)&&(a.innerHTML=`<svg class="icon-checked"><use href="${y}#icon-check"></use></svg>`)}async function v(e){e.preventDefault();const{target:t}=e,a=t.closest(".cards__button"),o=t.closest(".cards__link");if(a||!o)return;const{id:n}=o.closest(".cards__item").dataset,g=await C(n);p.create(F(g),{onShow:i=>{i.element().querySelector(".modal__item-close").onclick=i.close}}).show()}R().then(e=>{let t=e.map(n=>L(n));localStorage.setItem("filter",B);let a=t.map(n=>`<option value="${n}">${L(n)}</option>`).join(""),o="<option  selected  >Show all</option>";s.productsFiltersSelect.innerHTML=a+o}).catch;D().then(e=>{let t=$(e.results);s.productsCards.innerHTML=t}).catch();s.productsFiltersSelect.addEventListener("change",S);s.btnSubmit.addEventListener("submit",H);s.productsFiltersSelect.addEventListener("change",S);s.productsCards.addEventListener("click",e=>e.preventDefault());s.productsCards.addEventListener("click",_);s.popularCards.addEventListener("click",_);s.discountCards.addEventListener("click",_);const j=k(m.CART_KEY);U(j);s.productsCards.addEventListener("click",v);s.popularCards.addEventListener("click",v);s.discountCards.addEventListener("click",v);
//# sourceMappingURL=commonHelpers2.js.map
