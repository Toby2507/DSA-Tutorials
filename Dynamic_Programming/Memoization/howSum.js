// Should take a target and an array of numbers as arguments
// Should return an array containing any combination of elements that add up to the target. If there is none, returns null.
// If there are multiple return one

// Unoptimized Version Time: O(n^m * m) Space: O(m) where n = length of array and m = target
const howSum1 = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    const currResult = howSum1(target - num, numbers);
    if (currResult) return [num, ...currResult];
  }
  return null;
};

// Optimized version Time: O(m^2*n) Space: O(m^2)
const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    const currResult = howSum(target - num, numbers, memo);
    if (currResult) {
      memo[target] = [num, ...currResult];
      return memo[target];
    }
  }
  memo[target] = null;
  return memo[target];
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));