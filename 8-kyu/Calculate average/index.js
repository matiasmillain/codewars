function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
}