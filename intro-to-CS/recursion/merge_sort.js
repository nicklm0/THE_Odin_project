/*
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
Tips:

Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
It may be helpful to check out the background videos again if you don’t quite understand what should be going on.
*/

function mergeSort(array) {
  // Base case: arrays with length 0 or 1 are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Find middle point to divide array into two halves
  const middle = Math.floor(array.length / 2);
  
  // Split array into left and right halves
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort the two halves
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Merge the sorted halves
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}