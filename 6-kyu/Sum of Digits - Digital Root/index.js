function digital_root(n) {
  let arrN = n.toString().split('');
  let sum = 0;
  let check = false;
  
  while(!check) {
    arrN.forEach(number => sum += parseInt(number));
    if (sum > 9) {
      arrN = sum.toString().split('');
      sum = 0;
    } else {
      check = true;
    }
  }

  return sum;
}