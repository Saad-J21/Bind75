/*
    ⏲️Time complexity O(m*n) m=length of strs, n=length of every str⏲️
    📦Space complexity O(n)📦
*/
var groupAnagrams = function (strs) {
  const result = {};
  for (const str of strs) {
    const alphabetCounter = new Array(26).fill(0);
    for (const char of str) alphabetCounter[char.charCodeAt() - 97]++;
    console.log(alphabetCounter);
    const key = alphabetCounter.join("$");
    result[key] ? result[key].push(str) : (result[key] = [str]);
  }
  return Object.values(result);
};
