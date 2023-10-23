/**
 * This method removes all vowels from the input string
 * @param {string} string 
 * @returns string w/o vowels
 */
function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');
  }