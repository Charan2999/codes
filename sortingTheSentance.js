const sortingTheSentance = (s) => {
  let temp = s.split(" ");
  let result = [];
  for (let i = 1; i <= temp.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (temp[j].includes(i)) {
        result.push(temp[j].slice(0, -1));
      }
    }
  }
  return result.join(" ");
};
console.log(sortingTheSentance("is2 sentence4 This1 a3"));
