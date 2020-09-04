function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var total = 0;
  arrayOfSheep.forEach((e) => (
      total += (e) ? 1 : 0
    )
  )
  return total;
}