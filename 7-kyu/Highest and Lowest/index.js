function highAndLow(numbers){
  var filterNumbers = numbers.split(' ');
  var max = Math.max( ...filterNumbers );
  var min = Math.min( ...filterNumbers );
  return max + ' ' + min;
}