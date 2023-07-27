const longestPrefix = (strs) => {
  let prefix = "";
  let lengths = [];
  if (strs.length > 1) {
    for (let i of strs) {
      lengths.push(i.length);
    }
    for (let i = 0; i < Math.max(...lengths); i++) {
      if (strs[0][i] === strs[1][i] && strs[1][i] === strs[2][i]) {
        prefix += strs[1][i];
      }
    }
  }
  return prefix;
};
console.log(longestPrefix(["a"]));
