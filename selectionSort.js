const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr);

    let min = i;
    // console.log(min);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
        console.log(min);
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log(selectionSort([4, 2, 6, 9, 7, 3]));
