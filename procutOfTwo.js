const productOfTwo = (num1, num2) => {
  let result = 0;
  while (num1 & num2) {
    let num1Last = num1 % 10;
    let num2Last = num2 % 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    result = num1Last * num2Last;
    result += productOfTwo(num1, num2);
  }
  return result;
};
console.log(productOfTwo(6, 34));
