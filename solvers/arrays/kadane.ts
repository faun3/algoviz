function kadane(nums: number[]) {
  let runningSum = 0;
  // we need to set max sum to a number that always compares less than 0
  let maxSum = -Infinity;
  for (const num of nums) {
    // default behavior is to highlight every number as we iterate over it
    // the highlight will be dropped later on in the algo
    if (runningSum < 0) {
      // if this happens, we drop the currently selected subarray and start on another one
      // in vis terms, we need to unhighlight the portion of the array
      runningSum = 0;
    }
    runningSum += num;
    if (runningSum > maxSum) {
      maxSum = runningSum;
    }
  }
  return maxSum;
}
