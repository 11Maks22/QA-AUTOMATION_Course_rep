// tests/payment.test.js
const { createPaymentIntent, cancelPaymentIntent } = require('../src/api/paymentApi');

describe('Stripe API - Payment Intent', () => {
  let paymentIntentId;

  test('Create Payment Intent', async () => {
    const response = await createPaymentIntent('1000', 'usd');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    paymentIntentId = response.data.id;
  });

  test('Cancel Payment Intent', async () => {
    const response = await cancelPaymentIntent(paymentIntentId);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('status', 'canceled');
  });
});
