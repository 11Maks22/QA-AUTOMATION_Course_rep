const stripeApi = require('../stripeService');

/**
 * @returns {Promise<{ status: number, data: StripeAccount }>}
 */
async function getAccountInfo() {
  return await stripeApi.get('/account');
}

module.exports = { getAccountInfo };
