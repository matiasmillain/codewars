function vowelIndices(word){
  var indices = [];
  word.toLowerCase().split('').forEach((char, index) => (/^[aeiouy]$/i.test(char)) ? indices.push(index + 1) : '');
  return indices;
}