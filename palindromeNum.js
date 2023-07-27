const palindromeNum = (x) => {
  if (x < 0) return false;
  let z = x;
  let y = null;
  let flag = true;
  while (flag) {
    y = y * 10 + (z % 10);
    z = Math.floor(z / 10);

    if (z < 1) flag = false;
  }
  return y == x;
};
console.log(palindromeNum(10));
