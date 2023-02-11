// SUM ALL QUESTION

// const slowSum = (arr) => {
//   if (arr.length === 0) return 0;
//   return arr[0] + slowSum(arr.slice(1));
// };

// const fastSum = (arr) => {
//   return _sum(arr, 0);
// };

// const _sum = (arr, idx) => {
//   if (!arr[idx]) return 0;
//   return arr[idx] + _sum(arr, idx + 1);
// };

// const input = new Array(8200).fill(1);

// const slowStart = Date.now();
// console.log(slowSum(input));
// const slowEnd = Date.now();
// console.log(`Slow Elapsed time = ${slowEnd - slowStart}ms`);


// const fastStart = Date.now();
// console.log(fastSum(input));
// const fastEnd = Date.now();
// console.log(`Fast Elapsed time = ${fastEnd - fastStart}ms`);



// FIB QUESTION

const fib = (n) => {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const memoizedFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
};

const input = 20;

const slowStart = Date.now();
console.log(fib(input));
const slowEnd = Date.now();
console.log(`Slow Elapsed time = ${slowEnd - slowStart}ms`);


const fastStart = Date.now();
console.log(memoizedFib(input));
const fastEnd = Date.now();
console.log(`Fast Elapsed time = ${fastEnd - fastStart}ms`);