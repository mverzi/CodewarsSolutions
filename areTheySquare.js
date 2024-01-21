var isSquare = function(arr){
    return arr.length ? arr.every(num => Math.sqrt(num) % 1 == 0) : undefined
  }