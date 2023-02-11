// Fucntion should take in a target and an array of numbers as arguments
// Should return a boolean indicating if the target can be generated from the numbers in the array
// Elements in the array can be reused as much as needed. All imputes are non negative

// Time: O(mn) Space: O(m) where m = target and n = numbers.length;
const canSum = (target, numbers) => {
  const sumTable = Array(target + 1).fill(false);
  sumTable[0] = true;
  for (let i = 0; i <= target; i++) {
    if (sumTable[i]) {
      for (let num of numbers) sumTable[i + num] = true;
    }
  }
  return sumTable[target];
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));