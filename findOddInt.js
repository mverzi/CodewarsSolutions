/**
 * These functions find the integer that appears an odd number of times in the input array
 * @param {int array} arr 
 * @returns int 
 */
function findOdd(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j]){
          count++
        }
      }
      if(count % 2 != 0){
        return arr[i]
      }
    }
  }

function findOddTwo(arr) {
    return arr.reduce((a,b) => a ^ b)
  }