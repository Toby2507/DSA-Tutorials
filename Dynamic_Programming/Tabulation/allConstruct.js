// Should accept a target and an array of strings
// Should return a 2D array containing all the ways that the target can be constructed

// Time: ~O(n^m) where m = target.length and n = wordBank.length
const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill().map(() => []);
  table[0].push([]);
  for (let i = 0; i < target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length].push(...table[i].map(row => [...row, word]));
      }
    }
  }
  return table[target.length];
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));