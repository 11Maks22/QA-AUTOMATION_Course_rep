// tests/customer.test.ts
import { createCustomer, getCustomer, deleteCustomer } from '../src/api/customer-api';
import { expectStatus200, expectHasId, expectHasProperty } from './helpers/stripe-helpers';

describe('Stripe API - Customer Management', () => {
    it('should create, fetch, and delete a customer', async () => {
        const createResponse = await createCustomer('test@example.com', 'John Doe');
        expectStatus200(createResponse);
        expectHasId(createResponse.data);
        const customerId = createResponse.data.id;

        const fetchResponse = await getCustomer(customerId);
        expectStatus200(fetchResponse);
        expectHasProperty(fetchResponse.data, 'id', customerId);

        const deleteResponse = await deleteCustomer(customerId);
        expectStatus200(deleteResponse);
        expectHasProperty(deleteResponse.data, 'deleted', true);
    });
});
