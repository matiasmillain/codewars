function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
}