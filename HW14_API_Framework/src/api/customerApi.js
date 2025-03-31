// src/api/customerApi.js
const stripeApi = require('../services/stripeService');

/**
 * @param {string} email
 * @param {string} name
 * @returns {Promise<{ status: number, data: StripeCustomer }>}
 */
async function createCustomer(email, name) {
  return await stripeApi.post('/customers', new URLSearchParams({ email, name }));
}

/**
 * @param {string} id
 * @returns {Promise<{ status: number, data: StripeCustomer }>}
 */
async function getCustomer(id) {
  return await stripeApi.get(`/customers/${id}`);
}

/**
 * @param {string} id
 * @returns {Promise<{ status: number, data: { deleted: boolean } }>}
 */
async function deleteCustomer(id) {
  return await stripeApi.delete(`/customers/${id}`);
}

module.exports = { createCustomer, getCustomer, deleteCustomer };
