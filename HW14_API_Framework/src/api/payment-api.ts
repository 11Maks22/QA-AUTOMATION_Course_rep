import stripeApi from '../services/stripe-service';
import { StripePaymentIntent } from '../services/dto/stripe-types';

export async function createPaymentIntent(
    amount: string,
    currency: string,
    options: Record<string, string | boolean> = {}
): Promise<{ status: number; data: StripePaymentIntent }> {
    const params = new URLSearchParams();
    params.append('amount', amount);
    params.append('currency', currency);
    params.append('payment_method_types[]', 'card');

    for (const [key, value] of Object.entries(options)) {
        params.append(key, String(value));
    }

    return await stripeApi.post('/payment_intents', params);
}

export async function cancelPaymentIntent(
    id: string
): Promise<{ status: number; data: StripePaymentIntent }> {
    return await stripeApi.post(`/payment_intents/${id}/cancel`);
}
