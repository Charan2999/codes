const NoOfVowels = (str) => {
  const vowels = "aeiou";
  const lowerCaseStr = str.toLowerCase();
  let vowelsCount = 0;
  for (let i of lowerCaseStr) {
    if (vowels.includes(i)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};
console.log(NoOfVowels("CHaran"));
