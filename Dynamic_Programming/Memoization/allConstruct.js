// Should accept a target and an array of strings
// Should return a 2D array containing all the ways that the target can be constructed

// Unoptimized version Time: O(n^m * m) Space: O(m^2)
const allConstruct1 = (target, wordBank) => {
  if (!target) return [[]];
  let constructs = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffixCall = allConstruct1(target.replace(word, ""), wordBank);
      constructs.push(...suffixCall.map(way => [word, ...way]));
    }
  }
  return constructs;
};

// Optimized version Time: O(n^m)
const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (!target) return [[]];
  let constructs = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffixCall = allConstruct(target.replace(word, ""), wordBank, memo);
      constructs.push(...suffixCall.map(way => [word, ...way]));
    }
  }
  memo[target] = constructs;
  return constructs;
};
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));