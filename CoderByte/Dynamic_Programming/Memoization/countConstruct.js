// Should accept a target String and an array of strings
// Should return the number of ways that the target can be formed from the wordBank

// Unoptimized version Time: O(n^m * m) Space: O(m^2) where m = target and n = wordBank.length
const countConstruct1 = (target, wordBank) => {
  if (!target) return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      count += countConstruct1(target.replace(word, ""), wordBank);
    }
  }
  return count;
};

// Optimized version Time: O(m^2 * n) Space: O(m^2)
const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (!target) return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) count += countConstruct(target.replace(word, ""), wordBank, memo);
  }
  memo[target] = count;
  return count;
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));