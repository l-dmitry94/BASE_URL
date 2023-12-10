import{f as v,d as _,e as g,h as b,r as a,i as y,g as u,c as i,j as m,k as E,l as w,m as L,n as l,o as C,p as k,s as S,t as p,u as x,v as T,q as A}from"./assets/markup-dc6da092.js";import{b as d}from"./assets/vendor-0363fca5.js";const P=function(){let e;const t=d.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}},q=function(){let e;const t=d.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}};v.addEventListener("submit",F);function F(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;M(t),e.target.reset()}async function M(e){try{(await _({method:"POST",data:{email:e}})).statusText==="Created"&&P()}catch({response:t}){t.statusText==="Conflict"&&q()}}g().then(e=>{let t=b(e.slice(0,2));a.discountCards.innerHTML=t}).catch;async function D(){return(await y({method:"GET",url:"/popular"})).data}const c=u(i.CART_KEY);async function H(e){const{target:t}=e,o=t.closest(".cards__button");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,n=await m(s);if(c.some(({_id:r})=>s===r))return;c.push(n);const h=document.querySelector(".header__menu-link-quantity");h.textContent=c.length,localStorage.setItem(i.CART_KEY,JSON.stringify(c)),c.some(({_id:r})=>s===r)&&(o.innerHTML=`<svg class="icon-checked"><use href="${E}#icon-check"></use></svg>`)}async function I(e){e.preventDefault();const{target:t}=e,o=t.closest(".cards__link");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,n=await m(s);d.create(w(n)).show()}L().then(e=>{let t=e.map(n=>l(n));localStorage.setItem("filter",C);let o=t.map(n=>`<option value="${n}">${l(n)}</option>`).join(""),s="<option  selected  >Show all</option>";a.productsFiltersSelect.innerHTML=o+s}).catch;k().then(e=>{let t=S(e.results);a.productsCards.innerHTML=t}).catch();a.productsFiltersSelect.addEventListener("change",p);a.btnSubmit.addEventListener("submit",x);a.productsFiltersSelect.addEventListener("change",p);D().then(e=>{let t=T(e.slice(0,5));a.popularCards.innerHTML=t}).catch;a.productsCards.addEventListener("click",e=>e.preventDefault());a.productsCards.addEventListener("click",H);const O=u(i.CART_KEY);A(O);a.productsCards.addEventListener("click",I);
//# sourceMappingURL=commonHelpers2.js.map
