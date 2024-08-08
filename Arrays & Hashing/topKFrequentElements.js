/*
    ⏲️Time complexity O(n)⏲️
    📦Space complexity O(n)📦
*/
var topKFrequent = function (nums, k) {
  const hashMap = {};
  const freq = new Array(nums.length + 1).fill([]).map(() => []);
  const answer = [];
  for (const num of nums) hashMap[num] = hashMap[num] ? ++hashMap[num] : 1;
  for (const key in hashMap) freq[hashMap[key]].push(+key);
  for (const el of freq) answer.push(...el);
  return answer.slice(-k);
};
topKFrequent([1, 1, 1, 2, 2, 3], 2);
