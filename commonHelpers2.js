import{f as w,h as T,i as A,j as M,k as q,r as s,l as g,m as F,n as I,g as L,c as h,o as C,p as B,t as R,u as S,v as k,w as D,x,y as P,z as N,A as O,q as H}from"./assets/markup-e749da93.js";import{b as v,S as $,P as U}from"./assets/vendor-4f126749.js";const Y="/BASE_URL/assets/subscription-tab-ac534afc.png",J="/BASE_URL/assets/subscription.png-0e0f2d9d.png",f=window.matchMedia("(min-width: 768px)");let u,m;const p=v.create(`
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
            src="${u}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,{onShow:e=>{window.addEventListener("keydown",E),m=e.element().querySelector(".footer__modal-close"),m.addEventListener("click",()=>e.close())},onClose:()=>{m.removeEventListener("click",()=>p.close()),window.removeEventListener("keydown",E),f.removeEventListener("change",_)}});function E(e){e.code==="Escape"&&p.close()}function _(){f.addEventListener("change",_),f.matches?u=Y:u=J,p.show(()=>{const e=p.element().querySelector(".footer__modal-png");e&&(e.querySelector("img").src=u)})}const K=function(){let e;const t=v.create(`
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
`,{onShow:o=>{window.addEventListener("keydown",n),e=o.element().querySelector(".footer__modal-close"),e.addEventListener("click",()=>o.close()),document.body.classList.add("modal-open")},onClose:()=>{e.removeEventListener("click",()=>t.close()),window.removeEventListener("keydown",n),document.body.classList.remove("modal-open")}});t.show();function n(o){o.code==="Escape"&&t.close()}};T.addEventListener("submit",j);function j(e){e.preventDefault();const{value:t}=e.currentTarget.elements.email;z(t),e.target.reset()}async function z(e){try{(await A({method:"POST",data:{email:e}})).statusText==="Created"&&_()}catch({response:t}){t.statusText==="Conflict"&&K()}}M().then(e=>{let t=q(e.slice(0,2));s.discountCards.innerHTML=t,g()}).catch;F().then(e=>{let t=I(e.slice(0,5));s.popularCards.innerHTML=t,g()}).catch;const r=L(h.CART_KEY);async function y(e){const{target:t}=e,n=t.closest(".cards__button");if(!n)return;const{id:o}=n.closest(".cards__item").dataset,a=await C(o);if(r.some(({_id:i})=>o===i))return;r.push(a);const d=document.querySelector(".header__menu-link-quantity");d.textContent=r.length,localStorage.setItem(h.CART_KEY,JSON.stringify(r)),r.some(({_id:i})=>o===i)&&(n.innerHTML=`<svg class="icon-checked"><use href="${w}#icon-check"></use></svg>`)}async function b(e){e.preventDefault();const{target:t}=e,n=t.closest(".cards__button"),o=t.closest(".cards__link");if(n||!o)return;const{id:a}=o.closest(".cards__item").dataset,l=await C(a);v.create(B(l),{onShow:c=>{c.element().querySelector(".modal__item-close").onclick=c.close}}).show()}R().then(e=>{let t=e.map(a=>S(a));localStorage.setItem("filter",k);let n=t.map(a=>`<option value="${a}">${S(a)}</option>`).join(""),o="<option  selected  >Show all</option>";s.productsFiltersSelect.innerHTML=n+o,new $({select:s.productsFiltersSelect,showSearch:!1})}).catch;D().then(e=>{let t=x(e.results);s.productsCards.innerHTML=t,g()}).catch();s.productsFiltersSelect.addEventListener("change",P);s.btnSubmit.addEventListener("submit",N);s.productsFiltersSelect.addEventListener("change",P);const W=s.pagination,G={totalItems:100,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},Q=new U(W,G);Q.on("beforeMove",e=>{const t=e.page,n=s.productsFiltersSelect.options[s.productsFiltersSelect.selectedIndex];let o=localStorage.getItem("filter"),a=o?JSON.parse(o):{};const l=n.textContent!=="Show all"?n.textContent:null;a.category=l;let d=k;a.page=t,localStorage.setItem("filter",JSON.stringify(a)),a.keyword===null&&a.category===null&&O(t,a.limit).then(c=>{let i=x(c.results);console.log(a.page),localStorage.setItem("filter",d),s.productsCards.innerHTML=i}).catch(c=>{console.error(c)})});s.productsCards.addEventListener("click",e=>e.preventDefault());s.productsCards.addEventListener("click",y);s.popularCards.addEventListener("click",y);s.discountCards.addEventListener("click",y);const V=L(h.CART_KEY);H(V);s.productsCards.addEventListener("click",b);s.popularCards.addEventListener("click",b);s.discountCards.addEventListener("click",b);
//# sourceMappingURL=commonHelpers2.js.map
