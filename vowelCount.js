/**
 * This function uses regex to count the number of vowels in a given string
 * @param {str} str 
 * @returns num
 */
function getCount(str) {
    return str.replace(/[^aeiou]/g, "").length
  }