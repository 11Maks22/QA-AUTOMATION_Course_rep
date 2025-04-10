// src/types/stripeTypes.ts

export interface StripeAccount {
    id: string;
    object: string;
    charges_enabled: boolean;
    payouts_enabled: boolean;
    type: string;
}

export interface StripeBalance {
    available: {
        amount: number;
        currency: string;
        source_types: Record<string, unknown>;
    }[];
}

export interface StripeCustomer {
    id: string;
    email: string;
    name: string;
    object: string;
}

export interface StripePaymentIntent {
    id: string;
    object: string;
    status: string;
    amount: number;
    currency: string;
}

export interface StripeRefund {
    id: string;
    object: string;
    status: string;
}
