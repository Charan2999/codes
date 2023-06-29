// var romanToInt = function(s) {
//     let sum = 0, currentValue =0, previousValue=0; 
//     const romanValues ={
//         "I" : 1,
//         "V" : 5,
//         "X" : 10,
//         "L" : 50,
//         "C" : 100,
//         "D" : 500,
//         "M" : 1000
//     }
//     for ( let i = s.length-1 ; i >= 0; i--){ // try the reverse in mean time
//         currentValue = romanValues[s[i]];
//         // console.log(currentValue);

//         if ( currentValue < previousValue ){
//             sum -= currentValue
//         }
//         else{sum += currentValue;}
//         previousValue = currentValue;

//     }
//     return sum;
    
// };

// console.log(romanToInt("LVIII"));
// // romanToInt("III");