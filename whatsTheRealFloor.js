/**
 * This function converts the floor number in the American system to the European system
 * @param {int} n 
 * @returns int
 */
function getRealFloor(n) {
    if(n >= 13){
      return n - 2
    } else if(n > 0){
      return n - 1
    } else {
      return n
    }
  }