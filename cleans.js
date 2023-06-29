////pig_latin
function pig_latin(str){
    let arrVowels = ["a","e","i","o","u"],index = 0, suffix1 = "way", suffix2 = "ay",outStr ="";

    if ( arrVowels.includes(str[0])){
        outStr = str.concat(suffix1);
    }

    else{
        for( var j = 0; j < str.length; j++){
            if (arrVowels.includes(str[j])){ 
                i = j ;      
                break;
            }
        } 
        outStr += str.slice(i) + str.substring(0,i) + suffix2;
    }
return outStr;
}

console.log(pig_latin("call"));

// let name = document.getElementsByName("")
