import{f as v,h as L,r as t,i as u,j as _,k as b,g as f,c as g,l as S,m as P,n as E,o as A,p as h,t as C,u as w,v as k,w as y,x as I,y as M,q as T}from"./assets/subscription-8712326e.js";import{b as q,S as x,P as F}from"./assets/vendor-4f126749.js";v().then(e=>{let s=L(e.slice(0,2));t.discountCards.innerHTML=s,u()}).catch;_().then(e=>{let s=b(e.slice(0,5));t.popularCards.innerHTML=s,u()}).catch;const l=f(g.CART_KEY);async function p(e){const{target:s}=e,n=s.closest(".cards__button");if(!n)return;const{id:c}=n.closest(".cards__item").dataset,a=await S(c);if(l.some(({_id:r})=>c===r))return;l.push(a);const d=document.querySelector(".header__menu-link-quantity");d.textContent=l.length,localStorage.setItem(g.CART_KEY,JSON.stringify(l)),l.some(({_id:r})=>c===r)&&(n.innerHTML=`<svg class="icon-checked"><use href="${P}#icon-check"></use></svg>`)}async function m(e){e.preventDefault();const{target:s}=e,n=s.closest(".cards__button"),c=s.closest(".cards__link");if(n||!c)return;const{id:a}=c.closest(".cards__item").dataset,i=await S(a);q.create(E(i),{onShow:o=>{o.element().querySelector(".modal__item").addEventListener("click",p),u(),o.element().querySelector(".modal__item-close").onclick=o.close}}).show()}A().then(e=>{let s=e.map(a=>h(a));localStorage.setItem("filter",C);let n=s.map(a=>`<option value="${a}">${h(a)}</option>`).join(""),c="<option  selected  >Show all</option>";t.productsFiltersSelect.innerHTML=n+c,new x({select:t.productsFiltersSelect,showSearch:!1})}).catch;w().then(e=>{let s=k(e.results);t.productsCards.innerHTML=s,u()}).catch();t.productsFiltersSelect.addEventListener("change",y);t.btnSubmit.addEventListener("submit",I);t.productsFiltersSelect.addEventListener("change",y);const D=t.pagination,H={totalItems:100,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},B=new F(D,H);B.on("beforeMove",e=>{const s=e.page,n=t.productsFiltersSelect.options[t.productsFiltersSelect.selectedIndex];let c=localStorage.getItem("filter"),a=c?JSON.parse(c):{};const i=n.textContent!=="Show all"?n.textContent:null;a.category=i;let d=C;a.page=s,localStorage.setItem("filter",JSON.stringify(a)),a.keyword===null&&a.category===null&&M(s,a.limit).then(o=>{let r=k(o.results);console.log(a.page),localStorage.setItem("filter",d),t.productsCards.innerHTML=r}).catch(o=>{console.error(o)})});t.productsCards.addEventListener("click",e=>e.preventDefault());t.productsCards.addEventListener("click",p);t.popularCards.addEventListener("click",p);t.discountCards.addEventListener("click",p);const N=f(g.CART_KEY);T(N);t.productsCards.addEventListener("click",m);t.popularCards.addEventListener("click",m);t.discountCards.addEventListener("click",m);
//# sourceMappingURL=commonHelpers2.js.map
