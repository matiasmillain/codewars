function list(names){
  let namesSt = '';
  
  if (names && names.length) {
    names.forEach((nm, idx) => {
      let character = (idx === names.length - 1) ? '' : ((idx === names.length - 2) ? ' & ' : ', ');
      namesSt += nm.name + character;
    });
  }
 
  return namesSt;
}