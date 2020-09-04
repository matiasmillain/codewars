function createPhoneNumber(numbers) {
  let phoneNumber = '(';
  for(let i=0; i < numbers.length; i++) {
    phoneNumber += numbers[i] + (i == 2 ? ') ' : ((i == 5) ? '-' : ''));
  }
  return phoneNumber;
}