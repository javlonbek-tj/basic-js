const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsCounts = {};

  domains.forEach((domain) => {
    const parts = domain.split('.').reverse();
    let dnsKey = '';
    parts.forEach((part) => {
      dnsKey += `.${part}`;
      dnsCounts[dnsKey] = (dnsCounts[dnsKey] || 0) + 1;
    });
  });
  return dnsCounts;
}

module.exports = {
  getDNSStats,
};
