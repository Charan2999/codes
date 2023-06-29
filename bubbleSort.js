const bubbleSort = (arr) => {
  if (arr.length === 0) return arr;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
};

console.log(bubbleSort([4, 2, 6, 9, 7, 3]));
