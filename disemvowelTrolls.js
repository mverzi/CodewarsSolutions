/**
 * This function removes all vowels from an input string
 * @param {string} str 
 * @returns string w/o vowels
 */
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }