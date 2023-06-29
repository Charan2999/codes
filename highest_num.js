var a = 0,
  b = 0,
  c = 0.001;
if (a != 0 || b != 0 || c != 0) {
  if (a != b || b != c) {
    if (a > b) {
      if (a > c) {
        console.log(a);
      } else {
        console.log(c);
      }
    } else {
      if (b > c) {
        console.log(b);
      } else {
        console.log(c);
      }
    }
  } else {
    console.log("all are equal");
  }
} else {
  console.log("enter values greater than zero");
}
