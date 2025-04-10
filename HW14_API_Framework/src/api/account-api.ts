// src/api/accountApi.ts
import stripeApi from '../services/stripe-service';
import { StripeAccount } from '../services/dto/stripe-types';

export async function getAccountInfo(): Promise<{ status: number; data: StripeAccount }> {
    return await stripeApi.get('/account');
}
