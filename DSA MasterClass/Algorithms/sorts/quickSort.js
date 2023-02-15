// Space: O(1) Time: O(nlogn) at best and average case where n = arr.length
// For almost or completely sorted arrays Time: O(n^2)
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

const pivot = (arr, pivotIdx, endIdx) => {
  let swapIdx = pivotIdx;
  for (let i = pivotIdx + 1; i < endIdx; i++) if (arr[i] < arr[pivotIdx]) { swapIdx++; swap(arr, swapIdx, i); }
  swap(arr, pivotIdx, swapIdx);
  return swapIdx;
};

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

console.log(quickSort([4, 1, 3, 7, 6, 2, 5]));