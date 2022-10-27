function bigSorting(unsorted) {
  return unsorted.sort((x, y) => {
    if (x.length != y.length) return x.length - y.length;
    for (let i = 0; i < x.length; i++) {
      let left = x[i];
      let right = y[i];
      if (left != right) return left - right;
    }
    return 0;
  });
}

console.log(bigSorting(["31415926535897932384626433832795", "1", "3", "10", "3", "5"]));
