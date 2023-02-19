// Given 2 strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace.

// Constraints
//   * Delete values as many times as # appears
//   * If there is nothing to delete # does nothing
//   * 2 empty strings are equal
//   * Case sensitivity matter
// Test Cases
//   * 'ab#z', 'az#z' : true
//   * 'abc#d', 'acc#c' : false
//   * 'x#y#z', 'a#' : true
//   * 'a###b', 'b' : true
//   * 'Ab#z', 'az#z' : false

// Brute force solution Time: O(m + n) Space: O(m + n) where m = S.length and n = T.length
const backspaceCompare1 = (S, T) => buildString(S) === buildString(T);

const buildString = str => {
  const builtArr = [];
  for (let char of str) if (char === '#') builtArr.pop(); else builtArr.push(char);
  return JSON.stringify(builtArr);
};

// Optimized solution Time: O(m + n) Space: O(1);
const backspaceCompare = (S, T) => {
  let a = S.length - 1, b = T.length - 1;
  while (a >= 0 || b >= 0) {
    if (S[a] === '#') a = hashDel(S, a);
    if (T[b] === '#') b = hashDel(T, b);
    if (S[a] !== T[b]) return false;
    a--; b--;
  }
  return true;
};

const hashDel = (str, currP) => {
  let backCount = 2;
  while (backCount > 0) {
    backCount--; currP--;
    if (str[currP] === '#') backCount += 2;
  }
  return currP;
};

console.log(backspaceCompare('ab#z', 'az#z'));
console.log(backspaceCompare('abc#d', 'acc#c'));
console.log(backspaceCompare('x#y#z#', 'a#'));
console.log(backspaceCompare('a###b', 'b'));
console.log(backspaceCompare('Ab#z', 'az#z'));