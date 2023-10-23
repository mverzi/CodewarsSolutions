/**
 * This function encrypts a string into a fake binary number
 * @param {string} x 
 * @returns number
 */
function fakeBin(x){
    const array = x.split('')
    var result = ''
    array.forEach((num) => {
      if (num >= 5)
        result += '1'
      else
        result += '0'
    });
    return result
  }