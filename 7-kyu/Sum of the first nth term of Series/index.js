function SeriesSum(n) {
  let result = 0;
  let fr = 1;
  
  for (let i = 0; i < n; i++) {
    result += 1/fr;
    fr += 3;
  }
  
  return result.toFixed(2);
}