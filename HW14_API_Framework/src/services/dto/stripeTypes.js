/**
 * @typedef {Object} StripeAccount
 * @property {string} id
 * @property {string} object
 * @property {boolean} charges_enabled
 * @property {boolean} payouts_enabled
 * @property {string} type
 */

/**
 * @typedef {Object} StripeBalance
 * @property {Array<{
*   amount: number,
*   currency: string,
*   source_types: object
* }>} available
*/

/**
* @typedef {Object} StripeCustomer
* @property {string} id
* @property {string} email
* @property {string} name
* @property {string} object
*/

/**
* @typedef {Object} StripePaymentIntent
* @property {string} id
* @property {string} object
* @property {string} status
* @property {number} amount
* @property {string} currency
*/

/**
* @typedef {Object} StripeRefund
* @property {string} id
* @property {string} object
* @property {string} status
*/