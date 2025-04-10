import { getAccountInfo } from '../src/api/account-api';
import { expectStatus200, expectHasId } from './helpers/stripe-helpers';

describe('Stripe API - Account Info', () => {
    it('should return account information', async () => {
        const response = await getAccountInfo();
        expectStatus200(response);
        expectHasId(response.data);
    });
});
