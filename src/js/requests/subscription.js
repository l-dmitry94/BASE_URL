import { apiSubscription } from '../services/api';

const footerFormRef = document.querySelector('.footer__form');
footerFormRef.addEventListener('submit', handleForm);

export function handleForm(e) {
    e.preventDefault();
    const { value } = e.currentTarget.elements.email;

    postSubscriptionNewProducts(value);
    e.target.reset();
}

async function postSubscriptionNewProducts(value) {
    try {
        const response = await apiSubscription({
            method: 'POST',
            data: {
                email: value,
            },
        });
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}
