const blabla = (arr) => {
  let outArr = [];

  const smallerNumbersCount = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (j === i) {
          continue;
        } else if (arr[j] < arr[i]) {
          count++;
        }
      }
      outArr.push(count);
    }
    return outArr;
  };

  const uniqueElements = (arr) => {
    let firstEle = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (firstEle !== arr[i]) {
        return smallerNumbersCount(arr);
      } else {
        outArr.push(0);
      }
    }
    outArr.push(0);
    return outArr;
  };
  return uniqueElements(arr);
  //   console.log(uniqueElements([6, 6, 6, 6, 6]));
};
console.log(blabla([8, 1, 2, 2, 3]));
