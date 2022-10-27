let ar = [1, 2, 3, 4, 10, 11];
function simpleArraySum(ar) {
  let sum = 0;
  ar.forEach((arr) => {
    sum += arr;
  });
  return sum;
}
console.log(simpleArraySum(ar));
