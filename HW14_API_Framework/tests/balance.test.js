// tests/balance.test.js
const { getBalance } = require('../src/api/balanceApi');

describe('Stripe API - Balance', () => {
  test('Get Balance', async () => {
    const response = await getBalance();
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('available');
  });
});
