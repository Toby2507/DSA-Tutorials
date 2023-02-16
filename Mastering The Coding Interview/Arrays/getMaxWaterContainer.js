// Given an array of positive integers where each integers represents the height of a vertical line on a chart. Find 2 lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

// Constraints
//   * Thickness of each lines assumes no space
//   * The walls of the chart cannot be used to create a container
//   * Assume that the lines do not affect each other
// Test cases
//   * [7, 1, 2, 3, 9] , 7 * 4 = 28 : Best Case
//   * [] , 0 : Empty value
//   * [7] , 0 : Array with single value
//   * [6, 9, 3, 4, 5, 8] , 8 * 4 = 32

// Brute Force Solution Time: O(n^2) Space: O(1)
const getMaxWaterContainer1 = heights => {
  let maxArea = 0;
  for (let a = 0; a < heights.length; a++) {
    for (let b = a + 1; b < heights.length; b++) {
      const currArea = Math.min(heights[a], heights[b]) * (b - a);
      maxArea = Math.max(maxArea, currArea);
    }
  }
  return maxArea;
};

// Optimized Solution: 2 pointer technique Time: O(n) Space: O(1)
const getMaxWaterContainer = heights => {
  let a = 0, b = heights.length - 1, maxArea = 0;
  while (a < b) {
    const currArea = Math.min(heights[a], heights[b]) * (b - a);
    maxArea = Math.max(maxArea, currArea);
    if (heights[a] > heights[b]) b--;
    else a++;
  };
  return maxArea;
};

console.log(getMaxWaterContainer([7, 1, 2, 3, 9]));
console.log(getMaxWaterContainer([]));
console.log(getMaxWaterContainer([7]));
console.log(getMaxWaterContainer([6, 9, 3, 4, 5, 8]));