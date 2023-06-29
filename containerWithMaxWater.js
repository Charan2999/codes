function maxArea(height) {
    let left = 0; //0
    let right = height.length -1; //6
    let maxWater = 0; //0
    while ( left < right ){
        let leftEle = height[left]; //2
        let rightEle = height[right]; //6
        let heightOfContainer = leftEle < rightEle? leftEle : rightEle; //2
        let water = ( heightOfContainer*(right-left)) //(2)(6) = 12
        maxWater = water > maxWater ? water : maxWater //12
        heightOfContainer === leftEle ? left++ : right--; //

    //[2,3,4,5,18,17,6]
    // ^             ^ 
     
    }
console.log(maxWater);

    
};
maxArea([2,3,4,5,18,17,6])