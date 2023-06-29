
function noOfLoops(code){

        let lines = code.split('\n');
        let loopCount = 0;
        let nestCountArr = [];
        let nestCount=0;
        let ifFlag = false;
        let inBracketNumber = 0;



    for (let p = 0; p < lines.length; p++){
        let line = lines[i];
        if(lines.includes('for') || line.imcludes('while')){
            loopcount++;
            inCollonNumber++;
            if(inCollonNumber >1){ nestCount++}
        }
        else if(line.includes('if'))
        {
            ifFlag=true;
        }
        else if (line.includes(':')) {

            if(ifFlag)
            {
                ifFlag =false;
            }else{
            inBracketNumber--;
            nestCountArr.push(nestCount);
            }
        }

        }
}