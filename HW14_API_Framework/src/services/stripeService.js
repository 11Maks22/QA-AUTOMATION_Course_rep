require('dotenv').config();

const axios = require('axios');

const stripeApi = axios.create({
  baseURL: 'https://api.stripe.com/v1',
  headers: {
    Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

module.exports = stripeApi;
