function helper(i: number, nums: number[]): number[][] {
  // base case - if we have no more numbers to actually choose from, we can return an empty array inside another array
  // it's important that we do this because we will loop over the empty array in the outer array so we can find
  //    all possible permutations by inserting the last number in the array at every possible position (only 1 position exists)
  if (i == nums.length) {
    return [[]];
  }

  // result array
  const res: number[][] = [];
  // recursive call
  // to find the permutations of 1, 2, 3 we can place "1" in any valid permutation of 2 and 3
  // [2, 3] and [3, 2] are the valid permutations
  // so we can do [1, 2, 3] [2, 1, 3] [2, 3, 1] or [1, 3, 2] [3, 1, 2] [3, 2, 1]
  // to find the permutations of 2 and 3 we can place "2" in any valid permutation of 3
  // [3] is a valid permutation
  // so we can do [2, 3] or [3, 2]
  // reading this comment from the bottom to the top is how this algo actually works
  const perms = helper(i + 1, nums);
  for (const perm of perms) {
    for (let j = 0; j <= perm.length; j++) {
      const copied = [...perm];
      // inserting the number no the left of the permuted group in all valid positions
      // to generate the next permutation
      copied.splice(j, 0, nums[i]);
      res.push(copied);
    }
  }
  return res;
}

function permutations(nums: number[]): number[][] {
  return helper(0, nums);
}

export { permutations };
