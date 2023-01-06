/**
 * This function reverses an array without using any built in functions
 */
reverse = function(array) {
    let reversed = []
    while(array.length){
      reversed.push(array.pop())
    }
    return reversed
  }