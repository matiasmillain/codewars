function upArray(arr) {
  if (arr && arr.length) {
    let arrFilter = arr.filter(e => e < 0);
    if (arrFilter && arrFilter.length > 0) {
      return null;
    } else {
      let aux = false;
      for (let i=arr.length-1; i < arr.length && i >= 0 && !aux; i--) {
        if (i == 0 && arr[0] === 9) {
          arr[0] = 0;
          arr = [1, ...arr];
        } else if (i == 0 && arr[i] == 0) {
          arr[i] = 1;
        } else if (arr[i] != 9 && i > 0) {
          arr[i] = arr[i] + 1;
          aux = true;
        } else if (arr[i] == 9 && i > 0) {
          arr[i] = 0;
          if (arr[i-1] + 1 < 9) {
            arr[i-1] = arr[i-1] + 1;
            aux = true;
          }
        }
      }
      
      for (let j=0; j < arr.length; j++) {
        if (arr[j+1] && (arr[j].toString().length != arr[j+1].toString().length)) {
          return null;
        }
      }
      
      return arr;
    }
  }
  
  return null;
}