function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];

  function dfs(idx: number) {
    // base case: we go out of bounds
    if (idx >= nums.length) {
      const copied = [...subset];
      res.push(copied);
      return;
    }

    // branch 1: adding the number to the current subset
    // explore
    subset.push(nums[idx]);
    // recurse
    dfs(idx + 1);
    // unexplore
    subset.pop();

    // branch 2: skip the current number
    dfs(idx + 1);
  }

  dfs(0);
  return res;
}

export { subsets };
