function points(games) {
    let points = 0;
    for(let i = 0; i < games.length; i++){
      if(games[i][0] > games[i][2]){
        points += 3;
      }
      else if(games[i][0] === games[i][2]){
        points += 1;
      }
    }
    return points;
  }