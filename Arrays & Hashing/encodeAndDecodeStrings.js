/*
    ⏲️Time complexity O(n)⏲️
    📦Space complexity O(0)📦
*/
class Solution {
  encode(strs) {
    let result = "";
    for (let s of strs) {
      result += `${s.length}#${s}`;
    }
    return result;
  }

  decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j), 10);
      i = j + 1;
      j = i + length;
      result.push(str.substring(i, j));
      i = j;
    }
    return result;
  }
}
