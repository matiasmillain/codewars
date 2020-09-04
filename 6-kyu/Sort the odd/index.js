function sortArray(array) {
  if (array && array.length > 0) {
    let filterOdds = array.filter(e => e % 2).sort((a, b) => a - b);
    return (array.map(e => (e % 2) ? filterOdds.shift() : e));
  } 
  return [];
}