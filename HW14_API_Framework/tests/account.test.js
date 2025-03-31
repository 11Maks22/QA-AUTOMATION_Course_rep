// tests/account.test.js
const { getAccountInfo } = require('../src/api/accountApi');

describe('Stripe API - Account Info', () => {
  test('Get Account Info', async () => {
    const response = await getAccountInfo();
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
  });
});
