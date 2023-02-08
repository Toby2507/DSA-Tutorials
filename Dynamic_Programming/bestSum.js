// Should take a target and an array of numbers as arguments
// Should return an array containing the shortest combination of elements that add up to the target.
// If there are multiple return one

// Unoptimized version Time: O(n^m * m) Space: O(m^2) where m = target & n = numbers.length
const bestSum1 = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;
  let shortestComb = null;
  for (let num of numbers) {
    const currResult = bestSum(target - num, numbers);
    if (currResult) {
      const currComb = [num, ...currResult];
      if (!shortestComb || currComb.length < shortestComb.length) shortestComb = currComb;
    }
  }
  return shortestComb;
};

// Optimized version Time: O(m^2 * n) Space: O(m^2)
const bestSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  let finalComb = null;
  for (let num of numbers) {
    const currResult = bestSum(target - num, numbers, memo);
    if (currResult) {
      const comb = [num, ...currResult];
      if (!finalComb || comb.length < finalComb.length) finalComb = comb;
    }
  }
  memo[target] = finalComb;
  return finalComb;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));