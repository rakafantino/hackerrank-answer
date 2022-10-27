let candles = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
  let max = candles[0];
  for (let i = 1; i < candles.length; i++) {
    max = candles[i] > max ? candles[i] : max;
  }
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == max) count++;
  }
  return count;
}

console.log(birthdayCakeCandles(candles));
