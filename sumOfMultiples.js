/**
 * This function finds the sum of multiples from n to m, excluding m
 * @param {num} n 
 * @param {num} m 
 * @returns num
 */
function sumMul(n,m){
    var sum = 0
    if(m <= n || n <= 0){
      return "INVALID"
    }
    for(let i = n; i < m; i += n){
      sum += i
    }
    return sum
  }