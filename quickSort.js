// function quickSort(arr, start = 0, end = arr.length - 1) {
//   let pivot = arr[start];
//   let pivotIndex = start;
//   for (let i = start + 1; i <= end; i++) {
//     if (arr[i] <= pivot) {
//       pivotIndex += 1;
//       const swap = arr[i];
//       arr[i] = pivot;
//       pivot = swap;
//     }
//   }
//   console.log(arr);
//   return pivot;
// }
// console.log(quickSort([5, 3, 1, 2, 4]));

// function quickSort(arr){
//     if ()
//     let start = 0;
//     let end = arr.length-1;
//     let pivot = arr[start];
//     while( start < end){
//         while()
//     }
// }

function pivotFunction(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[end];
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }
  let temp = pivot;
  pivot = arr[end];
  end = temp;

  return arr.indexOf(end);
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotFunction(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 8, 5, 6, 1, 2, 7, 3]));
