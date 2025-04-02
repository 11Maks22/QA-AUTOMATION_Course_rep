// src/services/stripeService.ts
import 'dotenv/config';
import axios from 'axios';

const stripeApi = axios.create({
    baseURL: 'https://api.stripe.com/v1',
    headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

export default stripeApi;
