const permutation = (nums, set = [], answers = []) => {
  if (!nums.length) {
    answers.push([...set]);
  }
  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((x) => nums.indexOf(x) !== i);
    // console.log(newNums);
    set.push(nums[i]);
    permutation(newNums,set,answers);
    set.pop();
  }
  return answers;
};
console.log(permutation([1, 2, 3]));
