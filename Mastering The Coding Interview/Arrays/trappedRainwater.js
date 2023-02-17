// Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped

// Constraints
//   * The sides are not walls
//   * All integers are positive
//   * All bars acts as solids arranged on the same plane
// Test Cases
//   * [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2], 8 : Best case
//   * [], 0 : Empty array
//   * [3], 0
//   * [3, 4, 3], 0

// Brute force solution Time: O(n^2) Space: O(1)
const trappedRainwater1 = bars => {
  let waterUnits = 0;
  for (let a = 0; a < bars.length; a++) {
    let maxL = maxR = 0;
    for (let leftA = a; leftA >= 0; leftA--) maxL = Math.max(maxL, bars[leftA]);
    for (let rightA = a; rightA < bars.length; rightA++) maxR = Math.max(maxR, bars[rightA]);
    const currWater = Math.min(maxL, maxR) - bars[a];
    if (currWater > 0) waterUnits += currWater;
  }
  return waterUnits;
};

// Optimized solution: 2 pointer technique Time: O(n) Space: O(1)
const trappedRainwater = bars => {
  let waterUnits = 0, maxL = maxR = 0, aL = 0, aR = bars.length - 1;
  while (aL < aR) {
    if (bars[aL] <= bars[aR]) {
      if (maxL > bars[aL]) waterUnits += maxL - bars[aL];
      else maxL = bars[aL];
      aL++;
    } else {
      if (maxR > bars[aR]) waterUnits += maxR - bars[aR];
      else maxR = bars[aR];
      aR--;
    }
  }
  return waterUnits;
};

console.log(trappedRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(trappedRainwater([5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]));
console.log(trappedRainwater([]));
console.log(trappedRainwater([3]));
console.log(trappedRainwater([3, 5, 3]));