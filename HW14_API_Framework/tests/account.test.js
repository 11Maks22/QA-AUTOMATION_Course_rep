// tests/account.test.js
const stripeApi = require('../src/services/stripeService');

describe('Stripe API - Account Info', () => {
  test('Get Account Info', async () => {
    const response = await stripeApi.get('/account');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
  });
});
