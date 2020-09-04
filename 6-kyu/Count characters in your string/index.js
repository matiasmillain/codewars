function count (string) {  
  let aux = string.split("");
  let returnedTarget = {};
  
  aux.forEach(letter => {
    let letterCount = aux.filter(z => z === letter);
    returnedTarget[letter] = letterCount.length;
  })
  
  return returnedTarget;
}