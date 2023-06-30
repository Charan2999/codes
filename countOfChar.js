const count = (str) => {
  str = str
    .replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]/g, "")
    .toLowerCase();
  let count = {};
  for (let i of str) {
    //checks for the char and updates the count value
    count.hasOwnProperty(i) ? (count[i] += 1) : (count[i] = 1);
  }
  //output is an object
  return count;
};

console.log(count("Hell233981763# $%^& oh!!!@#$%^&*"));
