// have to create a function which returns a subarray whose sum is max of other sub arrays
// array, array
// [-2, 1, -3, 4, -1, 2, 1, -5, 4], [4, -1, 2, 1,-5, 4] sum=8;

let maxSubArray = (arr) => {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      if (max < sum) {
        max = sum;
      }
      //   console.log(sum);
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
