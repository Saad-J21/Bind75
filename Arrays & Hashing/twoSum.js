/*
    ⏲️Time complexity O(n)⏲️
    📦Space complexity O(n)📦
*/
var twoSum = function (nums, target) {
  const hashmap = {};
  for (const [index, num] of nums.entries()) {
    const complement = target - num;
    if (hashmap[complement] != undefined) return [hashmap[complement], index];
    hashmap[num] = index;
  }
};
