function TwoSum(arr, target) {
  // let i = 0,
  //   j = arr.length - 1,
  //   outArr = [];
  // if (arr.length < 2) {
  //   return [];
  // }
  // while (i < j) {
  //   // let tempArr = [];
  //   let sum = arr[i] + arr[j];
  //   if (sum === target) {
  //     outArr.push(arr[i], arr[j]);
  //     return outArr;
  //   } else if (sum < target) {
  //     i++;
  //   } else if (sum > target) {
  //     j--;
  //   } else {
  //     return [];
  //   }
  // }
  let indices = [];
  for(let i = 0; i< arr.length; i++){
    for( let j = 1; j< arr.length; j++){
      if( arr[i] + arr[j] === target ){
        indices.push(arr[i]);
        indices.push(arr[j]);
        return indices;
      }
    }
  }
}
console.log(TwoSum([5,0,1,4], 5));

// let arr = [1, 2, 3, 4, 5], outArr = [],tempArr= [];

// outArr.push([arr[1],arr[2]]);

// tempArr.push([arr[1],arr[4]]);

// outArr.push(tempArr)

// console.log(outArr)
