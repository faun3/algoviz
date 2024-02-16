function combinations(n: number, k: number): number[][] {
  const res: number[][] = [];

  function dfs(
    i: number,
    current: number[],
    res: number[][],
    n: number,
    k: number
  ): void {
    // you need to put this check before the i > n one
    // if you don't you'll get off by one errors on stuff
    if (current.length === k) {
      const copied: number[] = [...current];
      res.push(copied);
      return;
    }

    if (i > n) {
      return;
    }

    current.push(i);
    dfs(i + 1, current, res, n, k);
    current.pop();

    dfs(i + 1, current, res, n, k);
  }

  dfs(1, [], res, n, k);
  return res;
}

console.log(combinations(5, 3));
