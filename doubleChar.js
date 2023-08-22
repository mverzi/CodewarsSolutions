/**
 * This function doubles every character of an input string
 * @param {string} str 
 * @returns newStr -> str with every char doubled
 */
function doubleChar(str) {
    var newStr = ''
    for(var i = 0; i < str.length; i++){
      newStr += str[i] + str[i]
    }
    return newStr
  }