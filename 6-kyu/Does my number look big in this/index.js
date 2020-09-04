function narcissistic(value) {
  let arrValues = value.toString().split('');
  let aux = 1;
  let total = 0;
  
  for(let i=0; i < arrValues.length; i++) {
    for(let j=0; j < arrValues.length; j++) {
      aux *= arrValues[i];
    }
    total += aux;
    aux = 1;
  }
  
  return (total === value);
}