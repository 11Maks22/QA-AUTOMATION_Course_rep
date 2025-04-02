// tests/refund.test.js
import { createRefund } from '../src/api/refund-api';
import { createPaymentIntent } from '../src/api/payment-api';
import { expectStatus200, expectHasId } from './helpers/stripe-helpers';

describe('Stripe API - Refund', () => {
    let paymentIntentId: string;

    beforeAll(async () => {
        const paymentResponse = await createPaymentIntent('1000', 'usd', {
            payment_method: 'pm_card_visa',
            confirm: 'true'
        });

        expectStatus200(paymentResponse);
        expectHasId(paymentResponse.data);

        paymentIntentId = paymentResponse.data.id;
    });

    it('should create a refund', async () => {
        const response = await createRefund(paymentIntentId);
        expectStatus200(response);
        expectHasId(response.data);
    });
});

