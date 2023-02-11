// Should accept a target string and an array of strings
// Return a boolean indicating whether or not the target can be constructed by concatenating elements of the word bank
// You may reuse elements of wordBank as many times as needed.

// Unoptimized version Time: O(n^m * m) Space: O(m^2) where m = target and n = wordBank.length
const canConstruct1 = (target, wordBank) => {
  if (!target) return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      if (canConstruct(target.replace(word, ""), wordBank)) return true;
    }
  }
  return false;
};

// Optimized version Time: O(m^2 * n) Space: O(m^2)
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (!target) return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      if (canConstruct(target.replace(word, ""), wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));