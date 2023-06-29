/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0;
  if (n === 1 || x === 1) return x;
  if (n === 0 || (x === -1) & (n % 2 === 0)) {
    return 1;
  } else if (n % 2 !== 0) {
    return -1;
  }
  if (n < 0) {
    let op = 1;
    for (i = n; i < 0; i++) {
      op = op * x;
    }
    return 1 / op;
  } else if (n > 0) {
    let op = x;
    for (i = 2; i <= n; i++) {
      op = op * x;
    }
    return op;
  }
};

console.log(myPow(2, 10));
