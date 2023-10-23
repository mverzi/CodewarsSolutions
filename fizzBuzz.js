/**
 * My solution to the classic fizzbuzz, which returns an array from 1 to n with 
 * multiples of 3 being replaced by fizz, multiples of 5 by buzz, and multiples
 * of both by fizzbuzz
 * @param {int} n 
 * @returns array
 */
function fizzbuzz(n){
    let array = [...Array(n+1).keys()].slice(1)
    for(let i = 0; i < array.length; i++){
      if(array[i] % 5 === 0 && array[i] % 3 === 0){
        array[i] = "FizzBuzz"
      } else if(array[i] % 5 === 0){
        array[i] = "Buzz"
      } else if(array[i] % 3 === 0){
        array[i] = "Fizz"
      }
    }
    return array
  }
  