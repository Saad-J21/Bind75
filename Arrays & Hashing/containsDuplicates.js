/*
    ⏲️Time complexity O(n)⏲️
    📦Space complexity O(n)📦
*/
var containsDuplicates = function (nums) {
  const hashMap = {};
  for (let el of nums) {
    if (hashMap[el]) return true;
    hashMap[el] = true;
  }
  return false;
};
