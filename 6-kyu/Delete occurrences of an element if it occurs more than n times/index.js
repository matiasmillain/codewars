function deleteNth(arr, n) {
  let arrResult = [];
  for (let i=0; i < arr.length; i++) {
    if (arrResult.length == 0) {
      arrResult.push(arr[i]);
    } else {
      let searchE = arrResult.filter(e => e === arr[i])
      if(searchE.length < n) {
        arrResult.push(arr[i]);
      }
    }
  }
  
  return arrResult;
}