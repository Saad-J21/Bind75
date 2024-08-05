var containsDuplicates = function (nums) {
  const hashMap = {};
  for (let el of nums) {
    if (hashMap[el]) return true;
    hashMap[el] = true;
  }
  return false;
};
