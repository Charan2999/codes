function sumOfN ( num ){
    if ( num === 1)return 1 ;
    return( num + sumOfN( num -1))
}
console.log(sumOfN( 10 ));
//////////////////////////////////////////////
function productOfOddNum ( num ){
    if ( num === 1) return 1;
    if ( num % 2 == 0){
        num = num - 1;
        return ( num* productOfOddNum( num - 2));
    }
return ( num * productOfOddNum(num-2));
}
console.log( productOfOddNum (10) );
////////////////////////////////////////////
function logOfNum ( num ){
    if ( num < 2 ) return 0;
    return 1 + logOfNum( num / 2);
}
console.log( logOfNum ( 32 ) );