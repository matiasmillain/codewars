function balance(left,right){
  let leftWeight = 0;
  let rightWeight = 0;
  
  left.split('').forEach(e => e === '!' ? leftWeight += 2 : leftWeight += 3);
  right.split('').forEach(e => e === '!' ? rightWeight += 2 : rightWeight += 3);
  
  return (leftWeight === rightWeight) ? 'Balance' : ((leftWeight > rightWeight) ? 'Left' : 'Right');
}