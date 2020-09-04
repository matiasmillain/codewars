function fight(robot1, robot2, tactics) {
  let whoAttack = (robot1.speed >= robot2.speed) ? [robot1, robot2] : [robot2, robot1];
  let won = false;
  let i=0;
  
  let letsFight = (robot1.tactics.length > 0 || robot2.tactics.length > 0);
  
  let totalTactics = robot1.tactics.length + robot2.tactics.length;
  
    while(!won && totalTactics > 0) {
      whoAttack[1].health = whoAttack[1].health - (whoAttack[0].tactics.length - 1 - i >= 0 ? tactics[whoAttack[0].tactics[i]] : 0);
      won = whoAttack[1].health <= 0;
      if (!won) {
        whoAttack[0].health = whoAttack[0].health - (whoAttack[1].tactics.length - 1 - i >= 0 ? tactics[whoAttack[1].tactics[i]] : 0);
        won = whoAttack[0].health <= 0;
      }
      totalTactics--; 
      i++;
    }
  
  if (!letsFight || whoAttack[0].health == whoAttack[1].health) {
    return 'The fight was a draw.'
  } 

  let whoWon = (whoAttack[0].health > whoAttack[1].health) ? whoAttack[0].name : whoAttack[1].name;
  return whoWon + ' has won the fight.';

}