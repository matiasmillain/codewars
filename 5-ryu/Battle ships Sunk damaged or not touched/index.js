function damagedOrSunk (board, attacks){
  const hitShipParts = attacks.reduce((acc, attack) => {
    const [x,y] = attack;
    const shipPart = board[board.length - y][x - 1];
    if (shipPart > 0) {
      acc[shipPart] = !acc[shipPart] ? 1 : acc[shipPart] + 1;
    }
    return acc;
  }, {});

  const allShipLength = board.reduce((acc, row) => {
    row.reduce((acc1, c) => {
      if (c !== 0) {
        acc1[c] = !acc1[c] ? 1 : acc1[c] + 1;
      }
      return acc1;
    }, acc);
    return acc;
  }, {});

  const result = Object.keys(allShipLength).reduce((acc, k) => {
    const numHits = hitShipParts[k] ? hitShipParts[k] : 0;
    if (numHits === 0) {
      acc.notTouched++;
      acc.points--;
    } else if (numHits === allShipLength[k]) {
      acc.sunk++;
      acc.points++;
    } else {
      acc.damaged++;
      acc.points += 0.5;
    }
    return acc;
  }, { sunk: 0, damaged: 0, notTouched: 0, points: 0 });
  
  return result;
}