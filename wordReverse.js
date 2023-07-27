// Sample input:-
// "Welcome to this Javascript Guide!"

// Sample output:-
// "emocleW ot siht tpircsavaJ !ediuG"

const Reverse = (str) => {
  let strArr = str.split(" ");
  let revStrArr = [];
  for (let i of strArr) {
    let revStr = "";
    for (let j = i.length - 1; j >= 0; j--) {
      revStr += i[j];
    }
    revStrArr.push(revStr);
  }

  return revStrArr.join(" ");
};
console.log(Reverse("Welcome to this Javascript Guide!"));
