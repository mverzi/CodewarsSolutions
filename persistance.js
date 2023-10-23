/**
 * This function returns multiplicitave persistance, which is the number of times you must multiply the digits in num until you reach a single digit.
 * @param {int} num 
 * @returns int count
 */
function persistence(num) {
    var count = 0
    
    if(num < 10)
      return 0
    while(num >= 10){
      num = [...num.toString()].reduce((p, v) => p * v)
      count++
     }
    return count
  }