// Should take a target and an array of numbers as arguments
// Should return an array containing any combination of elements that add up to the target. If there is none, returns null.
// If there are multiple return one

// Time: O(m^2 * n) Space: O(m^2) where m = target and n = numbers.length;
const howSum = (target, numbers) => {
  const sumTable = Array(target + 1).fill(null);
  sumTable[0] = [];
  for (let i = 0; i <= target; i++) {
    if (sumTable[i]) {
      for (let num of numbers) {
        sumTable[i + num] = [num, ...sumTable[i]];
      }
    }
  }
  return sumTable[target];
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));