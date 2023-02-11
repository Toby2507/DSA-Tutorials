// Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m * n?

// Time: O(m * n) Space: O(m * n)
const gridTraveler = (m, n) => {
  const grid = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  grid[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (j + 1 <= n) grid[i][j + 1] += grid[i][j];
      if (i + 1 <= m) grid[i + 1][j] += grid[i][j];
    }
  }
  return grid[m][n];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));