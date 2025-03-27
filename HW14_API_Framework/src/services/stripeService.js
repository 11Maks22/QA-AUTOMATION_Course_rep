// src/services/stripeService.js
const axios = require('axios');
const { secretKey } = require('../../config/keys');

const stripeApi = axios.create({
  baseURL: 'https://api.stripe.com/v1',
  headers: {
    Authorization: `Bearer ${secretKey}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

module.exports = stripeApi;
