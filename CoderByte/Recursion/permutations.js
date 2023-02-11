const permutation = (arr) => {
  if (arr.length === 0) return [[]];
  const firstEl = arr[0];
  const rest = arr.slice(1);
  const permsWithoutFirst = permutation(rest);
  const permsWithFirst = [];
  permsWithoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      permsWithFirst.push(permWithFirst);
    }
  });
  console.log(permsWithFirst.length);
  return permsWithFirst;
};

const otherPermutation = (arr, curr = [[]], idx = 0) => {
  if (idx === arr.length) return curr;
  const assignee = arr[idx];
  const newArr = [];
  curr.forEach(item => {
    for (let i = 0; i <= item.length; i++) {
      newArr.push([...item.slice(0, i), assignee, ...item.slice(i)]);
    }
  });
  return otherPermutation(arr, newArr, idx + 1);
};
