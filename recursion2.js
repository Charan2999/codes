const factorialOfN = num => {
    if ( num < 2) return 1;
    return num * factorialOfN( num -1 );
}
console.log( factorialOfN(7) );
/////////////////////////////////////////////
const productOfElementsOfArr = arr => {
    if ( arr.length === 0 ) return 0;
    if ( arr.length === 1 ) return arr[0];
    return arr[arr.length - 1] * productOfElementsOfArr( arr.slice(0,-1) );
}
console.log( productOfElementsOfArr([10,2,2,3,4,5,6,7]) );
////////////////////////////////////////////


// const fibonacciTillN = n =>{
//     if ( n === 1) return 0;
//     if ( n === 1) return 1;
//     else return (fibonacciTillN( n-1 ) + fibonacciTillN(n-2));
// }
// console.log( fibonacciTillN(3) );
