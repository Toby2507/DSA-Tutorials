const combination = (arr, curr = [[]], idx = 0) => {
  if (idx === arr.length) return curr;
  const newArr = curr;
  newArr.forEach(comb => { newArr.push([...comb, arr[idx]]); });
  return combination(arr, newArr, idx + 1);
};

const otherCombination = (arr) => {
  if (arr.length === 0) return [[]];
  const firstEl = arr[0];
  const rest = arr.slice(1);
  const combWithoutFirst = otherCombination(rest);
  const combWithFirst = [];
  combWithoutFirst.forEach(comb => combWithFirst.push([...comb, firstEl]));
  return [...combWithFirst, ...combWithoutFirst];
};

console.log(otherCombination(["a", "b", "c"]));