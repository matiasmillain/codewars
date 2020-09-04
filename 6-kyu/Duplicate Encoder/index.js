function duplicateEncode(word) {
  let wordArr = word.toLowerCase().split('');
  return wordArr
    .map(letter => wordArr.filter(e => e == letter).length > 1 ? ')' : '(')
    .join('')
}