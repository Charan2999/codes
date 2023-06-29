// const prod = ( arr, target ) =>{
//     for( let i = 0; i < arr.length-1; i++){
//         for( let j = 2; j < arr.length-2; j++){
//             let temp = arr[i]*arr[i+1]*arr[j];
//             if( temp ===  target){
//                 outArr = [arr[i],arr[i+1],arr[j]];
//                 return (outArr.sort())
//             }
//         }
//     }
// }
// console.log(prod([13,14,15,16,17,18,19],4590));


// const maxSubarraySum = ( arr, length ) => {
//     let maxSum = 0; 
//     let tempSum = 0;
//     if ( length < arr.length && typeof length === "number" && typeof arr === "object" ){
//         for ( let i = 0; i < length; i++ ){
//             maxSum += arr[i];
//         }
//         tempSum = maxSum;
//         for( let i = length; i < arr.length; i++){
//             tempSum = tempSum + arr[i] - arr[ i - length ]
//             if ( tempSum > maxSum){
//                 maxSum = tempSum
//             }
//         }
//         // console.log( maxSum );
    
//         return ( maxSum );
//     }
//     return 0;
// }
// console.log(maxSubarraySum( [1, 4, 2, 10, 23, 3, 1, 0, 20] , 4 )); ;



// const  minSubArrayLen = ( arr, num ) => {
//     for ( let i = 0; i < arr.length; i++){
//         if ( arr[i] >= num ) return 1;
//     }
// }

// console.log(minSubArrayLen( [2, 3, 1, 2, 8, 3], 7 ));

