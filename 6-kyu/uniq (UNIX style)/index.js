function uniq(a) {
  let aux = '';
  let result = [];
  
  a.forEach(e => {
    if ((aux != '' && e !== aux) || (aux == '')) {
      aux = e;
      result.push(e);
    }
  })
  
  return result;
}