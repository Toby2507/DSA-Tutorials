// Fucntion should take in a target and an array of numbers as arguments
// Should return a boolean indicating if the target can be generated from the numbers in the array
// Elements in the array can be reused as much as needed. All imputes are non negative

// Unoptimized version Time: O(n^m) Space: O(m)  where n = length of array and m = target
const canSum1 = (target, numbers) => {
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    if (canSum(target - num, numbers)) return true;
  }
  return false;
};
// Optimized version Time: O(m * n) Space: O(m)  where n = length of array and m = target
const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    if (canSum(target - num, numbers, memo)) {
      memo[target] = true;
      return memo[target];
    }
  }
  memo[target] = false;
  return memo[target];
};

console.log(canSum1(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));