var strStr = function (haystack, needle) {
  if (haystack.length === 1 && needle.length === 1) {
    if (haystack == needle) {
      return 0;
    }
    return -1;
  }
  let needleLength = needle.length;
  let end = needleLength;
  let start = 0;
  while (end <= haystack.length) {
    if (haystack.slice(start, end) == needle) {
      return start;
    }
    start++;
    end++;
  }
  return -1;
};
console.log(strStr("abc", "c"));
