// Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m * n?

// Unoptimized version Time: O(2^(n + m)) Space: O(n + m)
const gridTraveler1 = (m, n) => {
  if ((!m || !n) || (!m && !n)) return 0;
  if (m === n && m === 1) return 1;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// Optimized version Time: O(n + m) Space: O(n + m)
const gridTraveler = (m, n, memo = {}) => {
  const key = `${m}_${n}`;
  if (key in memo) return memo[key];
  if ((!m || !n) || (!m && !n)) return 0;
  if (m === n && m === 1) return 1;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));