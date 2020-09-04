function twoSum(numbers, target) {
  let aux = false;
  let arr = [];
  numbers.forEach((e,i) => {
    for(let j=0; j < numbers.length && !aux; j++) {
      if (j != i && numbers[i] + numbers[j] === target) {
        arr.push(i);
        arr.push(j);
        aux = true;
      }
    }
  })
  return arr;
}