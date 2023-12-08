/* empty css                      */import{a,b as l}from"./assets/vendor-0363fca5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const c="https://food-boutique.b.goit.study/api";a.create({baseURL:`${c}/products`});const d=a.create({baseURL:`${c}/subscription`});a.create({baseURL:`${c}/orders`});const u=function(){let t;const e=l.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",r),t=s.element().querySelector(".footer__modal-close"),t.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{t.removeEventListener("click",()=>e.close()),window.removeEventListener("keydown",r),document.body.classList.remove("modal-open")}});e.show();function r(s){s.code==="Escape"&&e.close()}},m=function(){let t;const e=l.create(`
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
`,{onShow:s=>{window.addEventListener("keydown",r),t=s.element().querySelector(".footer__modal-close"),t.addEventListener("click",()=>s.close()),document.body.classList.add("modal-open")},onClose:()=>{t.removeEventListener("click",()=>e.close()),window.removeEventListener("keydown",r),document.body.classList.remove("modal-open")}});e.show();function r(s){s.code==="Escape"&&e.close()}},f=document.querySelector(".footer__form");f.addEventListener("submit",p);function p(t){t.preventDefault();const{value:e}=t.currentTarget.elements.email;v(e),t.target.reset()}async function v(t){try{(await d({method:"POST",data:{email:t}})).statusText==="Created"&&u()}catch({response:e}){e.statusText==="Conflict"&&m()}}
//# sourceMappingURL=commonHelpers2.js.map
