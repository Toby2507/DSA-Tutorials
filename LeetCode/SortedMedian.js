// Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log(m + n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const [len1, len2] = [nums1.length, nums2.length];
  // BASE CASES
  if (!len1 && !len2) return 0;
  const [median1, median2] = [Math.floor((len1 - 1) / 2), Math.floor((len2 - 1) / 2)];
  if (!len1) return len2 % 2 === 1 ? nums2[median2] : (nums2[median2] + nums2[median2 + 1]) / 2;
  if (!len2) return len1 % 2 === 1 ? nums1[median1] : (nums1[median1] + nums1[median1 + 1]) / 2;
  if (len1 === len2 && len1 < 2) return (nums1[0] + nums2[0]) / 2;
  // RECURSIVE CASE
  const [max1, max2] = [nums1[len1 - 1], nums2[len2 - 1]];
  nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
  max1 > max2 ? nums1.pop() : nums2.pop();
  return findMedianSortedArrays(nums1, nums2);
};