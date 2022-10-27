let ar = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  let minimum = Infinity;
  let max = 0;
  let i = 0,
    j = 0;
  let length = arr.length;
  for (i = 0; i < length; i++) {
    let c = 0;
    let sum = 0;
    for (j = 0; j < length; j++) {
      if (c < 5 && j !== i) {
        sum = sum + arr[j];
      }
      if (c == 5) break;
      c++;
    }
    if (sum > max) max = sum;
    if (minimum > sum) minimum = sum;
  }
  console.log(minimum, max);
}

miniMaxSum(ar);
