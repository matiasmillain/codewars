function streetFighterSelection(fighters, position, moves) {
  let result = [];
  
  if (moves && moves.length > 0) {
    let auxUpDown = position[0];
    let auxLeftRight = position[1];
    
    return moves.map((e, i) => {
      if (e == 'up') {
        auxUpDown = (auxUpDown == 0) ? auxUpDown : auxUpDown-1;
      } else if (e == 'down') {
        auxUpDown = (auxUpDown == fighters.length-1) ? auxUpDown : auxUpDown+1;
      } else if (e == 'left') {
        auxLeftRight = (auxLeftRight == 0) ? fighters[auxUpDown].length-1 : auxLeftRight-1;
      } else {
        auxLeftRight = (auxLeftRight == fighters[auxUpDown].length-1) ? 0 : auxLeftRight+1;
      }

      return fighters[auxUpDown][auxLeftRight];
    })
  }
    
  return result;
}