import { apiSubscription } from '../services/api';
import {
    modalFooterNewSubscr,
    modalFooterExistedSubscr,
} from '../services/modals-footer';
import { footerFormRef } from '../services/refs';

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
        if (response.statusText === 'Created') {
            modalFooterNewSubscr();
        }
    } catch ({ response }) {
        if (response.statusText === 'Conflict') {
            modalFooterExistedSubscr();
        }
    }
}

