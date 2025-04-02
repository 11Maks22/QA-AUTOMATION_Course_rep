// src/api/balanceApi.ts
import stripeApi from '../services/stripe-service';
import { StripeAccount, StripeBalance } from '../services/dto/stripe-types';

export async function getAccountInfo(): Promise<{ status: number; data: StripeAccount }> {
    return await stripeApi.get('/account');
}

export async function getBalance(): Promise<{ status: number; data: StripeBalance }> {
    return await stripeApi.get('/balance');
}


