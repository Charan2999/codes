const objectToArray = (count, outArr) => {
  for (let key in count) {
    for (let i = 0; i < count[key]; i++) {
      outArr.push(key);
    }
  }
  console.log(outArr);
};

const countingSort = (arr) => {
  let count = {};
  let outArr = [];
  for (let i in arr) {
    count.hasOwnProperty(arr[i])
      ? (count[arr[i]] = count[arr[i]] + 1)
      : (count[arr[i]] = 1);
  }
  // return count;
  objectToArray(count, outArr);
};
console.log(countingSort([2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9]));
