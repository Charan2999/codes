// function selectionSort2(arr) {
//   if (arr.length === 1) return arr;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     console.log(arr[min]);
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(arr[j]);
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     let temp = arr[i];
//     // console.log(temp);
//     arr[i] = arr[min];
//     // console.log(arr[min]);
//     arr[min] = temp;
//     // console.log(arr[0]);
//     // console.log(arr[i]);
//     // console.log(arr);
//   }

//   return arr;
// }
// console.log(selectionSort2([4, 8, 5, 6, 1, 2, 7, 3]));

// // function selectionSort2(arr) {
// //   let j = 1,
// //     i = 0;
// //   let outArr = [];
// //   while (j < arr.length) {
// //     if (arr[i] > arr[j]) {
// //       outArr.push(arr[j]);
// //     //   i++;
// //     }
// //     j++;
// //   }
// //   return outArr;
// // }
// // console.log(selectionSort2([4, 8, 5, 6, 1, 2, 7, 3]));

/**
 * reverse of bubble sort
 * min will be selected for placing at first
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    console.log(arr);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};
console.log(selectionSort([7, 4, 10, 8, 3, 1]));
