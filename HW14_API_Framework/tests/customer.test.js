// tests/customer.test.js
const stripeApi = require('../src/services/stripeService');

describe('Stripe API - Customer Management', () => {
  let customerId;

  test('Create Customer', async () => {
    const response = await stripeApi.post('/customers', new URLSearchParams({
      email: 'test@example.com',
      name: 'John Doe',
    }));

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    customerId = response.data.id;
  });

  test('Get Customer', async () => {
    const response = await stripeApi.get(`/customers/${customerId}`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', customerId);
  });

  test('Delete Customer', async () => {
    const response = await stripeApi.delete(`/customers/${customerId}`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('deleted', true);
  });
});
