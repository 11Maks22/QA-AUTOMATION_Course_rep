// tests/balance.test.js
import { getBalance } from '../src/api/balance-api';
import { expectStatus200, expectHasProperty } from './helpers/stripe-helpers';

describe('Stripe API - Balance', () => {
    it('should return balance information', async () => {
        const response = await getBalance();
        expectStatus200(response);
        expectHasProperty(response.data, 'available');
    });
});
