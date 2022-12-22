/**
 * This function takes an array of numbers and returns the sum of all the numbers
 * @param {array} numbers 
 * @returns sum of numbers
 */
function sum (numbers) {
    return numbers.length > 0 ? numbers.reduce((a,b) => a+b) : 0
};