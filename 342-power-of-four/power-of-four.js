/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n == 1)
    return true;
    if (n%2 != 0)
    return false;
    if (n>1 && n%2 == 0)
    return isPowerOfFour(n/4);
    return false
};