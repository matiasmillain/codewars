function dashatize(num) {
  let positiveNumber = Math.abs(num);

  if (!isNaN(positiveNumber)) {
    let aux = '';
    let arr = positiveNumber.toString().split('');
    
    arr.forEach((e, i) => {
      if (i > 0) {
        aux +=  (e !== 0 && (e % 2 !== 0) || (arr[i-1] % 2 !== 0)) ? '-' : '';
      }
      aux += e;
    })
    
    return aux;
  } 
  
  return 'NaN';
}