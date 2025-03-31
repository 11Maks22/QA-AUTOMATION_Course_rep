// src/api/refundApi.js
const stripeApi = require('../services/stripeService');

async function createRefund(paymentIntentId) {
  return await stripeApi.post('/refunds', new URLSearchParams({ payment_intent: paymentIntentId }));
}

module.exports = { createRefund };