// tests/payment.test.ts
import { createPaymentIntent, cancelPaymentIntent } from '../src/api/payment-api';
import { expectStatus200, expectHasId, expectHasProperty } from './helpers/stripe-helpers';

describe('Stripe API - Payment Intent', () => {
    let paymentIntentId: string;

    beforeAll(async () => {
        const response = await createPaymentIntent('1000', 'usd');
        expectStatus200(response);
        expectHasId(response.data);
        paymentIntentId = response.data.id;
    });

    it('should cancel the payment intent', async () => {
        const response = await cancelPaymentIntent(paymentIntentId);
        expectStatus200(response);
        expectHasProperty(response.data, 'status', 'canceled');
    });
});
