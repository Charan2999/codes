const flatArray = (arr) => {
  let t1 = Date.now();
  var result = [];
  if (arr.length === 0) return result;
  if (arr.length === 1) {
    if (Array.isArray(arr[0])) {
      for (let i of arr[0]) {
        result.push(i);
      }
    } else {
      result.push(arr[0]);
    }
    return result;
  }
  for (let i of arr) {
    if (Array.isArray(i)) {
      result = result.concat(flatArray(i));
    } else {
      result.push(i);
    }
  }
  return result;
};

let arr = [];
console.log(flatArray(arr));
