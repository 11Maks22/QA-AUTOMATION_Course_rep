// tests/balance.test.js
const stripeApi = require('../src/services/stripeService');

describe('Stripe API - Balance', () => {
  test('Get Balance', async () => {
    const response = await stripeApi.get('/balance');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('available');
  });
});
