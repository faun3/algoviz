function perms(nums: number[]): number[][] {
  // this is the base case from the recursive solution
  let perms: number[][] = [[]];
  // we explicitly loop over the nums instead of using an idx to address the elements in the array
  for (const num of nums) {
    // nextPerms was the array of possible permutations that the previous recursive call would've returned
    // if I computed the permutations of 4 to be [4], nextPerms would have returned [[4]]
    // in the next recursive step, nextPerms would have returned [[3, 4], [4, 3]]
    const nextPerms: number[][] = [];
    for (const p of perms) {
      for (let j = 0; j <= p.length; j++) {
        const copied: number[] = [...p];
        // same process of adding in a number to every possible position of the computed permutations
        copied.splice(j, 0, num);
        nextPerms.push(copied);
      }
      perms = nextPerms;
    }
  }
  return perms;
}

export { perms };
