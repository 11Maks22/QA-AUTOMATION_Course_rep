// src/api/customerApi.ts
import stripeApi from '../services/stripe-service';
import { StripeCustomer } from '../services/dto/stripe-types';

export async function createCustomer(email: string, name: string): Promise<{ status: number; data: StripeCustomer }> {
    const params = new URLSearchParams({ email, name });
    return await stripeApi.post('/customers', params);
}

export async function getCustomer(id: string): Promise<{ status: number; data: StripeCustomer }> {
    return await stripeApi.get(`/customers/${id}`);
}

export async function deleteCustomer(id: string): Promise<{ status: number; data: { deleted: boolean } }> {
    return await stripeApi.delete(`/customers/${id}`);
}
