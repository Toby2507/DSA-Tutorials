// Should take a target and an array of numbers as arguments
// Should return an array containing the shortest combination of elements that add up to the target.
// If there are multiple return one

// Time: O(m^2*n) Space: O(m^2) where m = target and n = numbers.length;
const bestSum = (target, numbers) => {
  const sumTable = Array(target + 1).fill(null);
  sumTable[0] = [];
  for (let i = 0; i <= target; i++) {
    if (sumTable[i]) {
      for (let num of numbers) {
        const newSum = [num, ...sumTable[i]];
        if (!sumTable[i + num] || newSum.length < sumTable[i].length) sumTable[i + num] = newSum;
      }
    }
  }
  return sumTable[target];
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));