const firstUniqueChar = (s) => {
  let count = {};
  for (let i of s) {
    count.hasOwnProperty(i) ? (count[i] += 1) : (count[i] = 1);
  }
  for (let key in count) {
    if (count[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
console.log(firstUniqueChar("aabb"));
