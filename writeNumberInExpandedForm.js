/**
 * This function takes a number and writes in it expanded form
 * Example: 70304 => 70000 + 300 + 4
 * @param {*} num 
 * @returns 
 */
function expandedForm(num) {
    numArray = Array.from(String(num), Number)
    console.log(numArray)
    newValues = []
    
    
    for(let i = 0; i < numArray.length; i++){
      if(numArray[i] != 0){
        newValues.push(numArray[i] * Math.pow(10, numArray.length - 1 - i))
      }
    }
    return newValues.join([separator = ' + '])
  }