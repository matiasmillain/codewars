function towerBuilder(nFloors) {
  const tower = [];
  for(let i=0; i < nFloors; i++) {
    tower.push(
      ' '.repeat(nFloors - i - 1) +
      '*'.repeat(2 * i + 1) +
      ' '.repeat(nFloors - i - 1)
    )
  }
  return tower;
}