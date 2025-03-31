// src/api/balanceApi.js
const stripeApi = require('../services/stripeService');

/**
 * @returns {Promise<{ status: number, data: StripeBalance }>}
 */
async function getBalance() {
  return await stripeApi.get('/balance');
}

module.exports = { getBalance };