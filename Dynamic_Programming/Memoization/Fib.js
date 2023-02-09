// Classical Fib algorithm Time: O(2^n) Space: O(n)
const classicalFib = n => {
  if (n <= 2) return 1;
  return classicalFib(n - 1) + classicalFib(n - 2);
};
// Memoized Fib algorithm Time: O(n) Space: O(n)
// When memoizing a function we make use of an hashMap, the keys of the hashMap will be the arg to the fn, and the value is the return value
const memoizedFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
};

console.log(classicalFib(6));
console.log(classicalFib(7));
console.log(classicalFib(8));
console.log(memoizedFib(50));