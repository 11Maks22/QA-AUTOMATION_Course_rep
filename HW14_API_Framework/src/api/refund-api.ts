// src/api/refundApi.ts
import stripeApi from '../services/stripe-service';
import { StripeRefund } from '../services/dto/stripe-types';

export async function createRefund(paymentIntentId: string): Promise<{ status: number; data: StripeRefund }> {
    const params = new URLSearchParams({ payment_intent: paymentIntentId });
    return await stripeApi.post('/refunds', params);
}
