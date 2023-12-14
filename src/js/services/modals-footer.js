import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import imageURLTab from '../../img/footer/subscription-tab.png';
import imageURLMob from '../../img/footer/subscription.png.png';
import icons from '../../img/icons.svg';

// !-----------------------------New-Subscriber-------------------------------
const mediaQuery = window.matchMedia('(min-width: 768px)');
let imageUrl;
let closeBtn;

const instance = basicLightbox.create(
    `
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${icons}#icon-close"></use>
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
            src="${imageUrl}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,
    {
        onShow: () => {
            window.addEventListener('keydown', handelClickOnEscap);
            closeBtn = instance.element().querySelector('.footer__modal-close');
            closeBtn.addEventListener('click', () => instance.close());
            document.body.classList.add('modal-open');
        },
        onClose: () => {
            closeBtn.removeEventListener('click', () => instance.close());
            window.removeEventListener('keydown', handelClickOnEscap);
            mediaQuery.removeEventListener('change', modalFooterNewSubscr);
            document.body.classList.remove('modal-open');
        },
    }
);

function handelClickOnEscap(eve) {
    if (eve.code === 'Escape') {
        instance.close();
    }
}

export function modalFooterNewSubscr() {
    mediaQuery.addEventListener('change', modalFooterNewSubscr);
    if (!mediaQuery.matches) {
        imageUrl = imageURLMob;
    } else {
        imageUrl = imageURLTab;
    }

    instance.show(() => {
        const modalPngElement = instance
            .element()
            .querySelector('.footer__modal-png');
        if (modalPngElement) {
            modalPngElement.querySelector('img').src = imageUrl;
        }
    });
}

// !-----------------------------Existed-Subscriber-------------------------------
export const modalFooterExistedSubscr = function () {
    let closeBtn;
    const instanceEx = basicLightbox.create(
        `
        <div class="modal-Existed">
        <div class="footer__modal-Existed">
            <button type="button" class="footer__modal-close">
                <svg class="footer__modal-icon">
                    <use href="${icons}#icon-close"></use>
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
`,
        {
            onShow: instanceEx => {
                window.addEventListener('keydown', handelClickOnEscap);
                closeBtn = instanceEx
                    .element()
                    .querySelector('.footer__modal-close');
                closeBtn.addEventListener('click', () => instanceEx.close());
                document.body.classList.add('modal-open');
            },
            onClose: () => {
                closeBtn.removeEventListener('click', () => instanceEx.close());
                window.removeEventListener('keydown', handelClickOnEscap);
                document.body.classList.remove('modal-open');
            },
        }
    );

    instanceEx.show();
    function handelClickOnEscap(eve) {
        if (eve.code === 'Escape') {
            instanceEx.close();
        }
    }
};