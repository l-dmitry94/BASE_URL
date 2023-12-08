import FoodBotiqueApi from '../services/api';
import './modal-success';
import openOrderModal from './modal-success';

// Update Cart Icon Count
updateCartItemCount();

const cartContainer = document.querySelector('.cart');
const emptyCartSection = document.querySelector('.empty__cart');
const deleteAllButton = document.querySelector('.cart__delete-button');
const totalPriceElement = document.querySelector('.cart__sum span');
const productListContainer = document.querySelector('.cart__added-list');
const emailInput = document.querySelector('.cart__basket-input');
const form = document.querySelector('.checkout__field');

emailInput.value = Cart.getEmail();

function clearCart() {
    Cart.clearCart();
    updateCartUI();
}

// Clear Cart
deleteAllButton.addEventListener('click', clearCart);

form.addEventListener('submit', checkout);
emailInput.addEventListener('focusout', saveEmail);

// Initial cart render
updateCartDisplay();

// Update Cart UI
function updateCartUI() {
    updateCartItemCount();
    updateCartDisplay();
}

function showEmptyCart() {
    emptyCartSection.style.display = 'block';
    cartContainer.style.display = 'none';
}

// Update Basket
function updateCartDisplay() {
    if (Cart.getCount() === 0) {
        showEmptyCart();
        return;
    }

    const cartProducts = Cart.getProducts();
    renderCartItems(cartProducts);
    updateTotalPrice(cartProducts);
}

// Render Products in the cart
function renderCartItems(products) {
    let cartItemList = document.querySelector('.cart__basket-list');

    // Clear current product list
    if (cartItemList) {
        cartItemList.remove();
    }

    cartItemList = document.createElement('ul');
    cartItemList.className = 'cart__basket-list';

    // Add product card to the list
    products.forEach(product => {
        const listItem = createCartItemElement(product);
        cartItemList.appendChild(listItem);
    });

    productListContainer.appendChild(cartItemList);

    cartItemList.addEventListener('click', ({ target }) => {
        const productLi = target.closest('LI');

        if (!productLi) {
            return;
        }

        const deleteProductBtn = target.closest('.cart__product-delete-button');
        const decrementBtn = target.closest('.minus__btn');
        const incrementBtn = target.closest('.plus__btn');

        if (!deleteProductBtn && !decrementBtn && !incrementBtn) {
            console.log('wrong click');
            return;
        }

        const productId = productLi.dataset.productId;

        if (deleteProductBtn) {
            Cart.delete(productId);
            updateCartUI();
            return;
        }

        const spanQuantity = productLi.querySelector('.quantity');
        const product = Cart.getProduct(productId).product;

        if (decrementBtn) {
            const countValue = spanQuantity.textContent - 1;
            spanQuantity.textContent = countValue;

            if (countValue < 1) {
                // If we just decreased the count to 0, that means that we are removing it from the cart
                spanQuantity.textContent = 1;
                Cart.delete(productId);

                updateCartUI();
            } else {
                Cart.update(product, countValue);
            }
        } else {
            const countValue = Number(spanQuantity.textContent) + 1;
            spanQuantity.textContent = countValue;
            Cart.update(product, countValue);
        }
    });
}

// Create cart item
function createCartItemElement({ product, productId, amount }) {
    const {
        name = 'Product name',
        category = 'Category',
        size = 'Size',
        price = 0,
        img = '',
    } = product;

    const listItem = document.createElement('li');
    listItem.classList.add('cart__basket-item');
    listItem.dataset.productId = productId;

    listItem.innerHTML = `
    <button class="cart__product-delete-button" type="button" aria-label="cart product delete">
      <svg class="cart__delete-product-icon" width="18" height="18">
        <use href="${icons}#icon-x-close" data-product-id="${productId}"></use>
      </svg>
    </button>
    <div class="image__cart-thumb">
      <img class="cart__image" src="${img}" alt="${name}" width="64" />
    </div>
    <div class="cart__description-thumb">
      <h3 class="cart__product-name">${name}</h3>
      <div class="cart__text-description-container">
        <p class="cart__product-description">
          Category:
          <span class="category cart__description">${category}</span>
        </p>
        <p class="cart__product-description">
          Size:
          <span class="size cart__description">${size}</span>
        </p>
      </div>
      <div class="price__and-quantity">
        <span class="cart__price">$${price.toFixed(2)}</span>

        <div class="quantity__in-cart">
            <button type="button" class="minus-btn" aria-label="minus quantity product">
              <svg class="minus__btn-icon">
                <use href="${icons}#icon-minus"></use>
              </svg>
            </button>
          <span class="quantity">${amount}</span>
            <button type="button" class="plus__btn" aria-label="plus quantity product">
              <svg class="plus__btn-icon">
                <use href="${icons}#icon-plus"></use>
              </svg>
            </button>
        </div>
      </div>
    </div>
  `;

    return listItem;
}

function checkout(e) {
    e.preventDefault();

    FoodBotiqueApi.placeOrder(Cart.get())
        .then(response => openOrderModal(response.message, true, clearCart))
        .catch(err => openOrderModal(err.response.data.message, false));
}

function saveEmail() {
    const email = form.elements['cart__client-email'].value.trim();

    Cart.setEmail(email);
}

function updateTotalPrice() {
    const total = Cart.getTotal();
    totalPriceElement.innerHTML = `$${total.toFixed(2)}`;
}
