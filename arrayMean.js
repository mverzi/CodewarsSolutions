/**
 * This function finds the mean of an array
 * @param {num[]} nums 
 * @returns int
 */
var findAverage = function (nums) {
    return nums.reduce((a, b) => a + b) / nums.length
  }