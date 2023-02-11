const nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

// ITERATIVE APPROACH
// const binarySearch = (arr, target) => {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) return mid;
//         if (arr[mid] > target) {
//             right = mid - 1;
//         }
//         if (arr[mid] < target) {
//             left = mid + 1;
//         }
//     }
//     return false;
// };

// RECURSIVE APPROACH
const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return false;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, (mid - 1));
    if (arr[mid] < target) return binarySearch(arr, target, (mid + 1), right);
};

console.log(binarySearch(nums, 9));