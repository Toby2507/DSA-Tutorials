// Should accept a target String and an array of strings
// Should return the number of ways that the target can be formed from the wordBank

// Time: O(m^2*n) Space: O(m) where m = target.length and n = wordBank.length;
const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i < target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) table[i + word.length] += table[i];
    }
  }
  return table[target.length];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));