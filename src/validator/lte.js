const utils = require('../utils');
/**
 * check the type is a less then a number
 * @param minNumber
 * @returns {boolean}
 */
function lte(minNumber) {
  return function(input) {
    return utils.isNumber(input) && input <= minNumber;
  };
}

module.exports = lte;
