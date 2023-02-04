var getPermutation = function (n, k) {
  const arr = [...new Array(n).keys()].map(no => no + 1);
  const perms = _getPermutation(arr);
  return (perms.map(perm => +perm.join("")).sort((a, b) => a - b).map(perm => String(perm)))[k - 1];
  console.log(result);
  return result[k];
};

const _getPermutation = (arr) => {
  if (arr.length === 0) return [[]];
  const firstEl = arr[0];
  const rest = arr.slice(1);
  const permWithoutFirst = _getPermutation(rest);
  const allPermutations = [];
  permWithoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      allPermutations.push([...perm.slice(0, i), firstEl, ...perm.slice(i)]);
    }
  });
  return allPermutations;
};

console.log(getPermutation(9, 94626));