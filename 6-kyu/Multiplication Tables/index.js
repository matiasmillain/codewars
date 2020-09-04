function multiplicationTable(row,col){
  let result = [];
  let aux = [];
  for(let i=1; i <= row; i++) {
    for(let j=1; j <= col; j++) {
      aux.push(i * j);
    }
    result.push(aux);
    aux = [];
  }
  return result;
}