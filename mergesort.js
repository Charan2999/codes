// divide and merge

//divide
const mergeSort = (arr) => {
  if (arr.length == 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

//merge
const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};

const array = [15, 5, 0, 24, 8, 1, 3, 16, 10, -29, 20, -100];
console.log(mergeSort(array));
