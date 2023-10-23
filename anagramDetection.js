/**
 * This function determines if two strings are anagrams
 * @param {string} test 
 * @param {string} original 
 * @returns boolean 
 */
var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
  };