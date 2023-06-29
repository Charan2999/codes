function pig_latin(str){
    let arrVowels = ["a","e","i","o","u"],index = 0, suffix1 = "way", suffix2 = "ay",temp = "",outStr ="";      // declaring variables

    if ( arrVowels.includes(str[0])){       //// checking for simple problem like; the first letter is vowel
        outStr = str.concat(suffix1);       //// concating str and suffix1
    }

    else{       //// for not simple class
        for( var j = 0; j < str.length; j++){       //// looping over the string
            if (arrVowels.includes(str[j])){        //// checking for the first 
                i = j ;     //// assigning j 
                break;      //// breaking the loop
                // if ( index == 0){
                //     outStr += str + suffix1;
                // }
            }
        }
        // for ( var i = 0; i < index ; i++){      //// iterating loop till the first vowel    
            // if ( !arrVowels.includes(str[i]) ){    
                // temp += str[i];     //// concating chars till the first vowel to temp variable

            // }
        // } 
        outStr += str.slice(i) + str.substring(0,i) + suffix2;        //// concating rest str, temp, suffix
    }
return outStr;
}

console.log(pig_latin("call"));

