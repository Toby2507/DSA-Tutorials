// Should accept a target string and an array of strings
// Return a boolean indicating whether or not the target can be constructed by concatenating elements of the word bank
// You may reuse elements of wordBank as many times as needed.

// Time: O(m^2*n) Space: O(m) where m = target.length and n = wordBank.length
const canConstruct = (target, wordBank) => {
  const constructTable = Array(target.length + 1).fill(false);
  constructTable[0] = true;
  for (let i = 0; i < target.length; i++) {
    if (constructTable[i]) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) constructTable[i + word.length] = true;
      }
    }
  }
  return constructTable[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));