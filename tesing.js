//team2
function includesJS(data, target){
  let type = typeof data;
  switch(type){
    case 'object':
      return linear(data, target);
    case 'string':
      let arr = data.split(" ");
      arr = arr.filter((str) => str !== '');
      return linear(arr, target);
    default :
      return "invalid";
  }
}
function linear(data, target){
  if(data.length < 1 && target.length < 1){
    return true;
  }
  for(let i = 0 ; i < data.length ; i++){
    if(data[i] === target){
      return true;
    }
  }
  return false;
}
console.log(includesJS([1,2,3,4,5],1));
console.log(includesJS([1,2,3,4,5],10));
console.log(includesJS([],2));
console.log(includesJS(["hello world", 7, 1, 19, 4, "hii"], "hii"));
console.log(includesJS(["hello world", 1, 10], "hello"));
console.log();
console.log(includesJS("hello world", "hello"));
console.log(includesJS("i am there", "hii"));
console.log(includesJS("","h"));
console.log(includesJS("h",""));
console.log(includesJS("",""));