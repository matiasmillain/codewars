function sumDigPow(a, b) {
  let result = [];
  for(let j=a; j<=b; j++) {
    if(j > 9) {
      let sumDig = 0;
      let aux = 1;
      j.toString().split('').forEach((e,i) => {
        for(let n=1; n <= (i+1); n++) {
          aux *= e;
        }
        sumDig += aux;
        aux=1;
      });
      
      if (sumDig == j) {
        result.push(sumDig);
      }
    } else {
      result.push(j);
    }
  }
  
  return result;
}