// tests/payment.test.js
const stripeApi = require('../src/services/stripeService');

describe('Stripe API - Payment Intent', () => {
  let paymentIntentId;

  test('Create Payment Intent', async () => {
    const response = await stripeApi.post('/payment_intents', new URLSearchParams({
      amount: '1000',
      currency: 'usd',
    }));
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    paymentIntentId = response.data.id;
  });

  test('Cancel Payment Intent', async () => {
    const response = await stripeApi.post(`/payment_intents/${paymentIntentId}/cancel`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('status', 'canceled');
  });
});
