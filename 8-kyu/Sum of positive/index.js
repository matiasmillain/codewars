function positiveSum(arr) {
  let sum = 0;
  arr.forEach(element => (element > 0) ? sum += element : 0);
  return sum;
}