const sameFrequency = (num1, num2) => {
  if (num1.toString().length !== num2.toString().length) return false;

  let counter1 = [],
    counter2 = [];

  for (let i in num1) {
    if (counter1[i] === counter1[i]) {
      counter1[i] = counter1[i] + 1;
    }
    counter1[i] = 1;
  }

  for (let i in num2) {
    if (counter2[i] === counter2[i]) {
      counter2[i] = counter2[i] + 1;
    }
    counter2[i] = 1;
  }

  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(22, 222));

// let num1 = 2, num2= 22;
// console.log(num1.toString().length)
