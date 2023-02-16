// Given an array of integers, return the indices of the 2 numbers that add up to a given target

// Process
// * Check for constraints
// E.g * All positive an unique numbers
//     * There may not always be solutions in which case return null
//     * Only one possible solution per case;
// * Write test cases to guide solution
// 1st case [1, 3, 7, 9, 2], 11 : Best case
// 2nd case [1, 2, 3, 4, 5], 25 : No possible solution
// 3rd case [], 3 : empty array
// 4th case [5], 8 : array with 1 value
// 5th case [5], 5 : array with target value only
// 6th case [1, 6], 7 : array with correct pair only

// Brute force solutuion Time: O(n^2) Space: O(1)
const findTwoSum1 = (numbers, target) => {
  for (let p1 = 0; p1 < numbers.length; p1++) {
    const numTofind = target - numbers[p1];
    for (let p2 = p1 + 1; p2 < numbers.length; p2++) {
      if (numbers[p2] === numTofind) return [p1, p2];
    };
  }
  return null;
};

// Optimized solution Time: O(n) Space: O(n)
const findTwoSum = (numbers, target) => {
  let hashMap = {};
  for (let p = 0; p < numbers.length; p++) {
    const currVal = numbers[p];
    if (currVal in hashMap) return [p, hashMap[currVal]];
    const numTofind = target - currVal;
    hashMap[numTofind] = p;
  }
  return null;
};

console.log(findTwoSum([1, 3, 7, 9, 2], 11));
console.log(findTwoSum([1, 2, 3, 4, 5], 25));
console.log(findTwoSum([], 3));
console.log(findTwoSum([5], 8));
console.log(findTwoSum([5], 5));
console.log(findTwoSum([1, 6], 7));