function disemvowel(str) {
  let aux = '';
  str.split('').forEach((chart => 'aeiou'.indexOf(chart.toLowerCase()) != -1 ? '' : aux += chart));
  return aux;
}

// Refactor
function disemvowel(str) {
  return str.replace(/[aeiou]/ig, '');
}