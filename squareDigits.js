/**
 * This function squares every digit of a number and concatenates them
 * @param {int} num 
 * @returns int
 */
function squareDigits(num){
    return Number((num + '').split('').map(n => n * n).join(''))
  }