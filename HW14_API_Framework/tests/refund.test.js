// tests/refund.test.js
const stripeApi = require('../src/services/stripeService');

describe('Stripe API - Refund', () => {
  test('Create Refund', async () => {
    const response = await stripeApi.post('/refunds', new URLSearchParams({
      payment_intent: 'pi_3R7GLoPK9rla8tcd1vg2hjyB', // Замість цього потрібно використовувати реальний Payment Intent ID
    }));
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
  });
});
