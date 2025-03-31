// src/api/paymentApi.js
const stripeApi = require('../services/stripeService');

/**
 * @param {string} amount
 * @param {string} currency
 * @returns {Promise<{ status: number, data: StripePaymentIntent }>}
 */
async function createPaymentIntent(amount, currency) {
  return await stripeApi.post('/payment_intents', new URLSearchParams({ amount, currency }));
}

/**
 * @param {string} id
 * @returns {Promise<{ status: number, data: StripePaymentIntent }>}
 */
async function cancelPaymentIntent(id) {
  return await stripeApi.post(`/payment_intents/${id}/cancel`);
}

module.exports = { createPaymentIntent, cancelPaymentIntent };