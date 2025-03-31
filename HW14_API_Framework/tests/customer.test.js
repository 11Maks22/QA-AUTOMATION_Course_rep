// tests/customer.test.js
const { createCustomer, getCustomer, deleteCustomer } = require('../src/api/customerApi');

describe('Stripe API - Customer Management', () => {
  let customerId;

  test('Create Customer', async () => {
    const response = await createCustomer('test@example.com', 'John Doe');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    customerId = response.data.id;
  });

  test('Get Customer', async () => {
    const response = await getCustomer(customerId);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', customerId);
  });

  test('Delete Customer', async () => {
    const response = await deleteCustomer(customerId);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('deleted', true);
  });
});
