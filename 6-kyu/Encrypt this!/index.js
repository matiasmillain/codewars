var encryptThis = function(text) {
  return text
    .split(' ')
    .map(word => {
      let modifyWord = word.charCodeAt(0);
      if (word.length > 2) {
        modifyWord += word.charAt(word.length-1) + word.substring(2, word.length-1);
      }
      return modifyWord + word.charAt(1) ;
    })
    .join(' ');
}