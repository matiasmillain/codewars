var numberToPrice = function(number) {
  return typeof number != 'number' ? 'NaN' : number.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
}