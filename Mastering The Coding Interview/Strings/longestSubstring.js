// Given a string, find the length of the longest substring without repeating characters.

// Constraints
//   * A single character counts as a substring
//   * The substring should be contiguous
//   * non case-sensitive
// Test Cases
//   * 'abccabb' : 3
//   * 'cccccc' : 1
//   * '' : 0
//   * 'abcbda' : 4

// Brute force solution Time: O(n^2) Space: O(n) where n = str.length;
const longestSubstring1 = str => {
  if (str.length <= 1) return str.length;
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let seenChars = {}, currLength = 0;
    for (let j = i; j < str.length; j++) {
      if (str[j] in seenChars) break;
      seenChars[str[j]] = true; currLength++;
      maxLength = Math.max(maxLength, currLength);
    }
  }
  return maxLength;
};

// Optimized Solution Time: O(n) Space: O(n)
const longestSubstring = str => {
  if (str.length <= 1) return str.length;
  let maxLength = 0, left = 0, seenChars = new Map();
  for (let right = 0; right < str.length; right++) {
    const charLastIdx = seenChars.get(str[right]);
    if (charLastIdx >= left) left = charLastIdx + 1;
    seenChars.set(str[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};



console.log(longestSubstring('abccabb'));
console.log(longestSubstring('cccccc'));
console.log(longestSubstring(''));
console.log(longestSubstring('abcbdakvnknnm'));