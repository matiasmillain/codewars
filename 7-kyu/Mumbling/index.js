function accum(str) {
  return str.split('').map((char, idx) => {
      var dumm = char.toUpperCase();
      n = idx;
      while (n) {
        dumm += char.toLowerCase();
        n--;
      }
      return dumm += (idx < str.length - 1) ? '-' : '';
  }).join('');
}