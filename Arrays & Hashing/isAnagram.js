var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hashMapT = {},
    hashMapS = {};
  for (let char of s) {
    hashMapS[char] = hashMapS[char] ? hashMapS[char] + 1 : 1;
  }
  for (let char of t) {
    hashMapT[char] = hashMapT[char] ? hashMapT[char] + 1 : 1;
  }
  for (let key in hashMapS) {
    if (hashMapS[key] !== hashMapT[key]) return false;
  }
  return true;
};
