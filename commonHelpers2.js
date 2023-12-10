import{f as h,d as v,e as l,g as u,c as i,h as _,i as g,j as b,n as d,k as y,r as a,l as E,m as w,o as m,p as L,s as C,t as S,q as k}from"./assets/markup-f062e4ea.js";import{b as p}from"./assets/vendor-0363fca5.js";const T=function(){let e;const t=p.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}},x=function(){let e;const t=p.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",o),e=s.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",o),document.body.classList.remove("modal-open")}});t.show();function o(s){s.code==="Escape"&&t.close()}};h.addEventListener("submit",A);function A(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;P(t),e.target.reset()}async function P(e){try{(await v({method:"POST",data:{email:e}})).statusText==="Created"&&T()}catch({response:t}){t.statusText==="Conflict"&&x()}}async function q(){return(await l({method:"GET",url:"/discount"})).data}async function F(){return(await l({method:"GET",url:"/popular"})).data}const c=u(i.CART_KEY);async function D(e){const{target:t}=e,o=t.closest(".cards__button");if(!o)return;const{id:s}=o.closest(".cards__item").dataset,n=await _(s);if(c.some(({_id:r})=>s===r))return;c.push(n);const f=document.querySelector(".header__menu-link-quantity");f.textContent=c.length,localStorage.setItem(i.CART_KEY,JSON.stringify(c)),c.some(({_id:r})=>s===r)&&(o.innerHTML=`<svg class="icon-checked"><use href="${g}#icon-check"></use></svg>`)}b().then(e=>{let t=e.map(n=>d(n));localStorage.setItem("filter",y);let o=t.map(n=>`<option value="${n}">${d(n)}</option>`).join(""),s="<option  selected  >Show all</option>";a.productsFiltersSelect.innerHTML=o+s}).catch;E().then(e=>{let t=w(e.results);a.productsCards.innerHTML=t}).catch();a.productsFiltersSelect.addEventListener("change",m);a.btnSubmit.addEventListener("submit",L);a.productsFiltersSelect.addEventListener("change",m);q().then(e=>{let t=C(e.slice(0,2));a.discountCards.innerHTML=t}).catch;F().then(e=>{let t=S(e.slice(0,5));a.popularCards.innerHTML=t}).catch;a.productsCards.addEventListener("click",e=>e.preventDefault());a.productsCards.addEventListener("click",D);const H=u(i.CART_KEY);k(H);
//# sourceMappingURL=commonHelpers2.js.map
