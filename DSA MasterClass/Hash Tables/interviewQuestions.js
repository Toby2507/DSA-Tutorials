// Given 2 arrays, find out if there exists a value that intersects both arrays

// Unoptimized version Time: O(mn) where m = arr1.length and n = arr2.length
const intersects1 = (arr1, arr2) => {
  for (let val1 of arr1) {
    for (let val2 of arr2) if (val1 === val2) return true;
  }
  return false;
}

// Optimized version Time: O(m + n))
const intersects = (arr1, arr2) => {
  const hashMap = {}
  for (let val1 of arr1) hashMap[val1] = val1;
  for (let val2 of arr2) if (val2 in hashMap) return true;
  return false;
}

console.log(intersects([1, 3, 5], [2, 4, 5]))