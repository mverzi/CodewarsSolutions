var number = function(busStops){
    return busStops.reduce((acc, curr) => parseInt(acc + curr[0]), 0) - busStops.reduce((acc, curr) => parseInt(acc + curr[1]), 0)
  }