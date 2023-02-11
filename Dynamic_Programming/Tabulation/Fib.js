// Classic fib function Time: O(n) Space: O(n)
const fib = (n) => {
  const fibTable = Array(n + 1).fill(0);
  fibTable[1] = 1;
  for (let i = 2; i <= n; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
  }
  return fibTable[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));