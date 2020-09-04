function XO(str) {
  var dummStr = str.toLowerCase().split('');
  return dummStr.filter(x => x === 'x').length === dummStr.filter(o => o === 'o').length
}