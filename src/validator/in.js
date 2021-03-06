/**
 * check the type is a less then a number
 * @param array
 * @returns {boolean}
 */
function isIn(array = []) {
  return function(input) {
    return array.findIndex(v => input === v) >= 0;
  };
}

module.exports = isIn;
