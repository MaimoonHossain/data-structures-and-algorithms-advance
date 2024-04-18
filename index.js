// Question: Given an array of integers, find the subarray with the largest sum. Return the sum of the subarray.

// const bruteForce = (nums) => {
//   let maxSum = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       maxSum = Math.max(maxSum, sum);
//     }
//   }

//   return maxSum;
// };

// console.log(bruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// time complexity: O(n^2)
// space complexity: O(1)
// where n is the length of the input array
// The brute force approach is to consider all possible subarrays and calculate the sum of each subarray. We keep track of the maximum sum found so far and return it at the end.
// This approach has a time complexity of O(n^2) because we consider all possible subarrays of the input array. The space complexity is O(1) because we only use a constant amount of extra space.
// The brute force approach is not efficient for large input arrays, as it has a quadratic time complexity. We can improve the time complexity by using a more optimized algorithm.
// Downside is: we should not add a negative value. because a negative value will never increase the sum. So, we can skip the negative value.

// Path: kadanes-algorithm-find-a-non-empty-subarray-with-the-largest-sum.js

// const kadanesAlgorithm = (nums) => {
//   let maxSum = -Infinity;
//   let currentSum = 0;

//   for (let num of nums) {
//     currentSum = Math.max(num, currentSum + num);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// };

// console.log(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// time complexity: O(n)
// space complexity: O(1)
// where n is the length of the input array
// The Kadane's algorithm is an optimized approach that uses dynamic programming to find the subarray with the largest sum. We iterate through the input array and keep track of the current sum and the maximum sum found so far.
// At each step, we update the current sum by taking the maximum of the current element and the sum of the current element and the previous sum. We also update the maximum sum if the current sum is greater.

// Question: Return the left and right index of the max subarray sum. Assuming there's exactly one result (not ites). Sliding window variation of Kadane's: O (n).

// const slidingWindow = (nums) => {
//   let maxSum = nums[0];
//   let currentSum = 0;
//   let maxL = 0;
//   let maxR = 0;
//   let L = 0;

//   for (let R = 0; R < nums.length; R++) {
//     currentSum += nums[R];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       maxL = L;
//       maxR = R;
//     }

//     if (currentSum < 0) {
//       currentSum = 0;
//       L = R + 1;
//       console.log(L)
//     }
//   }

//   return [maxL, maxR, maxSum];
// };

// console.log(slidingWindow([1, -3, 2, 1, -1])); // [3, 6]

// Given an array, return true if there are two elements within a window of size k that are equal.

// using the brute force approach for the sliding window problem

// const duplicatesBruteForce = (nums, k) => {
//   for (let L = 0; L < nums.length; L++) {
//     for (let R = L+1; R < nums.length; R++) {
//       if (nums[L] === nums[R] && Math.abs(L -R) <= k) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// console.log(duplicatesBruteForce([1, 2, 3, 1], 3)); // true

// time complexity: O(n^2)
// space complexity: O(1)
// where n is the length of the input array
// The brute force approach is to consider all possible pairs of indices (L, R) and check if the elements at those indices are equal and the difference between the indices is less than or equal to k. If we find such a pair, we return true.

// using the hash map for the sliding window problem

// const duplicatesHashMap = (nums, k) => {
//   const map = new Map();
//   let L = 0;

//   for (let R = 0; R < nums.length; R++) {
//     if (R - L > k) {
//       map.delete(nums[L]);
//       L++;
//     }

//     if (map.has(nums[R])) {
//       return true;
//     }

//     map.set(nums[R]);
//   }

//   return false;
// };

// console.log(duplicatesHashMap([1, 2, 3, 1], 3)); // true

// time complexity: O(n)
// space complexity: O(min(n, k))
// where n is the length of the input array
// The hash map approach is to use a map to store the elements and their indices. We iterate through the input array and keep track of the current window of size k using two pointers L and R.
// At each step, we check if the current element is already in the map. If it is, we return true. If not, we add the element to the map.
// If the window size exceeds k, we remove the element at index L from the map and increment L.

//Question: Find the length of the longest subarray, with the same value in each position.

// const longestSubarray = (nums) => {
//   let length = 0;
//   let left = 0;

//   for (let right = 1; right < nums.length; right++) {
//     if (nums[left] !== nums[right]) {
//       left = right;
//     }

//     length = Math.max(length, right - left + 1);
//   }

//   return length;
// };

// console.log(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0])); // 3

// time complexity: O(n)
// space complexity: O(1)
// where n is the length of the input array
// The approach is to use a sliding window to find the longest subarray with the same value in each position. We keep track of the left index of the current subarray and iterate through the input array.
// At each step, we check if the element at the left index is different from the element at the right index. If it is, we update the left index to the right index.
// We calculate the length of the current subarray and update the maximum length found so far.

// Question: Find the minimum length subarray, where the sum is greater than or equal to the target. Assume all values are positive.

// const shortestSubarray = (nums, target) => {
//   let minLen = Infinity;
//   let sum = 0;
//   let left = 0;

//   for (let right = 0; right <= nums.length; right++) {
//     sum += nums[right];

//     while (sum >= target) {
//       minLen = Math.min(minLen, right - left + 1);
//       sum -= nums[left];
//       left++;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// };

// console.log(shortestSubarray([2, 3, 1, 2, 4, 3], 7)); // 2

// time complexity: O(n)
// space complexity: O(1)
// where n is the length of the input array
// The approach is to use a sliding window to find the minimum length subarray with a sum greater than or equal to the target. We keep track of the left index of the current subarray and iterate through the input array.
// At each step, we add the element at the right index to the sum. If the sum is greater than or equal to the target, we update the minimum length found so far and move the left index to the right until the sum is less than the target.
// We return the minimum length found, or 0 if no subarray meets the condition.
